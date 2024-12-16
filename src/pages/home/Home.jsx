import { Link, useNavigate } from "react-router-dom"; // Correct import for Link from react-router
import { Button, Tabs, Tab, Card, CardFooter, Image, } from "@nextui-org/react";
import MovieCard from "../../components/MovieCard";
import { useRecoilValue, useRecoilState } from "recoil"; // Use useRecoilState for setting state
import { actorsAtom, comingSoonAtom, nowPlayingAtom, promotionsAtom } from "../../statedrive/atoms";
import { useEffect, useState } from "react";

function Home() {
    const nowPlaying = useRecoilValue(nowPlayingAtom);
    const [comingSoon, setComingSoon] = useRecoilState(comingSoonAtom); // Fixed: use useRecoilState to set state
    const [promotions, setPromotions] = useRecoilState(promotionsAtom); // Fixed: use useRecoilState to set state
    const actors = useRecoilValue(actorsAtom);
    const [selectedPromotions, setSelectedPromotions] = useState([]); // Initialize as an empty array
    const [isMediaSm, setIsMediaSm] = useState(false)
    const navigate = useNavigate()
    const [currentPromotionCategory, setCurrentPromotionCategory] = useState("all");
    const [promotionCategories] = useState([
        "all",
        "cashback",
        "normal",
        "bank offers",
        "google wallet"
    ]);

    useEffect(() => {
        if (promotions && Array.isArray(promotions)) {
            if (currentPromotionCategory === "all") {
                setSelectedPromotions(promotions);
            } else {
                setSelectedPromotions(
                    promotions.filter(promotion => promotion.category === currentPromotionCategory)
                );
            }
        } else {
            setSelectedPromotions([]); // Ensure selectedPromotions is an empty array if promotions is invalid
        }
    }, [currentPromotionCategory, promotions]);


    useEffect(() => {
        if (window.matchMedia('@media (min-width: 640px)')) {
            setIsMediaSm(true)
        }
    }, [])

    return (
        <>
            <header className="flex flex-col gap-4 items-center justify-center">
                <Link className="font-infinity text-white text-4xl sm:text-5xl font-medium" to="/">
                    <span className="font-fabio">L</span>umier
                </Link>

                <div className="relative flex flex-col gap-4">
                    <span className="absolute inline-flex w-72 h-64 blur-xl bg-darkBlue/10 -top-12 -right-2 rounded-full -rotate-45 -z-50" />
                    <span className="absolute inline-flex w-24 h-12 blur-md bg-darkBlue/20 top-0 right-0" />

                    <div className="text-4xl font-infinity flex flex-col items-center justify-center sm:text-5xl">
                        <Link className="text-darkBlue font-medium" >Book Your Seat</Link>
                        <Link className="text-darkGray font-regular" href="">From Anywhere</Link>
                    </div>

                    <div className="text-white font-infinity font-regular text-lg flex flex-row gap-8 items-center justify-center">
                        <Button
                            className={"bg-secondaryBlack text-lg"}
                            radius={"full"}
                            as={Link}
                            color="primary"
                            onPress={() => navigate("/now-showing")}
                            variant="solid"
                        >
                            Book Now
                        </Button>
                        <Link to="/login">Sign Up</Link>
                    </div>
                </div>
            </header>








            <div className="flex flex-col items-center justify-center gap-8 text-white sm:w-full px-4">
                <h2 className="font-infinity text-4xl relative -left-20 sm:text-5xl sm:left-0">Now Playing</h2>
                <div className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:flex=wrap w-screen  sm:items-top pl-12 sm:w-auto">
                    {nowPlaying.slice(0, isMediaSm ? -1 : 4).map(({ Poster, Title, Rating, Rated, imdbID }) => {
                        return (
                            <MovieCard
                                key={imdbID}
                                imdbID={imdbID}
                                title={Title}
                                poster={Poster}
                                rating={Rating}
                                rated={Rated}
                            />
                        );
                    })}
                </div>
            </div>





            <div className="flex flex-col items-center justify-center gap-8 text-white sm:w-full px-4">
                <h2 className="font-infinity text-4xl relative -left-20 sm:text-5xl sm:left-0">Coming Soon</h2>
                <div className="flex items-center justify-center flex-col sm:flex-row gap-4  w-full sm:w-auto sm:items-top">
                    {comingSoon.slice(0, 4).map(({ Poster, Title, Rating, Rated, imdbID }) => {
                        return (
                            <MovieCard
                                key={imdbID}
                                imdbID={imdbID}
                                title={Title}
                                poster={Poster}
                                rating={Rating}
                                rated={Rated}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 text-white">
                <h2 className="font-infinity text-4xl relative -left-20">Promotions</h2>

                <div className="flex items-center justify-center flex-row gap-4">
                    <Tabs aria-label="Promotion Categories" onSelectionChange={key => setCurrentPromotionCategory(key)} isVertical={true}>
                        {promotionCategories.map(category => {
                            return <Tab key={category} title={category} />;
                        })}
                    </Tabs>

                    {selectedPromotions.length === 0 ? (
                        <div>No promotions available</div>
                    ) : (
                        selectedPromotions.map(({ name, category, validity }) => {
                            console.log(name)
                            return (<Card isFooterBlurred className="border-none" radius="lg">
                                <Image
                                    alt=""
                                    className="object-cover"
                                    height={200}
                                    src={`http://banana-server-production.up.railway.app/public/media/${name}.png`}
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80">{name}</p>
                                    <Button
                                        className="text-tiny text-white bg-black/20"
                                        color="default"
                                        radius="lg"
                                        size="sm"
                                        variant="flat"
                                    >
                                        {validity}
                                    </Button>
                                </CardFooter>
                            </Card>




                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;

