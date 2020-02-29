export const checkStatus = response => {
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

export const handleError = err => console.error(err)

export const responseData = res => res.body.data
