/* eslint-disable react-hooks/rules-of-hooks */
import Base64 from 'crypto-js/enc-base64'
import sha256 from 'crypto-js/sha256'
import { signIn } from 'next-auth/react'

// Login with Google
const loginWithGoogle = async () => {
  try {
    await signIn('google')
  } catch (error) {
    console.log('Google login error:', error)
  }
}

// Login with Facebook
const loginWithFacebook = async () => {
  try {
    await signIn('facebook')
    console.log('login success facebook')
  } catch (error) {
    console.log('Facebook login error:', error)
  }
}

// Login with Zalo

// generate code verifier
const code = function generateCodeVerifier() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let randomChar = ''
  for (let i = 0; i < chars.length; i++) {
    randomChar += chars[Math.floor(Math.random() * chars.length)]
  }
  return randomChar
}

// Dùng mã hóa code verifier bằng bộ ký tự ASCII, tiếp đến dùng giải thuật SHA-256 để tạo mã băm,
// sau cùng encode Base64 (without Padding) mã băm để tạo ra code challenge từ code verifier.
// code_challenge = Base64.encode(SHA-256.hash(ASCII(code_verifier)))

const generateCodeChallenger = (codeVerifier: string) => {
  const encoder = new TextEncoder()
  const view = encoder.encode(codeVerifier)

  const hashDigest = sha256(String(view))
  const codeChallenge = Base64.stringify(hashDigest)
  return codeChallenge
}

const challengeCode = generateCodeChallenger(code())
const loginWithZalo = async () => {
  try {
    const response = await fetch(
      `https://oauth.zaloapp.com/v4/permission?app_id=2527313885555737864&redirect_uri=http://localhost:9999/auth/login/zalo&code_challenge=${challengeCode}&state=1`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
    )
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export { loginWithGoogle, loginWithFacebook, loginWithZalo }
