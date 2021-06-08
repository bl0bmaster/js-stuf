/**
Snippet to create a ul/li structure.

Uses :
<code>
var msg = ul({
        parentTag : "messages",
        childTag : "message"
    } );
msg("first");
msg("second");
msg("third");
document.documentElement.appendChild(msg());
</code>
resulted DOM :
<code>
&lt;!-- in HTML... --&gt;
&lt;body&gt;
&lt;messages&gt;
&lt;message&gt;first&lt;/message&gt;
&lt;message&gt;second&lt;/message&gt;
&lt;message&gt;third&lt;/message&gt;
&lt;/messages&gt;
&lt;/body&gt;
</code>


@licence <a href="http://www.gnu.org/licenses/gpl-3.0.en.html">GPL 3.0</a><br>
Copyleft <a href="http://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@author <a href="http://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@version 1.0
@since 2016/11/24
@param aFunction - a function which has one parameter. 

@param options.parentTag the tag name of the parent
@param options.childTag the tag name of the parent
@param options.parentClazz (optional) a CSS class to put on parent
@param options.childClazz  (optional) a CSS class to put on each child
                
@return an Array containing all elements of the ArrayLike.

@see <a href="http://www.gnu.org/copyleft/">Copyleft</a>
@see <a href="http://www.sebastien.cheminel.com/projets/ul">Web Site</a>
        of this plugin.
**/
function ul( options ){
    const nodeOf = (e) =>document.createElement(e);
    return (function(o){
        var parent= nodeOf(o.parentTag);
        o.parentClazz && (parent.className = o.parentClazz);
        function append_node( node ){
            o.childClazz && (node.className = o.childClazz );
            parent.appendChild( node );
            return node;
        }
        function append_li(txt){
            var li= nodeOf(o.childTag);
            li.appendChild( document.createTextNode(`${txt}`) )
            append_node(li);
            return li;
        }
        function append(e){
            if( typeof e != 'undefined' ){
                if( e && typeof e.appendChild == 'function' ){
                    try{
                        var li= nodeOf(o.childTag);
                        li.appendChild(e);
                        append_node( li );
                    } catch( e ) {
                        // NoOp continue
                    }
                }else if( typeof e == 'function' ){
                    append(e());
                }else{
                    append_li(e);
                }
                return append;
            } else {
                // If no parametter act as a getter 
                return parent;
            }
        }
        return append;
    })(Object.assign({
        parentTag : "ul",
        childTag : "li"
    }, options));
}

