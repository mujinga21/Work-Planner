//   /var today = moment();
var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

var schedule = document.getElementById("time-block");
var daily = document.getElementById("hour");
var saveButton = document.getElementById("save");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var busy = {
    hour: hour.value,
    comment: comment.value.trim(),
  };

  localStorage.setItem("busy", JSON.stringify(studentGrade));
  renderMessage();
});

function renderMessage() {
  var nextActivity = JSON.parse(localStorage.getItem("busy"));
  if (nextActivity !== null) {
    document.querySelector(".message").textContent = getReady;
  }
}

// // // var  activity = localStorage.getItem("hour");

// // var daily = localStorage.getItem(8);
// // // $("#comment >input").val(daily);
// // $(".saveBtn").on("click", function () {
// //   console.log($(this));
// //   localStorage.setItem($("#hour").text(), $("#comment>").value());
// // });
// var daily = localStorage.getItem(hour);
// $("#comment >input").val(daily);
// $console.log($("#time-block").text)
// // $(".saveBtn").on("click", function () {

//   // console.log($(this));

//   // localStorage.setItem($("#hour").text(), $("#comment>").value());
// });
