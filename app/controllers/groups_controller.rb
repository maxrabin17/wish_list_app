class GroupsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def create
        group = Group.create!(group_params)
        render json: {group: group},status: :created
    end

    def index
        render json: Group.all
    end

    def show
        group = Group.find(params[:id])
        render json: group
    end

    private

    def group_params
        params.permit(:title)
    end
end
