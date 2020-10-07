const User = require('../models/User')
const config = require('config')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = app => {
  // Register
  app.post(
    '/api/register',
    [
      body('email').isEmail(),
      body('fullName').not().isEmpty(),
      body('pseudo').not().isEmpty(),
      body('password').isLength({ min: 6 })
    ],
    async (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email, fullName, pseudo, password } = req.body

      try {
        const existing = await User.findOne({ email })
        if (existing) return res.status(403).send({ error: 'Email déjà utilisé' })

        const newUser = new User({
          email,
          fullName,
          pseudo,
          password,
          avatar: 'https://i.imgur.com/eLL8rXD.jpg'
        })

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        newUser.password = hashPassword
        await newUser.save()

        const payload = {
          user: {
            id: newUser.id
          }
        }
        const token = jwt.sign(payload, config.get('tokenSecret'), { expiresIn: 60 * 60 * 24 })
        res.send({ token })
      } catch (err) {
        console.log(err.message)
        return res.status(500).send({ error: 'Erreur serveur' })
      }
    }
  )

  // Login
  app.post('/api/login', [body('email').isEmail(), body('password').not().isEmpty()], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })
      if (!user) return res.status(404).send({ error: 'Mauvais email / mot de passe' })

      const checkPassword = await bcrypt.compare(password, user.password)
      if (!checkPassword) return res.status(404).send({ error: 'Mauvais email / mot de passe' })

      const payload = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(payload, config.get('tokenSecret'), { expiresIn: 60 * 60 * 24 })
      res.send({ token })
    } catch (err) {
      console.log(err.message)
      return res.status(500).send({ error: 'Erreur serveur' })
    }
  })
}
