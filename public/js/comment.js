$('.like i').on('click',()=>{
    $('.like i').toggleClass('fa-solid ')
    $('.like i').toggleClass('fa-regular ')
    $('.like i').toggleClass('redheart')
})
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        let text= $('.input-text').val();
        let file=$('.input-file').val();
   
    
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
    }
});

let updatePosts = (Element)=>{
    
}