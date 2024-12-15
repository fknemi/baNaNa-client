import { Link } from "react-router";
import { Link as NextLink, Button } from "@nextui-org/react";
function Home() {

    return (
        <>
            <header className="flex flex-col gap-4 items-center justify-center">

                <Link className="font-infinity text-white text-4xl font-medium" href="/">
                    <span className="font-fabio">
                        L
                    </span>
                    umier
                </Link>

                <div className="relative flex flex-col gap-4">
                    <span className="absolute inline-flex w-72 h-64 blur-xl bg-darkBlue/10 -top-12 -right-2 rounded-full -rotate-45 z-50" />

                    <span className="absolute inline-flex w-24 h-12 blur-md bg-darkBlue/20 top-0 right-0" />

                    <div className="text-4xl font-infinity  flex flex-col items-center justify-center">

                        <h2 className="text-darkBlue font-medium">
                            Book Your Seat
                        </h2>
                        <h2 className="text-darkGray font-regular">
                            From Anywhere
                        </h2>

                    </div>

                    <div className="text-white font-infinity font-regular text-lg flex flex-row gap-8 items-center justify-center">
                        <Button
                            showAnchorIcon={false}
                            className={"bg-secondaryBlack text-lg"}
                            radius={"full"}
                            as={Link}
                            color="primary"
                            href="https://github.com/nextui-org/nextui"
                            variant="solid"
                        >
                            Book Now
                        </Button>
                        <Link href="#">
                            Sign Up
                        </Link>
                    </div>

                </div>

            </header>
































        </>
    )
}

export default Home
