class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :token, :string
    add_column :users, :uid, :string
    add_column :users, :avatar, :string
    add_column :users, :provider, :string
  end
end
