require 'active_record'

# rubocop:disable Metrics/BlockLength
ActiveRecord::Schema[7.1].define(version: 20_240_222_003_114) do
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
    t.index ['admin_group_id'], name: 'index_users_on_admin_group_id'
    t.index ['email'], name: 'index_users_on_email', unique: true
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
