'use client'
import FeaturedNews from './components/FeaturedNews'
import FrontPageNews from './components/FrontPageNews'
import ListNews from './components/ListNews'
import useGetNews from './hooks/useGetNews'

function Page() {
  const { news } = useGetNews()
  
  const ramNews = (slice: number) => {
    return news.sort(() => Math.random() - 0.5).slice(0, slice)
  }
  return (
    <div className='flex flex-col gap-6'>
      <FrontPageNews news={ramNews(6)}/>
      <div className='flex flex-col md:flex-row gap-6'>
        <ListNews news={ramNews(8)} />
        <FeaturedNews news={ramNews(5)} />
      </div>
      {/* <PartnersNews/> */}
    </div>
  )
}

export default Page