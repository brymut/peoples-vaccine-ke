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
