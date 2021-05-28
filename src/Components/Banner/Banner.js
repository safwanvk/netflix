import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../utils/const'
import YouTube from 'react-youtube';

function Banner() {

    const [movie, setMovie] = useState()
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[0])
        })
    }, [])
    const handleMovie = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
        })
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    return (
        <div>
            <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
                <div className="content">
                    <h1 className="title">{movie ? movie.title : ''}</h1>
                    <div className="buttons">
                        <button onClick={()=>handleMovie(movie.id)} className="button">Play</button>
                        <button className="button">My list</button>
                    </div>
                    <h1 className="description">{movie ? movie.overview : ''}</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default Banner
