
export const transformDate = (unixDate) => {
  const date = new Date(unixDate * 1000)
  const humanDateFormat = date.toLocaleString()

  return humanDateFormat
}

// const unix_timestamp = 1549312452
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// const date = new Date(unix_timestamp * 1000)
// // Hours part from the timestamp
// const hours = date.getHours()
// // Minutes part from the timestamp
// const minutes = '0' + date.getMinutes()
// // Seconds part from the timestamp
// const seconds = '0' + date.getSeconds()

// // Will display time in 10:30:23 format
// const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

// console.log(formattedTime)
