# workshop-task-0

Sketches:

Unit: pixels
Width, height
Use ; at the end of the line


Color of the background 
RGB color
E.g. 255, 0, 0 = red color background
255,0,0,100, the fourth no. Is transparency, range from 0=255


Rect= draw a rectangle on canvas
(50, 100 [..])
50 pixels away on the x axis 
100 pixels away on the y axis
( […], 40, 60)
Rect being 40 pixels width, 60 pixels as height

Stroke: line
Fill: color within the shape

Order of the code is important

Variable:
Start with “let” 
Let x= 0;
Rect( x, 100, 40 60) = (0, 100, 40, 60)

X= x+3;
When running the loop, rectangle will moves to the right (keeps adding 3)

MouseX , Rect moves along with mouse on x-axis
MouseY, Rect moves along with mouse on y-axis
E.g. rect( mouseX, mouseY, 40, 60)

Conditions:
Use “if”
If (x > width ) {
X=0;
Rectangle reappear on canvas

comment out the code: keep the code, but programme doesn’t excite it. Highlight the code, control and press “/ ”
: if (mouse X > width / 2) {
Fill (255, 0, 0);
} else { 
Fill 255, 255, 0);
 
