class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :congregation
      t.string :email, null: false, index: { unique: true }
      t.string :password_digest
      t.string :role
      t.belongs_to :admin_group, foreign_key: true

      t.timestamps
    end
  end
end
