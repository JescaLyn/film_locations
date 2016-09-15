class FilmLocation < ActiveRecord::Base
  def self.search_by(field, query)
    self.where("#{field} ILIKE ?", "%#{query}%")
  end

  def self.search_suggestions_by(field, query)
    self
      .select(field)
      .where("#{field} ILIKE ? OR #{field} ILIKE ?", "#{query}%", "% #{query}%")
      .map { |el| el[field] }
      .uniq
  end
end
