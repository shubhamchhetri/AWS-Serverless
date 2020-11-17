const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'ap-south-1', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    const params = {
        Item: {
            "UserId": {
                S: "das43f"
            },
            "Age": {
                N: "28"
            },
            "Height": {
                N: "52"
            },
            "Income": {
                N: "2500"
            }
        },
        TableName: "compare-yourself"
    };
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log(data);
            callback(null, data);
        }
    });
};
