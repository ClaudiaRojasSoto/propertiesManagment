class AddQrCodeUrlToProperties < ActiveRecord::Migration[7.1]
  def change
    add_column :properties, :qr_code_url, :string
  end
end
