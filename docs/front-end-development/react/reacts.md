# React、React Hooks、TypeScript学习

## 初始化项目

> _npx create-react-app projectName –template typescript_

* 设置绝对路径访问 为./src

```json {2}
{
  "compilerOptions": {
    "baseUrl": "./src",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

## [Prettier](https://www.prettier.cn/docs//install.html)

> _npm i --save-dev --save-exact prettier_
>
> echo {}> .prettierrc.json
>
> echo {}> .prettierignore > \# Ignore artifacts: build coverage 让 Prettier CLI 和编辑器知道哪些文件*不能*格式化
>
> npm install --save-dev husky lint-staged
> npx husky install
> npm set-script prepare "husky install"
> npx husky add .husky/pre-commit "npx lint-staged”
>
> Add {  "lint-staged": {    "**/*": "prettier --write --ignore-unknown"  } } to package.json
>
> install: _npm install --save-dev eslint-config-prettier_
>
> Add " prettier " to package.json file

## [Commitment](https://commitlint.js.org/)

><font color='green'>install</font>: npm install -g @commitlint/cli @commitlint/config-conventional
>
>run: echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
>
>run:npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

## [JSON SERVER](https://github.com/typicode/json-server)

:::tip

install:npm install -g json-server

crate file: 

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

run :json-server --watch db.json

:::
