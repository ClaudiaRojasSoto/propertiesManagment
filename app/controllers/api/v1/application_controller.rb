module Api
  module V1
    class ApplicationController < ActionController::API
      before_action :authenticate_request

      private

      def authenticate_request
        header = request.headers['Authorization']
        header = header.split.last if header
        decoded = JwtService.decode(header)

        if decoded
          @current_user = User.find(decoded[:user_id])
        else
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
  end
end
