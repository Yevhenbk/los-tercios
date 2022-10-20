import * as React from 'react'
import Competitor from '../Cards/Competitor/Competitor'
import Header from '../Header/Header'
import { Context } from '../../store/appContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import './FetchedCompetitors.scss'
import Search from '../Search/Search'

const FetchedCompetitors: React.FC = () => {

  const [ query, setQuery ] = React.useState<string>('') 
  const { store } = React.useContext(Context)

  return (
    <>
      <div className='display__header'>
        <Header header='Equípo de competición' description='Get to know the team, their records, etc.'/> 
        <Search placeholder="Search by name..." value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.toLowerCase())}>
         {query.length === 0 ? <AiOutlineSearch className='search__icon'/> : <MdClose className='close__search' onClick={() => setQuery('')} />}
        </Search>
      </div>
      <div className='fetched__competitors'>
        {store.competitors.filter((c: any) => c.name.toLowerCase().includes(query)).map((c: any) => (
            <Competitor key={c.id} snatch={c.snatch} cj={c.cj} name={c.name} src={c.img} category={c.category} />
        ))}
      </div>
    </>
  )
}

export default FetchedCompetitors