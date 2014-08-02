var classRect = (function() {
	var classRect = function(x, y, w, h, title, canvas) {
		if (x != null && y != null) {
			this.site = {
				'x': x,
				'y': y
			};
		} else {
			this.site = {
				'x': 0,
				'y': 0
			};
		}
		this.title = title;
		this.size = {
			'w': w,
			'h': h
		};
		this.canvas = document.getElementById(canvas);
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight
	};
	classRect.prototype.draw = function(r, g, b) {
		var ctx = this.canvas.getContext('2d');
		if (r != null && g != null && b != null)
			ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")"; //設定圖形顏色（Red, Green, Blue）
		else
			ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect(this.site.x, this.site.y, this.size.w, this.size.h); //設定位置（x, y, width, height）
		ctx.font = "16px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(this.title, this.site.x, this.site.y - 2);
	};
	classRect.prototype.clearAll = function() {

		this.canvas.width = this.canvas.width;
	};
	classRect.prototype.delete = function() {
		var ctx = this.canvas.getContext('2d');
		ctx.clearRect(this.site.x - 1, this.site.y - 1, this.size.w + 1, this.size.h + 1);
	};

	return classRect;
})();

var classLine = (function() {
	var classLine = function(x, y, canvas) {
		this.node = [];
		this.head = {
			'x': x,
			'y': y
		};
		this.canvas = canvas;
	};
	classLine.prototype.addNode = function(x, y) {
		this.node.push({
			'x': x,
			'y': y
		});
	};
	classLine.prototype.draw = function() {
		var ctx = this.canvas.getContext('2d');
		ctx.moveTo(this.head.x, this.head.y);
		console.log(this.head.x + "" + this.head.y);
		for (var n = 0; n < this.node.length; n++) {
			ctx.lineTo(this.node[n].x, this.node[n].y);
			console.log(this.node[n].x + "" + this.node[n].y);
			ctx.stroke();
			ctx.moveTo(this.node[n].x, this.node[n].y);
		}

	};

	return classLine;
})();

var skillTree = (function() {
	var skillTree = function(sourec) {
		this.classArray = [];
		this.classNumArray = [];
		this.rectArray = [];
		this.lineArray = [];
		for (var i in json._1) {
			this.classNumArray.push(json._1[i].SbjID);
			this.classArray.push(json._1[i].SbjTitle);
		}

		for (var i = 0, x = 20, y = 20; i < this.classArray.length; i++, x += 70) {
			if (i % 14 == 0 && i != 0){
				x = 20;
				y += 70;
			}
			this.addNode(x, y, 50, 50, this.classNumArray[i], "tab1");
		}
	}
	skillTree.prototype.addNode = function(x, y, w, h, title, canvas) {
		var newNode = new classRect(x, y, w, h, title, canvas);
		this.rectArray.push(newNode);
	};
	skillTree.prototype.addLine = function(x, y, canvas) {
		var newLine = new classLine(x, y, canvas);
		this.lineArray.push(newLine);
	};
	skillTree.prototype.draw = function() {
		for (var node in this.rectArray) {

			this.rectArray[node].draw();
		}
		for (var line in this.lineArray) {
			this.lineArray[line].draw();
		}
	};
	return skillTree;
})();