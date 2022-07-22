# Usage

包含摹客DT 插件的 TS 类型约束

## 1. 安装

```
npm install @mockplusdev/plugin-typings -D
```
## 2. TS 配置

```
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6"],
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@mockplusdev"
    ]
  }
}

```