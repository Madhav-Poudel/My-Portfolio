import fs from 'fs-extra';
import { execSync } from 'child_process';
import path from 'path';

async function main() {
  const cwd = process.cwd();
  const candidates = ['dist', 'build', 'public'];
  const srcName = candidates.find((d) => fs.existsSync(path.join(cwd, d)));
  if (!srcName) {
    console.error('No build folder found. Tried: ' + candidates.join(', '));
    process.exit(1);
  }

  const src = path.join(cwd, srcName);
  const dest = path.join(cwd, 'docs');

  console.log(`Copying build output from '${srcName}' → 'docs'...`);

  try {
    // remove existing docs folder
    await fs.remove(dest);
    // copy build output
    await fs.copy(src, dest, { recursive: true });
  } catch (err) {
    console.error('Error copying files:', err);
    process.exit(2);
  }

  try {
    // Stage all changes (docs plus any package/script/.gitignore mods)
    execSync('git add -A', { stdio: 'inherit' });

    // Check if there are staged changes to commit
    const staged = execSync('git diff --cached --name-only').toString().trim();
    if (!staged) {
      console.log('No staged changes to commit.');
    } else {
      const message = `Deploy: copy ${srcName} → docs (${new Date().toISOString()})`;
      // commit the staged changes
      execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
    }

    // Push to the main branch (adjust remote/branch if needed)
    try {
      execSync('git push origin main', { stdio: 'inherit' });
    } catch (pushErr) {
      console.warn('Initial push failed — attempting to pull --rebase then push again.');
      try {
        execSync('git pull --rebase origin main', { stdio: 'inherit' });
        execSync('git push origin main', { stdio: 'inherit' });
      } catch (err2) {
        console.error('Push failed after pull/rebase:', err2);
        throw err2;
      }
    }

    console.log('Deployment to docs complete.');
  } catch (err) {
    console.error('Git operation failed:', err);
    process.exit(3);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(99);
});
