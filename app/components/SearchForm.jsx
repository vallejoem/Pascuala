import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Search:</label>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
