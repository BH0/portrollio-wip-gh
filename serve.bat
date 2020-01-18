REM Will serve via Github Pages 
REM may need to create new Github repository with Curl + Github API 
git switch -c gh-pages 
git remote add gh-pages https://github.com/bh0/portrollio-test.git
git add index.html styles.css custom.css assets .gitignore serve.bat 
git commit -m "serve via gh-pages"
git push origin gh-pages
REM may need to change branch (back to master) 