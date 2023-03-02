import React from 'react'

const EmptyState = () => {
  return (
   <>
    <div className="flex flex-col items-center space-y-2 justify-center h-screen">
      <h1  className="font-bold text-xl">No movies!</h1>
      <p>Sorry, we do not have movies for you</p>
      <p>
        <i>Click on add movie</i>
      </p>
    </div>
   </>
  )
}

export default EmptyState