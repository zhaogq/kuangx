<script language="JavaScript">
fCol='000000';
hCol='000000';
mCol='000000';
sCol='FF0000';
H='....';
M='.....';
S='......';
Ybase =8;
Xbase =8;
dots =12;
ns = (document.all)?0:1;
{
	for(i = 1;i < dots+1; i++)
	{
	  document.write('<div id="ieDigits" style="position:absolute;top:0px;left:0px; width:30px;height:30px;font-family:Arial,Verdana:font-size:10px;color:'+fCol+';text-align:center;padding-top:10px">'+i+'</div>')
	}
	for(i = 0;i < M.length; i++)
	{
	  document.write('<div id=y style="position:absolute;width:2px; height:2px;font-size:2px; background:'+mCol+'"></div>');
	}
	for(i = 0;i <H.length; i++)
	{
	  document.write('<div id=z style="position:absolute;width:2px;height: 2px;font-size:2px; background:'+hCol+'"></div>');
	}
	for(i = 0; i<S.length; i++)
	{
	  document.write('<div id=x style="position:absolute;width:2px")

