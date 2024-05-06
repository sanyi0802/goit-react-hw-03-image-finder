import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        visible={true}
        height={80}
        width={80}
        ariaLabel="loading-indicator"
        color="#00BFFF"
      />
    </div>
  );
};

export default Loader;
