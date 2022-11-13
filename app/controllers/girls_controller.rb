class GirlsController < ApplicationController
  def index
    girls = Girl.all

    render json: girls
  end

  def show
    girl = Girl.find(params[:id])

    render json: girl
  end

  def add
    girl = Girl.create(girl_params)

    render json: girl
  end

  private

  def girl_params
    params.permit(:name, :age)
  end
end
