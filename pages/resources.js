import DirectusSDK from "@directus/sdk-js"
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
import { FAQPageJsonLd } from 'next-seo';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const PDFDocument = dynamic(() => import('../components/Document'), {
    // eslint-disable-next-line
    loading: () => (
        <p>loading</p>
    ),
    ssr: false
});


export async function getStaticProps() {
    let resources = []
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('resources')
        .then(data => {
            data.data.map(resource => {
                resources.push(resource)
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            resources
        },
        revalidate: 1,
    }
}


export default function ResourcesPage({ resources, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: "Resources and FAQs - Peoples Vaccine Kenya - #PeoplesVaccineKE",
        description: "Collected material from different sources regarding information on the vaccination cycle and its concerns globally.",
        canonical: "https://peoplesvaccine.co.ke/resources",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/resources',
            title: 'Resources and FAQs - Peoples Vaccine Kenya - #PeoplesVaccineKE',
            description: 'Collected material from different sources regarding information on the vaccination cycle and its concerns globally.',
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

    const [currentSlide, setCurrentSlide] = React.useState(0)

    const [faqTopics, setFaqTopics] = React.useState(['Pfizer-BioNtech', 'Oxford-Astra Zeneca']);

    const documents = [
        { source: '/documents/KenyaCOVID-19NationalVaccinesDeploymentandVaccinationPlan.pdf', title: 'National COVID-19 Vaccines Deployment and Vaccination Plan, 2021', description: 'Kenya’s National Vaccine Deployment plan' },
        { source: '/documents/vaccineschematic.pdf', title: 'Vaccines action schematics', description: 'Pfizer-BioNtech & Oxford-Astra Zeneca vaccination schematic diagrams.' },
    ]

    const questions = [
        {
            topic: 'Pfizer-BioNtech', question: `What is the active ingredient?`, answer: `The vaccine contains coronavirus mRNA. This is a tiny fragment of the virus' genetic code.`
        },
        { topic: 'Pfizer-BioNtech', question: 'How will the vaccine benefit me?', answer: `The vaccine has been shown to prevent COVID-19` },
        { topic: 'Pfizer-BioNtech', question: 'How effective is it?', answer: `The vaccine offers up to 94.5% protection against Covid-19` },
        { topic: 'Pfizer-BioNtech', question: 'How long will its protection last?', answer: `The duration of protection is unknown` },
        { topic: 'Pfizer-BioNtech', question: 'Who can get it?', answer: `Individuals who are 16 years and older can get the vaccine` },
        {
            topic: 'Pfizer-BioNtech', question: 'How is it given?', answer: ` The vaccine is given as an injection. It is administered in 2 doses, 3 weeks apart`
        },
        { topic: 'Pfizer-BioNtech', question: 'Will the vaccine give me COVID-19?', answer: `No. The vaccine only contains the genetic code of one small fragment of the virus and cannot cause COVID-19.` },
        { topic: 'Pfizer-BioNtech', question: 'Are there side effects?', answer: `Like all medicines, some people do suffer mild symptoms after being vaccinated, such as muscle aches or a raised temperature. The vaccine could cause severe allergic reactions in some people. More studies on side effects and adverse reactions are underway.` },
        { topic: 'Oxford-Astra Zeneca', question: 'What is the active ingredient?', answer: `a weakened version of a common cold virus known as an adenovirus, that comes from chimpanzees. It has been modified to look more like the coronavirus` },
        { topic: 'Oxford-Astra Zeneca', question: 'How will the vaccine benefit me?', answer: `The vaccine has been shown to prevent COVID-19` },
        { topic: 'Oxford-Astra Zeneca', question: 'How effective is it?', answer: `The vaccine offers 70% protection against Covid-19 on average, but this number can vary between 62-90% based on age, dose and time between doses.` },
        { topic: 'Oxford-Astra Zeneca', question: 'How long will its protection last?', answer: `The duration of protection is unknown` },
        { topic: 'Oxford-Astra Zeneca', question: 'Who can get it?', answer: `Individuals who are 18 years and older can get the vaccine` },
        { topic: 'Oxford-Astra Zeneca', question: 'How is it given?', answer: `The vaccine is given as an injection. It is administered in 2 doses. The second injection can be given between 4 and 12 weeks after the first injection.` },
        { topic: 'Oxford-Astra Zeneca', question: 'Will the vaccine give me COVID-19?', answer: `No. The vaccine only contains one small fragment of the virus and cannot cause COVID-19.` },
        { topic: 'Oxford-Astra Zeneca', question: 'Are there side effects?', answer: `Some people do suffer mild symptoms after being vaccinated, such as muscle aches, chills, fever. The vaccine could cause severe allergic reactions in some people. More studies on side effects and adverse reactions are underway.` },
    ]

    const questionsForSEO = questions.map((question) => {
        return {
            questionName: question.question,
            acceptedAnswerText: question.answer
        }
    })

    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <FAQPageJsonLd
                mainEntity={questionsForSEO}
            />
            <div className="hidden md:block">
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}
                    className="text-5xl mt-12">
                    RESOURCE DOCUMENTS
                </h1>
            </div>
            <div className="block md:hidden">
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}
                    className="text-3xl mt-12">
                    RESOURCE DOCUMENTS
                </h1>
            </div>

            <div className="hidden md:block">
                <p className="w-9/12 m-auto mt-8">We have gathered a number of documents that we consider useful in understanding more about COVID-19 and vaccination against it.</p>
            </div>
            <div className="block md:hidden">
                <p className="w-11/12 m-auto mt-6">We have gathered a number of documents that we consider useful in understanding more about COVID-19 and vaccination against it.</p>
            </div>

            <div className="hidden md:block">
                <div className="flex justify-evenly w-9/12 m-auto overflow-x-scroll mt-4">
                    {documents.map((document) => {
                    return (
                            <div className="pr-5 m-auto">
                                <h3 style={{
                                    color: '#993333',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '700',
                                    textAlign: 'center'
                                }}>{document.title}</h3>
                                <PDFDocument file={document.source} />
                                <div className="mt-4 flex justify-center flex-col items-center">
                                    <p>{document.description}</p>
                                    <a href={document.source} target="_blank" style={{
                                        color: '#993333',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '700',
                                        textDecoration: 'underline'
                                    }}> Click or tap here to download this document</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="block md:hidden mt-4">
                <p style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    textAlign: 'center'
                }}>Swipe toward the left to see more documents</p>
                <div className="flex justify-between w-11/12 m-auto overflow-x-scroll mt-2">
                    {documents.map((document) => {
                    return (
                        <div className="pr-2">
                            <h3 style={{
                                color: '#993333',
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>{document.title}</h3>
                            <PDFDocument file={document.source} />
                            <div className="w-11/12 mt-4">
                                <p>{document.description}</p>
                                <a href={document.source} target="_blank" style={{
                                    color: '#993333',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '700',
                                    textDecoration: 'underline'
                                    }}> Click or tap here to download document</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            <div className="hidden md:block">
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}
                    className="text-5xl mt-12">
                    FAQs
                </h1>
            </div>
            <div className="block md:hidden">
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}
                    className="text-3xl mt-12">
                    FAQs
                </h1>
            </div>

            <div className="hidden md:block">
                {faqTopics.map((topic) => {
                    let topicQuestions = questions.filter((question) => question.topic === topic);
                    const topicHeader = (<h2 style={{ color: "#993333", fontSize: "24px", fontFamily: 'Montserrat', fontWeight: '600' }} className="mb-2">
                        {topic}
                    </h2>)
                    topicQuestions = topicQuestions.map((question) => {
                        return (
                            <AccordionItem style={{ marginTop: "16px", marginLeft: "2%" }}>
                                <AccordionItemHeading aria-level={3} style={{ color: "black", fontSize: "20px", fontFamily: 'Montserrat', fontWeight: '600' }}>
                                    <AccordionItemButton style={{ display: 'flex' }}>
                                        {question.question}
                                        <AccordionItemState>
                                            {({ expanded }) => (expanded ? <div className="pl-5"><FontAwesomeIcon icon={faChevronUp} color="#993333" /></div> : <div className="pl-5"><FontAwesomeIcon icon={faChevronDown} color="#993333" /></div>)}
                                        </AccordionItemState>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel style={{ marginTop: "16px", marginLeft: "2%" }}>
                                    <p style={{ color: "black", fontSize: "16px", fontFamily: 'Montserrat', fontWeight: '400' }}>{question.answer}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                    return (
                        <Accordion allowMultipleExpanded={true} style={{ width: '75%', marginTop: "32px", marginLeft: "12%", marginBottom: "64px" }}>
                            { topicHeader}
                            { topicQuestions}
                        </Accordion>
                    );
                })}

            </div>
            <div className="block md:hidden">
                {faqTopics.map((topic) => {
                    let topicQuestions = questions.filter((question) => question.topic === topic);
                    const topicHeader = (<h2 style={{ color: "#993333", fontSize: "18px", fontFamily: 'Montserrat', fontWeight: '600' }} className="mb-2">
                        {topic}
                    </h2>)
                    topicQuestions = topicQuestions.map((question) => {
                        return (
                            <AccordionItem style={{ marginTop: "16px", marginLeft: "2%" }}>
                                <AccordionItemHeading aria-level={3} style={{ color: "black", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '600' }}>
                                    <AccordionItemButton style={{ display: 'flex' }}>
                                        {question.question}
                                        <AccordionItemState>
                                            {({ expanded }) => (expanded ? <div className="pl-5"><FontAwesomeIcon icon={faChevronUp} color="#993333" /></div> : <div className="pl-5"><FontAwesomeIcon icon={faChevronDown} color="#993333" /></div>)}
                                        </AccordionItemState>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel style={{ marginTop: "16px", marginLeft: "2%" }}>
                                    <p style={{ color: "black", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '400' }}>{question.answer}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                    )
                    })
                    return (
                        <Accordion allowMultipleExpanded={true} style={{ width: '92%', marginTop: "32px", marginLeft: "3%", marginBottom: "50px" }}>
                            { topicHeader}
                            { topicQuestions}
                        </Accordion>
                    );
            })}
            </div>




        </Layout>
    )
}
