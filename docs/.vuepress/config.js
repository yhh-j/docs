module.exports = {
    title: "YHH",
    description: "yhh笔记",
    head: [
        ['meta', { name: 'author', content: 'yhh' }],
        ['meta', { name: 'keywords', content: 'vue初学' }]
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
            "/css/": [
                'c-a',
                'c-b',
                'c-c'
            ]
        }
    }
}
