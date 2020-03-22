// Todo - Find DB hosting

// Todo - Middleware to see if user is logged in
// 1. use server.use
// 2. check if request has a user associated to it

// Todo - Signup mutation
// 1. user sends username, email and password to server
// 2. check if the user already exists
// 3. if user does not exist encrypt password and save info to db

const Mutation = {
  comments: () => 'comments'
}

module.exports = Mutation
