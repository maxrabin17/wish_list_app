class GroupsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create
        group = Group.create!(group_params)
        render json: {group: group},status: :created
    end

    def index
        groups = Group.all
        render json: {groups: groups}, status: :ok
    end

    

    private

    def group_params
        params.permit(:title)
    end
end
