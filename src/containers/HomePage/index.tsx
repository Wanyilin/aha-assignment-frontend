import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchPage from 'containers/SearchPage';
import TagsPage from 'containers/TagsPage';
import { PAGE } from 'types/pageEnum';
import NavBar from './NavBar';


const HomePage: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="homePage">
        <NavBar />
        <Routes>
          <Route
            path={PAGE.HOME}
            element={
              <SearchPage />
            }
          />
          <Route
            path={PAGE.SEARCH_RESULT}
            element={<SearchPage />}
          />
          <Route
            path={PAGE.TAGS}
            element={<TagsPage />}
          />
        </Routes>   
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
