import { Link } from "react-router-dom"; // Correct import for Link from react-router
import { Button, Tabs, Tab } from "@nextui-org/react";
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

    return (
        <>
            <header className="flex flex-col gap-4 items-center justify-center">
                <Link className="font-infinity text-white text-4xl font-medium" to="/">
                    <span className="font-fabio">L</span>umier
                </Link>

                <div className="relative flex flex-col gap-4">
                    <span className="absolute inline-flex w-72 h-64 blur-xl bg-darkBlue/10 -top-12 -right-2 rounded-full -rotate-45 z-50" />
                    <span className="absolute inline-flex w-24 h-12 blur-md bg-darkBlue/20 top-0 right-0" />

                    <div className="text-4xl font-infinity flex flex-col items-center justify-center">
                        <h2 className="text-darkBlue font-medium">Book Your Seat</h2>
                        <h2 className="text-darkGray font-regular">From Anywhere</h2>
                    </div>

                    <div className="text-white font-infinity font-regular text-lg flex flex-row gap-8 items-center justify-center">
                        <Button
                            className={"bg-secondaryBlack text-lg"}
                            radius={"full"}
                            as={Link}
                            color="primary"
                            to="/book-now"
                            variant="solid"
                        >
                            Book Now
                        </Button>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </header>

            <div className="flex flex-col items-center justify-center gap-8 text-white">
                <h2 className="font-infinity text-4xl relative -left-20">Now Playing</h2>
                <div className="flex items-center justify-center flex-col sm:flex-col sm:flex-wrap gap-4">
                    {nowPlaying.slice(0, 4).map(({ Poster, Title, Rating, Rated, imdbID }) => {
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
                <h2 className="font-infinity text-4xl relative -left-20">Coming Soon</h2>
                <div className="flex items-center justify-center flex-col sm:flex-col sm:flex-wrap gap-4">
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
                            return (
                                <div key={name} className="promotion-card">
                                    <h3>{name}</h3>
                                    <p>Category: {category}</p>
                                    <p>Valid Until: {validity}</p>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;

