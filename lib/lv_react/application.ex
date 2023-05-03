defmodule LvReact.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      LvReactWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: LvReact.PubSub},
      # Start Finch
      {Finch, name: LvReact.Finch},
      # Start the Endpoint (http/https)
      LvReactWeb.Endpoint
      # Start a worker by calling: LvReact.Worker.start_link(arg)
      # {LvReact.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: LvReact.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    LvReactWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
