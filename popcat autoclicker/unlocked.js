Array.from(document.querySelectorAll('audio, video')).forEach(el => el.muted = true);
var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 50; i++) {
		document.dispatchEvent(event);
	}
}, 60);