import React from 'react';
import styled from 'styled-components';

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
    onSearchClick,
    onSearchInputChange
}) => {
    return (
        <div>
            <span>Search</span>
            <SearchInputDiv>
                <input
                    type="text"
                    placeholder="Start typing..."
                    id=""
                    onChange={onSearchInputChange}
                />
            </SearchInputDiv>
            <SearchIcon
                onClick={onSearchClick}
            />
        </div>
    );
}

export default SearchBar;