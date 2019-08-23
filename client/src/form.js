import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import axios from 'axios'


const UpdateForm = (props) => {
    const[movies,setMovies] = useState({
        title: '',
        director: '',
        metascore: '',
        stars: []
});

const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  useEffect(()=>{
      fetchMovie(props.match.arams.id);

  }, [props.match.params.id])

const handleChange = e => setMovies({ ...Movie, [e.target.name]: e.target.value })

const handleStar = index => e => {
    setMovies({...Movie, stars: Movie.stars.map((str, starIndex)=> {
        if (starIndex === index) {
            return e.target.value
        } else {
            return star;
        }
    })})
}

return(
        <form>
            <input
            type="text"
            name="title"
            placeholder="title"
            value={movie.title}
            onChange={handleChange}
            />
            <input 
             type="text"
             name="director"
             placeholder="director"
             value={movie.director}
             onChange={handleChange}/>

            <input 
             type="text"
             name="metascore"
             placeholder="metascore"
             value={movie.title}
             onChange={handleChange}/>
            {/* <input 
             type="text"
             name="title"
             placeholder="title"
             value={movie.title}
             onChange={handleChange}/> */}

             {Movie.stars.map((starName, index)=> {
                 return <input type="text"
                                placeholder="star"
                                key={index}
                                value={starName}
                                onChange={handleStar(index)}
                                />
             })}
        </form>
    )
}

export default UpdateForm;