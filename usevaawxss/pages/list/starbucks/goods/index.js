// pages/list/starbucks/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curType:2,//当前高亮
    menuList:[
      {name:'专星送',type:0},
      {name:'咖啡',type:1},
      {name:'门店订单',type:2},
      {name:'星礼包/卡',type:3},
      {name:'活动',type:4},
      {name:'生活馆',type:5},
      {name:'节假日',type:6}
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
   * 菜单切换事件
   */
  changeMenu(e) {
    console.log("触发",e);
    var mtype = e.currentTarget.dataset.type; 
    this.setData({
      curType:mtype
    });
  }
})