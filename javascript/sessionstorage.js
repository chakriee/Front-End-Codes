console.log("sessionstorage program");
sessionStorage.setItem("username","chakri");
sessionStorage.setItem("password","dcbusduc");
const username = sessionStorage.getItem("username");
console.log("username from local storage is : " + username);
