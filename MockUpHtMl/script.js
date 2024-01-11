
		// Get the drawing context on the canvas 
		var myContext = document.getElementById( 
			"stackedChartID").getContext('2d'); 
		var myChart = new Chart(myContext, { 
			type: 'bar', 
			data: { 
				labels: ["20", "22.5","25","27.5", "30","32.5", 
					"35", "37.5","40", "50","60","62.5","65"], 
				datasets: [{ 
					label: 'Employer: K 73,500', 
					backgroundColor: "#1d0028", 
					data: [20,25,30,35,40,45,60,65,70,75,80,85,97], 
				}, { 
					label: 'Employee: K 52,500', 
					backgroundColor: "#8003b0", 
					data: [20,25,32,37,45,47,65,67,74,75,83,90,95], 
				}, { 
					label: 'Total Interest: K 244,313', 
					backgroundColor: "#edc2fd", 
					data: [22,30,35,40,45,50,70,74,80,85,90,100,115], 
				}], 
			}, 
			options: { 
				 
				scales: { 
					x: { 
						stacked: true, 
					}, 
					y: { 
						stacked: true 
					} 
				} 
			} 
		}); 
		

// Chart data
 const chartData = {
    datasets: [{
      data: [78, 22],
      backgroundColor: [' rgba(0, 255, 82, 1)', 'rgba(0, 255, 255, 0.23)'],
      hoverOffset: 4, // Spacing when hovering over segments
    }],
  };

  // Chart options
  const chartOptions = {
    cutout: '70%',
	cutoutPercentage: 30,
	elements: {
      arc: {
        radius: '40%', // Adjust this value for a smaller or larger radius
      },
    },
    responsive: true,
	plugins: {
    legend: false,
    tooltip: false,
    datalabels: {
        display: false,
      },
    },
  //  text: '78%',
  };

  // Create donut chart for the first square
  const chart1 = new Chart(document.getElementById('chart1'), {
    type: 'doughnut',
    data: chartData,
    options: chartOptions,
  });

  // Create donut chart for the second square
  const chart2 = new Chart(document.getElementById('chart2'), {
    type: 'doughnut',
    data: { ...chartData, datasets: [{ data: [95, 5], backgroundColor: [' rgba(0, 255, 82, 1)', 'rgba(0, 255, 255, 0.23)'] }] },
    options: chartOptions,
  });

  // Create donut chart for the third square
  const chart3 = new Chart(document.getElementById('chart3'), {
    type: 'doughnut',
    data: { ...chartData, datasets: [{ data: [59, 41], backgroundColor: [' rgba(0, 255, 82, 1)', 'rgba(0, 255, 255, 0.23)'] }] },
    options: chartOptions,
  });
  
    //----------------*progress bar JavaScript to update the percentage count
   const progressBar = document.getElementById('progressBar');
  const percentageText = document.getElementById('percentage');
  const slider = document.getElementById('slider');

  function updateProgressBar() {
    const value = slider.value;
    progressBar.style.width = value + '%';
    percentageText.textContent = value + '%';
  }

  // Initialize progress bar
  updateProgressBar();
  
   //----------------*progress bar JavaScript to update the percentage count

