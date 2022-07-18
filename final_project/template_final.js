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
  //document.getElementById("date_id").innerHTML = new Date();

    var x = document.getElementById("date_id");
    x.innerHTML = new Date();
  if (x.style.display === "none" || x.style.display =="") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
    const cssObject = {
        "color": "orange",
        "background-color": "transparent",
        "margin-bottom": "3rem"
    }
    $("#date_id").css(cssObject);
    //autocomplete 
    //backtotop
  }
  
  //disappear back_to_top button when scrolling to top
  window.onscroll = function () {
    var Scrollpos = window.pageYOffset;
    if (Scrollpos < 100) {
        $(back_top).fadeOut();
    } else {
        $(back_top).fadeIn();
    }
  }

  /* login value and validation*/
$(function () {
  $("#btnSubmit").click(function () {
    let email, password;
    email = jQuery.trim($("#user_email").val());
    password = jQuery.trim($("#user_password").val());


    //validation  email
    if (email == "") {
      $("#validation_email").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#validation_password").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close


//   //scroll to top when the page refreshed
//   if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';
// } else {
//     window.onbeforeunload = function () {
//         window.scrollTo(0, 0);
//     }
// }
  
  // function inVisible(element) {
  //   //Checking if the element is
  //   //visible in the viewport
  //   var WindowTop = $(window).scrollTop();
  //   var WindowBottom = WindowTop + $(window).height();
  //   var ElementTop = element.offset().top;
  //   var ElementBottom = ElementTop + element.height();
  //   //animating the element if it is
  //   //visible in the viewport
  //   if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
  //     animate(element);
  // }
  
  // function animate(element) {
  //   //Animating the element if not animated before
  //   if (!element.hasClass('ms-animated')) {
  //     var maxval = element.data('max');
  //     var html = element.html();
  //     element.addClass("ms-animated");
  //     $({
  //       countNum: element.html()
  //     }).animate({
  //       countNum: maxval
  //     }, {
  //       //duration 5 seconds
  //       duration: 5000,
  //       easing: 'linear',
  //       step: function() {
  //         element.html(Math.floor(this.countNum) + html);
  //       },
  //       complete: function() {
  //         element.html(this.countNum + html);
  //         // element.removeClass("ms-animated");
  //       }
  //     });
  //   }
  
  // }
  
  // //When the document is ready
  // // $(function() {
  //   //This is triggered when the
  //   //user scrolls the page
  //   window.onscroll = function () {
  //     //Checking if each items to animate are 
  //     //visible in the viewport
  //     ("h2[data-max]").each(function() {
  //       inVisible($(this));
  //     });
  //   };
  // // });
  
  