import React, { useEffect, useState } from 'react';
import { Card, Skeleton } from '@mui/material';
import { fetchTags } from 'api/fetchTags';
import { ApiSource } from 'config';
import { Tag } from 'types/api';
import { truncateString } from 'utils';

import 'styles/tagsPage.scss';



const TagsPage: React.FC = () => {
  const [tagsList, setTagsList] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTagsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTags(ApiSource.REAL);
        setTagsList(data);
      } catch (err) {
        console.error('Error fetching tags:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTagsData();
  }, []);

  return (
    <div className="tags-page">
      <p>Tags</p>
      <div className="tags-list">
        {tagsList.map(tag => (
          <Card className="tag-card" variant="outlined" key={tag.id}>
            <div className="tag-content">
              <span>{truncateString(tag.name, 8)}</span>
            </div>
            <div className="tag-text">
              <span className="tag-title no-wrap">{truncateString(tag.name, 15)}</span>
              <span className="tag-subtitle no-wrap">{tag.count} Questions</span>
            </div>
          </Card>
        ))}
        {isLoading && Array.from({ length: tagsList.length || 5 }).map((_, index) => (
          <Skeleton
            className="skeleton"
            animation="wave"
            key={index}
            sx={{ bgcolor: '#ffffff80' }}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
