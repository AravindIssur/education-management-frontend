import api from '../utils/api';
import { Student } from '../models/Student';

export class StudentService {
  static async getAllStudents() {
    const response = await api.get('/students');
    return response.map(studentData => Student.fromApiData(studentData));
  }

  static async getStudent(id) {
    const response = await api.get(`/students/${id}`);
    return Student.fromApiData(response);
  }

  static async createStudent(student) {
    const response = await api.post('/students', Student.toApiData(student));
    return Student.fromApiData(response);
  }

  static async updateStudent(id, student) {
    const response = await api.put(`/students/${id}`, Student.toApiData(student));
    return Student.fromApiData(response);
  }

  static async deleteStudent(id) {
    return await api.delete(`/students/${id}`);
  }
}
