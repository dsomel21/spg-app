const express = require('express')
const aws = require('aws-sdk')
const mongoose = require('mongoose')

// App
const app = express()
mongoose
  .connect(
    process.env.DATABASE,
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log('Database Connected...')
  })

// Import Routes
const trackRoutes = require('./routes/track')

// Use Imported Routes
app.use('/api/v1/', trackRoutes)

app.get('/spg', (req, res) => {
  // This enables promises in AWS SDK
  console.log(process.env)
  aws.config.setPromisesDependency()
  aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  })

  const s3 = new aws.S3()
  const response = s3
    .listObjectsV2({
      Bucket: 'spg-audio'
    })
    .promise()
    .then(function (files) {
      return files.Contents
    })
})

app.get('/', (req, res) => res.json({ success: true, message: 'Welcome' }))

app.listen(3000, () => console.log('App listening on PORT: 3000.'))
