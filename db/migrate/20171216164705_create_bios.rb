class CreateBios < ActiveRecord::Migration[5.1]
  def change
    create_table :bios do |t|
      t.string :profile_image, default: ''
      t.text :description, default: ''
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
