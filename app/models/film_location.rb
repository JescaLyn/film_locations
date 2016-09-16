class FilmLocation < ActiveRecord::Base
  def self.search_by(field, query)
    if field == "actor"
      self
        .where("actor_1 ILIKE :query1 OR actor_1 ILIKE :query2 OR
          actor_2 ILIKE :query1 OR actor_2 ILIKE :query2 OR
          actor_3 ILIKE :query1 OR actor_3 ILIKE :query2",
          query1: "#{query}%", query2: "% #{query}%")
    else
      self.where("#{field} ILIKE ? OR #{field} ILIKE ?", "#{query}%", "% #{query}%")
    end
  end

  def self.search_suggestions_by(field, query)
    if field == "actor"
      locations = self.search_by("actor", query)
      actors = locations.map { |el| el["actor_1"] } +
        locations.map { |el| el["actor_2"] } +
        locations.map { |el| el["actor_3"] }
      actors.uniq.select { |el| el }.slice(0, 20)
    else
      self
        .search_by(field, query)
        .map { |el| el[field] }
        .uniq
        .slice(0, 20)
    end
  end
end
