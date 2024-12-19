import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <p className="text-gray-400">
              Le Lycée Classique et Moderne de Maroua s'engage à fournir une
              éducation de qualité et à préparer les élèves pour un avenir
              brillant.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              123 Rue de l'Éducation
              <br />
              Maroua, Cameroun
              <br />
              <a href="tel:+237123456789" className="hover:text-white">
                +237 123 456 789
              </a>
              <br />
              <a
                href="mailto:contact@lycee-maroua.cm"
                className="hover:text-white"
              >
                contact@lycee-maroua.cm
              </a>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lycée Classique et Moderne de
            Maroua. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
