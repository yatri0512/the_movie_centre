import React, { useEffect } from "react";
import '../Styles/Genre.css';
const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {

    const fetchGenre = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=f982499e3a554ab1e87427f63fb08db6&language=en-US`);
        const { genres } = await data.json();
        setGenre(genres);
    };

    useEffect(() => {
        fetchGenre();
    });
    const CategoryAdd = (genres) => {
        setValue([...value, genres]); 
        setGenre(genre.filter((g) => g.id !== genres.id));
        setPage(1);
    };
    const CategoryRemove = (genres) => {
        setValue(value.filter((g) => g.id !== genres.id));
        setGenre([...genre, genres]);
        setPage(1);
    };
    return (
        <>
            <div className="btn-container">
                {value &&
                    value.map((Val) => {
                        const { id, name } = Val;
                        return (
                            <>
                                <div className="m-2" key={id}>
                                    <button
                                        className="btn1"
                                        onClick={() => CategoryRemove(Val)}
                                    >
                                        {name}
                                    </button>
                                </div>
                            </>
                        );
                    })}
                {genre && //if genre exist
                    genre.map((Gen) => {
                        const { id, name } = Gen;
                        return (
                            <>
                                <div className="m-2" key={id}>
                                    <button
                                        className="btn2"
                                        onClick={() => CategoryAdd(Gen)}
                                    >
                                        {name}
                                    </button>
                                </div>
                            </>
                        );
                    })}
            </div>
        </>
    )
}

export default Genre
