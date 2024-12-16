import { useEffect } from "react";
import { selectedSeatsAtom } from "../../statedrive/atoms";

function Invoice() {

    const [selectedSeats, setSelectedSeats] = useRecoilState(selectedSeatsAtom);

    useEffect(() => {
        console.log(selectedSeats)

    }, [])
    return (
        <div className="text-white font-infinity">
            {
                selectedSeats.map((seat) => {
                    console.log(seat)
                    return <div>
                        <h2>Seat
                            <span>{
                                seat.row
                            }{seat.id}</span>
                        </h2>
                    </div>
                })
            }
        </div>
    )
}

export default Invoice

