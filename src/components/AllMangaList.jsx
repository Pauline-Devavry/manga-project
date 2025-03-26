"use client";

import React, { useState, useEffect } from "react";
import { getAllMangas } from "@/app/api/jikan";

const AllMangaList = () => {
  const [mangas, setMangas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Assure-toi que c'est correct

  const fetchMangas = async (page) => {
    try {
      const data = await getAllMangas(page);
      setMangas(data);
    } catch (error) {
      console.error("Erreur de récupération des mangas:", error);
    }
  };

  useEffect(() => {
    fetchMangas(currentPage);
  }, [currentPage]);

  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-4">
        {mangas.length > 0 ? (
          mangas.map((manga) => (
            <div key={manga.mal_id} className="w-[150px] text-center">
              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                className="w-[140px] h-auto mx-auto"
              />
              <p className="text-sm font-medium mt-2">{manga.title}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Chargement...</p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage <= 1}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </section>
  );
};

export default AllMangaList;

