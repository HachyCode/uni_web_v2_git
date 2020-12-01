
export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } 
  else if (!/p\S+@student\.peterborough\.ac\.uk/.test(values.email)) { //p'any char'@student.peterborough.ac.uk
    errors.email = 'Email address is invalid, E.g.: p00000000@student.peterborough.ac.uk';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } 
  else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  }

  return errors;
}
