import React, { useState } from 'react'
import SeatPicker from 'react-seat-picker'

function SelectSeats() {
    const [loading, setLoading] = useState(false)
    const [selectedSeats, setSelectedSeats] = useState([]) // State to track selected seats
    const [totalPrice, setTotalPrice] = useState(0) // State to track the total price

    // Helper function to get seat price in rupees
    const getSeatPrice = (row) => {
        if (['A', 'B', 'C', 'D', 'E'].includes(row)) {
            return 1500 // 15$ converted to INR (example conversion rate)
        } else if (['F', 'G', 'H', 'I', 'J'].includes(row)) {
            return 2000 // 20$ converted to INR
        } else {
            return 2500 // 25$ converted to INR
        }
    }

    const addSeatCallback = ({ row, number, id }, addCb) => {
        setLoading(true)
        setTimeout(() => {
            console.log(`Added seat ${number}, row ${row}, id ${id}`)
            const seatPrice = getSeatPrice(row)
            const newTooltip = `Price: ₹${seatPrice}` // Tooltip with price in rupees
            addCb(row, number, id, newTooltip)

            // Update selected seats and total price
            setSelectedSeats((prevSeats) => [...prevSeats, { row, number, price: seatPrice }])
            setTotalPrice((prevPrice) => prevPrice + seatPrice)

            setLoading(false)
        }, 1500)
    }

    const removeSeatCallback = ({ row, number, id }, removeCb) => {
        setLoading(true)
        setTimeout(() => {
            console.log(`Removed seat ${number}, row ${row}, id ${id}`)
            const seatPrice = getSeatPrice(row)

            removeCb(row, number)

            // Remove the seat from selected seats and update total price
            setSelectedSeats((prevSeats) =>
                prevSeats.filter((seat) => !(seat.row === row && seat.number === number))
            )
            setTotalPrice((prevPrice) => prevPrice - seatPrice)

            setLoading(false)
        }, 1500)
    }

    // Theater layout: 11 rows and columns till H
    const rows = [
        // Group 1 (A - E)
        [
            { id: 'A1', number: 1, tooltip: 'Cost: ₹1500' },
            { id: 'A2', number: 2, tooltip: 'Cost: ₹1500' },
            { id: 'A3', number: 3, tooltip: 'Cost: ₹1500' },
            { id: 'A4', number: 4, tooltip: 'Cost: ₹1500' }
        ],
        [
            { id: 'B1', number: 1, tooltip: 'Cost: ₹1500' },
            { id: 'B2', number: 2, tooltip: 'Cost: ₹1500' },
            { id: 'B3', number: 3, tooltip: 'Cost: ₹1500' },
            { id: 'B4', number: 4, tooltip: 'Cost: ₹1500' }
        ],
        [
            { id: 'C1', number: 1, tooltip: 'Cost: ₹1500' },
            { id: 'C2', number: 2, tooltip: 'Cost: ₹1500' },
            { id: 'C3', number: 3, tooltip: 'Cost: ₹1500' },
            { id: 'C4', number: 4, tooltip: 'Cost: ₹1500' }
        ],
        [
            { id: 'D1', number: 1, tooltip: 'Cost: ₹1500' },
            { id: 'D2', number: 2, tooltip: 'Cost: ₹1500' },
            { id: 'D3', number: 3, tooltip: 'Cost: ₹1500' },
            { id: 'D4', number: 4, tooltip: 'Cost: ₹1500' }
        ],
        [
            { id: 'E1', number: 1, tooltip: 'Cost: ₹1500' },
            { id: 'E2', number: 2, tooltip: 'Cost: ₹1500' },
            { id: 'E3', number: 3, tooltip: 'Cost: ₹1500' },
            { id: 'E4', number: 4, tooltip: 'Cost: ₹1500' }
        ],

        // Space between groups
        [],

        // Group 2 (F - J)
        [
            { id: 'F1', number: 1, tooltip: 'Cost: ₹2000' },
            { id: 'F2', number: 2, tooltip: 'Cost: ₹2000' },
            { id: 'F3', number: 3, tooltip: 'Cost: ₹2000' },
            { id: 'F4', number: 4, tooltip: 'Cost: ₹2000' }
        ],
        [
            { id: 'G1', number: 1, tooltip: 'Cost: ₹2000' },
            { id: 'G2', number: 2, tooltip: 'Cost: ₹2000' },
            { id: 'G3', number: 3, tooltip: 'Cost: ₹2000' },
            { id: 'G4', number: 4, tooltip: 'Cost: ₹2000' }
        ],
        [
            { id: 'H1', number: 1, tooltip: 'Cost: ₹2000' },
            { id: 'H2', number: 2, tooltip: 'Cost: ₹2000' },
            { id: 'H3', number: 3, tooltip: 'Cost: ₹2000' },
            { id: 'H4', number: 4, tooltip: 'Cost: ₹2000' }
        ],
        [
            { id: 'I1', number: 1, tooltip: 'Cost: ₹2000' },
            { id: 'I2', number: 2, tooltip: 'Cost: ₹2000' },
            { id: 'I3', number: 3, tooltip: 'Cost: ₹2000' },
            { id: 'I4', number: 4, tooltip: 'Cost: ₹2000' }
        ],
        [
            { id: 'J1', number: 1, tooltip: 'Cost: ₹2000' },
            { id: 'J2', number: 2, tooltip: 'Cost: ₹2000' },
            { id: 'J3', number: 3, tooltip: 'Cost: ₹2000' },
            { id: 'J4', number: 4, tooltip: 'Cost: ₹2000' }
        ],

        // Space between groups
        [],

        // Group 3 (K)
        [
            { id: 'K1', number: 1, tooltip: 'Cost: ₹2500' },
            { id: 'K2', number: 2, tooltip: 'Cost: ₹2500' },
            { id: 'K3', number: 3, tooltip: 'Cost: ₹2500' },
            { id: 'K4', number: 4, tooltip: 'Cost: ₹2500' }
        ]
    ]

    return (
        <div className="flex flex-col w-screen items-center justify-center text-white ">

            {/* Screen in front */}
            <div>
            </div>

            {/* Displaying the text near the front */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3>Select Your Seats Below:</h3>
            </div>

            <SeatPicker
                rows={rows}
                addSeatCallback={addSeatCallback}
                removeSeatCallback={removeSeatCallback}
                loading={loading}
            />

            {/* Displaying the selected seats and total price */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h4>Selected Seats:</h4>
                <ul>
                    {selectedSeats.map((seat, index) => (
                        <li key={index}>
                            Row {seat.row}, Seat {seat.number} - ₹{seat.price}
                        </li>
                    ))}
                </ul>
                <h3>Total Price: ₹{totalPrice}</h3>
            </div>
        </div>
    )
}

export default SelectSeats

