import React, { useState } from "react"
import { login } from "./utils"

const Form = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async () => {
    setError("") //Error should be cleared after a failed attempt to login
    setLoading(true)
    try {
      await login({ email, password })
      alert("login successful")
      setLoading(false) //Still want to set loading to false if the login succeeds
    } catch (error) {
      setError(error.message)
      setLoading(false) //Set loading to false if there's an error and login fails
    }
  }

  const disableButton = !email || password.length < 6 || loading

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id={"email"}
          type={"email"}
          value={email}
        ></input>
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id={"password"}
          type={"password"}
          value={password}
        ></input>
      </div>
      <div className="error-message">{error}</div>
      <div className="button">
        <button disabled={disableButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Form

//Step 1: Make these controlled forms, i.e. tie the state to the inputs using value and onChanges
//Step 2: Create a handle login function, with async await to mimic the call to a server
// Step 3: Disable the Login button when the request is going through
