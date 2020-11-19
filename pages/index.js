import Layout from '../components/Layout'
import DirectusSDK from "@directus/sdk-js";
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
        teamDescription = team.team_text
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

export default function IndexPage({ demands, teamDescription, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
  const seo = {
    title: "#PeoplesVaccineKE - Demands",
    description: "The #PeoplesVaccineKE is a worldwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine.",
    canonical: "https://peoplesvaccine.co.ke/",
    openGraph: {
      url: 'https://peoplesvaccine.co.ke/',
      title: '#PeoplesVaccineKE - Demands',
      description: 'The #PeoplesVaccineKE is a worldwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine.',
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

  const logoAttributionMarkup = { __html: '<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="peoplesvaccine.co.ke/">The PeoplesVaccineKE logo and posters</a> by <span property="cc:attributionName">coconutsakura</span> is licensed under <a style="display:flex;"rel="license" href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img alt="creative commons logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img alt="creative commons attribution logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img alt="creative commons non-commercial logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /></a></p>' }
  const pictureAttributionMarkup = { __html: '<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="peoplesvaccine.co.ke/">Mathare photos for #PeoplesVaccineKE </a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="peoplesvaccine.co.ke">The #PeoplesVaccineKE campaign</a> is licensed under <a style="display:flex;" rel="license" href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img alt="creative commons logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img alt="creative commons attribution logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img alt="creative commons non-commercial logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /></a></p>' }

  return (
    <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
      <div className="mt-10 lg:mt-6 lg:mx-32 lg:flex lg:items-center">
        <>
          <p className="text-center mx-8 lg:w-2/6 lg:ml-32"> The #PeoplesVaccine is a global campaign to push for the free distribution and unconditional access for the COVID-19 vaccine, we collectively believe that the COVID-19 vaccine should be treated as a nationwide public good and access should be in the interests of all people everywhere, not just those who can afford it.
        </p>
        </>
        <div className=" w-9/12 lg:w-4/12 mx-auto my-5 lg:my-0 lg:ml-20">
          <Image
            src="/images/homepage.jpg"
            alt="homepage peoplesvaccine image"
            width={390}
            height={520}

          />
        </div>


      </div>
      <p className="text-center mx-8 mt-4 lg:mx-56 lg:mt-12">
        In this regard, we have joined the global call for a #PeoplesVaccine and are working to establish our localized demands under #PeoplesVaccineKE in Kenya.
        The end goal of this campaign is to ensure the free and unconditional accessibility to the COVID-19 vaccine for all.
        <br /><br />
        These demands are set to create a community-oriented mechanism to ensure each one of us is able to access the vaccine at no cost or conditions in Kenya, learning from the #PeoplesVaccine all over the world, we forcefully and urgently must implement these measures in Kenya.
      <br /><br />
      We aim to strengthen all our communities and to ensure that this vaccine is not just for the political class, elite and those who can afford, it SHOULD be for EVERYONE.</p>
      <section id='demands' className="flex flex-col items-center mt-8">
        <div>
          <h2 style={{
            color: '#993333',
            fontFamily: 'Montserrat',
            fontWeight: '900',
            textAlign: 'center'
          }} className="text-5xl mt-12">OUR DEMANDS</h2>
          <h3 style={{
            color: '#993333',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            textAlign: 'center'
          }} className="text-2xl mt-5 text-center">Immediate measures for the execution of a sustainable People’s Vaccine in Kenya</h3>
          <p className="text-xl mt-10 text-center">We the people of Kenya demand that once the COVID-19 vaccine is found:</p>
        </div>
        {demands.map(demand => {
          return (
            <div className='mt-8' key={demand.demand_number}>
              <h3 style={{
                color: '#993333',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                textAlign: 'center'
              }} className="text-3xl mt-10 mx-3 lg:mx-20">{demand.demand_number}</h3>
              <h3 style={{
                color: '#993333',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                textAlign: 'center'
              }} className="text-xl mt-5 mx-3 lg:mx-32">{demand.demand_subtitle}</h3>
              <div className='mx-10 lg:flex lg:mx-48 mt-5'>
                <p className='lg:text-xl'>{demand.demandtext}</p>
              </div>
            </div>
          )
        })}
        <div className="mt-20 mx-10 lg:mx-0">
        <Image
            src="/images/immediate-measures-summary.jpeg"
            alt="immediate measures summary image with all demands listed"
            width={512}
            height={256}
          />
        </div>
      </section>
      <section id='the team'>
        <h3 style={{
          color: '#993333',
          fontFamily: 'Montserrat',
          fontWeight: '900',
          textAlign: 'center'
        }} className="text-4xl mt-12">THE TEAM</h3>
        <p className='text-center mx-12 lg:mx-40 mt-5 mb-10'>{teamDescription}</p>
      </section>
      <section id='attribution' className='mb-32' >
        <div className='flex justify-center my-4 mx-3' dangerouslySetInnerHTML={logoAttributionMarkup} />
        <div className='flex justify-center my-6 mx-3' dangerouslySetInnerHTML={pictureAttributionMarkup} />
      </section>
    </Layout>
  )
}
