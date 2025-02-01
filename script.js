let kifu = [];
let status = [[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[[0,0,0,0],[0,2,1,0],[0,1,2,0],[0,0,0,0]],[[0,0,0,0],[0,1,2,0],[0,2,1,0],[0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]];
let flag =[[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],[[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0]],[[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0]]];
let num = 1;
let pj = 0;
function draw() {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const context = canvas.getContext("2d");							
		if (num % 2 == 1) {
			var at = 1;
			var de = 2;
		}else {
			var at = 2;
			var de = 1;
		}
		let black = 0;
		let white = 0;
		context.fillStyle = "#008000";
		context.fillRect(0,0,520,590);
		for (let p = 0; p < 4; p ++) {
			context.strokeStyle = "#40C000";
			context.beginPath();
			context.moveTo(50,125 + 100 * p);
			context.lineTo(350,125 + 100 * p);
			context.lineTo(470,50 + 100 * p);
			context.lineTo(170,50 + 100 * p);
			context.closePath();
			context.stroke();
		}
		for (let z = 0; z < 4; z++) {
			for (let y = 0; y < 4; y++) {
				for (let x = 0; x < 4; x++) {
					if (status[z][y][x] == 1) {
						black += 1;
						context.fillStyle = "#000000";
						context.beginPath();
						context.arc(170 + 100 * x - 40 * y,350 + 25 * y - 100 * z,31,0,Math.PI * 2,true);
						context.closePath();
						context.fill();															
						context.strokeStyle = "#808080";
						context.beginPath();
						context.arc(170 + 100 * x - 40 * y,350 + 25 * y - 100 * z,31,0,Math.PI * 2,true);
						context.closePath();
						context.stroke();
						if (y == 2 && x != 3) {
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(70 + 100 * x,425 - 100 * z);							
							context.lineTo(110 + 100 * x,425 - 100 * z);
							context.closePath();
							context.stroke();
						}
						if (y == 0 && x != 2 && x != 3 && z != 3) {
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(150 + 100 * x,325 - 100 * z);
							context.lineTo(190 + 100 * x,325 - 100 * z);
							context.closePath();
							context.stroke();
						}
						if (x != 1 && x != 2 && y != 3) {								
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(138 + 100 * x - 40 * y,370 + 25 * y - 100 * z);		
							context.lineTo(150 + 100 * x - 40 * y,362.5 + 25 * y - 100 * z);
							context.closePath();
							context.stroke();
						}
					}else if (status[z][y][x] == 2) {
						white += 1;
						context.fillStyle = "#FFFFFF";
						context.beginPath();
						context.arc(170 + 100 * x - 40 * y,350 + 25 * y - 100 * z,30,0,Math.PI * 2,true);
						context.closePath();
						context.fill();															
						context.strokeStyle = "#808080";
						context.beginPath();
						context.arc(170 + 100 * x - 40 * y,350 + 25 * y - 100 * z,31,0,Math.PI * 2,true);
						context.closePath();
						context.stroke();
						if (y == 2 && x != 3) {
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(70 + 100 * x,425 - 100 * z);							
							context.lineTo(110 + 100 * x,425 - 100 * z);
							context.closePath();
							context.stroke();
						}
						if (y == 0 && x != 2 && x != 3 && z != 3) {
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(150 + 100 * x,325 - 100 * z);						
							context.lineTo(190 + 100 * x,325 - 100 * z);
							context.closePath();
							context.stroke();
						}
						if (x != 1 && x != 2 && y != 3) {								
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(138 + 100 * x - 40 * y,370 + 25 * y - 100 * z);		
							context.lineTo(150 + 100 * x - 40 * y,362.5 + 25 * y - 100 * z);
							context.closePath();
							context.stroke();
						}
					}else if (flag[z][y][x] == 1) {									
						context.fillStyle = "#FFFF00";
						context.beginPath();
						context.arc(170 + 100 * x - 40 * y,350 + 25 * y - 100 * z,3,0,Math.PI * 2,true);
						context.closePath();
						context.fill();
					}else {
						context.fillStyle = "#000000";
						context.beginPath();
						context.arc(170 + 100 * x - 40 * y,350 + 25 * y - 100 * z,2,0,Math.PI * 2,true);
						context.closePath();
						context.fill();
					}
				}
			}
		}							
		for (let z = 0; z < 4; z++) {
			for (let y = 0; y < 4; y++) {
				for (let x = 0; x < 4; x++) {	
						if (flag[z][y][x] == 1) { 				
						let n = x + 4 * y + 16 * z;
						context.fillStyle = "#000000"
						context.font = "20px serif";
						context.fillText(n,160 + 100 * x - 40 * y,345 + 25 * y - 100 * z);
						context.fillStyle = "#FFFF00"
						context.font = "19px serif";
						context.fillText(n,160 + 100 * x - 40 * y,345 + 25 * y - 100 * z);
					}
				}
			}
		}
		context.font = "42px serif";
		context.fillStyle = "#40C000";
		context.fillRect(260,490,210,75);
		if (pj == 2) {
			if (black > white) {								
				context.fillStyle = "#808000";
				context.fillRect(260,490,105,45);
			}else if (black < white) {
				context.fillStyle = "#808000";
				context.fillRect(365,490,105,45);
			}else{
				context.fillStyle = "#60A000";
				context.fillRect(260,490,210,45);
			}
		}else {
			if (at == 1) {
				context.fillStyle = "#808000";
				context.fillRect(260,490,105,45);
			}else {
				context.fillStyle = "#808000";
				context.fillRect(365,490,105,45);
			}
		}
		context.fillStyle = "#000000";
		context.beginPath();
		context.arc(282.5,512.5,18,0,Math.PI * 2,true);
		context.closePath();
		context.fill();	
		context.fillText(black,310,529);			
		context.fillStyle = "#FFFFFF";
		context.beginPath();
		context.arc(387.5,512.5,18,0,Math.PI * 2,true);
		context.closePath();
		context.fill();
		context.fillText(white,420,529);
		context.fillStyle = "#000000";
		context.font = "28px serif";
		if (pj == 2){
			context.fillText("終局",380,560);
		}else {
			context.fillText(num + "手目",380,560);
		}
	}
}
function calculate () {
	if (num % 2 == 1) {
		var at = 1;
		var de = 2;
	}else {
		var at = 2;
		var de = 1;
	}
	for (let z = 0; z < 4; z++) {
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4 ; x++) {
				flag[z][y][x] = 0;
			}
		}
	}			
	for (let z = 0; z < 4; z++) {
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4 ; x++) {
				if (status[z][y][x] != 0) {
					continue;
				}
				for (let c = -1; c < 2; c++) {
					for (let b = -1; b < 2; b++) {
						for (let a = -1; a < 2 ; a++) {
							if (a == 0 && b == 0 && c == 0) {
								continue;
							}
							if (x + a > -1 && x + a < 4 && y + b > -1 && y + b < 4 && z + c > -1 && z + c < 4) {
								if (status[z + c][y + b][x + a] == de) {
									if (x + 2 * a > -1 && x + 2 * a < 4 && y + 2 * b > -1 && y + 2 * b < 4 && z + 2 * c > -1 && z + 2 * c < 4) {
										if (status[z + 2 * c][y + 2 * b][x + 2 * a] == at) {
											flag[z][y][x] = 1;
										}else if (status[z + 2 * c][y + 2 * b][x + 2 * a] == de) {
											if (x + 3 * a > -1 && x + 3 * a < 4 && y + 3 * b > -1 && y + 3 * b < 4 && z + 3 * c > -1 && z + 3 * c < 4) {
												if (status[z + 3 * c][y + 3 * b][x + 3 * a] == at) {
													flag[z][y][x] = 1;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function manipulation (f) {
	let fx = f % 4;
	let fy = ((f % 16) / 4 | 0);
	let fz = (f / 16 | 0);
	if (num % 2 == 1) {
		var at = 1;
		var de = 2;
	}else {
		var at = 2;
		var de = 1;
	}
	status[fz][fy][fx] = at;
	for (let c = -1; c < 2; c++) {
		for (let b = -1; b < 2; b++) {
			for (let a = -1; a < 2 ; a++) {
				if (a == 0 && b == 0 && c == 0) {
					continue;
				}
				if (fx + a > -1 && fx + a < 4 && fy + b > -1 && fy + b < 4 && fz + c > -1 && fz + c < 4) {
					if (status[fz + c][fy + b][fx + a] == de) {
						if (fx + 2 * a > -1 && fx + 2 * a < 4 && fy + 2 * b > -1 && fy + 2 * b < 4 && fz + 2 * c > -1 && fz + 2 * c < 4) {
							if (status[fz + 2 * c][fy + 2 * b][fx + 2 * a] == at) {
								status[fz + c][fy + b][fx + a] = at;
							}else if (status[fz + 2 * c][fy + 2 * b][fx + 2 * a] == de) {
								if (fx + 3 * a > -1 && fx + 3 * a < 4 && fy + 3 * b > -1 && fy + 3 * b < 4 && fz + 3 * c > -1 && fz + 3 * c < 4) {
									if (status[fz + 3 * c][fy + 3 * b][fx + 3 * a] == at) {
										status[fz + c][fy + b][fx + a] = at;
										status[fz + 2 * c][fy + 2 * b][fx + 2 * a] = at;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function input () {
	let f = document.getElementById("form").value;
	if (f < 0 || f > 63) {
		if (Math.random() < 0.05) {
			alert("＊いしのなかにいる！＊")
		}else {
			alert("無効な値です");
		}
		return;
	}
	let fx = f % 4;
	let fy = ((f % 16) / 4 | 0);
	let fz = (f / 16 | 0);
	if (flag[fz][fy][fx] == 0) {
		if (Math.random() < 0.05) {
			alert("＊おおっと＊");
		}else {
			alert("そこには置けません");
		}
		return;
	}
	manipulation(f);
	kifu.push(f);
	num += 1;
	calculate();
	pj = 2;
	for (let z = 0; z < 4; z++) {
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4 ; x++) {
				if (flag[z][y][x] == 1) {
					pj = 0;
				}
			}
		}
	}
	if (pj == 0) {
		draw();
		return;
	}
	num += 1;
	calculate();
	for (let z = 0; z < 4; z++) {
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4 ; x++) {
				if (flag[z][y][x] == 1) {
					pj = 1;
				}
			}
		}
	}
	if (pj == 1) {
		alert("置ける場所がないのでパスします");
		draw();
		return;
	}
	alert("終局 Thank you for playing！");
	draw();
}
function back () {
	let t = kifu.length;
	if (t == 0) {
		if (Math.random() < 0.05) {
			alert("＊むだです＊");
		}else {
			alert("これ以上は戻せません");
		}
		return;
	}
	kifu.pop();		
	status = [[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[[0,0,0,0],[0,2,1,0],[0,1,2,0],[0,0,0,0]],[[0,0,0,0],[0,1,2,0],[0,2,1,0],[0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]];
	flag =[[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],[[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0]],[[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0]]];
	num = 1;
	pj = 0;
	for (let n = 0; n < t - 1; n++) {
		manipulation(kifu[n]);
		num += 1;
		calculate();					
		pj = 2;
		for (let z = 0; z < 4; z++) {
			for (let y = 0; y < 4; y++) {
				for (let x = 0; x < 4 ; x++) {
					if (flag[z][y][x] == 1) {
						pj = 0;
					}
				}
			}
		}
		if (pj == 0) {
			continue;
		}
		num += 1;
		calculate();
		for (let z = 0; z < 4; z++) {
			for (let y = 0; y < 4; y++) {
				for (let x = 0; x < 4 ; x++) {
					if (flag[z][y][x] == 1) {
						pj = 1;
					}
				}
			}
		}
		if (pj == 1) {
			continue;
		}
	}
	draw();
	if (Math.random() < 0.05) {
		alert("＊なんだって？＊");
	}
}
draw();		
let button_1 = document.getElementById("button_1");
button_1.addEventListener("click",input);	
let button_2 = document.getElementById("button_2");
button_2.addEventListener("click",back);
