class Api::V1::BlogsController < ApplicationController

  def index 
    render json: Blog.all
  end

  def show 
    render json: Blog.find(params[:id])
  end

end