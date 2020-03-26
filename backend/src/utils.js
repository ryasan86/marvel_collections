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
  return console.error('Something went wrong: ', err)
}

const responseData = res => {
  return res.body.data
}

const stopWords = ['a', 'also', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'but', 'by', 'for', 'from', 'in', 'into', 'is', 'of', 'on', 'or', 'so', 'some', 'such', 'the', 'was', 'were', 'with']

const optimizeTerm = str => {
  const commonRegex = new RegExp(`\\b(${stopWords.join('|')})\\b`, 'gi')
  return str
    .replace(/[^a-z0-9]/gi, ' ')
    .replace(commonRegex, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

module.exports = { checkStatus, handleError, responseData, optimizeTerm }
