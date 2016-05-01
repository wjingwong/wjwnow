var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  pics.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 5;
  if (currentIndex > itemAmt - 5) {
    currentIndex = 5;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 5;
  if (currentIndex > itemAmt - 5) {
    currentIndex = 5;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 5;
  if (currentIndex < 5) {
    currentIndex = itemAmt - 5;
  }
  cycleItems();
});
