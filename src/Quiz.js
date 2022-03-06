import React from 'react'
const quizData = [
  {
    
    question: "1. Which state produces maximum soybean?",
    options: {
      A: "Madhya Pradesh",
      B: " Uttar Pradesh",
      C: "Bihar",
      D: "Rajasthan",
    },
    correct: "Ghost"
  },
  {
    
    question: "2. Which country operationalized world’s largest radio telescope?",
    options: {
      A: " USA",
      B: "China",
      C: "Russia",
      D: "India",
    },
    correct: "China"
  },
  {
    
    question: "3.  Which of the following is the capital of Arunachal Pradesh?",
    options: {
      A: "Itanagar",
      B: " Dispur",
      C: "Imphal",
      D: "Panaji",
    },
    correct: "Itanagar"
  },
  {

    question: "4.  Katerina Sakellaropoulou was elected the first woman President of",
    options: {
      A: "Greece",
      B: "Spain",
      C: "Finland",
      D: "Netherland",
    },
    correct: "Greece"
  },
  {

    question: "5. Which one among the following radiations carries maximum energy?",
    options: {
      A: "Ultraviolet rays",
      B: "Gamma rays",
      C: "X- rays",
      D: "Infra-red rays",
    },
    correct: "Gamma rays"
  }
]


const AppStyle = {
  question: {
    width: "50%",
    height: '60px',
    backgroundColor:'slategray',
    fontSize: '20px',
    margin: '35px auto',
    border: '2px solid yellow',
    borderLeft: '10px solid yellow',
    borderRight: '10px solid yellow',
    color: 'white',
    display: 'flex',
    justifyContent: 'left',
    paddingLeft: '10px',
    alignItems: 'center'
  },
  answers: {
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '20px auto',

  },
  answer: {
    width: '45%',
    height: '50px',
    backgroundColor: 'slategray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    color: 'white',
    alignItems: 'center',
    margin: '15px auto',
    borderLeft: '1px solid yellow',
    borderRight: '1px solid yellow',
    boxSizing: 'border-box',
    cursor: 'pointer',
    paddingLeft: '10px',
  },
  btnNext:{
    width:0,
    height:0,
    borderLeft:'30px solid blue',
    borderTop:'10px solid transparent',
    borderBottom:'10px solid transparent',
    margin:'30px',
    display:'inline-block',
    cursor:'pointer'
  },
  btnPrevious:{
    width:0,
    height:0,
    borderRight:'30px solid blue',
    borderTop:'10px solid transparent',
    borderBottom:'10px solid transparent',
    margin:'30px',
    display:'inline-block',
    cursor:'pointer',
    marginLeft:'47%',
  },
  results: {
    width: '300px',
    color: 'black',
    border: '2px solid blue',
    margin: 'auto',
    padding: '10px',
    fontSize: '20px',
    marginTop: '100px',

  }

}
class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: quizData[0].question,
      qsNo: 0,
      options: quizData[0].options,
      correctAnswer: "Madhya Pradesh",
      correctCount: 0,
      incorrectCount: 0,
      // flashMsg: ""
    }
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);

  }

  handleNavigation(event) {

    if (event === "next" && (this.state.qsNo < quizData.length - 1)) {

      console.log(this.state.qsNo + 1);
      this.setState({ qsNo: (this.state.qsNo + 1) }, () => {
        this.setState({
          question: quizData[this.state.qsNo].question,
          options: quizData[this.state.qsNo].options,
          correctAnswer: quizData[this.state.qsNo].correct
        })
      });


    }
    if (event === "previous" && (this.state.qsNo >= 1)) {
      console.log("prvs");
      this.setState({ qsNo: (this.state.qsNo - 1) }, () => {
        this.setState({
          question: quizData[this.state.qsNo].question,
          options: quizData[this.state.qsNo].options
        })
      });
    }
  }
  handleAnswerClick(option) {
    this.handleNavigation("next");
    console.log(option);
    if (this.state.correctAnswer == option) {
      console.log("correct");

      this.setState({ correctCount: this.state.correctCount + 1 })
    }
    else {
      this.setState({ incorrectCount: this.state.incorrectCount + 1 })
    }
  }
  render() {
    return (

      <div className="Main_class">
        <Question questionData={this.state.question} />
        <Answers options={this.state.options} onAnswerClick={this.handleAnswerClick} />
        <Navigation onClickFromParent={this.handleNavigation} />
        <Results correctCount={this.state.correctCount} incorrectCount={this.state.incorrectCount} />
      </div>
    )
  }
}


//question
const Question = (props) => {
  return (
    <div>
      <div style={AppStyle.question}>{props.questionData} </div>
    </div>
  )
}
//Answers
const Answers = (props) => {
  function passOption(e) {

    props.onAnswerClick(e);
  }
  return (
    <div style={AppStyle.answers}>
      <div style={AppStyle.answer} onClick={() => { passOption(props.options.A) }}>A.{props.options.A}</div>
      <div style={AppStyle.answer} onClick={() => { passOption(props.options.B) }}>B.{props.options.B}</div>
      <div style={AppStyle.answer} onClick={() => { passOption(props.options.C) }}>C. {props.options.C}</div>
      <div style={AppStyle.answer} onClick={() => { passOption(props.options.D) }}>D. {props.options.D}</div>
    </div>
  )
}

const Navigation = (props) => {
  const clickNext = () => {
    return (props.onClickFromParent("next"));
  }
  const clickPrvs = () => {
    return (props.onClickFromParent("previous"));
  }
  return (
    <div>
      <div style={AppStyle.btnPrevious} onClick={clickPrvs}></div>
      <div style={AppStyle.btnNext} onClick={clickNext}></div>
    </div>
  )
}

// Results
const Results = (props) => {
  return (
    <div style={AppStyle.results}>
      <div>
        Correct: {props.correctCount} |  Incorrect:{props.incorrectCount}
      </div>
    </div>
  )

}

export default Quiz