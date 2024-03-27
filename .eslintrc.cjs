module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  // 规则继承
  extends: [
    // 全部规则默认是关闭的，这个配置项开启推荐规则
    'eslint:recommended',
    // ts语法规则
    'plugin:@typescript-eslint/recommended',
    // vue语法规则
    'plugin:vue/vue3-essential',
    // prettier语法规则
    'plugin:prettier/recommended',
  ],
  // 要为特定类型的文件指定处理器
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  // 解析器 默认解析器Esprima； babel解析器：Babel-ESlint； ts解析器：@typescript-eslint/parser
  parserOptions: {
    ecmaVersion: 'latest', //校验ECMA最新版本
    parser: '@typescript-eslint/parser',
    sourceType: 'module', //
  },
  // ESlint支持使用第三方插件，在使用之前，使用npm安装
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // eslint
    'no-var': 'error', //要求使用let或const 而不是var
    'no-multiple-empty-lines': ['warn', { max: 1 }], //不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', //禁止空余的多行
    'no-useless-escape': 'off', //禁止不必要的转义字符

    //typescript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', //禁止使用
    '@ts-ignore@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-nu1l-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', //禁止使用自定义 Typescript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    //eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', //要求组件名称始终为“_”链接的单词
    'vue/script-setup-uses-vars': 'error', //防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', //不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
}
