import {noticias} from '../../../../data/datos'

export async function generateMetadata({params}) {
  const noticiaMetadata = noticias.find(noticia => noticia.title === decodeURIComponent(params.title));

  return {
    title: `${noticiaMetadata.title} | News`,
    description: `${noticiaMetadata.description}`,
    alternates: {
      canonical: `${noticiaMetadata.url}`
    },
    openGraph:{
      title: `${noticiaMetadata.title}`,
      description: `${noticiaMetadata.description}`,
      url: `${noticiaMetadata.url}`,
      images: [{url: noticiaMetadata.image_url, width:1200, height:600}],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${noticiaMetadata.title}`,
      description: `${noticiaMetadata.description}`,
      images: [noticiaMetadata.image_url]
    }
  }

  
}