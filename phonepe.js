let amount  = document.querySelector(".amount")
let password = document.querySelector(".password")
let form = document.querySelector("#form")
let loader  =  document.querySelector(".loader")
let openEye = document.querySelector(".fa-solid")
openEye.addEventListener('click',hideShowPassword)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
    if(amount.value!="" && password.value!="" && amount.value!=0){
        paymentMode()
   
}
})
let isPass = true;
function hideShowPassword(){
    if(isPass){
        password.setAttribute('type','text')
        openEye.classList.remove('fa-eye-slash')
        openEye.classList.toggle('fa-eye')
        isPass= false;
    }else{
        password.setAttribute('type','password')
        openEye.classList.remove('fa-eye')
        openEye.classList.add('fa-eye-slash')
        isPass=true
    }

}

function successMsg(element){
    let ele = element.parentElement
    let errorEle = ele.querySelector(".error")
    errorEle.style.display="none"
    errorEle.innerText =""
}

function errorMsg(element,message){
    let ele = element.parentElement
    let errorEle = ele.querySelector(".error")
    errorEle.style.display="block"
    errorEle.innerText=message
}

function validate(){
    let amt = amount.value.trim()
    let psd = password.value.trim()

    if(amt ==="" || amt ==0){
        errorMsg(amount,"Please Enter Amount")
    }
    else{
        successMsg(amount)
        
    }if(psd===""){
        errorMsg(password,"Password cannot be empty")
    }else{
        successMsg(password)
    }
}


function paymentMode(){
    let balance = 3000
    let security_pin = 1234
    let amt = amount.value.trim()
    let psd = password.value.trim()
    let error = document.querySelector(".mainError")
    error.style.display="none"
    error.innerHTML=""
    loader.style.display="block"

       return  setTimeout(()=>{
            loader.style.display="none"

       

        if(amt<=balance && psd==security_pin&amt>0){
          
            error.style.display="block"
            error.innerHTML="Payment Successfull"
            
        }else if(psd!=security_pin){
            error.style.display="block"
            error.innerHTML="Password is  Incorrect"
        }else if(amt>balance ){
            error.style.display="block"
            error.innerHTML="Insufficient Balance"
        }else{
            error.style.display="none"
            error.innerHTML=""
        }

    },2000)
    
}



