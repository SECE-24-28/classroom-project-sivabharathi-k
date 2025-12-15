import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5000/api/student';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (error) {
      console.error('Fetch error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch students';
      alert('Error fetching students: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({ name: '', age: '', email: '' });
      fetchStudents();
    } catch (error) {
      console.error('Full error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
      alert('Error saving student: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (student) => {
    setFormData({ name: student.name, age: student.age, email: student.email });
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        setLoading(true);
        await axios.delete(`${API_URL}/${id}`);
        fetchStudents();
      } catch (error) {
        alert('Error deleting student: ' + error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', age: '', email: '' });
    setEditingId(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management System</h1>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>{editingId ? 'Edit Student' : 'Add New Student'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <div className="form-buttons">
              <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : editingId ? 'Update' : 'Add'}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="students-section">
          <h2>Students List</h2>
          {loading && <p>Loading...</p>}
          {students.length === 0 ? (
            <p>No students found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.email}</td>
                    <td>
                      <button onClick={() => handleEdit(student)}>Edit</button>
                      <button onClick={() => handleDelete(student._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;