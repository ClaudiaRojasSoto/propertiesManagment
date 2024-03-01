class FrontendController < ApplicationController
  def index
    render file: Rails.root.join('app', 'assets', 'builds', 'index.html')
  end
end
