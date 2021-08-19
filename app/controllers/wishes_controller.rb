class WishesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        if session[:user_id]
            user = User.find(session[:user_id])
            wishes = {wishes: user.wishes}
            render json: wishes, status: :ok
        end
    end

    def create
        wish = @current_user.wishes.build(wish_params)
        if wish.save!
            render json: {wish: wish},status: :created
        end
    end

    def show
        wish = Wish.find(params[:id])
        render json: wish
    end

    def destroy
        if session[:user_id]
            # byebug
            wish = find_wish
            wish.destroy
            head :no_content
        end
    end

    def update
        wish = find_wish
        wish.update!(wish_params)
        render json: {wish: wish}, status: :accepted
    end
    
    private

    def find_wish
        Wish.find(params[:id])
    end

    def wish_params
        params.permit(:item, :price, :image_url, :user_id, :group_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
