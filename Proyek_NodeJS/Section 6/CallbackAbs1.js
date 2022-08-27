const request = require("request")

const dataset = (chooise, callback) => {
    const url = "https://gorest.co.in/public/v2/" + chooise //api dari online gratisan
    request({ url: url }, (error, response) => {
        if (response) {
            const data = JSON.parse(response.body)
            callback(undefined, data);
        }
        else if(error){
            callback("this error", undefined);
        }
    })

}

module.exports = dataset