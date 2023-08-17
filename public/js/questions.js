let answers =$('input[type=radio] ')

let selected =[];

$('button').on('click',()=>{
    
    for (let index = 0; index < answers.length; index++) {
        if(answers[index].checked){
     
            selected.push(answers[index].value)
        }
        
    }
    
    console.log(selected)
    if(selected.length == 10){
        let[ q1,q2,q3,q4,q5,q6,q7,q8,q9,q10] = selected
        let token =  'Bearer ' + sessionStorage.getItem('mut_token');
        window.location.href = "/";
        // $.ajax({
        //     url: 'https://mut-project.onrender.com/addSurvey',
        //     type: 'POST',
        //     data:  JSON.stringify({
        //         "q1":q1,
        //         "q2":q2,
        //         "q3":q3,
        //         "q4":q4,
        //         "q5":q5,
        //         "q6":q6,
        //         "q7":q7,
        //         "q8":q8,
        //         "q9":q9,
        //         "q10":q10,

        //     }),
        //     headers: {"Authorization": token},
        //     contentType: 'application/json; charset=utf-8',
        //     success: function (res) {
        //       window.location.href = "/";
              
        //     },
        //     error: function(xhr, status, error) {
        //         let e =xhr
        //         console.log(e)
           
                
        //       }
        // });
        selected=[]
    }else{
       
        alert('you only answered '+selected.length+' from 10 questions')
    }
 
  
})
