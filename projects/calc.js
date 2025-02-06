

function getNumbers(){
    const firstNum = document.getElementById("first-number").value;
    const num1 = Number(firstNum);

    const secondNum = document.getElementById("second-number").value;
    const num2 = Number(secondNum);

    return [num1,num2];
}

function showOutput(result){

    if(result<0){
        document.getElementById("output").style.color="red"; 
    }
    else{
        document.getElementById("output").style.color="black"; 
    }
    document.getElementById("output").innerHTML=String(result); 
}

function addition(){
    const [num1, num2] = getNumbers();
    const output = num1+num2;
    showOutput(output);
}

function subtraction(){
    const [num1, num2] = getNumbers();
    const output = num1-num2;
    showOutput(output);
}

function multiplication(){
    const [num1, num2] = getNumbers();
    const output = num1*num2;
    showOutput(output);
}

function division(){
    const [num1, num2] = getNumbers();
    const output = num1/num2;
    showOutput(output);
}

function power(){
    const [num1, num2] = getNumbers();
    let output = 1;
    for(let step = 0; step < num2; step++){
        output *= num1;
    }
    showOutput(output);
}

function clearNumbers(){
    document.getElementById("first-number").value=""; 
    document.getElementById("second-number").value=""; 
    document.getElementById("output").innerHTML=""; 
}
