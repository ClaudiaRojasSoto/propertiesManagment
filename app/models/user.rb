class User < ApplicationRecord
  belongs_to :admin_group, optional: true
  has_secure_password

  validates :name, :email, presence: true
  validates :email, uniqueness: true

  def generate_password_reset_token!
    self.reset_password_token = SecureRandom.urlsafe_base64
    self.reset_password_token_expires_at = 24.hours.from_now
    return unless save

    UserMailer.password_reset(self).deliver_now
    # Aquí enviarías el correo electrónico al usuario con el token
    # Podrías hacer esto llamando a un método de instancia que maneje el envío del correo electrónico.
  end

  # Limpia el token y la fecha de expiración después de un restablecimiento exitoso
  def clear_password_reset_token!
    self.reset_password_token = nil
    self.reset_password_token_expires_at = nil
    save!
  end
end
