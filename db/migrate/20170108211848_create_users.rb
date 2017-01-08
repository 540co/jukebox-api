class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_hash, null: false
      t.string :first_name
      t.string :last_name
      t.string :token, null: false
      t.timestamps
    end
  end
end
