let radius = [5, 6.86, 4.3];
let balls = ["Basketball", "Tennis ball", "Football"];

let msg = ". This is a ";
let msgRad = "The radius is ";

let radiusFunc = () => {

    let el = document.getElementsByClassName("answer");
    el[0].textContent = msgRad + radius[0] + msg + balls[0];
    el[1].textContent = msgRad + radius[1] + msg + balls[1];
    el[2].textContent = msgRad + radius[2] + msg + balls[2];
    
}

radiusFunc();