let prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let pro = "i promise you i will gift you iphone 16";
        resolve(pro);
    });
})

let prom2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let pro2 = "next year we will go to goa";
        resolve(pro2);
    });
})

async function getPromise(){
    let pro = await prom1;
    console.log(pro);
    let pro2 = await prom2;
    console.log(pro2);
}
getPromise()