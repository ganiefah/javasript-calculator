//declare variables 
const result = document.querySelector('#output');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const equal = document.querySelector('#equal')


// Display
function display(value) {
    if(value == '.' && checkerArray.includes('.')){
        return
    } else if(value == '+' || value == '-' || value == '*' || value == '/'){
    } else {
        result.value += value;
        checkerArray.push(value);
    } 
} 

//muliplication button
document.querySelector('#multiplication')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '*'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

//addition button
document.querySelector('#addition')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '+'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

//division button
document.querySelector('#division')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '/'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

//subtraction button
document.querySelector('#subtraction')
.addEventListener('click', (e)=>{
    let inputArray = result.value.split('');
    console.log(inputArray)
    if(inputArray[inputArray.length-1] === '-'){
        return;
    } else {
        result.value += e.target.innerHTML;
        checkerArray = [];
    }
})

// to remove a value or backspace
document.querySelector('#backspace').
addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})


// Clear button
document.querySelector('#clear')
.addEventListener('click', ()=>{
    let output = result.value;
    result.value = "";
    clear();
})

//equal sign
equal.addEventListener('click', ()=>{
    let output = eval(result.value)
    result.value = output.toFixed(2)
})




 



