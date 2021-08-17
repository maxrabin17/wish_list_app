class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {user: user, wishes: user.wishes}, status: :ok
        else
            render json: {errors: ["Invalid Username and Password Combination"]}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            render json: "Logout Successful"
        else
            render json: {errors: ["You are not logged in"]}, status: :unauthorized
        end
    end
end
