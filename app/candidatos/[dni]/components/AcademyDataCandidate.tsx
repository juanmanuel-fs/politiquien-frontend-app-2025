'use client'
import { useEffect, useState } from 'react';
import AccordionCandidate from './ui/AccordionCandidate'
import ModalButtonCandidate from './ui/ModalButtonCandidate'
import AccordionDeclarationCandidate from './ui/AccordionDeclarationCandidate';
import SimpleLabelInfoCandidate from './ui/SimpleLabelInfoCandidate';
import GeneralModal from '@/components/modals/CandidateModal';

function AcademyDataCandidate() {
  const [academy, setAcademyModal] = useState<string>('')
  const [openAcademyModal, setOpenAcademyModal] = useState<boolean>(false)

  useEffect(() => { if(openAcademyModal == false) setAcademyModal('')},[openAcademyModal])

  return (
    <>
      <AccordionCandidate 
        title='FORMACIÓN ACADEMICA'
        caption='Datos de estudios'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <ModalButtonCandidate count={2} title='EDUCACIÓN BÁSICA' onCLick={() => {setAcademyModal('basic'); setOpenAcademyModal(true)}}/>
          <ModalButtonCandidate count={4} title='EDUCACIÓN TÉCNICA' onCLick={() => {setAcademyModal('technical'); setOpenAcademyModal(true)}}/>
          <ModalButtonCandidate count={4} title='EDUCACIÓN UNIVERSITARIA' onCLick={() => {setAcademyModal('college'); setOpenAcademyModal(true)}}/>
          <ModalButtonCandidate count={1} title='EDUCACIÓN NO UNIVERSITARIA' onCLick={() => {setAcademyModal('notCollege'); setOpenAcademyModal(true)}}/>
          <ModalButtonCandidate count={1} title='POSGRADO' onCLick={() => {setAcademyModal('postgraduate'); setOpenAcademyModal(true)}}/>
          <ModalButtonCandidate count={4} title='OTRO POSGRADO' onCLick={() => {setAcademyModal('notPostgraduate'); setOpenAcademyModal(true)}}/>
        </div>
      </AccordionCandidate>

      {
        academy === 'basic' &&
        <GeneralModal setOpen={setOpenAcademyModal} title='EDUCACIÓN BÁSICA' open={openAcademyModal}>
          <div className='flex flex-col gap-2 mt-2 w-full'>
            <div className='flex flex-col gap-4 px-4 mb-2'>
              <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className=''>Tipo de educación básica</div>
                <div className='mr-9'>Concluido</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='border-t border-black-10 p-4 flex flex-row justify-between'>
                <h6 className={`text-headline font-semibold font-montserrat block group-hover:text-black-100 text-black-75`}>Educación Primaria</h6>
                <div className='flex-none flex flex-row items-center gap-4'>
                  <p className='text-headline font-medium text-black-75 mr-[88px]'>SI</p>
                </div>
              </div>
              <div className='border-t border-black-10 p-4 flex flex-row justify-between'>
                <h6 className={`text-headline font-semibold font-montserrat block group-hover:text-black-100 text-black-75`}>Educación Secundaria</h6>
                <div className='flex-none flex flex-row items-center gap-4'>
                  <p className='text-headline font-medium text-black-75 mr-[88px]'>SI</p>
                </div>
              </div>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        academy === 'technical' &&
        <GeneralModal setOpen={setOpenAcademyModal} title='EDUCACIÓN TÉCNICA' open={openAcademyModal}>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex flex-col gap-4 px-4 mb-2'>
              <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className=''>Carrera Técnica</div>
                <div className='mr-9'>Concluido</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <AccordionDeclarationCandidate description='PROFESIONAL TÉCNICO EN MECÁNICA DE PRODUCCIÓN' value='SI'>
                <div className='flex flex-col gap-2'>
                  <SimpleLabelInfoCandidate label='Instituto' info='UBICACION RURAL PREDIO LA PAVA/VALLE CHANCAY/SECTOR LA PAVA COD.PRED. 7_6209275_40253 AREA Ha. 0.5900 U.C. 40253 MOCHUMI - LAMBAYEQUE - LAMBAYEQUE' ></SimpleLabelInfoCandidate>
                  <SimpleLabelInfoCandidate label='Comentario' info='CUENTO CON UN PREDIO AGRICOLA CON ESCRITURA PUBLICA NUMERO MIL DOSCIENTOS NOVENTA Y SIETE, ACTUALMENTE EN TRAMITE POR REGISTRAR ANTE SUNARP CON UN AREA DE 3 HECTARIAS CON 648 M2' ></SimpleLabelInfoCandidate>
                </div>
              </AccordionDeclarationCandidate>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        academy === 'college' &&
        <GeneralModal setOpen={setOpenAcademyModal} title='EDUCACIÓN TÉCNICA' open={openAcademyModal}>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex flex-col gap-4 px-4 mb-2'>
              <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className=''>Carrera Universitaria</div>
                <div className='mr-9'>Concluido</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
                <div className='grid grid-cols-12 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-9' label='Universidad' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                  <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Bachiller' info='SI' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Año de bachillerato' info='2007' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Titulo' info='SI' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Año de titulación' info='2008' />
                  <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
                </div>
              </AccordionDeclarationCandidate>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        academy === 'notCollege' &&
        <GeneralModal setOpen={setOpenAcademyModal} title='EDUCACIÓN NO UNIVERSITARIA' open={openAcademyModal}>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex flex-col gap-4 px-4 mb-2'>
              <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className=''>Carrera no Universitaria</div>
                <div className='mr-9'>Concluido</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <AccordionDeclarationCandidate description='IDIOMA INGLES' value='SI'>
                <div className='flex flex-col gap-2'>
                  <SimpleLabelInfoCandidate label='Centro de estudios' info='ASOCIACIÓN CULTURAL PERUANA BRITÁNICO' />
                  <SimpleLabelInfoCandidate label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
                </div>
              </AccordionDeclarationCandidate>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        academy === 'postgraduate' &&
        <GeneralModal setOpen={setOpenAcademyModal} title='POSGRADOS' count={12} open={openAcademyModal}>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex flex-col gap-4 px-4 mb-2'>
              <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className=''>Posgrado</div>
                <div className='mr-9'>Concluido</div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
                <div className='grid grid-cols-12 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                  <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                  <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
                </div>
              </AccordionDeclarationCandidate>
              <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
                <div className='grid grid-cols-12 gap-2'>
                  <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                  <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                  <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                  <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
                </div>
              </AccordionDeclarationCandidate>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        academy === 'notPostgraduate' &&
        <GeneralModal setOpen={setOpenAcademyModal} title='OTROS TIPOS DE POSGRADOS' count={18} primary='Posgrado' secondary='Concluido' open={openAcademyModal}>
          <div className='flex flex-col gap-4'>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
            <AccordionDeclarationCandidate description='BACHILLER EN ADMINISTRACION' value='SI'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-9' label='Centro de estudios' info='UNIVERSIDAD NACIONAL DE TRUJILLO' />
                <SimpleLabelInfoCandidate className='col-span-3' label='Egresado' info='SI' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Grado' info='Maestro' />
                <SimpleLabelInfoCandidate className='col-span-6' label='Año de graduación' info='2007' />
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL' />
              </div>
            </AccordionDeclarationCandidate>
          </div>
        </GeneralModal>      
      }
    </>
  )
}

export default AcademyDataCandidate