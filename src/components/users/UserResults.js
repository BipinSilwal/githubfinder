import React, { useContext } from 'react';
import GlobalState from '../../context/github/GithubContext';
import Spinner from '../layouts/Spinner';
import UserItems from './UserItems';

const UserResults = () => {
  const { loading, users } = useContext(GlobalState);

  if (!loading) {
    return (
      <>
        <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItems key={user.id} {...user} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
};

export default UserResults;
