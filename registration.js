let tosiginin = document.querySelector(".button")
let Username = document.querySelector("#createusername")
let  amount= document.querySelector("#createamount")
let pin = document.querySelector("#createpassword")
let count = 0
let tosign = document.querySelector(".dir")
const userarray = []
let guy = 0

tosiginin.addEventListener("click", (e)=>{
    e.preventDefault()
    if (Username.value == "" || pin.value == "" || amount.value == ""){
        alert("Fill in your Details to Continue")
    }
    else{

        let userobj ={
            name : Username.value,
            userpassword : pin.value,
            useramount : amount.value
        }

    localStorage.setItem(`${userobj.name}`, JSON.stringify(userobj))
    
        
        
        // console.log(window.location.href)
        // window.location = "signin.html"
        location.href="signin.html"
    }
    
})

// function collect() {
    
//     window.location = "signin.html"
//     alert("")
    
// }

tosign.addEventListener("click", (e)=>{
    e.preventDefault()
    location.href = "signin.html"
    
})


