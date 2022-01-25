export function inputValidatorRegister(input) {

    let errors = {};
    const inputProps = ["title", "email", "passAdmin", "passStaff", "logo", "tables", "payment_mp"]
  
    for (var i = 0; i < inputProps.length; i++) {
  
      if (!input[inputProps[i]]) {
        errors[inputProps[i]] = `${inputProps[i]} is required`
      }
    }
    return errors;
  }