import React from 'react';
import Map from './map/map';
import SearchBarContainer from './search_bar/search_bar_container';

const App = ({ }) => (
   <div>
     <h1>Film Locations</h1>
     <SearchBarContainer />
     <Map />
   </div>
 );

 export default App;
