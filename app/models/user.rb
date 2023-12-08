class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :recoverable, :rememberable, :confirmable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable, :lockable

  has_many :records, dependent: :destroy
end
