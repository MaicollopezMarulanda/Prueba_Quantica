var d = '<tr>'+
'<th>ID</th>'+
'<th>Nombres</th>'+
'<th>Apellidos</th>'+
'</tr>';

$("#btnCagar").click(function () {
 for (var i = 1; i < datos.length; i++) {
 d+= '<tr>'+
 '<td>'+datos[i].id+'</td>'+
 '<td>'+datos[i].nombres+'</td>'+
 '<td>'+datos[i].apellidos+'</td>'+
 '</tr>';
 }
 $("#tabla").append(d);
});