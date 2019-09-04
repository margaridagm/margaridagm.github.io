
var viz, workbook;

window.onload=function CalendarView() {
	var vizDiv = document.getElementById('viz');

	var vizURL= 'https://public.tableau.com/views/table_15675261226660/DashboardTable3?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link';
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
