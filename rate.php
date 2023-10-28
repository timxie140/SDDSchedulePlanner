<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Rate A Course</title>

</head>

<body>
<?php
    ini_set('display_errors', '0');

    include_once("./resource/CAS-1.4.0/CAS.php");
    ?>
    <main id="mainWrapper">
        <header id="headerBar">
            <h1 id="headerTitle"><a href="index.html">SchedulePlanner</a></h1>
            <nav>
                <ul>
                    <li id="navSelected"><a href="rate.php">Rate Courses</a></li>
                    <li><a href="view.php">View Courses</a></li>
                    <li><a href="analysis.php">Analyze Schedule</a> </li>
                    <li><?php
                        
                        phpCAS::client(CAS_VERSION_2_0,'cas.auth.rpi.edu',443,'/cas');
                        
                        phpCAS::setNoCasServerValidation();

                        if (phpCAS::isAuthenticated()){
                          echo "<p id='username'>".phpCAS::getUser() . "</p>";
                          echo "<a href='logout.php?source=rate.php'>, Logout</a>";
                        } else {
                          echo "<a href='login.php?source=rate.php'>Login</a>";
                        }
                        ?>
                        </li>
                </ul>
            </nav>
        </header>
        <div id="mainContentWrapper">
            <article id="rateClassInfo">
                <h2 class="rateHeader">Rate Your Class</h2>
                <?php 
                if (phpCAS::isAuthenticated()){
                    echo "<h3 id='enterCRN'>Search For a Class</h3>
                    <form id='rateForm' onsubmit='return false'>
                    <input type='text' id='crnRateInput' maxlength='5' placeholder='CRN' required>
                    <input type='submit' onclick='searchClass()' id='crnRateInputSearch' value='Search'>
                    </form>
                    <section id='classInfoPanel'>
                    </section>
                    ";

                } else {
                    echo "<a href='login.php?source=rate.php'><button id='loginToRate'>Login To Rate</button></a>";
                }
                ?>
            </article>
            <div id="verticalBar"></div>
            
            <article id="rateInputs">                
            </article>
        </div>
        <footer id="footerBar">
            <h4>Created by GitGoons</h4>
        </footer>
    </main>

    <script>

        var crn;


       

        function searchClass(){
            crn = document.getElementById("crnRateInput").value;
            var classInfoPanel = document.getElementById("classInfoPanel");
            var classRatePanel = document.getElementById("rateInputs");

            if (isNaN(crn) || crn.length!=5){
                classInfoPanel.innerHTML = "Not a Valid CRN";
                return
            }

            var info = [crn, "0", "0", "0","0"];
            var result
            $.ajax({
                type: "POST",
                data: {info: info},
                url:"resource/php/searchApi.php",
                success:function(msg){
                    if (msg.substring(0,1) != '[') {
                        classInfoPanel.innerHTML = "Class Not Found";
                        return
                    } else {
                        console.log(info);
                        console.log(msg);
                        var data = JSON.parse(msg);
                        
                    classInfoPanel.innerHTML = "<h3>CRN: "+crn+"</h3> <section id='rateClassDisplay'>"+
                    "<h2>"+data[0]["className"] + " - " + data[0]["prefix"] + " " + data[0]["number"]+"</h2>"+
                    "<h3>Teacher: "+ data[0]["faculty"]+ "</h3>"+
                    "<h3>Fall 2022</h3>" +
                    "<h3>Credits: "+data[0]["credit"]+"</h3>";

                    classRatePanel.innerHTML = "<h2 class='rateHeader'>Rating For</h2>"+
                        "<h3 id='rateSubHeader'>"+data[0]["className"] + " - " + data[0]["prefix"] + " " + data[0]["number"]+"</h3>"+
                        "<ul id='rateList' class='noStyleList'>"+
                            "<li><h2>Course Difficulty (Concepts)</h2></li>" +
                            "<li><h3>Exam Difficulty</h3></li>" +
                            "<li><input id='examDifficulty' class='rateRange' type='range' min='1' max='10' step='1' value='5'><label>5</label></li>" +
                            "<li><h3>Study Required (Hours/Week)</h3></li>" +
                            "<li><input id='studyDifficulty' class='rateRange' type='range' min='1' max='10' step='1' value='5'><label>5</label></li>"+
                            "<li><h3>Grading Difficulty</h3></li>"+
                            "<li><input id='gradeDifficulty' class='rateRange' type='range' min='1' max='10' step='1' value='5'><label>5</label></li>"+
                            "<li><h2>Workload Difficulty</h2></li>"+
                            "<li><h3>Workload Difficulty</h3></li>"+
                            "<li><input id='workload' class='rateRange' type='range' min='1' max='10' step='1' value='5'><label>5</label></li>"+
                            "<li><h3>Homework Difficulty</h3></li>"+
                            "<li><input id='hwDifficulty' class='rateRange' type='range' min='1' max='10' step='1' value='5'><label>5</label></li>"+
                        "</ul>"+
                        "<input type='button' onclick='sendRating()' id='rateSubmit' value='Submit'>";
                        
                        
                        //Apply the change handler to the newly created elements
                        $("#rateSubHeader").ready(function(){
                            $(".rateRange").change(function(){
                                $(this).next().text($(this).val());
                            })
                        })

                    }
                }
            })
        } 
        function sendRating(){
            var rcsid = document.getElementById("username").innerText;
            console.log(rcsid)
            var info = [$("#examDifficulty").val(),$("#gradeDifficulty").val(),
                $("#workload").val(),$("#hwDifficulty").val(),$("#studyDifficulty").val(),crn, rcsid];
                $.ajax({
                    type: "POST",
                    data: {info: info},
                    url:"https://websys-f22-team1.eastus.cloudapp.azure.com/schedulePlanner/resource/php/ratingApi.php",
                    success:function(msg){
                        console.log(msg);
                        alert("Rating Submitted")
                    }
                })
            } 

    </script>
</body>

</html>