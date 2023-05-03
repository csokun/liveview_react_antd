defmodule LvReactWeb.ReactLive do
  use LvReactWeb, :live_view

  def mount(_params, _session, socket) do
    if connected?(socket), do: Process.send_after(self(), :employee_updated, 1000)
    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div id="employee-list" phx-hook="EmployeeList" phx-update="ignore"></div>
    """
  end

  def handle_info(:employee_updated, socket) do
    {:noreply,
     push_event(socket, "employee:updated", %{
       items:
         Jason.encode!([
           %{"key" => 1, "name" => "Mike", "age" => 32, "address" => "1- Downing Street"},
           %{"key" => 2, "name" => "John", "age" => 42, "address" => "1- Downing Street"}
         ])
     })}
  end
end
