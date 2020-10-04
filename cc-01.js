function fibonacci(){

    const seq = Number(document.getElementById("c01_inp").value);
    if(!Number.isInteger(seq)){
        document.getElementById("c01_result").innerHTML = "Please Enter an Integer Value!";
        return;
    }
    let prevNum = 0;
    let currentNum = 1;
    let tempNum = 0;

    for(i=1; i<seq; i++){
        tempNum = currentNum;
        currentNum += prevNum;
        prevNum = tempNum;
    }
    
    document.getElementById("c01_result").innerHTML = currentNum;
}

document.getElementById("c01_click").addEventListener("click", fibonacci)