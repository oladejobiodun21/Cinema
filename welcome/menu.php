<?php
include 'db.php';

$query = $pdo->query("SELECT * FROM menu");
$menuItems = $query->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($menuItems);
?>
