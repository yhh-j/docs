const moment = require('moment');
module.exports = {
    base: "/docs/",
    title: "YHH",
    description: "yhh笔记",
    head: [
        ['meta', { name: 'author', content: 'yhh' }],
        ['meta', { name: 'keywords', content: 'vue初学' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLLL")
                }
            }
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
