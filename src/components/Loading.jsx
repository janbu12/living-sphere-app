import React from 'react'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-200 opacity-50 z-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                </div>
    </div> 
  )
}
