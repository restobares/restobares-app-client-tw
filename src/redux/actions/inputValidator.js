
export function inputValidator(input) {

  let errors = {};
  const inputProps = ["name", "price", "detail", "image", "CategoryId"]

  for (var i = 0; i < inputProps.length; i++) {

    if (!input[inputProps[i]]) {
      errors[inputProps[i]] = `${inputProps[i]} is required`
    }
  }
  return errors;
}