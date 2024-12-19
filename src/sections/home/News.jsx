import React from "react";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Cérémonie de remise des diplômes 2023",
    date: "2023-07-15",
    excerpt:
      "Rejoignez-nous pour célébrer la réussite de nos diplômés lors de la cérémonie annuelle de remise des diplômes.",
    image: "/images/hero.png",
  },
  {
    id: 2,
    title: "Nouveau programme d'échange international",
    date: "2023-06-30",
    excerpt:
      "Le lycée lance un nouveau programme d'échange avec des établissements partenaires en Europe et en Amérique du Nord.",
    image: "/images/hero.png",
  },
  {
    id: 3,
    title: "Succès au concours national de mathématiques",
    date: "2023-06-22",
    excerpt:
      "Nos élèves ont excellé au concours national de mathématiques, remportant plusieurs prix dans différentes catégories.",
    image: "/images/hero.png",
  },
];

const NewsCard = ({ title, date, excerpt, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-1" />
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </div>
  </div>
);

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Actualités du Lycée
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/actualites"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Toutes les actualités
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
