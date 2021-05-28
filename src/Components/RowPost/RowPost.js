import React, {useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios';
import {imageUrl} from '../../utils/const'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)

        }).catch(err=>{
            alert(err)
        })
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                     <img className={props.isSmall ? "small_poster" : "poster"}
                     src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
        </div>
    )
}

export default RowPost
