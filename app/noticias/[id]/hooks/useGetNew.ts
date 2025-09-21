'use client'

import { useEffect, useState } from 'react'

import { News } from '../../hooks/useGetNews'

import newsData from '@/data/news.json'


const useGetNew = (id: number) => { 

    const [news, setNews] = useState<News> ()

    useEffect(() => {
        setNews(newsData.find(newt => newt.id == id))
    }, [])

    return {
        news
    }
}

export default useGetNew;