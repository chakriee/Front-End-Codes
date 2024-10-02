let day = "monday";
let game;

switch(day){
    case "monday":
    case "thursday":
        game="cricket";
        break;
    case "tuesday":
        game="tennis";
        break;
    case "saturday":
    case "friday":
        game="hockey";
        break;
    case "sunday":
        game="relax";
        break;
    default:
        console.log("unknown present");
}