class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    private

    def invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: 400
    end
end
