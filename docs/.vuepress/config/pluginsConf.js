const moment = require('moment');
module.exports = {
    plugins: {

        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                moment.locale("zh-cn")
                return moment(timestamp).format("LLLL")
            }
        },


        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },


        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'yhh-j',
            repo: 'docs',
            clientId: '22eb974a5b2060987158',
            clientSecret: 'fe4e9e28aa6c6af438a05383a7be8e01be22e59e',
            // autoCreateIssue: true,
        },


        '@vuepress/back-to-top': true,


        '@vuepress/google-analytics': {

            'ga': 'G-N507NZDCS5' // UA-00000000-0
        },


    },
}