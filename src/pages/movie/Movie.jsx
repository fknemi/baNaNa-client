import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from "@tanstack/react-query";
import { nowPlayingAtom, movieAtom, showTimesAtom } from "../../statedrive/atoms";
import { useEffect, useId } from "react";
import { useNavigate, useParams } from "react-router";
import { Divider, Image, Chip, Button } from "@nextui-org/react";
function Movie() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingAtom)
    const [showTimes, setShowTimes] = useRecoilState(showTimesAtom)
    const [movie, setMovie] = useRecoilState(movieAtom)

    const { isLoading, error, data } = useQuery({
        queryKey: ['showtimes'],

        queryFn: async () => {
            const res = await fetch('http://banana-server-production.up.railway.app/get/movies/showtimes?title=The+Wild+Robot&location=Indore, Madhya Pradesh, India&language=en&shortCountryCode=in', {
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
        <div className="text-white flex flex-col items-start w-full h-full justify-center gap-4 my-20 px-4 md:px-8">
            <span className="w-full sticky bottom-0">
                <Button className="w-full h-16 rounded-none text-xl text-white font-infinity bg-secondaryBlack fixed bottom-0 md:text-2xl lg:text-3xl" onPress={() => navigate(`/select-seats/${movie.imdbID}`)}>
                    Book Tickets
                </Button>
            </span>

            <section className="flex flex-col items-center justify-center text-center w-full gap-4">
                <Image src={movie.Poster} width={200} height={300} className="aspect-auto max-w-full" />
                <h1 className="text-3xl font-infinity text-center md:text-5xl lg:text-6xl">
                    {movie.Title}
                </h1>
                <h2 className="font-fabio text-darkGray uppercase text-center text-2xl md:text-3xl lg:text-4xl">
                    {movie.Year}
                </h2>
            </section>

            <section className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
                <div className="text-white flex flex-row gap-4 items-center justify-start">
                    <Chip className={`flex items-center justify-center sm:text-lg lg:text-xl${movie.Rated === "N/A" ? "" : "bg-darkBlue/40 font-medium font-infinity text-white"}`}>
                        {movie.Rated}
                    </Chip>

                    <h3>
                        <span>
                        </span>
                        <span className="sm:text-lg md:text-xl lg:text-2xl">
                            {movie.imdbRating === "N/A" ? "Not Rated Yet" : movie.imdbRating}
                        </span>
                    </h3>
                </div>
            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />

            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase md:text-lg lg:text-xl xl:text-2xl">DATES AND TIMINGS</h2>

                <div>
                    {showTimes.map(({ day, date, theatres }, index) => {
                        if (!theatres) return null;

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

                        const timingsArray = Array.from(timings);

                        return (
                            <div key={index}>
                                <h3>{`${date} ${day}`}</h3>
                                <div className="flex flex-wrap gap-2">
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
                <h2 className="font-fabio text-darkGray uppercase md:text-lg lg:text-xl xl:text-2xl">DESCRIPTION</h2>
                <p className="text-pretty pr-2 sm:text-lg md:text-xl lg:text-2xl">
                    {movie.Plot}
                </p>
            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />

            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase md:text-lg lg:text-xl xl:text-2xl">CAST</h2>
                <div className="flex flex-row flex-wrap gap-4 sm:text-lg md:text-xl lg:text-2xl">
                    {movie.Actors.split(',').map((name) => {
                        return <h2 key={uuidv4()}>{name}</h2>;
                    })}
                </div>
            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />

            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase md:text-lg lg:text-xl xl:text-2xl">DIRECTORS</h2>
                <div className="flex flex-row flex-wrap gap-4 sm:text-lg md:text-xl lg:text-2xl">
                    {movie.Director.split(',').map((name) => {
                        return <h2 key={uuidv4()}>{name}</h2>;
                    })}
                </div>
            </section>

            <Divider className="my-4 w-5/6 self-center bg-secondaryBlack" />

            <section className="flex flex-col gap-4 pl-4">
                <h2 className="font-fabio text-darkGray uppercase md:text-lg lg:text-xl xl:text-2xl">WRITERS</h2>
                <div className="flex flex-row flex-wrap gap-4 sm:text-lg md:text-xl lg:text-2xl">
                    {movie.Writer.split(',').map((name) => {
                        return <h2 key={uuidv4()}>{name}</h2>;
                    })}
                </div>
            </section>
        </div>

    )
}

export default Movie

