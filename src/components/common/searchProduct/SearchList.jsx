import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import styles from "./SearchList.css";
import SearchResultItem from "./SearchResultItem";

const searchOptions = keys => ({
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [...keys]
});

const filterList = (list, filter) => {
  if (!filter) return list;

  const fuse = new Fuse(list, searchOptions(['body']));
  const result = fuse.search(filter);

  return result;
};

const fetchList = async url => {
  const res = await fetch(url);
  return await res.json();
  
};

const SearchList = ({ filter }) => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const url = 'https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product?_limit=3';

  useEffect(() => {
    fetchList(url).then(data => setList(data));
  }, [url]);

  useEffect(() => {
    setFilteredList(filterList(list, filter));
  }, [filter, list]);

  return (
    <div className= "popup">
    <ul>
      {filteredList.map(it => (
       <SearchResultItem item ={it} />
      ))}
    </ul>
    </div>
  );
};

export default SearchList;