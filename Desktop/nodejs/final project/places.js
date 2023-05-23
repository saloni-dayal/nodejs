const submit=document.getElementById("addplace")
submit.addEventListener("click",()=>{
    console.log("button clicked")

    src=document.getElementById("imgsrc").value
    name=document.getElementById("imgname").value
    data=document.getElementById("imgdata").value
    const new_data={src:src,name:name,data:data}
         if (localStorage.getItem("places")==null){
            localStorage.setItem("places",'[]');
         }
          var old_data=JSON.parse(localStorage.getItem("places"))
          old_data.push(new_data)
          localStorage.setItem("places",JSON.stringify(old_data));
          console.log(new_data)

})
window.onload=function(){

}