onmessage  =function(event){
    let x = event.data;
    let res = x+x;
    this.postMessage(res);
}