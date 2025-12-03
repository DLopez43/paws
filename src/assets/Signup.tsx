import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <>
      <h1>Signup</h1>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input id ="email" type="text" placeholder="Enter Your Email" />
        <label htmlFor="username">Username:</label>
        <input id ="username" type="text" placeholder="Enter Your Username" />
        <label htmlFor="password">Password:</label>
        <input id ="password" type="text" placeholder="Enter Your Password" />
        <input type="submit" name="" id="login" value="Login" />
      </form>
    </>
  );
};

export default Signup;
