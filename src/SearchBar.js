import {useContext} from 'react'
import { SearchContext } from './context/SearchContext'


    function SearchBar(props){
        const {term, handleSearch} = useContext(SearchContext)

            return (
                <form>
                    
                    <input ref={term} type='text' placeholder='Search here'/>
                    
                    <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
               
                </form>
            )
}

export default SearchBar