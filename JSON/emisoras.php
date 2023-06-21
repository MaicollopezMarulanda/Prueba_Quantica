<?php
$data = json_decode(file_get_contents("https://6454ff2ea74f994b334eff5e.mockapi.io/channels"), true );
print_r($data);
echo "<hr>";
echo "<br><br>";
for($i=0; $i<count($data);$i++){
    $titulo = $data[$i]["Title"];
    $id = $data[$i]["ID"];
    $descripcion = $data[$i]["Description"];
    $forma = $data[$i]["StreamFormat"];
    $fondo = $data[$i]["Background"];
    $poster = $data[$i]["Poster"];
    $url = $data[$i]["URL"];
    $guid = $data[$i]["GUID"];
    $categoria = $data[$i]["Category"];

    for($r=0; $r<count($data[$i]["Tags"]);$r++){
        $tags = $data[$i]["Tags"][$r];
    } 
    
    echo $titulo."--".$id."--".$descripcion."--".$forma."--".$fondo."--".$poster."--".$url."--".$guid."--".$categoria."--".$tags."<br><br><br>";
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="micss.css">
    <script src="script.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</head>
<body>  
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Id</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Forma</th>
            <th scope="col">Fondo</th>
            <th scope="col">Poster</th>
            <th scope="col">URL</th>
            <th scope="col">GUID</th>
            <th scope="col">Categoria</th>
            <th scope="col">Tags</th>
            </tr>
        </thead>
        <tbody id="cuerpo">
            <tr>
                <td id="tablatitulo">$titulo</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>


            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </table>	
</body>
</html>