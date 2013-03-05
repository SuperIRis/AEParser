/*
AEParser
	After Effects tracking points parser
	by @SuperIRis
	V 0.1
	05.03.13
*/
var parser = function(){
	var aeData		= {},
		aeKeys		= {"Units Per Second":"framesPerSecond", "Source Width":"width", "Source Height":"height", "Position":"position", "Scale":"scale", "Rotation":"rotation", "Frame":"frame", "X":"x", "Y":"y"},
		parseBlock	= function(block){
			var blockItems;
			var finalObject = {};
			// 0 is title, 1 is subtitle (Frame, X, Y, Z)
			switch (block[0]){
					case "Position":
						blockItems = ["frame", "x", "y", "z"];
						finalObject.name = aeKeys["Position"];
						break;
					case "Scale":
						blockItems = ["frame", "xScale", "yScale", "zScale"];
						finalObject.name=aeKeys["Scale"];
						break;
					case "Rotation":
						blockItems = ["frame", "degrees"];
						finalObject.name = aeKeys["Rotation"];
						break;
					default:
						return null;
					}
			var itemData;
			var itemDataAe=[];
			for (var j=2; j<block.length; j++){
				itemData = block[j].replace(/	|\n/g, " ").replace(" ", "").split(" ");
				for (var ji=0; ji<itemData.length; ji+=4){
					itemDataAe[itemDataAe.length] = {};
					for (var jii = 0; jii<blockItems.length; jii++){
						itemDataAe[itemDataAe.length-1][blockItems[jii]] = itemData[ji+jii];
					}
				}
			}
			finalObject.items = itemDataAe;
			return finalObject;
		};

	return{
		parse:function(parseText){
			var parseDatas = parseText.split("\n\n");
			var generalData = parseDatas[1].split("	");
			for (var i=1; i<generalData.length; i+=2){
				if(aeKeys[generalData[i]]){
					aeData[aeKeys[generalData[i]]] = generalData[i+1].replace(/\n/g, "");
				}
			}
			aeData.data = [];
			var parserResult;
			for(var j=2; j<parseDatas.length; j++){
				parserResult=parseBlock(parseDatas[j].split("\n"));
				if(parserResult){
					aeData.data.push(parserResult);
				}
			}
			return aeData;
		}
	};

}();
var parserExample = function(){
	var submitForm = function(e){
		var aeJson = parser.parse(document.getElementById("ae_content").value);
		document.getElementById("ae_result").value =JSON.stringify(aeJson,null,'\t');
		return false;
	};
	return{
		init:function(){
			form = document.getElementById("parse_form");
			//form.onsubmit = function(){return false;};
			form.onsubmit = submitForm;
			//document.getElementById("submit_btn").onclick = parser.parse;
		}
	};
}();
//
window.onload=parserExample.init;



