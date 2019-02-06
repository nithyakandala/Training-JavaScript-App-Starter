$.subscribe(message.addUserFormSubmit, onUserSubmitForm)


function onUserSubmitForm(){
    try{
    var form=appState.UserForm;
    store.saveUser(form);
    $.publish(message.addUserFormSuccessful);
    
   
}catch{
    $.publish(message.addUserFormFailed);

}
}
