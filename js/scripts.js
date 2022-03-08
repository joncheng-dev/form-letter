$(document).ready(function () {
  $("#letterForm").submit(function (event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const date1Input = $("input#date1").val();
    const date2Input = $("input#date2").val();
    const date3Input = $("input#date3").val();
    const person2Input = $("input#person2").val();

    const userInput = [
      person1Input,
      date1Input,
      date2Input,
      date3Input,
      person2Input,
    ];

    // Counter keeps track of which type-in form to grab text from.
    let counter = 0;
    userInput.forEach(function (entry) {
      $("counter").text(entry);
      counter += 1;
    });

    $("#letterTemplate").show();
  });
});
