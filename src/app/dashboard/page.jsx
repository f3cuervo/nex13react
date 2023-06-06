import React from 'react'
import Image from 'next/image'

async function getData(){
  const response = await fetch('https://rickandmortyapi.com/api/character/2')
  return response.json()
}
async function index() {
  const data = await getData()
  return (
    <div>
      <Image width="100" height="100" src={data.image} alt="iagen de personaje Morty"/>
    </div>
  )
}

export default index
