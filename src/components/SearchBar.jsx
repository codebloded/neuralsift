import { styled } from '@mui/styles';
import { alpha } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    marginRight: "auto",
    // borderRadius: theme.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        maxWidth: "100px",
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchBar({ isDarkMode }) {
    return (

        <Search>
            <SearchIconWrapper>
                {isDarkMode ? <SearchIcon htmlColor="white" /> : < SearchIcon htmlColor="#10273f" />}
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                color="white"
            />
        </Search>

    )
}
