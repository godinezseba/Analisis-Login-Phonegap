var login = {
    // veo si esta logueado
    check: function () {
        name = document.getElementById("text").value;
        password = document.getElementById("pass").value;
        
        // checkeo con la BD
        if (name == "seba") {
            localStorage.setItem('user', JSON.stringify({"nombre" : name}));
            window.location = "menu.html"
        } else{
            window.alert("Usuario no registrado");
        }
    }
};