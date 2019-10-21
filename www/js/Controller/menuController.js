// import * as $ from "static/js/jquery-3.4.1.slim.min.js";

var menu = {

    init:function () {
        this.check();
        this.datos();
    },

    check: function () {
        try {
            user = JSON.parse(localStorage.user);
        } catch (error) {
            window.console.log(error);
            window.location = "index.html";
        }
        // window.console.log(user);
        document.getElementById("name").innerHTML = user.nombre;
    },

    datos: function () {
        window.console.log("hola");
        $.ajax({
            type: "GET",
            url: "localhost:8000/v1/torneo/getAll",
            success: function (data) {
                
                window.console.log(data);
                data.forEach(element => {
                    $("#torneos").append('<div class="card border-primary mb-3" style="max-width: 18rem;">\
                                            <div class="card-header">Header</div>\
                                            <div class="card-body text-primary">\
                                                <h5 class="card-title">Primary card title</h5>\
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\
                                            </div>\
                                        </div>');
                });
            },
            failure: function (errMsg) {
                $("#torneos").html("Torneos no disponibles :(");
                window.console.log(errMsg);
            }
        });
        window.console.log("mundo");
    },

    salir: function () {
        localStorage.removeItem("user");
        window.location = "index.html";
    },

};