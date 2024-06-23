import React from 'react';
import { Button } from '@mui/material';

import { User } from 'types/api';


const Follower: React.FC<User> = ({
  id,
  name,
  username,
  avater,
  isFollowing,
}) => {
  return (
		<div className="follower-item">
			<img src={avater} alt={`user-avater-${id}`} />
			<div className="follower-name">
				{name}
				<span>
					{`@${username}`}
				</span>
			</div>
			<Button className={`follower-btn ${isFollowing ? 'following-btn' : ''}`}>
				{isFollowing ? 'Following' : 'Follow'}
			</Button>
		</div>
  );
};

export default Follower;
