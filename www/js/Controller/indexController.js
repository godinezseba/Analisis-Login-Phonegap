var app = {
    // veo si esta logueado
    check: function () {
        user = localStorage.user;
        if (user != undefined && user != null && user.length > 0) {
            window.location = 'menu.html';
        } else {
            window.location = 'login.html';
        }
    }

};