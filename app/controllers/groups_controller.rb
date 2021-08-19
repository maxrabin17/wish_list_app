class GroupsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def create
        group = Group.create!(group_params)
        render json: {group: group},status: :created
    end

    def index
        groups = Group.all
        render json: {groups: groups}, status: :ok
    end

    def show
        group = Group.find(params[:id])
        render json: group, include: ['wishes', 'wishes.group']
    end

    private

    def group_params
        params.permit(:title)
    end
end
