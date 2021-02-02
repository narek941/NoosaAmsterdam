import React, { useState } from 'react';
import SearchList from './SearchList'
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import {useCustomDebounce} from '../../../hooks';

const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {

    width: '12ch',
    marginLeft: '30ch',

  },
}));

const SearchProduct = () => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const [filter, setFilter] = useState('');
  const [debouncedSetFilter] = useCustomDebounce(searchString,500);

  const onChangeSearch = e => {
    const { value } = e.target;
    setSearchString(value);
    debouncedSetFilter(value,500);

  }

  return (
    <div>
      <InputBase
        type="text"
        value={searchString}
        onChange={onChangeSearch}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }
        }
      />
      <SearchList filter={searchString} />
    </div>
  );
};

export default SearchProduct;