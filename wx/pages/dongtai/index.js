// pages/dongtai/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "昌昌",
    src: ''
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('https://m801.music.126.net/20190703103038/f47a91a64d6d18d1b48d43555733b5eb/jdyyaac/5258/0253/065d/e205b9ff5c590b2296b017dd31b1e17e.m4a')
    this.audioCtx.play()
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  changeName: function(e) {
    // sent data change to view
    this.setData({
      name: '透你猴子'
    })
  },
  changeNames: function(e) {
    // sent data change to view
    this.setData({
      name: '因缺思厅'
    })
  },
  goIndex: function(e) {
    console.log(666)
    wx.switchTab({
      url: '../index/index'
    })
  }
})