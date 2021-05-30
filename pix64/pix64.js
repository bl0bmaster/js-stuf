"use strict";
/**
Create base 64 one pixel image with given color or transparent.
this base 64 one pixel image is formatted (with url scheme) to be used
in html image src attribute.

support only png at this time.

(2021 note : I don't remember why I used that lol)

Uses :
<code>
&lt;!-- in HTML... --&gt;
&lt;img data-pix64=""&gt;
&lt;img data-pix64="red"&gt;
&lt;img data-pix64="#EF43A0"&gt;
</code>

<code>
// in Javascript... 
document.querySelector("img").src=pix64();
document.querySelector("img").src=pix64("red");
document.querySelector("img").src=pix64("#EF43A0");
</code>


@licence <a href="http://www.gnu.org/licenses/gpl-3.0.en.html">GPL 3.0</a><br>
Copyleft <a href="http://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@author <a href="http://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@version 1.0
@since 2016/11/23
@param aColor - the color of the 1 pixel width/height image. Format allowed
                are those used by fillStyle Canvas method.
@param anImageType - optional - the return image type default is png
@param aQuality - optional - the quality if lossy imageType, useless either.
          

@return a String containing Base 64 image starting by data:image/png;base64;

@see <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL">toDataUrl documentation</a>
@see <a href="http://www.gnu.org/copyleft/">Copyleft</a>
@see <a href="http://www.sebastien.cheminel.com/projets/pix64">Web Site</a>
         of this plugin.
**/
var pix64=(function(){
    function pix64(color,imageType,aQuality){
        const c=document.createElement('canvas')
        document.body.appendChild(c);
        c.width=c.height=1;
        const x=c.getContext("2d");
        x.fillStyle = color || "rgba(0,0,0,0)";
        x.fillRect(0,0,1,1);
        const b64Image=c.toDataURL(imageType,aQuality);
        c.parentNode.removeChild(c);
        return b64Image;
    }
    document.addEventListener("DOMContentLoaded", function() {
        const imagesList=document.querySelectorAll("[data-pix64]");
        for(let i=0;i<imagesList.length;i++){
            imagesList[i].src=pix64(imagesList[i].dataset.pix64);
        }
    });
    return pix64;
})()
