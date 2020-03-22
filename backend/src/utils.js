const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`)
    error.status = response.statusText
    error.response = response
    console.error(error)
    throw error
  }
}

const handleError = err => {
  return console.error(err)
}

const responseData = res => {
  return res.body.data
}

module.exports = { checkStatus, handleError, responseData }
