//   /var today = moment();
var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

// var  activity = localStorage.getItem("hour");

var daily = localStorage.getItem("hour");
var schedule = localStorage.getItem("comment");

$("#comment >input").val(schedule);

$(".saveBtn").on("click"),
  // , function (event)
  // {
  //   event.preventDefault();
  //   {
  console.log($("#time-block").val(), $("#hour").text);

localStorage.setItem("comment", schedule);
localStorage.setItem("hour", daily);
