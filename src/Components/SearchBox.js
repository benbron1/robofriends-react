import React from 'react'

const SearchBox = ({searchChange})=> {
    return (
        <div>
            <input
            className='pa3 ba b--blue bg-lightest-green'
            placeholder='search'
            type='search'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;