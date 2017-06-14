var checkDone = function(data, textStatus, jqXHR) {
  console.log(data);
  alert(textStatus);
}
var checkFail = function(jqXHR, textStatus, errorThrown) {
  console.log(jqXHR);
  alert(textStatus);
}

$(function() {
  var token = get('token');
  checkToken(token, checkDone, checkFail);
});

function sendReset(username, done, fail) {
  if(username) {
    $.ajax({
      url: '/api/forgot',
      method: 'POST',
      data: {
        token: token,
        username: username,
        password: password
      }
    })
    .done(done)
    .fail(fail);
  }
}

function changePassword(username, password, token, done, fail) {
  if(token) {
    $.ajax({
      url: '/api/forgot',
      method: 'PUT',
      data: {
        token: token,
        username: username,
        password: password
      }
    })
    .done(done)
    .fail(fail);
  }
}

function checkToken(token, done, fail) {
  if(token) {
    $.ajax({
      url: '/api/forgot',
      method: 'GET',
      data: {
        token: token
      }
    })
    .done(done)
    .fail(fail);
  }
}

function get(name) {
  if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {
    return decodeURIComponent(name[1]);
  }
}
