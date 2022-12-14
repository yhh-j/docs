const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
// const sidebarConf = require('./config/sidebarConf');
module.exports = {
    lang: 'zh-CN',
    title: "YHH",
    description: "YHH的个人笔记",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: 'hero.jpg',
        lastUpdated: '上次更新时间',
        nav: navConf,
        // sidebar: sidebarConf,
    }
}
