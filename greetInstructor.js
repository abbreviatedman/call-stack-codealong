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

const getGreeting = (initials, isFriendly) => {
  const greetingStart = getAppropriateGreetingStart(isFriendly);
  const greetingEnd = getAppropriateGreetingEnd(initials, isFriendly);

  return `${greetingStart}, ${greetingEnd}`;
};

const getAppropriateGreetingStart = (isFriendly) => {
  if (isFriendly) {
    return "Hey";
  }

  return "Hello";
};

const getAppropriateGreetingEnd = (initials, isFriendly) => {
  const instructor = getInstructor(initials);
  if (isFriendly) {
    return instructor.name.first + "!";
  }

  return getFullName(instructor) + ".";
};

const getInstructor = (initialsToFind) => {
  for (const instructor of instructors) {
    if (instructor.name.initials === initialsToFind) {
      return instructor;
    }
  }

  throw Error("No instructor found.");
};

const getFullName = (instructor) => {
  return instructor.name.first + " " + instructor.name.last;
};

const greeting1 = getGreeting("CJ", true);
console.log(greeting1);
const greeting2 = getGreeting("AM", false);
console.log(greeting2);
// const greeting2 = getGreeting("CM", false);
// console.log(greeting2);
