import React from "react"

const Score = (props) => {
    console.log(props)
    return(
        <div>
            <h1>SCORE: {props.scoreData.score} DATE: {props.scoreData.date} </h1>
        </div>
    )
}

export default Score