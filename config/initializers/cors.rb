Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:8080' # Ajusta esto al puerto/dominio de tu aplicación React en desarrollo
    resource '*', headers: :any, methods: %i[get post patch put delete options head]
  end
end
