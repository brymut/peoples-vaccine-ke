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
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#993333' />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@vaccineKe" />
                    <meta name="twitter:url" content="https://peoplesvaccine.co.ke" />
                    <meta property="og:image" content="https://peoplesvaccine.co.ke/images/logo-banner.png" />
                    <link rel="canonical" href="https://peoplesvaccine.co.ke" />
                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/icons/favicon.ico' />
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
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
