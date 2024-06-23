import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Button,
  CircularProgress,
  ImageList,
  ImageListItem,
  Skeleton,
  useMediaQuery,
} from '@mui/material';

import { User } from 'types/api';

interface SearchResultProps {
  usersList: User[] | [],
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number,
  currentPage: number,
  fetchUsersList: (page: number) => void;
  isLoading: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({
  usersList,
  setCurrentPage,
  totalPages,
  currentPage,
  fetchUsersList,
  isLoading,
}) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false); 
  const searchResultRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMoreUsers = currentPage < totalPages;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const userListCol = isSmallScreen ? 1 : 3;
  const userListItemGap = isSmallScreen ? 40 : 10;

  const loadMore = useCallback(async (): Promise<void> => {
    if (isMoreUsers && !isLoading) {
      try {
        await fetchUsersList(currentPage + 1);
        setCurrentPage((prevPage: number) => prevPage + 1);
      } catch (error) {
        console.error('Error loading more:', error);
      }
    }
  }, [currentPage, fetchUsersList, isLoading, isMoreUsers, setCurrentPage]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasScrolled && searchResultRef.current) {
        loadMore();
      }
    },
    [hasScrolled, loadMore, searchResultRef],
  );

  useEffect(() => {
    if (searchResultRef.current) {
      observer.current = new IntersectionObserver(handleIntersection, {
        rootMargin: '0px 0px 100px 0px',
      });
      observer.current.observe(searchResultRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleIntersection]);

  return (
    <div className="search-result" ref={searchResultRef}>
      <p>Result</p>
      <ImageList cols={userListCol} gap={userListItemGap}>
        {usersList.length > 0 && usersList.map((user) => (
          <ImageListItem key={user.id} className="user-image-item">
            <img
              src={user.avater}
              alt={user.name}
              loading="lazy"
              className="user-image"
            />
            <p className="user-title">{user.name}</p>
            <p className="user-subtitle">by {user.username}</p>
          </ImageListItem>
        ))}
        {isLoading && Array.from({ length: usersList.length || 5 }).map((_, index) => (
          <>
            <Skeleton
              className="skeleton-image"
              animation="wave"
              key={index}
              sx={{ bgcolor: '#ffffff80' }}
            />
            <Skeleton
              className="skeleton-bar"
              animation="wave"
              key={`${index}text`}
              sx={{ bgcolor: '#ffffff80' }}
            />
          </>
        ))}
      </ImageList>
      {(isMoreUsers) && (
        <Button className="search-btn"  onClick={loadMore} disabled={isLoading} variant="contained">
          {isLoading ? <CircularProgress size={24} /> : 'More'}
        </Button>
      )}
    </div>
  );
};

export default SearchResult;
