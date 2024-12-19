import React, { useState } from "react";
import { students, grades, teachers, schedules } from "../data/mockData";
import StudentSearch from "../components/dashboard/StudentSearch";
import StudentInfo from "../components/dashboard/StudentInfo";
import GradeViewer from "../components/dashboard/GradeViewer";
import TeacherList from "../components/dashboard/TeacherList";
import Schedule from "../components/dashboard/Schedule";
import { Menu, X } from "lucide-react";
import {
  ClipboardList,
  GraduationCap,
  Users,
  Calendar,
  Search,
  UserCircle,
} from "lucide-react";

const Sidebar = ({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const tabs = [
    { id: "info", label: "Info", Icon: ClipboardList },
    { id: "grades", label: "Notes et Bulletin", Icon: GraduationCap },
    { id: "teachers", label: "Enseignants", Icon: Users },
    { id: "schedule", label: "Emploi de temps", Icon: Calendar },
  ];

  const sidebarContent = (
    <>
      <h2 className="text-2xl font-bold py-4 px-6 border-b border-blue-500 flex items-center gap-3">
        <UserCircle className="w-8 h-8" />
        Espace Parent
      </h2>
      <ul className="flex-1">
        {tabs.map((tab) => {
          const Icon = tab.Icon;
          return (
            <li
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileMenuOpen(false);
              }}
              className={`cursor-pointer flex items-center gap-4 px-6 py-3 hover:bg-blue-500 transition-all ${
                activeTab === tab.id ? "bg-blue-600" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-blue-700 text-white rounded-md"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 h-screen bg-blue-700 text-white flex-col fixed">
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 bg-blue-700 text-white z-40 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out`}
      >
        {sidebarContent}
      </div>
    </>
  );
};

const ParentDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (matricule) => {
    const student = students.find((s) => s.matricule === matricule);
    setSelectedStudent(student || null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex-1 lg:ml-64 p-4 lg:p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 mt-12 lg:mt-0">
            Espace Parent
          </h1>

          <StudentSearch onSearch={handleSearch} />

          {selectedStudent && (
            <div className="mt-6 lg:mt-8 bg-white rounded-lg shadow-md p-4 lg:p-6">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={selectedStudent.photo}
                    alt={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full">
                    <UserCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {selectedStudent.firstName} {selectedStudent.lastName}
                  </h2>
                  <p className="text-gray-600">
                    Matricule: {selectedStudent.matricule}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                {activeTab === "info" && (
                  <StudentInfo student={selectedStudent} />
                )}
                {activeTab === "grades" && (
                  <GradeViewer
                    grades={grades[selectedStudent.matricule]}
                    studentName={selectedStudent.firstName}
                    student={selectedStudent}
                  />
                )}
                {activeTab === "teachers" && (
                  <TeacherList teachers={teachers[selectedStudent.matricule]} />
                )}
                {activeTab === "schedule" && (
                  <Schedule schedule={schedules[selectedStudent.matricule]} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
