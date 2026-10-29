import { useState } from 'react'
import Studentdetails from '../components/Studentdetails'
import Studentform from '../components/Studentform'
import './Students.css'

function Students() {
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleSaveStudent = (studentData) => {
    if (selectedStudent) {
      const updatedStudents = students.map((item) => {
        if (item.id === selectedStudent.id) {
          return { ...item, ...studentData }
        }
        return item
      })
      setStudents(updatedStudents)
    } else {
      const newStudent = {
        id: Date.now(),
        ...studentData
      }
      setStudents([...students, newStudent])
    }

    setSelectedStudent(null)
    setShowForm(false)
  }

  const handleEditStudent = (student) => {
    setSelectedStudent(student)
    setShowForm(true)
  }

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((item) => item.id !== id)
    setStudents(updatedStudents)

    if (selectedStudent && selectedStudent.id === id) {
      setSelectedStudent(null)
      setShowForm(false)
    }
  }

  const handleCancel = () => {
    setSelectedStudent(null)
    setShowForm(false)
  }

  return (
    <div className="students-page">
      <div className="students-header">
        <div>
          <h1>Student Records</h1>
          <p className="students-intro">Add and manage student details.</p>
        </div>
        {!showForm && (
          <button
            type="button"
            className="add-student-btn"
            onClick={() => setShowForm(true)}
          >
            + Add Student
          </button>
        )}
      </div>

      {showForm && (
        <Studentform
          student={selectedStudent}
          onSave={handleSaveStudent}
          onCancel={handleCancel}
        />
      )}

      <div className="students-list">
        <div className="students-list-header">
          <h2>All Students</h2>
          <span className="badge">{students.length}</span>
        </div>

        {students.length === 0 ? (
          <p className="students-empty">
            No students found. Click &quot;+ Add Student&quot; to add one.
          </p>
        ) : (
          <div className="student-cards">
            {students.map((student) => (
              <Studentdetails
                key={student.id}
                student={student}
                onEdit={handleEditStudent}
                onDelete={handleDeleteStudent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Students
