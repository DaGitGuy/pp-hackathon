import React from 'react';
import "./SearchForm.scss";
import axios from 'axios';

const SearchFrom = () => {


    

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const keyWordOne = form.keyWordOne.value;
        const keyWordTwo = form.keyWordTwo.value;
        const keyWordThree = form.keyWordThree.value;

        const queryString = keyWordOne + ' AND ' + keyWordTwo + ' AND ' + keyWordThree;

        axios
        .get(`https://newsapi.org/v2/everything?language=en&apiKey=422b7cbe105d4a05891042c546f5dd9e&pageSize=10&q=${queryString}`)
        .then(response => {
            console.log(response.data.articles);

            // axios
            // .post("http://localhost:5050/", {
            //     response: response.data.articles
            // }
            // )

        })
        .catch(err => {
            console.log(err);
        })

        form.reset();

    }


    return (
       <form className="search-form" onSubmit={handleSubmit}>
        <h2>Search For Specific News</h2>
            <label>
                Key Word: <input type="text" name="keyWordOne" />
            </label>
            <label>
                Key Word: <input type="text" name="keyWordTwo" />
            </label>
            <label>
                Key Word: <input type="text" name="keyWordThree" />
            </label>
            <button>Search</button>
       </form>
    );
};

export default SearchFrom;