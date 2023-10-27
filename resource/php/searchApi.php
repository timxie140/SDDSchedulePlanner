<?php
//------------------------------------------------------------------------------------------------------------
//input: array of 5 strings [crn(primary key), faculty(full name), prefix(e.g. ITWS), number(e.g. 1100), classname(e.g. Intro to ITWS)]
// e.g. ["52458", "0", "0", "0"] 0 prepresents empty search criteria, at least 1 needs to be non-empty

// output:
//     if success: return json in following format
        // {
        //     {crn: "52458", 
        //     faculty:"David H Bell",
        //     prefix: "ARCH", 
        //     number:"2150", 
        //     className:"The Ethos Of Architecture",
        //     credit: "3",
        //     examDifficulty:0,
        //     gradingDifficulty:0,
        //     workLoadLength:0,
        //     workLoadDifficulty:0,
        //     studyHours:0,
        //     },...
        // }
//     if fail: some error message that is not "success"

// When making call from javascript, please use the following format
// The Api is expecting an array named info
        // function send(){
        //     var info = ["52458", "David H Bell", "ARCH", "2150","The Ethos Of Architecture"];
        //     $.ajax({
        //         type: "POST",
        //         data: {info: info},
        //         url:"resource/php/searchApi.php",
        //         success:function(msg){
        //             console.log(msg);
        //         }
        //     })
        // } send();


//------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------
    // Global variables

    // crn(primary key), faculty(full name), prefix(e.g. ITWS), number(e.g. 1100), classname(e.g. Intro to ITWS)
    $RatingArray = $_POST['info']; //uncomment this line when using api
    // $RatingArray = array("52458", "David H Bell", "ARCH", "2150","The Ethos Of Architecture"); 
    //var_dump($RatingArray);


    //------------------------------------------------------------------------------------------------------------
    // verify array
    $allPass = true;
    $atLeastOnePosNumber = false;
    // test if 5 elements
    if( count($RatingArray) != 5 ){echo "wrong number input "; $allPass = false;} 

    // test if at least one element is not 0
    for($i = 0; $i < count($RatingArray); $i++){
        if($RatingArray[$i] != "0"){
            $atLeastOnePosNumber = true; break;
        }
    }
    if(!$atLeastOnePosNumber){echo "all 5 inputs are 0";}

    $allPass = $atLeastOnePosNumber;

    //------------------------------------------------------------------------------------------------------------
    // connect to database
    $dbOk = false;
  
    /* Create a new database connection object, passing in the host, username,
        password, and database to use. The "@" suppresses errors. */

    $db = new mysqli('localhost', 'phpmyadmin', 'g1password', 'websyslab7');
    
    if ($db->connect_error) {
        echo "Could not connect to the database";
    } else {
        $dbOk = true; 
    }

    
    //------------------------------------------------------------------------------------------------------------
    //sql stuff
    $return = array();
    // generate query
    // $testQuery ="SELECT * FROM classes c, sections s WHERE c.id = s.class_id and c.prefix = \"ITWS\"";
    $query = "SELECT * FROM classes c, sections s WHERE c.id = s.class_id";
    //for any search criteria that is not empty, add that to list
    if($RatingArray[0] != "0"){$query = $query . " and s.crn =". $RatingArray[0];} 
    if($RatingArray[1] != "0"){$query = $query . " and s.prof =". "\"" . $RatingArray[1] . "\"";} 
    if($RatingArray[2] != "0"){$query = $query . " and c.prefix =". "\"". $RatingArray[2]. "\"";}
    if($RatingArray[3] != "0"){$query = $query . " and c.level =". $RatingArray[3];}
    if($RatingArray[4] != "0"){$query = $query . " and c.class_name =". "\"" . $RatingArray[4]. "\"";}
    $query = $query .";";
    // echo $query;

    $result = $db->query($query);
    
    if($result -> num_rows == 0){echo "no results";}
    else{
        for ($i=0; $i < $result -> num_rows; $i++) {
            $record = $result -> fetch_assoc();
            $return_ele = array(
                "crn" => $record['crn'],
                "faculty" => $record['prof'],
                "prefix" => $record['prefix'], 
                "number" => $record['level'], 
                "className" => $record['class_name'],
                "credit" => $record['credit'],
                "examDifficulty" => $record['examDifficulty'],
                "gradingDifficulty" => $record['gradingDifficulty'],
                "workLoadLength" => $record['workLoadLength'],
                "workLoadDifficulty" => $record['workLoadDifficulty'],
                "studyHours" => $record['studyHours']
            );
            // var_dump($return_ele);
            array_push($return,$return_ele);
        }
    }
    
    echo(json_encode($return));
    // $result;
    // //run crn
    // $result = $db -> query('s')

    // // actual operation
    // if($allPass){

    //     //store data operation

    //     //print success message
    //     echo "success";
    // }
?>