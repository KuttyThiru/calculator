let buffer = "0";
let runningTotal =0;
let previousOperator;

let screen  = document.querySelector(".screen");

document.querySelector(".calc-buttons").addEventListener("click",function(event){
    // console.log(event);
    buttonclick(event.target.innerText);
})

function buttonclick(value){
    // console.log(value)
    if(isNaN(value)){
        handleSymbols(value)
    }else{
        handleNumbers(value)
    }
    screen.innerText = buffer;
}

function handleNumbers(numberString){
    if(buffer ==="0"){
        buffer = numberString;
    }else{
        buffer += numberString
    }
}
function handleSymbols(symbol){
    switch(symbol){
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "×":
        case "+":
        case "−":
        case "÷":
            handleMath(symbol);   
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0";
            }else{
                buffer = buffer.substring(0, buffer.length -1)
            }
            break;
        case "=":
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
    }
}

function handleMath(symbol){
    console.log(symbol);
    if(buffer === "0"){
        return;
    }

    let intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer)
    }

    previousOperator = symbol;

    buffer = "0";
}

function flushOperation(intBuffer){
    if(previousOperator === "+"){
        runningTotal += intBuffer;
    }else if(previousOperator === "−"){
        runningTotal -= intBuffer;
    }else if(previousOperator === "×"){
        runningTotal *= intBuffer;
    }else{
        runningTotal /= intBuffer
    }

    console.log(runningTotal);
}

