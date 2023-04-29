const nodemailer = require('nodemailer')

const sendMail = async (mailOptions) => {

  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      type:'OAuth2',
      user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN

    }
  });

  let info = await transporter.sendMail(mailOptions)

  console.log(` message send : ${info}`)
}
// let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN
//       }
//     });
module.exports = sendMail
