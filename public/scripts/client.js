$(document).ready(  () => {
  console.log('Form Ready')


  $('#login-button').click( e => {
    console.log('Login button click')
    $('#input-form').trigger('submit');
  // $('#input-form').trigger('submit');
})

$('#input-form').submit(
  e => {
    // e.preventDefault();
    console.log('submitinger')
     return $.ajax({
      type: 'POST',
      url: '/login',
    })
    .then( (res) => {
      console.log('Response')
      console.log([res])
      console.log(a, b)
      return;
    })
    .catch(e => {
      console.log('error')
      console.log(e)

      return;
    })
  }
)

//works bring user specific map back and front
$('#map').css('z-index',5).css('filter','invert(1)')
$('#map').css('z-index',-1000).css('filter','invert(1) blur(1.1px)')

});


/* // ------------STATE 1---------------- ask for email
// -- form msg --
        <b><span id='form-msg text-light'>Enter Email:&nbsp;&nbsp;&nbsp;&nbsp;</span></b>

// -- input form --
    <form
      class='form-control form-control-lg form-inline'
      method=post action='/login'id='input-form'
      style="display:contents !important" name=usernameform>
        <input class=form-control name=login-email type="email" placeholder="example@email.com">
      </form>
      <button class='btn btn-warning' id='login-button'>Login</button>

// -- register --
    <form
      class='form-control form-control-lg form-inline'
      action="/register" method=GET
      style="display:contents !important" name=usernameform>
        <button class='btn btn-warning' id=register-button>Register</button>
    </form>

// ------------STATE 2---------------- ask for pass
// -- form msg --
 Enter Password for&nbsp;<b><span class=text-light><%= users[userID].email %>&nbsp;&nbsp;&nbsp;</span></b></b>

        <b><span id='form-msg text-light'>Enter Email:&nbsp;&nbsp;&nbsp;&nbsp;</span></b>

// -- input form --
    <form
      class='form-control form-control-lg form-inline'
      method=post action='/login'id='input-form'
      style="display:contents !important" name=usernameform>
        <input class=form-control name=login-email type="email" placeholder="example@email.com">
      </form>
      <button class='btn btn-warning' id='login-button'>Login</button>

// -- register --
    <form
      class='form-control form-control-lg form-inline'
      action="/register" method=GET
      style="display:contents !important" name=usernameform>
        <button class='btn btn-warning' id=register-button>Register</button>
    </form>


 // ------------STATE 2---------------- Logged in as user
          Logged in for:&nbsp;<b><span class=text-light><%= users[userID].email %>&nbsp;&nbsp;</span</b>
      <form
      class='form-control form-control-lg form-inline'
      action="/logout" method=POST id=LoginForm
      style="display:contents !important" name=usernameform>
        <button class='btn btn-warning'>Logout</button>
    </form> */

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
