/* eslint-disable func-style */
import * as CryptoJS from 'crypto-js'
import FingerprintJS from 'fingerprintjs2'
import { useEffect, useState } from 'react'

import { extractStringInFirstParentheses } from 'utils/extractStringInFirstParentheses'

function encodeToToken(input: string): string {
  const hash = CryptoJS.SHA256(input)
  const hex = hash.toString(CryptoJS.enc.Hex)
  return hex
}

function useApp() {
  const [deviceId, setDeviceId] = useState<any>(null)
  const [deviceName, setDeviceName] = useState<any>(null)

  function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  useEffect(() => {
    FingerprintJS.getPromise()
      .then((fp) => {
        const platform = fp[16].value
        let deviceString = ''
        const getDeviceIdStorage = localStorage.getItem('deviceId')

        if (getDeviceIdStorage !== null && getDeviceIdStorage !== '') {
          deviceString = getDeviceIdStorage ?? ''
        } else {
          const userAgent = extractStringInFirstParentheses(fp[0].value)
          const fonts = JSON.stringify(fp[26].value)
          const audio = fp[27].value
          const timeZone = fp[9].value
          const randomString = generateRandomString(8)
          deviceString = `${userAgent}-${platform}-${fonts}-${audio}-${timeZone}-${randomString}`
            .replace(/"/g, '')
            .replace(/,/g, '')
            .replaceAll(' ', '')
          localStorage.setItem('deviceId', deviceString)
        }
        const deviceToken = encodeToToken(deviceString)
        setDeviceId(deviceToken)
        setDeviceName(platform)
      })

      .catch((error) => {
        console.error('Error getting device ID:', error)
        setDeviceId(null)
      })
  }, [])

  useEffect(() => {
    console.log({
      deviceId,
      deviceName,
    })
  }, [deviceId, deviceName])

  return { deviceId, deviceName }
}

export default useApp
