'use client'
import React from 'react'
import useGetRamdonNews from '@/hooks/useGetRandomNews'
import CardNews from '@/components/cards/NewsCard'


export default function NewsHome() {
    const { news } = useGetRamdonNews(6)

    return (
        <div className='grid gap-6 grid-col-1 md:grid-cols-2 mb-6'>
            {news.map((newsItem) => (
                <CardNews key={newsItem.id} news={newsItem} />
            ))}
        </div>
        
    )
}
