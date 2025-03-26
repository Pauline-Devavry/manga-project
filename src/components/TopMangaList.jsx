"use client"; // Obligatoire avec Next.js pour le useEffect

import React, { useEffect, useState } from "react";

const TopMangaList = () => {
  const [topMangas, setTopMangas] = useState([]);
  const [library, setLibrary] = useState([]);

  // Charger la bibliothèque depuis le LocalStorage au chargement de la page
  useEffect(() => {
    const storedLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    setLibrary(storedLibrary);
  }, []);

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/manga");
        const data = await response.json();
        setTopMangas(data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des mangas :", error);
      }
    };

    fetchMangas();
  }, []);

  // Ajouter un manga à la bibliothèque
  const addToLibrary = (manga) => {
    const updatedLibrary = [...library, manga];
    setLibrary(updatedLibrary);
    localStorage.setItem("myLibrary", JSON.stringify(updatedLibrary));
  };

  return (
    <section className="p-4">
      <div className="flex flex-wrap justify-center gap-6">
        {topMangas.length > 0 ? (
          topMangas.slice(0, 10).map((manga) => (
            <div
              key={manga.mal_id}
              className="bg-white shadow-md rounded-lg p-2 flex flex-col items-center w-36 h-64 transform hover:scale-105 transition"
            >
              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                className="w-32 h-48 object-cover rounded-md"
              />
              <p className="text-sm font-bold text-black text-center mt-2 w-full">
                {manga.title}
              </p>
              <button
                onClick={() => addToLibrary(manga)}
                className="mt-2 bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition"
              >
                Ajouter à ma bibliothèque
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Chargement...</p>
        )}
      </div>
    </section>
  );
};

export default TopMangaList;
