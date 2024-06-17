const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TicketSalesModule", (m) => {
  const defaultEventTitle = "Sample Event";
  const defaultTicketPrice = 1000; // Price in Wei
  const defaultTotalTickets = 100;

  // const eventTitle = m.getParameter("eventTitle", defaultEventTitle);
  // const ticketPrice = m.getParameter("ticketPrice", defaultTicketPrice);
  // const totalTickets = m.getParameter("totalTickets", defaultTotalTickets);

  const ticketSales = m.contract("TicketSales", [defaultEventTitle, defaultTicketPrice, defaultTotalTickets]);

  return { ticketSales };
});
