import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React from 'react'

function GoogleLoginButton({fn}) {

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse)
      const {data} = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: "Bearer " + tokenResponse.access_token
        }
      })
      fn({
        email: data.email,
        name: data.given_name + " " + data.family_name,
        password: data.sub + "aA",
        photo: data.picture,
        terms: true
      })
      console.log(data)
    }
  })

  return (
    <div onClick={()=>login()} class="google-blue text-gray-100 hover:text-white shadow font-bold text-sm py-3 rounded-xl justify-start items-center cursor-pointer w-1/4 flex justify-center bg-white">
      <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
    </div>
  )
}

export default GoogleLoginButton