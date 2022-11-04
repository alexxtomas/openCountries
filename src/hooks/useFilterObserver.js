import { useEffect, useState } from 'react'

export const useFilterObserver = (limitOfElements, checkpoint, elementToFilter) => {
  const [limit, setLimit] = useState(limitOfElements)
  const [filtredElements, setFiltredElements] = useState(elementToFilter.slice(0, limit))

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLimit(limit => limit + 9)
        setFiltredElements(elementToFilter.slice(0, limit))
      }
    })

    observer.observe(checkpoint.current)

    return () => {
      observer.disconnect()
    }
  })

  return { filtredElements, setFiltredElements }
}
