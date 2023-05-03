defmodule LvReactWeb.ReactLive do
  use LvReactWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div id="employee-list" phx-hook="EmployeeList" phx-update="ignore"></div>
    """
  end
end
