class UsersController < ApplicationController
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: {user: user}, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
