// index.js
Component({
  data: {
    isShow_index: true,
    isShow_playing: false,
    isShow_me: false,
    selected: 0, //首页
    color: "#8D8D8D",
    selectedColor: "#C62F2F",
    list: [{
      pagePath: "/pages/find/find",
      iconPath: "/images/music.png",
      selectedIconPath: "/images/selected-music.png",
      text: "乐库"
    }, {
      pagePath: "/pages/friend/friend",
      iconPath: "/images/selected-playing.png",
      selectedIconPath: "/images/playing.png",
      text: ""
    },
    {
      pagePath: "/pages/mine/mine",
      iconPath: "/images/me.png",
      selectedIconPath: "/images/selected-me.png",
      text: "我的"
    }]
  },

  methods: {

    switchTab_index: function () {
      this.setData({
        isShow_index: true,
        isShow_me: false,
        isShow_playing: false
      })
      wx.switchTab({
        url: '/pages/find/find'
      })
 
    },

    switchTab_playing: function () {
      this.setData({
        isShow_playing: true,
        isShow_index: false,
        isShow_me: false
      })
      wx.switchTab({
        url: '/pages/friend/friend'
      })
    
    },

    switchTab_me: function () {
      this.setData({
        isShow_me: true,
        isShow_playing: false,
        isShow_index: false
      })
      wx.switchTab({
        url: '/pages/mine/mine'
      })
 
    }
  }
})