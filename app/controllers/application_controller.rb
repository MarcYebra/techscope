# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  # Define an example authorize_admin method
  def authorize_admin
    # Check if the current user is an admin (assuming you have a `current_user` method and `admin?` flag)
    unless current_user&.admin?
      render json: { error: "Not Authorized" }, status: :forbidden
    end
  end
end
