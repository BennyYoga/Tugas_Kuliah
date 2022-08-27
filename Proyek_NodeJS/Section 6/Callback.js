const getcode = (callback) =>{
    setTimeout(() => {
        const data = {
            panjang : 0,
            lebar : 0,
        }

    callback(data)
    }, 1000);
}

getcode((data) => {
    console.log(data);
})