import Nav from '../components/nav'
import Head from 'next/head'

export default function IndexPage() {
  const demands = [
    'Kenyans must be made aware of the discovery and once it is within the Kenyan borders. The government of Kenya in collaboration with the ministry of health, must publicly share any relevant news on the discovery of the COVID-19 vaccine and it’s whereabouts within the Kenyan borders',
    'The vaccine should be free of charge for all Kenyans. The Kenyan Government should not put a price tag on the COVID - 19 vaccine, so as to ensure all Kenyans regardless of status quo, class or privilege are able to get it with no monetary conditions.',
    'The vaccine should be accessible to all kenyans and all 47 counties. The Kenyan government should make necessary arrangements with the Ministry of Health to establish temporary, moving clinics with well equipped healthcare personnel to administer the vaccine to all devolved areas of the state at a county-level. The government should make necessary arrangements to make door to door vaccine availability for those who are unable to leave their homes and set camps to administer the vaccine at large without any form of prejudice, discrimination or conditions.',
    'Frontline healthcare workers and immediate hospital staff must be given priority in accessing the COVID-19 vaccine. This is the least the Kenyan government can do after stealing and mismanaging funds that were supposed to ensure protection of healthcare workers and combatting COVID-19, risking the lives of the frontline healthcare workers.',
    'The Kenyan government must ensure public funding allocated for the COVID-19 vaccine is transparent and ensure accountability to Kenyans at large.',
    'The government must engage local and grassroots organizations and partners to fully educate and raise awareness about the vaccine in all our communities nationwide. In this case, the government working with healthcare practitioners in the country must also educate the nation on the negative side-effects of the vaccine in our bodies. '
  ]
  let demandCount = 0;
  return (
    <>
      <Head>
        <title>#PeoplesVaccine - Demands</title>
      </Head>
      <Nav />
      <div className="mt-8 lg:mt-16 lg:mx-32 lg:flex lg:items-center">
        <>
          <p className="text-center mx-12 lg:w-2/6 lg:ml-32"> The #PeoplesVaccineKE is a nationwide campaign to push for the free distribution and unconditional access for the COVID-19 vaccine.
        <br /><br />
        We believe that the COVID-19 vaccine should be treated as a nationwide public good and access should be in the interests of all Kenyans, not just those who can afford it.
        </p>
        </>
        <img src='/images/adrianna-van-groningen-NvD9zZ7nn8Q-unsplash.jpg' className=" w-4/6 mx-auto mt-4 lg:w-2/6 lg:mr-48" />
      </div>
      <p className="text-center mx-12 mt-4 lg:mx-56 lg:mt-12">The end goal of this campaign is to ensure free flow and accessibility of the COVID-19 vaccine. These demands are set to create a community-oriented mechanism to ensure each one of us is able to access the vaccine at no cost or conditions.
      <br /><br />
      We aim to strengthen all our communities and to ensure that this vaccine is not just for the political class, elite and those who can afford, it SHOULD be for EVERYONE.</p>
      <section id='demands' className="flex flex-col items-center mt-8">
        <div>
          <h1 style={{
            color: 'white',
            fontFamily: 'Cubano',
            WebkitTextFillColor: 'white',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: '#6930C3'
          }} className="text-5xl mt-12">Our demands  ↓ ↓ ↓</h1>
        </div>
        {demands.map(demand => {
          demandCount++;
          return (
            <div className='mt-8' key={demandCount}>
              <h2 style={{
                color: 'white',
                fontFamily: 'Cubano',
                WebkitTextFillColor: 'white',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#6930C3',
                textAlign: 'center'
              }} className="text-5xl mt-10">{demandCount}</h2>
              <div className='mx-12 lg:flex lg:mx-48 mt-12'>
                <p className='lg:text-xl'>{demand}</p>
                <img src='/images/adrianna-van-groningen-NvD9zZ7nn8Q-unsplash.jpg' className="w-2/3 mx-auto mt-8 lg:ml-8 lg:w-1/2 lg:mt-0" />
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
