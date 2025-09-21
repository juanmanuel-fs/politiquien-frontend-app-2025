import { Button } from "@/components/ui/button";
import NewsHome from "./components/NewsHome";
import Link from "next/link";
import FontPageHome from "./components/FontPageHome";

export default function Home() {
    return (
        <div>
            <FontPageHome />
            <div className="flex flex-col gap-4 mt-8">
                <h2 className="text-xl font-bold">Últimas Noticias </h2>
                <div>
                    <NewsHome/>
                </div>
                <div className="text-center">
                    <Button asChild>
                        <Link href="/noticias">Ver Más Noticias</Link>
                    </Button>
                </div>
            </div>
        </div>

    );
}
