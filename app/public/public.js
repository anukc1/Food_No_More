/////////////////////////////////////////////////////
// sign-up
/////////////////////////////////////////////////////
$("#signupSubmit").on("click", function () {



  console.log(userData);

  // send the user sign up information to back end.
  $.post("/api/", userData).then(function (data) {


  })

})

// vue part---new technology-----

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }

});
