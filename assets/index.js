// const connection = require("./config/connection");

// $(function () {
//   $(".delPerson").on("click", function (event) {
//     var id = $(this).data("id");

//     $.ajax("/api/quotes" + id, {
//       type: "DELETE",
//     }).then(function () {
//       console.log(`delete id ${id}`);
//       location.reload();
//     });
//   });

//   $(".createPerson").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var person = {
//       name: $("#name").val().trim(),
//       age: $("#age").val().trim(),
//       threat: $("#threat").val().trim(),
//       city: $("#city").val().trim(),
//     };

//     // Send the POST request.
//     $.ajax("/api/people", {
//       type: "POST",
//       data: newQuote,
//     }).then(function () {
//       console.log("created new quote");
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });
// });
