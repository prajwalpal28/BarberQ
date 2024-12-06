import React from "react"
import { Slider } from "./ui/Slider"
import { NewToBarberQCard } from "./new-to-barberq-card"
import { newToBarberQ } from "../Data/new-to-barberq"

export function NewToBarberQ() {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-4xl font-bold text-center mb-8">New to BarberQ</h2>
            <Slider
                items={newToBarberQ}
                renderItem={(item) => (
                    <NewToBarberQCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        price={item.price}
                    />
                )}
            />
        </div>
    )
}

