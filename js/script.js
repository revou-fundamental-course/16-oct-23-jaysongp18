
//Title change
new TypeIt(el, {
  startDelete: true,
  loop: true,
  waitUntilVisible: true,
})
  .type('Hi')
  .pause(400)
  .empty()
  .type('Jayson Cornelis')
  .pause(400)
  .empty()
  .type('Welcome to')
  .pause(400)
  .empty()
  .type('RevoU')
  .pause(400)
  .empty()
  .go();

  new TypeIt(pl, {
    startDelete: true,
    loop: true,
    waitUntilVisible: true,
  })
    .type('Portfolio')
    .pause(400)
    .empty()
    .type('Yeah')
    .pause(400)
    .empty()
    .type('That\'s it')
    .pause(400)
    .empty()
    .type('raC desruC sihT yojnE') 
    .pause(400)
    .empty()
    .type('No, You\'re Not Wrong') 
    .pause(400)
    .empty()
    .type('It&prime;s Literally It') 
    .pause(400)
    .empty()
    .go();

  //Menu
  $('a').on('click', function(e){
    var targetID = $(this).attr('href')
    var elementPosition = $(targetID).offset().top
    $('html,body.class').animate({scrollTop: elementPosition},'slow');
}); 


// Generate form
function validateData(event){
  // username
  var username = document.getElementById("username");
  var errorMsgs = document.getElementById("error-msg");

  // email
  var email = document.getElementById("email");

  // Gender
  var male = document.getElementById("maleBtn");
  var female = document.getElementById("femaleBtn");

  // generate value
  var nameValue = document.getElementById("name-value");
  var emailValue = document.getElementById("email-value");
  var genderValue = document.getElementById("gender-value");
  
  // validation username
  if(username.value.length < 2) {
      errorMsgs.innerHTML = "Username must more than 2 characters";
      errorMsgs.style.color = "red";
      event.preventDefault()
  }

  // Validation Gender
  else if (!male.checked && !female.checked) {
      errorMsgs.innerHTML = "Choose the Gender!"
      errorMsgs.style.color = "red";
      event.preventDefault()
  }

  // validation email
  else if (!email.value.endsWith("@gmail.com")) {
      errorMsgs.innerHTML = "Email must ends with @gmail.com";
      errorMsgs.style.color = "red";
      event.preventDefault()
    }

  else {
      errorMsgs.innerHTML = "";
      nameValue.innerHTML = "Username : " + username.value;
      emailValue.innerHTML = "Email : " + email.value;
      
      if(male.checked) {
        genderValue.innerHTML = "Gender : Male";
      }
      else {
        genderValue.innerHTML = "Gender : Female"
      }
      
      event.preventDefault()
  }
  
  return false
}
