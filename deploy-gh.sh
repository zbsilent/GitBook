#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run doc:build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
# git rm -r --cached .   
# git add .      
git add -A
git commit -m 'deploy'

#git remote add origin https://github.com/zbsilent/zbsilent.github.io.git
git push -f https://github.com/zbsilent/zbsilent.github.io.git master
#git pull origin mastergit

cd -    