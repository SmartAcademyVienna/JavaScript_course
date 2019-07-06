# [JS review](Review/Readme.md)

## REVIEW_CHAPTER_02

### [_[006]_](Chapter_02/006_Basics_of_JavaScript_instructions/Readme.md) BASICS OF JAVASCRIPT INSTRUCTIONS:

We learned hoe to comment the code in all Javascript. We will list the ways of commenting in all HTML, CSS and JS with keyboard shortcut.

> Tested for `VScode` with `EN` keyboard layout.

> After highlight a specific text OR just stop on any position in the line (without highlighting), you can press `Ctrl+/` in your keyboard. VSCode will make a command for you. Comment will applied on highlighted text or one single line.

**Commenting in HTML**
HTML comment start with `<!--` and ends with `-->`;

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Memory-Game</title>
  </head>
  <body>
    <div class="memory-game">
      <div class="control-container">
        <!-- <= Comment start with those tags => -->
        <!-- <button id="restart" onclick="restart()">
          Restart
        </button> -->
        <h2 id="moves">POINTS: <span>0</span></h2>
      </div>
      <div class="header">
        <img src="./assets/memory-game.png" />
      </div>
    </div>
  </body>
</html>
```

**Commenting in CSS**
CSS comment start with `/*` and ends with `*/`;

```css
html,
body {
  height: 100%;
  background: #333;
  /* margin: 50px; */
}
```

**Commenting in JavaScript**
JS comment start with `/**` and ends with `*/` for `multi-lines`;
JS can make a comment start with `//` only for `single-lines`;

Highlighting many lines and press comment shortcut `Ctrl+/` will make for each line `//`.

```js
(function() {
  let memoryGameContainer = document.getElementById("moves");
  console.log(memoryGameContainer);
})();
```

> Also you should know that `Keywords` im programming languages are simple words that are already reserved by the system. That means you can not use them as a `variable` since they already referring to special instruction.

### [_[007]_](Chapter_02/007_Variables/Readme.md) VARIABLES:

We also learned how to create `variables` in both `ES5`, and `ES6`.

**JavaScript**

```js
// ES5
var variableName = "This is simple variable with string value";
// ES6
let variableName = "This is simple variable with string value";
```

---

So what are the difference between `var` and `let`?

Let us see specification according to:

1. `Global Scope.`
2. `Private or Functional Scope.`
3. `Block Scope.`
4. `Re-declaration.`

#### `1. Global Scope:`

```js
let group = "We"; // Defined in global scope
var whatsDoing = "are reviewing JavaScript part 1"; // Defined in global scope
```

| declare with `var`                                                                        | declare with `let`                                                                            |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Will define the variable in global scope. Means can be accessed by `window.VARIABLE_NAME` | Will define the variable private scope. Means can `NOT` be accessed by `window.VARIABLE_NAME` |

**_RESULTS:_**

```js
console.log(window.group); // undefined
console.log(window.whatsDoing); // "are reviewing JavaScript part 1"
```

#### `2. Private or Functional Scope:`

From private or function scope they behave the same.

```js
function varVsLet() {
  let group = "We"; // Private scope or Function scope
  var whatsDoing = "are reviewing JavaScript part 1"; // Private scope or Function scope
}
```

**_RESULTS:_**

```js
function varVsLet() {
  let group = "We"; // Private scope or Function scope
  var whatsDoing = "are reviewing JavaScript part 1"; // Private scope or Function scope
  console.log(group); // "are reviewing JavaScript part 1"
  console.log(whatsDoing); // "are reviewing JavaScript part 1"
}
```

#### `3. Block Scope:`

| declare with `var`                         | declare with `let`                |
| ------------------------------------------ | --------------------------------- |
| Declare and variable in `functional scope` | Declare variable in `block scope` |

By seeing this example:

**JavaScript**

First with `var` keyword

```js
function varVsLetBlockScope() {
  let group = "We"; // Private scope or Function scope
  var whatsDoing = "are reviewing JavaScript part 1"; // Private scope or Function scope
  for (let i = 0; i < whatsDoing.length; i++) {
    // Some cods here
  }
  console.log(i); // undefined
}
```

It will give us `undefined` instead of throwing error, because JS compiler trying to access `i` variables the global scope if not found in private scope. this is called `Closures` in JavaScript.

#### `4. Re-declaration:`

| declare with `var` | declare with `let`   |
| ------------------ | -------------------- |
| Can be re-declared | Can't be re-declared |

with `var`

