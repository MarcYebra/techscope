class Blog < ApplicationRecord
  validates :title, presence: true
  validates :subhead, presence: true
  validates :body, presence: true
  validates :author, presence: true

  has_many :comments
end
