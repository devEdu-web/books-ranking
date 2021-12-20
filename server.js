import {app} from './src/app.js'
const port = 5000


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Listening on port ${port}`)
})