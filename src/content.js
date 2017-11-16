var replace = function(search, replacement) {
	findAndReplaceDOMText(document.body, {
		preset:'prose',
		find: search,
		replace: function(m) {
			var el = document.createElement('span');
			el.style.backgroundSize = '100% 100%';
			el.style.fontFamily = 'Helvetica, Sans-Serif';
			el.style.fontSize = '120%';
			el.style.verticalAlign = 'middle';
			el.style.lineHeight = '0';
			el.style.backgroundImage = 'url("data:image/svg+xml;charset=UTF-8, ' + replacement + '")';
			el.innerHTML = '&nbsp&nbsp&nbsp&nbsp';
			return el;
		}
	})
};

var emojify = function(text) {
	// Smiling Slightly
	replace(':)', svg.smile);
	replace(':slight_smile:', svg.smile);
	replace('🙂', svg.smile);

	// Grinning
	replace(':D', svg.smileBig);
	replace(':grinning:', svg.smileBig);
	replace('😀', svg.smileBig);

	// Frowning Slightly
	replace(':(', svg.frown);
	replace(':frowning2:', svg.frown);
	replace('☹', svg.frown);

	// Frowning With Open Mouth
	replace(':frowning:', svg.frownBig);
	replace('😦', svg.frownBig);

	// Open Mouth
	replace(':open_mouth:', svg.openMouth);
	replace('😮', svg.openMouth);
	replace(':O', svg.openMouth);

	// No Mouth
	replace(':no_mouth:', svg.noMouth);
	replace('😶', svg.noMouth);

	// Smile
	replace(':smile:', svg.smileI);
	replace('😄', svg.smileI);

	// Stuck Out Tongue
	replace(':stuck_out_tongue:', svg.tongue);
	replace(':P', svg.tongue);
	replace('😛', svg.tongue);

	// Neutral Face
	replace(':neutral:', svg.neutral);
	replace(':|', svg.neutral);
	replace('😐', svg.neutral);

	// Raging Face
	replace(':rage:', svg.rage);
	replace(':raging:', svg.rage);
	replace('😡', svg.rage);

	// Angry Face
	replace(':angry:', svg.angry);
	replace('😠', svg.angry);

	// Winking Face
	replace(';)', svg.wink);
	replace(':wink:', svg.wink);
	replace('😉', svg.wink);

	// Grinning Face with Smiling Eyes
	replace(':grin:', svg.grin);
	replace('😁', svg.grin);

	// Laughing Face
	replace(':laughing:', svg.laughing);
	replace('xD', svg.laughing);
	replace('😆', svg.laughing);

	// Thumb's Up
	replace(':thumb_up:', svg.thumbUp);
	replace(':thumbs_up:', svg.thumbUp);
	replace('👍', svg.thumbUp);

	// Thumb's Down
	replace(':thumb_down:', svg.thumbDown);
	replace(':thumbs_down:', svg.thumbDown);
	replace('👎', svg.thumbDown);
};
var emojis = -1;
emojify();
setInterval(
	function() {
		emojis = document.body.innerHTML.search(":\\)") +
			document.body.innerHTML.search(":\\(") +
			document.body.innerHTML.search(":slight_smile:") +
			document.body.innerHTML.search("🙂") +
			document.body.innerHTML.search(":laughing:") +
			document.body.innerHTML.search("xD") +
			document.body.innerHTML.search("😆") +
			document.body.innerHTML.search(":smile:") +
			document.body.innerHTML.search("😄") +
			document.body.innerHTML.search(":grin:") +
			document.body.innerHTML.search("😁") +
			document.body.innerHTML.search(":grinning:") +
			document.body.innerHTML.search("😀") +
			document.body.innerHTML.search(":frowning2:") +
			document.body.innerHTML.search("☹") +
			document.body.innerHTML.search(":frowning:") +
			document.body.innerHTML.search("😦") +
			document.body.innerHTML.search(":open_mouth:") +
			document.body.innerHTML.search("😮") +
			document.body.innerHTML.search(":no_mouth:") +
			document.body.innerHTML.search("😶") +
			document.body.innerHTML.search(":stuck_out_tongue:") +
			document.body.innerHTML.search("😛") +
			document.body.innerHTML.search(":neutral:") +
			document.body.innerHTML.search("😐") +
			document.body.innerHTML.search(":rage:") +
			document.body.innerHTML.search(":raging:") +
			document.body.innerHTML.search("😡") +
			document.body.innerHTML.search(":angry:") +
			document.body.innerHTML.search("😠") +
			document.body.innerHTML.search(":wink:") +
			document.body.innerHTML.search("😉") +
			document.body.innerHTML.search(":thumb_up:") +
			document.body.innerHTML.search(":thumbs_up") +
			document.body.innerHTML.search(":thumb_down:") +
			document.body.innerHTML.search(":thumbs_down:") +
			document.body.innerHTML.search("👍") +
			document.body.innerHTML.search("👎") +
			document.body.innerHTML.search(";\\)") +
			document.body.innerHTML.search(":O") +
			document.body.innerHTML.search(":\\|") +
			document.body.innerHTML.search(":P") +
			document.body.innerHTML.search(":D");

		if (emojis > 0) {
			emojify();
		}
	}, 5000
);
