const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();




// Function Author: Ben McElyea 
// Date: February 2021
// createReviewer - A Cloud function to add users to the Firebase authentication DB 
// To update this function you must run the command firebase deploy --only functions 

exports.createReviewer = functions.https.onCall((request, context) => {
  console.log(request.email)

  //Only allow authenticated users to call this function. 
  if (!context.auth) {
    return { message: 'Authentication Required!', code: 401 };
  } else {

    return admin.auth().createUser({
      email: request.email,
      password: request.password
    })
      .catch((error) => {
        throw new functions.https.HttpsError('internal', error.message)
      });

  }

});


// Function Author: Ben McElyea
// Date: February 2021
// deleteReviewer - A Cloud function to delete users to the Firebase authentication DB 
// To update this function you must run the command firebase deploy --only functions 

exports.deleteReviewer = functions.https.onCall((request, context) => {
  console.log("Deleting user" + request.email)

  //Only allow authenticated users to call this function. 
  if (!context.auth) {
    return { message: 'Authentication Required!', code: 401 };
  }
  else {

    return admin.auth().deleteUser(request.uid)
      .catch((error) => {
        console.log('Error deleting user:', error);
        throw new functions.https.HttpsError('internal', error.message)
      });

  }

});


// Function Author: Ben McElyea
// Date: March 2021
// resetPassword - A Cloud function to reset users to the Firebase authentication password 
// To update this function you must run the command firebase deploy --only functions 

exports.deleteReviewer = functions.https.onCall((request, context) => {
  console.log("Deleting user" + request.email)

  //Only allow authenticated users to call this function. 
  if (!context.auth) {
    return { message: 'Authentication Required!', code: 401 };
  }
  else {

    admin
      .auth()
      .generatePasswordResetLink(userEmail, actionCodeSettings)
      .then((link) => {
        // Construct password reset email template, embed the link and send
        // using custom SMTP server.
        return sendCustomPasswordResetEmail(email, displayName, link);
      })
      .catch((error) => {
        throw new functions.https.HttpsError('internal', error.message)
      });


  }


});

// Admin SDK API to generate the password reset link.
const userEmail = 'user@example.com';
