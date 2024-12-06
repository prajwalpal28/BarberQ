import React, { useState } from "react"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

function rotateArray(arr, rotation) {
  const normalizedRotation = ((rotation % arr.length) + arr.length) % arr.length;
  return [...arr.slice(normalizedRotation), ...arr.slice(0, normalizedRotation)];
}

export function Slider({ items, renderItem, visibleItems = 4 }) {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => setRotation((prev) => prev - 1);
  const rotateRight = () => setRotation((prev) => prev + 1);

  const visibleCards = rotateArray(items, rotation).slice(0, visibleItems);

  return (
    <div className="relative w-full max-w-full mx-auto">
      <div className="flex justify-center items-center gap-4 py-8">
        {visibleCards.map((item, index) => (
          <div key={index} className="transition-all duration-300 ease-in-out">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-20 top-1/2 transform -translate-y-1/2"
        onClick={rotateLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-20 top-1/2 transform -translate-y-1/2"
        onClick={rotateRight}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

