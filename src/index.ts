import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.links({
    'my-website': 'https://pedrinholemes.web.app',
    'invite-bot': ''
  })
})

app.listen(3333)
