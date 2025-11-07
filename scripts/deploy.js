#!/usr/bin/env node

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logStep(step, message) {
  log(`\n${colors.bright}[${step}]${colors.reset} ${colors.cyan}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`${colors.green}✓${colors.reset} ${message}`);
}

function logError(message) {
  log(`${colors.red}✗${colors.reset} ${message}`, colors.red);
}

function logWarning(message) {
  log(`${colors.yellow}⚠${colors.reset} ${message}`, colors.yellow);
}

function exec(command, options = {}) {
  try {
    execSync(command, { stdio: "inherit", ...options });
    return true;
  } catch (error) {
    return false;
  }
}

function execSilent(command) {
  try {
    return execSync(command, { encoding: "utf-8" }).trim();
  } catch (error) {
    return null;
  }
}

async function main() {
  log("\n🚀 Starting deployment process...\n", colors.bright);

  // Check if we're on main branch
  logStep("1/8", "Checking git branch...");
  const currentBranch = execSilent("git branch --show-current");
  if (currentBranch !== "main") {
    logWarning(`You are on branch "${currentBranch}", not "main"`);
    logWarning('Deployment should typically be done from "main" branch');

    // Ask user if they want to continue
    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await new Promise((resolve) => {
      rl.question("Continue anyway? (y/N): ", (answer) => {
        rl.close();
        resolve(answer.toLowerCase());
      });
    });

    if (answer !== "y" && answer !== "yes") {
      log("\n❌ Deployment cancelled\n", colors.red);
      process.exit(1);
    }
  } else {
    logSuccess(`On main branch`);
  }

  // Check for uncommitted changes
  logStep("2/8", "Checking for uncommitted changes...");
  const status = execSilent("git status --porcelain");
  if (status) {
    logWarning("You have uncommitted changes:");
    console.log(status);

    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await new Promise((resolve) => {
      rl.question("\nCommit these changes now? (Y/n): ", (answer) => {
        rl.close();
        resolve(answer.toLowerCase());
      });
    });

    if (answer === "n" || answer === "no") {
      log("\n❌ Deployment cancelled - please commit your changes first\n", colors.red);
      process.exit(1);
    }

    // Add all changes
    logStep("2b/8", "Adding all changes...");
    if (!exec("git add .")) {
      logError("Failed to add changes");
      process.exit(1);
    }
    logSuccess("All changes added");

    // Get commit message
    const rl2 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const commitMessage = await new Promise((resolve) => {
      rl2.question('\nEnter commit message (or press Enter for "Update"): ', (message) => {
        rl2.close();
        resolve(message || "Update");
      });
    });

    // Commit
    logStep("2c/8", "Committing changes...");
    if (!exec(`git commit -m "${commitMessage}"`)) {
      logError("Failed to commit changes");
      process.exit(1);
    }
    logSuccess("Changes committed");
  } else {
    logSuccess("No uncommitted changes");
  }

  // Run TypeScript type checking
  logStep("3/8", "Running TypeScript type check...");
  if (!exec("pnpm typecheck")) {
    logError("TypeScript type check failed");
    log("\n❌ Deployment cancelled - please fix TypeScript errors first\n", colors.red);
    process.exit(1);
  }
  logSuccess("TypeScript type check passed");

  // Run ESLint
  logStep("4/8", "Running ESLint...");
  if (!exec("pnpm lint")) {
    logError("ESLint check failed");
    log("\n❌ Deployment cancelled - please fix linting errors first\n", colors.red);
    process.exit(1);
  }
  logSuccess("ESLint check passed");

  // Run Prettier check
  logStep("5/8", "Checking code formatting...");
  if (!exec("pnpm format:check")) {
    logWarning("Code formatting issues found");
    log("\nAuto-fixing formatting...");
    if (!exec("pnpm format")) {
      logError("Failed to format code");
      process.exit(1);
    }
    logSuccess("Code formatted successfully");

    // Stage formatted files
    log("Staging formatted files...");
    if (!exec("git add .")) {
      logError("Failed to stage formatted files");
      process.exit(1);
    }

    // Commit formatting changes if any
    const hasChanges = execSilent("git diff --cached --name-only");
    if (hasChanges) {
      if (!exec('git commit -m "style: auto-format code"')) {
        logError("Failed to commit formatting changes");
        process.exit(1);
      }
      logSuccess("Formatting changes committed");
    }
  } else {
    logSuccess("Code formatting is correct");
  }

  // Build
  logStep("6/8", "Building project...");
  if (!exec("pnpm build")) {
    logError("Build failed");
    log("\n❌ Deployment cancelled - build failed\n", colors.red);
    process.exit(1);
  }
  logSuccess("Build successful");

  // Push to GitHub (main repository only)
  logStep("7/8", "Pushing to GitHub...");
  log("Pushing to PhysioVio/Physio-Vio-Website...");
  
  // Get the current remote URL for origin
  const originUrl = execSilent("git remote get-url origin");
  
  // Push directly to PhysioVio repository
  if (!exec("git push https://github.com/PhysioVio/Physio-Vio-Website.git main")) {
    logError("Failed to push to PhysioVio repository");
    log("\n❌ Deployment failed - could not push to GitHub\n", colors.red);
    process.exit(1);
  }
  logSuccess("Pushed to PhysioVio/Physio-Vio-Website");

  // Wait for GitHub Actions
  logStep("8/8", "Triggering GitHub Actions deployment...");
  logSuccess("Push successful - GitHub Actions will now deploy your site");

  // Print success message
  log("\n" + "=".repeat(60), colors.green);
  log("🎉 Deployment initiated successfully!", colors.bright);
  log("=".repeat(60) + "\n", colors.green);

  log(`${colors.cyan}What happens next:${colors.reset}`);
  log("1. GitHub Actions workflow is triggered");
  log("2. Your site will be built and deployed to GitHub Pages");
  log("3. This usually takes 2-3 minutes");
  log("");
  log(`${colors.cyan}Check deployment status:${colors.reset}`);
  log("https://github.com/PhysioVio/Physio-Vio-Website/actions");
  log("");
  log(`${colors.cyan}Your site will be available at:${colors.reset}`);
  log("https://physiovio.github.io/Physio-Vio-Website/");
  log("");
}

main().catch((error) => {
  logError(`Unexpected error: ${error.message}`);
  process.exit(1);
});
