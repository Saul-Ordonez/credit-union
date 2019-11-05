$(document).ready(function() {
  $('.newAccount').submit(function(event) {
    event.preventDefault();

    var nameInput = $('input#name').val();
    var initialInput = parseInt($('input#initialDeposit').val());
    console.log(nameInput, initialInput);
    $('#balance').html(initialInput);
    $(".balance").show();


  });
});
