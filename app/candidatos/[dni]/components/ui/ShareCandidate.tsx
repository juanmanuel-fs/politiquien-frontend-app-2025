import GeneralModal from '@/components/modals/GeneralModal'
// import { SummaryCandidate } from '@/model'
import React, { Dispatch, SetStateAction} from 'react'

interface ShareCandidateProps {
  // summary: SummaryCandidate
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function ShareCandidate({ open= false, setOpen}: ShareCandidateProps) {
  return (
    <GeneralModal title='Compartir candidato' subtitle='Candidatos Guardados' open={open} setOpen={()=> setOpen(false)}>
      <div className=''>
        <div className='flex flex-row gap-4'>
          <div className='w-full flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left'>
            <div className='md:flex-none flex justify-center'>
              <div className='relative'>
                <img className='h-48 w-auto rounded-lg bg-fill-tertiary' src="https://votoinformado.jne.gob.pe/voto/images/erm2022/29563543.jpg" alt="" />
                <img className='absolute h-10 w-10 bottom-2 right-2 rounded' src="https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/142" alt="" />
              </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <div className='w-full flex flex-row justify-center gap-2 md:justify-between items-center'>
                  <h6 className='text-headline uppercase truncate'>RUBELA JUANA, TREJO MARQUEZ</h6>
                </div>
              </div>
              <div>
                <div className='flex flex-col gap-1'>
                  <span className='text-callout block text-black-50'>Postulación:</span>
                  <span className='text-callout block font-semibold text-black-88'>ELECCIONES REGIONALES Y MUNICIPALES 2022</span>
                  <span className='text-callout block font-semibold text-primary-88'>GOBERNADOR REGIONAL</span>
                  <span className='text-subhead block font-medium text-black-75'>PARTIDO POLITICO SOMOS PERÚ</span>
                  <span className='text-subhead block font-medium text-black-75'>AREQUIPA / AREQUIPA / AREQUIPA</span>
                </div>
              </div>
              <div className='mt-2 md:mt-auto flex flex-row justify-between items-center gap-2 rounded-lg p-2 pl-4 text-subhead bg-fill-secondary sm:max-w-md md:max-w-full sm:mx-auto md:mx-0'>
                <label htmlFor="" className='truncate'>https://www.politiquien.info/candidato/EEGSD%&DGDFG$TGS</label>
                <button className={`flex flex-row gap-2 p-1 text-black-75 hover:text-black-100 font-semibold uppercase`}>
                  Copiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralModal>
  )
}

export default ShareCandidate