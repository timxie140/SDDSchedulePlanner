<?php
//------------------------------------------------------------------------------------------------------------
// input: array[7] [int,int,int,int,int,int,string] int accepcting range = 0-10
// Exam difficulty, Grading difficulty, Workload, Homework Difficulty, Study Hours, CRN, RCSID

// output:
//     if success and user doesn't have existing record: "success"
//     if success and user has existing record: "exist success"
//     if fail: some error message that is not "success"



// When making call from javascript, please use the following format
// The Api is expecting an array named info

// function send(){
//     var info = [1,1,1,1,1,52458,'hem4'];
//     $.ajax({
//         type: "POST",
//         data: {info: info},
//         url:"resource/php/ratingApi.php",
//         success:function(msg){
//             console.log(msg);
//         }
//     })
// } send();

//------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------
    // Global variables
    $RatingArray = $_POST['info']; //uncomment this line when using api
    // echo $RatingArray;
    // $RatingArray = array(10, 10, 10, 10, 9, 54540, "hem10"); // Exam difficulty, Grading difficulty, Workload, Homework Difficulty, Study Hours, CRN, RCSID
    $crn = $RatingArray[5];
    $rcsId = $RatingArray[6];
    $existingUserArr; //if the user has a existing review on this class, used to update rating.
    //var_dump($RatingArray);


//------------------------------------------------------------------------------------------------------------
    // check if a record already exist, if so remove old record and use the new rating
    // e.g. INSERT -> INSERT INTO `review` (`review_id`, `rcs_id`, `class`, `review1`, `review2`, `review3`, `review4`, `review5`) VALUES ('1', 'hem4', '52458', '1', '2', '3', '4', '5');
    // e.g. CHECK EXIST( 1 if exist, 0 if not) -> SELECT COUNT(1) FROM review WHERE rcs_id = 'hem4' AND class = 52458;
    function check_exist_record(){
        global $crn, $rcsId, $db, $RatingArray,$existingUserArr;
        $query = "SELECT COUNT(1) FROM review WHERE rcs_id = '". $rcsId . "' AND class = " . strval($crn);
        // echo $query;
        $result = $db -> query($query);
        $exist = $result -> fetch_assoc()['COUNT(1)']; 
        
        //if info already exist, remove previous data, replace with new data
        if($exist == "1"){
            //get old rating
            $get_review_query = "SELECT review1, review2, review3, review4, review5 FROM review WHERE rcs_id = '". $rcsId . "' AND class = " . strval($crn);
            $get_review_result = $db -> query($get_review_query);
            $get_review_data = $get_review_result -> fetch_assoc();
            $existingUserArr = [$get_review_data['review1'],$get_review_data['review2'],$get_review_data['review3'],$get_review_data['review4'],$get_review_data['review5']]; // arr of old rating

            //replace old rating with new rating
            $update_query = "UPDATE review SET 
            review1 = " .strval($RatingArray[0]) .
            ", review2 = "  .strval($RatingArray[1]) .
            ", review3 = "  .strval($RatingArray[2]) .
            ", review4 = "  .strval($RatingArray[3]) .
            ", review5 = "  .strval($RatingArray[4]) .
            " WHERE rcs_id = '". $rcsId . "' AND class = " . strval($crn);

            if ($db->query($update_query) === TRUE) {
                // echo $update_query;
                return true;
            } else {
                echo "Error updating record: " . $db->error; $allPass = false;
            }
        }
        //if info doesn't exist, add review to database 
        //INSERT INTO `review` (`review_id`, `rcs_id`, `class`, `review1`, `review2`, `review3`, `review4`, `review5`) VALUES (NULL, 'hem5', '52458', '1', '1', '1', '1', '1');
        else{
            $insertQuery = "INSERT INTO `review` (`review_id`, `rcs_id`, `class`, `review1`, `review2`, `review3`, `review4`, `review5`) VALUES (NULL, '" . 
                $rcsId. "',".
                strval($crn). ",".
                strval($RatingArray[0]) .",".
                strval($RatingArray[1]) .",".
                strval($RatingArray[2]) .",".
                strval($RatingArray[3]) .",".
                strval($RatingArray[4]) .")";
            
            // echo $insertQuery;
            if ($db->query($insertQuery) === TRUE) {
                return false;
            } else {
                echo "Error updating record: " . $db->error; $allPass = false;
            }
            
        }
    } 


    
