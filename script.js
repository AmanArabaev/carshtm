
function style_element(odin){
	const perem =[];
	perem[0] = odin.getAttribute('data-color');
	perem[1] = odin.getAttribute('data-shrift');
	perem[2] = odin.getAttribute('data-shrift1');
	perem[3] = odin.getAttribute('data-shrift2');
	perem[4] = odin.getAttribute('data-shrift2');
	perem[5] = odin.getAttribute('data-shrift');
	perem[6] = odin.getAttribute('data-shrift');
	perem[7] = odin.getAttribute('data-shrift');
	document.getElementById('banner').style.background = perem[0];
	document.getElementById('banner').style.fontFamily = perem[1];
	document.getElementById('banner').style.color = perem[2];
	document.getElementById('menu').style.background = perem[3];
	document.getElementById('koka1').style.background = perem[4];
	document.getElementById('koka1').style.color = perem[2];
	document.getElementById('menu').style.color = perem[2];
	document.getElementById('menu').style.fontFamily = perem[5];
	document.getElementById('kontent').style.fontFamily = perem[6];
	document.getElementById('koka1').style.fontFamily = perem[7];
}
function translate_e(banner,menu,koka,koka1){
	document.getElementById('banner').innerHTML = banner;
	document.getElementById('menu').innerHTML = menu;
	document.getElementById('koka').innerHTML = koka;
	document.getElementById('koka1').innerHTML = koka1;
}
function translate_r(banner,menu,koka,koka1){
	document.getElementById('banner').innerHTML = banner;
	document.getElementById('menu').innerHTML = menu;
	document.getElementById('koka').innerHTML = koka;
	document.getElementById('koka1').innerHTML = koka1;
}
function info_mashina(odindva){
	const perem =[];
	perem[0] = odindva.getAttribute('data-photo');
	perem[1] = odindva.getAttribute('data-behavipusk');
	perem[2] = odindva.getAttribute('data-cost');
	document.getElementById('photo').innerHTML = perem[0];
	document.getElementById('behavipusk').innerHTML = perem[1];
	document.getElementById('cost').innerHTML = perem[2];
}	
function move1(odin){
	const perem =[];
	perem[0] = odin.getAttribute('data-price');
	perem[1] = odin.getAttribute('data-discount');
	perem[2] = odin.getAttribute('data-total');
	perem[3] = document.getElementById(perem[0]).value;
	perem[4] = document.getElementById(perem[1]).value;
	perem[5] = perem[3]-(perem[3]*perem[4]/100);
	document.getElementById(perem[2]).value = perem[5];
}

