# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.
# rubocop:disable Metrics/BlockLength
ActiveRecord::Schema[7.1].define(version: 20_240_227_234_814) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'admin_groups', force: :cascade do |t|
    t.string 'name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'properties', force: :cascade do |t|
    t.string 'title'
    t.text 'description'
    t.string 'location'
    t.decimal 'price'
    t.string 'status'
    t.bigint 'admin_group_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'qr_code_url'
    t.index ['admin_group_id'], name: 'index_properties_on_admin_group_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'name'
    t.string 'congregation'
    t.string 'email', null: false
    t.string 'password_digest'
    t.string 'role'
    t.bigint 'admin_group_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_token_expires_at'
    t.index ['admin_group_id'], name: 'index_users_on_admin_group_id'
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end

  create_table 'visits', force: :cascade do |t|
    t.bigint 'user_id'
    t.bigint 'property_id'
    t.datetime 'scheduled_at'
    t.text 'comments'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['property_id'], name: 'index_visits_on_property_id'
    t.index ['user_id'], name: 'index_visits_on_user_id'
  end

  add_foreign_key 'properties', 'admin_groups'
  add_foreign_key 'users', 'admin_groups'
  add_foreign_key 'visits', 'properties'
  add_foreign_key 'visits', 'users'
end
# rubocop:enable Metrics/BlockLength
