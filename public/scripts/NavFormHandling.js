
const loginHandling = () => {
  console.log('loginHandling')
  return $.ajax({
    type: 'POST',
    url: '/login',
    data: {input :$('#input-form input').val()}
  })
  .then( (res) => {

    if(res === 'email validated'){
      $('#input-form input').attr('name','password').attr('type','password').attr('placeholder','********').val('');
      $('#login-button').show(500);
      $('#logout-button').text('Back').show(500);
      $('#register-button').hide(500);
      $('.error-message').hide();
      return;
    }
    if(res.text === 'password validated'){
      const capitalName = (res.name).split('').map(
        (el, i) => i===0? el.toUpperCase() : el
      ).join('');
      console.log(capitalName)
      const html = `Welcome <span id="logged-name">${capitalName}   </span>`
      $('#input-form input').attr('name','email').attr('type','email').attr('placeholder','example@email.com').val('').hide(500);
      $('#form-msg').html(html);
      $('#login-button').hide(500);
      $('#logout-button').text('Logout').show(500);
      $('#register-button').hide(500);
      $('.error-message').hide();
      return '';
    }
    return;
  })
  .catch(e => {
    console.log('error', e)
    const errorMSG = e.responseText;
    $('.error-message').hide();
     $('#form-msg').before(`<span class='error-message text-danger'>${errorMSG} </span>`).show(500)
  })
}

const logoutHandling = () => {
  $.ajax({
    type: 'POST',
    url: '/logout',
  })
  .then( () => {
    console.log('logout')
    $('.error-message').hide();
    $('#input-form input').attr('name','email').attr('type','email').attr('placeholder','example@email.com').val('').show(500)
    $('#form-msg').text('Enter Email:  ');
    $('#register-button').show(500);
    return;
  })
}

module.exports = {
  loginHandling,
  logoutHandling
}
