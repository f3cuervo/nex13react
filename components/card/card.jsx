import Image from 'next/image'
import './card.css'


function Card({data}) {
    //creando una variable que contiene el type traido del endpoint
    let formatedType = data.type
    //si el type viene vacio le asignamos el string
    formatedType ||= 'No type';
  return (
    <div className='card'>
      <p>Name: {data.name}</p>
      <p>Type: {formatedType}</p>
      <p>Created: {data.created}</p>
      {data.image ? (<Image width="100" height="100" alt={data.name} src={data.image}/>):(<></>)}    
    </div>
  )
}

export default Card
