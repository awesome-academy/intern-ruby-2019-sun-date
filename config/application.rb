require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module InternRuby2019SunDate
  class Application < Rails::Application
    config.load_defaults 5.2

    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.i18n.load_path += Dir[Rails.root.join("config", "locales", "**", "*.{rb,yml}")]
    config.i18n.available_locales = [:en, :vi]
    config.action_view.embed_authenticity_token_in_remote_forms = true
  end
end
