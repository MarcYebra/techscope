class Api::V1::BlogsController < ApplicationController
  before_action :authorize_admin, only: [:create]

  def index 
    render json: Blog.all
  end

  def show 
    render json: Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :subhead, :body, :author)