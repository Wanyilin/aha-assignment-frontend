import React from 'react';
import { useMediaQuery, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation } from 'react-router-dom';

import BtnWithIcon from 'components/BtnWithIcon';
import FolderIcon from 'assets/FolderIcon';
import logoImg from 'assets/images/logo.png';
import { PAGE } from 'types/pageEnum';
import useCustomNavigate from 'hooks/useCustomNavigate';



const THEME_COLOR = {
  UNACTIVE: 'var(--nav-secondary-color)',
  AVTIVE: 'var(--primary-color)',
};

const NavBar: React.FC = () => {
  const { toHomePage, toTags } = useCustomNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const currentPage = location.pathname;

  return (
    <div className="nav">
      {(isSmallScreen && currentPage !== PAGE.HOME) ? (
        <div className="nav-mobile">
          <IconButton
            aria-label="back"
            color="inherit"
            size="medium"
            onClick={toHomePage}
          >
            <ArrowBackIosIcon fontSize="medium" />
          </IconButton>
          <span>Home Page</span>
        </div>
      ) : (
        <>
          <div  className="nav-item logo">
            <img src={logoImg} alt="logoImg" />
          </div>
          <div className="nav-bar">
            <BtnWithIcon
              icon={FolderIcon}
              onClick={toHomePage}
              className="nav-btn"
              color={currentPage !== PAGE.TAGS ? THEME_COLOR.AVTIVE : THEME_COLOR.UNACTIVE}
              label="HOME"
            />
            <BtnWithIcon
              icon={FolderIcon}
              className="nav-btn"
              onClick={toTags}
              color={currentPage === PAGE.TAGS ? THEME_COLOR.AVTIVE : THEME_COLOR.UNACTIVE}
              label="TAGS"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
