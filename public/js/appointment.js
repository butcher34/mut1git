

const daysTag = document.querySelector("ul.days"),
currentDate = document.querySelector(".month h3"),
prevNextIcon = document.querySelectorAll(".nextprev");


let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let str =sessionStorage.getItem('data')
let token =sessionStorage.getItem('mut_token')

let doctorsData = JSON.parse(str)
let index=0

let currentDOC=doctorsData.filter((doctor)=>{
    return window.location.href.includes(doctor._id)
    })

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}


prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

let doctor = () =>{
     let card_title = $('.card-title')
        
     card_title.text('د/'+ currentDOC[0].fullName)
     $('.card-img-top').attr('src',currentDOC[0].image)
 }

 let updateDocAppointments=(time)=>{

    $('#time').empty();
 let appointmentTIme = []
 let appointmentDate =[]
 time.forEach(e=>{
    appointmentTIme.push(e.date.substring(11,16)) 
 })
 time.forEach(e=>{
    appointmentDate.push(e.date.substring(0,10)) 
 })

 function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  var unique_appointmentTIme = appointmentTIme.filter(onlyUnique);
  var unique_appointmentDate = appointmentDate.filter(onlyUnique);
  $('#date').empty();
  $('#time').empty();
  $('.time').empty();

  unique_appointmentDate.forEach(element => {
  
        jQuery('<option>', {
           text:element
       }).appendTo('#date');
 

    });
    console.log(unique_appointmentTIme.length)
 unique_appointmentTIme.forEach(element => {
 
        jQuery('<option>', {
           text:element
       }).appendTo('#time');
       update_date(element)
     
    });
 var elements = $('.b');

var myFunction = function() {
    var selectedDatebtn = $('#date').val()+' ' +this.getAttribute("value");

    $.ajax({
        url: `https://mut-project.onrender.com/reserve/${currentDOC[0]._id}`,
        type: 'POST',
        data:  JSON.stringify({
            "date":selectedDatebtn,
      }),
     
        headers: {"Authorization": token},
        contentType: 'application/json; charset=utf-8',
        success: function (res) {  
      
       console.log(res)
        },
        error: function(e) {
          
           console.log(e.responseJSON.availableAppointments )
         updateDocAppointments(e.responseJSON.availableAppointments)
           
    
       
            
          }
    });

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

  


 }

 $.ajax({
    url: `https://mut-project.onrender.com/doctorAppointments/${currentDOC[0]._id}`,
    type: 'GET',
 
    headers: {"Authorization": token},
    contentType: 'application/json; charset=utf-8',
    success: function (res) {  
 
     updateDocAppointments(res)
   
    },
    error: function(e) {
      
       console.log(e)
       

   
        
      }
});

let sendAppointment =()=>{
   let selectedTime = $('#time').val()
   let selectedDate = $('#date').val()
   let selectedAppointment = selectedDate +' ' +selectedTime
   console.log(this.value)

   $.ajax({
    url: `https://mut-project.onrender.com/reserve/${currentDOC[0]._id}`,
    type: 'POST',
    data:  JSON.stringify({
        "date":selectedAppointment,
  }),
 
    headers: {"Authorization": token},
    contentType: 'application/json; charset=utf-8',
    success: function (res) {  
  
   
    },
    error: function(e) {
      
       console.log(e.responseJSON.availableAppointments )
     updateDocAppointments(e.responseJSON.availableAppointments)
        
      }
});

}

let update_date =(element)=>{

    jQuery('<div>', {
        class: 'date t'+index,
    }).appendTo('.time');
    jQuery('<p>', {
      text:' اقرب معاد متاح  :: '+'day',
    }).appendTo('.t'+index);
    jQuery('<div>', {
        class:'daterow d'+index
      }).appendTo(' .t'+index);
    jQuery('<p>', {
        text:'مدة الجلسة ::  ' +'60 د',
      }).appendTo(' .d'+index);
    jQuery('<p>', {
        text:'الساعة :: '+element,
      }).appendTo('.d'+index);
    jQuery('<button>', {
        text:'احجز الان',
        class:'b '+index,
        value:element
      }).appendTo(' .t'+index);
   
 


      index+=1
}


$('.sure').on('click',sendAppointment)
renderCalendar();
doctor()