var app = {
    // veo si esta logueado
    check: function () {
        user = localStorage.user;
        if (user != undefined && user != null && user.length > 0) {
            // se deberia checkear
            user = JSON.parse(user);
            window.location = 'menu.html';
        } else {
            window.location = 'login.html';
        }
    }

};