import { useRecoilState } from "recoil";
import { nowPlayingAtom, movieAtom } from "../../statedrive/atoms";
import { useEffect } from "react";
import { useParams } from "react-router";
function Movie() {
    const { id } = useParams()
    const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingAtom)
    const [movie, setMovie] = useRecoilState(movieAtom)

    useEffect(() => {
     //   setMovie(nowPlaying.find(({ imdbID }) => imdbID === id))
       // console.log(movie)
       console.log(id)
       console.log(nowPlaying)
    }, [id])

    return (
        <>
        </>
    )
}

export default Movie

