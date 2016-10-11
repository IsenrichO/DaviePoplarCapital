
function init() {
	window.addEventListener("scroll", function(evt) {
		var verticalOffset = window.pageYOffset,
			shrinkOn = 125,
			heightDifferential = verticalOffset > shrinkOn,
			navBar = document.getElementById("navBar_Cont"),
			anchor_Tags = document.getElementById("inter-pageNavBar").getElementsByTagName("A");
		//	console.log(anchor_Tags);


		function toggleAnchors() {
			for (var i = 0; i < anchor_Tags.length; i++) {
				if (heightDifferential) {
					anchor_Tags[i].style.lineHeight = "50px";
					navBar.className = "shrunkenNavBar";
				} else {
					anchor_Tags[i].style.lineHeight = "100px";

					if (navBar.className === "shrunkenNavBar") {
						navBar.classList.remove("shrunkenNavBar");
					}
				}
			}
		} 

		toggleAnchors();
	});
}

window.onload = init();















































