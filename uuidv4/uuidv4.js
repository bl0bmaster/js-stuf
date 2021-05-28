/**
Fast method to generate UUID v4 in JavaScript.

@licence <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL 3.0</a><br>
Copyleft <a href="https://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@author <a href="https://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@version 2.0
@since 2015/03/17

@return a String containing a UUID.

@see <a href="https://www.gnu.org/copyleft/">Copyleft</a>
@see <a href="https://www.sebastien.cheminel.com/projets/uuidv4">Web Site</a>
         of this plugin.
**/
if(typeof(uuidv4)=='undefined'){
var uuidv4=(()=>{
    const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    const { floor, random } = Math;
    const hexForX="0123456789abcdef";
    const hexForY ="89ab";
    return ()=>{
        let uuidString="";
        for(let i=0 ; i < template.length; i++){
            switch(template.charAt(i)){
                case 'x' : uuidString+=hexForX[floor(random()*16)];break;
                case 'y' : uuidString+=hexForY[floor(random()*4)];break;
                default  : uuidString+=template.charAt(i);
            }
        }
        return uuidString;
    };
})();

}
