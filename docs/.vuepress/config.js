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
        docsRepo: 'yhh-j/docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑文档',
        nav: navConf,
        // sidebar: sidebarConf,
    }
}
