window.onload = function () {
    alert("Welcome to our site ;)");
};

window.onclose = function () {
    confirm("Are you sure you want to close?");
    return "Are you sure?";
}
