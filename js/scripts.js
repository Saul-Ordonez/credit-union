function Balance(nameInput, initialInput) {
  this.nameInput = nameInput,
  this.initialInput = initialInput
}



Balance.prototype.addBalance = function() {
  this.initialInput += ;
}
Balance.prototype.subtractBalance = function() {
  this.initialInput -= ;
}





//User Interface Logice
$(document).ready(function() {
  $('.newAccount').submit(function(event) {
    event.preventDefault();
    var nameInput = $('input#name').val();
    var initialInput = parseInt($('input#initialDeposit').val());
    var newBalance = new Balance (nameInput, initialInput);
    console.log(nameInput, initialInput);
    $('#balance').html(initialInput);
    $(".balance").show();
    console.log(test);
  });

  $('.depositWithdraw').submit(function(event) {
    event.preventDefault();
    var depositInput = parseInt($('input#deposit').val());
    var withdrawInput = parseInt($('input#withdraw').val());

    console.log(newBalance);
    $('#balance').html(newBalance);
  });
});
