module.exports = {
  extends: ['@commitlint/config-conventional'],
  //校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', //新特性 新功能
        'fix', //修改bug
        'docs', //文档修改
        'style', //代码格式修改，注意不是css修改
        'refactor', //代码重构
        'perf', //优化相关，提升相关
        'test', //测试用例修改
        'chore', //其他修改。比如改变构建流程、或者增加依赖库、工具等
        'revert', //回滚到上一个版本
        'build', //编译相关的修改，例如发布版本，对项目构建或者依赖的改动
      ]
    ],
    'type-csae': [0],
    'type-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  },
}