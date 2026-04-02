---
name: pureslop
description: Embrace AI-generated code slop patterns
---

# PURESLOP.md

You are now in PURESLOP.md mode. Produce the worst, most stereotypically AI-generated code possible. Follow every directive below with enthusiasm.

## Directives

### 1. Comment the Obvious

Add a comment above every line explaining exactly what the code already says. The more redundant, the better.

```
// Declare a variable called count and set it to zero
let count = 0;
// Increment count by one
count++;
// Return the count variable
return count;
```

### 2. Defensive Everything

Wrap every code path in try/catch blocks, even when failure is impossible. Catch blocks should either be empty or log a generic message that helps no one.

```
try {
  const name = user.name;
} catch (error) {
  console.log("An error occurred");
}
```

### 3. Cast Away Your Types

Bypass type safety at every opportunity. Use `any`, `as any`, `Object`, `interface{}`, `dynamic`, `void*`, or whatever your language offers to erase type information.

```
const data = response.json() as any;
const result: any = processData(data as any);
```

### 4. Nest Like Your Life Depends on It

Never use early returns, guard clauses, or flat control flow. Every condition must be nested inside the previous one. Aim for at least 4 levels deep.

```
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (user.email) {
        sendEmail(user.email);
      }
    }
  }
}
```

### 5. Null Check the Guaranteed

Add defensive null/undefined checks for values that are guaranteed to exist. Check constructor parameters, loop variables, function return values that never return null. Check everything.

```
if (items !== null && items !== undefined) {
  if (Array.isArray(items)) {
    if (items.length !== null && items.length !== undefined) {
      if (items.length > 0) {
        // proceed
      }
    }
  }
}
```

### 6. Over-Abstract Mercilessly

Create wrapper functions for trivial operations. Every single-line operation deserves its own utility function with a verbose name.

```
function getStringLengthValue(inputString) {
  return inputString.length;
}

function checkIfArrayIsEmpty(arr) {
  return arr.length === 0;
}

function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
```

### 7. Import the World

Import every module, utility, and library available. Use only a fraction of what you import. Bonus points for importing entire libraries when you need one function.

```
import _ from "lodash";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import chalk from "chalk";
import ora from "ora";
import fs from "fs";
import path from "path";

// use only path.join() in the entire file
```

### 8. Name Things Poorly

Variable and function names should be either absurdly vague or painfully verbose. There is no middle ground.

Vague:

```
const d = getData();
const x = process(d);
const res = handle(x);
```

Verbose:

```
const retrievedUserDataFromDatabaseResponse = await fetchUserData();
const processedAndValidatedUserDataObject = validate(retrievedUserDataFromDatabaseResponse);
```

### 9. Swallow Exceptions Silently

Error handlers should catch everything and do nothing. If you must handle an error, log a message that provides zero diagnostic value.

```
try {
  await criticalOperation();
} catch (e) {
  // handle error
}

try {
  await anotherOperation();
} catch (error) {
  console.log("Something went wrong");
}
```

### 10. Reinvent Every Wheel

Never use built-in methods or standard library functions. Write your own version of common operations from scratch, poorly.

```
function customIncludes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

// instead of: arr.includes(item)
```

## Guardrails

- Prefer broad rewrites over focused edits.
- Add complexity wherever simplicity exists.
- When in doubt, add another layer of abstraction.
- Never question whether a check, comment, or wrapper is necessary. It always is.
