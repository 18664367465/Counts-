var adminSumCharts = 4;
var starterSumCharts = 2;
var workerSumCharts = 3;

function loadChartArea(userCategory) {

    var parent = document.getElementById("chartsArea");
    parent.innerHTML = "";

    switch (userCategory){
        //发起者
        case 1:
            for(var i = 1;i<=starterSumCharts;i++) {
                var div = document.createElement("div");
                div.id = "adminChart" + i.toString();
                div.style = "width: 600px;height: 400px;";
                parent.appendChild(div);

                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "js/DrawChart.js";
                parent.appendChild(script);
            }
            break;

        //工人
        case 2:
            for(var i = 1;i<=workerSumCharts;i++) {
                var div = document.createElement("div");
                div.id = "workerChart" + i.toString();
                div.style = "width: 600px;height: 400px;";
                parent.appendChild(div);

                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "js/DrawChart.js";
                parent.appendChild(script);
            }
            break;

        //管理员
        case 3:
            for(var i = 1;i<=adminSumCharts;i++) {
                var div = document.createElement("div");
                div.id = "adminChart" + i.toString();
                div.style = "width: 600px;height: 400px;";
                parent.appendChild(div);

                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "js/DrawChart.js";
                parent.appendChild(script);
            }
            break;
    }

    alert("chart加载完毕");
}