import Nav from '../components/nav'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js";

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
  return (
    <>
      <Head>
        <title>#PeoplesVaccineKE - Demands</title>
        <meta name="twitter:title" content="#PeoplesVaccineKE - Demands" />
        <meta name="twitter:description" content="The #PeoplesVaccineKE is a nationwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine." />
        <meta property="og:title" content="#PeoplesVaccineKE - Demands" />
        <meta property="og:description" content="The #PeoplesVaccineKE is a nationwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine." />
        <meta name="twitter:url" content="https://peoplesvaccine.co.ke/" />
        <meta property="og:url" content="https://peoplesvaccine.co.ke/" />
        <meta property="og:type" content="website" />
      </Head>
      <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
      <div className="mt-8 lg:mt-4 lg:mx-32 lg:flex lg:items-center">
        <>
          <p className="text-center mx-12 lg:w-2/6 lg:ml-32"> The #PeoplesVaccineKE is a nationwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine.
        <br /><br />
        We believe that the COVID-19 vaccine should be treated as a nationwide public good and access should be in the interests of all Kenyans, not just those who can afford it.
        </p>
        </>
        <img src='/images/adrianna-van-groningen-NvD9zZ7nn8Q-unsplash.png' alt='homepage peoplesvaccine image' className=" w-4/6 mx-auto mt-4 lg:w-2/6 lg:mr-48" />
      </div>
      <p className="text-center mx-12 mt-4 lg:mx-56 lg:mt-12">The end goal of this campaign is to ensure free flow and accessibility of the COVID-19 vaccine. These demands are set to create a community-oriented mechanism to ensure each one of us is able to access the vaccine at no cost or conditions.
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
                fontWeight: '900',
                textAlign: 'center'
              }} className="text-xl mt-10 mx-3 lg:mx-32">{demand.demand_subtitle}</h3>
              <div className='mx-10 lg:flex lg:mx-48 mt-5'>
                <p className='lg:text-xl'>{demand.demandtext}</p>
              </div>
            </div>
          )
        })}
      </section>
      <section id='the team'>
        <h3 style={{
          color: '#993333',
          fontFamily: 'Montserrat',
          fontWeight: '900',
          textAlign: 'center'
        }} className="text-4xl mt-12">THE TEAM</h3>
        <p className='text-center mx-12 lg:mx-40 mt-5 mb-32'>{teamDescription}</p>
      </section>
    </>
  )
}
