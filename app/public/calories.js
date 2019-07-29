$("#submitFoodSearch").on('click', function(event){
    event.preventDefault();
  var food = $('#fname').val().trim();
    var id = $('#fname').data('userid');
    localStorage.setItem('userId', id)
    window.location.replace("/searchfood/" + food )
});



