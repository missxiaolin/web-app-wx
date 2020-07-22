export default {
  App: {
    onLaunch(){
      console.log(`打开了小程序`)
    }
  },
  Page: {
    onLoad(){
      console.log(`打开了页面 ${this.__route__}`)
    }
  }
}