//------------------------------------------------------------------------------------------------------------
    // verify array
    $allPass = true;

    // test if 7 elements
    if( count($RatingArray) != 7 ){echo "wrong number input "; $allPass = false;} 

    // test if allall input are >= 0 & < 11
    for($i = 0; $i < 5; $i++){
        if($RatingArray[$i] > 10 || $RatingArray[$i]  < 0){
            echo "incorrect input"; $allPass = false; break;
        }
    }

//------------------------------------------------------------------------------------------------------------
    // actual operation
    if($allPass){


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
        // sql stuff, store data operation
        $sql1;
        $query = "SELECT * FROM sections WHERE sections.crn = " . strval($crn);
        $result = $db->query($query);
        if($result -> num_rows == 0){echo "wrong crn"; $allPass = false;}
        else{
            //data before updating
            $record = $result -> fetch_assoc();
            $numOfSubmission = $record['numOfRatingSubmission'];
            $rate1 = $record['examDifficulty'];
            $rate2 = $record['gradingDifficulty'];
            $rate3 = $record['workLoadLength'];
            $rate4 = $record['workLoadDifficulty'];
            $rate5 = $record['studyHours'];

            //check if exist
            $hasExistingData = (check_exist_record());
            if($hasExistingData){
                //update data if there is previous data
                $rateDiff1 = $RatingArray[0] - $existingUserArr[0];
                $rateDiff2 = $RatingArray[1] - $existingUserArr[1];
                $rateDiff3 = $RatingArray[2] - $existingUserArr[2];
                $rateDiff4 = $RatingArray[3] - $existingUserArr[3];
                $rateDiff5 = $RatingArray[4] - $existingUserArr[4];

                $rate1 = ($rate1 * $numOfSubmission + $rateDiff1) / ($numOfSubmission);
                $rate2 = ($rate2 * $numOfSubmission + $rateDiff2) / ($numOfSubmission);
                $rate3 = ($rate3 * $numOfSubmission + $rateDiff3) / ($numOfSubmission);
                $rate4 = ($rate4 * $numOfSubmission + $rateDiff4) / ($numOfSubmission);
                $rate5 = ($rate5 * $numOfSubmission + $rateDiff5) / ($numOfSubmission);
                
                echo "exist ";
                // print_r($existingUserArr);
                // echo "<br>\n";
                // print_r($RatingArray);
                // echo "<br>\n";
                $sql1 = "UPDATE sections SET 
                    examDifficulty = " . strval($rate1) . 
                " ,  gradingDifficulty= " . strval($rate2) . 
                " , workLoadLength = " . strval($rate3) .
                " , workLoadDifficulty = " . strval($rate4) .
                " , studyHours = " . strval($rate5) .  
                " , numOfRatingSubmission = " . strval($numOfSubmission) .
                " WHERE sections.crn = " . strval($RatingArray[5]);
                ;

            }else{
                //update data if no previous data
                $rate1 = ($rate1 * $numOfSubmission + $RatingArray[0]) / ($numOfSubmission + 1);
                $rate2 = ($rate2 * $numOfSubmission + $RatingArray[1]) / ($numOfSubmission + 1);
                $rate3 = ($rate3 * $numOfSubmission + $RatingArray[2]) / ($numOfSubmission + 1);
                $rate4 = ($rate4 * $numOfSubmission + $RatingArray[3]) / ($numOfSubmission + 1);
                $rate5 = ($rate5 * $numOfSubmission + $RatingArray[4]) / ($numOfSubmission + 1);

                $sql1 = "UPDATE sections SET 
                    examDifficulty = " . strval($rate1) . 
                " ,  gradingDifficulty= " . strval($rate2) . 
                " , workLoadLength = " . strval($rate3) .
                " , workLoadDifficulty = " . strval($rate4) .
                " , studyHours = " . strval($rate5) .  
                " , numOfRatingSubmission = " . strval($numOfSubmission+1) .
                " WHERE sections.crn = " . strval($RatingArray[5]);
                ;
            }
            


            
            // echo $sql1;
            //excute update query
            if ($db->query($sql1) === TRUE) {
                // echo $sql1;
                } else {
                echo "Error updating record: " . $db->error; $allPass = false;
                }
            }
        


        }

    if($allPass){    
        //print success message
        echo "success";
    }
?>