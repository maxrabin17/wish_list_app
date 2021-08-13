class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {user: user}, status: :ok
        else
            render json: {errors: ["Invalid Username and Password Confirmation"]}, status: :unauthorized
        end
    end
end
