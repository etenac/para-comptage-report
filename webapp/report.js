var report = (function (document, window) {
    
    'use strict';

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(doYourJob);

    function doYourJob() {
        performCalculation();
        drawChart();
    };

    
    var stats = {};
    
    var performCalculation = function() {
        var calls = [
            {"date":1500539788452,"duration":44, "reason":"?"},{"date":1500540608679,"duration":132, "reason":"?"}
            , {"date":1500541115588,"duration":386, "reason":"?"},{"date":1500542385440,"duration":343, "reason":"?"},{"date":1500542775160,"duration":69, "reason":"?"},
                {"date":1500556009612,"duration":179,"reason":"déplacement de rdv"},{"date":1500556095067,"duration":69,"reason":"infos"},{"date":1500557569844,"duration":132,"reason":"rdv"},{"date":1500557897558,"duration":105,"reason":"déplacement rdv"},{"date":1500563949620,"duration":37,"reason":"infos standard"},{"date":1500564333160,"duration":263,"reason":"infos pac"},{"date":1500565446724,"duration":326,"reason":"rdv tandem"},{"date":1500714724825,"duration":364,"reason":"rdv tandem"}
        ];
        
        // stats globales 
        stats["all"] = getStat(calls);
        stats["all"].reasons = {};
    
        var weekdayCalls = {};     // Trie par jour de semaine
        var nbCalls = calls.length;  
        for (let i = 0 ; i < nbCalls; i++) {
            let call = calls[i];
            
            // Regroupement des appels par jour de semaine
            var flooredDate = floorDate(call.date);
            var weekDay = flooredDate.getDay();
            if (weekdayCalls[weekDay] === undefined) {
                weekdayCalls[weekDay] = [];
            }
            weekdayCalls[weekDay].push(call);
            
            // Comptage des causes d'appel
            if (!stats["all"].reasons.hasOwnProperty(call.reason)) {
                stats["all"].reasons[call.reason] = 0;
            }
            stats["all"].reasons[call.reason] += 1;
        }
        
        // calculs par jour de semaine
        for(var propt in weekdayCalls) {
            stats[propt] = getStat(weekdayCalls[propt]);
        }
    }
    
    // Pour une liste d'appels, retourne un objet contenant mini, maxi, durée moyenne
    // et au tri par jour le nombre mini, maxi et moyen d'appels 
    var getStat = function(calls) {
        var stat = {
            "minTimeInSec":3600,
            "maxTimeInSec":0,
            "averageTimeInSec":0,
            "minNbCalls":3600,
            "maxNbCalls":0,
            "averageNbCalls":0
        };
        
        var nbCalls = calls.length;  
        var totalTimeInSec = 0;
        var dayCalls = {};
        
        for (let i = 0 ; i < nbCalls; i++) {
            var call = calls[i];
            
            var currentTime = call.duration;
            totalTimeInSec += currentTime;
            stat.minTimeInSec = Math.min(currentTime, stat.minTimeInSec);
            stat.maxTimeInSec = Math.max(currentTime, stat.maxTimeInSec);
            
            // Records sur le nombre d'appels au jour
            var flooredDate = floorDate(call.date);
            var day = flooredDate.toLocaleDateString("fr-FR");
            
            if (!dayCalls.hasOwnProperty(day)) {
                dayCalls[day] = 0;
            }
            dayCalls[day] += 1;
        }
        stat.averageTimeInSec = totalTimeInSec / nbCalls;

        // records des nombres d'appels
        for(var propt in dayCalls) {
            stat.minNbCalls = Math.min(dayCalls[propt], stat.minNbCalls);
            stat.maxNbCalls = Math.max(dayCalls[propt], stat.maxNbCalls);
        }
        stat.averageNbCalls = nbCalls / Object.keys(dayCalls).length;
        
        return stat;
    }
    
    // Arrondit une date donnée au jour
    var floorDate = function(datetime) {
        var newDate = new Date(datetime);
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        return newDate;
    }
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
        
        var dataReasons =  new google.visualization.DataTable();
        dataReasons.addColumn('string', 'Causes de l\'appel');
        dataReasons.addColumn('number', 'Nombre');
        for(var reason in stats["all"].reasons) {
            dataReasons.addRow([reason, stats["all"].reasons[reason]]);
        }

        // Instantiate and draw our chart, passing in some options.
        var chartReason = new google.visualization.PieChart(document.getElementById('chart_reason'));
        chartReason.draw(dataReasons, {title: 'Causes de l\'appel'});
        
        
        //// Affichage des graphes par jour de semaine
        var dataNbCalls = new google.visualization.DataTable();
        dataNbCalls.addColumn('string', 'Day');
        dataNbCalls.addColumn('number', 'Min');
        dataNbCalls.addColumn('number', 'Max');
        dataNbCalls.addColumn('number', 'Moyenne');
        // Set chart options
        var optionsNbCalls = {
            title:"Nombres d'appels",
            seriesType: 'bars',
            series: {2: {type: 'line'}},
            legend: { position: 'bottom' }
        };
        
        
        // Create the data table.
        var dataDuration = new google.visualization.DataTable();
        dataDuration.addColumn('string', 'Day');
        dataDuration.addColumn('timeofday', 'Min');
        dataDuration.addColumn('timeofday', 'Max');
        dataDuration.addColumn('timeofday', 'Moyenne');
        // Set chart options
        var optionsDuration = {
            title:"Durée d'appels",
            // vAxis: {gridlines : {count: 4}},
            seriesType: 'bars',
            series: {2: {type: 'line'}},
            legend: { position: 'bottom' }
        };
        
        for(var propt in stats) {
            if (propt === "all") {
                continue;
            }
            var stat = stats[propt] ;
            dataNbCalls.addRow([weekday[propt], stat.minNbCalls, stat.maxNbCalls, stat.averageNbCalls]);
            dataDuration.addRow([weekday[propt], formatTime(stat.minTimeInSec), formatTime(stat.maxTimeInSec), formatTime(stat.averageTimeInSec)]);
        }


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ComboChart(document.getElementById('chart_weekday_nb'));
        chart.draw(dataNbCalls, optionsNbCalls);
        
        // Instantiate and draw our chart, passing in some options.
        var chartDuration = new google.visualization.ComboChart(document.getElementById('chart_weekday_duration'));
        chartDuration.draw(dataDuration, optionsDuration);
        
    }

    var weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    
    // Zero padding helper function:
    var zeroPad = function(i) {
        return (i < 10 ? '0' : '') + i;
    };
    
    // Time formatting helper function
    var formatTime = function(sec){
        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec % 3600) / 60);
        var seconds = Math.floor((sec % 3600) % 60);
        
        return [hours, minutes, seconds, 0];
    }
    
    // Maj des indicateurs
    var updateView = function() {
        document.getElementById('nbCall').firstChild.nodeValue = nbCall;
        document.getElementById('totalTimeInSec').firstChild.nodeValue = formatTime(totalTimeInSec);
        document.getElementById('averageTimeInSec').firstChild.nodeValue = formatTime(averageTimeInSec);
        document.getElementById('minTimeInSec').firstChild.nodeValue = formatTime(minTimeInSec);
        document.getElementById('maxTimeInSec').firstChild.nodeValue = formatTime(maxTimeInSec);
    };
    
    return {
    };

})(document, window);