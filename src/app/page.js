

import Link from 'next/link';
import {noticias} from '../../data/datos';
import Image from 'next/image';

export default function Home() {


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className='text-4xl text-center font-bold'>Noticias</h1>

          {/* Listado de Noticias */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              noticias.map((noticia) => (
                <article key={noticia.uuid} className='bg-gray-100 rounded-lg shadow-md text-center'>
                  <Image src={noticia.image_url} alt={noticia.url} width={300} height={300} />
                  <h2 className="text-3xl font-bold">{noticias.title}</h2>
                  <h3 className="text-2xl mb-3">{noticias.subtitle}</h3>
                  <p>{noticia.description}</p>
                  
                 <div className='flex flex-row justify-around'>
                   <div className='mt-4 text-sm text-gray-700'>
                    <p>{new Date(noticia.published_at).toLocaleDateString()}</p>
                    <p className='ml-3'>📰{noticia.source}</p>
                  </div>
                  <Link href={`/new/${noticia.uuid}`} className='my-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800'>Leer Más</Link>
                 </div>
                </article>
              ))
            }
          </div>
      </main>
      
    </div>
  );
}
