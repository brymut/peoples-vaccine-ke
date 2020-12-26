import Navigation from '../components/Navigation'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js";
import Layout from '../components/Layout';
import Image from "next/image"



export async function getStaticProps() {
    const demands = []
    let teamDescription = ''
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })

    await client.getItems('demands')
        .then(data => {
            data.data.map(demand => {
                demands.push(demand)
            })
        })
        .catch(error => console.log(error))

    await client.getItems('theteam')
        .then(data => {
            data.data.map(team => {
                teamDescription = team.team_text_swahili
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            demands,
            teamDescription
        },
        revalidate: 1,
    }
}

export default function SwahiliPage({ demands, teamDescription, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const logoAttributionMarkup = { __html: '<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="peoplesvaccine.co.ke/">The PeoplesVaccineKE logo and posters</a> by <span property="cc:attributionName">coconutsakura</span> is licensed under <a style="display:flex;"rel="license" href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img alt="creative commons logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img alt="creative commons attribution logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img alt="creative commons non-commercial logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /></a></p>' }
    const pictureAttributionMarkup = { __html: '<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="peoplesvaccine.co.ke/">Mathare photos for #PeoplesVaccineKE </a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="peoplesvaccine.co.ke">The #PeoplesVaccineKE campaign</a> is licensed under <a style="display:flex;" rel="license" href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img alt="creative commons logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img alt="creative commons attribution logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img alt="creative commons non-commercial logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /></a></p>' }
    const seo = {
        title: "Matakwa - #PeoplesVaccineKE",
        description: "#PeoplesVaccineKE ni kampeni ya ulimwenguni pote kushinikiza usambazaji wa bure na ufikiaji bila masharti kwa chanjo ya COVID-19.",
        canonical: "https://peoplesvaccine.co.ke/swahili",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/swahili',
            title: 'Matakwa - #PeoplesVaccineKE',
            description: '#PeoplesVaccineKE ni kampeni ya ulimwenguni pote kushinikiza usambazaji wa bure na ufikiaji bila masharti kwa chanjo ya COVID-19.',
            images: [
                {
                    url: 'https://peoplesvaccine.co.ke/images/logo-banner.jpg',
                    width: 800,
                    height: 292,
                    alt: 'Og Image Alt',
                },
                {
                    url: 'https://peoplesvaccine.co.ke/images/logo-banner.png',
                    width: 1244,
                    height: 454,
                    alt: 'Og Image Alt Second',
                }
            ],
        }
    }
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <div className="mt-10 lg:mt-6 lg:mx-32 lg:flex lg:items-center">
                <>
                    <p className="text-center mx-8 lg:w-2/6 lg:ml-32"> #PeoplesVaccineKE ni kampeni ya ulimwenguni pote kushinikiza usambazaji wa bure na ufikiaji bila masharti kwa chanjo ya COVID-19.

        <br /><br />
        Tunaamini kwamba chanjo ya COVID-19 inapaswa kutambuliwa kama faida ya umma na ufikiaji unapaswa kuwa kwa masilahi ya watu wote kila mahali, sio wale tu ambao wanaweza kuimudu.
        </p>
                </>
                <Image
                    src="/images/homepage.jpg"
                    alt="homepage peoplesvaccine image"
                    width={390}
                    height={520}

                />
            </div>
            <p className="text-center mx-8 mt-4 lg:mx-56 lg:mt-12">Lengo la kampeni hii ni kuhakikisha mtiririko wa bure na upatikanaji wa chanjo ya COVID-19. Mahitaji haya yamewekwa kuunda utaratibu unaolengwa na jamii kuhakikisha kila mmoja wetu anaweza kupata chanjo bila malipo au masharti, kila mahali ulimwenguni na kujifunza kutoka kwa wanaharakati wa 'chanjo ya watu' (People’s vaccine) ulimwenguni kote, kwa nguvu na lazima tuutekeleza hatua hizi nchini Kenya.
      <br /><br />
      Tunakusudia kuimarisha jamii zetu zote na kuhakikisha kuwa chanjo hii sio tu kwa jamii ya kisiasa, wasomi na wale ambao wanaweza kuitunukia, inapaswa kuwa ya kila mtu ilhali ya cheo.</p>
            <section id='demands' className="flex flex-col items-center mt-8">
                <div>
                    <h1 style={{
                        color: '#993333',
                        fontFamily: 'Montserrat',
                        fontWeight: '900',
                        fontStyle: 'italic',
                        textAlign: 'center'
                    }} className="text-5xl mt-12">MATAKWA YETU</h1>
                    <h2 style={{
                        color: '#993333',
                        fontFamily: 'Montserrat',
                        fontWeight: '700',
                        fontStyle: 'italic',
                        textAlign: 'center'
                    }} className="text-2xl mt-5 text-center">Hatua za haraka za utekelezaji wa Chanjo endelevu ya wote nchini Kenya</h2>
                    <p className="text-xl mt-10 text-center">Sisi waKenya tunadai kuwa mara chanjo ya COVID-19 itakapopatikana:</p>
                </div>
                {demands.map(demand => {
                    return (
                        <div className='mt-8' key={demand.demand_number}>
                            <h2 style={{
                                color: '#993333',
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                textAlign: 'center'
                            }} className="text-3xl mt-10 mx-3 lg:mx-20">{demand.demand_number}</h2>
                            <h3 style={{
                                color: '#993333',
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                textAlign: 'center'
                            }} className="text-xl mt-5 mx-3 lg:mx-32">{demand.demand_subtitle_swahili}</h3>
                            <div className='mx-10 lg:flex lg:mx-48 mt-5'>
                                <p className='lg:text-xl text-center'>{demand.demandtext_swahili}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="mt-20 mx-10 lg:mx-0">
                    <Image
                        src="/images/immediate-measures-summary-swahili.jpg"
                        alt="picha iliyoandikiwa hatua za haraka za utekelezaji wa Chanjo endelevu"
                        width={512}
                        height={256}
                    />
                </div>

            </section>
            <section id='the team'>
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    textAlign: 'center',
                    fontStyle: 'italic'
                }} className="text-4xl mt-12">TIMU</h1>
                <p className='text-center mx-12 lg:mx-40 mt-5 mb-10'>{teamDescription}</p>
            </section>
            <section id='attribution' className='mb-32' >
                <div className='flex justify-center my-4 mx-3' dangerouslySetInnerHTML={logoAttributionMarkup} />
                <div className='flex justify-center my-6 mx-3' dangerouslySetInnerHTML={pictureAttributionMarkup} />
            </section>
        </Layout>
    )
}
