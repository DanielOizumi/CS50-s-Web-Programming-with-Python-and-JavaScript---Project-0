$(function() {
	// Start clear text functionality
	document.getElementById("q").addEventListener("input", function(event) {
		const q = this.value;
		if(q){
			document.getElementById("btn-clear").style.display = "block";
		}else{
			document.getElementById("btn-clear").style.display = "none";
		}
	});
	document.getElementById("btn-clear").addEventListener("click", function(event) {
		this.style.display = "none";
		document.getElementById("q").value = "";
	});
	// End clear text functionality

	// Start icon tootip
	$('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    })
	// End icon tootip
});