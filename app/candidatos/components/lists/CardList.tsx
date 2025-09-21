import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { IconCircleCheckFilled, IconEye, IconLoader, IconShare } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Button } from '@/components/ui/button'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { BsFillFilePersonFill } from 'react-icons/bs'

interface Candidate {
  id: number,
  idOrganizacionPolitica: number,
  organizacionPolitica: string,
  numeroDocumento: string,
  nombreCompleto: string,
  cargo: Array<string>,
  numeroCandidato: number,
  postulaDepartamento: string | null
  postulaProvincia: string | null
  postulaDistrito: string | null
  rutaArchivo: string
  estado: string
  txGuidArchivoOrigen: string | null
}

type CardListProps = {
  className?: React.ComponentProps<"div">,
  data: Candidate []
}

export default function CardList({
  className,
  data
}: CardListProps) {
  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {
        data.length > 0 &&
        data.map((item, index) =>
        <Card className="overflow-hidden p-0" key={index}>
          <CardContent className="px-0 h-full flex flex-col sm:flex-row">
            <div className="bg-muted h-full sm:h-40 md:h-48 relative aspect-11/16">
              <img
                src={`https://declara.jne.gob.pe${item.rutaArchivo}`}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                  <Badge variant="default" className="text-black bg-white/30 backdrop-blur-md px-1.5">
                    {item.estado === "INSCRITO" && (
                      <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                    )}
                    {item.estado}
                  </Badge>
                </div>
            </div>
            <div className="h-full flex flex-col p-2">
              <div className="flex flex-col gap-1">
                <div className="">
                  <h5 className="text-sm md:text-base font-bold leading-tight line-clamp-2">{item.nombreCompleto.split("-")[0]}</h5>
                  <p className='text-sm text-muted-foreground'>DNI: { item.numeroDocumento }</p>
                </div>
                <div className='text-sm leading-snug text-muted-foreground'>
                  <div className='flex flex-row gap-2'>
                    <BsFillFilePersonFill className='flex-none my-1' size={24}/>
                    <p className='line-clamp-2 my-auto'>{item.cargo}</p>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <img className='flex-none my-1 h-6 w-6 p-1' src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${item.idOrganizacionPolitica}`} alt="" />
                    <p className='line-clamp-2 leading-4 my-auto'>{item.organizacionPolitica}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <Button variant="outline" type="button" className="" size="icon">
                  <IconEye/>
                  <span className="sr-only">Login with Apple</span>
                </Button>
                <Button variant="outline" type="button" className="" size="icon">
                  <LiaUserFriendsSolid/>
                  <span className="sr-only">Login with Google</span>
                </Button>
                <Button variant="outline" type="button" className="" size="icon">
                  <IconShare/>
                  <span className="sr-only">Login with Meta</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        )
      }
    </div>
  )
}
