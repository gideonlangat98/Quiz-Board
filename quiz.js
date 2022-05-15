

// UI Logic //
function check(){

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

    
    var correct = 0;
    if (q1=="It is an inbuilt language that adds interactivity to the user") 
       {correct++}
      
    if (q2=="Css") 
      {correct++}

    if (q3=="Objects") 
       {correct++}
    
    if (q4=="&&") 
      {correct++}
     
    if (q5=="Select") 
       {correct++}
      
    if (q6=="Variables") 
      {correct++}
      
    if (q7=="To join two or more things together") 
      {correct++}
     
    if (q8==".length") 
      {correct++}
      
    if (q9=="Absolute") 
      {correct++}
     
    if (q10=="Alert box")
      {correct++}
      
    // document.write(correct);

    var score = document.getElementById('score');
    // score.textContent = `${correct}`;

    var quizzes = document.getElementById('quizzes');
    quizzes.style.display = "none";

    var percent = correct/10*100;
    if (percent <50){
        score.textContent = `Your score is ${correct}. YOU HAVE EXCELLENTLY PASSED!`;
        alert('Well done')
    }
    if (percent <79){
        score.textContent = `Your score is ${correct}. You have fairly passed!`;
        alert('Fairly passed!')
    }  

    else{
        score.textContent = `Your score is ${correct}. You have poorly scored. Retake the test!`
        alert('Poor score!')
    }

}