import React, { useEffect, useState } from "react"
import Card from "./Card"
import { food_items } from "../Foods"

const Pagination = ({ category }) => {
  const ITEMS_PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(1)

  // 🔹 Filter
  const filteredData =
    category === "All"
      ? food_items
      : food_items.filter(item => item.food_category === category)

  // 🔹 Reset page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const currentItems = filteredData.slice(start, start + ITEMS_PER_PAGE)

  return (
    <>
      {/* Cards Grid */}
      <div className="row">
        {currentItems.map(item => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>

    </>
  )
}

export default Pagination
