import React from 'react';
import { ProgressBar as PolarisProgressBar } from '@shopify/polaris';

const ProgressBar = ({ progress }) => {
  return <PolarisProgressBar tone='success' progress={progress} />;
};

export default ProgressBar;
