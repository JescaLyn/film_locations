export const LocationConstants = {
  REQUEST_LOCATIONS: "REQUEST_LOCATIONS",
  RECEIVE_LOCATIONS: "RECEIVE_LOCATIONS"
};

export const requestLocations = filters => ({
  type: LocationConstants.REQUEST_LOCATIONS,
  filters
});

export const receiveLocations = locations => ({
  type: LocationConstants.RECEIVE_LOCATIONS,
  locations
});
