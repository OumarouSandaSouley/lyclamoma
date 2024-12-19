const StudentInfo = ({ student }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold mb-2">Informations personnelles</h3>
        <ul className="space-y-2">
          <li>Classe: {student.class}</li>
          <li>
            Date de naissance:{" "}
            {new Date(student.birthDate).toLocaleDateString()}
          </li>
          <li>Genre: {student.gender === "M" ? "Masculin" : "Féminin"}</li>
          <li>Parent: {student.parentName}</li>
          <li>Salle de classe: {student.classroom}</li>
        </ul>
      </div>
    </div>
  );
};
export default StudentInfo