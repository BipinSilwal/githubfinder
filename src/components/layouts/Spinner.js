import React from 'react';
import spinners from '../assets/loading.gif';

const Spinner = () => {
  return (
    <>
      <div className="w-100 mt-20 ">
        <img
          src={spinners}
          width={100}
          className="text-center mx-auto  "
          alt="Loading..."
        />
      </div>
    </>
  );
};

export default Spinner;
