

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analyze a Schedule!</title>
    <link rel="stylesheet" href="view.css">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
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
                    <li><a href="rate.php">Rate Courses</a></li>
                    <li ><a href = "view.php">View Courses</a></li>
                    <li id="navSelected"><a href="?">Analyze Schedule</a> </li>
                    <li><?php
                        
                        phpCAS::client(CAS_VERSION_2_0,'cas.auth.rpi.edu',443,'/cas');
                        
                        phpCAS::setNoCasServerValidation();
                        
                        if (phpCAS::isAuthenticated()) {
                          echo phpCAS::getUser() . ", ";
                          echo "<a href='logout.php?source=analysis.php'>Logout</a>";
                        } else {
                          echo "<a href='login.php?source=analysis.php'>Login</a>";
                        }
                        ?>
                        </li>
                </ul>
            </nav>
        </header>
        <div id="ccnContainer">
        <h1 id="analyzeHeader">Analyze Your Schedule</h1>
            <p id="enter6CRNs">Enter up to 6 CRNS</p>
            <!-- <form id="formStyle"> -->
                <div id="cnContainer">
                    <input type="text" class="ccnInput" maxlength="5" placeholder="CRN" id="input1"> 
                    <input type="text" class="ccnInput" maxlength="5" placeholder="CRN" id="input2"> 
                    <input type="text" class="ccnInput" maxlength="5" placeholder="CRN" id="input3"> 
                    <input type="text" class="ccnInput" maxlength="5" placeholder="CRN" id="input4"> 
                    <input type="text" class="ccnInput" maxlength="5" placeholder="CRN" id="input5"> 
                    <input type="text" class="ccnInput" maxlength="5" placeholder="CRN" id="input6"> 
                </div>
                <button id="submit-button"><span></span>Submit</button>
            <!-- </form> -->
        </div>

        <div id="difficultyContainer">
            <div id="avgDifficulty">Total Average Difficulty: </div>
            <div id="CumDifficulty">Cumulative Workload Difficulty: </div>
        </div>

        <div class="class_list" id="class_list">
            <h2 id="hidden_title"></h2>
        </div>
        <script type="text/javascript">
            var each_score = new Array();
            var course_count = 0;
            function GetVal(crn) {
                var count = 0;
                var result = new Array();
                if (crn.length != 0) {
                    result[count] = crn;
                }
                else {result[count] = '0';}
                count++;
                for (var i = 1; i < 5; i++) {
                    result[i] = '0';
                }
                return result;
            }
            function ajax_use(result) {
                $.ajax({
                    type: "POST",
                    data: {info: result}, 
                    url: "resource/php/searchApi.php",
                    success: function(msg){
                        console.log(msg);
                        if (msg.substring(0,1) != '[') {
                            console.log("invalid json format")
                            return;
                        }
                        var data = JSON.parse(msg);
                        for (var i = 0; i < 1; i++) {
                            var output = "<div class='bbclassContainer'>";
                                output += "<div class='classContainer'>";
                                output += "<div class='class'>";
                                    output += "<div class='classHeader'>";
                                        output += "<div class=\"className\">";
                                            output += "Class name: ";
                                            output += data[i]["className"];
                                        output += "</div>";
                                        output += "<div class=\"classTeacher\">";
                                            output += "Faculty: ";
                                            output += data[i]["faculty"];
                                        output += "</div>";
                                        output += "<div class=\"classReview\">";
                                            output += "prefix: ";
                                            output += data[i]["prefix"];
                                        output += "</div>";
                                    output += "</div>";
                                    output += "<div class=\"classContent\">";
                                        output += "<div class=\"classContent1\">";
                                            output += "Average Course Difficulty: ";
                                            // (study hours * (workload_length + workload_difficulty))
                                            var score = parseInt(data[i]["studyHours"]) * (parseInt(data[i]["workLoadLength"]) + parseInt(data[i]["workLoadDifficulty"]));
                                            each_score[course_count] = score;
                                            course_count++;
                                            output += score;
                                        output += "</div>";
                                        output += "<div class=\"classContent2\">";
                                            output += "Exam Difficulty: ";
                                            output += data[i]["examDifficulty"];
                                        output += "</div>";
                                        output += "<div class=\"classContent4\">";
                                            output += "Grading Difficulty: ";
                                            output += data[i]["gradingDifficulty"];
                                        output += "</div>";
                                        output += "<div class=\"classContent6\">";
                                            output += "Workload Difficulty: ";
                                            output += data[i]["workLoadDifficulty"]
                                        output += "</div>";
                                    output += "</div>";
                                output += "</div>";
                                output += "<div>";
                            output += "</div>";
                            $("#hidden_title").after(output);
                        }
                    }
                });
            }
            function timeOut() {
                var average_work = 0;
                for (var i = each_score.length - 1; i >= 0; i--) {
                    console.log(i + " " + each_score[i]);
                    average_work += each_score[i];
                }
                var total_html = "Cumulative Workload Difficulty: " + average_work;
                if (average_work <= 100) {
                    total_html += "(easy)";
                }
                else if (average_work >= 200) {
                    total_html += "(medium)";
                }
                else {
                    total_html += "(hard)";
                }
                average_work /= each_score.length;
                var average_html = "Total Average Difficulty: " + average_work;

                $("#avgDifficulty").text(average_html);
                $("#CumDifficulty").text(total_html);
                for (var i = each_score.length - 1; i >= 0; i--) {
                    each_score[i] = 0;
                }
                course_count = 0;
            }
            $("#submit-button").click(function(){
                $("#class_list").html("<h2 id=\"hidden_title\"></h2>");
                for (var i = 6; i > 0; i--) {
                    var temp_name = "#input" + i;
                    var crn = $(temp_name).val();
                    if (crn.length <= 0) {
                        console.log("intrigued");
                        continue;
                    }
                    var result = GetVal(crn);
                    ajax_use(result);
                    
                }
                setTimeout(timeOut, 500);
            });
        </script>
    </main>
</body>
</html>