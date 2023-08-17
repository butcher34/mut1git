let Fname =$('.Fname-I').val()
let Lname =$('.Lname-I').val()
let phone =$('.phone-I').val()
let checkbox =$('.checkbox-I').val()


$('button').on("click",()=>{
   
    alert('password does not match ')
})


$(document).on('keypress',function(e) {
    if(e.which == 13) {
     
        alert('password does not match ')
        
    }
});