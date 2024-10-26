class Api::V1::CommentsController < ApiController
  before_action :authenticate_user, only: [ :show, :create, :edit, :update, :destroy ]
  skip_before_action :verify_authenticity_token
end
