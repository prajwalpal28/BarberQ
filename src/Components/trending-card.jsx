import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function TrendingCard({ title, description, imageUrl, popularity }) {
  return (
    <Card className="w-[300px] h-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <img src={imageUrl} alt={title} className="w-full h-[200px] object-cover rounded-md" />
        <div className="flex justify-between items-center">
          <span className="font-semibold">Popularity:</span>
          <span className="text-lg font-bold">{popularity}</span>
        </div>
      </CardContent>
    </Card>
  )
}

