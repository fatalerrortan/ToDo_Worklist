<?php
//print_r(readItems());

if(!empty($_POST['target_function'])){
    switch ($_POST['target_function']){
        case 'createItem':
            createItem($_POST['item_name']);
            break;
        case 'readItems':
            echo readItems();
            break;
        case 'updateItem':
            updateItem();
            break;
        case 'deleteItem':
            deleteItem($_POST['item_id']);
            break;
        default:
            break;
    }
}

function dbConnect(){
    $host_name = "";
    $database = "";
    $user_name = "";
    $password = "";
    $connect = new mysqli($host_name, $user_name, $password, $database);
    if ($connect->connect_error) {
        echo '<p>Error: ' . $connect->connect_error . '</p>';
    }
    return $connect;
}

function createItem($itemName){
    $connect = dbConnect();
    $sql = "INSERT INTO todo_list (work, owner)
            VALUES ('".$itemName."', 0)";
    if ($connect->query($sql) != TRUE) {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }
    $connect->close();
}

function readItems(){
    $output = array();
    $connect = dbConnect();
    $sql = "SELECT * FROM todo_list";
    $items = $connect->query($sql);
    if ($items != TRUE) {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }else{
        while ($item = $items->fetch_assoc()) {
            $output[] = $item;
        }
        return json_encode($output);
    }
    $connect->close();
}

function updateItem(){

}

function deleteItem($item_id){
    $connect = dbConnect();
    $sql = "DELETE FROM todo_list
            WHERE id=$item_id;";
    if ($connect->query($sql) != TRUE) {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }
    $connect->close();
}


