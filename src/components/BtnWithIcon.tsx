import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { CustomIconProps } from 'assets/FolderIcon';

interface BtnWithIconProps extends Omit<IconButtonProps, 'color'> {
  icon: React.ComponentType<CustomIconProps>;
  label: string;
  className?: string;
  onClick?: () => void;
  color?: string;
}

const BtnWithIcon: React.FC<BtnWithIconProps> = ({
  icon: Icon,
  className,
  label,
  onClick,
  color = 'inherit',   
  ...props
}) => {

  return (
    <IconButton style={{ color }} className={className} onClick={onClick} {...props}>
      <Icon color="inherit"/>
      <span>{label}</span>
    </IconButton>
  );
};

export default BtnWithIcon;
