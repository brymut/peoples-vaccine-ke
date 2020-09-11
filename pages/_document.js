import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
                </Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177620241-1"></script>
                <script type='text/javascript'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', 'UA-177620241-1');
                    `}
                </script>
                <body className="antialiased" style={{ backgroundColor: '#A7E0F1', fontFamily: 'PT Sans Narrow' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
