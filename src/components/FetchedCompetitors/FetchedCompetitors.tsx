import * as React from 'react'
import Competitor from '../Cards/Competitor/Competitor'
import { Context } from '../../lib/appContext'
import './FetchedCompetitors.scss'

const FetchedCompetitors: React.FC = () => {

    const { store } = React.useContext(Context)

    return (
      <div className='fetched__competitors'>
        {store.competitors.map((c: any) => (
            <Competitor key={c.id} snatch={c.snatch} cj={c.cj} name={c.name} src={c.img} category={c.category} />
        ))}
      </div>
    )
}

export default FetchedCompetitors