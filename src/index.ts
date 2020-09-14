import 'dotenv/config'
import app from './server'
import client from './bot'

client.login(process.env.BOT_TOKEN)
app.listen(3333)
