$(document).ready(function()
{

  $("#form1").submit(function(event)
{
  event.preventDefault();


  /*var toStorePerson1Input= $("input#person1").val();
  var toStorePerson2Input= $("input#person2").val();
  var toStoreAnimalInput= $("input#animal").val();

  $(".person1").text(toStorePerson1Input);
  $(".person2").text(toStorePerson2Input);
  $(".animal").text(toStoreAnimalInput);
*/
 var inputs=["person1", "person2", "animal"];
 inputs.forEach(function(io)
{
  var userinput=$("input#"+io).val();
  $("." + io).text(userinput);
})
  $("#story").show();
});
});
