class Blogs < ApplicationRecord
  validates :title, presence: true
  validates :subheading, presence: true
  validates :body, presence: true
  validates :author, presence: true

  has_many :comments
end
