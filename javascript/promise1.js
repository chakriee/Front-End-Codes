let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let wedding = "i promise you i will never leave you";

        reject("family wont agree");
        resolve(wedding);
    },2000);
})
pro.then((weddingFinal)=>{
    console.log(weddingFinal);
}).catch((error)=>{
    console.log("still my family wont accept, wait");
})