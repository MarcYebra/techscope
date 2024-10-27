# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  respond_to :json

  GET /resource/sign_in
  def new
    super
  end

  POST /resource/sign_in
  def create
    super
  end

  DELETE /resource/sign_out
  def destroy
    super
  end

  private

  def respond_with(resource, _opts = {})
    render json: resource, status: :ok 
  end

  def respond_to_on_destroy
    head :no_content
  end

  def respond_with_error
    render json: {error: 'Invalid credentials'}, status: :unauthorized
  end

end
