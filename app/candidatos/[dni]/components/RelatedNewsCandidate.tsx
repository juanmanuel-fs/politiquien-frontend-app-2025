import RecommendedNewsCard from '@/components/cards/RecommendedNewsCard'

function RelatedNewsCandidate() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-title4'>NOTICIAS RELACIONADAS</h2>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
    </div>
  )
}

export default RelatedNewsCandidate