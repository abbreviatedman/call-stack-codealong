// These files are for running in the debugger and exploring the call stack.
// Play around with them! (But be warned—the stack-overflow file has an error.)

// How to set up the debugger!
// 1. set a breakpoint
// 2. call your function
// 3. run the debugger

const instructors = [
  {
    name: {
      first: "Angie",
      last: "Munoz",
      initials: "AM",
    },
  },
  {
    name: {
      first: "Colin",
      last: "Jaffe",
      initials: "CJ",
    },
  },
  {
    name: {
      first: "José",
      last: "Mejia",
      initials: "JM",
    },
  },
];

const getFullName = (instructor) => {
  return instructor.name.first + " " + instructor.name.last;
};

const getInstructor = (initialsToFind) => {
  for (const instructor of instructors) {
    if (instructor.name.initials === initialsToFind) {
      return instructor;
    }
  }

  throw Error("Instructor not found!");
};

const getInstructorFullName = (initials) => {
  const instructor = getInstructor(initials);
  const fullName = getFullName(instructor);

  return fullName;
};

getInstructorFullName("CJ");
getInstructorFullName("AM");
// uncomment the below and run `node call-stack-simple.js` to see the call stack at work in an error message!
// getInstructorFullName("JD");
