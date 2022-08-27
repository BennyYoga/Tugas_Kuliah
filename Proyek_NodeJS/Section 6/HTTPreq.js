const request = require("request")
const url = "https://gorest.co.in/public/v2/users" //api dari online gratisan

request({url : url}, (error,response) => {
    if (response){
        const data = JSON.parse(response.body)
        console.log(data);
    }
    else{
        console.log(error);
    }
})