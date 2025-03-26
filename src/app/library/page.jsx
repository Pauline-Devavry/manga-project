"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LibraryPage = () => {
  const [library, setLibrary] = useState([]);

  // Charger la bibliothèque depuis LocalStorage au chargement de la page
  useEffect(() => {
    const storedLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    setLibrary(storedLibrary);
  }, []);

  // Fonction pour supprimer un manga de la bibliothèque
  const removeFromLibrary = (id) => {
    const updatedLibrary = library.filter((manga) => manga.mal_id !== id);
    setLibrary(updatedLibrary);
    localStorage.setItem("myLibrary", JSON.stringify(updatedLibrary));
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header avec style manga moderne */}
      <motion.header
        className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-800 to-black shadow-lg"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <a href="/" className="font-medium">
          <motion.h1
            className="text-3xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            Manga<span className="text-yellow-400">Collec'</span>
          </motion.h1>
        </a>
        <nav>
          <motion.ul className="flex space-x-6" variants={staggerChildren}>
            <motion.li
              whileHover={{ scale: 1.1, color: "#FFDA47" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/mangas" className="font-medium text-yellow-400">
                Tous les mangas
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#FFDA47" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/library" className="font-medium">
                Ma collection
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#FFDA47" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#about" className="font-medium">
                À propos
              </a>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-12 px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-900 opacity-80 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl font-bold leading-tight"
              variants={fadeIn}
            >
              Ma <span className="text-yellow-400">Bibliothèque</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-200 max-w-2xl"
              variants={fadeIn}
            >
              Découvrez vos mangas préférés dans votre collection personnelle
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Liste des mangas dans la bibliothèque */}
      <motion.section
        className="py-12 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div className="flex flex-wrap justify-center gap-4">
              {library.length > 0 ? (
                library.map((manga) => (
                  <div
                    key={manga.mal_id}
                    className="bg-white shadow-md rounded-lg p-2 flex flex-col items-center w-40 h-72"
                  >
                    <img
                      src={manga.images.jpg.image_url}
                      alt={manga.title}
                      className="w-32 h-48 object-cover rounded-md"
                    />
                    <p className="text-sm text-black text-center font-medium mt-2 w-full break-words">
                      {manga.title}
                    </p>
                    <button
                      onClick={() => removeFromLibrary(manga.mal_id)}
                      className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">Aucun manga dans la bibliothèque</p>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer Section avec le texte et images */}
      <footer className="py-8 bg-gray-800 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; 2025 MangaTracker. Tous droits réservés.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <img
              src="images/facebook-icon.png"
              alt="Facebook"
              className="h-6"
            />
            <img src="images/twitter-icon.png" alt="Twitter" className="h-6" />
            <img
              src="images/instagram-icon.png"
              alt="Instagram"
              className="h-6"
            />
          </div>
          <p className="mt-4 text-xs">
            Conditions d'utilisation | Politique de confidentialité
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LibraryPage;

