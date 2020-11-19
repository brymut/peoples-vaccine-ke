import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

const APP_NAME = '#PeoplesVaccineKE'
// const APP_DESCRIPTION = `The #PeoplesVaccineKE is a nationwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine.`


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/icons/favicon.ico' />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    < script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            });
                            `,
                        }}
                    />
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
                    < script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.twttr = (function(d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0],
                                t = window.twttr || {};
                                if (d.getElementById(id)) return t;
                                js = d.createElement(s);
                                js.id = id;
                                js.src = "https://platform.twitter.com/widgets.js";
                                fjs.parentNode.insertBefore(js, fjs);
                              
                                t._e = [];
                                t.ready = function(f) {
                                    t._e.push(f);
                                };
                                return t;
                              }(document, "script", "twitter-wjs"));
                            `,
                        }}
                    />
                </Head >
                <body className="antialiased" style={{ backgroundColor: '#a0d6dc', fontFamily: 'Montserrat' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

export default MyDocument
