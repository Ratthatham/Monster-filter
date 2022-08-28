import './search-box.css'
import {ChangeEvent } from 'react'

// const func: (a: string, b: number, c: boolean) => (boolean) = (a, b, c) => {}; //type function in TS

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};


const SearchBox = ({
    className, 
    placeholder, 
    searchChange,
}: SearchBoxProps) => (
    <input 
        className = {className}
        type='search' 
        placeholder={placeholder}
        onChange = {searchChange}
    />
    
)

export default SearchBox;