module Api
  module V1
    class AdminGroupsController < ApplicationController
      before_action :set_admin_group, only: %i[show update destroy]

      def index
        @admin_groups = AdminGroup.all
        render json: @admin_groups
      end

      def show
        render json: @admin_group
      end

      def create
        @admin_group = AdminGroup.new(admin_group_params)
        if @admin_group.save
          render json: @admin_group, status: :created
        else
          render json: @admin_group.errors, status: :unprocessable_entity
        end
      end

      def update
        if @admin_group.update(admin_group_params)
          render json: @admin_group
        else
          render json: @admin_group.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @admin_group.destroy
        head :no_content
      end

      private

      def set_admin_group
        @admin_group = AdminGroup.find(params[:id])
      end

      def admin_group_params
        params.require(:admin_group).permit(:name)
      end
    end
  end
end
