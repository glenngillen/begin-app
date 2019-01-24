// Begin enables secure sessions, express-style middleware, and more:
// let begin = require('@architect/functions')

// Basic Begin HTTP POST Function
exports.handler = async function http(req) {
  console.log(req)
  // TODO: add some logic here!
  return {
    type: 'text/html; charset=utf8',
    location: req.headers.referer
  }
}

// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/
