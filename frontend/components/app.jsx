import React from 'react';
import MapContainer from './map/map_container';
import SearchBarContainer from './search_bar/search_bar_container';

const App = ({ }) => (
   <div>
     <h1>Film Locations</h1>
     <SearchBarContainer />
     <MapContainer />
   </div>
 );

 export default App;
