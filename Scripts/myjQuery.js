$(document).ready(function () {
    $("#form-firstemail").keydown(function (e) {
        $("form-userid").html = $("#form-firstemail").val();

        e.preventDefault();
    });

    //e.preventDefault();
    //var email = $("#form-firstemail").val();
});