require('dotenv').config();
const nodemailer = require('nodemailer')
const userVcodes = {}

const generateCode = () => Math.floor(1000 + Math.random() * 9000)

const emailCode = async (email, code) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })
    let mailOptions = {
        from:{
            name:'SocialText',
            address:'k417hussain@gmail.com'
        },
        to:email,
        subject:'Email Verification Code',
        text: `Your verification code for SocialText is ${code}`
    }

    await transporter.sendMail(mailOptions)
}

const sendCode = async (email) => {
    const vCode = generateCode();
    userVcodes[email] = vCode
 
    await emailCode(email,vCode)
  
}

const verifyCode = (email, code) => {
    const storedvCode = userVcodes[email]

    if(storedvCode && storedvCode===parseInt(code,10)){
        delete userVcodes[email]
        return true
    } else {
        return false
    }
}

module.exports = {sendCode, verifyCode}