$(document).ready(  () => {
console.log('Form Ready')


$('#login-button').click( e => {
  $('#input-form').trigger('submit');
})

$('#input-form').submit( e => {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/login',
      data: {input :$('#input-form input').val()}
    })
    .then( (res) => {
      const name = () => JSON.stringify(res.name);
      console.log(name())
      let text = `Logged in as ${res.name}:`
      console.log('1',text)
      if(res === 'email validated'){
        $('#input-form input').attr('name','password').attr('type','password').attr('placeholder','********').val('');
        $('#form-msg').text('Enter Password:');
        return;
      }
      console.log('2',text)
      if(res.text === 'password validated'){
        console.log('3',text)
        $('#input-form input').attr('name','email').attr('type','email').attr('placeholder','example@email.com').val('').hide();
        $('#form-msg').text(text);
        return '';
      }
      return;
    })
    .catch(e => {
      console.log('error')
      console.log(e.responseText)
    })
  }
)

$('#logout-button').click( e => {
  $.ajax({
    type: 'POST',
    url: '/logout',
  })
  .then( () => {
    console.log('logout')
    $('#input-form input').attr('name','email').attr('type','email').attr('placeholder','example@email.com').val('').show()
    $('#form-msg').text('Enter Email:');
    return;
  })
})

//works bring user specific map back and front
$('#map').css('z-index',5).css('filter','invert(1)')
$('#map').css('z-index',-1000).css('filter','invert(1) blur(1.1px)')

});

// ----- NOTES FOR LUCAS
//     $('#input-form').html()
// "
//         <input class=\"form-control\" name=\"login-email\" type=\"email\" placeholder=\"example@email.com\">
//       "
// $('#input-form input').val()
// "cekancelucas@gmail.com"
// $('#input-form input').before('<i>Hello<i>')
// Object { 0: input.form-control
// , length: 1, prevObject: {…} }

// $('#input-form').before('<i>Hello<i>')
// Object { 0: form#input-form.form-control.form-control-lg.form-inline, length: 1 }
/*
<input type="color" id="head" name="head"
           value="#e66465"></input> */
// https://developers.google.com/maps/documentation/javascript/styling
