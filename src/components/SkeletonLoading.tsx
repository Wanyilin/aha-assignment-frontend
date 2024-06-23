import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLoading: React.FC = () => {
  return (
    <>
      <Skeleton sx={{ bgcolor: '#fffff80' }} variant="rectangular" width={400} height={200} />
      <Skeleton variant="text" width={400} height={40} />
    </>
  );
};

export default SkeletonLoading;
