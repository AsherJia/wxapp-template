import { connect } from '../../vendors/wechat-weapp-redux.js'
import { testT1 } from './actions/index.js'

const app = getApp()
let pageConfig = {
    data: {
        motto: 'Hello World',
        userInfo: {},
        componentList: [{
            name: 'scroll-view',
            url: '../components/scrollView/scrollView'
        }, {
            name: 'swiper',
            url: '../components/swiperView/swiperView'
        }, {
            name: 'base',
            url: '../components/base/base'
        }, {
            name: 'form',
            url: '../components/form/form'
        }, {
            name: 'medium',
            url: '../components/medium/medium'
        }],
    },

    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    onLoad: function () {
        console.log('onLoad')
        this.testT1("Asher~~~~~~~")
        const that = this
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo
            })
            console.log('UserInfo: ', userInfo)
        })
    },

    onReady: function() {
        console.log('onReady~~~~~~')
    },

    onPullDownRefresh: function() {
        console.log('onPullDownRefresh~~~~~~~')

        setTimeout(() => {
            wx.stopPullDownRefresh()
            console.log('setTineout finished~~~')
        }, 1000)
    },

    go: function(event) {
        console.log('url: ', event.target.dataset.url)
        wx.navigateTo({
            url: event.target.dataset.url,
            success: function(ss){
                console.log('success ', ss)
            },
            fail: function(fail) {
                console.log('fail ', fail)
            },
            complete: function(complete){
                console.log('complete ', complete)
            }
        })
    }
}

const mapStateToData = state => ({
    index: state.index
})

const mapDispatchToPage = dispatch => ({
    testT1: msg => dispatch(testT1(msg))
})

Page(connect(mapStateToData, mapDispatchToPage)(pageConfig))
