
let searchBox= $('.search')
let url_index ='http://localhost:3000/appointment';//34
console.log(url_index.length)
$('.head1').click(()=>{
    let name = searchBox.val();
    console.log(typeof(name))
    console.log(name)
    let token =  'Bearer ' + sessionStorage.getItem('mut_token');
    if(name.length === 0 ){
        searchBox.toggleClass('activeSearch')
    }else{
    
  
       
        $('.casrousel-items-flex').empty();
        jQuery('<p>', {
           class: 'search-p ',
           text:'    منصة طبية عربية  تُقدم محتوي طبي الموثوق… بأقلام آلاف الأطباء المعتمدين'
       }).appendTo('.casrousel-items-flex');
       
        let str =sessionStorage.getItem('data')
        let doctorsData = JSON.parse(str)
        let searchresult = doctorsData.filter((doctor)=>{
          if(doctor.fullName.includes(name)){
            return doctor
          }
        })

        console.log(searchresult)
        if(searchresult.length>0){
            update_doctors(searchresult)
        }else{
            not_found()
        }
      
    }
}
)

let not_found = ()=>{
    $('.casrousel-items-flex').empty();
 jQuery('<p>', {
    class: 'search-p ',
    text:'NOT FOUND'
}).appendTo('.casrousel-items-flex');
}

let update_doctors=(data)=>{  
    $(".card").remove();
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
            j=' .card.'+index
         
            jQuery('<div>', {
                class: 'card '+index,
            }).appendTo(' .casrousel-items-flex');
        
            jQuery('<div>', {
                class: 'imgWraper',
            }).appendTo('.casrousel-items-flex'+j);
      
            jQuery('<img>', {
                class: 'card-img-top ',
                src:element.image
            }).appendTo('.casrousel-items-flex '+j+' .imgWraper ');
        
            jQuery('<div>', {
                class: 'card-body ',
            }).appendTo('.casrousel-items-flex '+j);
        
            jQuery('<h4>', {
                class: 'card-title ',
                text:element.fullName
            }).appendTo('.casrousel-items-flex'+j+' .card-body');
        
            jQuery('<p>', {
                class: 'card-text cardTxt',
                text:'طبيب نفسية'
            }).appendTo('.casrousel-items-flex'+j+' .card-body');
        
            jQuery('<p>', {
                class: 'card-text stars',
            }).appendTo('.casrousel-items-flex'+j+' .card-body');
        
            for (let index = 0; index < 6; index++) {
                jQuery('<i>', {
                    class: 'fa fa-star ',
                    id: index,
                }).appendTo('.casrousel-items-flex '+j+' .card-body .stars');
                
            }
            jQuery('<button>', {
                class: ' ',
            
            }).appendTo('.casrousel-items-flex'+j+' .card-body');
            
            jQuery('<a>', {
                class: ' ',
                href:'/appointment/'+element._id,
                text:' حجز موعد  '
            }).appendTo('.casrousel-items-flex'+j+' .card-body button');
            
           
    }
 
}

$.get('https://mut-project.onrender.com/allDoctors',(data,status)=>{
    sessionStorage.setItem('data', JSON.stringify(data));
    let str =sessionStorage.getItem('data')
  
    update_doctors(data)
})

    

