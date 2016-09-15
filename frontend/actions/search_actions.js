export const SearchConstants = {
  REQUEST_SUGGESTIONS: "REQUEST_SUGGESTIONS",
  RECEIVE_SUGGESTIONS: "RECEIVE_SUGGESTIONS"
};

export const requestSuggestions = search => ({
  type: SearchConstants.REQUEST_SUGGESTIONS,
  search
});

export const receiveSuggestions = suggestions => ({
  type: SearchConstants.RECEIVE_SUGGESTIONS,
  suggestions
});
