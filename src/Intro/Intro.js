import React from 'react'
import './Intro.css'
const Intro=(props)=>{
    return(
        <div className="main-content">
             <h1>Welcome to React Quiz !</h1>
            <h2>✍🏿   This Quiz contains 5  Question</h2>
            <h2>✍🏿   Each Question Carries 1 Mark</h2>
            <center>
            <button className="btn"  onClick={props.clickevent}>Test Skill </button>
            </center> 



        </div>
    )
}
export default Intro