import {
    postRequestPromise,
    // putRequestPromise,
    setToken
} from "./apiCalls";

function login(email, password) {
    const body = {
        email: email,
        password: password,
    };
    return postRequestPromise("/login", body).then((response) => {
        setToken(response.token);
    });
}

function logout() {
    return postRequestPromise("/logout").then(() => {
        setToken(undefined);
    });
}

// function resetPassword(
//   currentPassword,
//   newPassword,
//   newPasswordConfirmation
// ) {
//   const body = {
//     current_password: currentPassword,
//     password: newPassword,
//     password_confirmation: newPasswordConfirmation,
//   };
//   return putRequestPromise("/reset/password", body);
// }

export default {
    login,
    logout,
    //   resetPassword,
};