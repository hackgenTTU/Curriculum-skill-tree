var classRect = (function() {
    var classRect = function(x, y, title, canvas) {
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

        this.canvas = document.getElementById(canvas);
        console.log(canvas);
        this.canvas.width =  document.getElementById("content").offsetWidth
        this.canvas.height = window.screen.height
    };
    classRect.prototype.draw = function(r, g, b) {
        var ctx = this.canvas.getContext('2d');
        var img = document.getElementById("scream");
        ctx.drawImage(img, this.site.x, this.site.y);


        if (r != null && g != null && b != null)
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")"; //設定圖形顏色（Red, Green, Blue）
        else
            ctx.fillStyle = "rgb(200,0,0)";

        ctx.font = "16px Arial";

        ctx.fillText(this.title, this.site.x, this.site.y - 2);
    };
    classRect.prototype.clearAll = function() {

        this.canvas.width = this.canvas.width;
    };
    classRect.prototype.delete = function() {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(this.site.x - 1, this.site.y - 1, 50+1,50+1);
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
    var skillTree = function(sourec, canvas) {
        this.rectArray = [];
        this.lineArray = [];
        var y = 20;
        for (var x in json) {
            this.classArray = [];
            this.classNumArray = [];
            for (var i in json[x]) {
                this.classNumArray.push(json[x][i].SbjID);
                this.classArray.push(json[x][i].SbjTitle);
            }
            var classes = $("#content").width() / 70
            for (var i = 0, x = 20; i < this.classArray.length; i++, x += 70) {
                if (i % Math.floor(classes) == 0 && i != 0) {
                    x = 20;
                    y += 70;
                }
                this.addNode(x, y, this.classNumArray[i], canvas);
            }
            y += 100;
        }
    }
    skillTree.prototype.addNode = function(x, y, title, canvas) {
        var newNode = new classRect(x, y, title, canvas);
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
