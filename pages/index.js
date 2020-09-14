import Nav from '../components/nav'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js";

export async function getStaticProps() {
  const demands = []
  const client = new DirectusSDK({
    url: "https://peoples-vaccine-ke-directus-sbw4jzw6ja-uc.a.run.app",
    project: "peoples-vaccine",
  })

  await client.getItems('demands')
    .then(data => {
      data.data.map(demand => {
        demands.push(demand)
      })
    })
    .catch(error => console.log(error))
  return {
    props: {
      demands
    },
    revalidate: 1,
  }
}

export default function IndexPage({ demands }) {
  return (
    <>
      <Head>
        <title>#PeoplesVaccine - Demands</title>
      </Head>
      <Nav />
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
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: '900',
            WebkitTextFillColor: 'white',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: '#993333',
            textTransform: 'capitalize',
            textAlign: 'center'
          }} className="text-5xl mt-12">OUR DEMANDS</h2>
        </div>
        {demands.map(demand => {
          return (
            <div className='mt-8' key={demand.demand_number}>
              <h3 style={{
                color: 'white',
                fontFamily: 'Montserrat',
                fontWeight: '900',
                WebkitTextFillColor: 'white',
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: '#993333',
                textAlign: 'center'
              }} className="text-5xl mt-10">{demand.demand_number}</h3>
              <div className='mx-12 lg:flex lg:mx-48 mt-12'>
                <p className='lg:text-xl'>{demand.demandtext}</p>
                <img src='/images/adrianna-van-groningen-NvD9zZ7nn8Q-unsplash.png' alt={`demand-${demand.demand_number}-image`} className="w-2/3 mx-auto mt-8 lg:ml-8 lg:w-2/6 lg:h-64 object-contain lg:mt-0" />
              </div>
            </div>
          )
        })}
      </section>
      <section id='the team'>
        <h3 style={{
          color: 'white',
          fontFamily: 'Montserrat',
          fontWeight: '900',
          WebkitTextFillColor: 'white',
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#993333',
          textTransform: 'capitalize',
          textAlign: 'center'
        }} className="text-4xl mt-12">THE TEAM</h3>
        <p className='text-center mx-12 lg:mx-40 my-5'>This campaign has been made possible by the voluntary efforts and solidarity of organizers, activists, researchers, lawyers, healthcare workers and all WaKenya who hope for a vaccine that is free and accessible to all and a precedent for free and accessible #MedicareForAl</p>
      </section>
    </>
  )
}
