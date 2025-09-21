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

const useGetNews = () => { 

    const [news, setNews] = useState<News[]>([])


    useEffect(() => {
        setNews(newsData)
    }, [])

    return {
        news
    }
}

export default useGetNews;
