'use client'

import { Badge } from "@/components/ui/badge"
import useGetCandidate from "../hooks/useGetCandidate"
import { IconCircleCheckFilled, IconLoader } from "@tabler/icons-react"

function ApplicationCandidate({ dni }: { dni: string }) {

  const {candidate} = useGetCandidate(dni)


  return (
    <div className='border border-black-22 rounded-xl p-4'>
      <div className='flex flex-row gap-4'>
        <div className='w-full flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left'>
          <div className='sm:flex-none flex justify-center'>
            <div className='relative'>
              <img className='h-80 w-auto rounded-lg bg-fill-tertiary' src={`https://declara.jne.gob.pe${candidate?.rutaArchivo}`} alt="" />
              <img className='absolute h-12 w-12 bottom-4 right-4 rounded' src={`https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/${candidate?.idOrganizacionPolitica}`} alt="" />
            </div>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex flex-row justify-center gap-2 sm:justify-between items-center'>
                <h6 className='text-headline uppercase truncate'>{ candidate?.nombreCompleto.split("-")[0] }</h6>
              </div>
              <div className='sm:hidden'>
                <label htmlFor="" className='px-3 py-1 rounded-md bg-fill-secondary text-orange-500 text-headline font-medium uppercase '>Improcedente</label>
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-1 text-sm'>
                <span className='text-callout block text-black-50'>Postulación:</span>
                <span className='text-callout block font-semibold text-black-88'>ELECCIONES GENERALES 2026</span>
                <span className='text-callout block font-semibold text-primary-88'>{ candidate?.cargo[0] }</span>
                <span className='text-callout block font-medium text-black-75'>{ candidate?.organizacionPolitica }</span>
              </div>
              <div className='hidden sm:block mt-2 md:flex'>
                <Badge variant="outline" className="text-muted-foreground px-1.5">
                    {candidate?.estado === "INSCRITO" ? (
                        <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                    ) : (
                        <IconLoader />
                    )}
                    {candidate?.estado}
                </Badge>
              </div>
            </div>
            <hr  className="my-2"/>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row justify-between'>
                <span className='block text-subhead text-black-50'>DNI:</span>
                <span className='block text-subhead font-normal text-black-75'>{ candidate?.numeroDocumento }</span>
              </div>
              <div className='flex flex-row justify-between'>
                <span className='block text-subhead text-black-50'>Edad:</span>
                <span className='block text-subhead font-normal text-black-75'>43 Años</span>
              </div>
              <div className='flex flex-row justify-between'>
                <span className='block text-subhead text-black-50'>Legal</span>
                <span className='block text-subhead font-normal text-black-75 text-orange-400'>3 Denuncias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCandidate