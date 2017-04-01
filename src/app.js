import { Provider } from './vendors/wechat-weapp-redux'
import store from './configureStore'

const appConfig = {
    onLaunch: () => {
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log('onLaunch~~~~~~~')
    },
    onShow: () => {
        console.log('onShow~~~~~~~~')
        appConfig.testFunction()
    },
    onHide: () => {
        console.log('onHide~~~~~~~')
    },
    onReady: () => {
        console.log('onReady~~~~~~')
    },
    testFunction: () => {
        console.log('test Function()')
    },
    getUserInfo: (cb) => {
        if (appConfig.globalData.userInfo) {
            typeof cb === 'function' && cb(appConfig.globalData.userInfo)
        } else {
            wx.login({
                success: () => {
                    wx.getUserInfo({
                        success: res => {
                            appConfig.globalData.userInfo = res.userInfo
                            typeof cb === 'function' && cb(appConfig.globalData.userInfo)
                        },
                    })
                },
            })
        }
    },
    globalData: {
        userInfo: null,
    },
    onPullDownRefresh: () => {
        console.log('onPullDownRefresh~~~')
    },
    onReachBottom: () => {
        console.log('onReachBottom~~~')
    },
    onShareAppMessage: () => {
        return {
            title: '自定义分享标题',
            desc: '自定义分享描述',
            path: '/page/user?id=123',
        }
    },
}

App(Provider(store)(appConfig))
