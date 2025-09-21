'use client'

import { ChangeEvent, useState } from 'react';
import { News } from '../hooks/useGetNews';

import CardNews from '@/components/cards/NewsCard'
import SmallCardFrontPageNews from './components/SmallCardFrontPageNews'
import InputText from '@/components/forms/InputText'

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { BiSearch } from 'react-icons/bi'
import { IoFilterOutline } from 'react-icons/io5'

import SideRightModal from '@/components/modals/SideRightModal'
import SimpleSelect from '@/components/forms/SimpleSelect'
import { Button } from '@/components/ui/button';

type DataType = {
  value: string,
  categories: number [],
  state: number,
  organization: number
} 

const categoryData = [
  {
    id: 12,
    name: 'category 1',
  },
  {
    id: 14,
    name: 'category 2',
  },
  {
    id: 3,
    name: 'category 3',
  },
  {
    id: 17,
    name: 'category 2',
  },
  {
    id: 34,
    name: 'category 3',
  },
  {
    id: 146,
    name: 'category 2',
  },
  {
    id: 33,
    name: 'category 3',
  }
]

type StateType = {
  id: number,
  name: string
}


const stateData: StateType [] = [
  {
    id: 12,
    name: 'Arequipa',
  },
  {
    id: 14,
    name: 'Lima',
  },
  {
    id: 3,
    name: 'Ica',
  }
]

const organizationData = [
  {
    id: 12,
    name: 'Peru libre',
  },
  {
    id: 14,
    name: 'Amor por el Perú',
  },
  {
    id: 3,
    name: 'Siempre contigo',
  }
]

interface ListNewsProps {
  news: News[];
}

function ListNews({ news }: ListNewsProps) {
  const [filterSearchNews, setFilterSearchNews] = useState<DataType>({
    value: '',
    categories: [],
    state: 0,
    organization: 0
  })
  const [state, setState] = useState<StateType[]>(stateData)
  const [organizations, setOrganizations] = useState(organizationData)
  const [openSideRightModal, setOpenSideRightModal] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const temp: DataType = {...filterSearchNews}
    if(e.target.name == 'value'){
      temp.value = e.target.value
    }
    if (e.target.checked) {
      temp.categories = [...temp.categories!, parseInt(e.target.value)]
    } else {
      temp.categories = temp.categories!.filter((item) => item !== parseInt(e.target.value))
    }
    setFilterSearchNews(temp)
  }

  const handleSelect = (id: number, name: string) => {
    const temp = {...filterSearchNews}
    temp[name] = id
    setFilterSearchNews({...temp})
  }

  return (
    <>
      <div className='basis-8/12 overflow-auto'>
        <div className='flex flex-row gap-4 justify-between mb-2 items-center'>
          <h2 className='text-title3 '>ÚLTIMAS NOTICIAS</h2>
          <div className='flex flex-row gap-2 md:gap-4'>
            <Button variant="secondary"  disabled={true}><SlArrowLeft/></Button>
            <Button variant="secondary" ><SlArrowRight/></Button>
          </div>
        </div>
        <div className='flex flex-col mb-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2 md:gap-4 '>
              <div className='w-full'>
                <InputText 
                  value={filterSearchNews.value}
                  name='value'
                  change={(e: ChangeEvent<HTMLInputElement>) => {handleChange(e)}} 
                  icon={<BiSearch className='text-black-50'/>} 
                  placeholder='Buscar noticia' 
                  type='black'
                />
              </div>
              <div className='flex-none' onClick={() => setOpenSideRightModal(true)}>
                <Button variant="secondary" ><IoFilterOutline/></Button>
              </div>
            </div>
            {/* <div className='flex gap-2 overflow-x-scroll pb-4'>
              {
                category.map((category, index) => 
                  <CategoryCheckbox index={index} label={category.name} change={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)} value={category.id} key={index}/>
                )
              }
            </div> */}
          </div>
          <div className='rounded-xl bg-fill-quaternary p-4 mt-4 hidden'>
            <h6 className='text-headline text-black-75 mb-4'>Resultado de la búsqueda</h6>
            <div className='grid grid-cols-2 gap-2'>
              <SmallCardFrontPageNews/>
              <SmallCardFrontPageNews/>
              <SmallCardFrontPageNews/>
              <SmallCardFrontPageNews/>
              <SmallCardFrontPageNews/>
              <SmallCardFrontPageNews/>
            </div>
          </div>
        </div>
        <div className='grid gap-6 grid-col-1 md:grid-cols-2 mb-6'>
          {news.map((newsItem) => (
            <CardNews key={newsItem.id} news={newsItem} />
          ))}
        </div>
        <div className='flex flex-row gap-2 mt-8'>
          <Button variant="secondary" disabled={true}>ANTERIOR</Button>
          <Button variant="secondary">SIGUIENTE</Button>
          <div className='flex flex-col'>
            <span className='block text-xs font-semibold'>1 de 12</span>
            <span className='block text-xs font-normal'>142 Noticias</span>
          </div>
        </div>
      </div>

      {
        openSideRightModal && 
        <SideRightModal title='FILTRAR NOTICIAS' open={openSideRightModal} setOpen={setOpenSideRightModal}>
          <div className='flex flex-col gap-4 h-full'>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Noticia</label>
              <InputText type='black' name='value' placeholder='Nombre de la noticia' value={filterSearchNews.value} change={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} />
            </div>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Departamnetos</label>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Seleccione un departamento'/>
            </div>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Organizaciones</label>
              <SimpleSelect name='organization' options={organizations} value={filterSearchNews.organization} change={handleSelect} placeholder='Seleccione un departamento'/>
            </div>
            {/* <div className='mb-auto'>
              <label className='text-body text-black-75 block mb-2'>Categorias</label>
              <div className='flex flex-wrap gap-2 pb-4'>
                {
                  categoryData.map((category, index) => 
                    <CategoryCheckbox index={index} checked={filterSearchNews.categories?.some(dat => dat ==category.id)} label={category.name} change={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)} value={category.id} key={index}/>)
                }
              </div>
            </div> */}
            <Button variant="secondary" onClick={() => setOpenSideRightModal(false)}>FILTRAR NOTICIAS</Button>
          </div>
        </SideRightModal>
      }
    </>
  )
}

export default ListNews