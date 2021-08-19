class ApplicationController < ActionController::API
    include ::ActionController::Serialization
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
before_action :authorize

    private

    def invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: 400
    end

    def authorize
        if !session[:user_id]
            render json: { errors: ["Must be logged in to create a wish/group!"]}, status: :unauthorized
        else
            @current_user = User.find(session[:user_id])
        end
    end

    def render_not_found_response
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
    end
end

# if !session[:user_id]