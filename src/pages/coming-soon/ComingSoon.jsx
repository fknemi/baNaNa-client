import { useRecoilValue, useRecoilState } from "recoil";
import MovieCard from "../../components/MovieCard";

import { actorsAtom, comingSoonAtom, nowPlayingAtom, promotionsAtom } from "../../statedrive/atoms";



function ComingSoon() {
    const comingSoon = useRecoilValue(comingSoonAtom);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-8 text-white">
                <h2 className="font-infinity text-4xl relative -left-20">Coming Soon</h2>
                <div className="flex items-center justify-center flex-col sm:flex-col sm:flex-wrap gap-4">
                    {comingSoon.map(({ Poster, Title, Rating, Rated, imdbID }) => {
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


        </>
    )
}

export default ComingSoon

