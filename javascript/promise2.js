function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={
                id : "1012",
                name : "alia",
                movie : "gangubhai"
            }
            resolve(data);
            reject(new Error("failed to fetch the data"));
        },3000);
    })
}
fetchData().then(data=>{
    console.log("data fetched sucessfully",data);
}).catch(error=>{
    console.log("error occured", error.message);
})