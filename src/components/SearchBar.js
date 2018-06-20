import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchInputDiv = styled.div`
    width: 20rem;
    display: inline-block;
    margin: 0 1rem 0 1rem;
`

const SearchIcon = styled.a`
    position: absolute;
    margin-top: 2px;
    margin-left: 3px;
    width: 24px;
    height: 24px;
    border: solid 1px currentColor;
    border-radius: 100%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    &:before {
        content: "";
        position: absolute;
        top: 24px;
        left: 10px;
        height: 12px;
        width: 2px;
        background-color: currentColor;
    }
    &:hover {
        cursor: pointer
    }
`

const SearchBar = ({
    searchTerm,
    onSearchInputChange,
    onSearchClick
}) => {
    return (
        <form onSubmit={onSearchClick}>
            <span>Search</span>
            <SearchInputDiv>
                <input
                    value={searchTerm}
                    type="text"
                    placeholder="Start typing..."
                    id=""
                    onChange={onSearchInputChange}
                />
            </SearchInputDiv>
            <SearchIcon
                onClick={onSearchClick}
            />
        </form>
    );
}

SearchBar.propTypes = {
    searchTerm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSearchInputChange: PropTypes.func.isRequired,
    onSearchClick: PropTypes.func.isRequired
}

export default SearchBar;