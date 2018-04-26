//  look at this instead https://www.npmjs.com/package/react-bootstrap-validation

// JS to enable validation on the sign up page from project 2  need to add this as react

$(document).ready(function() {
  $("#reg_form")
    .bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      //  http://bootstrapvalidator.votintsev.ru/settings/
      feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh"
      },
      fields: {
        first_name: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your first name"
            }
          }
        },
        last_name: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your last name"
            }
          }
        },

        user_name: {
          validators: {
            stringLength: {
              min: 2,
              max: 20,
              message: "Please enter at least 2 characters and no more than 20"
            },
            notEmpty: {
              message: "Please supply a user name "
            }
          }
        },

        password: {
          validators: {
            identical: {
              field: "confirmPassword",
              message: "Confirm your password below - type same password please"
            }
          }
        },
        confirmPassword: {
          validators: {
            identical: {
              field: "password",
              message: "The password and its confirm are not the same"
            }
          }
        }
      }
    })

    .on("success.form.bv", function(e) {
      $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ...
      $("#reg_form")
        .data("bootstrapValidator")
        .resetForm();

      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data("bootstrapValidator");

      // Use Ajax to submit form data
      $.post(
        $form.attr("action"),
        $form.serialize(),
        function(result) {
          console.log(result);
        },
        "json"
      );
    });
});
// JS to enable validation on the user name and password page
$(document).ready(function() {
  $("#user_form")
    .bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      //  http://bootstrapvalidator.votintsev.ru/settings/
      feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh"
      },
      fields: {
        user_name: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your user name"
            }
          }
        },
        password: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your password"
            }
          }
        }
      }
    })

    .on("success.form.bv", function(e) {
      $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ...
      $("#user_form")
        .data("bootstrapValidator")
        .resetForm();
      // Prevent form submission
      e.preventDefault();
      // Get the form instance
      var $form = $(e.target);
      // Get the BootstrapValidator instance
      var bv = $form.data("bootstrapValidator");
      // Use Ajax to submit form data
      $.post(
        $form.attr("action"),
        $form.serialize(),
        function(result) {
          console.log(result);
        },
        "json"
      );
    });
});
