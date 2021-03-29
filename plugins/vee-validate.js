import { extend } from "vee-validate";
import { required, alpha,email,numeric,min } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("min", {
  ...min,
  message: "The {_field_} must be at least {length} character(s) "
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});
extend("numeric", {
  ...numeric,
  message: "This field must only contain numeric characters"
});


extend('email', {
  ...email,
  message: 'Email must be valid',
})
