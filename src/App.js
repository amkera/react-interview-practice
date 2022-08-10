import React, { useEffect } from "react"
import axios from "axios"
const URL = "https://randomuser.me/api"

const fetchRandomData = () => {
  return axios
    .get(URL)
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
  const [userInfos, setUserInfos] = React.useState([])

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(randomData || "N/A")

      setUserInfos(randomData.results)
    })
  }, [])

  return (
    <div>
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
