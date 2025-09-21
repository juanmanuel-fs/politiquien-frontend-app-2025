'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import useGetNew from "../[id]/hooks/useGetNew"

type ContentNewsProps = {
  params: string 
}


function ContentNews({ params }: ContentNewsProps) {
  const { news } = useGetNew(Number(params))

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const random = Math.floor(Math.random() * 20)
    e.currentTarget.src = `/image_news/image_news_${random}.jpg`
  }

  return (
    <div className="flex flex-col gap-2">
      <div className='relative aspect-h-16 aspect-w-16 md:aspect-h-9 md:aspect-w-16 -mx-4 -mt-4 lg:m-0 lg:rounded-lg bg-fill-quaternary'>
        <img className="w-full shrink-0 lg:rounded-lg object-cover object-center" src={news?.image} onError={handleError}/>
        <div className='absolute top-0 left-0 right-0 bottom-0 p-2 md:p-6 lg:rounded-lg h-full w-full bg-gradient-to-b from-transparent to-black-50 group-hover:to-black-75 to-100%'>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-row mb-auto'>
              <div className='flex flex-row gap-2 items-center w-full'>
                <img className=' h-6 w-auto' src={news?.newspaper.logo} alt="" onError={e => e.currentTarget.src = `/logo_newspaper.jpg`}/>
                <div className='flex flex-col truncate gap-0'>
                  <span className='text-xs uppercase font-bold font-montserrat text-black-75 truncate'>{ news?.newspaper.name }</span>
                  <span className='text-xs uppercase font-bold font-montserrat text-primary-88 truncate'>{ news?.state }</span>
                </div>
              </div>
              <div className='flex-none ml-auto'>
                <Button asChild>
                  <a href={news?.newspaper.website} target='_blank'>Ver medio</a>
                </Button>
              </div>
            </div>
            <div className='mt-auto'>
              <p className='line-clamp-3 font-semibold text-shadow-2xs text-shadow-gray-700 text-gray-200'>{ news?.title }</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex mb-1 flex-wrap gap-1'>
          <Badge variant="outline">Category</Badge>
          <Badge variant="outline">Category</Badge>
        </div>
        <div className='flex-none'>
          <span className='text-xs font-normal text-muted-foreground'>{ news?.createdAt.slice(0,10) }</span>
        </div>
      </div>
      <div className='mt-2'>
        <h6 className='text-headline font-semibold capitalize mb-2'>{ news?.title}</h6>
        <p className='mb-2'>
          { news?.content}
        </p>
        <p className='mb-2'>
        Ut vel hac condimentum id cras. Quis viverra aliquet eget nisl amet est sed eget. Pellentesque nunc sit est sagittis, egestas morbi metus, nunc. Imperdiet lobortis massa quam venenatis ornare nibh ultricies. Porta massa eu sed proin mattis est, faucibus lorem. Id congue vulputate lorem elit at dolor nascetur feugiat. Id rhoncus ultrices dis vitae, at nec, auctor facilisi hac. Feugiat odio enim aliquam facilisi eleifend id egestas varius. Amet felis id sit vitae neque libero arcu. Quisque congue massa nec nam tristique quam.
        </p>
      </div>
      <div>
        <div className='flex flex-wrap gap-1'>
          <Badge variant="outline">Etiqueta 1</Badge>
          <Badge variant="outline">Etiqueta 2</Badge>
        </div>
      </div>
      <div className='flex mt-2'>
        <Button asChild size="sm">
          <a href={news?.newspaper.website} target='_blank'>Ver medio informativo</a>
        </Button>
      </div>
    </div>
  )
}

export default ContentNews