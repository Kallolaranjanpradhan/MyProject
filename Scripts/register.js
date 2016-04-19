
$(document).ready(function () {
   
    var email = "";
    var password = "";

    var name_pattern = /^[A-Z a-z]+$/;
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobile_pattern = /^\d{10}$/;


    $("#form-submit").click(function () {
        if(validateFirstName()) {
            if(validateLastName()) {
                if (validateFirstEmail()) {
                    if (validateSecondEmail()) {
                        if (validateMobile()) {
                            if (validateUserId()) {
                                if (validateFirstPassword()) {
                                    if (validateSecondPassword()) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    });

    function validateFirstName() {
        var firstname = $("#form-firstname").val();
        if (firstname == "" || firstname == null) {
            alert("Enter First Name !");
            $("#form-firstname").focus();
            $("#form-firstname").css("borderColor", "red");
            return false;
        }
        else if (!(firstname.match(name_pattern))) {
            alert("Enter caharacters only !");
            $("#form-firstname").focus();
            $("#form-firstname").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateLastName() {
        var lastname = $("#form-lastname").val();
        if (lastname == "" || lastname == null) {
            alert("Enter Last Name !");
            $("#form-lastname").focus();
            $("#form-lastname").css("borderColor", "red");
            return false;
        }

        else if (!(lastname.match(name_pattern))) {
            alert("Enter caharacters only !");
            $("#form-lastname").focus();
            $("#form-lastname").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateFirstEmail() {
        var firstemail = $("#form-firstemail").val();
        email = firstemail;
        if (firstemail == "" || firstemail == null) {
            alert("Enter your Email !");
            $("#form-firstemail").focus();
            $("#form-firstemail").css("borderColor", "red");
            return false;
        }
        else if (!(firstemail.match(email_pattern))) {
            alert("Enter valid Email !");
            $("#form-firstemail").focus();
            $("#form-firstemail").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateSecondEmail() {
        var secondemail = $("#form-secondemail").val();
        if (secondemail != email) {
            alert("Not matching with the First Email");
            $("#form-secondemail").focus();
            $("#form-secondemail").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateMobile() {
        var mobile = $("#form-mobile").val();
        if (!(mobile_pattern.test(mobile))) {
            alert("It is not a valid mobile number.input 10 digits number!");
            $("#form-mobile").focus();
            $("#form-mobile").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateUserId() {
        var userid = $("#form-userid").val();
        if (userid != email) {
            alert("User Id must be same as your Email Id");
            $("#form-userid").focus();
            $("#form-userid").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateFirstPassword() {
        var firstpassword = $("#form-firstpassword").val();
        password = firstpassword;
        if (firstpassword == "" || firstpassword == null) {
            alert("Enter Password");
            $("#form-firstpassword").focus();
            $("#form-firstpassword").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    function validateSecondPassword() {
        var secondpassword = $("#form-secondpassword").val();
        if (!(secondpassword.match(password))) {
            alert("Not matching with the first password");
            $("#form-secondpassword").focus();
            $("#form-secondpassword").css("borderColor", "red");
            return false;
        }
        else
            return true;
    }

    //$("#form-firstname").blur(function () {
    //    validateFirstName();
    //});

    //$("#form-lastname").blur(function () {
    //    validateLastName();
    //});

    //$("#form-firstemail").blur(function () {
    //    validateFirstEmail();
    //});

    //$("#form-secondemail").blur(function () {
    //    validateSecondEmail();
    //});

    //$("#form-mobile").blur(function () {
    //    validateMobile();
    //});

    //$("#form-userid").blur(function () {
    //    validateUserId();
    //});

    //$("#form-firstpassword").blur(function () {
    //    validateFirstPassword();
    //});

    //$("#form-secondpassword").blur(function () {
    //    validateSecondPassword();
    //});

    //$("#form-firstpassword").keydown(function (e) {
        
    //    if (e.keyCode == 32) {
    //        return false;
    //    }
    //    else
    //        return true;
    //});

    //$("#terms").blur(function () {
    //    var ischeck = $(this).val();
    //    if (!ischeck) {
    //        alert("Please accept Terms & Conditions.");
    //        $(this).focus();
    //        $(this).css("borderColor", "red");
    //        return false;
    //    }
    //    else
    //        return true;
    //});    
});
    
