import { Button, Select, SelectItem } from "@nextui-org/react"
import { v4 as uuidv4 } from 'uuid';

function CitySelect() {
    const cities = [
        {
            name: "Indore",
            state: "Madhya Pradesh",
            country: "India"
            , shortCountryCode: "in"
        },
        {
            name: "Bangalore",
            state: "Karnataka",
            country: "India"
            , shortCountryCode: "in"
        },
        {
            name: "Delhi",
            state: "Delhi",
            country: "India"
            , shortCountryCode: "in"
        },

        {
            name: "Maharashtra",
            state: "Mumbai",
            country: "India"
            , shortCountryCode: "in"
        },

        {
            name: "Ahmedabad",
            state: "Gujarat",
            country: "India"
            , shortCountryCode: "in"
        },




    ]
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-12 text-white">

            <h2 className="font-infinity text-4xl relative ">
                Select Your City
            </h2>


            <Select
                className="w-5/6 font-infinity font-regular text-lg"
                placeholder="Select Your City"
                size={"lg"}
            >
                {cities.map((city) => (
                    <SelectItem key={uuidv4()}>{city.name}</SelectItem>
                ))}
            </Select>

            <div className="flex flex-col gap-4 w-full items-center justify-center">

                {cities.map((city) => {
                    return <Button className={"w-5/6 text-infinity text-medium  text-lg h-16 bg-secondaryBlack text-white"} key={uuidv4()}>{city.name}</Button>
                })}
            </div>

        </div>
    )
}

export default CitySelect

