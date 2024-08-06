// clean code
function myfunction(input) {
    // x = 888
    let x = document.getElementById('calc').value;

    if(typeof input == 'number'){
        document.getElementById('calc').value += input;
    } 
    else if(x.charAt(x.length - 1) === '*' || x.charAt(x.length - 1) === '/'){
        let y = document.getElementById('calc').value;
        document.getElementById('calc').value = y.slice(x, x.length -1);
        document.getElementById('calc').value += input 
    }
    else if((x.charAt(x.length - 1) === '+' && input === '-') || (x.charAt(x.length - 1) === '-' && input === '+')){
        document.getElementById('calc').value += input;
    }
    else if(x.charAt(x.length - 1) === '.' || x.charAt(x.length - 1) === '+' || x.charAt(x.length - 1) === '-' || x.charAt(x.length - 1) === '*' || x.charAt(x.length - 1) === '/'){
        document.getElementById('calc').value = document.getElementById('calc').value;
    }
    else{
        document.getElementById('calc').value += input;
    }
}


function operation() {
    let x = Function("return " + document.getElementById('calc').value)();
    document.getElementById('calc').value = x;

}























// let output = 0;
// function myfunction(input) {
//     // document.getElementById('calc').value = document.getElementById('calc').value += input;
//     let x = document.getElementById('calc').value;
//     // console.log(x);
    
//     // if (x.charAt(x.length - 1) === '+' || x.charAt(x.length - 1) === '-' || x.charAt(x.length - 1) === '*' || x.charAt(x.length - 1) === '/') {
//     //     // alert('Invalid input!');
//     //     document.getElementById('calc').value = document.getElementById('calc').value += input;
//     //     document.getElementById('calc').value = document.getElementById('calc').value.slice(0, -1);
//     // }
//     // console.log(typeof input)
//     // if (typeof input === 'number') {
//     //     document.getElementById('calc').value = document.getElementById('calc').value += input;
//     // } 
//     // if(x.charAt(x.length - 1) === '+'){
//     //     document.getElementById('calc').value = document.getElementById('calc').value;
//     //     // document.getElementById('calc').value = document.getElementById('calc').value.slice(0, -1);
//     //     console.log(document.getElementById('calc').value)
//     // }
//     // else{
//     //     document.getElementById('calc').value += input;
//     // }
//     // console.log(x)
//     // if (x.charAt(x.length - 1) === '=') {
//     //     let y = eval(document.getElementById('calc').value.slice(0, -1));
//     //     document.getElementById('calc').value = y;
//     // }

//     if(typeof input == 'number'){
//         document.getElementById('calc').value += input;
//     }
//     else if(x.charAt(x.length - 1) === '.' || x.charAt(x.length - 1) === '+' || x.charAt(x.length - 1) === '-' || x.charAt(x.length - 1) === '*' || x.charAt(x.length - 1) === '/'){
//         document.getElementById('calc').value = document.getElementById('calc').value;
//         // document.getElementById('calc').value = document.getElementById('calc').value.slice(0, -1);
//         // console.log(document.getElementById('calc').value)
//     }
//     else{
//         document.getElementById('calc').value += input;

//     }
// }



// function operation() {
//     // const str= "football"
//     // const regex = new RegExp("foo*")
//     // console.log(regex.test(str))

//     // let regex = new RegExp("^[0-9+\-*\/\(\)]*$") ;

//     //   let regex = new RegExp("[\d]+(\s*[\+\-\*\/]\s*[\d]+)+");
//     //     output = document.getElementById('calc').value;
//     //     console.log(output)
//     //     console.log(regex.test(output))

//     // let regex = new RegExp("[\\d]+(\\s*[\\+\\-\\*\\/]\\s*[\\d]+)+");
//     // let regex = new RegExp("[\\d]+(\\s*[\\+\\-\\*\\/]\\s*[\\d]+)+|([\\+\\-]{2,})|([\\+\\-]\\s*[\\+\\-])");
//     // let regex = new RegExp("[\\d]+(\\s*[\\+\\-\\*\\/\\.]\\s*[\\d]+)+|([\\+\\-]{2,})|([\\+\\-]\\s*[\\+\\-])");
//     // let regex = new RegExp("[\\d]+(\\s*[\\+\\-\\*\\/\\.\\*\\*\\/\\/\\.\\.]+\\s*[\\d]+)+|([\\+\\-]{2,})|([\\+\\-]\\s*[\\+\\-])");
// // let regex = new RegExp("[\d]+(\s*[\+\-\*\/\.\*\*\/\/\.\.]+\s*[\d]+)+|([\+\-]{2,})|([\+\-]\s*[\+\-])|^0+");

//     // let regex = new RegExp("[\\d]+(\\s*[\\+\\-\\*\\/\\.\\*\\*\\/\\/\\.\\.]+\\s*[\\d]+)+|([\\+\\-]{2,})|([\\+\\-]\\s*[\\+\\-])|^0+");    output = document.getElementById('calc').value;
//     // console.log(output);
//     // console.log(regex.test(output));

//     // console.log(output.charAt(output.indexOf('+') + 1));

//     // let output = document.getElementById('calc').value;
//     //  if(output.charAt(output.indexOf('+'))){
//     //     if(output.charAt(output.indexOf('+') + 1) == '+' || output.charAt(output.indexOf('+') + 1) == '-' || output.charAt(output.indexOf('-') + 1) == '+' || output.charAt(output.indexOf('+') + 1) == '+' || output.charAt(output.indexOf('+') + 1) == '/'){
//     //         alert('Invalid input!');
//     //         return
//     //     }
//     //     else{
//     //         let x = eval(document.getElementById('calc').value)
//     //         document.getElementById('calc').value = x;
//     //     }
//     //  }
//     // let userInput = "2+4";
//     // let result = Function("return " + userInput)(); // which is same as "return 2+4"
//     // console.log(result)

//     // console.log(document.getElementById('calc').value)



//     let x = Function("return " + document.getElementById('calc').value)();
//     document.getElementById('calc').value = x;

//     // try {
//     //     if (typeof x === 'number') {
//     //         document.getElementById('calc').value = x;
//     //     }
//     // } catch (error) {
//     //     alert('Invalid input!');
//     //     document.getElementById('calc').value = '';
//     // }


// }