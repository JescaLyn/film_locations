json.array! @locations do |location|
  json.extract! location, :id, :title, :release_year, :locations, :production_company, :distributor, :director, :writer, :actor_1, :actor_2, :actor_3
end
