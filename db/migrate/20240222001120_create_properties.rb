class CreateProperties < ActiveRecord::Migration[7.1]
  def change
    create_table :properties do |t|
      t.string :title
      t.text :description
      t.string :location
      t.decimal :price
      t.string :status
      t.belongs_to :admin_group, foreign_key: true

      t.timestamps
    end
  end
end
