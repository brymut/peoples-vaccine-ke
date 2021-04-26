const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: true
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
            },
            {
                source: '/publications/a-peoples-vaccine-to-rebuild-our-economy',
                destination: '/publications/a-people-s-vaccine-to-rebuild-our-economy',
                permanent: true,
            }
        ]
    },
})
