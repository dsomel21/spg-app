const express = require('express')
const router = express.Router()

router.get('/tracks', (req, res) => {
  res.json({
    success: true,
    res: '/tracks'
  })
})

module.exports = router
