import { Link } from "react-router";
import { Link as NextLink, Button } from "@nextui-org/react";
import MovieCard from "../../components/MovieCard";
import { useRecoilValue } from "recoil";
import { nowPlayingAtom } from "../../statedrive/atoms";

function Home() {
    const nowPlaying = useRecoilValue(nowPlayingAtom)

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











            <div className="flex flex-col items-center justify-center gap-8 text-white">
                <h2 className="font-infinity text-4xl relative -left-20">
                    Now Playing
                </h2>

                <div className="flex items-center justify-center flex-col sm:flex-col sm:flex-wrap gap-4">

                    {
                        nowPlaying.map(({ Poster, Title, Rating, Rated, imdbID }) => {
                            return <MovieCard key={imdbID} imdbID={imdbID} title={Title} poster={Poster} rating={Rating} rated={Rated} />
                        })
                    }
                </div>
            </div>




















        </>
    )
}

export default Home
