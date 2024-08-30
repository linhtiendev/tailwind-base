import anime from 'animejs'

import { formatDateTime } from './formatDate'

export const generateLuckyNumber = () => {
  return (
    anime.random(0, 9).toString() +
    anime.random(0, 9).toString() +
    anime.random(0, 9).toString() +
    anime.random(0, 9).toString() +
    anime.random(0, 9).toString()
  )
}

/*
    Transform date from ISO 8601 string to specific format
    ISO format: 2023-06-06T21:44:20.567
    Result format: 19h30 ngày 20/12/2023
*/

export const transformDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const dt = date.getDate()
  const h = date.getHours()
  const m = date.getMinutes()

  const hStr = h < 10 ? `0${h}` : h
  const mStr = m < 10 ? `0${m}` : m
  const dayStr = dt < 10 ? `0${dt}` : dt
  const monthStr = month < 10 ? `0${month}` : month

  return `${dayStr}/${monthStr}/${year} ${hStr}:${mStr}`
  // return formatDateTime(dateStr, 'DATE_TIME')
}

export const transformDate2 = (dateStr: string) => {
  // const date = new Date(dateStr)
  // const year = date.getFullYear()
  // const month = date.getMonth() + 1
  // const dt = date.getDate()

  // const dayStr = dt < 10 ? `0${dt}` : dt
  // const monthStr = month < 10 ? `0${month}` : month

  // return `${dayStr}-${monthStr}-${year}`
  return formatDateTime(dateStr)
}

export const transformDate3 = (dateStr: string) => {
  // const date = new Date(dateStr)
  // const year = date.getFullYear()
  // const month = date.getMonth() + 1
  // const dt = date.getDate()
  // const h = date.getHours()
  // const m = date.getMinutes()

  // const hStr = h < 10 ? `0${h}` : h
  // const mStr = m < 10 ? `0${m}` : m
  // const dayStr = dt < 10 ? `0${dt}` : dt
  // const monthStr = month < 10 ? `0${month}` : month

  // return `${hStr}:${mStr} ngày ${dayStr}-${monthStr}-${year}`
  return formatDateTime(dateStr, 'DATE_TIME')
}
