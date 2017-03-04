# Flexbox/Transition
The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

Note: Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.

* see https://css-tricks.com/snippets/css/a-guide-to-flexbox/ for more

## cubic-bezier
CSS supports two kinds of timing functions: the subset of the cubic Bézier curves that are functions and staircase functions.  The cubic-bezier() functional notation defines a cubic Bézier curve. As these curves are continuous, they are often used to smooth down the start and end of the animation and are therefore sometimes called easing functions.
https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function

![image of cubic-bezier]
(https://mdn.mozillademos.org/files/3433/cubic-bezier,%20example.png)
* Based on the graph above, you can visualize it easing quickly in the beginning, slowing down in the middle, and picking up speed at the end.

A cubic Bézier curve is defined by four points P0, P1, P2, and P3.  P0 and P3 are the start and the end of the curve, and in CSS these points are fixed, as the coordinates are ratios.  P0 is (0, 0)and represents the initial time and the initial state, P3 is (1, 1) and represents the final time and the final state.

For CSS Bézier Curves, P0 and P3 are always in the same spot. P0 is at (0,0) and P3 is at (1,1). * An important thing to note is that the points that get passed in the cubic-bezier function can only be between 0 and 1. So, if you decide to try something like cubic-bezier(2,3,5,2), you’ll be banished to linear easing, the worst of all easing functions. That’s like a font-family falling back to Comic Sans.

Also notice that the x-axis is the time the animation takes, and the y-axis is the property being changed.
