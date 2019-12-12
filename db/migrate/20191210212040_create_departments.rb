class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departmentsz do |t|
      t.string :name
      t.string :description
  
    end
  end
end
