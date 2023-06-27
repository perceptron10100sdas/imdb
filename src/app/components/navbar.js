import React from 'react'
import Navbaritem from "./navbaritem"
export default function navbar() {
  return (
    <div>
      <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
    <Navbaritem title="Trending" param="fetchTopRated"/>
    <Navbaritem title="Top rated" param="fetchTrending"/>
    </div></div>
  )
}
