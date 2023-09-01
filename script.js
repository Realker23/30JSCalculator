const equal = document.querySelector(".equal");
const display = document.getElementById("display");




function alertOperator(){
    let sLL = display.value.toString().slice(-2,-1);
    let LL = display.value.toString().slice(-1);

    if((sLL.match(/\*/) || sLL.match(/\//) || sLL.match(/\-/) || sLL.match(/\+/)) && (LL.match(/\*/) || LL.match(/\//) || LL.match(/\-/) || LL.match(/\+/))){
        alert("dont add consecutive operators");
    }
}


display.addEventListener('keyup',alertOperator);
document.addEventListener('click', alertOperator);


equal.addEventListener("click", () =>{
    display.value = eval(display.value);   
});

document.addEventListener('keypress', (e)=>{
    if(e.key==="Enter"){
        display.value = eval(display.value); 
    }
});

