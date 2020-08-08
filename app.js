import extend from './extend/index.js'
App = extend.App
Page = extend.Page
Component = extend.Component

App({
  onLaunch: function () {
    // 在app.js中使用 $globalSetData：
    // 如果是同步的，可以直接赋值给当前的globalData
    this.globalData.testData = 'hello';

    // 同步和异步的都可以使用 $globalSetData
    this.$globalSetData({
      testData2: "testData2"
    })
    setTimeout(() => {
      this.$globalSetData({
        testData: "tick1"
      })
    }, 5000)
  },
  globalData: {}
})