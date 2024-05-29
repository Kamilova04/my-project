function sendMail(){
    var params ={
        from_name: document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

   emailjs.send("service_1wo167s", "template_smkqo6f", params).then((res) =>{
    console.log(res);
    alert("Your Message Sent!")
   })
   .catch(err => console.log(err))
}


AOS.init();



