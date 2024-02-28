module Api
  module V1
    class UsersController < ApplicationController
      before_action :set_user, only: %i[show update destroy]

      def index
        @users = User.all
        render json: @users
      end

      def show
        render json: @user
      end

      def create
        @user = User.new(user_params)
        if @user.save
          render json: @user, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      def update
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @user.destroy
        head :no_content
      end

      def generate_password_reset_token!
        self.reset_password_token = SecureRandom.urlsafe_base64
        self.reset_password_token_expires_at = 24.hours.from_now
        save!
        # Aquí enviarías el correo electrónico al usuario con el token
        # Podrías hacer esto llamando a un método de instancia que maneje el envío del correo electrónico.
      end

      # Limpia el token y la fecha de expiración después de un restablecimiento exitoso
      def clear_password_reset_token!
        self.reset_password_token = nil
        self.reset_password_token_expires_at = nil
        save!
      end

      private

      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:name, :congregation, :email, :password, :password_confirmation, :role,
                                     :admin_group_id)
      end
    end
  end
end
