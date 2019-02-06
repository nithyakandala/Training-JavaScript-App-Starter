var initialState = {
  UserForm: {},
  UserList: []
};
var appState = initialState;

var store = {
  updateForm: function(form) {
    appState.UserForm = form;
  },
  saveUser: function(form) {
    appState.UserList.push(form);  
  }
};
