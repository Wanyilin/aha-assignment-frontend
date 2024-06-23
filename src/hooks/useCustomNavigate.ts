import { useNavigate } from 'react-router-dom';

import { PAGE } from 'types/pageEnum';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const customNavigate = {
    toHomePage: () => navigate(PAGE.HOME),
    toSearchResult: (keyword: string = '', pageSize: number = 10) => 
      navigate(`${PAGE.SEARCH_RESULT}?keyword=${keyword}&pageSize=${pageSize}`),
    toTags: () => navigate(PAGE.TAGS),
  };

  return customNavigate as {
    toHomePage: () => void;
    toSearchResult: (keyword?: string, pageSize?: number) => void;
    toTags: () => void;
  };
};

export default useCustomNavigate;
