class StaticController < ApplicationController
  def index
    render file: '../javascript/packs/index.html'
  end
end
