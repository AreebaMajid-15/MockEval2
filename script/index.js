import {BaseURl} from "./Baseurl"

 let form = document.getElementById("form")
form.addEventListener("submit", function() {
    event.preventDefault()
    let Username = form.Username.value;
    let Email = form.Email.value;
    alert("signup Successful")
    console.log("done")

    //to veriry email
      fetch(`${BaseURl}/NewData`)
      .then((res)=>res.json())
      .then((data)=> {
        let user = data.filter((el,i) => el.Email==Email);
        if( user.length > 0){
         
            alert("Login succesfull")
            window.location.href ="Quiz.html"
        }else {
            //wrong email
            alert("User does not exit, please enter correct email")
        }
       }).catch((err) =>{
        console.log(err)
        alert("Something wnent wrong")
       })

})