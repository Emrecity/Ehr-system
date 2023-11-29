import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/navigation';
import Foot from '../../components/footer';

const main = () => {
  return (
    <>
        <Nav/>
          <Outlet/>
        <Foot/>
    </>
  )
}

export default main





