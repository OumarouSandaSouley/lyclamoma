import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Book, Users, ImageIcon, CheckCircle } from "lucide-react";

const SchoolOverview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    { name: "Général", icon: Book },
    { name: "Vie au lycée", icon: Users },
    { name: "Le lycée en images", icon: ImageIcon },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Découvrez notre établissement
        </h2>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                   ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                   ${
                     selected
                       ? "bg-white shadow"
                       : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                   }`
                }
              >
                <div className="flex items-center justify-center">
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Notre mission</h3>
                  <p className="text-gray-600 mb-4">
                    Le Lycée Classique et Moderne de Maroua Le Lycée Classique est un établissement d'enseignement secondaire génerale francophone situé dans la ville de Maroua. 
                    Nous nous engageons à fournir une éducation de
                    haute qualité, en préparant les élèves à exceller
                    académiquement et à devenir des citoyens responsables et
                    engagés dans un monde en constante évolution.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Nos valeurs</h4>
                  <ul className="list-none space-y-2">
                    {[
                      "Excellence",
                      "Intégrité",
                      "Respect",
                      "Innovation",
                      "Collaboration",
                    ].map((value) => (
                      <li key={value} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src="/images/hero.png"
                    alt="Vue du lycée"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <div className="mt-4 bg-white p-4 rounded-lg shadow">
                    <h4 className="text-xl font-semibold mb-2">
                      Chiffres clés
                    </h4>
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="text-center">
                        <span className="block text-3xl font-bold text-blue-600">
                          2500+
                        </span>
                        <span className="text-gray-600">Élèves</span>
                      </li>
                      <li className="text-center">
                        <span className="block text-3xl font-bold text-blue-600">
                          120
                        </span>
                        <span className="text-gray-600">Enseignants</span>
                      </li>
                      <li className="text-center">
                        <span className="block text-3xl font-bold text-blue-600">
                          95%
                        </span>
                        <span className="text-gray-600">Taux de réussite</span>
                      </li>
                      <li className="text-center">
                        <span className="block text-3xl font-bold text-blue-600">
                          50+
                        </span>
                        <span className="text-gray-600">
                          Années d'excellence
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Vie scolaire</h3>
                  <p className="text-gray-600 mb-4">
                    Au Lycée Classique et Moderne de Maroua, nous croyons en
                    l'importance d'une vie scolaire riche et épanouissante. Nos
                    élèves bénéficient d'un environnement stimulant qui favorise
                    leur développement académique, social et personnel.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">
                    Activités parascolaires
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Clubs scientifiques et littéraires</li>
                    <li>Équipes sportives compétitives</li>
                    <li>Ateliers d'arts et de musique</li>
                    <li>Débats et Model UN</li>
                    <li>Actions communautaires et bénévolat</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/images/hero.png"
                    alt="Élèves en activité"
                    className="rounded-lg shadow-md w-full h-auto mb-4"
                  />
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-xl font-semibold mb-2">
                      Installations
                    </h4>
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>Laboratoires modernes</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>Bibliothèque bien équipée</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>Terrains de sport</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>Salle informatique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Le lycée en images
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      src: "/images/hero.png",
                      alt: "Façade du lycée",
                    },
                    {
                      src: "/images/hero.png",
                      alt: "Salle de classe",
                    },
                    {
                      src: "/images/hero.png",
                      alt: "Laboratoire de sciences",
                    },
                    {
                      src: "/images/hero.png",
                      alt: "Bibliothèque",
                    },
                    {
                      src: "/images/hero.png",
                      alt: "Terrain de sport",
                    },
                    {
                      src: "/images/hero.png",
                      alt: "Cour de récréation",
                    },
                  ].map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 ease-in-out group-hover:opacity-75"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-600">
                  Une image vaux mille maux. Admirez l'excellence.
                </p>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default SchoolOverview;
