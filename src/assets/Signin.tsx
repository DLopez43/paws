import React from 'react'

type Props = {}

const Signin = (props: Props) => {
  return (
    <>
     <form action="">
        <h1>Sign In</h1>
          <label htmlFor="username-signin">Username:</label>
          <input id = "username-signin" type="text" placeholder = "Enter Your Username" />
          <label htmlFor="password-signin">Password:</label>
          <input id = "password-signin" type="text" placeholder = "Enter Your Password" />
          <input id = "login-signin" type="submit" name=""  value="Login"/>
        </form>
    </>
  )
}

export default Signin