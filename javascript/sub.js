onmessage=function(event){
    let x=event.data;
    let res=x-3;
    this.postMessage(res);
}