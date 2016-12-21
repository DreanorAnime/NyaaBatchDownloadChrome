var button = document.createElement('button');
button.innerHTML = 'Download current results';
button.addEventListener('click', function() { download()});    
document.getElementById("searchcontainer").appendChild(button);

function download() 
{
    var x = document.getElementsByClassName("tlistdownload");
    for(i = 0; i < x.length; i++)
    {
        window.open(x[i].getElementsByTagName('a')[0].href);
    }
}
