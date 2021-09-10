import React from "react"
import Score from "./Score"

const Student = (props) => {
    // always console.log props to see what values are available
// console.log(props)
const scoreList = props.something.scores.map((score) => <Score scoreData={score}/>)

    return(
        <div>
            <h2> name {props.something.name}</h2>
            <h1> bio {props.something.bio}</h1>
            <h2>{props.something.score}</h2>
            {scoreList}
        </div>
    )
}

export default Student