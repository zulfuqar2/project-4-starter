import React, { Component, useState } from 'react';
import './Favorites.css';


const Favorites=()=>{

    const [state,setState] = useState({
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ],
        showForm:false,
        form:{
            title: '',
            year:'',
            imdbId:'',
            poster:'',
            plot:'',
            rating:'',
            gehre:'',
            


        }

        

    
    })
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ccfe7fd7").then(data => data.json())
    .then((data) => {
           
console.log(data)
    });

        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {state.movies.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    
}
 
export default Favorites;