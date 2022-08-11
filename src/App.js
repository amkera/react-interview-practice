import React, { useEffect } from "react"
import axios from "axios"
import Tweets from "./Tweets"
const URL = "https://randomuser.me/api"

const fetchRandomData = (pageNumber) => {
  return axios
    .get(`${URL}?page=${pageNumber}`)
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}

const getFullUserName = (userInfo) => {
  const {
    name: { first, last },
  } = userInfo
  return `${first} ${last}`
}

const App = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = React.useState("")
  const [nextPageNumber, setNextPageNumber] = React.useState(1)
  const [userInfos, setUserInfos] = React.useState([])
  const [toggle, setToggle] = React.useState(false)

  const fetchNextUser = () => {
    fetchRandomData().then((randomData) => {
      if (randomData === undefined) return
      setRandomUserDataJSON(randomData || "")
      const newUserInfos = [...userInfos, ...randomData.results]

      setUserInfos(newUserInfos)
      setNextPageNumber(randomData.info.page + 1)
    })
  }

  const toggler = () => {
    setToggle((previousState) => !previousState)
  }

  useEffect(() => {
    fetchNextUser()
  }, [])

  return (
    <div>
      <Tweets />

      <h1 className={toggle ? "active" : ""}>TOGGLE</h1>
      <button onClick={toggler}>Toggle</button>
      <button onClick={() => fetchNextUser()}>Fetch Next User</button>
      <p>hi</p>
      {userInfos.map((userInfo, idx) => (
        <div key={idx}>
          <p>{getFullUserName(userInfo)}</p>
          <img alt="user" src={userInfo.picture.thumbnail} />
        </div>
      ))}
    </div>
  )
}

export default App
