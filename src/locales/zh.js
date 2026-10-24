import mission from '../features/mission/locales/zh.js'
import about from '../features/about/locales/zh.js'
import leadership from '../features/leadership/locales/zh.js'
import press from '../features/press/locales/zh.js'
import faq from '../features/faq/locales/zh.js'
import donatePage from '../features/donate/locales/zh.js'
import financials from '../features/financials/locales/zh.js'
import terms from '../features/terms/locales/zh.js'
import privacy from '../features/privacy/locales/zh.js'
import campus from '../features/campus/locales/zh.js'
import museum from '../features/museum/locales/zh.js'
import programsPage from '../features/programs/locales/zh.js'
import volunteer from '../features/volunteer/locales/zh.js'

export default {
  nav: {
    visit: '参观',
    stories: '故事',
    mission: '使命',
    programs: '项目',
    about: '关于我们',
    donate: '捐款',
  },
  hero: {
    tag: '现已开放',
    title: '一个将变革带回家园的地方。',
    words: ['园区', '博物馆', '艺术', '体育', '活动'],
    lede: '漫步校园，探索展览，参与为各年龄段邻里量身打造的项目。',
    cta: '规划您的行程',
  },
  visit: {
    heading: '参观',
    theCampus: '中心园区',
    theCampusText: '花园、小径和开阔的草坪，供访客聚集、休息和欣赏周边社区美景。',
    theCampusLink: '参观园区',
    theMuseum: '博物馆',
    theMuseumText: '生动的互动展览与珍贵展品，讲述塑造这个社区的先驱们的故事。',
    theMuseumLink: '探索展览',
  },
  experience: {
    heading: '体验中心',
    item1Title: '项目与活动',
    item1Text: '涵盖艺术、体育、美食与公民参与项目，让各个年龄段的人们欢聚一堂、共同创造。',
    item1Link: '了解更多',
    item2Title: '志愿服务',
    item2Text: '奉献您的宝贵时间参与导览、花园养护与社区活动，助力园区运营。',
    item2Link: '了解更多',
    item3Title: '成为会员',
    item3Text: '按月捐助，支持青年领袖、本地解决方案以及更包容美好的未来。',
    item3Link: '探索会员权益',
  },
  mission,
  about,
  leadership,
  press,
  faq,
  donatePage,
  financials,
  terms,
  privacy,
  campus,
  museum,
  programsPage,
  volunteer,
  stories: {
    heading: '来自领袖与邻里的故事。',
    viewAll: '查看所有故事',
    items: [
      {
        cats: ['项目', '教育'],
        title: '教师齐聚一堂规划新一年的课后俱乐部',
        text: '来自十二所学校的教育工作者分享了想法，交流了教案，并制定了未来几个月的目标。'
      },
      {
        cats: ['领袖'],
        title: '一位前护士将街角空地改造成共享厨房',
        text: '一位邻里如何建立起让家庭共同烹饪、学习和交流食谱的空间。'
      },
      {
        cats: ['可持续发展'],
        title: '青年组织者推动所在城市植树一万棵',
        text: '由学生主导的行动赢得了市政府的资金支持和明确的实施时间表。'
      },
      {
        cats: ['项目', '青年'],
        title: '暑期学员记录邻里对地方政府的期望与心声',
        text: '四十名学员在全市范围内进行了访谈记录，并在公开论坛上分享了成果。'
      },
      {
        cats: ['故事'],
        title: '绘制横跨六十一个城市的服务之夏地图',
        text: '一百名学生，一个夏天，以及他们共同铸就的成长版图。'
      }
    ]
  },
  programs: {
    heading: '项目',
    viewAll: '查看所有项目',
    items: [
      { name: '青年导师发展联盟', tag: '12–24岁' },
      { name: '女童教育国际网络', tag: '全球' },
      { name: '社区领袖培育计划', tag: '研习班' },
      { name: '研究生奖学金计划', tag: '毕业生' },
      { name: '高中游学奖学金', tag: '高中生' },
      { name: '先锋主题演讲系列', tag: '公开活动' },
      { name: '青年薪资就业队伍', tag: '带薪工作' },
      { name: '校友交流联络网络', tag: '注册会员' },
    ],
  },
  donate: {
    heading: '立即捐助',
    text: '您的善举帮助我们将希望化为实际行动，让更多人参与这项有意义的事业。',
    btn: '立即捐赠',
  },
  signup: {
    heading: '成为内部会员',
    desc: '获取门票发售日期、活动通知以及来自积极改变社区的人们的故事。',
    firstName: '名',
    lastName: '姓',
    email: '电子邮箱',
    agree: '我同意服务条款。',
    disclaimer: '演示表单：您的信息仅保存在此浏览器中，不会发送到任何地方。',
    submit: '立即注册',
    errName: '请输入您的姓氏和名字。',
    errEmail: '请输入有效的电子邮件地址。',
    errAgree: '请勾选方框以同意条款。',
    success: '感谢您的注册！我们会及时与您分享最新消息。',
    errDuplicate: '该电子邮箱已注册。',
    errGeneric: '出现问题，请重试。',
    submitting: '正在注册…',
  },
  footer: {
    visit: '参观指南',
    address: ['Tolaka 街，暹粒市 171201'],
    hours: [
      { name: '园区', lines: ['每日 上午 6:00 – 晚上 9:00'] },
      { name: '博物馆', lines: ['周一 下午 1:00 – 晚上 8:00', '周二至周日 上午 10:00 – 下午 5:00'] },
      { name: '图书馆分馆', lines: ['周一、周三 中午 12:00 – 晚上 8:00', '周二、周四 上午 10:00 – 下午 6:00', '周五、周六 上午 9:00 – 下午 5:00', '周日 下午 1:00 – 5:00'] },
    ],
    columns: [
      {
        title: '关于我们',
        links: ['关于基金会', '使命与价值观', '领导团队', '媒体中心', '常见问题', '财务公示']
      },
      {
        title: '参与其中',
        links: ['捐赠方式', '邮件更新', '举办活动', '官方商店', '加入我们', '志愿服务', '联系我们']
      },
      {
        title: '保持联系',
        links: ['Instagram', 'YouTube', 'Facebook', 'LinkedIn', 'X']
      },
    ],
    note: '演示占位内容。请替换为您的真实文本、图片及链接。',
    terms: '服务条款',
    privacy: '隐私政策',
  },
  announcement: {
    highlight: '门票数量有限。',
    text: '每月首个周一上午 9:00 开放新日期预订。',
    link: '获取通知',
  },
}

