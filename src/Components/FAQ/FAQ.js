import React from 'react';
import './FAQ.scss';
import Question from '../Question/Question';



const questions = {
    howItWorks: [
        {
            question: "How do I download the app?",
            answer: `To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. 
            An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.`
        },
    
        {
            question: "Can I find a nearby Scoots?",
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris in nunc accumsan auctor. Suspendisse mi tortor, consequat ac rutrum nec, posuere quis dui.`
        },
    
        {
            question: "Do I need a license to ride?",
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros urna, finibus vel fringilla id, lacinia vitae dolor. Praesent in luctus eros, et aliquet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus nec ipsum consectetur, placerat libero vel, sodales ipsum. Ut vel consequat arcu.`
        }
    ],

    safeDriving: [
        {
            question: "Should I wear a helmet?",
            answer: `Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. 
            We like you and we want you to be as safe as possible while Scooting.`
        },
    
        {
            question: "How about the rules & regulations?",
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat urna. Vivamus maximus facilisis tortor, eu feugiat lorem euismod eget. Aenean auctor libero tortor, eget mollis ex aliquam sed. Aliquam erat volutpat. In euismod consectetur erat, tincidunt tincidunt est. 
            Pellentesque egestas sagittis scelerisque.`
        },
    
        {
            question: "What if I damage my Scoot?",
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum neque in nunc consectetur dapibus. In quam tortor, gravida euismod purus eget, volutpat tempus eros.`
        }
    ]


}






class FAQ extends React.Component{

    render() {
        return(
            <div className="FAQ">
                <h2 className="FAQ__title">FAQs</h2>

                <div className="FAQ__segment">
                    <h4 className="FAQ__segment__title">How it works</h4>
                    <div className="FAQ__segment__questions">

                        {
                            questions.howItWorks.map(question => {
                                return <Question question={question.question}
                                                 answer={question.answer}/>
                            })
                        }

                    </div>
                </div>

                <div className="FAQ__segment">
                    <h4 className="FAQ__segment__title">Safe driving</h4>
                    <div className="FAQ__segment__questions">

                        {
                            questions.safeDriving.map(question => {
                                return <Question question={question.question}
                                                 answer={question.answer}/>
                            })
                        }

                    </div>
                </div>

            </div>
        )
    }
}

export default FAQ;