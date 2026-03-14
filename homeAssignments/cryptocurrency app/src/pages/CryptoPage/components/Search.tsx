import { useId, useEffect, useRef } from 'react';
import Button from '../../../components/Button';
import type { SearchProps } from '../../../types';

const Search = ({ handleChange, handleSearch, value }: SearchProps) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <form className='search-container' onSubmit={handleSubmit}>
            <label htmlFor={id}>Search Cryptocurrency:</label>

            <input
                ref={inputRef}
                id={id}
                className='search'
                type='text'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder='Search cryptocurrency...'
            />

            <Button variant='primary' type='submit'>
                Search
            </Button>
        </form>
    );
}

export default Search;
