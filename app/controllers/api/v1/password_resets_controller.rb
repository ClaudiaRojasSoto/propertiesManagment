module Api
  module V1
    class PasswordResetsController < ApplicationController
      # skip_before_action :verify_authenticity_token
      skip_before_action :authenticate_request, only: %i[forgot_password reset_password]

      def forgot_password
        user = User.find_by(email: params[:email])
        if user
          user.generate_password_reset_token!
          render json: { message: 'Instructions have been sent to your email.' }, status: :ok
        else
          render json: { error: 'Email not found' }, status: :not_found
        end
      end

      def reset_password
        user = User.find_by(reset_password_token: params[:token], reset_password_token_expires_at: ..Time.current)
        if user&.update(password_params)
          user.clear_password_reset_token!
          render json: { message: 'Your password has been reset successfully.' }, status: :ok
        else
          render json: { error: 'Invalid token or token expired' }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :congregation, :role,
                                     :admin_group_id)
      end

      # Asegúrate de permitir solo `password` y `password_confirmation` para el restablecimiento de contraseña
      def password_params
        params.require(:user).permit(:password, :password_confirmation)
      end
    end
  end
end
