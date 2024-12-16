import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from "@tanstack/react-query";
import { nowPlayingAtom, movieAtom, showTimesAtom } from "../../statedrive/atoms";
import { useEffect, useId } from "react";
import { useParams } from "react-router";
import { Divider, Image, Chip, Button } from "@nextui-org/react";
function Movie() {
    const { id } = useParams()
    const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingAtom)
    const [showTimes, setShowTimes] = useRecoilState(showTimesAtom)
    const [movie, setMovie] = useRecoilState(movieAtom)

    const { isLoading, error, data } = useQuery({
        queryKey: ['showtimes'],

        queryFn: async () => {
            const res = await fetch('http://localhost:8080/get/movies/showtimes?title=The+Wild+Robot&location=Indore, Madhya Pradesh, India&language=en&shortCountryCode=in', {
                method: "get",
            });
            return res.json();
        },
        onSuccess: ({ showtimes }) => {
            console.log(showtimes)
            setShowTimes(showtimes)
        },
    })


    useEffect(() => {
        const filteredMovie = nowPlaying.find(({ imdbID }) => imdbID === id);
        setMovie(filteredMovie || {}); // Set an empty object if no movie is found
    }, [id, nowPlaying, setMovie]);

    if (!movie || Object.keys(movie).length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className="text-white flex flex-col items-start w-full h-full justify-center gap-4 my-20">
            <span className="w-screen sticky bottom-0" >

                <Button className="w-screen h-16 rounded-none text-xl text-white font-infinity bg-secondaryBlack fixed bottom-0">Book Tickets</Button>
            </span>
            <section className="flex flex-col items-center justify-center text-center w-full gap-4">
                <Image src={movie.Poster} width={200} height={300} className="aspect-auto" />

                <h1 className="text-3xl font-infinity">
                    {movie.Title}
                </h1>
                <h2 className="font-fabio text-darkGray uppercase text-center text-2xl">
                    {movie.Year}

                </h2>
            </section>

            <section className="flex flex-row gap-4 items-center justify-center w-full">
                <div className={"text-white flex flex-row gap-4 items-center justify-start"}>
                    <Chip className={`flex items-center justify-center ${movie.Rated === "N/A" ? "" : "bg-darkBlue/40 font-medium font-infinity text-white"} `}>{movie.Rated}</Chip>


                    <h3>
                        <span>
                        </span>

                        <span>
                            {movie.imdbRating === "N/A" ? "Not Rated Yet" : movie.imdbRating}
                        </span>

                    </h3>
                </div>


            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />

            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase">DATES AND TIMINGS</h2>

                <div>
                    {showTimes.map(({ day, date, theatres }, index) => {
                        if (!theatres) return null; // Handle missing theatres gracefully

                        // Extract unique timings using a Set
                        const timings = new Set();
                        theatres.forEach(({ showing }) => {
                            if (showing) {
                                showing.forEach(({ time }) => {
                                    if (time) {
                                        time.forEach((t) => timings.add(t));
                                    }
                                });
                            }
                        });

                        // Convert the Set to an array for mapping
                        const timingsArray = Array.from(timings);

                        return (
                            <div key={index}>
                                <h3>{`${date} ${day}`}</h3>
                                <div>
                                    {timingsArray.map((t, i) => (
                                        <Chip key={i} radius="sm" variant="bordered">
                                            {t}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>



            </section>


            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />
            <section className="flex flex-col gap-4 pl-4">

                <h2 className="font-fabio text-darkGray uppercase">DESCRIPTION</h2>
                <p className="text-pretty pr-2">
                    {movie.Plot}
                </p>

            </section>
            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />


            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase">CAST</h2>
                <div className="flex flex-row flex-wrap gap-4">
                    {movie.Actors.split(',').map((name) => {
                        return <h2 key={uuidv4()}>
                            {name}
                        </h2>
                    })}

                </div>
            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />

            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase">DIRECTORS</h2>
                <div className="flex flex-row flex-wrap gap-4">
                    {movie.Director.split(',').map((name) => {
                        return <h2 key={uuidv4()}>
                            {name}
                        </h2>
                    })}

                </div>
            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />


            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase">WRITERS</h2>
                <div className="flex flex-row flex-wrap gap-4">
                    {movie.Writer.split(',').map((name) => {
                        return <h2 key={uuidv4()}>
                            {name}
                        </h2>
                    })}

                </div>
            </section>
        </div>
    )
}

export default Movie

