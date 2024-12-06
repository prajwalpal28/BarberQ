import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"

export function BarberCard({ name, specialty, imageUrl, experience, favoriteTools }) {
  return (
    <Card className="w-[300px] h-[450px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{specialty}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <img src={imageUrl} alt={name} className="w-full h-[200px] object-cover rounded-md" />
        <div>
          <p className="font-semibold">Experience: {experience}</p>
          <p className="font-semibold mt-2">Favorite Tools:</p>
          <ul className="list-disc list-inside">
            {favoriteTools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}


