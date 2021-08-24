class FallbackController < ApplicationController
    skip_before_action :authorize
    def index
        render file: 'public/index.html'
    end
end
