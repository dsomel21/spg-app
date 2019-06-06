const ENV = require('dotenv').config().parsed
const aws = require('aws-sdk')

// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID

// This enables promises in AWS SDK
aws.config.setPromisesDependency()
aws.config.update({
  accessKeyId: ENV.AWS_ACCESS_KEY_ID,
  secretAccessKey: ENV.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'
})

const s3 = new aws.S3()
const response = s3
  .listObjectsV2({
    Bucket: 'spg-audio'
  })
  .promise()
  .then(function (res) {
    console.log(res.Contents)
  })
