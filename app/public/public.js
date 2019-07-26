// $("#signupSubmit").on("click", function(){

//     var userData = {
       
//         firstname: $("#firstName").val().trim(),
//         lastname: $("#LastName").val().trim(),
//         email: $("#email").val().trim(),
//         password: $("signUpPassword")
//     };

//     console.log(userData);

//     // send the user sign up information to back end.
//     $.post("/api/", userData).then(function(data){

        
//     }) 



// // })




// vue part---new technology-----
    
    var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
  