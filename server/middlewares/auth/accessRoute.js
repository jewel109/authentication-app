const asyncError = require('express-async-handler')
const jwt = require('jsonwebtoken')
const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require('../../helpers/auth/tokenHelper')
const User = require('../../model/user')
const CustomError = require('../Error/CustomError')

const getAccessToRoute = async (req, res, next) => {
  const { JWT_SECRET } = process.env
  try {
    if (!isTokenIncluded(req)) {
      throw Error("token is not included")
    }

    const accessToken = getAccessTokenFromHeader(req)

    if (accessToken == 'null') {

      throw Error("token is null")

    } else if (accessToken != 'null') {

      const decoded = jwt.verify(accessToken, JWT_SECRET)

      console.log(`decoded jsonwebtoken ${decoded}`)

      const user = await User.findById(decoded.id)

      console.log(`in accessroute ${user}`)

      if (!user) {

        throw Error("No user found")

      }
      req.user = user
      next()
    }
  } catch (err) {
    console.log(`server error===${err}`)
    res.status(500).json({ message: "server error", error: `${err}` })
  }
}

module.exports = { getAccessToRoute }
