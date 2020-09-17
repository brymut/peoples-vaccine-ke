const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: true
    },
    async headers() {
        return [
            {
                source: '/contact',
                headers: [
                    {
                        key: 'Set-Cookie',
                        value: 'SameSite=None;Secure',
                    },
                ],
            },
        ]
    },
})

module.exports = {
    async headers() {
        return [
            {
                source: '/about',
                headers: [
                    {
                        key: 'x-custom-header',
                        value: 'my custom header value',
                    },
                    {
                        key: 'x-another-custom-header',
                        value: 'my other custom header value',
                    },
                ],
            },
        ]
    },
}