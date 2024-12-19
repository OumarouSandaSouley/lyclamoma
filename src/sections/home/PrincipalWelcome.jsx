import React from "react";
import { Quote, Mail } from "lucide-react";

const PrincipalWelcome = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mot de Bienvenue du Proviseur
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              src="/images/principal.png"
              alt="M. Abdoulbagui Hayatou, Proviseur"
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3">
            <blockquote className="relative">
              <Quote className="absolute top-0 left-0 text-blue-500 w-12 h-12 -mt-4 -ml-4 opacity-25" />
              <p className="text-lg md:text-xl text-gray-700 mb-4 pl-8">
                Chers élèves, parents et membres de la communauté,
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4 pl-8">
                C'est avec un immense plaisir que je vous souhaite la bienvenue
                au Lycée Classique et Moderne de Maroua. Notre établissement est
                dédié à l'excellence académique et au développement personnel de
                chaque élève.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4 pl-8">
                Nous nous engageons à fournir un environnement d'apprentissage
                stimulant et bienveillant, où chaque étudiant peut s'épanouir et
                atteindre son plein potentiel. Notre équipe pédagogique dévouée
                travaille sans relâche pour inspirer la curiosité intellectuelle
                et encourager la réussite.
              </p>
              <p className="text-lg md:text-xl text-gray-700 pl-8">
                Ensemble, construisons un avenir brillant pour nos élèves et
                notre communauté.
              </p>
            </blockquote>
            <div className="mt-6 pl-8">
              <p className="text-xl font-semibold text-blue-700">
                M. Abdoulbagui Hayatou
              </p>
              <p className="text-gray-600">
                Proviseur, Lycée Classique et Moderne de Maroua
              </p>
              <a
                href="mailto:proviseur@lycee-maroua.cm"
                className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
              >
                <Mail className="w-5 h-5 mr-2" />
                proviseur@lycee-maroua.cm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
