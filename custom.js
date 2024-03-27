$("#formValidation").validate({
    rules:{
        name:{
            minlength:2
        },
        // email:{
        //     email:true
        // },
        phone:{
            minlength:10,
        },
        FormMessage:{
           minlength:50, 
        }
    },
    messages :{
        name:{
        required: "Please enter your name",
        minlength:"Name at least 2 characters"
      },
       email:"Please enter your email", 
       subject:"Please enter your subject",
       phone:{
        required: "Please enter your Phone Number",
        minlength:"Name at least 10 Numbers"
      },
      FormMessage:{
        required: "Please enter your Message",
        minlength:"Name at least 50 letters"
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
   });

//    <label id="FormMessage-error" class="error" for="FormMessage">This field is required.</label>