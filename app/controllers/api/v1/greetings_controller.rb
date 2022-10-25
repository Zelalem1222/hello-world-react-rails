module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.find(rand(1..6))
        render json: @greetings
      end
    end
  end
end
