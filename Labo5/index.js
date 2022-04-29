const https = require('https');
const AWS = require('aws-sdk');

const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {
    var url = event.url;
    const request = rekognition.detectLabels({ Image: { Bytes: await readImage(url) } });
    return await request.promise();
};


function readImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);

            var data = [];
            res.on('data', chunk => {
                data.push(chunk);
            });
            
            res.on('end', () => {
                resolve(Buffer.concat(data));
            });

        })
    })
}