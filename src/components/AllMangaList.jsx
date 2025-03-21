"use client";

import React, { useState, useEffect } from "react";
import { getAllMangas } from "@/app/api/jikan";

const AllMangaList = () => {
  const [mangas, setMangas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMangas = async (page) => {
    try {
      const data = await getAllMangas(page);  // Utilisation de ta fonction axios
      setMangas(data);  // Remplacer les mangas existant par ceux de la nouvelle page
      setTotalPages(10);  // Assure-toi que ton API retourne bien cette info (ou ajuste selon la réponse)
    } catch (error) {
      console.error("Erreur de récupération des mangas:", error);
    }
  };

  useEffect(() => {
    fetchMangas(currentPage);  // Récupère les mangas de la page actuelle
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
  {mangas.length > 0 ? (
    <>
      {console.log("Liste des mal_id:", mangas.map((m) => m.mal_id))}
      {mangas.map((manga) => (
        <div
          key={manga.mal_id}
          style={{ width: "150px", textAlign: "center" }}
        >
          <img
            src={manga.images.jpg.image_url}
            alt={manga.title}
            width="100"
          />
          <p>{manga.title}</p>
        </div>
      ))}
    </>
  ) : (
    <p>Chargement...</p>
  )}
</div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage <= 1}>
          Précédent
        </button>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
          Suivant
        </button>
      </div>
    </section>
  );
};

export default AllMangaList;
