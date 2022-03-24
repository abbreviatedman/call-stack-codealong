// This function calls itself, and that new version of the function gets added to the call stack.
// Then that version of the function calls itself, adding a third copy of the function to the stack.
// This continues infinitely, theoretically. But the call stack has a limit!
// Try running it with `node stack-overflow.js` and you'll get an error with an interesting "stack trace"!
const wat = (number) => {
  const newNum = number + 1;
  wat(newNum);
};

wat(1);
