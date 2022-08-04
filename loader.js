 google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year 2022', 'Total Hits', 'Unique Users'],
         // ['January', 306373, 161249],
          ['February', 400408, 222449],
          ['March', 567226, 270108],
          ['April', 829986, 172812],
          ['May', 700430, 99743],
          ['June', 811656, 106589],
          ['July', 1604427, 170782],
          ['August', 360021, 41023]
        ]);

        var options = {
            chart: {
                title: 'Website Performance',
                subtitle: '',
            },
            bars: 'vertical',
            vAxis: { format: 'decimal' },
            colors: ['#dc3545', '#28a745']
        };
        var chart = new google.charts.Bar(document.getElementById('chart_div'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
        var btns = document.getElementById('btn-group');
        btns.onclick = function (e) {
            if (e.target.tagName === 'BUTTON') {
                options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
                chart.draw(data, google.charts.Bar.convertOptions(options));
            }
        }
    }

document.querySelector(".total_hits").innerHTML = 14486037+90615+129365+140041;
document.querySelector(".unique_hits").innerHTML = 4233440+11051+14016+15813;
document.querySelector(".today_hits").innerHTML = 140041;
