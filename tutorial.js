<<<<<<< HEAD

var viz, workbook;

window.onload=function CalendarView() {
	var vizDiv = document.getElementById('viz');

	var vizURL='<script type='text/javascript' src='http://bionic-tableau/views/table/DashboardTable3?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';
	//var vizURL = 'https://public.tableau.com/shared/82GYX54KR?:display_count=yes&:origin=viz_share_link';
	//var vizURL = 'http://bionic-tableau/views/calendarsformobile/calendar1_dashboard';
	var options = {
		width: '325px',
		height: '500px',
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
=======
//To prevent a bug in IE where the global use of the 'viz' variable
//  interferes with the div id 'viz' (in the html), the following line is needed:
//  Note: this line does not appear in the tutorial videos but should still be used
//    and is in all of the included js files. 
var viz, workbook;

window.onload=function CalendarView() {
	var vizDiv = document.getElementById('viz');

	var vizURL = 'https://public.tableau.com/shared/7NTK3WZ3R?:display_count=yes&:origin=viz_share_link';
	//var vizURL = 'http://bionic-tableau/views/calendarsformobile/calendar1_dashboard';
	var options = {
		width: '325px',
		height: '500px',
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
>>>>>>> 4e5fd90c34a30f5edd610db234578868ae7bd85f
