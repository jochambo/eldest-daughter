require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'jquery'], function (app, $) {
  'use strict';
  if (!('autofocus' in document.createElement('input'))) { // Add focus if browser doesn't support
    document.getElementById('username').focus();
  }
});

function validateForm() {
  var un = document.loginform.user.value,
      pw = document.loginform.pword.value,
      username = 'username', // Used in lieu of full auth system.
      password = 'password';

  if ((un === username) && (pw === password)) {
    alert('Welcome ' + username + '!');
    return true;
  } else {
    alert('Login was unsuccessful, please check your username and password and try again.');
    return false;
  }
}
