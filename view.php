<!DOCTYPE html>
<html lang="en">
<head >
    <title>View Course!</title>
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
    <script>
        var welcome_judge = true;
    </script>
    <main id="mainWrapper">
        <header id="headerBar">
            <h1 id="headerTitle"><a href="index.html">SchedulePlanner</a></h1>
            <nav>
                <ul>
                    <li><a href="rate.php">Rate Courses</a></li>
                    <li id="navSelected"><a href="view.php">View Courses</a></li>
                    <li><a href="analysis.php">Analyze Schedule</a> </li>
                    <li><?php
                        
                        phpCAS::client(CAS_VERSION_2_0,'cas.auth.rpi.edu',443,'/cas');
                        
                        phpCAS::setNoCasServerValidation();
                        
                        if (phpCAS::isAuthenticated()) {
                          echo phpCAS::getUser() . ", ";
                          echo "<a href='logout.php?source=view.php'>Logout</a>";
                        } else {
                          echo "<a href='login.php?source=view.php'>Login</a>";
                        }
                        ?>
                        </li>
                </ul>
            </nav>
        </header>
        <section id="viewCourseContent">
            <h2 id="viewHeader">Find A Course</h2>
            <p id="enter6CRNs">Enter any of the following information</p>
            <ul class="noStyleList" id="viewInputList">
                <li><input type="text" id="title_input" class="ccnInput2" placeholder="Title"></li>
                <li><input type="text" id="crn_input" class="ccnInput2" maxlength="5" placeholder="CRN"></li>
                <li><input type="text" id="teacher_input" class="ccnInput2" placeholder="Teacher"></li>
                <li><input type="text" id="prefix_input" class="ccnInput2" maxlength="4" placeholder="Prefix"></li>
                <li><input type="text" id="number_input" class="ccnInput2" maxlength="4" placeholder="Number"></li>
                <li><input type="button" id="viewInputSearch" value="Search"></li>
            </ul>
            <ul class="noStyleList" id="info_list">
                <li id="ul_after_insert"></li>
            </ul>

        </section>
        <footer id="footerBar">
            <h4>Created by GitGoons</h4>
        </footer>
    </main>
    <script>
        function ajax_use(result) {
            $.ajax({
                type: "POST",
                data: {info: result}, 
                url: "resource/php/searchApi.php",
                success: function(msg){
                    console.log(msg);
                    if (msg.substring(0,1) != '[') {
                        return;
                    }
                    var data = JSON.parse(msg);
                    for (var i = data.length - 1; i >= 0; i--) {
                        var output = "<li>";
                        output += "<div class=\"bbclassContainer\">";
                            output += "<div class=\"classContainer\">";
                                output += "<div class=\"class\">";
                                    output += "<div class=\"classHeader\">";
                                        output += "<div class=\"className\">Class name: ";
                                            output += data[i]["className"];
                                        output += "</div>";
                                        output += "<div class=\"classTeacher\">Faculty: "
                                            output += data[i]["faculty"];
                                        output += "</div>";
                                        output += "<div class=\"classReview\">Credit: ";
                                            output += data[i]["credit"];
                                        output += "</div>";
                                        output += "<div class=\"classReview\">Level: ";
                                            output += data[i]["number"];
                                        output += "</div>";
                                    output += "</div>";
                                    output += "<div class=\"classContent\">";
                                        output += "<p>Exam Difficulty: ";
                                            output += data[i]["examDifficulty"];
                                        output += "</p>";
                                        output += "<p>Grading Difficulty: ";
                                            output += data[i]["gradingDifficulty"];
                                        output += "</p>";
                                        output += "<p>Workload Difficulty: ";
                                            output += data[i]["workLoadDifficulty"];
                                        output += "</p>";
                                        output += "<p>Workload Length: ";
                                            output += data[i]["workLoadLength"];
                                        output += "</p>";
                                        output += "<p>Study Hours Required: ";
                                            output += data[i]["studyHours"];
                                        output += "</p>";
                                    output += "</div>";
                                output += "</div>";
                            output += "</div>";
                        output += "</div>";
                        output += "<li>";
                        $("#ul_after_insert").after(output);
                    }
                }
            });
        }
        function GetVal() {
            var count = 0;
            var result = new Array();
            var title = $("#title_input").val();
            var crn = $("#crn_input").val();
            if (crn.length != 0) {
                result[count] = crn;
            }
            else {result[count] = '0';}
            count++;
            var teacher = $("#teacher_input").val();
            if (teacher.length != 0) {
                result[count] = teacher;
            }
            else {result[count] = '0';}
            count++;
            var subject = $("#prefix_input").val();
            if (subject.length != 0) {
                result[count] = subject;
            }
            else {result[count] = '0';}
            count++;

            var number_input = $("#number_input").val();
            if (number_input.length != 0) {
                result[count] = number_input;
            }
            else {result[count] = '0';}
            count++;

            if (title.length != 0) {
                result[count] = title;
            }
            else {result[count] = '0';}
            return result;
        }
        $("#viewInputSearch").click(function(){
            var result = GetVal();
            $("#info_list").html("<li id=\"ul_after_insert\"></li>");
            console.log(result);
            ajax_use(result);
        });
    </script>
    <?php
        if (isset($_GET['name'])) {
            echo "<script>";
                echo "$('#title_input').val('".$_GET['name']."');";
            echo "</script>";
        }
    ?>
</body>
</html>