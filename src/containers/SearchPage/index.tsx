import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { PAGE } from 'types/pageEnum';
import { fetchUsers } from 'api/fetchUsers';
import { ApiSource } from 'config';
import { User } from 'types/api';
import useCustomNavigate from 'hooks/useCustomNavigate';

import Search from './Search';
import SearchResult from './SearchResult';
import Followers from './Followers';
import 'styles/searchResult.scss';

const marks = [
  {
    value: 3,
    label: 3,
  },
  {
    value: 18,
    label: 6,
  },
  {
    value: 33,
    label: 9,
  },
  {
    value: 48,
    label: 12,
  },
  {
    value: 63,
    label: 15,
  },
  {
    value: 100,
    label: 50,
  },
];

const SearchPage: React.FC = () => {
  const [usersList, setUsersList] = useState<User[] | []>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const { toSearchResult, toHomePage } = useCustomNavigate();
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    if (location.pathname === PAGE.HOME) {
      setUsersList([]);
    }
  }, [location.pathname]);
  
  const fetchUsersList = async (page: number | undefined = 1) => {
    setIsLoading(true);
    try {
      const { data, totalPages: totalPageFromBackend } =
        await fetchUsers(page, pageSize, keyword, ApiSource.REAL);
      setUsersList((preUsersList: User[] | []) => ([...preUsersList, ...data]));
      setTotalPages(totalPageFromBackend);
    } catch (err) {
      console.log(err)
      // setError('Failed to fetch results');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = event.target.value.trim();
    setKeyword(newKeyword);
  };

  const handleOnchangeSlider = (_: Event, newValue: number | number[]) => {
    const resultCount = marks.find(item => item.value === newValue);
    if (resultCount) 
      setPageSize(resultCount.label);
  };

  const navigateToResult = () => toSearchResult(keyword, pageSize);

  return (
    <div className="search-page">
    {location.pathname === PAGE.SEARCH_RESULT ? (
      <div>
        {!isSmallScreen && (
          <ArrowBackIosIcon onClick={toHomePage} className="back-btn" fontSize="medium" />
        )}
        <SearchResult
          usersList={usersList}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
          fetchUsersList={fetchUsersList}
          isLoading={isLoading}
        />
      </div>
    ) : (
      <Search
        handleOnchangeSlider={handleOnchangeSlider}
        fetchUsersList={fetchUsersList}
        handleKeywordChange={handleKeywordChange}
        navigateToResult={navigateToResult}
        marks={marks}
      />
    )}
    {isLargeScreen && (
      <Followers />
    )}
    </div>
  );
};

export default SearchPage;