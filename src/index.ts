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
