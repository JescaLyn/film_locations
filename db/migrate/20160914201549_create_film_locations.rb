class CreateFilmLocations < ActiveRecord::Migration
  def change
    create_table :film_locations do |t|
      t.string :title, null: false
      t.string :release_year, null: false
      t.string :locations, null: false
      t.text :fun_facts
      t.string :production_company
      t.string :distributor
      t.string :director
      t.string :writer
      t.string :actor_1
      t.string :actor_2
      t.string :actor_3
      t.timestamps null: false
    end

    add_index :film_locations, :title
    add_index :film_locations, :release_year
  end
end
