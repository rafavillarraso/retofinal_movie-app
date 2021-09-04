import React from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from "../components/ButtonBackToHome";

const API_KEY ='a47155ae'

export class Detail extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {movie: {}}

    componentDidMount() {
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }

    _fetchMovie({id}) {
        fetch('http://www.omdbapi.com/?apikey=' + API_KEY + '&i=' + id)
            .then(res => res.json())
            .then(movie => {
                console.log({movie})
                this.setState({movie})
            })
    }

    _goBack(){
        window.history.back()
    }

    render()
    {
        const { Title, Poster, Actors, imdbRating, Plot } = this.state.movie
        return(
            <div className='container'>
                <div>
                    <div>

                        <ButtonBackToHome/>
                        <br/>
                        <br/>
                        <img alt="imagen-de-la-pelicula" src={Poster}/>

                    </div>
                    <div>
                        <h1 className='title is-size-3 is-size-5-mobile'>{Title}</h1>
                    </div>
                     <div>
                         <span className="icon">
                            <i className="fas fa-star has-text-info"></i>
                             {imdbRating}/10
                        </span>

                     </div>
                    <div className="tag">
                        <h3 >{Actors}</h3>
                    </div>
                    <div>
                        <p>{Plot}</p>
                    </div>
                 </div>
            </div>
        )
    }
}