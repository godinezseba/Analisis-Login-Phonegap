var app = {
    // veo si esta logueado
    check: function () {
        user = localStorage.user;
        if (user != undefined && user != null && user.length > 0) {
            // window.location = 'menu.html';
            window.console.log(user);
        } else {
            window.location = 'login.html';
        }
    }

};