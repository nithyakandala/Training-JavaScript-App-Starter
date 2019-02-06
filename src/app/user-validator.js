

$.subscribe(message.addUserFormUpdated,validate)

function validate(){
    var form=getFormFromStore();
    var valid=isValidForm(form);
    var validForm=afterValidation(valid);
}

function afterValidation(valid){
    if(valid)
    $.publish(message.addUserFormValidatedSuccessfully)
    else
    $.publish(message.addUserFormValidationFailed)
}

function getFormFromStore(){
    
    return appState.UserForm;
}

function isValidForm(form) {
    var isFormValid = (isNameValid(form.name) && isMailValid(form.email) && isMailValid(form.git));
    return isFormValid;
}

function isNameValid(name){
    var regex=/^[a-zA-Z ]{2,30}$/;
    return (regex.test(name))
}

function isMailValid(mail) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(mail)) {
    return false;
    }else{
    return true;
    }
}