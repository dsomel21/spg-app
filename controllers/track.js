const Track = require('../models/track')

exports.createTrack = (req, res) => {
  console.log('HELLLOOO WORLLLD!')
  console.log(req.body)
  const newTrack = new Track({
    name: req.body.name,
    description: req.body.description
  })
  newTrack.save((data, err) => {
    if (err) {
      console.log(`Error saving. ${err}`)
      return res.status(400)
    }
    res.json(data)
  })
  // const
}

exports.deleteTrack = (req, res) => {}
