var menu = {
    check: function (params) {
        try {
            user = JSON.parse(localStorage.user);
        } catch (error) {
            window.console.log(error);
            window.location = "index.html";
        }
        // window.console.log(user);
        document.getElementById("name").innerHTML = user.nombre;
    },
    salir: function (params) {
        localStorage.removeItem("user");
        window.location = "index.html";
    }
};