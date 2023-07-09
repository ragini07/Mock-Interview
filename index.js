// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const output = document.querySelector("#output");

// input2.addEventListener('input',()=>{
//     output.innerText = Number(input1.value)+Number(input2.value);
// })

// const input = document.querySelector("#input");
// const output1 = document.querySelector("#output1");

// input.addEventListener('input',()=>{
//   if(!input.value.includes("@"))
//     output1.innerText = "invalid";
//   else
//    output1.innerText = "valid";  

// })
// input.addEventListener('input',()=>{
//   let email = input.value;
//   let flag =0;
//   for(var i =0;i<email.length;i++){
//     if(email[i] == "@")
//     {
//       flag=1;
//     }   
//   }
//   if(flag==1)
//    output1.innerText = "valid";  
//   else
//    output1.innerText = "invalid";


//   })
  

// const passwordInput = document.querySelector("#password");
// const validateBtn = document.querySelector("#validate");
// const output = document.querySelector("#output");

// validateBtn.addEventListener("click",()=>{
//   if(passwordInput.value.length > 10){
//     output.innerText = "valid"
//     output.style.color = "green";
//   }
     
//    else if(passwordInput.value.length == 10)
//    {
//     output.innerText = "yup ok!! can be better"
//     output.style.color = "blue";
//    }
//   //   validateBtn.disabled =  true;
//   else{
//     output.innerText = "invalid"
//     output.style.color = "red";

//   }
     
// })

// passwordInput.addEventListener('input',()=>{
//   if(passwordInput.value.length == 10)
//     passwordInput.disabled =  true;
//  // else if(passwordInput.value.length > 10)
//   else
//    validateBtn.disabled =  false;

// })




// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const validate = document.querySelector("#validate");

// validate.disabled = true;

// input1.addEventListener('input',()=>{
//   if(input1.value.length>0 && input2.value.length>0)
//     validate.disabled = false;
//   else
//     validate.disabled = true;
// })
// input2.addEventListener('input',()=>{

// if(input1.value.length>0&&input2.value.length>0)
// validate.disabled = false;
// else
// validate.disabled = true;
// })



// const input = document.querySelector("#input");
// const checkBtn = document.querySelector("#check");
// const output = document.querySelector("#output");

// checkBtn.addEventListener('click',()=>{
//   if(isNaN(input.value))
//   {
//     output.innerText = "its a string"
//   }
//   else
//     output.innerText = "its a number"
// })



// const input = document.querySelector("#input");
// const redBtn = document.querySelector("#red-btn");
// const greenBtn = document.querySelector("#green-btn");
// const output = document.querySelector("#output");



// redBtn.addEventListener('click',()=>{
//   output.innerText = input.value;
//   output.style.color = "red";

// })

// greenBtn.addEventListener('click',()=>{
//   output.innerText = input.value;
//   output.style.color = "green";

// })



// const input = document.querySelector("#input");
// const increaseBtn = document.querySelector("#increase");
// const decreaseBtn = document.querySelector("#decrease");

// function clickHandler(){
//   decreaseBtn.disabled = false;
//   input.innerText = Number(input.innerText)+1;
//   console.log("ragini")
// }


// increaseBtn.addEventListener('click',clickHandler);
// decreaseBtn.addEventListener('click',()=>{
//   // console.log(input.innerText);
//   input.innerText = Number(input.innerText)-1;
//   if(Number(input.innerText)===0)
//     decreaseBtn.disabled = true;
//   else
//     decreaseBtn.disabled = false;

//  })
 


// const input = document.querySelector("#input");
// const output1 = document.querySelector("#output1");
// const output2 = document.querySelector("#output2");
// const greenBtn = document.querySelector("#btn-green");
// const redBtn = document.querySelector("#btn-red");
// let counter = 0;
// // console.log(input.value.length);
// greenBtn.addEventListener('click',()=>{
//     output2.innerText = input.value;
//     output2.style.color = "green";
//     //console.log(input.value.length);

//     for(let i=0;i<input.value.length;i++){
//       if(input.value[i]!==' ')
//         counter++;
//     }
//     //console.log(counter)
//     output1.innerText = counter;
// })
// redBtn.addEventListener('click',()=>{
//   output2.innerText = input.value;
//   output2.style.color = "red";

// })




// const fetchBtn = document.querySelector("#fetchApiBtn");
// const output = document.querySelector("#output");

// const url = 'https://jsonplaceholder.typicode.com/todos';
// let str;
// fetchBtn.addEventListener('click',()=>{
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//    // console.log(data);
//     data.forEach((item)=>{
//       output.innerHTML += `<p>${item.userId}</p>  <p>${item.title}</p>`;

//         console.log(item.userId);
//         console.log(item.title);
//     })

//   })
// })

// Q1) Create an Input Element, which shows a display message according to the Input text. 
// If you type - 
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"

