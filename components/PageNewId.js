"use client";

import { useState } from "react";
import { noticias } from "../data/datos";
import Image from "next/image";
import dynamic from "next/dynamic";

const Comments = dynamic(() => import("../components/Comments"), {
  loading: () => <p>Cargando...</p>,
});

export default function ClientNewId({ title }) {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const titleDecode = decodeURIComponent(title);

  const noticia = noticias.find((n) => n.title === titleDecode);

  if (!noticia) return <p>No se encontró la noticia.</p>;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-gray-100 rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-bold">{noticia.title}</h1>
      <p className="mt-4 text-md text-gray-700">
        Publicado: {new Date(noticia.published_at).toLocaleDateString()}
      </p>
      <Image
        src={noticia.image_url}
        alt={noticia.url}
        width={700}
        height={500}
      />
      <div className="text-gray-700 text-justify max-w-none">
        {noticia.description}
      </div>

      <div className="mt-3">
        <button
          onClick={() => setMostrarComentarios(!mostrarComentarios)}
          className="my-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          {mostrarComentarios ? "Ocultar comentarios" : "Mostrar comentarios"}
        </button>

        {mostrarComentarios && <Comments />}
      </div>
    </div>
  );
}