var log = document.getElementById('login')
var signup = document.getElementById('signup')

function login() {
    log.style.display = "block";
    signup.style.display = "none";
}

function create_acc() {
    signup.style.display = "block";
    log.style.display = "none";
}


var sideb = document.querySelector(".sidebar")
        var links = sideb.getElementsByClassName("btn");

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }