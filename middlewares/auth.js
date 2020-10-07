const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) return res.status(403).send({ error: 'Token introuvable' })

  jwt.verify(token, config.get('tokenSecret'), (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: 'Token invalide' })
    } else {
      req.user = decoded.user
      return next()
    }
  })
}
