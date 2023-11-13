// pages/wrm/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,//吸顶默认隐藏
    time:'',//用于存储时间显示
    left:0,//默认0 
    bg1:"",//背景图1
    bg2:'',//背景图2
    curIndex:0,//记录当前下标
    swiperList:[
      {
        top:'/images/bg-top-0.png',
        center:'/images/bg-c-0.png',
        bottom:'/images/bg-bottom-0.png'
      },
      {
        top:'/images/bg-top-1.png',
        center:'/images/bg-c-1.png',
        bottom:'/images/bg-bottom-1.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //由于默认的bg1 和 bg2是空的，所以页面开始的时候没有图片，需要等第一次轮播事件
    //所以需要我们在页面加载的时候给它初始化
    var self = this;
    this.setData({
      bg1:self.data.swiperList[0]['center'],
      bg2:self.data.swiperList[0]['bottom']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面显示的时候就需要开始计算显示的时间
    // 而且需要每一秒算一下，所以需要加个定时器
    var self = this;
    //写错了不是用这个，这个只会执行一次
    setInterval(() => {
      self.getTime();
    }, 1000);
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
   *  轮播事件
   */
  swiperchange(e) {
    var self = this;
    var idx = e.detail.current;
    this.setData({
      curIndex:idx,
      bg1:self.data.swiperList[idx]['top'],
      bg2:self.data.swiperList[idx]['bottom']
    });
  },

  /**
   * 
   * @param {*} e 
   */
  scroll(e) {
    console.log("e",e);
    var scrollLeft = e.detail.scrollLeft;
    var scrollWidth = e.detail.scrollWidth;
    var pers = Math.ceil(scrollLeft/scrollWidth*100);
    this.setData({
      left:pers
    });
  },

  /**
   * 计算当前时间
   */
  getTime() {
    var t = new Date();
    var h = t.getHours();//时
    var m = t.getMinutes();//分
    var s = t.getSeconds();//秒
    //小于一位数的话需要自己补0，如6应该补位06
    if(h<10){
      h = "0" + h;
    }
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = "0" + s;
    }
    var mtime = h + ":" + m + ":" + s;
    // 不需要返回，直接修改用于存储时间显示的值，需要定义一个
    this.setData({
      time:mtime
    });
  },
  onPageScroll(e){
    var scrollTop = e.scrollTop;//与顶部距离
    //493滚到这个位置的时候差不多可以吸顶了
    // 984.1560668945312这个位置，完美
    if(scrollTop >= 984.156){
      //吸顶显示
      //性能问题，需要先判断是否需要变，防止每次都需要改
      if(this.data.isShow == false){
        this.setData({
          isShow:true
        });
      }
      
    }else{
      //隐藏
      if(this.data.isShow == true){
        this.setData({
          isShow:false
        });
      }
    }
  }
})