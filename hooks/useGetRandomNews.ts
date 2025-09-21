'use client'
import { useEffect, useState } from "react";

import newsData from '@/data/news.json'

export interface News {
    id: number
    title: string
    slug: string
    content: string
    image: string
    createdAt: string
    state: string
    newspaper: {
        id: number
        name: string
        slug: string
        description: string
        website: string
        logo: string
        status: number
    },
    categories: string[]
}

const useGetRamdonNews = (size: number) => { 

    const [news, setNews] = useState<News[]>([])


    useEffect(() => {
        const ramdonNews = newsData.sort(() => Math.random() - 0.5).slice(0, size)
        setNews(ramdonNews)
    }, [])

    return {
        news
    }
}

export default useGetRamdonNews;
