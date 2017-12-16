class Api::CommentsController < ApplicationController
  before_action :set_post
  before_action :authenticate_user!, only: [:create]

  def index
    render json: @post.comments
  end

  def create
    comment = @post.comments.create(comment_params, user_id: current_user.id)
    if comment.save
      render json: comment
    else
      render json: { errors: comment.errors.full_messages.join(', ') }, status: 422
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:message)
  end
end
