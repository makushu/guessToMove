// position > the position of the moves the user has made
// guesses > the number of times the user has to guess (20 in total)
// moveUser > checks if the user should move or not
// userNumber > the number that the user guesses
// move > contains the moves the user has to make
// answer > the random number generated



let position = 0;
let guesses = 0;

moveUser = () => {

  guesses++


  document.getElementById("submit").value = "Guess " + (20 - guesses);

  let userNumber = parseInt(document.getElementById("userNumber").value);
  let move = [".one", ".two", ".three", ".four", ".five", ".six", ".seven", ".eight", ".nine", ".ten", ".eleven",
    ".twelve", ".thirteen", ".fourteen", ".fifteen", ".sixteen", ".seventeen", ".eighteen", ".nineteen",
    ".twenty", ".twentyone", ".twentytwo", ".twentythree", ".twentyfour", ".twentyfive"
  ];

  let answer = Math.round(Math.random() * (2) + 1);



  if (answer === userNumber) {
    position += userNumber;
    document.getElementById("answer").innerHTML = "good work, that's how you play";
  } else {
    position += 0;
    document.getElementById("answer").innerHTML = "oops, you should have chosen " +
      answer;
  }


  $(document).ready(function () {
    $("#submit").click(
      function () {
        $(move[position - 1]).css({ 
          background:  "-webkit-gradient(linear, left top, left bottom, to(#000))" 
        });

        $(move[position - 2]).css({
          background: "-webkit-gradient(linear, left top, left bottom, to(#000))" 
        });

        $(move[position - 3]).css({
          background: "-webkit-gradient(linear, left top, left bottom, to(#000))" 
        });

        $(move[position - 4]).css({ 
          background: "-webkit-gradient(linear, left top, left bottom, to(#000))" 
        });


        $(move[position - 1]).css({ 
          "color": "#000" });

        $(move[position - 2]).css({ 
          "color": "#000" });

        $(move[position - 3]).css({ 
          "color": "#000" });
          
        $(move[position - 4]).css({ 
          "color": "#000" });

      });
  });


  if (position >= 25 && guesses < 20) {
    alert('congrats, you have won');
    location.reload();
  }


  if (guesses === 5) {
    $(document).ready(function () {
      $("#submit").click(
        function () {
          $('body').css({ "background-color": "#228B22" });
        });
    });

  }



  if (guesses === 10) {
    $(document).ready(function () {
      $("#submit").click(
        function () {
          $('body').css({ "background-color": "#e6ac00" });
        });
    });

  }


  if (guesses === 15) {
    $(document).ready(function () {
      $("#submit").click(
        function () {
          $('body').css({ "background-color": "#ff0000" });
        });
    });

  }

  if (guesses === 20) {
    alert("guess what? you are out of guesses");
    location.reload();
  }
}
