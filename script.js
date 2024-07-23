function registeruser(){
    // event.preventDefault();
    window.location='./registration.html'
    
}
function loginuser(){
    window.location='./login.html'
}
function register(){
let username=document.getElementById('Username').value
let accno=document.getElementById('accno').value
let password=document.getElementById('Password').value
let balance=0;
userobj={
    User:username,
    accountno:accno,
    Password:password,
    balance:balance
}
if(userobj.accountno in localStorage){
    alert("User already registered")
}
else if(userobj.User=="" || userobj.accountno=="" || userobj.Password==""){
    alert("please fill all fields")
}
else{
    window.localStorage.setItem(userobj.accountno,JSON.stringify(userobj))
    
    alert("Registration successfull")
    window.location='./login.html'
    
}


}

function login(){
let Accountno=document.getElementById('Accno').value
let Password=document.getElementById('password').value

if(Accountno in localStorage){
 let out=JSON.parse(localStorage.getItem(Accountno))
 if(Accountno=="" || Password==""){
    alert("Please fill the fields")
 }

else if(Accountno == out.accountno && Password==out.Password){
      alert("login Successfull")
      window.location='./bank.html'
    // console.log(Accountno);

     }
else{
     alert("please type the correct account number and password")
     }


}
else{
    alert("user not registered")
}

 
}


// let user=JSON.parse(localStorage.getItem('Accountno'))
// console.log(user);

// head1.innerHTML = `Welcome ${user.User}`
let form = document.querySelector('.form')

function deposite() {
let amount = document.getElementById('Amount').value
let Accno = document.getElementById('Accountno').value
if(Accno in localStorage){
    Accountdetails=JSON.parse(localStorage.getItem(Accno))
    let balanceAmount = parseInt(Accountdetails.balance)
    let depositeAmount = parseInt(amount)

if (depositeAmount<=0) {
    alert("value cannot be empty or negetive")
}else{
    balanceAmount = balanceAmount + depositeAmount
    Accountdetails.balance = balanceAmount
    // console.log(user.balance);
    localStorage.setItem(Accno, JSON.stringify(Accountdetails))
    depositresult.innerHTML = `Your current balance ${balanceAmount}`

}
}
else{
alert("incorrect Account number")
}


}
function withdraw() {
let withdrawAmount = document.getElementById('withdrawAmount').value
let withdrawAccno = document.getElementById('WithdrawAcc').value

// console.log(Account);
if (withdrawAccno in localStorage) {
    let Account = JSON.parse(localStorage.getItem(withdrawAccno))
    if (withdrawAmount <= Account.balance) {
        // console.log(typeof(withdrawAmount));//doubt idh string aanenkil eghene aan if contitionil adh work aavunne
        alert(`bank balance before withdrawal ${Account.balance}`)
        alert(`Withdraw amount ${withdrawAmount}`)
        Account.balance -= withdrawAmount
        // console.log(Account.balance);
        localStorage.setItem(withdrawAccno, JSON.stringify(Account))

        Withdrawresult.innerHTML = `Your current balance is ${Account.balance}`
        alert("your amount  is successfully withdrawn")
        alert(`After withdrawal your account balance is ${Account.balance}`)
    }
    else{
        alert("insufficient balance")
    }
}
else{
    alert("incorrect account number")
}
}


function logout() {
localStorage.clear()
window.location = './login.html'
}

form.addEventListener('click', (e) => {
e.preventDefault()

logout()

})