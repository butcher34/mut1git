let ist;
let sec;
let third;
let fourth;
var id = sessionStorage.getItem("user-info-id");
console.log(id);
function clickEvent(first,last){
    if(first.value.length){
      document.getElementById(last).focus();
    }
  }

$('.btn-1').on("click",()=>{
   
    ist=$('#ist').val();
    sec=$('#sec').val();
    third=$('#third').val();
    fourth=$('#fourth').val();
    let otp=ist+sec+third+fourth;
    let url=`https://mut-project.onrender.com/users/${id}/verify`
    window.location.href = "/questions";
    // $.ajax({
    //     url: url,
    //     type: 'POST',
    //     data:  JSON.stringify({
    //           "otp":otp,
    //     }),
    //     headers: {"id": id},
    //     contentType: 'application/json; charset=utf-8',
    //     success: function (res) {
           
    //         window.location.href = "/questions";
    //     },
    //     error: function(xhr, status, error) {
    //         let e =xhr.responseJSON.message
    //         alert(e)
       
            
    //       }
    // });


   
})



