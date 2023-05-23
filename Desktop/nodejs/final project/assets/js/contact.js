const submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    console.log("button clicked")

    name=document.getElementById("name").value
    email=document.getElementById("email").value
    subject=document.getElementById("subject").value
    message=document.getElementById("message").value
    const new_data={name:name,email:email,subject:subject,message:message}
         if (localStorage.getItem("queries")==null){
            localStorage.setItem("queries",'[]');
         }
          var old_data=JSON.parse(localStorage.getItem("queries"))
          old_data.push(new_data)
          localStorage.setItem("queries",JSON.stringify(old_data));
          console.log(new_data)
          window.open("contact.html")

})