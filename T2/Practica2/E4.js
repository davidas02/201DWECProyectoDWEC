document.write("<table>")
const total=10000;
const col=10;
var filas=total/col;
var uniN=1

do {
    document.write("<tr>")
    for (let index = 0; index < col; index++,uniN++) {
        document.write("<th>"+uniN+"</th>")
        document.write(`<td> &#${uniN}; </td>`)

    }
    document.write("</tr>")
}while(uniN<=total)
document.write("</table>")