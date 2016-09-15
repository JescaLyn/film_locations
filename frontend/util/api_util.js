export const fetchLocations = (success, filters) => {
  $.ajax({
    method: "get",
    url: "/api/film_locations",
    data: filters,
    success,
    error: () => console.log("error")
  });
};

export const fetchSuggestions = (success, search) => {
  $.ajax({
    method: "get",
    url: "/api/search_suggestions",
    data: search,
    success,
    error: () => console.log("error")
  });
};
