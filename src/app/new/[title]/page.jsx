

import ClientNewId from '../../../../components/PageNewId';
import {noticias} from '../../../../data/datos'

export async function generateMetadata({params}) {
  const noticiaMetadata = noticias.find(noticia => noticia.title === decodeURIComponent(params.title));

  return {
    title: `${noticiaMetadata.title} | News`,
    description: `${noticiaMetadata.description}`,
    alternates: {
      canonical: `${noticiaMetadata.url}`
    }
  }

  
}

const PageNewId = ({params}) => {
   return <ClientNewId title={params.title} />
}

export default PageNewId
