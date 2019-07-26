// function search(){
//     var input= document.getElementById("userInput");
//     var filter = input.value.toLowerCase();
//     var table = document.getElementById("Food");
//     var tr = table.getElementsByTagName("tr");

//     for (i=0; i< tr.length; i++){
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td){
//             txtValue = td.textcontent ||td.innerText;
//             if (txtValue.toLowerCase().indexof(filter) > -1){
//                 tr[i].style.display = "";
//             }else{
//                 tr[i].style.display = "none.";
//             }
//         }
//     }
// }

$("#Submit").on('click', function(event){
    event.preventDefault();
  var food = $('#fname').val().trim();
  console.log(food)

  $.ajax({url:`/searchfood/${food}`, method: 'GET'}).then(function(data){
      if(data){
          console.log(data)
      }
  })
})