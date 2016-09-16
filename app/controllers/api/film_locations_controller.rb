class Api::FilmLocationsController < ApplicationController
  def index
    @locations = FilmLocation
      .search_by(params[:search_field], params[:search_query])
  end
end
