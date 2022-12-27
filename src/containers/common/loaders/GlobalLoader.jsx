import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

function GloabalLoader() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <MutatingDots
        height="100"
        width="100"
        color="#004186"
        secondaryColor="#12C9B9"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible
      />
    </div>
  );
}

export default GloabalLoader;