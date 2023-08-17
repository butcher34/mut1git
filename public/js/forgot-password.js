
$(document).on('keypress',function(e) {
    if(e.which == 13) {
       
        let email=$('input').val();
      
        sessionStorage.setItem('email',email)
      
        $.ajax({
            url: 'https://mut-project.onrender.com/resetPassword',
            type: 'POST',
            data:  JSON.stringify({
            "email":email,
           
            }),
            contentType: 'application/json; charset=utf-8',
            success: function (res) {
                console.log(res);
                window.location.href = "/OTP";
            },
            error: function(xhr, status, error) {
                
                let e =xhr.responseText
                alert(e)
                
              }
        });
    }
});
$('button').on('click',function(e) {

       
    let email=$('input').val();
    sessionStorage.setItem('email',email)
    $.ajax({
        url: 'https://mut-project.onrender.com/resetPassword',
        type: 'POST',
        data:  JSON.stringify({
        "email":email,
       
        }),
        contentType: 'application/json; charset=utf-8',
        success: function (res) {
            console.log(res);
            window.location.href = "/OTP";
        },
        error: function(xhr, status, error) {
            
            let e =xhr.responseText
            alert(e)
            
          }
    });

});