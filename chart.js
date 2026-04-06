import Chart from "chart.js/auto";
let barChart;
let pieChart;

/**
 * Main function called from CommandCenter
 * @param {Object} data
 */
export function renderCharts(data) {
  drawBarChart(data);
  drawPieChart(data);
}

/**
 * BAR CHART
 */
function drawBarChart(data) {
  const ctx = document.getElementById("barChart").getContext("2d");

  if (barChart) barChart.destroy();

  barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Registrants", "Voters", "PP Voters"],
      datasets: [
        {
          label: "Count",
          data: [
            data.registrants,
            data.voters,
            data.ppVoters,
          ],
          backgroundColor: ["#3498db", "#2ecc71", "#f39c12"],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

/**
 * PIE CHART
 */
function drawPieChart(data) {
  const ctx = document.getElementById("pieChart").getContext("2d");

  if (pieChart) pieChart.destroy();

  pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Registrants", "Voters", "PP Voters"],
      datasets: [
        {
          data: [
            data.registrants,
            data.voters,
            data.ppVoters,
          ],
          backgroundColor: ["#3498db", "#2ecc71", "#f39c12"],
        },
      ],
    },
  });
}