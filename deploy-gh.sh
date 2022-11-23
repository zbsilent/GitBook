#!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
 set -e

# 生成静态文件
npm run doc:build

echo '开始复制........'
# 进入生成的文件夹
cp -r build ../
echo '复制完成........切换目录.....'
cd /Users/zbsilent/developer/build  

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
time=$(date "+%Y-%m-%d %H:%M:%S")
echo '切换目录.....提交代码.....'

xx="deploy at $time"
 
echo $xx  
#git init
# git rm -r --cached .   
# git add .      
git add -A
git commit -m "${xx}"

# #git remote add origin https://github.com/zbsilent/zbsilent.github.io.git
# git push -f https://github.com/zbsilent/zbsilent.github.io.git master
git push origin master

cd -    