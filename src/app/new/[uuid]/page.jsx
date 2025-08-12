'use client';
import { useState } from "react";
import { useParams } from "next/navigation"
import {noticias} from '../../../../data/datos'
import Image from "next/image";
// import Comments from "../../../../components/Comments";

import dynamic from "next/dynamic";

const Comments = dynamic(() => import("../../../../components/Comments"),  {
  loading: () => <p>Cargando...</p>,
})

const PageNewId = () => {
    const { uuid } = useParams();

    const [mostrarComentarios, setMostrarComentarios] = useState(false);

    const noticia = noticias.find(noticia => noticia.uuid === uuid);

    if (!noticia) return <p>No se encontró la noticia.</p>


    return (
       
            <div className="max-w-4xl mx-auto p-10 bg-gray-100 rounded-lg shadow-md mt-6">
                <h1 className="text-3xl font-bold">{noticia.title}</h1>
                <p className="'mt-4 text-md text-gray-700">Publicado: {new Date(noticia.published_at).toLocaleDateString()}</p>
                <Image src={noticia.image_url} alt={noticia.url} width={700} height={500} />
                <div className="text-gray-700 text-justify max-w-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum adipisci deleniti, in repellat, quisquam, at quasi nulla ratione vitae mollitia atque quae ipsum distinctio dicta optio amet aperiam nisi?
                    Repellendus accusantium consequatur voluptatibus molestias asperiores dolorem, fugiat ratione et voluptate tempore temporibus deleniti, minima consequuntur autem ea ex adipisci illo maiores sapiente aliquam doloremque. Impedit ab quo ipsam corrupti.
                    Quo architecto placeat voluptas sed ullam! Reiciendis veritatis nam quo eum ea quisquam eveniet eligendi, ex cupiditate? Repudiandae inventore laboriosam distinctio velit magni suscipit, quos, reprehenderit, at neque quidem modi?</div>

                    <div className="mt-3">
                         <button onClick={() => setMostrarComentarios(!mostrarComentarios)} className="my-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800">
                            {mostrarComentarios ? "Ocultar comentarios" : "Mostrar comentarios"}
                         </button>

                         {mostrarComentarios && <Comments />}
                    </div>
            </div>
           

    )
}

export default PageNewId
