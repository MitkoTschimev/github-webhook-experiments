var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/', secret: 'testsecret' })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 200
    res.end('')
  })
}).listen(7777)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)

    console.log(event.payload.commits);
    console.log(event.payload.head_commit);
})

handler.on('pull_request', function (event) {
  console.log('Received an pull_request event for ')

    console.log(event.payload);
})

handler.on('pull_request_review_comment', function (event) {
  console.log('Received an pull_request_review_comment')

    console.log(event.payload);
})