# frozen_string_literal: true

module Api
  class GirlsController < Api::ApplicationController
    def index
      girls = Girl.all

      render json: { payload: { girls: girls } }
    end

    def show
      girl = Girl.find(params[:id])

      render json: { payload: { girl: girl } } 
    end
  end
end
