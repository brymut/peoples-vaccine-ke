const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: false
    },
    async redirects() {
        return [
            {
                source: '/youtube',
                destination: 'https://www.youtube.com/channel/UCUUxFBPmi5FfC4XAsTikKrQ',
                permanent: false,
            },
            {
                source: '/youtube/locating-grief',
                destination: 'https://www.youtube.com/watch?v=NyZpIzcbxCs',
                permanent: true,
            }
        ]
    },
})
