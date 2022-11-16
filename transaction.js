let transaction = document.querySelector("#transcation-ui")
let submit = document.querySelector(".fish")
let message = document.querySelector("#transactionMessage-ui")
let current_name =localStorage.getItem("currentname")
let Account_balance = localStorage.getItem("currentamount")
let welcome = document.querySelector(".get")

welcome.innerHTML=`Welcome, ${current_name}`
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    let checkedone = document.getElementsByName("transaction")
    for (element of checkedone){
        if (element.checked){
            transactionfunction(element, element.id)
        }
    }
})

function transactionfunction(element, transactiontoperform){
    if (transactiontoperform == "checkBalance"){
        // message.innerHTML = "Hi " + current_name + ", your current balance is " + Account_balance +" Naira."
        message.innerHTML = `Hi ${current_name}, your current balance is ${Account_balance} Naira.`
        

        element.checked = false
    }
    else if (transactiontoperform == "withdraw"){
        // message.innerHTML = "Hi " + current_name + ", your current balance is " + Account_balance +" Naira."
        let withdrawal = prompt("Enter amount to withdraw")
        if (parseFloat(withdrawal)<parseFloat(Account_balance)){
            Account_balance = parseFloat(Account_balance)-parseFloat(withdrawal)
            message.innerHTML = `Hi ${current_name}, your transaction was sucessful and current balance is ${Account_balance} Naira.`
        }
        else{
            message.innerHTML =`Sorry ${current_name}, your transaction failed due to insufficient balance`
        }
        

        element.checked = false
    }
    else if (transactiontoperform == "deposit"){
        let deposition = prompt("Enter amount to deposit")
        if (deposition <= 100000){
            Account_balance = parseFloat(Account_balance)+ parseFloat(deposition)
            message.innerHTML = `Hi ${current_name}, your transaction was sucessful and your current balance is ${Account_balance} Naira.`
        }
        else{
            message.innerHTML = `Transaction failed...Dear ${current_name}, your daily deposit limit is 100000 naira only`
        }

        

        element.checked = false
    }
    else if (transactiontoperform == "Transfer"){
        // message.innerHTML = "Hi " + current_name + ", your current balance is " + Account_balance +" Naira."
        // message.innerHTML = `Hi ${current_name}, your current balance is ${Account_balance} Naira.`
        let trans_amt = parseFloat(prompt("Enter transfer amount"))

        if (trans_amt <= 500000 && trans_amt < Account_balance){
            Account_balance = parseFloat(Account_balance)- parseFloat(trans_amt)
            message.innerHTML = `Hi ${current_name}, your transaction was sucessful and your current balance is ${Account_balance} Naira.`
        }
        else{
            message.innerHTML = `Transaction failed...Dear ${current_name}, your daily transfer limit is 500000 naira only`
        }
        element.checked = false
    }
    else if(transactiontoperform == "sign-out"){
        localStorage.removeItem("currentname")
        localStorage.removeItem("currentamount")
        window.location = "signin.html"
    }
}
