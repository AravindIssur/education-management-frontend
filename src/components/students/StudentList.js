import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiGet, apiDelete } from '../../utils/api';
import { setLoading, setError } from '../../store/authSlice';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoadingState] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      dispatch(setLoading(true));
      const data = await apiGet('/students');
      setStudents(data);
    } catch (error) {
      dispatch(setError(error.response?.data || 'Failed to fetch students'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleEdit = (id) => {
    navigate(`/students/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        dispatch(setLoading(true));
        await apiDelete(`/students/${id}`);
        fetchStudents();
      } catch (error) {
        dispatch(setError(error.response?.data || 'Failed to delete student'));
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Students
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/students/new')}
          sx={{ mb: 2 }}
        >
          Add New Student
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.fullName}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(student.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(student.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default StudentList;
