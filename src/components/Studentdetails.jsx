function Studentdetails({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
      </div>
      <div className="student-card-actions">
        <button
          type="button"
          className="btn-edit"
          onClick={() => onEdit(student)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Studentdetails
