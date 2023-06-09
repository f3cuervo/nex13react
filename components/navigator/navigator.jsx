import React from 'react'
import { Routes } from '../../models/Routes.model'
import Link from 'next/link'

function Navigator() {
  return (
    <>
      <Link href={Routes.HOME}>Home</Link>
      <Link href={Routes.CHARACTERS}>Characters</Link>
      <Link href={Routes.LOCATIONS}>Locations</Link>
    </>
  )
}

export default Navigator
