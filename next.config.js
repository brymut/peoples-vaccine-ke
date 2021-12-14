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
                destination: 'https://zoom.us/webinar/register/WN_2lvmlLxbSVyM42EADC7Xsw',
                permanent: false,
            },
            {
                source: '/vaccine-economics',
                destination: 'https://zoom.us/webinar/register/WN_Nu1yy9nCSoSUYTZa1xWJGw',
                permanent: false
            },
            {
                source: '/memories-of-exclusion',
                destination: 'https://zoom.us/webinar/register/WN_p5xPHTNdR3yLxb0CAQDZ4g',
                permanent: false
            },
            {
                source: '/tracing-just-recoveries',
                destination: 'https://zoom.us/webinar/register/WN_kCJNa91vTguj0oYmR-CSeg',
                permanent: false
            },
            {
                source: '/abolition-as-an-imperative',
                destination: 'https://zoom.us/webinar/register/WN_PpaP1pK4Tgae2It7rRqYJQ',
                permanent: false
            },
        ]
    },
})
