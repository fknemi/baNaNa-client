import React, { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react";
import SeatPicker from 'react-seat-picker'

function SelectSeats() {
    const [loading, setLoading] = useState(false)

    const [seats, setSeats] = useState([]); // Assuming `seats` is an array that holds all the seats.
    const [selectedSeats, setSelectedSeats] = useState([]); // Holds selected seats.

    const addSeatCallback = ({ row, number, id }, addCb) => {
        setLoading(true);
        setTimeout(() => {
            console.log(`Added seat ${number}, row ${row}, id ${id}`);
            const newTooltip = `tooltip for id-${id} added by callback`;

            // Add the seat to the selectedSeats state
            setSelectedSeats(prevSelectedSeats => [
                ...prevSelectedSeats,
                { row, number, id, tooltip: newTooltip }
            ]);

            // Call the callback to add the seat
            addCb(row, number, id, newTooltip);
            setLoading(false);
        }, 1500);
    }

    const addSeatCallbackContinuousCase = ({ row, number, id }, addCb, params, removeCb) => {
        setLoading(true);
        setTimeout(() => {
            if (removeCb) {
                setTimeout(() => {
                    console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`);
                    removeCb(params.row, params.number);
                }, 750);
            }
            setTimeout(() => {
                console.log(`Added seat ${number}, row ${row}, id ${id}`);
                const newTooltip = `tooltip for id-${id} added by callback`;

                // Add the seat to the selectedSeats state
                setSelectedSeats(prevSelectedSeats => [
                    ...prevSelectedSeats,
                    { row, number, id, tooltip: newTooltip }
                ]);

                // Call the callback to add the seat
                addCb(row, number, id, newTooltip);
                setLoading(false);
            }, 750);
        }, 1500);
    }

    const removeSeatCallback = ({ row, number, id }, removeCb) => {
        setLoading(true);
        setTimeout(() => {
            console.log(`Removed seat ${number}, row ${row}, id ${id}`);

            // A value of null will reset the tooltip to the original while '' will hide the tooltip
            const newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';

            // Remove the seat from the selectedSeats state
            setSelectedSeats(prevSelectedSeats =>
                prevSelectedSeats.filter(seat => seat.id !== id)
            );

            // Call the callback to remove the seat
            removeCb(row, number, newTooltip);
            setLoading(false);
        }, 1500);
    }


    useEffect(() => {
        console.log(selectedSeats)
    }, [selectedSeats])

    const rows = [
        // Front Rows (A, B, C)
        [{ id: 1, number: 1, isSelected: true, tooltip: 'Reserved by you' }, { id: 2, number: 2, tooltip: 'Cost: 15$' }, { id: 3, number: 3, tooltip: 'Cost: 15$' }, { id: 4, number: 4, tooltip: 'Cost: 15$' }, { id: 5, number: 5 }, { id: 6, number: 6 }, { id: 7, number: 7 }, { id: 8, number: 8 }],
        [{ id: 9, number: 1, tooltip: 'Reserved by Matthias' }, { id: 10, number: 2 }, { id: 11, number: 3 }, { id: 12, number: 4, tooltip: 'Reserved by Rogger' }, { id: 13, number: 5 }, { id: 14, number: 6 }, { id: 15, number: 7 }, { id: 16, number: 8 }],
        [{ id: 17, number: 1 }, { id: 18, number: 2 }, { id: 19, number: 3 }, { id: 20, number: 4 }, { id: 21, number: 5 }, { id: 22, number: 6 }, { id: 23, number: 7 }, { id: 24, number: 8 }],

        // Middle Rows (D, E, F)
        [{ id: 25, number: 1, tooltip: 'Cost: 20$' }, { id: 26, number: 2 }, { id: 27, number: 3 }, { id: 28, number: 4 }, { id: 29, number: 5 }, { id: 30, number: 6 }, { id: 31, number: 7 }, { id: 32, number: 8 }],
        [{ id: 33, number: 1 }, { id: 34, number: 2 }, { id: 35, number: 3 }, { id: 36, number: 4 }, { id: 37, number: 5 }, { id: 38, number: 6 }, { id: 39, number: 7 }, { id: 40, number: 8 }],
        [{ id: 41, number: 1 }, { id: 42, number: 2 }, { id: 43, number: 3 }, { id: 44, number: 4 }, { id: 45, number: 5 }, { id: 46, number: 6 }, { id: 47, number: 7 }, { id: 48, number: 8 }],

        // Back Rows (G, H, I)
        [{ id: 49, number: 1, tooltip: 'Cost: 25$' }, { id: 50, number: 2 }, { id: 51, number: 3 }, { id: 52, number: 4 }, { id: 53, number: 5 }, { id: 54, number: 6 }, { id: 55, number: 7 }, { id: 56, number: 8 }],
        [{ id: 57, number: 1 }, { id: 58, number: 2 }, { id: 59, number: 3 }, { id: 60, number: 4 }, { id: 61, number: 5 }, { id: 62, number: 6 }, { id: 63, number: 7 }, { id: 64, number: 8 }],
        [{ id: 65, number: 1 }, { id: 66, number: 2 }, { id: 67, number: 3 }, { id: 68, number: 4 }, { id: 69, number: 5 }, { id: 70, number: 6 }, { id: 71, number: 7 }, { id: 72, number: 8 }],

        // Last Rows (J, K)
        [{ id: 73, number: 1 }, { id: 74, number: 2 }, { id: 75, number: 3 }, { id: 76, number: 4 }, { id: 77, number: 5 }, { id: 78, number: 6 }],
        [{ id: 79, number: 1 }, { id: 80, number: 2 }, { id: 81, number: 3 }, { id: 82, number: 4 }, { id: 83, number: 5 }, { id: 84, number: 6 }]
    ]

    return (
        <div className="flex flex-col w-full items-center justify-center text-white font-infinity">
            <h1 className="text-xl font-medium">Screen Here</h1>
            <div style={{ marginTop: '100px' }}>
                <SeatPicker
                    addSeatCallback={addSeatCallback}
                    removeSeatCallback={removeSeatCallback}
                    rows={rows}
                    maxReservableSeats={3}
                    alpha
                    visible
                    selectedByDefault
                    loading={loading}
                    tooltipProps={{ multiline: true }}
                />
            </div>

            <Button size="md" className="mt-10" href="/food-order">Continue</Button>
        </div>
    )
}

export default SelectSeats

