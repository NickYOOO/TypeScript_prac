interface Student {
  name: string;
  age: number;
  scores: {
    korean: number;
    math: number;
    society: number;
    science: number;
    english: number;
  };
}

function assignGrade(average: number): string {
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function calculateAverage(student: Student): number {
  const sum =
    student.scores.korean +
    student.scores.math +
    student.scores.society +
    student.scores.science +
    student.scores.english;
  const average = sum / 5;
  return average;
}
