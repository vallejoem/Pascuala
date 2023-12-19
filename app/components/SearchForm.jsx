import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para realizar la búsqueda y llamar a la función onSearch
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
