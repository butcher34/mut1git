let carousel_inner =$(".carousel-inner");
let carousel_newitem={};




let article1_img = $("#article-1 img");
let article1_h3 = $("#article-1 h3");
let article1_p = $("#article-1 p");

let article2_img = $("#article-2 img");
let article2_h3 = $("#article-2 h3");
let article2_p = $("#article-2 p");

let article3_img = $("#article-3 img");
let article3_h3 = $("#article-3 h3");
let article3_p = $("#article-3 p");

let article4_img = $("#article-4 img");
let article4_h3 = $("#article-4 h3");
let article4_p = $("#article-4 p");

let docname;
let docimg;
let counter=0;

let update_article = (data)=>{


    article1_img.attr('src',data[0].image)   
    article1_h3.text(data[0].title);
    article1_p.text(data[0].description.substr(0,140))

      article2_img.attr('src',data[1].image) 
    article2_h3.text(data[1].title);
    article2_p.text(data[1].description.substr(0,100));

    article3_img.attr('src',data[2].image) 
    article3_h3.text(data[2].title);
    article3_p.text(data[2].description.substr(0,100));

     article4_img.attr('src',data[3].image) 
    article4_h3.text(data[3].title);
    article4_p.text(data[3].description.substr(0,100));
}
let update_carousel=(data)=>{
for (let index = 0; index < data.length/2; index++) { 
 
    jQuery('<div>', {
        class: 'carousel-item ',
        id:index,
     
    }).appendTo('.carousel-inner');

    jQuery('<div>', {
        class: 'casrousel-items-flex ',
     
    }).appendTo('#'+index);
    
   for (let i= 0; i <2 ; i++) {
    const element = data[counter];
    counter++;
    j=' .card.'+i+index
 
    jQuery('<div>', {
        class: 'card '+i+index,
    }).appendTo('#'+index+' .casrousel-items-flex');

    jQuery('<div>', {
        class: 'imgWraper',
    }).appendTo('#'+index+' '+j);

    jQuery('<img>', {
        class: 'card-img-top ',
        src:element.image
    }).appendTo('#'+index+' '+j+' .imgWraper');
    

    jQuery('<div>', {
        class: 'card-body ',
    }).appendTo('#'+index+' '+j);

    jQuery('<h4>', {
        class: 'card-title ',
        text:element.fullName
    }).appendTo('#'+index+' '+j+' .card-body');

    jQuery('<p>', {
        class: 'card-text cardTxt',
        text:'طبيب نفسية'
    }).appendTo('#'+index+' '+j+' .card-body');

    jQuery('<p>', {
        class: 'card-text stars',
    }).appendTo('#'+index+' '+j+' .card-body');

    for (let k= 0; k < 6; k++) {
        
        jQuery('<i>', {
            class: 'fa fa-star ',
        }).appendTo('#'+index+' '+j+' .card-body .stars');
        
    }
    jQuery('<button>', {
        class: ' ',
       
    }).appendTo('#'+index+' '+j+' .card-body');
    
    jQuery('<a>', {
        class: ' ',
        href:'/appointment/'+element.fullName,
        text:' حجز موعد  '
    }).appendTo('#'+index+' '+j+' .card-body button');
    
   }
 }   
   
}


$.get('https://mut-project.onrender.com/showArticles',(data,status)=>{
    console.log(data)
    update_article(data)
})

$.get('https://mut-project.onrender.com/allDoctors',(data,status)=>{
    console.log(data)
    update_carousel(data)
})

if(sessionStorage.getItem('user')=='doc'){
    $('.doc-dash').removeClass('d-none') 
    $('.doc-dash').addClass('d-inline') 
    console.log(sessionStorage.getItem('user'))
}else{
    $('.doc-dash').removeClass('d-inline') 
    $('.doc-dash').addClass('d-none') 
  
}
