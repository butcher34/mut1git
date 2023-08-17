if(sessionStorage.getItem('user')=='doc'){
    $('.doc-dash').removeClass('d-none') 
    $('.doc-dash').addClass('d-inline') 
    console.log(sessionStorage.getItem('user'))
}else{
    $('.doc-dash').removeClass('d-inline') 
    $('.doc-dash').addClass('d-none') 
  
}