// const input = document.querySelector("#input");
// const output = document.querySelector("#output");

// input.addEventListener('input',()=>{
//   if(input.value === 'Tanvi')
//     output.innerText = "she is CEO"
//   else if(input.value === 'Tanay')
//    output.innerText = "he is funny bro"
//   else if(input.value === 'Swapnil')
//    output.innerText = "He helps us CONQUER jobs!"
//   else if(input.value === 'Akanksha')
//    output.innerText = "She is our CHEERFUL Interviewer!"
//   else  
//     output.innerText = "bad input"
// })


// Q1) Create 2 buttons with text YJHD and ZNMD. On the click of a button, call given API with query as same as the button text, and display the message you get on the screen. 
// API - https://mock-practice.prakhar10v.repl.co/bollywood?name= 

// Eg - Clicking on button YJHD will make a call to https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD .


// queryselectorall

// const btnyjhd = document.querySelector("#YJHD");
// const btnznmd = document.querySelector("#ZNMD");
// const button = document.querySelectorAll('button');

// const url='https://mock-practice.prakhar10v.repl.co/bollywood?name=';

// button.addEventListener('click',(e)=>{
  
//   if(e.target.id === 'YJHD')
//     fetchAPI('YJHD');
//   else if(e.target.id == 'ZNMD')
//     fetchAPI('ZNMD');
// })

// btnyjhd.addEventListener('click',()=>{
//   fetchAPI('YJHD');
// })
// btnznmd.addEventListener('click',()=>{
//   fetchAPI('ZNMD');
// })


// function fetchAPI(film){
//  // console.log(url+film)
//   fetch(url+film)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })

// }


// const btnInput = document.querySelector("#loaded");
// const output = document.querySelector("#output");

// btnInput.addEventListener('click',()=>{
//   if(output.style.display =='none')
//       output.style.display ='block';
//   else
//       output.style.display ='none';
  
// })

//border hide and show and content




// const submitBtn = document.querySelector("#submit");
// const input = document.querySelector("#age");
// const output = document.querySelector("#output")

// submitBtn.addEventListener('click',()=>{
//   if(Number(input.value)>18){
//         output.innerText = "you are eligible"
//   }
//   else {
//     output.innerText = `${18 - Number(input.value)} years left to be eligible`;
//   }
// })


// const billAmount = document.querySelector("#bill-amount");
// const cashGiven = document.querySelector("#cash-given");
// const output1 = document.querySelector("#output1")

// cashGiven.addEventListener('input',()=>{

//   if(Number(cashGiven.value)>Number(billAmount.value) ){
//       output1.innerText = `${Number(cashGiven.value)-Number(billAmount.value)} amount to be returned`;
//   }
//   else{
//     output1.innerText = `${Number(billAmount.value)-Number(cashGiven.value)} amount to be given by customer`
//   }
// })



// const input = document.querySelector("#password");
// const output = document.querySelector("#output");
// const submitBtn = document.querySelector("#submit");

// submitBtn.disabled = true;
// submitBtn.addEventListener('click',()=>{
//   if(input.value.length<10){
//       output.innerText = "error";
//       output.style.color = "red"
//   }
//   else{
//     output.innerText = "success"
//     output.style.color = "green"
//   }
// })
// input.addEventListener('input',()=>{
//   console.log("ragini")
//     if(input.value.length>10 && input.value.includes("@")){

//       submitBtn.disabled = false;
//     }
//     else
//     submitBtn.disabled = true;
// })


// const currentinput = document.querySelector("#current-price");
// const checkBtn = document.querySelector("#check");
// const output = document.querySelector("#output");
// const cpinput = document.querySelector("#cost-price");

// checkBtn.addEventListener('click',()=>{
//   var cp = cpinput.value;
//   var sp = currentinput.value;
//   if(cp>sp)
//     output.innerText = "loss"
//   else
//      output.innerText = "profit"
// })


// const username = document.querySelector("#username");
// const output = document.querySelector("#output");
// const submitBtn = document.querySelector("#submit");
// const validate = document.querySelector("#validate");
// const otp = document.querySelector("#otp");
// const output1 = document.querySelector("#output1");
// const url = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name='
// submitBtn.addEventListener('click',()=>{
//   const name = username.value;
//   fetch(url+name)
//     .then(response => response.json())
//     .then(data => {
//       output.innerText = data.otp;
//       const arr = data.otp.split('-');
//       if(arr[1] == otp.value){
//           output1.innerText = "success"
//       }
//       else{
//         output1.innerText = "failure"
//         output1.style.border ="5px solid"
//       }
     

//     })
// })

// const button = document.querySelector("#button");
// const output = document.querySelector("#output");
// output.innerHTML = `<p style="color:${colourvariable}"></p>`

// button.addEventListener('click',()=>{
//   if(output.style.border !== 'none'){
//         output.style.border = 'none';
//   }
//   else
//     output.style.border = '5px solid'
// })


