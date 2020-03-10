$(document).ready(() => {
  console.log('Form Ready')
  $('login-button').click( e => {
  // e.preventDefault();
  console.log('Login button clicked')
   $('#input-form').submit(
     e => {
       e.preventDefault();
       $.ajax({
         type: 'POST',
         url: '/login',
       })
       .then( res => {
         if(res === 'email validated')
         console.log(res)
       })
     }
   )
   $('#input-form').trigger('submit');
  })




  $('form-msg').click( () => {
    console.log('clicked')
    $.css('color') = red;
  }  )
});
