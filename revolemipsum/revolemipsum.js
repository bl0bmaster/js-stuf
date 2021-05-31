/**
This function generate a Lorem Ipsum using the words of the french Declaration of the Rights of Man and of the Citizen.

@licence <a href="http://www.gnu.org/licenses/gpl-3.0.en.html">GPL 3.0</a><br>
Copyleft <a href="http://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@author <a href="http://sebastien.cheminel.com">S&eacute;bastien Cheminel</a>
@version 1.0
@since 2014-02-28

@see <a href="http://www.gnu.org/copyleft/">Copyleft</a>
@see <a href="http://www.sebastien.cheminel.com/projets/revolemipsum">Web Site</a>
**/
if( typeof revolemIpsum =='undefined' ) var revolemIpsum=(function(){
	var declaration       = [  "&agrave;","&eacute;crire","&eacute;galement","&eacute;gaux","&eacute;mane","&eacute;t&eacute;","&eacute;tabli","&eacute;tablie","&eacute;tablir","&eacute;tant","&eacute;videmment","&ecirc;tre","1789","a","acceptation","accus&eacute;","actes","actions","administration","admissibles","afin","agent","ainsi","ait","ant&eacute;rieurement","appel&eacute;","appliqu&eacute;e","arbitraires","arr&ecirc;t&eacute;","article","assembl&eacute;e","association","assur&eacute;e","assurent","au","auspices","autre","autres","autrui","aux","auxquels","avec","bonheur","bornes","but","capacit&eacute;","cas","causes","ce","celle","celles","ces","cesse","cette","ceux","chaque","citoyen","citoyens","commune","communication","compar&eacute;s","compte","concourir","condition","confi&eacute;e","cons&eacute;quence","consentir","conservation","consid&eacute;rant","consiste","constamment","constat&eacute;e","constater","constitu&eacute;s","constitution","contraint","contribution","corps","corruption","coupable","d&eacute;clar&eacute;","d&eacute;claration","d&eacute;clare","d&eacute;fendre","d&eacute;fendu","d&eacute;lit","d&eacute;penses","d&eacute;sormais","d&eacute;tenu","d&eacute;termin&eacute;e","d&eacute;termin&eacute;es","d&eacute;termin&eacute;s","d&eacute;terminer","d&rsquo;administration","d&rsquo;autorit&eacute;","d&rsquo;en","d&rsquo;exposer","d&rsquo;une","dans","de","demander","demeurent","des","devers","devoirs","dignit&eacute;s","distinction","distinctions","doit","doivent","donc","droit","droits","du","dur&eacute;e","elle","emp&ecirc;ch&eacute;","emplois","en","entre","essentiellement","est","et","eux-m&ecirc;mes","ex&eacute;cutent","ex&eacute;cuter","ex&eacute;cutif","exercer","exp&eacute;dient","express&eacute;ment","extrait","facult&eacute;s","faire","fond&eacute;es","font","force","formation","formes","fran&ccedil;ois","g&eacute;n&eacute;rale","garantie","gouvernemens","homme","hommes","il","imprescriptibles","imprimer","inali&eacute;nables","incontestables","indemnit&eacute;","indispensable","individu","innocent","inqui&eacute;t&eacute;","instant","institu&eacute;e","institution","inviolable","jeudi","jouissance","jug&eacute;","jusqu&rsquo;&agrave;","juste","l&eacute;galement","l&eacute;gislatif","l&rsquo;&ecirc;tre","l&rsquo;abus","l&rsquo;arr&ecirc;ter","l&rsquo;assembl&eacute;e","l&rsquo;assi&egrave;te","l&rsquo;avantage","l&rsquo;effet","l&rsquo;emploi","l&rsquo;entretien","l&rsquo;exercice","l&rsquo;exige","l&rsquo;expression","l&rsquo;homme","l&rsquo;ignorance","l&rsquo;instant","l&rsquo;oppression","l&rsquo;ordre","l&rsquo;oubli","l&rsquo;utilit&eacute;","la","laquelle","le","les","leur","leurs","libert&eacute;","libre","librement","libres","loi","lorsque","m&eacute;pris","m&ecirc;me","m&ecirc;mes","maintien","mais","malheurs","manifestation","membres","n&eacute;cessaire","n&eacute;cessaires","n&eacute;cessit&eacute;","n&eacute;cessite","n&rsquo;a","n&rsquo;en","n&rsquo;est","n&rsquo;ordonne","naissent","nation","nationale","naturels","ne","ni","non","nuisibles","nuit","nul","ob&eacute;ir","octobre","ont","opinions","ordres","ou","par","parler","particuli&egrave;re","pas","peines","pens&eacute;es","personne","personnellement","peuple","peut","peuvent","places","plus","point","politique","pour","pourvu","pouvant","pouvoir","pouvoirs","pr&eacute;alable","pr&eacute;cieux","pr&eacute;sence","pr&eacute;sente","pr&eacute;senter","pr&eacute;sident","pr&eacute;sum&eacute;","premier","prescrites","principe","principes","priv&eacute;","proc&egrave;s-verbal","promulgu&eacute;e","propri&eacute;t&eacute;","propri&eacute;t&eacute;s","prot&egrave;ge","public","publics","publique","puni","punis","punisse","qu&rsquo;elle","qu&rsquo;en","qu&rsquo;il","que","qui","quotit&eacute;","r&eacute;clamations","r&eacute;partie","r&eacute;pondre","r&eacute;prim&eacute;e","r&eacute;side","r&eacute;sistance","r&eacute;solu","raison","rappelle","reconno&icirc;t","recouvrement","religieuses","rend","repr&eacute;sentans","respect&eacute;s","retirera","rigueur","roi","s&eacute;paration","s&eacute;v&egrave;rement","s&rsquo;assurer","s&rsquo;il","s&ucirc;ret&eacute;","sa","sacr&eacute;","sacr&eacute;s","saisi","sans","sauf","se","selon","seroit","ses","seules","si","simples","soci&eacute;t&eacute;","social","sociales","soient","soit","solemnelle","sollicitent","son","sont","sous","souverainet&eacute;","strictement","suivans","suivre","supr&ecirc;me","sur","talens","toujours","tournent","tous","tout","toute","toutes","trouble","un","une","vertu","vertus","volont&eacute;","yeux"  ];
	var ponctuationFin    = "???!!...........................................\n\n\n\n\n\n\f\r";
	var ponctuationMilieu = ";;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,-::::";
	var ponctuationVrai   = {'\n':".<br>",'\f':".<br><br>",'?':"&nbsp;? ",
							 '!':"&nbsp;! ",':':"&nbsp;: ",';':"&nbsp;; ",
							 '\r':"..."};
	function push( result ){
		for( var i=1 ; i < arguments.length ; i++ ){
			result.tab.push( arguments[i] );
		}
	}
	function rand(n){ return Math.floor( Math.random() * n ) }
	function unMot(){ return declaration[ rand( declaration.length ) ]	}
	function phrase( result, n ){
		var prems = unMot();
		if( result.majuscule ){ // Majuscule ?
			prems = prems.charAt(0).toUpperCase() + prems.slice(1) ;
		}
		push( result, prems , " " ); // Au moins un mot.
		for( var i=0; i < n-1 ; i++ ){
			push( result, unMot(), " " );
		}
		push( result, unMot() ); // Au moins deux mots.
		result.majuscule = Math.random()<0.7;
		// ponctuation
		var ou = result.majuscule ? ponctuationFin : ponctuationMilieu ;
		var pn = ou.charAt( rand( ou.length ) );
		if( ponctuationVrai[pn] ){ 
			push( result, ponctuationVrai[pn], " " );
		}else{
			push( result, pn , " " );
		}
	}
	function paragraphe( result, n ){
		for( var w=0 ; n > 7 ; n -= w ){
			phrase( result, w = rand( 7 )+3  );
		}
		phrase( result, n ); // au moins une...
	}
	return function(n){
		var result={
			tab : [],
			majuscule : true
		};
		paragraphe( result, n );
		return result.tab.join("");
	}
})()
