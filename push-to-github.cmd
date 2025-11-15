@echo off
REM push-to-github.cmd - run from the repository root (Windows cmd)

echo Checking git repository...
git rev-parse --is-inside-work-tree >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo Not a git repository. Please run this script from the repo root.
  pause
  exit /b 1
)
echo.
echo Current branch:
git branch --show-current
echo.
echo Remote(s):
git remote -v
echo.
echo Changed files:
git status --porcelain
echo.
echo Pushing to origin/main...
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo Push failed or authentication required.
  echo If prompted for credentials, enter your GitHub username and a Personal Access Token (PAT) as the password (if you use HTTPS).
  echo To use SSH instead, set remote to your SSH URL and run this script again:
  echo   git remote set-url origin git@github.com:YourUser/YourRepo.git
  pause
) else (
  echo.
  echo Push successful.
  pause
)
