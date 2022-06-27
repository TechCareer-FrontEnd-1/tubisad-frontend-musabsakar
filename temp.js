$(function () {
  var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
  ];
  $("#tags").autocomplete({
      source: availableTags
  });
});

let date = () => {
  //alert("deneme")

  document.getElementById("date_id").innerHTML = new Date();
  //$('#date_id').html( `tarih: ${new Date()}`);

  //document.getElementById("date_id").innerText=new Date();
  //$('#date_id').text(new Date());

  //document.getElementById("date_id").style.backgroundColor="blue";
  //document.getElementById("date_id").style.color="white";
  // $("#date_id").css("background-color","blue").css("color","white")

  const cssObject = {
      "color": "red",
      "background-color": "black",
      "box-shadow": "1px 1px 3px 1px rgba(255,255,255,.8)",
      "margin-bottom": "3rem"
  }
  $("#date_id").css(cssObject);
  //autocomplete 
  //backtotop
}


window.onscroll = function () {
  var Scrollpos = window.pageYOffset;
  if (Scrollpos < 100) {
      $(back_top).fadeOut();
  } else {
      $(back_top).fadeIn();
  }
}
