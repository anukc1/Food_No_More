
$("#submitFoodSearch").on('click', function(event){
    event.preventDefault();
  var food = $('#fname').val().trim();
    var id = $('#fname').data('userid');

    localStorage.setItem('userId', id)

    window.location.replace("/searchfood/" + food )
});

$("#buttonAddFood").click(function(event) {
    event.preventDefault()
    console.log('hello');
});

// $("#buttonAddFood").on("click", function(event){
//     console.log('hello');
//     // event.preventDefault();
//     // var foodId = $(this).data('foodid');
//     // var userId = localStorage.getItem('userId');

//     // console.log('food id: ' + foodId + "\n" + "user id: " + userId)

// })