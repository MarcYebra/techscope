class CreateComments < ActiveRecord::Migration[7.2]
  def change
    create_table :comments do |t|
      t.string :comment, null: false

      t.belongs_to :user, null: false
      t.belongs_to :blog, null: false

      t.timestamps null: false
    end
  end
end
