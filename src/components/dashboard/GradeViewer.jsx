import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const GradeViewer = ({ grades, studentName }) => {
  const [selectedTrimester, setSelectedTrimester] = useState("trimester1");

  const calculateAverage = (grades) => {
    let totalPoints = 0;
    let totalCoef = 0;

    grades.forEach((grade) => {
      totalPoints += grade.grade * grade.coefficient;
      totalCoef += grade.coefficient;
    });

    return (totalPoints / totalCoef).toFixed(2);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Bulletin de notes", 20, 10);

    autoTable(doc, {
      head: [["Matière", "Note", "Coef", "Points", "Professeur"]],
      body: grades[selectedTrimester].map((grade) => [
        grade.subject,
        grade.grade,
        grade.coefficient,
        (grade.grade * grade.coefficient).toFixed(2),
        grade.teacher,
      ]),
      foot: [
        [
          "",
          "",
          "",
          `Moyenne: ${calculateAverage(grades[selectedTrimester])}`,
          "",
        ],
      ],
    });

    doc.save(`Bulletin_de_${studentName}.pdf`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex justify-between items-center">
        <select
          value={selectedTrimester}
          onChange={(e) => setSelectedTrimester(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="trimester1">1er Trimestre</option>
          <option value="trimester2">2ème Trimestre</option>
        </select>
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Télécharger PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-left">Matière</th>
              <th className="border p-2 text-left">Note</th>
              <th className="border p-2 text-left">Coef</th>
              <th className="border p-2 text-left">Points</th>
              <th className="border p-2 text-left">Professeur</th>
            </tr>
          </thead>
          <tbody>
            {grades[selectedTrimester].map((grade, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">{grade.subject}</td>
                <td className="border p-2">{grade.grade}</td>
                <td className="border p-2">{grade.coefficient}</td>
                <td className="border p-2">
                  {(grade.grade * grade.coefficient).toFixed(2)}
                </td>
                <td className="border p-2">{grade.teacher}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan="4" className="border p-2 text-right">
                Moyenne: {calculateAverage(grades[selectedTrimester])}
              </td>
              <td className="border p-2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default GradeViewer;
