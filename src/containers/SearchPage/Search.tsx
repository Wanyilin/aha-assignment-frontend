import React from 'react';
import { Button, Slider, TextField } from '@mui/material';

import { customSlider, customTextField } from './customSetting';
import 'styles/searchResult.scss';
import 'styles/variables.scss';

interface Marks {
  label: number,
  value: number
}

interface SearchContentProps {
  handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  fetchUsersList: (page?: number) => void,
  handleOnchangeSlider: (event: Event, newValue: number | number[]) => void,
  marks: Marks[],
  navigateToResult: () => void;
}

const Search: React.FC<SearchContentProps> = ({
  handleKeywordChange,
  fetchUsersList,
  handleOnchangeSlider,
  marks,
  navigateToResult,
}) => {
  const handleSearch = () => {
    navigateToResult();
    fetchUsersList();
  };

  return (
    <div className="search-content">
      <p>Search</p>
      <TextField
        className="text-field" 
        label="keyword"
        id="keyword"
        onChange={handleKeywordChange}
        sx={customTextField}
      />
      <div className="result-count-section">
        <span className="result-count-title">
        # of results per page 
        </span>
        <p className="result-count">
          30
          <span>results</span>
        </p>
        <Slider
          className="result-count-slider"
          marks={marks}
          step={null}
          min={3}
          max={100}
          onChange={handleOnchangeSlider}
          sx={customSlider}
        />
      </div>
      <div className="search-btn-section">
        <Button
          className="search-btn"
          variant="contained"
          onClick={handleSearch}
        >Search</Button>
      </div>

    </div>
  );
};

export default Search;
