import React from 'react'

const CoverLetter = async ({params}) => {
    const resolvedParams = await params;
    const id = resolvedParams.id;
  return (
    <div>CoverLetter {id} </div>
  )
}

export default CoverLetter