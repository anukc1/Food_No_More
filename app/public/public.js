$('.submit').on('click', function(event){
event.preventDefault();

//capture elements from from 
//id of food
//id of user
// var foodInfo({userId: id of user, foodId: id food})



//send an ajax requeste
$.ajax({url: '/api/userfood', method: 'POST', data: foodInfo}).then(

    function(){

        
    }
)

})