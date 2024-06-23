import React, { useEffect, useState, memo } from 'react';
import { Tabs, Tab } from '@mui/material';

import Follower from 'components/Follower';
import 'styles/followers.scss';
import { fetchFriends, fetchUsers } from 'api/fetchUsers';
import { User } from 'types/api';

const Followers: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [friendsList, setFriendsList] = useState<User[]>([]);
  const [followersList, setFollowersList] = useState<User[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      if (tabIndex === 1) {
        const list = await fetchFriends();
        setFriendsList(list);
      } else {
        const { data } = await fetchUsers();
        setFollowersList(data);
      }
    };

    fetchList();
  }, [tabIndex]);

  const handleChange = async (_: React.SyntheticEvent, newTab: number) => {
    setTabIndex(newTab);
  };

  function a11yProps(index: number) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

  console.log(friendsList);
  return (
    <div className="follower-section">
      <Tabs variant="fullWidth" value={tabIndex} onChange={handleChange}>
        <Tab label="Followers" {...a11yProps(0)} />
        <Tab label="Following" {...a11yProps(1)} />
      </Tabs>

      <div className="follower-list">
        {tabIndex === 0 &&
          followersList.map((user) => (
            <Follower key={user.id} {...user} />
          ))}
        {tabIndex === 1 &&
          friendsList.map((user) => (
            <Follower key={user.id} {...user} />
          ))}
      </div>
    </div>
  );
};

export default memo(Followers);