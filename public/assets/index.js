// const connection = require("./config/connection");

$(document).ready(function () {
  $(document).foundation();
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    $.post("/api/image", function (data) {
      console.log(data);
    });
  };
  $(".deletePerson").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/people/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log(`delete id ${id}`);
      location.reload();
    });
  });

  $(".createPerson").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var person = {
      person_name: $("#person_name").val().trim(),
      age: $("#age").val().trim(),
      isThreat: $("#isThreat").val().trim(),
      city_name: $("#city_name").val().trim(),
    };

    // Send the POST request.
    $.post("/api/people", person, function (data) {
      console.log(data);
      location.reload();
    });
  });

  $(".update-person").on("click", function (event) {
    event.preventDefault();
    // console.log("clicked");
    //var idNumber = $("#").firstChild.attr("id");
    //console.log("HEREEREERE "+ idNumber);
    var idNumber = $(this).attr("data-id");
    // console.log("HEREER " + idNumber);

    var nameField = $(this).siblings("h3").children("h3").text();

    console.log(nameField);
    // var cityVal = $(".city1").text();
    // var ageVal = $(".age1").text();
    $(`.show${idNumber}`).attr("style", "display:inline");
    $(`.changeBtn${idNumber}`).attr("style", "display:inline");
    // var btn = $("<button class='button'>").text("submit");

    //console.log("BLAH " + nameVal)
    // $(".edit-name").val(nameVal);
    // $(".edit-city").val(cityVal);
    // $(".edit-age").val(ageVal);
  });

  $(".changeBtn").on("click", function (event) {
    event.preventDefault();
    // console.log("test");
    // let text = $(this).siblings("h3:eq( 1 )").text();
    // console.log(text);
    let id = $(this).siblings("h3:eq( 1 )").data();
    let blah = $(this).siblings("input").val();

    $.ajax({
      method: "PUT",
      url: "/api/people",
      data: { person_name: blah, id: id },
    }).then(function (response) {
      console.log(response);
      location.reload();
    });
  });

  $(".changeCity").on("click", function (event) {
    event.preventDefault();
    // console.log("test");
    // let text = $(this).siblings("h3:eq( 1 )").text();
    // console.log(text);
    let id = $(this).siblings("h3:eq( 1 )").data();
    let blah = $(this).prev().val();
    // console.log("BLAH HERE " + blah);
    $.ajax({
      method: "PUT",
      url: "/api/people",
      data: { city_name: blah, id: id },
    }).then(function (response) {
      console.log(response);
      location.reload();
    });
  });

  $(".changeAge").on("click", function (event) {
    event.preventDefault();
    // console.log("test");
    // let text = $(this).siblings("h3:eq( 1 )").text();
    // console.log(text);
    let id = $(this).siblings("h3:eq( 1 )").data();
    let blah = $(this).prev().val();
    // console.log(blah);
    $.ajax({
      method: "PUT",
      url: "/api/people",
      data: { age: blah, id: id },
    }).then(function (response) {
      console.log(response);
      location.reload();
    });
  });
});
