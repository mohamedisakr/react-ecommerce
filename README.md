# Validate Username

- username must not be empty
- username must not be less than 6 chars
- username must not be exceed 20 chars

# Validate Password

- password must not be empty
- password must not be less than 6 chars
- password must not be exceed 20 chars
- password must contains non-alphnumeric chars

```

function isValidUsername(username) {
  if (
    typeof username == "string" &&
    username.trim().length >= 6 &&
    username.trim().length <= 20
  ) {
    return true;
  }
  return false;
}

console.log(isValidUsername(false) === false);
console.log(isValidUsername(null) === false);
console.log(isValidUsername(undefined) === false);
console.log(isValidUsername("") === false);
console.log(isValidUsername("  \t\n") === false);
console.log(isValidUsername("X") === false);

```

## Instructions

1. Define an `isValidName(..)` validator that takes one parameter, `name`. The validator returns `true` if all the following match the parameter (`false` otherwise):

   - must be a string
   - must be non-empty
   - must contain non-whitespace of at least 3 characters

2. Define an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`. The validator returns `true` if all the following match the two parameters (`false` otherwise):

   - either parameter may only be a string or number
   - both parameters should be treated as numbers
   - both numbers must be 0 or higher
   - both numbers must be whole numbers
   - `attended` must be less than or equal to `length`
