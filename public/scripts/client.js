$(document).ready(  () => {
  console.log('Form Ready')
  $('#login-button').click( e => {
    console.log('Login button click')
    $('#input-form').trigger('submit');
  // $('#input-form').trigger('submit');
})

$('#input-form').submit(
  e => {
    e.preventDefault();
    console.log('submitinger')
    $.ajax({
      type: 'POST',
      url: '/login',
    })
    .then( res => {
      console.log('Response')
      console.log([res])
    })
  }
)



  $('form-msg').click( () => {
    console.log('clicked')
    $('#form-msg').css('color','red');
  }  )
});
