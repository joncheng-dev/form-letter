$(document).ready(function () {
  $("#letterForm").submit(function (event) {
    event.preventDefault();
    const person1Input = $("input#0").val();
    const date1Input = $("input#1").val();
    const date2Input = $("input#2").val();
    const date3Input = $("input#3").val();
    const person2Input = $("input#4").val();

    console.log(person1Input);
    console.log(date1Input);
    console.log(date2Input);
    console.log(date3Input);
    console.log(person2Input);

    const userInput = [
      person1Input,
      date1Input,
      date2Input,
      date3Input,
      person2Input,
    ];

    // Counter keeps track of which type-in form to grab text from.
    letterTemplateLocation = [
      ".person1",
      ".date1",
      ".date2",
      ".date3",
      ".person2",
    ];

    let counter = 0;
    userInput.forEach(function (input) {
      $(letterTemplateLocation[counter]).text(input);
      counter += 1;
    });

    $("#letterTemplate").show();
  });
});
