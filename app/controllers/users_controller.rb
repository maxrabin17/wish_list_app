class UsersController < ApplicationController
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: {user: user}, status: :created
    end

    def show
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: {user: user}, status: :ok
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
