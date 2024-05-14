export default defineAppConfig({
  pages: [
    'pages/index/index', // 首页
    'pages/message/index', // 消息页
    'pages/mine/index', // 个人页
    'pages/information/index', // 健康资讯页
    'pages/queueQuery/index', // 队列查询页
    'pages/checkIn/index', // 在线签到
    'pages/reportQuery/index', // 报告查询
    'pages/checkInStatus/index', // 签到状态
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#09244B',
    selectedColor: '#3DBEDF',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home_s.png',
      },
      {
        pagePath: 'pages/message/index',
        text: '消息',
        iconPath: 'assets/tabbar/message.png',
        selectedIconPath: 'assets/tabbar/message_s.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine_s.png',
      },
    ],
  },
});
