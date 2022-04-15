#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 生成静态文件
npm run build:docs

# 进入生成的文件夹
cd ./dist


git init
git add -A
git commit -m '部署 github'

# 如果发布到 https://<USERNAME>.github.io
#git push -f https://github.com/lvxiaowu/cli-docs.git  master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lvxiaowu/react-hooks-docs.git master:gh-pages


cd -