

$.subscribe(message.addUserFormSuccessful, addUserSuccessful)

function addUserSuccessful(){
$('#messageDivSuccess').text(appState.UserList.slice(-1)[0].name +"! you got registered Successfully!!! Enjoy :)");
$('#name').val('');
$('#email').val('');
$('#git').val('');
}