
const formHandling = (request, response, users) => {
  // 2 paths login and registration
  // State 1: input: email button1: login  button2: register
  // State 2: input: pass  button1: submit button2: back
  // State 3: input: none  button1: logout button2: none

  //using cookie value to determine state
  const email    = request.cookies['email_validated'];
  const pass     = request.cookies['pass_validated'];

  //State 1: ask for email
  if(!email && !pass){
    for(user of users){
      if (request.body['email'] === user.email){
        response.cookie('user_id' ,user.id);
        response.cookie('email_validated' , true);
        response.send('email validated')
        return;
      }
    }
    response.status(401).send('Email is not registered');
  }

  //State 2: ask for password
  else if(email && !pass){
    for(user of users){
      if (request.body.loginPass = users.pass){
        response.cookies(pass_validated , 'true');
        response.send('password validated');
        return;
      }
      else{response.status(401).send('invalid password')};
    }
    } else{ //State 3: user logged in
      response.send('user is logged in');
      return;
    }
}

module.exports = {
  formHandling
}
