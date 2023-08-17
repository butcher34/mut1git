function clickEvent(first,last){
    if(first.value.length){
      document.getElementById(last).focus();
    }
  }


let ist;
let sec;
let third;
let fourth;



$('.btn-1').on("click",()=>{

  password_repeat=$('#password_repeat').val();
  password=$('#password').val();
if(password==password_repeat){
  ist=$('#ist').val();
  sec=$('#sec').val();
  third=$('#third').val();
  fourth=$('#fourth').val();

  let otp=ist+sec+third+fourth;

  var id = sessionStorage.getItem("user-info-id");
  let url=`https://mut-project.onrender.com/password-reset/${id}`
  window.location.href = "/log-in";
  // $.ajax({
  //     url: url,
  //     type: 'POST',
  //     data:  JSON.stringify({
  //           "otp":otp,
  //           "password":password,
  //           "confirmPassword": password_repeat
  //     }),
  //     headers: {"id": id},
  //     contentType: 'application/json; charset=utf-8',
  //     success: function (res) {
  //       window.location.href = "/log-in";
        
  //     },
  //     error: function(xhr, status, error) {
  //         let e =xhr
  //         alert('error')
     
          
  //       }
  // });
}else{
  alert('write password corretly')
}



   
})