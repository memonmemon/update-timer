var number_html = document.getElementById("number");
var user_input = document.getElementById("user_input");
var result = document.getElementById("result");
var start_btn = document.getElementById("start_btn");



var runn = 0;
var interval;
function start(){
    if (user_input.value){
        interval = setInterval(function(){
            if(runn >= 1200){
                clearInterval(interval);
                runn = 0;
                number_html.innerText = runn;
                result.innerText = "late";
                start_btn.disabled = false;
            }else{
                runn++;
                number_html.innerText = runn;
            }
        }, 11);
        start_btn.disabled = true;
    }
    else{
        alert("enter number");
    }
}

function stop(){
    console.log(user_input.value);
    console.log(runn);
    clearInterval(interval);
    if(user_input.value == runn){
        result.innerText = "winner";
    }
    else{
        result.innerText = "loser";
    }
    runn = 0;
    number_html.innerText = 0;
    start_btn.disabled = false;
}