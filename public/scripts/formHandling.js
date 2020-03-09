
const formHandling = (request, response) => {
  // const {users, urlDatabase} = require('../express_server');
  // 2 paths login and registration
  // State 1: input: email button1: login  button2: register
  // State 2: input: pass  button1: submit button2: back
  // State 3: input: none  button1: logout button2: none

  //using cookie value to determine state
  const email    = request.cookies.email_validated;
  const pass     = request.cookies.pass_validated;
  const register = request.cookies.registration;
  console.log('COOKIES YAY',request.cookies)
  response.cookie('email_validated' , 'true');
  response.cookie('email_validated' , 'true');
  response.cookie('registration' , 'true');
  // request.cookies('resgistration_validated' , 'true');
  console.log('COOKIES YAY',request.cookies)
  console.log('COOKIES YAY',request.cookies.registration)

  //State 1: ask for email
  if(!email && !pass){
    for(id in users){
      if (request.body.loginEmail === users[id].email){
        request.cookies.user_id = id;
        response.cookie('email_validated' , 'true');
        console.log('COOKIES YAY',request.cookies)
        // response.redirect('http://localhost:8080/')
        return;
      }
    }
    response.status(401).send('Email is not registered');
  }

  //State 2: ask for password
  else if(email && !pass){
    console.log('PASS NOT VALIDATED')
    const id = request.cookies.user_id;
    if (bcrypt.compareSync(request.body.loginPass, users[id].hash)){
      request.cookies.pass_validated = 'true';
      response.redirect('http://localhost:8080/')
    }
    else{response.status(401).send('invalid password')};
    } else{
      console.log('VALIDATED');
      response.send('snd');
    }
}

module.exports = {
  formHandling
}
