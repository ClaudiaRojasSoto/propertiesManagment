module Api
  module V1
    class AuthenticationController < ApplicationController
      # before_action :authenticate_request, only: [:update, :destroy]
      # skip_before_action :verify_authenticity_token

      def login
        @user = User.find_by(email: params[:email])
        if @user&.authenticate(params[:password])
          token = JwtService.encode(user_id: @user.id)
          render json: { token:, user: user_response(@user) }, status: :ok
        else
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end

      def register
        @user = User.new(user_params)
        if @user.save
          token = JwtService.encode(user_id: @user.id)
          render json: { token:, user: user_response(@user) }, status: :created
        else
          render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @current_user.update(user_params)
          render json: { user: user_response(@current_user) }, status: :ok
        else
          render json: { error: @current_user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        if @current_user.destroy
          render json: { message: 'User successfully deleted.' }, status: :ok
        else
          render json: { error: 'Unable to delete user.' }, status: :unprocessable_entity
        end
      end

      private

      def authenticate_request
        # Tu lógica de autenticación aquí para establecer @current_user
      end

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :congregation, :role,
                                     :admin_group_id)
      end

      def user_response(user)
        {
          id: user.id,
          email: user.email,
          name: user.name,
          congregation: user.congregation,
          role: user.role,
          admin_group_id: user.admin_group_id
        }
      end
    end
  end
end
