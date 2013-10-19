class Product < ActiveRecord::Base
  validates :name, :description, :contact_email, presence: true

  scope :ordered, ->{ order("products.created_at asc") }
end
