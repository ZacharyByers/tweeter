class Api::UsersController < ApplicationController
  before_action :set_user, except: [:index]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
