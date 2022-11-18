const moment = require('moment');
module.exports = {
    title: "YHH",
    description: "yhh笔记",
    head: [
        ['meta', { name: 'author', content: 'yhh' }],
        ['meta', { name: 'keywords', content: 'vue初学' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/icon-192x192.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLLL")
                }
            },
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Group1', items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },]
                    },
                    {
                        text: 'Group2', items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/css/': [
                'c-a.md',
                'c-b.md',
                'c-c.md'
            ]
        }
    }
}
