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
// getInstructorFullName("JD");
