let confirmation = document.querySelector(".sign-btn")
let Name = document.querySelector("#name")
let password = document.querySelector("#password")
let counter = 0
let incorrect = document.querySelector("#incorrect-ui")
let form = document.querySelector("#signin-ui")
let ban = document.querySelector("#banned-ui")
let create_acc = document.querySelector(".createacc")
let guy =true

function confirm(e) {
    e.preventDefault()
    // console.log(localStorage)
    let userarray = JSON.parse(localStorage.getItem(`${Name.value}`))
    console.log(userarray)
    if(userarray == null){
        incorrect.style.display ="block"
    }
 
    else if(Name.value == userarray.name &&password.value == userarray.userpassword ){
        
        let currentname = Name.value
        let currentamount = userarray.useramount
        localStorage.setItem("currentname", currentname)
        localStorage.setItem("currentamount", currentamount)
        window.location = "transaction.html"


    }
    else if(Name.value != userarray.name || password.value != userarray.userpassword){
        incorrect.style.display ="block"
    }

  
}



confirmation.addEventListener("click", confirm)


// function reg(e) {
//     e.preventDefault()
//     window.location = "registration.html"
//     alert("")
    
// }


create_acc.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location = "registration.html"
    
})
