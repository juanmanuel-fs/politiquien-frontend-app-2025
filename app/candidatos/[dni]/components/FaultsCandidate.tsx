'use client'
import { useEffect, useState } from 'react'
import AccordionCandidate from './ui/AccordionCandidate'
import ModalButtonCandidate from './ui/ModalButtonCandidate'
import GeneralModal from '@/components/modals/CandidateModal'
import AccordionDeclarationCandidate from './ui/AccordionDeclarationCandidate'
import SimpleLabelInfoCandidate from './ui/SimpleLabelInfoCandidate'

function FaultsCandidate() {
  const [faultsModal, setFaultsModal] = useState<string>('')
  const [openFaultModal, setOpenFaultModal] = useState<boolean>(false)

  useEffect(() => { if(openFaultModal == false) setFaultsModal('')},[openFaultModal])

  return (
    <>
      <AccordionCandidate
        title='Faltas'
        caption='faltas judicilaes, penales, administrativas, etc.'
      > 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <ModalButtonCandidate title='FALTAS FISCALES' count={2} countColor='bg-orange-400' onCLick={() => {setFaultsModal('fiscals'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate title='FALTAS JUDICIALES' onCLick={() => {setFaultsModal('judicials'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate title='FALTAS DE TRANSITOS' onCLick={() => {setFaultsModal('transitions'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate title='FALTAS ADMINISTRATIVAS' onCLick={() => {setFaultsModal('administratives'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate title='OTRA FALTAS' onCLick={() => {setFaultsModal('other'); setOpenFaultModal(true)}}/>
        </div>

      </AccordionCandidate>
      {
        faultsModal === 'fiscals' &&
        <GeneralModal setOpen={setOpenFaultModal} title='FALTAS FISCALES' open={openFaultModal} primary='Falta' secondary='Estado'>
          <div className='flex flex-col gap-4'>
            <AccordionDeclarationCandidate description='FALTA POR INCUMPLIMIENTO' value='ARCHIVADO'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='FALTA DE CUMPLIMIENTO' value='CULPABLE'>
              <div className='grid grid-cols-12 gap-2'>

                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
              </div>
              </AccordionDeclarationCandidate>
              <AccordionDeclarationCandidate description='FALTA DE CUMPLIMIENTO' value='CULPABLE'>
              <div className='grid grid-cols-12 gap-2'>

                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
              </div>
              </AccordionDeclarationCandidate>
              <AccordionDeclarationCandidate description='FALTA DE CUMPLIMIENTO' value='CULPABLE'>
              <div className='grid grid-cols-12 gap-2'>

                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
              </div>
            </AccordionDeclarationCandidate>
          </div>
        </GeneralModal>      
      }
      {
        faultsModal === 'judicials' &&
        <GeneralModal setOpen={setOpenFaultModal} title='FALTAS JUDICIALES' count={22} open={openFaultModal}>
          <div className='flex flex-col gap-2 w-full'>
            <div className='px-3'>
              <div className='flex text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className='basis-1/3'>Falta</div>
                <div className='basis-1/6'>Estado</div>
                <div className='basis-2/3'>Comentario</div>
              </div>
            </div>
            <div className='px-3 py-2 md:py-4 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
            <div className='px-3 py-2 md:py-4 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
            <div className='px-3 py-2 md:py-4 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
            <div className='px-3 py-2 md:py-4 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
          </div>
        </GeneralModal>      
      }
    </>
  )
}

export default FaultsCandidate