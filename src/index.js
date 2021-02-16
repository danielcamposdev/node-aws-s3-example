require('dotenv').config();

var AWS = require('aws-sdk');

AWS.config.update({region: process.env.AWS_DEFAULT_REGION});

s3 = new AWS.S3({apiVersion: '2006-03-01'});

s3.listBuckets((err, data) => {
    if (err) {
        console.log("Error", err)
    } else {
        console.log("Sucess", data.Buckets);
    }
});