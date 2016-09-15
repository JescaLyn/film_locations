class Api::SearchSuggestionsController < ApplicationController
  def index
    @suggestions = FilmLocation.search_suggestions_by(
      params[:search_field],
      params[:search_query]
    )
    render json: @suggestions
  end
end
