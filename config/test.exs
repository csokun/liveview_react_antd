import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :lv_react, LvReactWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "9Acvk7v5wlSZb35HQLgE5u680B7DC9lT40RVpCjQI/A/eR1Bt/Qnzn92wTo1SdVT",
  server: false

# In test we don't send emails.
config :lv_react, LvReact.Mailer,
  adapter: Swoosh.Adapters.Test

# Disable swoosh api client as it is only required for production adapters.
config :swoosh, :api_client, false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
