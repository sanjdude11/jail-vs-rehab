// Chart.js for Comparison Chart
const ctx = document.getElementById('comparisonChart').getContext('2d');
const comparisonChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Reoffending Rate', 'Cost (in £)', 'Public Support'],
    datasets: [
      {
        label: 'Jail',
        data: [70, 40000, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Rehab',
        data: [30, 20000, 80],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => (typeof value === 'number' ? `${value}%` : value),
        },
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  }
});

// FAQ Interaction
const faqSummaries = document.querySelectorAll('details summary');
faqSummaries.forEach(summary => {
  summary.addEventListener('click', () => {
    faqSummaries.forEach(other => {
      if (other !== summary) {
        other.parentNode.open = false;
      }
    });
  });
});
