class User < ApplicationRecord
  belongs_to :admin_group, optional: true
  has_secure_password

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
