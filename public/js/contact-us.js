$('button').on("click",()=>{
    let email =$('#email').val()
    let fname = $('#fname').val()
    let lname =$('#lname').val()
    let textarea =$('textarea').val()
    let token =  'Bearer ' + sessionStorage.getItem('mut_token');
    $.ajax({
        url: 'https://mut-project.onrender.com/contactUs',
        type: 'POST',
        data:  JSON.stringify({
              "firstName":fname,
              "lastName":lname,
              "email": email,
              "description":textarea
        }),
        headers: {"Authorization": token},
        contentType: 'application/json; charset=utf-8',
        success: function (res) {
        console.log(res)
          
        },
        error: function(xhr, status, error) {
            let e =xhr
            console.log(e)
       
            
          }
    });

})