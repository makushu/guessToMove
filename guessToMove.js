
randomNumber = () =>{
    let userNumber = parseInt(document.getElementById("userNumber").value);
    let answer = Math.round(Math.random() * (2) + 1);
    
    let correct = (userNumber === answer) ? true : false;


    

    $(document).ready(function(){
    $("#submit").click(
      function(){$(".one").css({"background-color": "#00ff00"});     
    });
    });
  
  

    document.getElementById("answer").innerHTML = "your guess " + userNumber +
    " the answer is " + answer + " which is " + correct;


}