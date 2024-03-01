class UserMailer < ApplicationMailer
  default from: ENV['MAIL_DEFAULT_FROM'] || 'noreply@miaplicacion.com'

  def password_reset(user)
    @user = user
    @token = user.reset_password_token
    @reset_password_url = "http://localhost:8080/reset-password?token=#{CGI.escape(@token)}"
    mail(to: @user.email, subject: 'Instrucciones de restablecimiento de contraseña')
  end
end
