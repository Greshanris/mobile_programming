$(document).ready(function () {
  $("#buttonOne").click(function () {
    $(".containerOne").fadeIn(2000);
    $(".containerOne").css("display", "flex");
    $(".containerTwo").fadeIn(10000);
    $(".containerTwo").css("display", "flex");
    $(".containerThree").fadeIn(15000);
    $(".containerThree").css("display", "flex");
    $(".containerFour").fadeIn(20000);
    $(".containerFour").css("display", "flex");
    $(".containerFive").fadeIn(25000);
    $(".containerFive").css("display", "flex");
  });

  $("#buttonTwo").click(function () {
    let firstDiv = $("#firstDiv");
    firstDiv
      .animate({ left: "250px" }, 1000, function () {
        firstDiv.css("backgroundColor", "red");
      })
      .animate({ width: "200px", height: "200px", opacity: "0.5" }, 1000)
      .delay(1000)
      .animate(
        { width: "100px", height: "100px", opacity: "1" },
        1000,
        function () {
          firstDiv.css("backgroundColor", "green");
        }
      )
      .animate({ left: "0px" }, 1000);
  });
  $("#ThirdDayButton").click(function () {
    let fourthDiv = $("<div>").css({
      backgroundColor: "green",
      width: "100px",
      height: "100px",
      margin: "12px",
      border: "1px solid",
    });
    let fifthDiv = $("<div>").css({
      backgroundColor: "blue",
      width: "100px",
      height: "100px",
      margin: "12px",
      border: "1px solid",
    });
    $(".innerDiv").after(fourthDiv);
    $(".innerDiv").before(fifthDiv);
  });
});
