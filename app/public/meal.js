$(document).ready(function() {
$(document).on('click', 'button.add', addFood);
$(document).on('click', 'button.delete', deleteFood);

  var totalCalories = 0;



  $('button').on('click', function() {
    // var foodInfo = ({userId: id of user, foodId: id food})

    $.ajax({
      url: queryURL,
      method: 'GET'
    })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {}
    });
  });
});


// id of food
//  id of user
// var foodInfo({userId: id of user, foodId: id food})
// send an ajax requeste
// $.ajax({url: '/api/userfood', method: 'POST', data: foodInfo}).then(