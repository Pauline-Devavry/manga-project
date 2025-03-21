"use client"; // Obligatoire avec Next.js pour le useEffect

import React, { useEffect, useState } from "react";

const TopMangaList = () => {
  const [TopMangas, setTopMangas] = useState([]);

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/manga");
        const data = await response.json();
        setTopMangas(data.data); // Jikan stocke les mangas dans `data.data`
      } catch (error) {
        console.error("Erreur lors de la récupération des mangas :", error);
      }
    };

    fetchMangas();
  }, []);

  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {TopMangas.length > 0 ? (
          TopMangas.slice(0, 10).map((manga) => (
            <div key={manga.mal_id} style={{ width: "150px", textAlign: "center" }}>
              <img src={manga.images.jpg.image_url} alt={manga.title} width="100" />
              <p>{manga.title}</p>
            </div>
          ))
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </section>
  );
};

export default TopMangaList;
