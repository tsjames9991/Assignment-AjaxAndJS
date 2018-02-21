$().ready(function () {

        $("#signUpForm").validate(
            {
                rules: {
                    firstName: {
                        required: true,
                        minlength: 2
                    },
                    userEmail: {
                        required: true,
                        email: true
                    },
                    emailVerify: {
                        required: true,
                        equalTo: "#userEmail"
                    },
                    phone: {
                        minlength: 10
                    }

                },
                messages: {
                    firstName: {
                        required: "Please enter your first name",
                        minlength: "Name requires at least 2 chars."
                    },
                    userEmail: {
                        required: "Mandatory in order to contact you",
                        email: "Requires a email address to contact you"
                    },
                    emailVerify: {
                        required: "Re-enter your email address.",
                        equalTo: "This email is different. Please Re-enter."
                    },
                    phone: {
                        minlength: "Invalid Phone number."
                    }
                }
            }
        );

        $('#signUpForm').submit(function (e) {
            e.preventDefault();
            if ($('#signUpForm').valid()) {
                getInfo();
            }
            else {

            }
        });

        function getInfo() {
            $.ajax({

                url: "https://reqres.in/api/users/10",
                async: false,
                dataType: 'json',
                beforeSend: function () {
                    $("#msg").text("..Loading")
                },
                type: "GET",
                //data:
                cache: false,
                success: function (result) {
                    $("#msg").text("Loaded.");
                    console.log(result);
                    var obj = result.data;
                    $("#content").html("<h2>Id: " + obj.id + "</h2>")
                        .append("<h2>first name: " + obj.first_name + "</h2>")
                        .append("<h2>last name: " + obj.last_name + " </h2>")
                        .append("<img src=\""+obj.avatar+"\" alt=myface>");
                },
                error: function (errata) {
                    $("#msg").text("..failed");
                    console.log(errata)
                }
            })
        }
    }
);

