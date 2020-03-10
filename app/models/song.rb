class Song < ApplicationRecord

    ### ACTIVE STORAGE ### 
    has_one_attached :image
    has_one_attached :track 

    ### MVP2 SONGS ###
    validates :title, :description, :artist_id, presence: true
    belongs_to :user, foreign_key: :artist_id, class_name: "User"
end
