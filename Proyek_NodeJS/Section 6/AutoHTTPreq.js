const request = require('request')
const url = "https://gorest.co.in" //api dari online gratisan

request({url : url , json : true}, (error,response) => {
    if(error){
        console.log("this error code");
    }
    else if (response){
        console.log(response.body[1]);
    }
})