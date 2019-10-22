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
        $.ajax({
            type: "GET",
            url: "https://chile-2.herokuapp.com/v1/torneo/getAll",
            dataType: "json",
            xhrFields: {
                withCredentials: false
            },
            success: function(data) {
                data.forEach(element => {
                    $("#torneos").append('<div class="card border-primary mb-3" style="max-width: 18rem;">\
                                            <div class="card-header">'+element.nombre+'</div>\
                                            <div class="card-body text-primary">\
                                                <h5 class="card-title">Pais: '+element.pais+'</h5>\
                                            </div>\
                                        </div>');
                });
            },
            failure: function(errMsg) {
                $("#torneos").html("Torneos no disponibles :(");
                window.console.log(errMsg);
            },
        });
        window.console.log("mundo");
    },

    salir: function () {
        localStorage.removeItem("user");
        window.location = "index.html";
    },

};