import { openFile, draw, cleanup } from 'https://root.cern/js/latest/modules/main.mjs';
export function loadModal(obj) {
    // Get the modal
    var modal = document.getElementById("myModal");
    console.log(modal)
    // Get the button that opens the modal
    var cruzT = document.getElementById("cruzetTrend");
    var cruzR = document.getElementById("cruzetRate");
    var cruzC = document.getElementById("cruzetCumul");

    var cruzTp = document.getElementById("cruzetTrendp");
    var cruzRp = document.getElementById("cruzetRatep");
    var cruzCp = document.getElementById("cruzetCumulp");

    var craftT = document.getElementById("craftTrend");
    var craftR = document.getElementById("craftRate");
    var craftC = document.getElementById("craftCumul");

    var craftTp = document.getElementById("craftTrendp");
    var craftRp = document.getElementById("craftRatep");
    var craftCp = document.getElementById("craftCumulp");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var png = document.getElementById("pngLink");
    console.log(span)
    // When the user clicks the button, open the modal
    cruzT.onclick = function() {
        modal.style.display = "block";
        console.log("CRUZET Trend");
	png.setAttribute('href', './data/CRUZET.png');
        draw('trend', obj[0],'');
	return false;
    }
    cruzR.onclick = function() {
        modal.style.display = "block";
        console.log("CRUZET Rate");
	png.setAttribute('href', './data/CRUZET_rate.png');
        draw('trend', obj[1],'');
	return false;
    }
    cruzC.onclick = function() {
        modal.style.display = "block";
        console.log("CRUZET Cumulative");
	png.setAttribute('href', './data/CRUZET_cumul.png');
        draw('trend', obj[2],'');
	return false;
    }

    cruzTp.onclick = function() {
        modal.style.display = "block";
        console.log("CRUZET Pixel Trend");
	png.setAttribute('href', './data/CRUZETp.png');
        draw('trend', obj[3],'');
	return false;
    }
    cruzRp.onclick = function() {
        modal.style.display = "block";
        console.log("CRUZET Pixel Rate");
	png.setAttribute('href', './data/CRUZETp_rate.png');
        draw('trend', obj[4],'');
	return false;
    }
    cruzCp.onclick = function() {
        modal.style.display = "block";
        console.log("CRUZET Pixel Cumulative");
	png.setAttribute('href', './data/CRUZETp_cumul.png');
        draw('trend', obj[5],'');
	return false;
    }

    craftT.onclick = function() {
        modal.style.display = "block";
        console.log("CRAFT Trend");
	png.setAttribute('href', './data/CRAFT.png');
        draw('trend', obj[6],'');
	return false;
    }
    craftR.onclick = function() {
        modal.style.display = "block";
        console.log("CRAFT Rate");
	png.setAttribute('href', './data/CRAFT_rate.png');
        draw('trend', obj[7],'');
	return false;
    }
    craftC.onclick = function() {
        modal.style.display = "block";
        console.log("CRAFT Cumulative");
	png.setAttribute('href', './data/CRAFT_cumul.png');
        draw('trend', obj[8],'');
	return false;
    }

    craftTp.onclick = function() {
        modal.style.display = "block";
        console.log("CRAFT Pixel Trend");
	png.setAttribute('href', './data/CRAFTp.png');
        draw('trend', obj[9],'');
	return false;
    }
    craftRp.onclick = function() {
        modal.style.display = "block";
        console.log("CRAFT Pixel Rate");
	png.setAttribute('href', './data/CRAFTp_rate.png');
        draw('trend', obj[10],'');
	return false;
    }
    craftCp.onclick = function() {
        modal.style.display = "block";
        console.log("CRAFT Pixel Cumulative");
	png.setAttribute('href', './data/CRAFTp_cumul.png');
        draw('trend', obj[11],'');
	return false;
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
	cleanup("trend");
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it                                                                                                                                         
    window.onclick = function(event) {
        if (event.target == modal) {
	    cleanup("trend");
            modal.style.display = "none";
        }
    }
}
