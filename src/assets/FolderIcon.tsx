import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export interface CustomIconProps extends Omit<SvgIconProps, 'color'> {
  color?: string;
}


const FolderIcon: React.FC<CustomIconProps> = ({
  color,
  ...props
}) => {
  const filledColor = color === 'inherit' ? 'currentColor' : color;
  return (
    <SvgIcon  {...props}>
      <svg width="20" height="21" viewBox="0 0 20 21" fill={filledColor} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34146 0.00012207C5.51304 0.00012207 4.84146 0.671695 4.84146 1.50012C4.84146 2.32855 5.51304 3.00012 6.34146 3.00012H16.7578V12.4235C16.7578 13.2519 17.4294 13.9235 18.2578 13.9235C19.0863 13.9235 19.7578 13.2519 19.7578 12.4235V2.50012C19.7578 1.11941 18.6386 0.00012207 17.2578 0.00012207H6.34146ZM2 4.91476H13.122C14.2265 4.91476 15.122 5.81019 15.122 6.91476V18.0367C15.122 19.1413 14.2265 20.0367 13.122 20.0367H2C0.895432 20.0367 0 19.1413 0 18.0367V6.91476C0 5.81019 0.89543 4.91476 2 4.91476Z"
      />
      </svg>
    </SvgIcon>
  );
};

export default FolderIcon;
