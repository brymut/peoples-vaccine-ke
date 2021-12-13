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
            },
            {
                source: '/africa-roundtable',
                destination: 'https://youtu.be/_THdOYKPfb4',
                permanent: true,
            },
            {
                source: '/developing-world',
                destination: 'https://zoom.us/webinar/register/WN_diQv59IKSl6fqjgLC29xkA',
                permanent: false,
            },
            {
                source: '/vaccine-geopolitics',
                destination: 'https://zoom.us/j/97776809539?pwd=RVRQSzFkWjdpemN3WFBwYzNKdjJEQT09GH',
            }
        ]
       }
})
