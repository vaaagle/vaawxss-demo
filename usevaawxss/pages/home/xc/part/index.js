// pages/home/xc/part/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex:0,//当前轮播的图片下标
    swiperImg:[
      {img:'/images/good-2.jpg'},
      {img:'/images/good-3.jpg'},
      {img:'/images/good-4.jpg'}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * 轮播图改变事件
   */
  swiperChange(e) {
    console.log("e detail:",e)
    //当前轮播的下标
    var inx = e.detail.current;//从0开始
    //赋值给curIndex
    this.setData({
      curIndex:inx
    });
    console.log("当前下标：",this.data.curIndex)
  }
})