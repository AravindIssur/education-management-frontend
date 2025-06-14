import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '../../store/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Education Management System
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {user ? `Welcome, ${user.firstName} ${user.lastName}` : 'Loading...'}
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardActionArea onClick={() => navigate('/students')}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/images/students.jpg"
                      alt="Students"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Students
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Manage student records and profiles
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardActionArea onClick={() => navigate('/courses')}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/images/courses.jpg"
                      alt="Courses"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Courses
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Manage course information and schedules
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardActionArea onClick={() => navigate('/teachers')}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/images/teachers.jpg"
                      alt="Teachers"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Teachers
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Manage teacher information and assignments
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              sx={{ mt: 2 }}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
