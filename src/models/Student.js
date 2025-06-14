export class Student {
  constructor({
    id,
    firstName,
    lastName,
    email,
    phone,
    address,
    dateOfBirth,
    enrolledCourses = [],
    createdAt,
    updatedAt
  } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.enrolledCourses = enrolledCourses;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromApiData(data) {
    return new Student(data);
  }

  static toApiData(student) {
    return {
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      phone: student.phone,
      address: student.address,
      dateOfBirth: student.dateOfBirth,
      enrolledCourses: student.enrolledCourses
    };
  }
}
