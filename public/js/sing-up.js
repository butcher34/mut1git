let first_name;
let last_name;
let email;
let birth_date;
let kid_date;
let password_repeat;
let password;
let sing_up=$('#sing_up');
let valid ='no'
var jsonString ;


sing_up.on("click",()=>{
    console.log('hi')
    first_name=$('#first_name').val();
    last_name=$('#last_name').val();
    email=$('#email').val();
    birth_date=$('#birth_date').val();
    password_repeat=$('#password_repeat').val();
    password=$('#password').val();
    window.location.href = "/see-email";
    // $.ajax({
    //     url: 'https://mut-project.onrender.com/momSignUp',
    //     type: 'POST',
    //     data:  JSON.stringify({
    //           "firstName":first_name,
    //     "lastName":last_name,
    //     "dateOfBirth":birth_date,
    //     "email":email,
    //     "password":password,
    //     "confirmPassword": password_repeat
    //     }),
    //     contentType: 'application/json; charset=utf-8',
    //     success: function (res) {
    //         console.log(res)
    //         sessionStorage.setItem('user-info-id', res.mom._id);
    //         window.location.href = "/see-email";
    //     },
    //     error: function(xhr, status, error) {
    //         let e =xhr.responseJSON.message
    //         alert(e)
       
            
    //       }
    // });


   
})


$(document).on('keypress',function(e) {
    if(e.which == 13) {
        testpassword()
        
    }
});
