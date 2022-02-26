$(document).ready(function () {
  $("#letterForm").submit(function (event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const date1Input = $("input#date1").val();
    const date2Input = $("input#date2").val();
    const date3Input = $("input#date3").val();
    const person2Input = $("input#person2").val();

    $(".person1").text(person1Input);
    $(".date1").text(date1Input);
    $(".date2").text(date2Input);
    $(".date3").text(date3Input);
    $(".person2").text(person2Input);

    $("#letterTemplate").show();
  });
});
