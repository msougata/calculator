const boxes=document.querySelectorAll(".box");
const ac=document.getElementById("#ac")
let num1=null,num2=null,operation=null;
let result=null;
let cuuInp="";

boxes.forEach(box => {
    box.addEventListener("click",() =>{
        const value=box.innerText;
        if (value === "=") {
            // Calculate the result
            if (num1 !== null && num2 !== null && operation !== null) {             
                num1=calculation();
                num2=null;
                operation=null;
                display(num1);
                clear_res(); 
            }
        }
        else if(result!==null){
            num1=result;
            num2=null;
            result=null;
            cuuInp=`${num1}`;
            display(cuuInp);
            clear_res();

        }
        if(value==="AC"){
            num1=null,num2=null,operation=null;
            clear_inp();
        }else if(["+","-","*","/"].includes(value)){
            operation=value;
            cuuInp += `${operation}`;
            display(cuuInp);
        }else{
            if(num1===null){
                num1=parseFloat(value);
                cuuInp += `${num1}`;
                display(cuuInp);
            }else if(operation !== null){
                num2=parseFloat(value);
                cuuInp += `${num2}`;
                display(cuuInp);
                const res=calculation();
                console.log(res);
                dis_result(res);
            }
        }

        
    })
});

//display result
const dis_result = (num) => {
    const disres=document.getElementById("dis-result");
    disres.innerText = num;
};

// display
const display=(num) =>{
    const display=document.getElementsByClassName("cal-input");
    display[0].innerText=num;    
}

//clear 
const clear_inp=()=>{
    const display=document.getElementsByClassName("cal-input");
    display[0].innerText="";
    cuuInp="";
    
};

// clear result

const clear_res=()=>{
    const disres=document.getElementById("dis-result");
    disres.innerText = "";
}



// calculations

const calculation=() => {
    console.log(`num1: ${num1}, num2: ${num2}, operation: ${operation}`);


    switch (operation) {
        case "+":
            result=num1+num2;
            break;

        case "-":
            result=num1-num2;
            break;

        case "*":
            result=num1*num2;
            break;

        case "/":
            result=num1/num2;
            break;

        default:
            break;
    }
    return result;
}

