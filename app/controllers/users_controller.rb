class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :index]
    
    def index
        render json: User.all, include: ['wishes', 'wishes.group']
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        # if session[:user_id]
            user = User.find(session[:user_id])
            render json: user, status: :ok
        # end
        
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end

