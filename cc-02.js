document.getElementById("c02_click").addEventListener("click", reverse)

function reverse(){
    const inpStr = document.getElementById("c02_inp").value;
    const inpLen = inpStr.length;

    let reverArray = [];

    for(i=0; i<inpLen; i++){
        reverArray.push(inpStr[inpLen-i-1]);
    }
    document.getElementById("c02_result").innerHTML = reverArray.join("");
}

