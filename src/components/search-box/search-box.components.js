import './search-box.css'

const SearchBox = ({searchChange, className, placeholder}) => {
        return(
            <div >
                <input 
                    className = {className}
                    type='search' 
                    placeholder={placeholder}
                    onChange = {searchChange}
                />
            </div>
        )
}

export default SearchBox;