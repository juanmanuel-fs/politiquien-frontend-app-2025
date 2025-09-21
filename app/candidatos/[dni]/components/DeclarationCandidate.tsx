'use client'
import { useEffect, useState } from 'react'
import AccordionCandidate from './ui/AccordionCandidate'
import SimpleLabelInfoCandidate from './ui/SimpleLabelInfoCandidate'
import ModalButtonCandidate from './ui/ModalButtonCandidate';
import GeneralModal from '@/components/modals/CandidateModal';
import AccordionDeclarationCandidate from './ui/AccordionDeclarationCandidate';

function DeclarationCandidate() {
  const [faultsModal, setFaultsModal] = useState<string>('')
  const [openDeclarationModal, setOpenDeclarationtModal] = useState<boolean>(false)

  useEffect(() => { if(openDeclarationModal == false) setFaultsModal('')},[openDeclarationModal])

  return (
    <>
      <AccordionCandidate
        title='Declaración Jurada'
        caption='Datos financieros y posiciones de  bienes.'
      >
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <ModalButtonCandidate title='Bienes Muebles' count={23} onCLick={() => {setFaultsModal('movables'); setOpenDeclarationtModal(true)}}/>
            <ModalButtonCandidate title='Bienes Inmuebles' count={23} onCLick={() => {setFaultsModal('immovables'); setOpenDeclarationtModal(true)}}/>
            <ModalButtonCandidate title='Titularidades' count={23} onCLick={() => {setFaultsModal('properties'); setOpenDeclarationtModal(true)}}/>
            <ModalButtonCandidate title='Otros bienes' count={23} onCLick={() => {setFaultsModal('other'); setOpenDeclarationtModal(true)}}/>
          </div>
          <h6 className='text-black-75 capitalize font-medium'>Ingresos:</h6>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <SimpleLabelInfoCandidate label='REMUNERACIÓN BRUTA ANUAL' info='S/ 244,364.30'></SimpleLabelInfoCandidate>
            <SimpleLabelInfoCandidate label='RENTA BRUTA ANUAL POR EJERCICIO INDIVIDUAL' info='S/ 17,522.31'></SimpleLabelInfoCandidate>
            <SimpleLabelInfoCandidate label='OTROS INGRESOS ANUALES	' info='S/ 44,874.00'></SimpleLabelInfoCandidate>
            <SimpleLabelInfoCandidate className='col-span-full' label='TOTAL' info='S/ 306,760.61'></SimpleLabelInfoCandidate>
          </div>
        </div>
      </AccordionCandidate>
      {
        faultsModal === 'immovables' &&
        <GeneralModal setOpen={setOpenDeclarationtModal} title='BIENES INMUEBLES' count={23} primary='Tipo de Bien' secondary='Valor' open={openDeclarationModal}>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col gap-4'>
              <AccordionDeclarationCandidate description='1. SECCION ESPECIAL DE PREDIOS RURALES' value='S/. 453.00'>
                <div className='grid grid-cols-3 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Dirección' info='UBICACION RURAL PREDIO LA PAVA/VALLE CHANCAY/SECTOR LA PAVA COD.PRED. 7_6209275_40253 AREA Ha. 0.5900 U.C. 40253 MOCHUMI - LAMBAYEQUE - LAMBAYEQUE'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Inscrito	en SUNARP' info='Si'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Partida' info='345734561'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Valor Autovalúo' info='S/. 3 457 345.00'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Información complementaria' info='CUENTO CON UN PREDIO AGRICOLA CON ESCRITURA PUBLICA NUMERO MIL DOSCIENTOS NOVENTA Y SIETE, ACTUALMENTE EN TRAMITE POR REGISTRAR ANTE SUNARP CON UN AREA DE 3 HECTARIAS CON 648 M2'></SimpleLabelInfoCandidate>
                </div>
              </AccordionDeclarationCandidate>
              <AccordionDeclarationCandidate description='2. SECCION ESPECIAL DE PREDIOS RURALES' value='S/. 453.00'>
                <div className='grid grid-cols-3 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Dirección' info='UBICACION RURAL PREDIO LA PAVA/VALLE CHANCAY/SECTOR LA PAVA COD.PRED. 7_6209275_40253 AREA Ha. 0.5900 U.C. 40253 MOCHUMI - LAMBAYEQUE - LAMBAYEQUE'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Inscrito	en SUNARP' info='Si'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Partida' info='345734561'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Valor Autovalúo' info='S/. 3 457 345.00'></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Información complementaria' info='CUENTO CON UN PREDIO AGRICOLA CON ESCRITURA PUBLICA NUMERO MIL DOSCIENTOS NOVENTA Y SIETE, ACTUALMENTE EN TRAMITE POR REGISTRAR ANTE SUNARP CON UN AREA DE 3 HECTARIAS CON 648 M2'></SimpleLabelInfoCandidate>
                </div>
              </AccordionDeclarationCandidate>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        faultsModal === 'movables' &&
        <GeneralModal setOpen={setOpenDeclarationtModal} title='BIENES MUEBLES' count={3} primary='Tipo de bien' secondary='Valor' totalSecondary={1356.00} open={openDeclarationModal}>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col gap-4'>
              <AccordionDeclarationCandidate description='1. SECCION ESPECIAL DE PREDIOS RURALES' value='S/. 453.00'>
                <div className='grid grid-cols-12 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-8' label='Caracteristicas' info='REGISTRO DE PROPIEDAD VEHICULAR'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Marca' info='TOYOTA'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Modelo' info='ECLIPSE'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Año' info='2007'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Placa' info='Y65-8T0'/>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='TRANSPORTE PERSONAL'/>
                </div>
              </AccordionDeclarationCandidate>
              <AccordionDeclarationCandidate description='1. SECCION ESPECIAL DE PREDIOS RURALES' value='S/. 453.00'>
                <div className='grid grid-cols-12 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-8' label='Caracteristicas' info='REGISTRO DE PROPIEDAD VEHICULAR'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Marca' info='TOYOTA'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Modelo' info='ECLIPSE'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Año' info='2007'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Placa' info='Y65-8T0'/>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='TRANSPORTE PERSONAL'/>
                </div>
              </AccordionDeclarationCandidate>
              <AccordionDeclarationCandidate description='1. SECCION ESPECIAL DE PREDIOS RURALES' value='S/. 453.00'>
                <div className='grid grid-cols-12 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-8' label='Caracteristicas' info='REGISTRO DE PROPIEDAD VEHICULAR'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Marca' info='TOYOTA'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Modelo' info='ECLIPSE'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Año' info='2007'/>
                  <SimpleLabelInfoCandidate className='col-span-4' label='Placa' info='Y65-8T0'/>
                  <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='TRANSPORTE PERSONAL'/>
                </div>
              </AccordionDeclarationCandidate>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        faultsModal === 'properties' &&
        <GeneralModal setOpen={setOpenDeclarationtModal} title='TITULADIDADES' count={4} primary='Persona Jurídica' secondary='Tipo' open={openDeclarationModal}>
          <div className='flex flex-col gap-4'>
            <AccordionDeclarationCandidate description='ESCUELA DE NEGOCIOS SAN FRANCISCO XAVIER S.A.C.' value='ACCIONES'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-6' label='Número de Acciones y Participaciones' info='889881.29'/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Valor Nominal del Total de Acciones y participaciones' info='889881.29'/>
                <SimpleLabelInfoCandidate className='col-span-full' label='Información Complementaria' info='EL CAPITAL SOCIAL ESTA DIVIDIDO EN 1000 PARTICIPACIONES CON VALOR NOMINAL DE 1 SOL, MIS PARTICIPACIONES SON 650.'/>
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='ESCUELA DE NEGOCIOS SAN FRANCISCO XAVIER S.A.C.' value='ACCIONES'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-6' label='Número de Acciones y Participaciones' info='889881.29'/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Valor Nominal del Total de Acciones y participaciones' info='889881.29'/>
                <SimpleLabelInfoCandidate className='col-span-full' label='Información Complementaria' info='EL CAPITAL SOCIAL ESTA DIVIDIDO EN 1000 PARTICIPACIONES CON VALOR NOMINAL DE 1 SOL, MIS PARTICIPACIONES SON 650.'/>
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='ESCUELA DE NEGOCIOS SAN FRANCISCO XAVIER S.A.C.' value='ACCIONES'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-6' label='Número de Acciones y Participaciones' info='889881.29'/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Valor Nominal del Total de Acciones y participaciones' info='889881.29'/>
                <SimpleLabelInfoCandidate className='col-span-full' label='Información Complementaria' info='EL CAPITAL SOCIAL ESTA DIVIDIDO EN 1000 PARTICIPACIONES CON VALOR NOMINAL DE 1 SOL, MIS PARTICIPACIONES SON 650.'/>
              </div>
            </AccordionDeclarationCandidate>
          </div>
        </GeneralModal>      
      }
    </>
  )
}

export default DeclarationCandidate