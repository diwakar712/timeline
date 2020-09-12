const hamMenu=document.querySelector('.ham');
const line1=document.querySelector('.line-1');
const line2=document.querySelector('.line-2');
const line3=document.querySelector('.line-3');
const navMenu=document.querySelector('.nav-menu');
const ddList=document.querySelectorAll('.dd');
const aboutdropdownList=document.querySelector('.about-dd');
const carsdropdownList=document.querySelector('.cars-dd');
//click events on the navbar
hamMenu.addEventListener('click',function(){
    line2.classList.toggle('menu-2');
    line3.classList.toggle('menu-3');
    line1.classList.toggle('menu-1');
    navMenu.classList.toggle('show');
    //to disable scroll when menu icon is clicked
    document.querySelector('body').classList.toggle('noScrollY');
    aboutdropdownList.classList.remove('dropdown');
    carsdropdownList.classList.remove('dropdown');
})
//click events on the window
document.addEventListener('click',function(e){
    if(e.target===document.querySelector('body')){
        if(aboutdropdownList.classList.contains('dropdown') || carsdropdownList.classList.contains('dropdown')){
            aboutdropdownList.classList.remove('dropdown');
            carsdropdownList.classList.remove('dropdown');
        }
    }
    else if(e.target===document.querySelector('.about')){
        aboutdropdownList.classList.toggle('dropdown');
        carsdropdownList.classList.remove('dropdown');
    }else if(e.target===document.querySelector('.cars')){
        carsdropdownList.classList.toggle('dropdown');
        aboutdropdownList.classList.remove('dropdown');
    }
})

//horizontal scrolling
// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
var itemsLength = $('.tl-item').length;
var itemSize = $('.tl-item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getWrapperSize = function() {
	return $('.timeline').outerWidth();
}
var WrapperSize = getWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	WrapperSize = getWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var VisibleSize = WrapperSize;

// get total width of all menu items
var gettotalSize = function() {
	return itemsLength * itemSize;
};
var totalSize = gettotalSize();
// get how much of menu is invisible
var InvisibleSize = totalSize - WrapperSize;

// get how much have we scrolled to the left
var getPosition = function() {
	return $('.tl').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.tl').on('scroll', function() {

	// get how much of menu is invisible
	InvisibleSize = totalSize - WrapperSize;
	// get how much have we scrolled so far
	var Position = getPosition();

	var menuEndOffset = InvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (Position <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (Position < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (Position >= menuEndOffset) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle).on('click', function() {
	$('.tl').animate( { scrollLeft: InvisibleSize}, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
	$('.tl').animate( { scrollLeft: '0' }, scrollDuration);
});