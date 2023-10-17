//---------------------------------
// Your own functions here
//---------------------------------


function sayHello() {
    //do something
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
      }).catch((error) => {
        // An error happened.
      });
}
//sayHello();    //invoke function