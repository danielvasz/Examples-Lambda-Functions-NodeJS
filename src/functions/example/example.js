const AWS = require('aws-sdk');

exports.example = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            'mensaje': 'HOLA AMIGO'
        }),
    };
};