const express = require('express')
const router = express.Router()
const { createTrack, deleteTrack } = require('../controllers/track')

router.get('/tracks', (req, res) => {
  res.json({
    success: true,
    res: '/tracks'
  })
})

router.post('/tracks', createTrack)

module.exports = router
