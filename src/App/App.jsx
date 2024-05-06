import {useState} from 'react'
import Message from '../Message/Message'
import Feedback from '../Feedback/Feedback'
import iconStar from '../assets/images/icon-star.svg'
import illustration from '../assets/images/illustration-thank-you.svg'
import './App.css'

function App() {
  const [isSubmited, setIsSubmited] = useState(false)
  let feedbackNumber = ''
  const handleSubmit = (e) => {
    setIsSubmited(true)
    const feedbackNumber = e.target.value

    return feedbackNumber
  }

  if(!isSubmited){
    return (
    <main className='container'>
      <img className="style-icon" src={iconStar} />
      <Message title="How did we so?" text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"/>
      <Feedback/>
      <button className='submit-btn' onClick={() => handleSubmit()}>Submit</button>
    </main>
    )
  }else{
    return (
      <main className='container submited'>
        <img src={illustration} className='illustration'/>
        <span className='result'>You selected {feedbackNumber} out of 5</span>
        <Message title="Thank you!" text="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"/>
      </main>
    )
  }

  
}

export default App
