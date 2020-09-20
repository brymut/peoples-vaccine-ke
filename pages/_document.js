import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

const APP_NAME = '#PeoplesVaccineKE'
const APP_DESCRIPTION = `The #PeoplesVaccineKE is a nationwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine.`


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name='application-name' content={APP_NAME} />
                    <meta name="Description" content={APP_DESCRIPTION} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name="robots" content="index, follow" />
                    <meta name='theme-color' content='#993333' />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@vaccineKe" />
                    <meta property="og:image" content="https://peoplesvaccine.co.ke/images/logo-banner.png" />
                    <link rel="canonical" href="https://peoplesvaccine.co.ke" />
                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/icons/favicon.ico' />
                    <link defer href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    <link defer href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    <link defer href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
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
