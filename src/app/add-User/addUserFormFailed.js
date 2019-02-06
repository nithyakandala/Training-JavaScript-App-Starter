/* 
adding user failed
*/

$.subscribe(message.addUserFormFailed, addUserFailed)

function addUserFailed(){
$('#messageDivSuccess').hide();
$('#messageDivFail').show();
$('#messageDivFail').text(appState.UserList.slice(-1)[0].name+"! Your Registration Failed! :( Please try again!");
$('#name').val('');
$('#email').val('');
$('#git').val('');
}