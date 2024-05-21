Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # config/settings配下のymlファイルで定義した値を参照
    origins Settings.front_domain

    resource "*",
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
