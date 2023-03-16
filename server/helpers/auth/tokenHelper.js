const isTokenIncluded = (req) => {

  console.log(`in isTokenIncluded ${req}`)
  return (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))


}

const getAccessTokenFromHeader = (req) => {

  const authrization = req.headers.authorization;
  console.log(`headersAuthrization =${authrization}`)
  const accessToken = authrization.split(" ")[1];
  console.log(`access token =${accessToken}`)
  return accessToken;
}


const sendToken = (user, statusCode, res, msg) => {
  const token = user.generateJwtFromUser();
  // console.log(user)
  // console.log(token);
  console.log(`in sendtoken token=[${token}]`)
  res.status(statusCode).json({
    success: true,
    token,
    msg
  });
};
module.exports = { sendToken, isTokenIncluded, getAccessTokenFromHeader };
