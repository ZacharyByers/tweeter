class Api::PostsController < ApplicationController
  before_action :set_user
  before_action :set_post, except: [:index, :create]

  def index
    render json: @user.posts
  end

  def show
    render json: @post
  end

  def create
    post = @user.posts.create(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors.full_messages.join(', ')}
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors.full_messages.join(', ')}
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_post
    @post = @user.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content)
  end
end
