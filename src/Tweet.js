import React from "react"

const Tweet = (props) => {
  return (
    <div>
      <h2> {props.name}</h2>
      <h3>{props.location}</h3>
      <h4>{props.hobbies}</h4>
    </div>
  )
}

export default Tweet
