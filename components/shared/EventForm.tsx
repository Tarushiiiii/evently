"use client"

type EventFormProps = {
    userId: string
    type: "Create" | "Update"
}

export const EventForm = ({ userId, type }: EventFormProps) => {
    return (
        <div>EventForm {type}</div>
    )
}
