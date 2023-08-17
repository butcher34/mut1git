$(document).on('keypress',function(e) {
    if(e.which == 13) {
    
        // let password= $('#password').val();
        // let email=$('#email').val();
        // let userDate ={ user:'doc',
        // name:'mohamed'
        if($('.inputDiv input').is(":checked")){
            sessionStorage.setItem('user', 'doc');
            window.location.href='/doc-dash'
   
        }else{
            window.location.href='/'
        }
}

    
        // $.ajax({
        //     url: 'https://mut-project.onrender.com/login',
        //     type: 'POST',
        //     data:  JSON.stringify({
        //     "email":email,
        //     "password":password,
        //     }),
        
        //     contentType: 'application/json; charset=utf-8',
        //     success: function (res) {
        //         console.log(res.token);
             
        //         sessionStorage.setItem('mut_token', res.token);
        //         window.location.href='/'

        //     },
        //     error: function(xhr, status, error) {
                
        //      alert(xhr.responseText )
                
        //       }
        // });
    //}
});


