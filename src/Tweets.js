import React from "react"
import Tweet from "./Tweet"

const tweetsData = [
  { name: "amber", location: "san francisco", hobbies: "baking" },
  { name: "beep", location: "san francisco", hobbies: "baking" },
  { name: "boop", location: "san francisco", hobbies: "writing" },
  { name: "amber", location: "san francisco", hobbies: "exercising" },
]

const Tweets = () => {
  return (
    <section>
      {tweetsData.map((tweet) => (
        <Tweet
          name={tweet.name}
          location={tweet.location}
          hobbies={tweet.hobbies}
        />
      ))}
    </section>
  )
}
export default Tweets
