const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
module.exports = {
    title: "YHH",
    description: "yhh笔记",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/hero.png',
        nav: navConf,
        sidebar: sidebarConf,
    }
}
