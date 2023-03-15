const express = require('express')
const nodemailer = require("nodemailer");
const port = 3010
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    /*host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports*/
    service: 'gmail',
    /*secure: false,
    port: 25,
    tls: {
        rejectUnauthorized: false
    },*/
    auth: {
        user: 't53035877@gmail.com', // generated ethereal user
        pass: 'gfsxbwywahhiozwm', // generated ethereal password
    },
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/sendMessage', async (req, res) => {

    let {name, email, message} = req.body


    let info = await transporter.sendMail({
        from: 'PORTFOLIO', // sender address
        to: "kavgorenya@gmail.com", // list of receivers
        subject: "Message from portfolio", // Subject line
        //text: "Hello world?", // plain text body
        html: `<b>Сообщение от Portfolio</b>
               <div>Name: ${name}</div>
               <div>Email: ${email}</div>
               <div>Message: ${message}</div>`// html body
    });


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})