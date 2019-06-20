(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/再播一次_.png", id:"再播一次"},
		{src:"images/播放_.png", id:"播放"},
		{src:"images/暫停_.png", id:"暫停"},
		{src:"images/略過_.png", id:"略過"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.再播一次 = function() {
	this.initialize(img.再播一次);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.播放 = function() {
	this.initialize(img.播放);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.暫停 = function() {
	this.initialize(img.暫停);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.略過 = function() {
	this.initialize(img.略過);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0C0F").s().p("AiPCQIAAkfIEfAAIAAEfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],0,46,0,-46).s().p("Eg7gAHLIAAuWMB3BAAAIAAOWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.9,-46,761.9,92);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],0,46,0,-46).s().p("Eg7gAHMIAAuWMB3BAAAIAAOWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.9,-46,761.9,92);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],0,46,0,-46).s().p("Eg7gAHLIAAuVMB3BAAAIAAOVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.9,-46,761.9,92);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5249").s().p("ArFLKIArixQAljKCljmQCQjFDdjGQDAitDNiBQDAh6BvgcQBhgYAKAXQAFALgOAQIAJAMQg8C2hSCeQiVEhjkDyQiYCilADlQihBziDBSg");
	this.shape.setTransform(-18.7,18.4,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0E0E").ss(6.5).p("AkUkZQChjJDoi1QDpi1BsgKQA+gFBSAcQBuAmAYBOQAWBIgRBtQgNBbgnBrQhcEEkbEwQlMFqkACfQkUCriBhnQiDhpB5k+QB1k0Eolvg");
	this.shape_1.setTransform(16.2,-5.5,1,1,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#825834","#FFFFFF","#6D6D6D","#222222","#0E0E0E"],[0.376,0.616,0.808,0.941,1],-46.8,58.7,35.4,-44).s().p("AqnMxQiDhpB5k+QB1k0EolvQChjJDoi1QDpi1BsgKQA+gFBSAcQBuAmAYBOQAWBIgRBtQgNBbgnBrQhcEEkbEwQlMFqkACfQisBrhzAAQhGAAgwgng");
	this.shape_2.setTransform(16.2,-5.5,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.8,-79.7,215,156.1);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5249").s().p("ArFLKIArixQAljKCljmQCQjFDdjGQDAitDNiBQDAh6BvgcQBhgYAKAXQAFALgOAQIAJAMQg8C2hSCeQiVEhjkDyQiYCilADlQihBziDBSg");
	this.shape.setTransform(-55.5,39.4,1,1,15,0,0,-30.2,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0E0E").ss(6.5).p("AkUkZQChjJDoi1QDpi1BsgKQA+gFBSAcQBuAmAYBOQAWBIgRBtQgNBbgnBrQhcEEkbEwQlMFqkACfQkUCriBhnQiDhpB5k+QB1k0Eolvg");
	this.shape_1.setTransform(16.2,-5.5,1,1,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#825834","#FFFFFF","#6D6D6D","#222222","#0E0E0E"],[0.376,0.616,0.808,0.941,1],-46.8,58.7,35.4,-44).s().p("AqnMxQiDhpB5k+QB1k0EolvQChjJDoi1QDpi1BsgKQA+gFBSAcQBuAmAYBOQAWBIgRBtQgNBbgnBrQhcEEkbEwQlMFqkACfQisBrhzAAQhGAAgwgng");
	this.shape_2.setTransform(16.2,-5.5,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.8,-79.7,215,156.1);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnFA6Qi9gYAAgiQAAghC9gZQC8gXEJAAQEKAAC8AXQC9AZAAAhQAAAii9AYQi8AZkKgBQkJABi8gZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-8.3,128.7,16.6);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmGA6QijgYAAgiQAAghCjgZQCigXDkAAQDlAACiAXQCiAZAAAhQAAAiiiAYQiiAZjlgBQjkABiigZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-8.3,110.8,16.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmGA6QijgYAAgiQAAghCjgZQCigXDkAAQDlAACiAXQCiAZAAAhQAAAiiiAYQiiAZjlgBQjkABiigZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-8.3,110.8,16.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnFA6Qi9gYAAgiQAAghC9gZQC8gXEJAAQEKAAC8AXQC9AZAAAhQAAAii9AYQi8AZkKgBQkJABi8gZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-8.3,128.7,16.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnvA6QjPgYAAgiQAAghDPgZQDNgXEiAAQEjAADOAXQDOAZAAAhQAAAijOAYQjOAZkjgBQkiABjNgZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-8.3,140.7,16.6);


(lib.TAIL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AkLKiIg5gBIg5gDIjjgVIgBAAIgBgBIhQg+IBUA1IDhAEIBxgEQAmgCBKgHIDbgjQA6gNAxgQIAugQIi6h+IC0AkIAEABIAIABIATgBIAXgDIAfhMIACABIAAAAQAFACAIgBQAIAAAMgFQAUgIAZgSIhGAFIgEhdIABAAQAdgCAkgYQAfgVAjgkQAPgQARgVIpGCjIFKjDQArgZAvg9QAkgvAkhEQAfg5AchGIABgEIi+BzIAaiEIAEgaIABgaIgBgaIgDgaIgGgZIgIgZIgXgvQgGgKgJgLQgIgLgJgKQgHgJgLgLQgKgKgPgMIgCARQgGAtgRA0QgbBPg1BeQgYAogaApQgWAkgeAoQg0BIg/BJQgsA0hQBWQhJBNg4A3QhKBHg9A4IhFA9QgnAiggAaQA6g6BGhLQBDhHA6hBQBJhTAug4QAxg7BBhVQA6hJAwhJQAxhKAshRQAthbAWhIQAchegNhFIgPhQIBoA0QANAHAPALQAbATAYAXIAXAYIAWAaQALAOAIANIASAeQALAWADAJIAMAhIAIAhIAFAiIACAhICIhVIBuhFIgmB9IgyCNQggBNgfA7QgeA3gfAvIEhhOIhcCTQgPAXgPASQgkAvgfAgIgIAIIBrgFIhTBbIglAkQgdAagbASIgMAIIBTAjIiSAwIgyAMIAvAjIhMAkQgJAEgTAGQgaAJgeAIQg1AOg9ALIg4AJIg4AGIhyAIQgpACgpAAIggAAg");
	this.shape.setTransform(0,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0D0").s().p("AoqJoIhTg6QDcjFDTj2QGknsgrj7IAnAXQAuAgAkApQBxCCgpCvIDaiGQgdBig0BuQhmDahsA/IFbhgQgkA+g1A+QhpB5hUAHIC+gLQgiAngsAiQhUBBgxgQIBjAnQgiANgqALQhTAVgfgOIBZA/QhDAkiQAdQizAkjdAAQiFAAiTgNg");
	this.shape_1.setTransform(-5.2,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0E0E").s().p("AkLKiIg5gBIg5gDIjjgVIgBAAIgBgBIhQg+IBUA1IDhAEIBxgEQAmgCBKgHIDbgjQA6gNAxgQIAugQIi6h+IC0AkIAEABIAIABIATgBIAXgDIAfhMIACABIAAAAQAFACAIgBQAIAAAMgFQAUgIAagSIhHAFIgEhdIACAAQAcgCAkgYQAfgVAjgkQAPgQASgVIpHCjIFKjDQArgZAvg9QAkgvAkhEQAfg5AchGIABgEIi+BzIAaiEIAEgaIABgaIgBgaIgDgaIgGgZIgIgZIgXgvQgGgKgJgLQgIgLgJgKQgHgJgLgLQgKgKgOgMIgDARQgGAtgRA0QgbBPg1BeQgYAogaApQgWAkgeAoQg0BIg/BJQgsA0hQBWQhJBNg4A3QhKBHg9A4IhFA9QgnAiggAaQA6g6BGhLQBDhHA6hBQBJhTAug4QAxg7BBhVQA6hJAwhJQAxhKAshRQAthbAWhIQAchegNhFIgPhQIBoA0QANAHAPALQAbATAYAXIAXAYIAWAaQALAOAIANIASAeQALAWADAJIAMAhIAIAhIAFAiIACAhICIhVIBuhFIgmB9IgyCNQggBNgfA7QgeA3gfAvIEhhOIhcCTQgPAXgPASQgkAvgfAgIgIAIIBrgFIh4B/QgdAagbASIgMAIIBTAjIiSAwIgyAMIAvAjIhMAkIgcAKQgaAJgeAIQg1AOg9ALIg4AJIg4AGIhyAIQgpACgpAAIggAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,-67.4,138.3,135.4);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.LEG4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E0E0E").ss(7).p("AgFhyICzg7IAAB+IgzBbQg2BhgJAOIgOAXQglAFgmADQhSAGgXgOIgkgXQgFgVAEgWQAHguAngLQAogLAvg9QAYgfAOgdQgFgIgEgJQgJgSANgCg");
	this.shape.setTransform(0,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2EDE0").s().p("AiGCrIgkgXQgFgVAEgWQAHguAngLQAogLAvg9QAYgfAOgdQgFgIgEgJQgJgSANgCICzg7IAAB+IgzBbQg2BhgJAOIgOAXQglAFgmADIgqACQgvAAgQgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-22.9,47,68.6);


(lib.LEG3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E0E0E").p("AgMAhQAHghAUgb");
	this.shape.setTransform(-13.7,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0E0E").p("AgNAjIAbhF");
	this.shape_1.setTransform(-5.7,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0E0E0E").ss(7).p("AixkpIASCfQAcCoA2AwIgyCRIgXALQgbAOgNASQgqA3BpBCIBLAMQBMAHAUgTQAmhQAmhZQBKixgFgrQAIhLADhRQAIiigTgcIgfgug");
	this.shape_2.setTransform(0,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2EDE0").s().p("Ag0GMIhLgMQhphCAqg3QANgSAbgOIAXgLIAyiRQg2gwgcioIgSifIFPhhIAfAuQATAcgICiQgDBRgIBLQAFArhKCxQgmBZgmBQQgOAOgrAAQgRAAgWgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-66,52.6,109.4);


(lib.LEG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AgNAVQABgLAGgMQAGgQAFgHQADgEAEgCIACgBIABAAIgCADIgDAHIgJAWIgJAXIgGAKg");
	this.shape.setTransform(-0.8,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0E0E").s().p("AgOAXIAAgBIACgDIAAABIABgCQAEgLAFgHQAEgLAFgGIAFgFIADgBIgDAJQgEAKgFAHQgEAKgGAHIgDADIgDABg");
	this.shape_1.setTransform(-6.6,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0E0E0E").ss(7).p("AjLlKQCHHXAAAbIAAA6IguBPIADAhQAKAjAjANQAsAbAjgDQA3gDBNg9IBEhSIgcqag");
	this.shape_2.setTransform(-0.4,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2EDE0").s().p("AhHF/QgigNgKgkIgDghIAthPIAAg5QAAgciHnXIGEhIIAdKaIhFBSQhMA9g4AEIgGAAQggAAgpgYg");
	this.shape_3.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-45.6,49.8,89.1);


(lib.LEG1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AgNAUQABgMAFgKQAFgKAHgLIAJgHIgEALIgXAxQgBgEABgGg");
	this.shape.setTransform(-14.5,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0E0E").s().p("AgLAWQADgMAFgLIAKgXIAHgJIgCALQgCALgGANQgEANgGAJQgDAHgEADg");
	this.shape_1.setTransform(-7.6,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0E0E0E").ss(7).p("Ajal2IARDrQAVDuARAUIgZBIQgaBMgEAPQgHAbAKAfQANArAnASIBGAJQBOAEApggQAjhtAghxIA8hyQATg0AShAQAliCgGg5IgSiWg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2EDE0").s().p("AhdGZIhGgKQgngSgNgqQgKggAHgaQAEgQAahLIAZhJQgRgUgVjtIgRjsIGlggIASCWQAGA5glCBQgSBBgTAzIg8ByQggBygjBtQglAchDAAIgPAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-44.7,67,89.2);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E0E0E").ss(5).p("AAPgTQBth1B9AGQBxAGBXBhQBVBbAMB5QANCDhUBcQiTCgmAgtQh4gOiDghIhqgeQhEiegni/QhOl6CTihQBUhbCFABQB6ABBlBMQBnBOAPBwQARB9htB5gAALgQIAEgD");
	this.shape.setTransform(0.2,-7,0.519,0.519,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0C0F").s().p("Ag4ILQh4gOiDghIhqgeQhEiegni/QhOl6CTihQBUhbCFABQB6ABBlBMQBnBOAPBwQARB9htB5IgEADIAEgDQBth1B9AGQBxAGBXBhQBVBbAMB5QANCDhUBcQhyB9kFAAQhJAAhTgKg");
	this.shape_1.setTransform(0.2,-7,0.519,0.519,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-37.9,75.9,65.3);


(lib.HEAD2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AgTBKIAAgUQAAgYAHgfIAQhQIAEAHIAEAIIAEALQAEAMABAQQAAAOgEARQgCALgCAFIgFAOQgEALgGAOIgLARIgFAGg");
	this.shape.setTransform(-62.1,126,1,1,-165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0E0E").ss(4).p("AiaiTQC0gTAHgJIA4A1QA7A3ALAIQAFAEgEAGQgRAzgZAxQgvBigzAcQgdARg8gUQhAgVgSgpQgMgcADhEQAGiMAAgXg");
	this.shape_1.setTransform(-63.2,128.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F04C62").s().p("AhFCqQhAgWgSgoQgMgcADhEQAGiMAAgXQC0gUAHgIIA4A1QA7A2ALAJQAFADgEAGQgRA1gZAwQgvBhgzAdQgOAHgTAAQgYAAgggKg");
	this.shape_2.setTransform(-63.2,129.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0E0E0E").ss(5).p("AB4A3Qg4gQg6gWQhygqgKgd");
	this.shape_3.setTransform(-86.8,64.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0E0E0E").ss(5).p("AiJgbIBzAhQB2AgAZgS");
	this.shape_4.setTransform(-10.1,89.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0E0E0E").ss(6.5).p("AtSAcQgCALgIAKQgEAHgMAQQgyBOAHBpQAGBhA0BSQAqBCBJBBQAzAuBWA9QBUA7BJAjQAjAQAxAPQAcAJA6AQQDhA0DagPQG6gegSlTQAMgpAmg6QBMh2B+haQACgCgLhSQgLhSASgIQAcgLAcgSQAfgUgBgGQAAgIgxgMQgxgMgCgFQgCgGAfgcQAfgbgEgEQgwgfgugNQgHgCg4gKQgpgIACgFQAdg/AJgUQAPgigNABQgLABgcANQgdAPgHACQgKAEgEg+QgEg9AHgbQhXADguAFQAHgVAMgUQAZgpAcAGQgqgQgygPQhigdgjAIQAbg5AagZQglgFgsgBQhYgBgkAYQADgfAAgjQABhEgIgRQgpADg3AKQhqAUhBAhQAFgVAIgYQARgyASgTQhMgmhiALQjDAVhsD1QACAAgxgTQgagLg+ABQg+ABAMAKQAMAKAJARQAIAPAEANQAKAjgFAiIg7gpQg5gnAFAJQAGAKgHAsQgHAugMAXQgFALgvgjQgrggADAKQAEAQAXBHQATBBgFAKQgGALgJAFQgJAEgBADQAAB7ADBRQAAAIADAtQADAggBATQAAAJgBAHg");
	this.shape_5.setTransform(-38.4,59.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBC4C4").s().p("AgSgeIAUALQAVASgEAgg");
	this.shape_6.setTransform(-49.5,97.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#352B2B").s().p("AANBMQgHAAgcgLIgbgKQgYgHgKgbQgKgbARgiQAVgoAoAGQASAEAPALIAhAGQAhAPADApQACAggXAWQgWATgcAAIgDAAg");
	this.shape_7.setTransform(-55.2,97.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF70A3").s().p("AAJAeIgGgHQgDgEgCgGIgGgMQgFgJgBgLIgDgNIAEAAIAFABIAGACQAFAFADAFQAFAFADAIQAGAMgDANIgDAKIgCAEg");
	this.shape_8.setTransform(-10.7,123.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF70A3").s().p("AgfALIADgGQADgFAFgFQAFgFAIgDQALgHAPACIAJACIAEACIgJAKIgKAGIgLAGIgUAIIgFABIgIADg");
	this.shape_9.setTransform(-108.1,95.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF70A3").s().p("AAJAeIgHgHIgFgKIgFgLQgFgKgBgLIgDgNIAEAAIAFABIAFACQAFAEAEAFQAFAGADAIQAGANgDANIgDAJIgCAEg");
	this.shape_10.setTransform(-18.1,123.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0E0E0E").s().p("AhOgWIAcgDQAYAAAdADQAhADAVAHIAQAHIAFAEIgGgCIgRgBQgTABgfAFQgaAHgVAIIgIADIgKAGg");
	this.shape_11.setTransform(-9.7,68.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0E0E0E").s().p("AAaAeQgNgXgTgSIgZgSIgXgMIgagJIAcABIAcAFIAQAFIAOAGQAcANAaAUIAVAWIgrAdg");
	this.shape_12.setTransform(-75.8,47.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0E0E0E").ss(3.3).p("AkPhsIALAWQAQAaAaASQBVA4CagqIAWAcQAdAiAeAYQBgBLBIg8");
	this.shape_13.setTransform(-62.1,114);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#352B2B").s().p("AANBMQgHgBgbgKIgcgLQgYgGgJgbQgKgcAQghQAVgoAoAGQASAEAQALIAgAGQAhAOADApQADAhgYAVQgVAUgeAAIgCAAg");
	this.shape_14.setTransform(-55.5,97.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#130E0E").s().p("AARBfQgKAAgigNIgjgOQgegIgLghQgNgjAVgrQAagyAyAJQAXAEATAOIANAAQAPACANAFQAqATADAzQADApgeAbQgaAYgkAAIgDAAg");
	this.shape_15.setTransform(-55.5,97.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(130,88,52,0.4)","#0E0E0E"],[0,1],3.2,26.5,-2.2,-28).s().p("AihI1QhMgPhIgZQiSgzASg0IA+hpQgJhDgFhLQgMiVAOgiQABgEADgCQAIgGANgLQAFgFgZhRQgYhMAOAFQAOAFAlAZQAbASADgHQANgaAIgRIAFgNIAEhAQATAMA+AfQAVALAJAGQgFgMgJgkQgNg6gVgLQgegOBVAHQBVAHAtATQAhhbBKhLQCXiXDWBOIgaA3QgYA4APAGIgFCGIgQBlQgVB6gYBqQhLFYhMBEIgZAYQghAdgnAVQhZAyhbAAQgjAAgkgHg");
	this.shape_16.setTransform(-85.4,30.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(107,68,36,0.4)","#0E0E0E"],[0,1],-10,16.3,18,-20.9).s().p("AkEIFQihhogtjwQgOhHAnhpQAjhfA/haQBXh+CVi6QA2hVBjAHQAyADAoAUIhLBQIB+gBIAECIIBWgYIgmCAQBEAJBAAjQAgARATAQIg+A7IBvAmIhjA6IAJCoIiGB1IhlCrIgXBfQhdAhhRAAQhyAAhfg/g");
	this.shape_17.setTransform(6.7,60.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0E0E0E").ss(2.6).p("AtSAWQgCALgIAKQgEAHgMAQQgyBOAHBpQAGBhA0BSQAqBCBJBBQAzAuBWA9QBUA7BJAjQAjAQAxAPQAcAJA6AQQDLA+DPgLQGkgVAllqQAMgpAmg6QBMh2B+haQACgCgLhSQgLhSASgIQAcgLAcgSQAfgUgBgGQAAgIgxgMQgxgMgCgFQgCgGAfgcQAfgbgEgEQgwgfgugNQgHgCg4gKQgpgIACgFQAdg/AJgUQAPgigNABQgLABgcANQgdAPgHACQgKAEgEg+QgEg9AHgbQhXADguAFQAHgVAMgUQAZgpAcAGQgqgQgygPQhigdgjAIQAbg5AagZQglgFgsgBQhYgBgkAYQADgfAAgjQABhEgIgRQgpADg3AKQhqAUhBAhQAFgVAIgYQARgyASgTQhMgmhiALQjDAVhsD1QACAAgxgTQgagLg+ABQg+ABAMAKQAMAKAJARQAIAPAEANQAKAjgFAiIg7gpQg5gnAFAJQAFAJADAQQADAPgBANQgCAPgcA3QgFALgvgjQgrggADAKQAEAQAWBAQASA7gFAKQgFAKgJAMQgIALgBADQAAB7ADBRQAAAIADAtQADAggBATQAAAJgBAHg");
	this.shape_18.setTransform(-38.4,59.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7E0D0").s().p("AkaMwIhWgZQgxgPgjgQQhJgjhUg7QhWg9gzguQhJhBgqhCQg0hSgGhhQgHhpAyhOIAQgXQAIgKACgLQABgHAAgJQABgTgDggIgDg1QgDhRAAh7IAJgOIAOgWQAFgKgSg7IgahQQgDgKArAgQAvAjAFgLQAcg3ACgPQABgNgDgPQgDgQgFgJQgFgJA5AnIA7ApQAFgigKgjQgEgNgIgPQgJgRgMgKQgMgKA+gBQA+gBAaALIAvATIAAAAIAAAAQBsj1DDgVQBigLBMAmQgSATgRAyQgIAYgFAVQBBghBqgUQA3gKApgDQAIARgBBEQAAAjgDAfQAkgYBYABQAsABAlAFQgaAZgbA5QAjgIBiAdQAyAPAqAQQgcgGgZApQgMAUgHAVQAugFBXgDQgHAbAEA9QAEA+AKgEIAkgRQAcgNALgBQANgBgPAiIgmBTQgCAFApAIIA/AMQAuANAwAfQAEAEgfAbQgfAcACAGQACAFAxAMQAxAMAAAIQABAGgfAUQgcASgcALQgSAIALBSQALBSgCACQh+BahMB2QgmA6gMApQglFqmkAVQgeACgeAAQixAAitg1g");
	this.shape_19.setTransform(-38.4,59.9);

	this.text = new cjs.Text("", "12px 'Times-Roman'");
	this.text.lineHeight = 14;
	this.text.setTransform(29.8,84.9,1,1,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0E0E0E").ss(5).p("AB4A3Qg4gQg6gWQhygqgKgd");
	this.shape_20.setTransform(-86.8,64.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0E0E0E").ss(5).p("AiJgbIBzAhQB2AgAZgS");
	this.shape_21.setTransform(-10.1,88.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0E0E0E").ss(6.5).p("AtSAcQgCALgIAKQgEAHgMAQQgyBOAHBpQAGBhA0BSQAqBCBJBBQAzAuBWA9QBUA7BJAjQAjAQAxAPQAcAJA6AQQDhA0DagPQG6gegSlTQAMgpAmg6QBMh2B+haQACgCgLhSQgLhSASgIQAcgLAcgSQAfgUgBgGQAAgIgxgMQgxgMgCgFQgCgGAfgcQAfgbgEgEQgwgfgugNQgHgCg4gKQgpgIACgFQAdg/AJgUQAPgigNABQgLABgcANQgdAPgHACQgKAEgEg+QgEg9AHgbQhXADguAFQAHgVAMgUQAZgpAcAGQgqgQgygPQhigdgjAIQAbg5AagZQglgFgsgBQhYgBgkAYQADgfAAgjQABhEgIgRQgpADg3AKQhqAUhBAhQAFgVAIgYQARgyASgTQhMgmhiALQjDAVhsD1QACAAgxgTQgagLg+ABQg+ABAMAKQAMAKAJARQAIAPAEANQAKAjgFAiIg7gpQg5gnAFAJQAGAKgHAsQgHAugMAXQgFALgvgjQgrggADAKQAEAQAXBHQATBBgFAKQgGALgJAFQgJAEgBADQAAB7ADBRQAAAIADAtQADAggBATQAAAJgBAHg");
	this.shape_22.setTransform(-38.4,59);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBC4C4").s().p("AgSgeIAUALQAVASgEAgg");
	this.shape_23.setTransform(-49.5,97);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#352B2B").s().p("AANBMQgHAAgcgLIgbgKQgYgHgKgbQgKgbARgiQAVgoAoAGQASAEAPALIAhAGQAhAPADApQACAggXAWQgWATgcAAIgDAAg");
	this.shape_24.setTransform(-55.2,97.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF70A3").s().p("AAJAeIgGgHQgDgEgCgGIgGgMQgFgJgBgLIgDgNIAEAAIAFABIAGACQAFAFADAFQAFAFADAIQAGAMgDANIgDAKIgCAEg");
	this.shape_25.setTransform(-10.7,123.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF70A3").s().p("AgfALIADgGQADgFAFgFQAFgFAIgDQALgHAPACIAJACIAEACIgJAKIgKAGIgLAGIgUAIIgFABIgIADg");
	this.shape_26.setTransform(-108.1,94.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF70A3").s().p("AAJAeIgHgHIgFgKIgFgLQgFgKgBgLIgDgNIAEAAIAFABIAFACQAFAEAEAFQAFAGADAIQAGANgDANIgDAJIgCAEg");
	this.shape_27.setTransform(-18.1,123.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0E0E0E").s().p("AhOgWIAcgDQAYAAAdADQAhADAVAHIAQAHIAFAEIgGgCIgRgBQgTABgfAFQgaAHgVAIIgIADIgKAGg");
	this.shape_28.setTransform(-9.7,67.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0E0E0E").s().p("AAaAeQgNgXgTgSIgZgSIgXgMIgagJIAcABIAcAFIAQAFIAOAGQAcANAaAUIAVAWIgrAdg");
	this.shape_29.setTransform(-75.8,47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0E0E0E").ss(3.3).p("AkPhsIALAWQAQAaAaASQBVA4CagqIAWAcQAdAiAeAYQBgBLBIg8");
	this.shape_30.setTransform(-62.1,113.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#352B2B").s().p("AANBMQgHgBgbgKIgcgLQgYgGgJgbQgKgcAQghQAVgoAoAGQASAEAQALIAgAGQAhAOADApQADAhgYAVQgVAUgeAAIgCAAg");
	this.shape_31.setTransform(-55.5,97.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#130E0E").s().p("AARBfQgKAAgigNIgjgOQgegIgLghQgNgjAVgrQAagyAyAJQAXAEATAOIANAAQAPACANAFQAqATADAzQADApgeAbQgaAYgkAAIgDAAg");
	this.shape_32.setTransform(-55.5,97.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(130,88,52,0.4)","#0E0E0E"],[0,1],3.2,26.5,-2.2,-28).s().p("AihI1QhMgPhIgZQiSgzASg0IA+hpQgJhDgFhLQgMiVAOgiQABgEADgCQAIgGANgLQAFgFgZhRQgYhMAOAFQAOAFAlAZQAbASADgHQANgaAIgRIAFgNIAEhAQATAMA+AfQAVALAJAGQgFgMgJgkQgNg6gVgLQgegOBVAHQBVAHAtATQAhhbBKhLQCXiXDWBOIgaA3QgYA4APAGIgFCGIgQBlQgVB6gYBqQhLFYhMBEIgZAYQghAdgnAVQhZAyhbAAQgjAAgkgHg");
	this.shape_33.setTransform(-85.4,30.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(107,68,36,0.4)","#0E0E0E"],[0,1],-10,16.3,18,-20.9).s().p("AkEIFQihhogtjwQgOhHAnhpQAjhfA/haQBXh+CVi6QA2hVBjAHQAyADAoAUIhLBQIB+gBIAECIIBWgYIgmCAQBEAJBAAjQAgARATAQIg+A7IBvAmIhjA6IAJCoIiGB1IhlCrIgXBfQhdAhhRAAQhyAAhfg/g");
	this.shape_34.setTransform(6.7,60.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0E0E0E").ss(2.6).p("AtSAWQgCALgIAKQgEAHgMAQQgyBOAHBpQAGBhA0BSQAqBCBJBBQAzAuBWA9QBUA7BJAjQAjAQAxAPQAcAJA6AQQDLA+DPgLQGkgVAllqQAMgpAmg6QBMh2B+haQACgCgLhSQgLhSASgIQAcgLAcgSQAfgUgBgGQAAgIgxgMQgxgMgCgFQgCgGAfgcQAfgbgEgEQgwgfgugNQgHgCg4gKQgpgIACgFQAdg/AJgUQAPgigNABQgLABgcANQgdAPgHACQgKAEgEg+QgEg9AHgbQhXADguAFQAHgVAMgUQAZgpAcAGQgqgQgygPQhigdgjAIQAbg5AagZQglgFgsgBQhYgBgkAYQADgfAAgjQABhEgIgRQgpADg3AKQhqAUhBAhQAFgVAIgYQARgyASgTQhMgmhiALQjDAVhsD1QACAAgxgTQgagLg+ABQg+ABAMAKQAMAKAJARQAIAPAEANQAKAjgFAiIg7gpQg5gnAFAJQAFAJADAQQADAPgBANQgCAPgcA3QgFALgvgjQgrggADAKQAEAQAWBAQASA7gFAKQgFAKgJAMQgIALgBADQAAB7ADBRQAAAIADAtQADAggBATQAAAJgBAHg");
	this.shape_35.setTransform(-38.4,59.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7E0D0").s().p("AkaMwIhWgZQgxgPgjgQQhJgjhUg7QhWg9gzguQhJhBgqhCQg0hSgGhhQgHhpAyhOIAQgXQAIgKACgLQABgHAAgJQABgTgDggIgDg1QgDhRAAh7IAJgOIAOgWQAFgKgSg7IgahQQgDgKArAgQAvAjAFgLQAcg3ACgPQABgNgDgPQgDgQgFgJQgFgJA5AnIA7ApQAFgigKgjQgEgNgIgPQgJgRgMgKQgMgKA+gBQA+gBAaALIAvATIAAAAIAAAAQBsj1DDgVQBigLBMAmQgSATgRAyQgIAYgFAVQBBghBqgUQA3gKApgDQAIARgBBEQAAAjgDAfQAkgYBYABQAsABAlAFQgaAZgbA5QAjgIBiAdQAyAPAqAQQgcgGgZApQgMAUgHAVQAugFBXgDQgHAbAEA9QAEA+AKgEIAkgRQAcgNALgBQANgBgPAiIgmBTQgCAFApAIIA/AMQAuANAwAfQAEAEgfAbQgfAcACAGQACAFAxAMQAxAMAAAIQABAGgfAUQgcASgcALQgSAIALBSQALBSgCACQh+BahMB2QgmA6gMApQglFqmkAVQgeACgeAAQixAAitg1g");
	this.shape_36.setTransform(-38.4,59.6);

	this.text_1 = new cjs.Text("", "12px 'Times-Roman'");
	this.text_1.lineHeight = 14;
	this.text_1.setTransform(29.8,84.7,1,1,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.8,-43.5,207,202.5);


(lib.HEAD1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAYQgLgDgFgKQgFgJADgJQAEgKAJgFQAKgFAJAEQAKADAFAKQAFAJgDAIQgDALgKAFQgGADgGAAIgGgCg");
	this.shape.setTransform(-87.1,56.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0E0E").s().p("AAAAmQgRgFgIgPQgIgPAFgOQAGgQAOgIQANgIAQAFQAQAkgKAnQgJAEgIAAQgGAAgEgDg");
	this.shape_1.setTransform(-80,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0E0E").s().p("AgeBoQglgLgQgnQgRgnAOgqQAOgrAkgWQAkgXAjAMQAjALARAlQgQgEgOAIQgPAHgFAQQgFAQAIANQAIAPAQAGQAPAFAOgHIgEAOQgPApgjAUQgWANgVAAQgNAAgNgEg");
	this.shape_2.setTransform(-86.7,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_3.setTransform(-77.4,66.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_4.setTransform(-77.6,67.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F6148").s().p("AgmB7QgsgOgTguQgTguAQgxQAQgzAqgaQArgaApAOQArANAUAsQARAngJAqQAHgigPggQgRgmgkgLQglgMgiAXQgkAWgOArQgOAqARAnQARAnAlALQAiAMAjgVQAfgSAPghQgSApglAWQgaAPgZAAQgPAAgQgEg");
	this.shape_5.setTransform(-88,63.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A1704C").s().p("AgsCQQg0gQgXg2QgWg2ASg6QATg8AygfQAygfAyARQAxAPAXA0QAVAugLAxQAIgngQgmQgUgsgrgOQgrgOgpAbQgqAagQAzQgQAxATAuQATAtAsAOQApAOApgZQApgYASgxIgBACQgUA5gxAcQgfATgeAAQgSAAgRgGg");
	this.shape_6.setTransform(-89.9,63);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CB9472").s().p("Ag0CqQg9gTgbhAQgbg/AXhFQAWhHA7gkQA6gkA7ATQA6ASAcA+QAYA1gNA6QAJgvgUgsQgXg0gxgPQg0gRgwAfQgyAfgTA8QgSA6AWA2QAXA2A0AQQAwAQAwgdQArgYAVgvQgZA6gzAdQglAXgkAAQgVAAgUgHg");
	this.shape_7.setTransform(-92.1,62.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAYQgLgDgFgKQgFgJADgJQAEgKAJgFQAKgFAIAEQALADAFAJQAFAKgDAIQgEALgJAFQgGADgGAAIgGgCg");
	this.shape_8.setTransform(-11.9,78.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0E0E0E").s().p("AgOAlQgPgEgIgOQAPglAhgUQAPAGAHAPQAIAPgFANQgFAQgQAIQgIAEgIAAQgGAAgHgCg");
	this.shape_9.setTransform(-17,80.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0E0E0E").s().p("AggBoQgkgLgQglQgRglALgoIAFgOQAIAOAPAEQAQAGAPgIQAQgIAFgQQAFgPgIgPQgHgPgQgGQAjgUAiALQAlAMARAnQAQAngOApQgOArgkAXQgYAOgWAAQgMAAgNgEg");
	this.shape_10.setTransform(-12.2,86.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_11.setTransform(-21.1,83);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_12.setTransform(-21.3,83.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F6148").s().p("AgmB7QgqgOgUgsQgRgnAJgqQgHAiAPAhQAQAlAkALQAlAMAigWQAkgXAOgrQAOgpgQgnQgRgnglgMQgigLgjAUQgfASgPAiQASgpAkgWQAqgZAoANQAsAOAUAuQATAugQAxQgQAzgrAaQgbASgaAAQgPAAgQgFg");
	this.shape_13.setTransform(-10.6,86.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A1704C").s().p("AgsCQQgygPgXg0QgVguAKgxQgIAnASAmQATAsArAOQAsAOAogbQAqgaAQgzQAQgxgTguQgTgugsgOQgogNgqAZQgpAYgSAxIABgCQAVg5AwgcQAxgdAwAQQAzAQAXA2QAXA2gTA6QgTA8gyAfQghAUgfAAQgRAAgSgGg");
	this.shape_14.setTransform(-8.8,87.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CB9472").s().p("Ag1CqQg6gTgcg9QgWgzAKg3QgHAtATApQAXA0AyAPQAzARAwgfQAygfATg8QATg6gXg2QgXg2gzgQQgwgQgxAdQgqAZgWAuQAZg5A0geQA5giA5ASQA8ATAbBAQAbA/gXBFQgWBGg7AlQgmAXglAAQgVAAgVgGg");
	this.shape_15.setTransform(-6.6,87.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0E0E0E").ss(6.5).p("AtTAcQgCALgHAKQgFAHgMAQQgxBOAHBpQAGBhA0BSQAqBCBIBBQAzAuBXA9QBUA7BJAjQAiAQAyAPQAcAJA6AQQDgA0DbgPQG5gegSlTQANgpAmg6QBLh2B+haQADgCgMhSQgLhSASgIQAcgLAdgSQAegUAAgGQgBgIgwgMQgxgMgCgFQgCgGAfgcQAegbgEgEQgvgfgugNQgIgCg4gKQgogIACgFQAcg/AKgUQAOgigNABQgKABgcANQgdAPgHACQgLAEgEg+QgEg9AIgbQhXADguAFQAGgVANgUQAYgpAcAGQgqgQgxgPQhigdgkAIQAbg5AbgZQglgFgtgBQhYgBgjAYQACgfABgjQABhEgJgRQgpADg2AKQhrAUhAAhQAEgVAJgYQAQgyASgTQhMgmhhALQjDAVhtD1QACAAgwgTQgbgLg+ABQg9ABAMAKQALAKAKARQAIAPAEANQAKAjgGAiQgjgZgYgQQg4gnAEAJQAGAKgGAsQgHAugMAXQgGALgugjQgrggACAKQAFAQAWBHQAUBBgGAKQgFALgKAFQgIAEgCADQAAB7ADBRQABAIADAtQACAgAAATQAAAJgCAHg");
	this.shape_16.setTransform(-38.4,59);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CBC4C4").s().p("AgSgeIAUAKQAVATgEAgg");
	this.shape_17.setTransform(-49.5,97);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#352B2B").s().p("AANBMQgHAAgcgLIgbgKQgYgHgKgbQgKgbARgiQAVgoAoAGQASAEAPALIAhAGQAhAPADApQACAggXAWQgWATgcAAIgDAAg");
	this.shape_18.setTransform(-55.3,97.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF70A3").s().p("AAJAfIgGgIQgDgEgCgGIgGgLQgFgKgBgLIgDgNIAEAAIAFABIAGACQAFAFADAFQAFAFADAIQAGAMgDAOIgDAKIgCADg");
	this.shape_19.setTransform(-10.7,123.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF70A3").s().p("AgeALIABgGQADgFAGgFQAFgFAIgDQALgHAOACIAKACIAEACIgJAKIgJAGIgMAGIgUAIIgFABIgIADg");
	this.shape_20.setTransform(-108.1,94.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF70A3").s().p("AAJAfIgHgHIgFgKIgFgNQgFgJgBgLIgDgNIAEAAIAFABIAFADQAFADAEAGQAFAFADAIQAGANgDANIgDAKIgCADg");
	this.shape_21.setTransform(-18.2,123.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF70A3").s().p("AgfAQIABgFQAAgDACgDQACgFAHgEQAEgFAIgEQAMgHANACQAGAAAEACIAEACIgCADIgHAHQgFAEgFACIgLAGQgIAFgMADIgNAEg");
	this.shape_22.setTransform(-114.8,90.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0E0E0E").s().p("AhNgWIAbgDQAXAAAeADQAgADAVAHIAKADIAHAEIAFAEIgGgCIgQgBQgUABggAFQgaAHgTAIIgJADIgJAGg");
	this.shape_23.setTransform(-9.7,67.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0E0E0E").s().p("AAaAdQgNgWgTgSIgZgSQgMgIgLgEIgagKIAcABQAMACAQAEIAQAFIAOAGQAcANAaAVIAVAUIgrAfg");
	this.shape_24.setTransform(-75.9,47.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0E0E0E").ss(3.3).p("AkPhsIALAWQAQAaAaASQBVA4CagqIAWAcQAdAiAeAYQBgBLBIg8");
	this.shape_25.setTransform(-62.2,113.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#352B2B").s().p("AANBMQgHgBgbgKIgcgLQgYgGgJgbQgKgcAQghQAVgoAoAGQASAEAQALIAgAGQAhAOADApQADAhgYAVQgVAUgeAAIgCAAg");
	this.shape_26.setTransform(-55.6,97.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#130E0E").s().p("AARBfQgKAAgigNIgjgOQgegIgLghQgNgjAVgrQAagyAyAJQAXAEATAOIApAHQAqATADAzQADApgeAbQgaAYgkAAIgDAAg");
	this.shape_27.setTransform(-55.6,97.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(130,88,52,0.4)","#0E0E0E"],[0,1],3.2,26.5,-2.2,-28).s().p("AihI1QhMgPhIgZQiRgzARg0IA+hpQgJhDgFhLQgMiVAOgiQABgEADgCQAIgGANgLQAFgFgZhRQgYhMAOAFQAOAFAlAZQAbASADgHQANgaAIgRIAFgNIAEhAQATAMA+AfQAVALAJAGQgFgMgJgkQgNg6gVgLQgegOBVAHQBVAHAtATQAhhbBKhLQCXiXDWBOIgaA3QgYA4APAGIgFCGIgQBlQgVB6gYBqQhLFYhMBEIgZAYQghAdgnAVQhZAyhcAAQgiAAgkgHg");
	this.shape_28.setTransform(-85.4,30.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(107,68,36,0.4)","#0E0E0E"],[0,1],-10,16.3,18,-20.9).s().p("AkEIFQihhogtjwQgOhHAnhpQAjhfA/haQBXh+CVi6QA2hVBjAHQAyADAoAUIhLBQIB+gBIAECIIBWgYIgmCAQBEAJBAAjQAgARATAQIg+A7IBvAmIhjA6IAJCoIiGB1IhlCrIgXBfQhdAhhRAAQhyAAhfg/g");
	this.shape_29.setTransform(6.6,60.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0E0E0E").ss(2.6).p("AtTAWQgCALgHAKQgFAHgMAQQgxBOAHBpQAGBhA0BSQAqBCBIBBQAzAuBXA9QBUA7BJAjQAiAQAyAPQAcAJA6AQQDKA+DQgLQGjgVAllqQANgpAmg6QBLh2B+haQADgCgMhSQgLhSASgIQAcgLAdgSQAegUAAgGQgBgIgwgMQgxgMgCgFQgCgGAfgcQAegbgEgEQgvgfgugNQgIgCg4gKQgogIACgFQAcg/AKgUQAOgigNABQgKABgcANQgdAPgHACQgLAEgEg+QgEg9AIgbQhXADguAFQAGgVANgUQAYgpAcAGQgqgQgxgPQhigdgkAIQAbg5AbgZQglgFgtgBQhYgBgjAYQACgfABgjQABhEgJgRQgpADg2AKQhrAUhAAhQAEgVAJgYQAQgyASgTQhMgmhhALQjDAVhtD1QACAAgwgTQgbgLg+ABQg9ABAMAKQALAKAKARQAIAPAEANQAKAjgGAiQgjgZgYgQQg4gnAEAJQAGAJACAQQADAPgBANQgBAPgcA3QgGALgugjQgrggACAKQAFAQAVBAQATA7gFAKQgGAKgIAMQgIALgCADQAAB7ADBRQABAIADAtQACAgAAATQAAAJgCAHg");
	this.shape_30.setTransform(-38.4,59.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7E0D0").s().p("AkaMwIhWgZQgygPgigQQhJgjhUg7QhXg9gzguQhIhBgqhCQg0hSgGhhQgHhpAxhOIARgXQAHgKACgLQACgHAAgJQAAgTgCggIgEg1QgDhRAAh7IAKgOIAOgWQAFgKgTg7IgahQQgCgKArAgQAuAjAGgLQAcg3ABgPQABgNgDgPQgCgQgGgJQgEgJA4AnIA7ApQAGgigKgjQgEgNgIgPQgKgRgLgKQgMgKA9gBQA+gBAbALIAuATIAAAAIAAAAQBtj1DDgVQBhgLBMAmQgSATgQAyQgJAYgEAVQBAghBrgUQA2gKApgDQAJARgBBEQgBAjgCAfQAjgYBYABQAtABAlAFQgbAZgbA5QAkgIBiAdQAxAPAqAQQgcgGgYApQgNAUgGAVQAugFBXgDQgIAbAEA9QAEA+ALgEIAkgRQAcgNAKgBQANgBgOAiIgmBTQgCAFAoAIIBAAMQAuANAvAfQAEAEgeAbQgfAcACAGQACAFAxAMQAwAMABAIQAAAGgeAUQgdASgcALQgSAIALBSQAMBSgDACQh+BahLB2QgmA6gNApQglFqmjAVQgeACgfAAQiwAAitg1g");
	this.shape_31.setTransform(-38.4,59.6);

	this.text = new cjs.Text("", "12px 'Times-Roman'");
	this.text.lineHeight = 14;
	this.text.setTransform(29.8,84.7,1,1,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.1,-43.5,211.3,196);


(lib.EAR2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DE9D74","rgba(200,142,105,0.953)","rgba(144,104,78,0.839)","rgba(65,49,39,0.659)","rgba(14,14,14,0.498)"],[0,0.122,0.369,0.714,1],8.5,52.5,-7.1,-34.3).s().p("AAMPCQg5iOhBi7QiDl1gfjcQhIoJCYnqIAOgEIAAgMQABgMAHgEQAVgMBBBLQBMBXBUDSQBdDgA6D9QBDEfACD2QACEbhWC6IhDCqg");
	this.shape.setTransform(7.2,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0E0E").ss(6.5).p("AmRgZQAFnJAfikQAki4B4iEQA4g+BxAKQA3AGAtARQCABrBYD9QBTDwAeE+QAqG5hfE/QgtCUhDBVQhFBXhTAIQhSAIhWhJQhVhJhFiLQibk5AEnCg");
	this.shape_1.setTransform(0,-22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#6B4424","#FFFFFF","#AEAEAE","#6B6B6B","#3D3D3D","#202020","#131313","#0E0E0E"],[0.427,0.616,0.694,0.776,0.851,0.914,0.969,1],9.7,67.5,-10,-56.9).s().p("AhgO2QhVhJhFiLQibk5AEnCQAFnJAfikQAki4B4iEQA4g+BxAKQA3AGAtARQCABrBYD9QBTDwAeE+QAqG5hfE/QgtCUhDBVQhFBXhTAIIgRABQhKAAhNhCg");
	this.shape_2.setTransform(0,-22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-145.1,92,269.5);


(lib.BODY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9C714A","#6B4424"],[0,1],-46.6,-4.9,19.2,5.5).s().p("AgkBzIg7j7QgXiShrhCQgigVgmgLIgfgFICwAYQDUAnC8BJQA9AWAPCbQAHBLgEBJQguAtgkgIQgLgCgJgJIgHgHIg/jVQAKA7gmDDQgWB0gaBqIhRAdQASgRg0j/g");
	this.shape.setTransform(12.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0E0E").ss(7).p("AJ8ENIAKgDQAHgEgCg1QgCg5gLg9QgfiqhHgaQhkg+iYg9Qkwh5kIAMIiPBJQiRBMgRAOQghAdgPAzQgZBbAUCsIBQDA");
	this.shape_1.setTransform(0,-7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2EDE0").s().p("AqCCeQgUisAZhbQAPgzAhgdQARgOCRhMICPhJQEIgMEwB5QCYA9BkA+QBHAaAfCqQALA9ACA5QACA1gHAEIgKADIyuBcg");
	this.shape_2.setTransform(0,-6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0E0E0E").ss(7).p("AhmApQANgHAKgGIC5hG");
	this.shape_3.setTransform(17.7,36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2EDE0").s().p("Ag5AUICLg0IiiBBQANgHAKgGg");
	this.shape_4.setTransform(15.5,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-51.2,138.4,100.2);


(lib.DOGBODY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HEAD
	this.instance = new lib.HEAD1();
	this.instance.setTransform(-20.1,13.3,1,1,0,0,0,-23.1,139.6);

	this.instance_1 = new lib.HEAD2();
	this.instance_1.setTransform(-27.1,-34.8,1,1,-9.3,0,0,-23.1,139.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.7,x:-27.1,y:9.2},4).to({_off:true,regY:139.5,rotation:-9.3,y:-34.8},5).wait(10).to({_off:false},5).to({regY:139.6,rotation:0,x:-20.1,y:13.3},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},5).to({y:-39.8},10).to({_off:true,y:-34.8},5).wait(6));

	// EAR2
	this.instance_2 = new lib.EAR2();
	this.instance_2.setTransform(-84.2,-118.3,1,1,-4.2,0,0,12.9,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-124.3},4).to({regX:12.8,rotation:18.8,x:-111.2,y:-148.4},5).to({regX:12.9,rotation:-4.2,y:-150.3},10).to({regY:62.5,rotation:3.3,x:-111.1},5).to({regY:62.6,rotation:-4.2,x:-84.2,y:-118.3},5).wait(1));

	// EAR1
	this.instance_3 = new lib.Tween7("synched",0);
	this.instance_3.setTransform(62.3,-129.2);

	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.setTransform(62.3,-129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},4).to({x:51.3,y:-172.2},5).to({rotation:-15,x:35.3,y:-178.2},10).to({rotation:0,x:45.3,y:-171.1},5).to({_off:true,x:62.3,y:-129.2},5).wait(1));

	// BODY
	this.instance_5 = new lib.BODY();
	this.instance_5.setTransform(1.5,-1.1,1,1,0,0,0,0.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:7.7,x:5.2,y:-0.1},4).to({rotation:0,x:1.5,y:-45.1},5).to({y:-50.1},10).to({rotation:-8.5,x:-2.5,y:-45.7},5).to({rotation:0,x:1.5,y:-1.1},5).wait(1));

	// LEG1
	this.instance_6 = new lib.LEG1();
	this.instance_6.setTransform(-14.4,36.1,1,1,0,0,0,-1.7,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-1.6,regY:-10.2,rotation:-7.3,x:-15.5,y:34.6},4).to({regX:-1.7,regY:-10.1,rotation:15,x:-14.4,y:-7.9},5).to({y:-12.9},10).to({rotation:6.5,x:-12.7,y:-6.6},5).to({rotation:0,x:-14.4,y:36.1},5).wait(1));

	// LEG2
	this.instance_7 = new lib.LEG2();
	this.instance_7.setTransform(-34.9,8.9,1,1,15,0,0,0,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:-41.6,rotation:7.7,x:-35.2,y:2.8},4).to({rotation:30,x:-34.9,y:-35.2},5).to({y:-40.2},10).to({rotation:21.5,x:-37,y:-30.5},5).to({regY:-41.5,rotation:15,x:-34.9,y:8.9},5).wait(1));

	// LEG4
	this.instance_8 = new lib.LEG4();
	this.instance_8.setTransform(13,28.8,1,1,0,0,0,0,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-0.1,regY:-18.1,rotation:-7.3,x:12.5,y:31.1},4).to({regY:-18.2,rotation:-30,x:12.9,y:-10.2},5).to({y:-12.2},10).to({regX:0,rotation:-23.5,x:13.3,y:-17.9},5).to({rotation:0,x:13,y:28.8},5).wait(1));

	// LEG3
	this.instance_9 = new lib.LEG3();
	this.instance_9.setTransform(48,5.2,1,1,0,0,0,0,-39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0.1,rotation:7.7,x:49.5,y:14.4},4).to({regX:0,rotation:-15,x:45,y:-36.8},5).to({y:-41.8},10).to({rotation:-23.5,x:41.8,y:-43.9},5).to({rotation:0,x:48,y:5.2},5).wait(1));

	// TAIL
	this.instance_10 = new lib.TAIL();
	this.instance_10.setTransform(61.2,2,1,1,0,0,0,-63.8,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:41.5},4).to({rotation:-4.2,y:-42},5).to({rotation:-4.2,y:-47},10).to({regX:-63.7,rotation:15.7,y:-42},5).to({regX:-63.8,rotation:0,y:2},5).wait(1));

	// SHADOW
	this.instance_11 = new lib.Tween1("synched",0);
	this.instance_11.setTransform(-4.1,83.2,1,3.38);

	this.instance_12 = new lib.Tween2("synched",0);
	this.instance_12.setTransform(-4.1,93.2,1,2.88);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween3("synched",0);
	this.instance_13.setTransform(-4.1,93.2);
	this.instance_13.alpha = 0.5;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween4("synched",0);
	this.instance_14.setTransform(-4.1,93.2);
	this.instance_14.alpha = 0.301;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween5("synched",0);
	this.instance_15.setTransform(-4.1,93.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,scaleY:2.88,y:93.2},4).wait(20).to({_off:false,scaleY:3.38,y:83.2},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:false},4).to({_off:true,scaleY:1,alpha:0.5},5).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},5).to({_off:true,alpha:0.301},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},10).to({_off:true,alpha:1},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},5).to({_off:true,scaleY:3.38,y:83.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-327.9,352.2,439.1);


// stage content:



(lib.WALK04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.play_btn.addEventListener("click", playmv.bind(this));
		
		function playmv()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.play();
			// End your custom code
		}
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.stop_btn.addEventListener("click", stopmv.bind(this));
		
		function stopmv()
		{
			this.stop();
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.replay_btn.addEventListener("click", skipmv.bind(this));
		
		function skipmv()
		{
			this.gotoAndStop(120);
		}
	}
	this.frame_120 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.skip_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(5);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.skip_btn.addEventListener("click", replaymv.bind(this));
		
		function replaymv()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120).call(this.frame_120).wait(1));

	// 按鈕
	this.skip_btn = new lib.Symbol1();
	this.skip_btn.setTransform(233.1,386.1);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.stop_btn = new lib.Symbol1();
	this.stop_btn.setTransform(270.1,388.1);
	new cjs.ButtonHelper(this.stop_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.play_btn = new lib.Symbol1();
	this.play_btn.setTransform(302.1,386.1);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.replay_btn = new lib.Symbol1();
	this.replay_btn.setTransform(334.1,387.1);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.instance = new lib.略過();
	this.instance.setTransform(321.2,375);

	this.instance_1 = new lib.暫停();
	this.instance_1.setTransform(257.7,375);

	this.instance_2 = new lib.播放();
	this.instance_2.setTransform(288.2,375);

	this.instance_3 = new lib.再播一次();
	this.instance_3.setTransform(222.5,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.replay_btn},{t:this.play_btn},{t:this.stop_btn},{t:this.skip_btn}]}).wait(121));

	// heart
	this.instance_4 = new lib.heart();
	this.instance_4.setTransform(107,169.1,1,1,0,0,0,2.8,-5.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({regX:0,regY:0,x:104.2,y:174.4,alpha:1},0).wait(1).to({regX:0.2,regY:-7,scaleX:1.08,scaleY:1.08,x:104.4,y:166.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:104.5,y:166.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:165.7},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:165.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:165.6},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:166},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:166.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:104.4,y:166.9},0).wait(1).to({scaleX:1,scaleY:1,y:167.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:104.5,y:166.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:165.1},0).wait(1).to({scaleX:1.48,scaleY:1.48,y:164},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:104.6,y:162.9},0).wait(1).to({scaleX:1.8,scaleY:1.8,y:161.8},0).wait(1).to({scaleX:1.64,scaleY:1.64,y:162.9},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:104.5,y:164},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:165.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:166.3},0).wait(1).to({scaleX:1,scaleY:1,x:104.4,y:167.4},0).wait(72));

	// WALK
	this.instance_5 = new lib.DOGBODY();
	this.instance_5.setTransform(751.6,259,0.534,0.534,0,0,0,18.1,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.44,scaleY:0.44,guide:{path:[751.5,258.9,589.7,240.4,427.9,222,425.7,221.9,374.4,211.9,323.1,201.9,277.8,218.7,232.3,235.6,222.7,239.9,213.1,244.3,193.1,253.8,190.9,254.9,189.9,255.7,188.9,256.5,189.1,257,110.1,275.5,74.5,278.7,38.9,281.9,-2.6,273.1,-44.1,264.4,-50.2,246.3,-56.4,228.3,-81.5,226.8,-102.1,225.4,-122.9,225.5]}},120).wait(1));

	// 遮 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AU3ExQgphCAAhqIAAmVQAAhEgSgSQgSgShAgHIAAgfIGbAAIAAAfQhHADgXATQgYAUAABFIAAGVQAABeAWAyQAoBeBwAAQAnAAAfgIQBUgVAkhLQAbg5AAhnIAAlyQAAhBgXgYQgZgahGgFIAAgfIELAAIAAAfQg6AMgSAQQgUAQAAA7IAAGCQAACbhKBVQguA0hQAUQgwAMg9AAQjSABhNh+gAGFEuQhwh4AAi0QAAizB1h9QB4h/C9gBQBMABBKAcQBLAcASAAQAUAAAMgOQALgNAJgcIAhAAIAAEdIgfAAQgshdgug1QhVhkhsABQh2gBg2BnQg2BmAAC4QAACXAzB3QAyB3CQAAQBNAAAbggQAQgTAAglIAAiBQAAg3gjgRQgWgLhDgBIAAgeIGiAAIAAAeQg/ADgVAXQgUAXgBA+IAACcQgoAYhaAZQhbAZhvAAQjKAAh6h/gABPGtIoWqIIgIAAIAAHaQAAA4AQAXQAYAmBLADIAAAfIkTAAIAAgfQBEgBATgZQAUgYAAgvIAAo+IhFhJQgNgLgWgDIAAgfIEBAAIGgH6IAGAAIAAljQAAg+gWgaQgXgbhBgFIAAgfIEDAAIAAAfQg5AKgTAPQgTARgBA3IAALLgAxHGWIAAgfQA0gBAXgMQAkgTAAg2IAApKQAAg2gjgSQgVgMg3gCIAAgfIGqAAIAAAfQg5ADgVAKQgkATAAA2IAAJKQAAAzAdASQAcARA5AAIAAAfgA4AGWIAAgfIBLgFQAVgEAAgRIgGgTIj0k2IggAgIAADtQABA2AiASQAVALAyADIAAAfImaAAIAAgfQApgBAWgIIAHgEQAkgTgBg2IAApKQAAg1gfgSIgLgFQgVgHgqgDIAAgfIGbAAIAAAfQg+AFgWATQgXASAABFIAAEFIEGkJIAjgnQAJgLgBgRQAAgXgUgHQgWgGg8gEIAAgfIFgAAIAAAfQheAIg+AtQg/AuitCxIF0HJQALAPAMAEIAkAGIAAAfg");
	var mask_graphics_120 = new cjs.Graphics().p("AU3ExQgphCAAhqIAAmVQAAhEgSgSQgSgShAgHIAAgfIGbAAIAAAfQhHADgXATQgYAUAABFIAAGVQAABeAWAyQAoBeBwAAQCMAAAyhoQAbg5AAhnIAAlyQAAhBgXgYQgZgahGgFIAAgfIELAAIAAAfQg6AMgSAQQgUAQAAA7IAAGCQAACbhKBVQhLBUigAAQjSABhNh+gAGFEuQhwh4AAi0QAAizB1h9QB4h/C9gBQBMABBKAcQBLAcASAAQAUAAAMgOQALgNAJgcIAhAAIAAEdIgfAAQgshdgug1QhVhkhsABQh2gBg2BnQg2BmAAC4QAACXAzB3QAyB3CQAAQBNAAAbggQAQgTAAglIAAiBQAAg3gjgRQgWgLhDgBIAAgeIGiAAIAAAeQg/ADgVAXQgUAXgBA+IAACcQgoAYhaAZQhbAZhvAAQjKAAh6h/gABPGtIoWqIIgIAAIAAHaQAAA4AQAXQAYAmBLADIAAAfIkTAAIAAgfQBEgBATgZQAUgYAAgvIAAo+IhFhJQgNgLgWgDIAAgfIEBAAIGgH6IAGAAIAAljQAAg+gWgaQgXgbhBgFIAAgfIEDAAIAAAfQg5AKgTAPQgTARgBA3IAALLgAxHGWIAAgfQA0gBAXgMQAkgTAAg2IAApKQAAg2gjgSQgVgMg3gCIAAgfIGqAAIAAAfQg5ADgVAKQgkATAAA2IAAJKQAAAzAdASQAcARA5AAIAAAfgA4AGWIAAgfIBLgFQAVgEAAgRIgGgTIj0k2IggAgIAADtQABA2AiASQAVALAyADIAAAfImaAAIAAgfQAxgBAVgMQAkgTgBg2IAApKQAAg1gfgSQgUgMg2gDIAAgfIGbAAIAAAfQg+AFgWATQgXASAABFIAAEFIEGkJIAjgnQAJgLgBgRQAAgXgUgHQgWgGg8gEIAAgfIFgAAIAAAfQheAIg+AtQg/AuitCxIF0HJQALAPAMAEIAkAGIAAAfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:274.3,y:98.7}).wait(120).to({graphics:mask_graphics_120,x:274.3,y:98.7}).wait(1));

	// light
	this.instance_6 = new lib.light();
	this.instance_6.setTransform(318.4,265.1);

	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.setTransform(225,308.7,0.998,0.998,-54.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.setTransform(207.2,314);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.setTransform(267.9,-62);

	this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},50).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},61).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,scaleX:1,scaleY:1,rotation:665.1,x:225,y:308.7,mode:"synched",startPosition:0},50).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false,rotation:1025.1},50).to({_off:true,scaleX:1,scaleY:1,rotation:1080,x:207.2,y:314},9).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},9).to({_off:true,x:267.9,y:-62},61).wait(1));

	// 字
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AU3ExQgphCAAhqIAAmVQAAhEgSgSQgSgShAgHIAAgfIGbAAIAAAfQhHADgXATQgYAUAABFIAAGVQAABeAWAyQAoBeBwAAQCMAAAyhoQAbg5AAhnIAAlyQAAhBgXgYQgZgahGgFIAAgfIELAAIAAAfQg6AMgSAQQgUAQAAA7IAAGCQAACbhKBVQhLBUigAAQjSABhNh+gAGFEuQhwh4AAi0QAAizB1h9QB4h/C9gBQBMABBKAcQBLAcASAAQAUAAAMgOQALgNAJgcIAhAAIAAEdIgfAAQgshdgug1QhVhkhsABQh2gBg2BnQg2BmAAC4QAACXAzB3QAyB3CQAAQBNAAAbggQAQgTAAglIAAiBQAAg3gjgRQgWgLhDgBIAAgeIGiAAIAAAeQg/ADgVAXQgUAXgBA+IAACcQgoAYhaAZQhbAZhvAAQjKAAh6h/gABPGtIoWqIIgIAAIAAHaQAAA4AQAXQAYAmBLADIAAAfIkTAAIAAgfQBEgBATgZQAUgYAAgvIAAo+IhFhJQgNgLgWgDIAAgfIEBAAIGgH6IAGAAIAAljQAAg+gWgaQgXgbhBgFIAAgfIEDAAIAAAfQg5AKgTAPQgTARgBA3IAALLgAxHGWIAAgfQA0gBAXgMQAkgTAAg2IAApKQAAg2gjgSQgVgMg3gCIAAgfIGqAAIAAAfQg5ADgVAKQgkATAAA2IAAJKQAAAzAdASQAcARA5AAIAAAfgA4AGWIAAgfIBLgFQAVgEAAgRIgGgTIj0k2IggAgIAADtQABA2AiASQAVALAyADIAAAfImaAAIAAgfQAxgBAVgMQAkgTgBg2IAApKQAAg1gfgSQgUgMg2gDIAAgfIGbAAIAAAfQg+AFgWATQgXASAABFIAAEFIEGkJIAjgnQAJgLgBgRQAAgXgUgHQgWgGg8gEIAAgfIFgAAIAAAfQheAIg+AtQg/AuitCxIF0HJQALAPAMAEIAkAGIAAAfg");
	this.shape.setTransform(274.3,98.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(121));

	// BACKGROUND
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFFF").s().p("Egs0AgQMAAAhAfMBZpAAAMAAABAfg");
	this.shape_1.setTransform(273,198.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261,192,859.6,413);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;