// const fetchBtn=document.querySelector("#fetch-btn");
// const outputDiv=document.querySelector("#output")

// console.log(outputDiv,fetchBtn)
// fetchBtn.addEventListener("click",()=>{ 
//     var arr=[]
//     var url="https://randomuser.me/api/?results=10"
//     fetch(url).then(response=>response.json())
//     .then(data=>data.results.map(item=>{
        
//         if(item.dob.age>45){
//             color="green"
//         }else{
//           color="black"
//         }
//       arr.push(<h1 style="color:`${color}`">${item.name.first}</h1>)
      
//     })
//     )
//     outputDiv.innerHTML=arr.join("")
// })

// const fetchBtn=document.querySelector("#fetch-btn");
// const outputDiv=document.querySelector("#output")

// console.log(outputDiv,fetchBtn)
// fetchBtn.addEventListener("click",()=>{ 
//     var arr=[]
//     var url="https://randomuser.me/api/?results=10"
//     fetch(url).then(response=>response.json())
//     .then(data=>data.results.map(item=>{
//         console.log(item)
//         if(item.dob.age>45){
//             color="green"
//         }else{
//           color="black"
//         }
//       arr.push(<h1 style="color:${color};">${item.name.first}</h1>+<p>${item.dob.age}</p>);
//       outputDiv.innerHTML=arr.join("")
//     }))
// })


//Add a text field. Insert a sentence. Now create a button. On clicking the button, highlight the word in the sentence with most number of characters
// const inputText = document.querySelector("#text");
// const submitBtn = document.querySelector("#submit");
// const output = document.querySelector("#output")
// let maxCharacterWord = 0;
// let text = '';
// submitBtn.addEventListener('click',()=>{
//   let str = inputText.value;
//   const words = str.split(' ');

//   //to find length of max character word and keep the copy of that word
//   for(var i =0 ; i<words.length;i++){
//     if(words[i].length > maxCharacterWord){
//       maxCharacterWord = words[i].length;
//       text = words[i];
//     }  
//   }

//   var index = str.indexOf(text);
//   if (index >= 0) { 
//     str = str.substring(0,index) + "<span class='highlight'>" + str.substring(index,index+text.length) + "</span>" + str.substring(index + text.length);
//     output.innerHTML = str;
//    }
//    console.log(index,str);
// })


// const textInput = document.querySelector("#text-input");
// const colorInput = document.querySelector("#color-input");
// const output1 = document.querySelector("#output1")

// textInput.addEventListener('input',()=>{
//     output1.innerText = textInput.value;
//     output1.style.color = colorInput.value;
// })


// const URL = 'https://coderbyte.com/api/challenges/json/age-counting';
// fetch(URL,{'mode': 'no-cors'})
//   .then(response => response.json())
//   .then(data => {
//       console.log(data);
// })

//   fetch(url+film)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })


// const fetchBtn = document.querySelector("#fetchURL");
// const output = document.querySelector("#output");

// const url = 'https://nftbaazarapi.rawheatg.repl.co/product';
// var str = '';
// fetchBtn.addEventListener('click',()=>{
//   fetch(url)
//     .then(response => response.json())
//     .then(result => {
//       result.data.forEach(item => {
//         if(Number(item.price)>500)
//          str+= `<p>${item.name}</p> and <p>${item.price}</p>`
//       });
        
//     })
//     output.innerHTML = str;
//     output.style.color = "red"
// })


// const sixtyMinBtn = document.getElementById('60min');
// const thirtyMinBtn =  document.getElementById('30min');
// const fourtyFiveMinBtn = document.getElementById('45min');
// const cancelBtn =   document.getElementById('cancelAlarm');


// function setAlarm(event) {
//     let minutes = parseFloat(event.target.value);
//     // chrome.browserAction.setBadgeText({text: 'ON'});
//     // chrome.alarms.create({delayInMinutes: minutes});
//     // chrome.storage.sync.set({minutes: minutes});
//     // window.close();
//     console.log(minutes)
//   }
  
//   function clearAlarm() {
//     // chrome.browserAction.setBadgeText({text: ''});
//     // chrome.alarms.clearAll();
//     // window.close();
//     console.log("rags")
//   }
  

// sixtyMinBtn.addEventListener('click', setAlarm);
// fourtyFiveMinBtn.addEventListener('click', setAlarm);
// thirtyMinBtn.addEventListener('click', setAlarm);
// cancelBtn.addEventListener('click', clearAlarm);




function sum(...arr){
  var sum=0;
  for(var i of arr){
    sum+=i;
  }
  return sum;
}

console.log(sum(2,3));
console.log(sum(3,4,5));

var person={name:"ragini",
            city: "jsr"}

var person1 = {...person}

var a=[2,3,4,5,67,1]
console.log(Math.min(...a))