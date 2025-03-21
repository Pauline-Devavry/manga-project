"use client";

import React from "react";
import { motion } from "framer-motion";
import AllMangaList from "@/components/AllMangaList";

const MangaPage = () => {
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
        <motion.h1
          className="text-3xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          Manga<span className="text-yellow-400">Collec'</span>
        </motion.h1>
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
              <a href="#explore" className="font-medium">
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

      {/* Hero Section plus compact pour la page manga */}
      <section className="relative py-12 px-6 overflow-hidden">
        {/* Fond avec effet manga */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-900 opacity-80 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        />

        {/* Motif en arrière-plan */}
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
              Tous les <span className="text-yellow-400">Mangas</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-200 max-w-2xl"
              variants={fadeIn}
            >
              Découvrez notre catalogue complet et trouvez votre prochaine série préférée
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Liste des mangas */}
      <motion.section 
        className="py-12 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Simple conteneur pour ton composant, sans modifier son style interne */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <AllMangaList />
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

export default MangaPage;
