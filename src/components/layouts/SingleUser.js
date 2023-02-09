import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalState from '../../context/github/GithubContext';
import Spinner from './Spinner';
import { getUser } from '../../context/github/GitHubAction';

import { Link } from 'react-router-dom';

const SingleUser = () => {
  const { user, dispatch, loading } = useContext(GlobalState);
  const { login } = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      const userData = await getUser(login);
      dispatch({
        type: 'GET_USER',
        payload: userData,
      });
    };

    getUserData();
  }, [dispatch, login]);

  const {
    name,
    type,
    avatar_url,

    bio,

    html_url,

    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  console.log(user);

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="photos" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
