import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contactez-nous
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nos coordonnées</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                <span>+237 123 456 789</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                <a
                  href="mailto:contact@lycee-maroua.cm"
                  className="hover:underline"
                >
                  contact@lycee-maroua.cm
                </a>
              </p>
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-600 mt-1" />
                <span>BP 89, Maroua, Cameroun</span>
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-2">Heures d'ouverture</h4>
              <p>Lundi - Vendredi: 7h30 - 15h00</p>
              <p>Samedi: 8h00 - 12h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
