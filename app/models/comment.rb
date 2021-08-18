class Comment < ApplicationRecord
    belongs_to :wish
    belongs_to :user
end
