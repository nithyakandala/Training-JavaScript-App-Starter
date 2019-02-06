$(function() {
  $(".form").on("keyup", onFormUpdate);
});
var $name = $("#name");
var $email = $("#email");
var $git = $("#git");
$("#userSubmit").attr("disabled", true);

$.subscribe(
  message.addUserFormValidatedSuccessfully,
  userFormValidatedSuccessfully
);
$.subscribe(
    message.addUserFormValidationFailed,
    userFormValidationFailed
  );

function userFormValidatedSuccessfully() {
  $("#userSubmit").attr("disabled", false);
}
function userFormValidationFailed() {
    $("#userSubmit").attr("disabled", true);
  }

function onFormUpdate() {
  var user = new UserForm($name.val(), $email.val(), $git.val());

  console.log("onkeyUp", user);
  store.updateForm(user);
  afterUpdateForm();
}

function afterUpdateForm() {
  $.publish(message.addUserFormUpdated);
}
