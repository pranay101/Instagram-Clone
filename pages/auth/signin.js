import { getProviders, signIn } from 'next-auth/react'
import React, { useState } from 'react'

const signin = ({ providers }) => {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signIn('credentials', {
      redirect: true,
      username: username,
      password: password,
      callbackUrl: `${window.location.origin}/`
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default signin

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
