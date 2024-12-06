import React from "react"
import { Slider } from "./ui/Slider"
import { TrendingCard } from "./trending-card"
import { trendingStyles } from "../Data/trending-styles"

export function Trending() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Trending</h2>
      <Slider
        items={trendingStyles}
        renderItem={(item) => (
          <TrendingCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            popularity={item.popularity}
          />
        )}
      />
    </div>
  )
}

