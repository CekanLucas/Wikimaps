$(document).ready(() => {
  $('.btn.btn-warning')

  $('login-button').click( () => {
   $('#input-form').submit(
     e => {
       e.preventDefault();
       $.ajax({
         method: 'post',
         url: 'http://localhost:8080/login',
         data: $('#input-form').serialize()
       })
     }
   )
  })
});
