call npx -y create-next-app@latest temp_app --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --no-turbopack > install.log 2>&1
robocopy temp_app . /E /MOVE /nfl /ndl >> install.log 2>&1
rmdir temp_app /s /q >> install.log 2>&1
echo DONE >> install.log
