var DEBUG = false;
var pkey = 0;  // primary key used as new iframe elements are created
var MAX_SOUND_LENGTH=3000;  // how long before it is safe to remove the iframe

function jThump(n,instrument)
{
	var id = 'jT_' + parseInt(++pkey);
	var q = document.createElement('iframe');
		q.setAttribute('id',id);
		q.setAttribute('src',instrument+'.html?'+n);
		if ( DEBUG )
		{
			q.setAttribute('width',100);
			q.setAttribute('height',100);
		}
		else
		{
			q.setAttribute('style','display:none;');
		}
	document.body.appendChild(q);
	setTimeout('stop(\''+id+'\')', MAX_SOUND_LENGTH);
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