import React from "react";

const Schedule = ({ schedule }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="border p-2">Horaire</th>
            <th className="border p-2">Matière</th>
            <th className="border p-2">Professeur</th>
            <th className="border p-2">Salle</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(schedule).map(([day, lessons]) => (
            <React.Fragment key={day}>
              <tr>
                <td
                  colSpan="4"
                  className="border p-2 bg-gray-100 font-semibold"
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </td>
              </tr>
              {lessons.map((lesson, index) => (
                <tr key={index}>
                  <td className="border p-2">{lesson.time}</td>
                  <td className="border p-2">{lesson.subject}</td>
                  <td className="border p-2">{lesson.teacher}</td>
                  <td className="border p-2">{lesson.room}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule