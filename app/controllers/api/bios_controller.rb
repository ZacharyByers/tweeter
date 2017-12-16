class Api::BiosController < ApplicationController
  before_action :set_user
  before_action :set_bio, except: [:create]

  def show
    render json: @bio
  end

  def create
    bio = @user.create_bio(bio_params)
    if bio.save
      render json: bio
    else
      render json: { errors: bio.errors.full_messages.join(', ') }, status: 422
    end
  end

  def update
    if @bio.update(bio_params)
      render json: @bio
    else
      render json: { errors: @bio.errors.full_messages.join(', ') }, status: 422
    end
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_bio
    @bio = @user.bio
  end

  def bio_params
    params.require(:bio).permit(:profile_image, :description)
  end
end
