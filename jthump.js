var pkey = 0;  // primary key used as new iframe elements are created
var MAX_SOUND_LENGTH=3000;  // how long before it is safe to remove the iframe

function jThump( n, i )
{
	var id = 'jT_' + parseInt( ++pkey );
	var q = document.createElement( 'iframe' );
		q.setAttribute( 'id', id );
		q.setAttribute( 'class', 'jT' );
		q.setAttribute( 'src', 'jthump.html?' + i + "=" + n );
		q.setAttribute('style','display:none;');
	
	document.body.appendChild( q );
	
	setTimeout("stop('" + id + "')", MAX_SOUND_LENGTH);
}

function stop( id )
{
	document.body.removeChild(document.getElementById(id));
}

function stopAll()
{
	var o=document.querySelectorAll('iframe.jT');
	for (var i=0, max=o.length; i < max; i++)
		document.body.removeChild(o[i]);
}