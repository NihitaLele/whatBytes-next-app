import React from 'react'

const EmptyState = ({ message = "No products found." }) => {
  return (
    <div className="col-span-full text-center py-16 text-slate-500">
      {message}
    </div>
  )
}

export default EmptyState