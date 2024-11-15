"use client"

import React, { useEffect, useState } from 'react'

const LoadPercent = ({children}) => {

    const [percentage, setPercentage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      if (percentage < 100 && isLoading) {
        const timer = setTimeout(() => setPercentage(prev => prev+1), 40)
        return () => clearTimeout(timer)
      } else {
        setIsLoading(false)
      }
    }, [percentage, isLoading])

    const textColor = percentage > 49 ? 'text-white' : 'text-black'

  return (
    <div>
      {isLoading ? (
              <div className='max-w-72 md:max-w-sm mx-auto h-screen flex flex-col justify-center'>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">
                  <div className="relative h-6 flex items-center justify-center">
                    <div className="absolute top-0 bottom-0 left-0 rounded-lg bg-black" style={{ width: `${percentage}%` }}></div>
                    <div className={`relative font-medium text-sm ${textColor}`}>{percentage}%</div>
                  </div>
                </div>
              </div>
      ) : (
        children
      )}
    </div>
  )
}

export default LoadPercent