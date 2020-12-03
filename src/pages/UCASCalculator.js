import React from 'react';
import UCAS from '../Components/UCAS/UCAS';
import { Card } from '../Components/UCAS/UCASElements';
import ScrollToTop from '../Components/ScrollToTop';

class UCASCalculator extends React.Component {
  render(){
    return (
      <div>
        <ScrollToTop/>
        <Card>
          <UCAS/>
          <UCAS/>
          <UCAS/>
          <UCAS/>
          <UCAS/>
        </Card>
      </div>
    );
  }
};

export default UCASCalculator;