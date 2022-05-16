import { getProviders, signIn } from 'next-auth/react'
import React, { useState } from 'react'

const signin = ({ providers }) => {
  const [showCredentials, setshowCredentials] = useState(false)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signIn('credentials', {
      redirect: true,
      username: username,
      password: password,
      callbackUrl: `${window.location.origin}/`,
    })
  }
  return (
    <div className="mx-auto mt-8 grid grid-cols-1 px-6 md:max-w-3xl md:grid-cols-1 xl:max-w-4xl xl:grid-cols-2">
      <div>
        <div className="col-span-1 mx-auto hidden max-h-screen bg-phone-mockup bg-no-repeat  lg:block  ">
          <img
            className="relative mr-0 mb-0 pt-[28px] pl-[156px]"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            alt=""
          />
        </div>
      </div>

      <div className="col-span-1 md:translate-y-[40%] lg:translate-y-0">
        <form
          className="mx-8 my-3 border border-gray-200"
          onSubmit={handleSubmit}
        >
          <img
            onClick={() => setshowCredentials((old) => !old)}
            className=" my-10 mx-auto w-48 object-contain"
            src="https://links.papareact.com/ocw"
            alt=""
          />
          {showCredentials ? (
            <div className="mx-auto flex w-10/12 flex-col border border-gray-300 px-5 py-2 mb-3">
              <p className='text-xs text-gray-400 p-1'>username: pranayprajapati_._</p>
              <p className='text-xs text-gray-400 p-1'>password: pranayprajapati</p>
            </div>
          ) : null}

          <div className="mx-auto flex w-10/12 flex-col border border-gray-300 px-5 py-2">
            <label className="my-1 text-xs text-gray-400">
              Username, Phone or Email
            </label>
            <input
              className=" text-ellipsis !bg-white px-3 py-1.5 text-sm focus:!bg-transparent focus:!outline-none"
              id="username"
              name="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mx-auto my-4 flex w-10/12 flex-col border border-gray-300 px-5 py-2">
            <label className="my-1 text-xs text-gray-400">Password (click the Instagram logo)</label>
            <input
              className=" text-ellipsis !bg-white px-3 py-1.5 text-sm focus:!bg-transparent focus:!outline-none"
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mx-auto flex flex-col items-center justify-center">
            <button
              className="w-10/12 rounded-sm bg-[#0095f6] px-1.5 py-1 text-center font-medium text-white"
              type="submit"
            >
              Log in
            </button>
            <h2 className="my-8 mb-[20px] w-10/12 border-b border-gray-300 text-center leading-[0.1em] text-gray-500">
              <span className="font-sm bg-white py-0 px-[10px]">Or</span>
            </h2>

            <button className="my-2 text-sm font-semibold text-[#4267B2]">
              Log in With Facebook
            </button>
            <button className="my-4 text-xs font-semibold text-gray-500">
              Forget Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  )
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
