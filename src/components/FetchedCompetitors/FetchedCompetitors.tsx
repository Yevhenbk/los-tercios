import * as React from 'react'
import Competitor from '../Cards/Competitor/Competitor'
import './FetchedCompetitors.scss'

const FetchedCompetitors: React.FC = () => {

    const [data, setData] = React.useState([])

    const getData = () => {
        fetch('competitors.json',
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson);
        });
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
      <div className='fetched__competitors'>
        {data.map((c: any) => (
            <Competitor key={c.id} snatch={c.snatch} cj={c.cj} name={c.name} src={c.img} category={c.category} />
        ))}
      </div>
    )
}

export default FetchedCompetitors