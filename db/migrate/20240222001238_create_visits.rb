class CreateVisits < ActiveRecord::Migration[7.1]
  def change
    create_table :visits do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :property, foreign_key: true
      t.datetime :scheduled_at
      t.text :comments

      t.timestamps
    end
  end
end
