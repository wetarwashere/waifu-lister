interface MasonryGridProps {
  children: ReactNode
}

import { ReactNode } from "react"
import Masonry from "react-masonry-css"

const MasonryGrid: React.FC<MasonryGridProps> = ({ children }) => {
  const breakpoints = {
    default: 5,
    1280: 4,
    1024: 3,
    640: 2,
    0: 1
  }

  return (
    <Masonry breakpointCols={breakpoints} className="flex w-auto gap-4 p-4 select-none" columnClassName="bg-transparent">
      {children}
    </Masonry>
  )
}

export default MasonryGrid
