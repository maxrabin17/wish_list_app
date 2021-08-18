class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :index]
    
    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: {user: user, wishes: user.wishes}, status: :created
    end

    def show
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: {user: user, wishes: user.wishes}, status: :ok
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end

