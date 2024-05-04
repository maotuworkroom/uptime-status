// 配置
window.Config = {

  // 显示标题
  SiteName: '查询小难状态（中央Service控制面板）Public Status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2535041-d549dbf97e318aeefb03f67b',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'GPT主站',
      url: 'https://bing.xinu.ink/'
    },
    {
      text: '晴女の天气小站',
      url: 'https://nanxmas.github.io/Weather/'
    },
    {
      text: 'API',
      url: 'https://zt.xinu.ink'
    },
  ],
};
