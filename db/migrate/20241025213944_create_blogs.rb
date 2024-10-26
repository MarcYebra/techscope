class CreateBlogs < ActiveRecord::Migration[7.2]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.string :subhead, null: false
      t.string :body, null: false
      t.string :author, null: false

      t.timestamps null: false
    end
  end
end
