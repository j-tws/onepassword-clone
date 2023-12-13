class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
