/******************************************************************************/
/******************************************************************************/

;(function($,doc,win) 
{
	"use strict";
	
	var PBButton=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			var helper=new PBHelper();
			
			helper.hover($this.children('a:first'),$option);		
		};
	};
	
	/**************************************************************************/
	
	$.fn.PBButton=function(option) 
	{
		var buttton=new PBButton(this,option);
		buttton.build();
	};
	
	/**************************************************************************/

})(jQuery,document,window);

/******************************************************************************/
/******************************************************************************/