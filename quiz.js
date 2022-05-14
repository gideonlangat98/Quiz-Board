function check(){

    var a = 0;
    var q1 = document.quizzes.question1.value;
    var q2 = document.quizzes.question2.value;
    var q3 = document.quizzes.question3.value;
    var q4 = document.quizzes.question4.value;
    var q5 = document.quizzes.question5.value;
    var q6 = document.quizzes.question6.value;
    var q7= document.quizzes.question7.value;
    var q8 = document.quizzes.question8.value;
    var q9 = document.quizzes.question9.value;
    var q10 = document.quizzes.question10.value;
    var score=document.getElementById("score");
    var quizzes=document.getElementById("quizzes")
   


    if (q1=="It is an inbuilt language that adds interactivity to the user") {a++} 
    if (q2=="Css") {a++}
    if (q3=="Objects") {a++}
    if (q4=="&&") {a++}
    if (q5=="Select") {a++}
    if (q6=="Variables") {a++}
    if (q7=="To join two or more things together") {a++}
    if (q8==".length") {a++}
    if (q9=="Absolute") {a++}
    if (q10=="Alert box") {a++}

   quizzes.style.display="none";
 
   if(a<=3){
       score.textContent=`Your score is ${a}.Poor Score!`
   }
   if (a ){
       score.textContent=`Your score is ${a}. Fairly passed.`
   } else{
       score.textContent=`Your score is ${a} .Excellent!`
   } 

                    
                    
                             
            
        
}

