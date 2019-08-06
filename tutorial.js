//To prevent a bug in IE where the global use of the 'viz' variable
//  interferes with the div id 'viz' (in the html), the following line is needed:
//  Note: this line does not appear in the tutorial videos but should still be used
//    and is in all of the included js files. 
var viz, workbook;

window.onload=function CalendarView() {
	var vizDiv = document.getElementById('viz');
	var vizURL = 'http://bionic-tableau/views/calendarsformobile/calendar1_dashboard';
	var options = {
		width: '375px',
		height: '645px',
		hideToolbar: true,
		hideTabs: true
	};
viz = new tableauSoftware.Viz(vizDiv,vizURL, options);
};

/*
function switchView(sheetName){

	viz.dispose(); 
	var vizDiv = document.getElementById('viz');
	var vizURL = 'http://bionic-tableau/views/calendarsformobile/'+sheetName;
	var options = {
		width: '375px',
		height: '645px',
		hideToolbar: true,
		hideTabs: true
	};
		viz = new tableauSoftware.Viz(vizDiv,vizURL, options);
};


function showOnly(filterName, values){
	console.log("entrei com filtername: " + filterName + " e values: "+ values);
	sheet = viz.getWorkbook().getActiveSheet();
	if(sheet.getSheetType() ==='worksheet'){
		return	sheet.applyFilterAsync(filterName,values, 'REPLACE');
	}
	else{
		worksheetArray = sheet.getWorksheets();
		for(var i = 0;i<worksheetArray.length; i++)
		{
			worksheetArray[i].applyFilterAsync(filterName,values, 'REPLACE');
		}
	}
	
};

function clearFilter(filterName)
{
	sheet = viz.getWorkbook().getActiveSheet().getWorksheets()[0];

	return sheet.clearFilterAsync(filterName);

};
*/