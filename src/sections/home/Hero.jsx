import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  UserCheck,
  Trophy,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-hero bg-cover bg-center flex flex-col items-center justify-center px-4 py-16">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Lycée Classique et Moderne de Maroua
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <span className="flex items-center text-lg text-white bg-blue-600 bg-opacity-75 px-4 py-2 rounded-full">
            <GraduationCap className="mr-2" size={24} />
            Discipline
          </span>
          <span className="flex items-center text-lg text-white bg-green-600 bg-opacity-75 px-4 py-2 rounded-full">
            <BookOpen className="mr-2" size={24} />
            Travail
          </span>
          <span className="flex items-center text-lg text-white bg-yellow-600 bg-opacity-75 px-4 py-2 rounded-full">
            <Award className="mr-2" size={24} />
            Succès
          </span>
        </div>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
          L'excellence scolaire au centre de nos préoccupations depuis{" "}
          <span className="font-extrabold scale-105">1975</span>
        </p>
        <Link
          to="/dashboard/parents"
          className="inline-block px-6 py-3 rounded-md bg-blue-700 text-white text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg mb-12"
        >
          Espace Parent
        </Link>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <Trophy className="text-yellow-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Résultats des Examens
            </h3>
            <p className="text-3xl font-bold text-blue-600">92%</p>
            <p className="text-gray-600">Taux de réussite</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <UserCheck className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Corps Enseignant</h3>
            <p className="text-3xl font-bold text-blue-600">120</p>
            <p className="text-gray-600">Professeurs qualifiés</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <Users className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Effectif Étudiant</h3>
            <p className="text-3xl font-bold text-blue-600">4000+</p>
            <p className="text-gray-600">Élèves inscrits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
