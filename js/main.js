var classRect = (function () {
	var classRect = function (x,y,w,h,title,canvas) {
		if(x!=null&&y!=null){
			this.site = {'x':x,'y':y};
		}else{
			this.site = {'x':0,'y':0};
		}
		this.title = title;
		this.size ={'w':w,'h':h};
		this.canvas = canvas;
	};
	classRect.prototype.draw = function() {
		var ctx = this.canvas.getContext('2d');
		ctx.fillStyle = "rgb(200,0,0)";//設定圖形顏色（Red, Green, Blue）
        ctx.fillRect (this.site.x, this.site.y, this.size.w, this.size.h);//設定位置（x, y, width, height）
	};
	classRect.prototype.clearAll = function() {
		
		this.canvas.width = this.canvas.width;
	};
	classRect.prototype.delete = function() {
		var ctx = this.canvas.getContext('2d');
		ctx.clearRect(this.site.x-1,this.site.y-1,this.size.w+1,this.size.h+1);
	};

	return classRect;
})();

var classLine = (function() {
	
	var classLine = function(x,y,canvas) {
		this.node = [];
		this.head={'x':x,'y':y};
		this.canvas = canvas;
	};
	classLine.prototype.addNode = function(x,y) {
		this.node.push({'x':x,'y':y});
	};
	classLine.prototype.draw = function() {
		var ctx = this.canvas.getContext('2d');
		ctx.moveTo(this.head.x,this.head.y);
		console.log(this.head.x+""+this.head.y);
		for(var n=0; n<this.node.length; n++){
			ctx.lineTo(this.node[n].x,this.node[n].y);
			console.log(this.node[n].x+""+this.node[n].y);
			ctx.stroke();
			ctx.moveTo(this.node[n].x,this.node[n].y);
		}

	};

	return classLine;
})();