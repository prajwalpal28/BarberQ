import React from "react"
import { Slider } from "./Slider"
import { BarberCard } from "./ui/BarberCard"
import { barbers } from "../Data/BarbersReco"

export function Barbershop() {
    return (
        <div className="container mx-auto pb-12">
            <h1 className="text-4xl font-bold text-center mb-8">Recommended</h1>
            <Slider
                items={barbers}
                renderItem={(barber) => (
                    <BarberCard
                        key={barber.id}
                        name={barber.name}
                        specialty={barber.specialty}
                        imageUrl={barber.imageUrl}
                        experience={barber.experience}
                        favoriteTools={barber.favoriteTools}
                    />
                )}
            />
        </div>
    )
}
