import React from 'react';



function Search({ search, setSearch }: any) {

    return (
        <>
            <div className="search">
                <input
                type="text"
                id="search"
                placeholder="Search 🔎"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </>
    );
}

export default Search;