function translate_econtacts(odin){
	const perem =[];
	perem[0] = odin.getAttribute('data-transl');
	perem[1] = odin.getAttribute('data-transl1');
	perem[2] = odin.getAttribute('data-transl2');
	perem[3] = odin.getAttribute('data-transl3');
	perem[4] = odin.getAttribute('data-demo');
	perem[5] = odin.getAttribute('data-demo1');
	perem[6] = odin.getAttribute('data-demo2');
	perem[7] = odin.getAttribute('data-demo3');
	perem[8] = odin.getAttribute('data-demo4');
	perem[9] = odin.getAttribute('data-demo5');
	perem[10] = odin.getAttribute('data-demo6');
	perem[11] = odin.getAttribute('data-byton');
	perem[12] = odin.getAttribute('data-byton1');
	perem[13] = odin.getAttribute('data-byton2');
	perem[14] = odin.getAttribute('data-byton3');
	perem[15] = odin.getAttribute('data-byton4');
	perem[16] = odin.getAttribute('data-byton5');
	perem[17] = odin.getAttribute('data-demosmall1');
	perem[18] = odin.getAttribute('data-demosmall2');
	perem[19] = odin.getAttribute('data-demosmall3');
	perem[20] = odin.getAttribute('data-demosmall4');
	perem[21] = odin.getAttribute('data-demosmall5');
	perem[22] = odin.getAttribute('data-demosmall6');
	perem[23] = odin.getAttribute('data-demosmall7');
	perem[24] = odin.getAttribute('data-demosmall8');
	perem[25] = odin.getAttribute('data-demosmall9');
	perem[26] = odin.getAttribute('data-demosmall10');
	perem[27] = odin.getAttribute('data-demosmall11');
	perem[28] = odin.getAttribute('data-demosmall12'); 
	perem[29] = odin.getAttribute('data-demosmall13');
	perem[30] = odin.getAttribute('data-demosmall14');
	perem[31] = odin.getAttribute('data-demosmall15');
	perem[32] = odin.getAttribute('data-demosmall16');
	perem[33] = odin.getAttribute('data-demosmall17');
	perem[34] = odin.getAttribute('data-demosmall18');
	perem[35] = odin.getAttribute('data-demosmall19');
	perem[36] = odin.getAttribute('data-demosmall20');
	perem[37] = odin.getAttribute('data-demosmall21');
	perem[38] = odin.getAttribute('data-demosmall22');
	perem[39] = odin.getAttribute('data-demosmall23');
	perem[40] = odin.getAttribute('data-demosmall24');
	document.getElementById('banner').innerHTML = perem[0];
	document.getElementById('menu').innerHTML = perem[1];
	document.getElementById('koka').innerHTML = perem[2];
	document.getElementById('koka1').innerHTML = perem[3];
	document.getElementById('demo').innerHTML = perem[4];
	document.getElementById('demo1').innerHTML = perem[5];
	document.getElementById('demo2').innerHTML = perem[6];
	document.getElementById('demo3').innerHTML = perem[7];
	document.getElementById('demo4').innerHTML = perem[8];
	document.getElementById('demo5').innerHTML = perem[9];
	document.getElementById('demo6').innerHTML = perem[10];
	document.getElementById('demo7').innerHTML = perem[11];
	document.getElementById('demo8').innerHTML = perem[12];
	document.getElementById('demo9').innerHTML = perem[13];
	document.getElementById('demo10').innerHTML = perem[14];
	document.getElementById('demo11').innerHTML = perem[15];
	document.getElementById('demo12').innerHTML = perem[16];
	document.getElementById('demosmall1').innerHTML = perem[17];
	document.getElementById('demosmall2').innerHTML = perem[18];
	document.getElementById('demosmall3').innerHTML = perem[19];
	document.getElementById('demosmall4').innerHTML = perem[20];
	document.getElementById('demosmall5').innerHTML = perem[21];
	document.getElementById('demosmall6').innerHTML = perem[22];
	document.getElementById('demosmall7').innerHTML = perem[23];
	document.getElementById('demosmall8').innerHTML = perem[24];
	document.getElementById('demosmall9').innerHTML = perem[25];
	document.getElementById('demosmall10').innerHTML = perem[26];
	document.getElementById('demosmall11').innerHTML = perem[27];
	document.getElementById('demosmall12').innerHTML = perem[28]; 
	document.getElementById('demosmall13').innerHTML = perem[29];
	document.getElementById('demosmall14').innerHTML = perem[30];
	document.getElementById('demosmall15').innerHTML = perem[31];
	document.getElementById('demosmall16').innerHTML = perem[32];
	document.getElementById('demosmall17').innerHTML = perem[33];
	document.getElementById('demosmall18').innerHTML = perem[34];
	document.getElementById('demosmall19').innerHTML = perem[35];
	document.getElementById('demosmall20').innerHTML = perem[36];
	document.getElementById('demosmall21').innerHTML = perem[37];
	document.getElementById('demosmall22').innerHTML = perem[38];
	document.getElementById('demosmall23').innerHTML = perem[39];
	document.getElementById('demosmall24').innerHTML = perem[40];
}
document.querySelector('.burger').addEventListener('click', function(
				){
				document.querySelector('.burger').classList.toggle('active'
				);
				document.querySelector('.menu').classList.toggle("animate");
			});