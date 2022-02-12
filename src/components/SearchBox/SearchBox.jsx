import './SearchBox.css'

const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search-box'
        type=""
        placeholder={placeholder}
        onChange={handleChange}
    />
)

export default SearchBox
