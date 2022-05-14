function check(){
    var A=0;
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

    if (q1=="It is an inbuilt language that adds interactivity to the user") {A++} 
    if (q2=="Css") {A++}
    if (q3=="Objects") {A++}
    if (q4=="&&") {A++}
    if (q5=="Select") {A++}
    if (q6=="Variables") {A++}
    if (q7=="To join two or more things together") {A++}
    if (q8==".length") {A++}
    if (q9=="Absolute") {A++}
    if (q10=="Alert box") {A++}

        document.write(A);
                    
                    
                    
                    
                       
                 
            
        
}

