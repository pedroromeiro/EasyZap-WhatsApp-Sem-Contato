import React from 'react';
import {createAppContainer} from 'react-navigation';

import MainRoutes from './routes/Main.routes';



const AppContainer = createAppContainer(MainRoutes)


export default function src() {
  return (
    <AppContainer/>
  );
}
