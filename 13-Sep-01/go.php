<?php
$t = $_GET["t"] ?? '';
$s = $_GET["s"] ?? '';
$p = new PDO("sqlite:" . __DIR__ . "/idx/3.db");
$p->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$p->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$sql = "SELECT url
        FROM pages
        WHERE title LIKE ?
            AND snippet LIKE ?
        ORDER BY rowid
        LIMIT 1";

$stmt = $p->prepare($sql);
$stmt->execute(['%' . $t . '%', '%' . $s . '%']);
$url = $stmt->fetchColumn();

if ($url) {
    header("Location: " . $url);
    exit;
}

?>
<h1 style="color: deeppink;">Not Found</h1>
<h3>Could not redirect. No exact match for: <?php echo htmlspecialchars($t) . " • " . htmlspecialchars($s); ?></h3>