```js
var whatsDoing = "are reviewing JavaScript part 1"; // Declared
var whatsDoing = "are going though reviewing JS part 1"; // Re-declared again with no problem.
```

with `let`

```js
let whatsDoing = "are reviewing JavaScript part 1"; // Declared
let whatsDoing = "are going though reviewing JS part 1"; // Throw error!
```

### RULES FOR NAMING VARIABLES

1. Variable name begin with a letter, dollar sign (\$), or underscore (\_). It must `NOT` begin with a number.
2. The name can contain letters, numbers, dollar sign (\$), or an underscore (\_). Note that you must not use a dash(-) or a period (.) in a variable name.
3. You cannot use `keywords` or reserved words. for example `var`.
4. All variables are case sensitive. `Case-Sensitive` which mean that `firstname` is not equal to `firstName`.
5. Use a name that describes the kind of information that the variable stores.
6. If your variable name is made up of more than one word, use either `camel-case` or `snake-case`

Can you specify the valid variable names:

| Variable name | Is Valid |
| ------------- | -------- |
| firstName     | Yes      |
| Var#          | No       |
| first_name    | Yes      |
| num1          | Yes      |
| first name    | No       |
| first-name    | No       |
| 1number       | No       |
| \$result      | Yes      |

### VARIABLES TYPES

We learned about variables types like:

- Primitive types: `[String, Number, Boolean]`.
- Aggregation types: `[Object, Array]`.

### USING QUOTES INSIDE A STRING

**JavaScript**

`ES5`

```js
let carsOwner = "This is Joh's car";
// OR scaping character
let carsOwner = "This is Joh's car";
```

`ES6`

```js
// By using "back tick"
let carsOwner = `This is Joh's car`;
```

### [_[008]_](Chapter_02/008_Arrays/Readme.md) ARRAYS:

**JavaScript**

```js
let twoDimensionArray = [
  ["red", "green", "yellow"],
  ["pink", "darkred", "darkgreen"],
  ["gray", "black", "bluesky"]
];

for (let r = 0; r < twoDimensionArray.length; r++) {
  for (let c = 0; c < twoDimensionArray[r].length; c++) {
    console.log("Color is =>", twoDimensionArray[r][c]);
  }
}
```

### [_[009]_](Chapter_02/009_Expressions_&_operators/Readme.md) EXPRESSIONS & OPERATORS:

- **_Expressions:_**

```js
// This is simple expression
let course = "JavaScript";
```

- **_Operations:_**

  `1. Assignment operators.`

  ```js
  let color = "beige";
  ```

  `2. Arithmetic operators.`

  ```js
  let area = 3 * 2;
  ```

  `3. String operators.`

  ```js
  let greeting = "Hi " + "Molly";
  ```

  `4. Comparison operators.`

  ```js
  let buy = 3 > 5;
  ```

  `5. Logical operators.`

  ```js
  var buy = 5 > 3 && 2 < 4;
  ```

#### MORE ARITHMETIC OPERATORS:

| Name           | Operation | Purpose & notes                                    | Example      | result |
| -------------- | --------- | -------------------------------------------------- | ------------ | ------ |
| ADDITION       | **+**     | Adds one value to another                          | 10 + 5       | 15     |
| SUBTRACTION    | **-**     | Subtracts one value from another                   | 10 - 5       | 5      |
| DIVISION       | **/**     | Divides two values                                 | 10 / 2       | 2      |
| MULTIPLICATION | **\***    | Multiplies t wo values using an `asterisk` not `x` | 10 \* 5      | 50     |
| INCREMENT      | **++**    | Adds one to the current number                     | i = 10; i++; | 11     |
| DECREMENT      | **--**    | Subtracts one from the current number              | i = 10; i--; | 9      |
| MODULUS        | **%**     | Divides two values and returns the remainder       | 10 % 3       | 1      |

#### ORDER OF EXECUTION:

What is the result of this statement?

```js
let result = "(4 + (5 * 2)) + 4 * 5 - ((5*4) / 4)";
```

#### STRING OPERATORS:

**ES5**

```js
var firstName = "Ivy ";
var lastName = " Stone";
var fullName = firstName + lastName; // Ivy Stone
```

**ES6**

```js
let firstName = "Ivy ";
let lastName = " Stone";
let fullName = `${firstName} ${lastName}`;
```

#### MIXING NUMBER AND STRINGS TOGETHER:

Only works with plus operator:

```js
var number = 12;
var street = "Ivy Road";
var add = number + street; // '12Ivy Road'
```

```js
var score = "seven ";
var score2 = " nine";
var total = score * score2; // NaN
```
