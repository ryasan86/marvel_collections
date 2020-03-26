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

const stopWords = ['a', 'also', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'but', 'by', 'for', 'from', 'in', 'into', 'is', 'of', 'on', 'or', 'so', 'some', 'such', 'the', 'was', 'were', 'with']

const optimizeTerm = str => {
  const regex = new RegExp(`\\s\\([a-z -]+\\)|\\s-|[^a-z0-9 -]|\\b(${stopWords.join('|')})\\b`, 'gi')
  return str.replace(/\//g, ' ').replace(regex, '').trim().toLowerCase()
}

console.log(optimizeTerm('True Believers: Empyre - She-Hulk (2020) #1'))

module.exports = { checkStatus, handleError, responseData, optimizeTerm }
