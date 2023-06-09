
import Card from '../../../../components/card/card';
import { getLocations } from './services'



async function fetchLocations(){   
    return await getLocations();
}


async function Locations() {
    const locations = await fetchLocations();
  return (
    <>
      {locations.map((locations)=>
      (<Card key={locations.id} data={locations}/>))}
    </>
  )
}

export default Locations
