REM Will serve via Github Pages 
REM This should be the only file which touches the GH Pages branch 
git switch -c gh-pages 
git remote add gh-pages https://github.com/bh0/portrollio-test.git
git add index.html styles.css custom.css assets .gitignore serve.bat 
git commit -m "serve via gh-pages"
git push origin gh-pages