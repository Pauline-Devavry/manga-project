"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import TopMangaList from "@/components/TopMangaList";
import AllMangaList from "@/components/AllMangaList";

export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const popularMangas = [
    "One Piece",
    "Demon Slayer",
    "Jujutsu Kaisen",
    "My Hero Academia",
  ];

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
              <a href="/mangas" className="font-medium">
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

      {/* Hero Section avec style manga */}
      <section className="relative py-24 px-6 overflow-hidden">
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
              className="text-5xl font-bold leading-tight"
              variants={fadeIn}
            >
              Suivez vos <span className="text-yellow-400">manga</span> avec
              style
            </motion.h2>
            <motion.p
              className="mt-6 text-xl text-gray-200 max-w-2xl"
              variants={fadeIn}
            >
              Gérez votre collection, suivez votre progression et découvrez de
              nouvelles séries comme un véritable otaku.
            </motion.p>
            <motion.button
              className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900 font-bold rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(253, 224, 71, 0.7)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              COMMENCER GRATUITEMENT
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section Les mangas du moment */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <motion.h3
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Les mangas du moment
        </motion.h3>
        <TopMangaList />
        {/* Ici tu peux afficher les mangas récupérés depuis l'API */}
      </section>

      {/* Section Votre bibliothèque personnelle */}
      <motion.section
        className="py-16 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Votre bibliothèque{" "}
              <span className="text-pink-400">personnelle</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Gardez le contrôle de votre collection avec une interface inspirée
              des meilleurs designs japonais. Plus de recherches interminables
              pour savoir quels tomes vous possédez déjà.
            </p>
            <ul className="space-y-3">
              {popularMangas.map((manga, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-yellow-400">★</span> {manga}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 bg-gray-800 border-2 border-pink-500 rounded-lg p-6 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Mockup d'interface */}
            <div className="space-y-3">
              <div className="h-6 w-24 bg-gray-700 rounded"></div>
              <div className="flex gap-3">
                <div className="h-32 w-24 bg-gradient-to-br from-blue-700 to-purple-700 rounded"></div>
                <div className="h-32 w-24 bg-gradient-to-br from-red-700 to-yellow-700 rounded"></div>
                <div className="h-32 w-24 bg-gradient-to-br from-green-700 to-teal-700 rounded"></div>
              </div>
              <div className="h-4 w-full bg-gray-700 rounded mt-4"></div>
              <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-8 w-32 bg-pink-700 rounded-full mt-2"></div>
            </div>
          </motion.div>
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
}
