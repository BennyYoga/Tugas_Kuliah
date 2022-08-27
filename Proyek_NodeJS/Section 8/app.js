
fetch("https://localhost:3001/weather?judul=ini").then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(error);
        }
        else{
            console.log(succes);
        }
    })
})