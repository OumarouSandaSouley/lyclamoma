const TeacherList = ({ teachers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {teachers.map((teacher, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <h3 className="font-semibold text-lg">{teacher.name}</h3>
          <p className="text-gray-600">{teacher.subject}</p>
          <div className="mt-2">
            <p>Email: {teacher.email}</p>
            <p>Téléphone: {teacher.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherList