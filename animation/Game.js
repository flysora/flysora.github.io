(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 768,
	height: 640,
	fps: 40,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/PLAY.png", id:"PLAY"},
		{src:"images/PLAYAGAIN.png", id:"PLAYAGAIN"},
		{src:"images/PLAYAGAIN_ON.png", id:"PLAYAGAIN_ON"},
		{src:"images/PLAYON.png", id:"PLAYON"}
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



(lib.PLAY = function() {
	this.initialize(img.PLAY);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,168);


(lib.PLAYAGAIN = function() {
	this.initialize(img.PLAYAGAIN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,473,184);


(lib.PLAYAGAIN_ON = function() {
	this.initialize(img.PLAYAGAIN_ON);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,473,184);


(lib.PLAYON = function() {
	this.initialize(img.PLAYON);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,168);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgDCaQgWgJgFgHQgCgEAEgJQACgEABgJIAAgfQABgNAJAAQALABAQAHQASAIACAEQABADgBAPIgCAXIgBAXQgBAIgIACIgBAAQgGAAgQgIgAgDApQgRgIgKgMQgEgFAEgMIAFgMIAAiLQAAgJAKgEIAHgBQAIAAANAFQAOAEADAFIAAAUIAACUIABAHIABAGQgBAOgGABIgEABQgKAAgOgJg");
	this.shape.setTransform(212.6,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgDCaQgWgJgFgHQgCgEAEgJQACgEABgJIAAgfQABgNAJAAQALABAQAHQASAIACAEQABADgBAPIgCAXIgBAXQgBAIgIACIgBAAQgGAAgQgIgAgDApQgRgIgKgMQgEgFAEgMIAFgMIAAiLQAAgJAKgEIAHgBQAIAAANAFQAOAEADAFIAAAUIAACUIABAHIABAGQgBAOgGABIgEABQgKAAgOgJg");
	this.shape_1.setTransform(200,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAcCfQgMAAgUgFQgYgFgFgFQgFgHAGgLQAFgKAAgEIAAi0IgbAHIgGADQgEACgDAAQgIgDgPgTQgPgUACgHQADgIAOgFIAKAAIAJAAIB+ghIALgEQAGgDAEABQALABADAHIAGARQAEAOAAALQAAAIgCAEQgCAEgLABIgJgDQgFgCgDAAIgmALIAAC/QAAALAFAMQACAEgCAKQgDAMgEADIgEAAg");
	this.shape_2.setTransform(181.8,23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AAKCZIgagJIgZgGQgMgEgHgIQgPgQgJg4QgIgzAAg8QAAggAFg0QABgLAJgEQAEgBAYAGQAYAHAFAFQABACAAAEQAAAEgDAJQgEAIAAAFQgBAHAAAhQAABBAFAyQAIBEAOgBQAPgCAJg/QAFggAChPQAAgrgCgLQAAgHgCgGIgDgIQgCgNAKgGIAGgBQALAAAUAFQAUAGADAEQACACgBAMIAABGQAADQg6AGIgEAAQgJAAgMgEg");
	this.shape_3.setTransform(157.2,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AAGCaIgRgGIgigKQgegNgPgmQgGgRgEgUQgDgUAAgYQAAgRADgWQAEgXAGgaQAKgiALgSQAMgRAOAAIAHABIAHACQAbgIAHAAIAHABQAsAFAZAyQAXAtAAA8QAAA7gUAqQgLAXgPAMQgQANgSACIgFABQgGAAgHgDgAgiglQgDAUAAAYQAAAUACARQACARAFAOQAJAgARAEQASADANgsQAKgnAAg0QAAgkgGgZQgCgNgFgHQgEgIgFgBQgIgCgIAYQgCAMgEAFQgEAGgEAAIgGgCIgFgCQgGAOgEATg");
	this.shape_4.setTransform(132.2,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgcCTIgggKQgUgLgMglQgFgRgDgUQgDgUAAgXQAAg7ARgvQAJgaANgPQAMgOAPgDIAFgBQATAAAYAMQAcANALAPQAHAMADASIAEAYIADAPQABAFgFAGQgDAGgFACQgEACgYgHQgYgIgDgEQgHgEABgNIADgFIACgFQAAgagHAAQgMAAgJAqQgJAoAAAtQAAAjAEAUQAGAUAJAFQADACAEgFQAEgGAFgLQAIgXACgVQgFgEgQgHQgNgFAAgFQgCgFAFgKQAFgJAGgCQAFgDAJAAIARgBIAUgGQAMgFAFAAIAFABQAIABATAPQARANAAAFQgBAPgMAEIgFgCIgFgBIgFABQgKAkgNAlQgHASgJALQgJAMgMAFQgHADgHAAQgEAAgagKg");
	this.shape_5.setTransform(96,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("ABECdQgNgBgSgGQgWgHgCgIIgBgQQgTg2gbhBIAABtIACAHIAEAHIACALQAAAHgEAEQgDAEgHAAQgNAAgXgIQgWgHgDgEQgFgGAFgJIAEgMIAAjkIgBgHIAAgHQAEgMAKgFIAIAAQAPAAAPADQATAFAIAIQAFAFAHARIANAtQANAuASAuIAAiPIgBgIIgCgIIABgFQACgGAMgDQAKgCAIAAIAVAFQARAFAAAGIgBAIIgEAJIAADxIACAOQACARgGAFQgFADgOAAIgLAAg");
	this.shape_6.setTransform(69.4,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AAKCZIgagJIgZgGQgMgEgHgIQgPgQgJg4QgIgzAAg8QAAggAFg0QABgLAJgEQAEgBAYAGQAYAHAFAFQABACAAAEQAAAEgDAJQgEAIAAAFQgBAHAAAhQAABBAFAyQAIBEAOgBQAPgCAJg/QAFggAChPQAAgrgCgLQAAgHgCgGIgDgIQgCgNAKgGIAGgBQALAAAUAFQAUAGADAEQACACgBAMIAABGQAADQg6AGIgEAAQgJAAgMgEg");
	this.shape_7.setTransform(44,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("ABECdQgNgBgSgGQgWgHgCgIIgBgQQgTg2gbhBIAABtIACAHIAEAHIACALQAAAHgEAEQgDAEgHAAQgNAAgXgIQgWgHgDgEQgFgGAFgJIAEgMIAAjkIgBgHIAAgHQAEgMAKgFIAIAAQAPAAAPADQATAFAIAIQAFAFAHARIANAtQANAuASAuIAAiPIgBgIIgCgIIABgFQACgGAMgDQAKgCAIAAIAVAFQARAFAAAGIgBAIIgEAJIAADxIACAOQACARgGAFQgFADgOAAIgLAAg");
	this.shape_8.setTransform(19,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("ABECdQgNgBgSgGQgWgHgCgIIgBgQQgTg2gbhBIAABtIACAHIAEAHIACALQAAAHgEAEQgDAEgHAAQgNAAgXgIQgWgHgDgEQgFgGAFgJIAEgMIAAjkIgBgHIAAgHQAEgMAKgFIAIAAQAPAAAPADQATAFAIAIQAFAFAHARIANAtQANAuASAuIAAiPIgBgIIgCgIIABgFQACgGAMgDQAKgCAIAAIAVAFQARAFAAAGIgBAIIgEAJIAADxIACAOQACARgGAFQgFADgOAAIgLAAg");
	this.shape_9.setTransform(-7.7,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AAKCZIgagJIgZgGQgMgEgHgIQgPgQgJg4QgIgzAAg8QAAggAFg0QABgLAJgEQAEgBAYAGQAYAHAFAFQABACAAAEQAAAEgDAJQgEAIAAAFQgBAHAAAhQAABBAFAyQAIBEAOgBQAPgCAJg/QAFggAChPQAAgrgCgLQAAgHgCgGIgDgIQgCgNAKgGIAGgBQALAAAUAFQAUAGADAEQACACgBAMIAABGQAADQg6AGIgEAAQgJAAgMgEg");
	this.shape_10.setTransform(-33.2,24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AhPCaQgXgFAAgGIABgFIABgIIAAj/IgBgEIgBgDQAAgKAOgCQAFgBAPAEQAQAFAHgBQAGAAATgKQAUgKAMAAIALACQAKACAJAHIAQAPIAVAUQAKALAAAOQADAqhLBBIBEBEIAJAFIAJAFQABADgDAIIgLAUQgRAYgLAAQgMgBgHgMIgFgKIhMhJIAABEQAAAEADAGIAEAKQAAALgPABIgEAAQgKAAgTgEgAgmhEIAAA4QAQgGAYggQANgQAGgMQAHgLAAgIQAAgIgHAAQgRAAgqAlg");
	this.shape_11.setTransform(-57.1,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AAACbIgPgEIgSgEQgJgCgHgGQgKgJgGgUQgIgXgEgGIgHgKQgBgGADgFQADgGAFgBIAIgBQANAAASADQATAEACACQACADAEAXQADAXAFACIADABQAHAAAFgMQAFgLAAgPQAAgQgFgLQgFgKgKgGQgVgMgQgLQgQgKgJgKQgVgYACghQACgcASgcQASgcAVgFQAIgCApASIAVAIQALAFAHAIQAFAHADALQACALAAAQIAAARIAAAOIACAJQACAEAAAEQgBAQgNACQgHABgUgHQgWgHgGgIIgBgHIACgZIABgdQAAgPgEAAQgJABgIAPQgHAQAAAUQAAAQAEAMQAFAMAIAHIAsAaQAVANAIAOQAFAJADAMQACAMAAAQQAAAOgEALQgFALgIAJQgSARghABQgIAAgJgDg");
	this.shape_12.setTransform(-92.5,24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AAACZQgXgGgEgDQgIgHAAgGIABgDIACgHIAAkBIgBgEIgCgFQABgJANgDIARAAQAOABAKADQAQAFAAAIIgBAHIgCAFIgFAXIAADgQAAAEADAEIACAFQAAAYgJACIgBAAQgEAAgTgFg");
	this.shape_13.setTransform(-109.9,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("Ag5CSQgXgKAAgFIAAkSQAAgCAJgFQAJgFAEAAIARAGQANAFAJAAQALAAAQgKQAQgJAEABQAJADARARQASAQABAHQABADgIAIQgHAIgFAAIgGgBIgCAAIgZAHQgZAJgNAMIAAA8QANgHASgHQAGgBATASQATAPAAAGQAAAEgFAGQgFAFgFACIgNABQgaAJgVAOIAAAnIAcgQQATgJAEAAQAFAAAVAQQAVAQgBAFQgBAGgFAHQgGAHgEACIgEgCIgFgBIgBAAIgXAJIgaAOIgWASg");
	this.shape_14.setTransform(-137.3,24.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AiICYQgUgEgEgGIgCgGIACgHIABgIIAAkDQAAgEADgGQAEgFAFgCQAGgDAqALQAsAMACAIIABAJIgBAJIABAGIAxCEIAkiDQAHgZAFgOQAGgOAEAAIAGgBIAVADIAWAFIAiADQARADACAJIABAFIgCALIgCAKIAADfQAAAEAFAHQAEAIAAADQgDAQgGACQgJACgZgIIgVgHQgHgDgCgEIgBgGIABgHIABgIIAAilQgSAigcB0IAAADIABAMIACAKIgBAPQgCAHgGACIgNABQguAAgSgRQgDgCABgHIAAgKIgYhJQgahLgIgNIAACPIADAOIAEAMQACAIgBAKQgBANgEADIgJABQgNAAgTgFg");
	this.shape_15.setTransform(-167.8,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AAACZQgXgGgEgDQgIgHAAgGIABgDIACgHIAAkBIgBgEIgCgFQABgJANgDIARAAQAOABAKADQAQAFAAAIIgBAHIgCAFIgFAXIAADgQAAAEADAEIACAFQAAAYgJACIgBAAQgEAAgTgFg");
	this.shape_16.setTransform(-193.6,24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AAcCfQgMAAgUgFQgYgFgFgFQgFgHAGgLQAFgKAAgEIAAi0IgbAHIgGADQgEACgDAAQgIgDgPgTQgPgUACgHQADgIAOgFIAKAAIAJAAIB+ghIALgEQAGgDAEABQALABADAHIAGARQAEAOAAALQAAAIgCAEQgCAEgLABIgJgDQgFgCgDAAIgmALIAAC/QAAALAFAMQACAEgCAKQgDAMgEADIgEAAg");
	this.shape_17.setTransform(-212.7,23.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgIAaQgTgJgCgFQgCgDAHgPIAKgWQACgEAGAAIAUAFQAPACABAHQABAEgFAKQgGAJAAAHIAAAIQgBALgFACIgCAAQgGAAgOgHg");
	this.shape_18.setTransform(183,-12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgWCZQgUgGgHgEQgNgJAAgJQAAgEADgGIAWg7IgqhVQgVgvgJgfIgEgFQgDgEAAgDQAAgFAOgMQAegXAMABQAGABAFAHQADAGABAEIADAWQAIAuAbA1IAVg3QAOgfARgbIAGgQQAHgIANABQAIACASALQATAMABAGQACATgLAFIgGADQgWAggjBRQggBOgCAPIACALIABAMQgBAMgDAHQgDAHgFABIgBAAQgEAAgTgGg");
	this.shape_19.setTransform(172.3,-25.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AhOCbQgJgDgEgEQgFgEAAgFIAAkLQAAgHAFgIQAFgJAGgCIADAAQALAAATAIQAUAIACAFQABADgFAYQgEAcAAAOIAAAIIA9hhQAGgIAIAAQAJABASALQAUANABAMQAAADgeAmQgsA7gOAYIBLBUQACACAJACQAIACAAAEQACAKgOAZQgHANgGAHQgGAGgFgBQgFAAgMgLQgMgLgRgVQgZgggWgWIAABEIACAHIADAIQACAPgJAFQgDACgJAAQgQAAgPgHg");
	this.shape_20.setTransform(146.8,-25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AAMCcIgigMQgkgPgTgpQgRgmAAgyQAAg6AXgvQAZgxAlgCQAHAAAJAEQAKADAOAIQAOAIAJAHQAJAIAFAHQAIAQAEAzQABAMgEAKQgFAOgHgBQgMgBgUgHQgYgIgBgFIgBgDQAAgEADgFQADgFAAgDIACgcQAAgTgEgIQgLAJgHANQgIAOgGASQgFARgCASQgCAQAAAUQAAAgAFAXQAGAZAHAGQAEABAPgRQAQgQAFgLIAEgLQACgIADgBQAHgCAaANQAaANgBAFQgBAJgGAGQgGAKgIAMIgTAXQgMAMgKAHQgJAGgIAAg");
	this.shape_21.setTransform(122,-25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AAACZQgXgGgEgDQgIgHAAgGIABgDIACgHIAAkBIgBgEIgCgFQABgJANgDIARAAQAOABAKADQAQAFAAAIIgBAHIgCAFIgFAXIAADgQAAAEADAEIACAFQAAAYgJACIgBAAQgEAAgTgFg");
	this.shape_22.setTransform(103.7,-25.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AAKCZIgagJIgZgGQgMgEgHgIQgPgQgJg4QgIgzAAg8QAAggAFg0QABgLAJgEQAEgBAYAGQAYAHAFAFQABACAAAEQAAAEgDAJQgEAIAAAFQgBAHAAAhQAABBAFAyQAIBEAOgBQAPgCAJg/QAFggAChPQAAgrgCgLQAAgHgCgGIgDgIQgCgNAKgGIAGgBQALAAAUAFQAUAGADAEQACACgBAMIAABGQAADQg6AGIgEAAQgJAAgMgEg");
	this.shape_23.setTransform(84.6,-25.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AA2CbIgGgFIgHgHQgKAKgNABQgOABgJgFIgUgHIgOgDQgIgCgGgEQgxgdAAhgQAAg2ARgxQARgxAYgHQACgBAFACIAIADQAEAAAFgEIAJgFIAGgBQANAAAVAKQAUAKARAOQAQAOAIAaQAHAaAAAnQAABDgUAjIAKAIIAJAEQAGADABAEQABAIgMATQgMAUgMAEQgDACgDAAIgIgCgAgHBwQAFAAABgDIABgIQgCgFgKgHIgPgKQAMAiAIgBgAAAh0IgBAIQgIAJgHANQgHAMgFARQgKAiAAAiQAAAjAKAcQAWgqAUgCQADAAADADIAGAGQAFgKACgNQADgOAAgPQAAgkgKghQgJghgLgCIgDgBQgBAAAAAAQgBAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_24.setTransform(60,-25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AAKCZIgagJIgZgGQgMgEgHgIQgPgQgJg4QgIgzAAg8QAAggAFg0QABgLAJgEQAEgBAYAGQAYAHAFAFQABACAAAEQAAAEgDAJQgEAIAAAFQgBAHAAAhQAABBAFAyQAIBEAOgBQAPgCAJg/QAFggAChPQAAgrgCgLQAAgHgCgGIgDgIQgCgNAKgGIAGgBQALAAAUAFQAUAGADAEQACACgBAMIAABGQAADQg6AGIgEAAQgJAAgMgEg");
	this.shape_25.setTransform(23.9,-25.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgcCTIgfgKQgWgLgMglQgEgRgDgUQgDgUAAgXQAAg7ARgvQAJgaAMgPQAMgOAPgDIAGgBQASAAAZAMQAdANAJAPQAJAMACASIAEAYIADAPQABAFgEAGQgFAGgDACQgFACgYgHQgYgIgDgEQgHgEACgNIABgFIACgFQAAgagFAAQgNAAgKAqQgIAogBAtQAAAjAGAUQAEAUAKAFQADACAEgFQAEgGAFgLQAIgXACgVQgFgEgQgHQgMgFgCgFQgBgFAFgKQAFgJAGgCQAGgDAIAAIARgBIAUgGQALgFAHAAIADABQAKABARAPQASANAAAFQgBAPgMAEIgFgCIgFgBIgFABQgJAkgNAlQgIASgJALQgJAMgNAFQgFADgIAAQgEAAgagKg");
	this.shape_26.setTransform(-0.7,-25.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("ABECdQgNgBgSgGQgWgHgCgIIgBgQQgTg2gbhBIAABtIACAHIAEAHIACALQAAAHgEAEQgDAEgHAAQgNAAgXgIQgWgHgDgEQgFgGAFgJIAEgMIAAjkIgBgHIAAgHQAEgMAKgFIAIAAQAPAAAPADQATAFAIAIQAFAFAHARIANAtQANAuASAuIAAiPIgBgIIgCgIIABgFQACgGAMgDQAKgCAIAAIAVAFQARAFAAAGIgBAIIgEAJIAADxIACAOQACARgGAFQgFADgOAAIgLAAg");
	this.shape_27.setTransform(-27.3,-25.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AAACZQgXgGgEgDQgIgHAAgGIABgDIACgHIAAkBIgBgEIgCgFQABgJANgDIARAAQAOABAKADQAQAFAAAIIgBAHIgCAFIgFAXIAADgQAAAEADAEIACAFQAAAYgJACIgBAAQgEAAgTgFg");
	this.shape_28.setTransform(-47.1,-25.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AhOCbQgJgDgEgEQgFgEAAgFIAAkLQAAgHAFgIQAFgJAGgCIADAAQALAAATAIQAUAIACAFQABADgFAYQgEAcAAAOIAAAIIA9hhQAGgIAIAAQAJABASALQAUANABAMQAAADgeAmQgsA7gOAYIBLBUQACACAJACQAIACAAAEQACAKgOAZQgHANgGAHQgGAGgFgBQgFAAgMgLQgMgLgRgVQgZgggWgWIAABEIACAHIADAIQACAPgJAFQgDACgJAAQgQAAgPgHg");
	this.shape_29.setTransform(-65.6,-25.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AhOCbQgJgDgEgEQgFgEAAgFIAAkLQAAgHAFgIQAFgJAGgCIADAAQALAAATAIQAUAIACAFQABADgFAYQgEAcAAAOIAAAIIA9hhQAGgIAIAAQAJABASALQAUANABAMQAAADgeAmQgsA7gOAYIBLBUQACACAJACQAIACAAAEQACAKgOAZQgHANgGAHQgGAGgFgBQgFAAgMgLQgMgLgRgVQgZgggWgWIAABEIACAHIADAIQACAPgJAFQgDACgJAAQgQAAgPgHg");
	this.shape_30.setTransform(-101.1,-25.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AAMCcIgigMQgkgPgTgpQgRgmAAgyQAAg6AXgvQAZgxAlgCQAHAAAJAEQAKADAOAIQAOAIAJAHQAJAIAFAHQAIAQAEAzQABAMgEAKQgFAOgHgBQgMgBgUgHQgYgIgBgFIgBgDQAAgEADgFQADgFAAgDIACgcQAAgTgEgIQgLAJgHANQgIAOgGASQgFARgCASQgCAQAAAUQAAAgAFAXQAGAZAHAGQAEABAPgRQAQgQAFgLIAEgLQACgIADgBQAHgCAaANQAaANgBAFQgBAJgGAGQgGAKgIAMIgTAXQgMAMgKAHQgJAGgIAAg");
	this.shape_31.setTransform(-125.9,-25.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AAACZQgXgGgEgDQgIgHAAgGIABgDIACgHIAAkBIgBgEIgCgFQABgJANgDIARAAQAOABAKADQAQAFAAAIIgBAHIgCAFIgFAXIAADgQAAAEADAEIACAFQAAAYgJACIgBAAQgEAAgTgFg");
	this.shape_32.setTransform(-144.2,-25.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("AgsCYQgagIgFgHQgEgGABgNIABgJIAAj1IgDgGIgCgFQAAgHANgDQAHgCAaAIQAdAIAAALQAAADgEAGQgEAGAAADIAADJIAlgQIAMgHQAFgBAXARQAWAQgBAFQgFASgJADIgIABIgHAAIg2AXQgBABgDAFQgDAFgDABIgFABQgJAAgUgHg");
	this.shape_33.setTransform(-160.1,-25.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("AAMCcIgigMQgkgPgTgpQgRgmAAgyQAAg6AXgvQAZgxAlgCQAHAAAJAEQAKADAOAIQAOAIAJAHQAJAIAFAHQAIAQAEAzQABAMgEAKQgFAOgHgBQgMgBgUgHQgYgIgBgFIgBgDQAAgEADgFQADgFAAgDIACgcQAAgTgEgIQgLAJgHANQgIAOgGASQgFARgCASQgCAQAAAUQAAAgAFAXQAGAZAHAGQAEABAPgRQAQgQAFgLIAEgLQACgIADgBQAHgCAaANQAaANgBAFQgBAJgGAGQgGAKgIAMIgTAXQgMAMgKAHQgJAGgIAAg");
	this.shape_34.setTransform(-183,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.8,-48.7,451.9,100.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgcCQQgjgMgKgOQgegnAAhEQAAg+AagxQAOgbASgOQASgOAWAAQAOgBAWAJIAZANQAMAHAJAJQAEAFAEAXQAFAZAAAXQAAARgCAMQgDANgGAEQgaAJgbAEQgaAFgaABQgBAZAHAcQAHAcAIAAQAIABAOgSQANgPADgKIAKggQAIgBAYAJQAYAKAEAHQAFAIgZAlQgNAVgNANQgNAOgNAHIgJABQgUAAgegMgAgKhIIgNAcQgEAOgBANQAXgBAMgLQAEgDACgNIACgjQAAgTgDgBIAAAAQgJAAgNAcg");
	this.shape.setTransform(129.9,-26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AhCCXQgegKAAgQIAEgOQAFgLAAgGIAAjJIgGgeQAAgQAOgEIAPgBQASAAAUAGQATAFAEAHIABAFIgHAZIAAAYIAWgsQAQgbAHgCQAMgCAXAPQAXAQACAKQACAIgHAFIgMAHIhWCDIABBUIAEANIACAQQAAAKgIADQgFADgKAAQgTAAgYgJg");
	this.shape_1.setTransform(104.6,-26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAbCgIgpgJQgVgCgRgFQgPgEgLgMQgMgNgIgVQgIgTgFgXQgDgXAAgaQAAgYADgYQAFgYAIgWQAJgXANgRQANgQAQgKQAHgDAJAAQAKAAAdAHQATAAAfAGQAOAGALAOQALANAHAUQAPAlAAAyQgBAhgFAeQgHAegLAZQgNAbgQAMQgOALgQAAIgGgBgAgLhdQgGAIgGARQgLAsAAAUQADAvAFAYQAKAnAMADQAPAEANgpQAMgnAAgtQAAgagGgZQgKgmgTAAQgFAAgHAIg");
	this.shape_2.setTransform(75.8,-26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhICEQgTgMgJgdQgJgcAAgsQABhAATg1QAWg6AggCQAZgBAiAOQAlAPANASQALAPAAAZIgBATIgBASIABAMQAAARgQgBQgSAAgRgFQgWgIgEgNQgCgFAGgIQAGgHgBgGIABgRQAAgQgCgIQgEgIgFAAQgOgBgLAyQgLA9ABAkQgBAfAEARQAEARAHABQAMADARgcQAQgYABgJIACgRQAEgOAPABQAJABAXALQAXAKABAGIABAJQAAAJgQARQgOAegLANQgLAQgPAJQgOAJgSACIgLABQgdAAgqgbg");
	this.shape_3.setTransform(45.7,-27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AAFCdIgQgFIgTgEQgJgCgHgGQgLgKgLgSIgRgdIgIgSQAAgHAKgEIAJgBIAnAEQAXADACACQACACAEAcQADAXAGAAQAGAAADgIQACgIAAgQQAAgogTgKIgpgWQgQgKgIgHQgJgLgFgRQgEgRAAgWQAAgdAPgaQAIgNAJgHQAJgIAKgDQAJgCAxAWIAbAFQAQADAGAIQAKAMACAZIAAAmIAEAVQAAAOgOACQgHABgVgGQgXgIgHgIIgDgnQgBgigGAAQgGAAgGAUQgHAUAAAVQAAAOADAJQADAIAGAEIAwAaQAZAOAJAPQAHAJADANQADANAAARQAAAcgSARQgKAIgNAEQgNAFgRAAg");
	this.shape_4.setTransform(17.7,-26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AhCCXQgegKAAgQIAEgOQAFgLAAgGIAAjJIgGgeQAAgQAOgEIAPgBQASAAAUAGQATAFAEAHIABAFIgHAZIAAAYIAWgsQAQgbAHgCQAMgCAXAPQAXAQACAKQACAIgHAFIgMAHIhWCDIABBUIAEANIACAQQAAAKgIADQgFADgKAAQgTAAgYgJg");
	this.shape_5.setTransform(-22.9,-26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AA9CaQghgIgDgIQgDgGAEgMIAFgSIgBgNQgIAZgOAUQgIAMgHAGQgIAFgIAAQgSAAgcgLQgbgMgEgKQgPggAAjQQgEgJAAgKQAAgQAMgGIANgBQARAAAYAFQAYAGAGAFIACAHQAAAFgIANQgHANAAAFQgBDIAEABQADACAJgMIAWglQAOgZAIgTQAHgRAAgNIAAhgQgHgGAAgKQAAgKAFgHQAEgHAJgDIAGgBQAOAAAaAGQAbAHACADQAEAFAAAFQAAAFgGAIIgGAJIAADsIAEALIADALQAAAJgQAEIgEAAQgKAAgYgGg");
	this.shape_6.setTransform(-52.9,-26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AAbCgIgpgJQgVgCgRgFQgPgEgLgMQgMgNgIgVQgIgTgFgXQgDgXAAgaQAAgYADgYQAFgYAIgWQAJgXANgRQANgQAQgKQAHgDAJAAQAKAAAdAHQATAAAfAGQAOAGALAOQALANAHAUQAPAlAAAyQgBAhgGAeQgGAegLAZQgNAbgQAMQgOALgQAAIgGgBgAgLhdQgGAIgGARQgLAsAAAUQADAvAFAYQAKAnAMADQAPAEANgpQAMgnAAgtQAAgagHgZQgJgmgTAAQgFAAgHAIg");
	this.shape_7.setTransform(-84.3,-26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AggDBQgVgIgIgIQgIgHAAgIQAAgIAHgLIAJgOIARg6IhTjKIgKgKQgGgGgCgPQgBgFAcgQQAbgQAQAAIAHABQAIAFAEANIAGAWIArB8IAwiAIAHgUQADgKAIgDIALgCQARABAUAHQAVAJACAHIABAIQAAAJgIAJIgLAQIhmEjIgCAVQgCAQgIACIgGABQgMAAgUgHg");
	this.shape_8.setTransform(-114.8,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-65,287.2,71.1);


(lib.Intro_Panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elements
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2E8AB").ss(0.8).p("AnW1QIACAeQADAlAIAhQAZBpA9AbQA2gYAHgwQAFglgYhJQgghZgOgzQgahcABhLQABhIAbhLQAghYAsgBQBCAEAQCHQALBigMEXQgRGbgBCtQgEGMAeFnQBjSFCUGpQA6ClBFA+QAwAsBDgCQBWgtAmhAQA2hbAJi8QAJishAhyQgUgjgZgZIgVgTQgngFgYA+QgZBAAMBUQAUCVAtAEQALAAAUgGQAPgCAEAUQAYBvgTA8QgJAegOAHQhKgmgqiTQgOgtgIg0IgGgq");
	this.shape.setTransform(181.2,48.3,1.442,1.59,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A17841","#E3C175","#ECD08C","#F9E3AB","#FEEAB7","#F7E0A6","#E6C67C","#E3C175"],[0,0.216,0.38,0.631,0.773,0.843,0.976,1],0.5,40,-1.3,-39.9).s().p("AyIEQQA2hcAJi5QAJishAhyQgUgkgZgZIgVgSMAlSgAKIASAMQAUASASAgQA5BmAEDLQAFDhhbBoQgtA0gvAGMglXAAHQBWgtAmhAg");
	this.shape_1.setTransform(-44.9,282.4,1.442,1.59,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A17841","#B59059","#E9D09B","#FEEAB7"],[0.031,0.227,0.753,1],-0.6,-29.2,0.7,29.1).s().p("AgTEfQAOgIAIgeQASg7gWhwQgEgTgPACQgTAGgMgBQgtgDgUiUQgLhUAZg/QAYg+AnAFIAWAEQAYAHAWASQBIA4AFCGQABAcAJB6QAHBRgFAnQgHA1gdAVQgXAQgnAAQgTAAgUgDg");
	this.shape_2.setTransform(125.1,269.5,1.442,1.59,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEEAB7","#EBD39E","#D4B680","#C19F68","#B28D56","#A8814A","#A27A43","#A17841"],[0,0.059,0.149,0.247,0.361,0.49,0.663,1],-10.2,0.3,10.3,-0.2).s().p("AhMgUQgNgugJgzIgGgqIBZgCQAkgBArBfQAnBVACA5QABAngiAdQgRAOgRAGQhHgmgriRg");
	this.shape_3.setTransform(133.5,289.3,1.442,1.59,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A17841","#E3C175","#ECD08C","#F9E3AB","#FEEAB7","#F7E0A6","#E6C67C","#E3C175"],[0,0.216,0.38,0.631,0.773,0.843,0.976,1],4.9,184.3,-3.5,-187.6).s().p("AtkcbQhFg/g6ilQiWmohjyGQgelmAEmNQACisAQmbQANkXgMhjQgPiGhDgEMAlLgAPQAgAAAbBBQA3CAgXFBQgPDPAAFxQAAGVATGAQA0PxCNDVQ9xJCi2AqIgGAAQg/AAgugqg");
	this.shape_4.setTransform(31.7,47.1,1.442,1.59,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A17841","#B59059","#E9D09B","#FEEAB7"],[0.031,0.227,0.753,1],-5,-33,4.2,32.6).s().p("AgSFsQgkgBgbgEQA2gYAHgwQAFglgYhJQgghZgOgzQgahaABhLQABhIAbhLQAghYAsgBQBtgCAIFnQAECxgTC0QgnAPg7AAIgQgBg");
	this.shape_5.setTransform(223,-188.5,1.442,1.59,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A17841","#B59059","#E9D09B","#FEEAB7"],[0.031,0.227,0.753,1],2.4,10.2,-4,-26.3).s().p("AhNgNQgHghgEglIgBgeICagDIAMA3QALA9ACApQACApgqAWQgVALgVACQg8gbgZhng");
	this.shape_6.setTransform(236.1,-150,1.442,1.59,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.3,-248.8,480.5,592.9);


(lib.Rocks_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1200x800
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIAAt1Ih8gBIAAg+IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIgBN1IAYAAIgXGyIAWA+IAAO1g");
	this.shape.setTransform(824.3,297.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAYg+IgXmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIAAN1IAXAAIgWGyIAWA+IgBO1g");
	this.shape_1.setTransform(741.4,297.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAXA/IgBOyg");
	this.shape_2.setTransform(784,352.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAXA/IgBOyg");
	this.shape_3.setTransform(784,352.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhaAzg1IAGgJIAJAJQAxA1AeBaQAdBaABBrIAAK6gAhClcQgYBSAABcIgBKZIC3AAIAAqZQgBhcgYhSQgZhRgqgzQgpAzgZBRg");
	this.shape_4.setTransform(826,373.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F0F0F").s().p("Ah0ILIAAq5QAAhsAehaQAdhZAzg1IAGgJIAIAJQAyA0AeBbQAdBaABBrIAAK6gAhClcQgYBRAABcIgBKaIC2AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgZBRg");
	this.shape_5.setTransform(805,373.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhqAehbQAdhYAzg3IAHgJIAIAJQAyA2AeBZQAdBbAABqIAAK6gAhClcQgZBSABBcIAAKZIC1AAIAAqZQAAhcgYhSQgZhRgqgyQgpAygZBRg");
	this.shape_6.setTransform(741.8,373.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAdhbQAehZAyg2IAHgJIAIAJQAzA2AdBZQAdBbAABqIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgZhRgqgyQgpAygZBRg");
	this.shape_7.setTransform(762.9,373.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F0F0F").s().p("AgJLgQgDgFAAgHIAB2nQAAgHAEgFQAEgEADAAQAGAAADAEQAEAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgEgEg");
	this.shape_8.setTransform(784,352.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F0F0F").s().p("AmiAPQgGABgDgFQgEgFAAgGQAAgFAEgFQADgFAGAAINFABQAGgBAEAFQADAEAAAGQAAAGgDAFQgEAFgGAAg");
	this.shape_9.setTransform(784,279.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0F0F0F").s().p("AmwN0IAB7WQAAgHAEgFQAEgFAFAAQAGAAAEAFQADAEAAAIIgBa2IMsAAIAB62QAAgHADgFQAEgEAFAAQAGAAAEAEQADAEAAAIIAAbWg");
	this.shape_10.setTransform(784,337.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0F0F0F").s().p("Ah7AuQg5ghgog5IATgVQAXAdAeAPQAeAPAgAAQApAAAkgXIAFgEIAEAEQAkAXAoAAQAlABAggTQAggTAXgjIAVAVQgoA+g8AlQg7AlhBAAQhAgBg4gggAgDAtQAsABAugVIgLAAQgrABglgYQgmAXgsAAIgKAAQAtAVAwgBg");
	this.shape_11.setTransform(784.5,273.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F0F0F").s().p("AgagYIAYgPQAMAhAQAYIgTAVQgVgdgMgig");
	this.shape_12.setTransform(761.6,265);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0F0F0F").s().p("AgSAEQAJgLAHgQIAVAQQgIAQgKAPg");
	this.shape_13.setTransform(806.4,265.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0F0F0F").s().p("ADwC5QgEgEgBgGQgFgogTghQgUgigdgVIgHgFIABgOQAAhLgug2Qgug2hAgBQg/ABgtA2QguA2AABLIAAANIgHAFQgdAVgUAiQgTAigGAoQAAAHgFADQgEAFgGgCQgFAAgDgGQgDgFABgIQAGgtAVgmQAVgmAggaQAChWA1g+QA1g+BIAAQBKAAA1A+QA1A/ACBWQAfAaAVAmQAVAmAGAtQABAHgDAFQgDAGgGAAIgCABQgFAAgDgEg");
	this.shape_14.setTransform(784,233.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0F0F0F").s().p("AiEC5QgEgEAAgHQgCgPAAgQQAAiJBShgQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAANIgHAFQgdAVgUAiQgTAigGAoQAAAGgEAEQgEAEgEAAIgDAAIgFgDQgDADgDAAIgCAAQgEAAgEgEgAhPgCQgdA7gDBFQAVhBAxgmQABhDAjg4QguAogcA6g");
	this.shape_15.setTransform(770.1,233.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0F0F0F").s().p("AB7C9QgEgBgDgDQgCACgDABIgDABQgEAAgEgEQgDgEgBgGQgGgogTgiQgTghgegWIgGgEIAAgOQAAhLgrg2Qgug3hBAAIAAggQBzAABQBiQBSBfAACKQAAAPgCAQQAAAHgEAEQgEAEgEAAIgCAAgAAqAXQAxAnAVBDQgChGgdg8Qgcg8gvgnQAjA3ABBEg");
	this.shape_16.setTransform(797.9,233.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0F0F0F").s().p("AgIALQgDgFAAgGQAAgFADgFQAEgFAEAAQAFAAAEAFQADAFAAAFQAAAHgDAEQgEAFgFAAQgEAAgEgFg");
	this.shape_17.setTransform(784,216.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgHAFgCQAcgQAegMQBPgvAuhFQAuhIAAhQQAAgHADgEQAEgFAGAAQAFAAAEAFQAEAFAAAGQAABagyBOQgyBPhXAzIgCAAQgeANgaAOQgCACgDAAQgJAAgDgKg");
	this.shape_18.setTransform(772.1,206.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0F0F0F").s().p("ABxCqQgbgPgdgMIgBgBQhXgygyhPQgyhOAAhaQAAgGAEgFQAEgFAFAAQAGAAADAFQAEAFAAAGQAABQAuBIQAuBFBPAvQAcALAeARQAFADACAGQACAGgDAGQgDAKgIAAIgGgCg");
	this.shape_19.setTransform(796,206.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0F0F0F").s().p("AAAEbQglAXgsgBQgqABgmgXQglgWgbgoIAAAAQgIgOgJgTIAAAAQgVgvAAg1QAAg4AWgtQAWgxAmgeQABhYA1g/QA2g+BJAAQBJAAA1A+QA1A+ACBYQAnAfAVAxQAXAuAAA3QAAArgOAnIgBABQgNAjgVAdIAAABQgaAigiARQgkATglAAQgsAAgmgXgAAFD5QAkAYApAAQAgAAAegQQAegPAWgdQATgdALgbQALghAAgkQAAgwgUgpQgUgrgkgZIgGgFIAAgJIAAgCIAAgCQAAhNgtg2Qgvg2g/gBQhAABgtA2QguA2AABNIAAANIgGAGQgkAZgUAqQgTAogBAxQABAtARAoQAIARAHALQAWAiAhAUQAfASAlAAQApAAAjgYIAFgDg");
	this.shape_20.setTransform(784.1,245.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0F0F0F").s().p("ABXDhQALghAAgkQABgxgVgqQgUgsgjgXIgHgEIAAgKIAAgCIAAgCQAAhMgrg2Qgug3hBAAIAAggQBzAABQBiQBSBhAACIQAABMgcBEgAAqgZQAwAlAWBBQgDhGgdg6Qgcg6gugoQAjA3ABBFg");
	this.shape_21.setTransform(797.9,238.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0F0F0F").s().p("AiKBVQAAiIBShiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABNIAAANIgGAFQgkAYgUAqQgUAqAAAxQAAAsASAoIgXAQQgkhMAAhWgAhQg7QgcA7gDBGQAUhBAygmQABhGAjg3QgvAngcA8g");
	this.shape_22.setTransform(770.1,239.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F0F0F").s().p("AhiCZQgEgFAAgGQAAhaAyhOQAyhPBXgzQAFgCAFACQAFACACAGQACAGgCAHQgCAGgFADQhRAugsBIQguBGAABQQAAAHgEAEQgEAFgFAAQgGAAgDgFg");
	this.shape_23.setTransform(751.1,236.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0F0F0F").s().p("ABRCZQgEgFAAgGQAAhQguhGQgshHhRgvQgFgDgCgGQgCgGACgHQADgGAFgCQAFgCAFACQBWAzAyBPQAyBOAABaQAAAHgEAEQgEAFgFAAQgGAAgDgFg");
	this.shape_24.setTransform(816.9,236.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgKgQgHgRQgkhMAAhWQAAhTAihJQAfhHA5guIgVAHQgFADgFgEQgEgDgCgHQgCgGADgGQACgGAFgCQBYgiBgAAQBggBBZAkQAFABACAHQADAFgCAHQgBAGgFADQgFADgFgCIgVgHQA5AuAgBHQAhBJAABTQAABMgcBEQgMAlgXAcQgnA7g5AgQg4Agg/ABQhBAAg8glgAixjTQhKBYAAB7QAABOAgBDIAAABQAGAPAJANIAAABQAkA6A2AiQA3AgA7AAQA5ABAzgdQA0geAkg1IABgBQASgZALgfIABgBQAZg9AAhFQAAh6hKhZQhKhXhogBQhnAAhKBYg");
	this.shape_25.setTransform(784,248);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#121212").s().p("AgRgHIAUgQIAPAbIgSAUQgLgRgGgOg");
	this.shape_26.setTransform(761.6,265);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#121212").s().p("AgaARQASgYALgfIAYANQgNAkgUAcg");
	this.shape_27.setTransform(806.4,265);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0F0F0F").s().p("Ah5AqQg8glgng+IAVgVQAWAjAhATQAfASAlAAQApAAAjgXIAFgEIAFAEQAkAXApAAQAgAAAegPQAegQAWgcIATAVQgnA6g5AgQg4AghAABQhBAAg8glgAAEAtQAvABAugVIgKAAQgsABgmgYQglAXgsAAIgLAAQAsAVAvgBg");
	this.shape_28.setTransform(783.6,273.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiYA8iBQA5h+BjhMIAFgFIAHAFQBiBLA6B/QA7CCAACXIAAPjgAiLoGQg4B6AACPIAAPCIGHAAIAAvCQAAiPg4h6Qg0hzhYhGQhWBGg1Bzg");
	this.shape_29.setTransform(804.8,352);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0F0F0F").s().p("Ah0ILIAAq6QAAhqAdhaQAehaAyg1IAHgIIAIAIQAyA2AeBZQAdBcABBpIgBK5gAhClcQgYBSAABbIAAKaIC1AAIAAqaQABhbgZhSQgZhRgqgyQgpAygZBRg");
	this.shape_30.setTransform(783.9,373.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F0F0F").s().p("AjeLmIABvjQAAiXA7iDQA6h9BjhMIAFgFIAHAFQBiBLA6B+QA7CDABCXIgBPjgAiLoHQg4B8AACOIgBPCIGIAAIAAvCQAAiQg4h5Qg0hyhYhHQhXBHg0Bxg");
	this.shape_31.setTransform(763,351.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgWmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAwAAIAACOIB9AAIAAA/Ih9AAIAAN1IAYAAIgWGyIAWA+IgBO1g");
	this.shape_32.setTransform(741.5,297.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIAAt1Ih8AAIAAg/IB8AAIABiOIAvAAIAACOIB9AAIAAA/Ih9AAIAAN1IAYAAIgXGyIAWA+IAAO1g");
	this.shape_33.setTransform(658.6,297.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgWm0IBYAAIgXG0IAXA+IgBOzg");
	this.shape_34.setTransform(701.2,352.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgWm0IBYAAIgXG0IAXA+IgBOzg");
	this.shape_35.setTransform(701.2,352.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhqAehbQAehZAyg2IAHgJIAIAJQAyA2AdBZQAeBbAABqIAAK6gAhBlcQgZBRgBBdIAAKZIC2AAIAAqZQAAhcgYhSQgZhRgqgyQgpAygYBRg");
	this.shape_36.setTransform(743.3,373.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhqAfhbQAchaAzg1IAHgJIAIAJQAzA2AcBZQAeBbAABqIAAK6gAhClcQgYBSgBBcIAAKZIC2AAIAAqZQAAhcgYhSQgYhRgrgzQgqAzgYBRg");
	this.shape_37.setTransform(722.2,373.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0F0F0F").s().p("Ah1IMIABq6QAAhpAehdQAdhYAyg2IAHgJIAIAJQAzA2AdBYQAeBcgBBqIAAK6gAhBlcQgZBRAABdIAAKZIC1AAIAAqZQAAhcgYhRQgZhSgqgyQgpAygYBRg");
	this.shape_38.setTransform(659,373.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F0F0F").s().p("Ah0ILIAAq5QAAhpAehdQAdhZAyg1IAHgJIAJAJQAyA1AdBaQAdBaAABrIAAK6gAhBlcQgZBSAABcIAAKZIC1AAIAAqZQAAhdgYhRQgZhSgqgyQgpAzgYBRg");
	this.shape_39.setTransform(680.1,373.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0F0F0F").s().p("AgILgQgEgFAAgHIAB2nQAAgHAEgFQAEgEADAAQAGAAAEAEQADAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgDgEg");
	this.shape_40.setTransform(701.2,352);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0F0F0F").s().p("AmiAQQgGAAgEgFQgDgFAAgGQAAgGADgEQAEgFAGAAINFAAQAGAAADAFQAEAFAAAFQAAAGgEAFQgDAFgGAAg");
	this.shape_41.setTransform(701.2,279.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0F0F0F").s().p("AmvNzIAA7WQAAgGAEgGQADgEAGAAQAGAAADAEQAEAGAAAGIAAa2IMrABIAA62QAAgHAFgFQADgFAGAAQAFAAAEAFQADAFAAAHIAAbWg");
	this.shape_42.setTransform(701.2,337.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0F0F0F").s().p("Ah7AuQg5gggog5IAUgWQAWAdAeAPQAeAQAgAAQApAAAkgYIAFgDIAFADQAjAYApAAQAkAAAggTQAhgTAWgiIAUAUQgmA+g8AlQg8AkhBAAQhAABg4ghgAgDAuQAtAAAtgVIgKAAQgsAAglgXQglAXgtAAIgKAAQAuAVAvAAg");
	this.shape_43.setTransform(701.7,273.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0F0F0F").s().p("AgagZIAYgNQAKAeATAZIgUAWQgUgcgNgkg");
	this.shape_44.setTransform(678.8,264.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0F0F0F").s().p("AgRAEQAJgNAGgOIAUAQQgHAPgKAQg");
	this.shape_45.setTransform(723.6,265);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0F0F0F").s().p("AD4C9QgFAAgDgEQgEgEgBgGQgFgogTgiQgTghgegVIgGgFIAAgOQAAhLgug2Qgug2hAAAQg+AAguA2QguA2AABLIAAANIgGAFQgeAVgTAiQgUAigFAoQgBAHgFAEQgEADgFgBQgFgBgEgFQgDgGABgGQAGguAVgmQAVgnAggZQAChWA1g+QA1g+BIAAQBKAAA1A/QA1A+ACBWQAgAZAUAnQAVAmAGAtQABAGgDAGQgDAGgGABg");
	this.shape_46.setTransform(701.2,233.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0F0F0F").s().p("AiEC5QgEgEgBgHIgBgfQAAiKBShfQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAANIgHAFQgeAVgTAiQgTAigGAoQAAAGgEAEQgEAEgFAAIgCgBIgFgCIgGADIgBAAQgFAAgEgEgAhPgCQgdA6gDBFQAVhBAxgmQABhCAig4QguAngbA7g");
	this.shape_47.setTransform(687.3,233.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0F0F0F").s().p("AB7C9QgEgBgDgDQgBADgFABIgCAAQgEAAgEgEQgEgEAAgGQgGgogTgiQgTghgdgVIgHgFIAAgOQAAhLgrg2Qgvg2hAAAIAAghQB0AABPBiQBRBgAACJIgBAfQAAAHgEAEQgEAEgEAAIgCAAgAAqAXQAyAnAUBDQgChGgdg8Qgcg7gugoQAiA5ABBCg");
	this.shape_48.setTransform(715.2,233.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F0F0F").s().p("AgIALQgDgFgBgGQABgGADgEQAEgFAEAAQAFAAAEAFQAEAFgBAFQABAGgEAFQgEAFgFAAQgEAAgEgFg");
	this.shape_49.setTransform(701.3,216.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgGAFgDQAdgRAdgLQBPgvAuhFQAuhHAAhQQAAgHAEgFQADgFAGAAQAFAAAEAFQAEAFAAAHQAABagyBNQgyBPhXAzIgBABQgeALgaAPQgCACgEAAQgIAAgEgKg");
	this.shape_50.setTransform(689.3,206.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F0F0F").s().p("ABxCrQgdgRgbgKIgBgBQhXgzgyhPQgyhNAAhbQAAgGAEgFQAEgFAFAAQAGAAAEAFQAEAFgBAGQAABQAuBIQAuBFBPAvQAiAOAYAOQAFACACAHQACAGgCAHQgEAJgIAAg");
	this.shape_51.setTransform(713.2,206.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0F0F0F").s().p("AAAEaQglAYgsAAQgqAAglgWQgmgXgagoIgBAAQgJgRgHgPIgBgBQgVgvAAg1QAAg4AWguQAWgvAmgfQAChYA1g+QA2g/BIAAQBKAAA1A+QA1A+ABBZQAnAeAVAwQAXAvAAA3QAAArgOAnIAAABQgOAigUAeIgBABQgaAhgiASQgkATglAAQgsAAgmgYgAAFD6QAkAXApAAQAgAAAegPQAegQAWgcQARgYAOghQALgjAAgiQAAgxgVgoQgUgrgjgZIgHgFIAAgNQAAhNgtg2Qgvg2g/AAQg/AAguA2QgtA2gBBNIAAAOIgGAEQgjAagUAqQgUAoAAAxQAAAtARAnIAPAdQAXAiAgATQAgATAkAAQAoAAAlgXIAEgEg");
	this.shape_52.setTransform(701.3,245.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0F0F0F").s().p("ABXDhQAMgiAAgjQAAgxgVgrQgUgrgjgWIgHgFIAAgOQAAhMgrg2Qgvg3hAAAIAAggQB0AABPBhQBRBiAACIQAABMgbBEgAAqgZQAxAlAVBBQgDhGgdg6Qgbg7gugnQAhA3ACBFg");
	this.shape_53.setTransform(715.2,238.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F0F0F").s().p("AiKBUQAAiHBShiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABMIAAAOIgHAFQgjAXgUAqQgUAqAAAxQAAAuARAnIgWAQQgkhLAAhYgAhQg8QgdA8gDBGQAWhDAxgkQAAhFAjg4QguAngcA7g");
	this.shape_54.setTransform(687.3,239.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0F0F0F").s().p("AhjCZQgDgEAAgHQAAhaAyhOQAyhPBWgzQAFgCAFACQAGACACAGQACAHgCAGQgCAGgFADQhRAvgsBHQguBGAABQQAAAGgEAFQgEAFgFAAQgGAAgEgFg");
	this.shape_55.setTransform(668.3,236.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0F0F0F").s().p("ABRCaQgEgFAAgHQAAhQguhGQgshHhSgvQgFgDgBgGQgCgGACgGQACgHAFgCQAFgCAFADQBXAyAyBQQAyBNAABaQAAAHgEAFQgEAEgFAAQgGAAgDgEg");
	this.shape_56.setTransform(734.2,236.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgLgRgHgQQgjhMAAhWQAAhTAhhJQAghHA4guIgUAHQgFACgFgDQgEgDgCgGQgCgHADgGQACgGAFgCQBXgiBhAAQBiAABXAiQAFACACAGQADAGgCAHQgBAGgFADQgFADgFgCIgUgHQA4AuAgBHQAhBKAABSQAABNgcBDQgLAigXAfQgoA7g5AgQg4Agg/AAQhBAAg8gkgAixjTQhKBYAAB7QAABOAgBEIAAAAQAHAQAIAMIABABQAjA6A2AiQA3AhA7AAQA5AAAzgeQA0gdAkg1IABgBQATgZAKgfIABgBQAZg+AAhEQAAh7hKhYQhKhYhoAAQhnAAhKBYg");
	this.shape_57.setTransform(701.2,247.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#121212").s().p("AgSgHIAVgQQAFAKALARIgTAUQgKgQgIgPg");
	this.shape_58.setTransform(678.8,265);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#121212").s().p("AgZASQAQgYAMggIAYANQgMAjgVAdg");
	this.shape_59.setTransform(723.6,264.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0F0F0F").s().p("Ah5AqQg7gkgohAIAVgTQAXAiAgATQAgATAkAAQAoAAAkgYIAEgDIAGADQAkAYApAAQAgAAAfgQQAegPAVgdIAUAWQgoA5g5AgQg4AhhAgBQhAAAg9gkgAAEAuQAvAAAugVIgKAAQgsAAgngXQgkAXgsAAIgKAAQAtAVAtAAg");
	this.shape_60.setTransform(700.8,273.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0F0F0F").s().p("AjdLlIAAviQAAiYA7iCQA6h/BjhKIAFgFIAGAFQBjBLA6B+QA7CDAACXIAAPjgAiLoHQg4B7AACPIAAPCIGHAAIAAvCQAAiOg4h8Qg1hzhXhFQhXBGg0Byg");
	this.shape_61.setTransform(722.1,351.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhqAfhbQAchaAzg1IAHgJIAIAJQAzA1AcBaQAeBbABBqIgBK6gAhClcQgYBSgBBcIAAKZIC2AAIAAqZQAAhdgYhRQgZhSgqgyQgqAzgYBRg");
	this.shape_62.setTransform(701.2,373.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiWA7iDQA6h/BjhLIAFgFIAGAFQBkBLA5B/QA7CBAACYIAAPjgAiLoGQg4B6AACPIAAPCIGHAAIAAvCQAAiOg4h7Qg0hzhYhFQhXBFg0Bzg");
	this.shape_63.setTransform(680.2,351.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIAAt1Ih8gBIAAg+IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIgBN1IAYAAIgXGyIAWA+IAAO1g");
	this.shape_64.setTransform(621.2,297.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0F0F0F").s().p("AgoT0IAAu1IAWg+IgWmyIAQAAIABt1Ih9AAIAAg/IB9AAIAAiOIAvAAIAACOIB9AAIAAA/Ih9AAIAAN1IAYAAIgXGyIAXA+IAAO1g");
	this.shape_65.setTransform(538.3,297.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAXA/IgBOyg");
	this.shape_66.setTransform(580.9,352.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAXA/IgBOyg");
	this.shape_67.setTransform(580.9,352.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhsAehZQAdhaAyg1IAHgJIAJAJQAxA1AeBaQAeBagBBrIAAK6gAhBlcQgZBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgYBRg");
	this.shape_68.setTransform(622.9,373.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0F0F0F").s().p("Ah0ILIAAq5QAAhrAdhbQAfhaAxg0IAHgJIAIAJQAyA1AeBaQAdBbAABqIAAK6gAhBlcQgZBRAABcIAAKaIC1AAIAAqZQAAhcgYhSQgZhRgqgzQgpAzgYBRg");
	this.shape_69.setTransform(601.9,373.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhqAfhbQAchZAzg2IAHgJIAIAJQAzA2AcBZQAeBbABBqIgBK6gAhClcQgYBSgBBcIAAKZIC2AAIABqZQAAhcgZhSQgYhRgrgyQgqAygYBRg");
	this.shape_70.setTransform(538.7,373.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhqAfhbQAchYAzg3IAHgJIAIAJQAzA2AcBZQAeBbAABqIAAK6gAhBlcQgZBRgBBdIAAKZIC2AAIABqZQAAhcgZhSQgZhRgqgyQgpAygYBRg");
	this.shape_71.setTransform(559.8,373.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0F0F0F").s().p("AgJLgQgDgFAAgHIAB2nQAAgHAEgFQADgEAEAAIAAAAQAGAAADAEQAEAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgEgEg");
	this.shape_72.setTransform(580.9,352.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0F0F0F").s().p("AmiAPQgGABgDgFQgEgFAAgGQAAgFAEgFQADgFAGAAINFABQAGgBAEAFQADAEAAAGQAAAGgDAFQgEAFgGAAg");
	this.shape_73.setTransform(580.9,279.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0F0F0F").s().p("AmvN0IAA7WQAAgHAEgFQADgFAGAAQAFAAAEAFQAEAEAAAIIAAa2IMrAAIAB62QgBgHAEgFQAEgEAFAAQAGAAAEAEQADAEABAIIgBbWg");
	this.shape_74.setTransform(580.9,337.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0F0F0F").s().p("Ah7AuQg4ghgog5IATgVQAVAdAfAPQAdAPAiAAQAoAAAjgXIAHgEIADAEQAkAXApAAQAkABAggTQAggTAXgjIAVAVQgoA+g7AlQg9AlhAAAQg/gBg5gggAgDAtQAsABAugVIgKAAQgrABglgYQgnAXgrAAIgLAAQAtAVAwgBg");
	this.shape_75.setTransform(581.4,273.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0F0F0F").s().p("AgagYIAYgPQAMAhAQAYIgTAVQgUgdgNgig");
	this.shape_76.setTransform(558.5,265);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0F0F0F").s().p("AgSAEIAQgbIAVAQQgIAQgKAPg");
	this.shape_77.setTransform(603.3,265.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0F0F0F").s().p("ADwC5QgEgEgBgGQgFgogTghQgUgigdgVIgHgFIAAgLIABgDQAAhLgug2Qgug2hAgBQg/ABgtA2QguA2AABLIAAANIgHAFQgdAVgUAiQgTAigGAoQAAAHgFADQgEAFgGgCQgFAAgDgGQgDgFABgIQAGgtAVgmQAVgmAggaQAChWA1g+QA1g+BIAAQBKAAA1A+QA1A/ACBWQAfAaAVAmQAVAmAGAtQABAHgDAFQgDAGgGAAIgCABQgFAAgDgEg");
	this.shape_78.setTransform(580.9,233.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0F0F0F").s().p("AiEC5QgEgEAAgHQgCgPAAgQQAAiJBShgQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAANIgHAFQgdAVgUAiQgTAigGAoQAAAGgEAEQgEAEgEAAIgDAAIgFgDQgDADgDAAIgCAAQgEAAgEgEgAhPgCQgdA7gDBFQAVhBAxgmQABhDAjg4QguAogcA6g");
	this.shape_79.setTransform(567,233.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0F0F0F").s().p("AB7C9QgEgBgDgDQgCACgDABIgDABQgEAAgEgEQgDgEgBgGQgGgogTgiQgTghgegWIgGgEIAAgMIAAgCQAAhLgrg2Qgug3hBAAIAAggQBzAABQBiQBSBfAACKQAAAPgCAQQAAAHgEAEQgEAEgEAAIgCAAgAAqAXQAxAnAVBDQgChGgdg8Qgcg8gvgnQAjA3ABBEg");
	this.shape_80.setTransform(594.8,233.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0F0F0F").s().p("AgIALQgDgFAAgGQAAgFADgFQAEgFAEAAQAFAAADAFQAFAFAAAFQAAAGgFAFQgDAFgFAAQgEAAgEgFg");
	this.shape_81.setTransform(580.9,216.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgHAFgCQAcgQAegMQBPgvAuhFQAuhIAAhQQAAgHADgEQAEgFAGAAQAFAAAEAFQAEAFAAAGQAABagyBOQgzBPhWAzIgCAAQgeANgaAOQgCACgDAAQgJAAgDgKg");
	this.shape_82.setTransform(569,206.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0F0F0F").s().p("ABxCqQgagPgegMIgBgBQhXgygyhPQgyhOAAhaQAAgGAEgFQAEgFAFAAQAGAAADAFQAEAFAAAGQAABQAuBIQAuBFBPAvQAdAMAdAQQAFADACAGQACAGgDAGQgDAKgIAAIgGgCg");
	this.shape_83.setTransform(592.9,206.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0F0F0F").s().p("AAAEbQgmAXgrgBQgrABglgXQglgWgagoIAAAAQgJgOgJgTIAAAAQgUgvAAg1QAAg4AVgtQAVgxAngeQABhYA2g/QA1g+BJAAQBJAAA1A+QA1A+ACBYQAmAfAXAxQAVAuAAA3QgBAtgMAlIAAABQgOAjgUAdIgBABQgaAigjARQgjATgmAAQgqAAgngXgAAGD5QAiAYApAAQAhAAAegQQAegPAWgdQATgdALgbQALghAAgkQAAgxgVgoQgUgrgigZIgIgFIAAgLIABgCQAAhNgug2Qgtg2hAgBQg/ABguA2QguA2AABNIABANIgHAGQgkAZgTAqQgVAoAAAxQAAAtARAoQAJARAHALQAWAiAgAUQAhASAkAAQApAAAjgYIAFgDg");
	this.shape_84.setTransform(581,245.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0F0F0F").s().p("ABXDhQALghAAgkQAAgxgUgqQgUgsgjgXIgHgEIAAgMIAAgCQAAhMgrg2Qgug3hBAAIAAggQBzAABQBiQBSBhAACIQgBBOgbBCgAAqgZQAwAlAWBBQgDhGgdg6Qgcg6gugoQAjA4ABBEg");
	this.shape_85.setTransform(594.8,238.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0F0F0F").s().p("AiKBVQAAiIBShiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABNIAAANIgHAFQgjAYgUAqQgUAqAAAxQAAArARApIgWAQQgkhMAAhWgAhQg7QgcA7gDBGQAUhBAygmQABhGAjg3QgvAngcA8g");
	this.shape_86.setTransform(567,239.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0F0F0F").s().p("AhiCZQgEgFAAgGQAAhaAyhOQAyhPBXgzQAFgCAFACQAFACACAGQACAGgCAHQgCAGgFADQhRAugsBIQguBGAABQQAAAHgEAEQgEAFgFAAQgGAAgDgFg");
	this.shape_87.setTransform(548,236.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0F0F0F").s().p("ABRCZQgEgFAAgGQAAhQguhGQgshHhRgvQgFgDgCgGQgCgGACgHQADgGAEgCQAFgCAFACQBXAzAyBPQAyBOAABaQAAAHgEAEQgEAFgFAAQgGAAgDgFg");
	this.shape_88.setTransform(613.8,236.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgKgQgIgRQgjhMAAhWQAAhTAhhJQAghHA5guIgVAHQgFADgEgEQgGgDgBgHQgCgGADgGQACgGAGgCQBWgiBhAAQBggBBZAkQAFABADAHQACAFgCAHQgCAGgFADQgEADgFgCIgUgHQA3AuAhBHQAhBJAABTQAABMgcBEQgMAlgXAcQgnA7g5AgQg4Agg/ABQhCAAg7glgAixjTQhKBYAAB7QAABOAgBDIAAABQAIAQAIAMIAAABQAjA6A3AiQA2AgA7AAQA5ABAzgdQA0geAkg1IAAgBQAUgZALgfIAAgBQAYg9AAhFQABh6hKhZQhKhXhogBQhnAAhKBYg");
	this.shape_89.setTransform(580.9,248);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#121212").s().p("AgSgHIAVgQQAGAMAKAPIgTAUQgLgRgHgOg");
	this.shape_90.setTransform(558.5,265);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#121212").s().p("AgaARQASgYALgfIAYANQgNAkgUAcg");
	this.shape_91.setTransform(603.3,265);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0F0F0F").s().p("Ah4AqQg9glgmg+IAUgVQAWAjAgATQAhASAkAAQApAAAjgXIAFgEIAGAEQAiAXApAAQAhAAAegPQAegQAWgcIAUAVQgoA6g5AgQg5Agg/ABQhBAAg7glgAAEAtQAvABAtgVIgKAAQgqABgngYQgmAXgrAAIgKAAQAsAVAugBg");
	this.shape_92.setTransform(580.5,273.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiYA8iBQA5h+BjhMIAFgFIAHAFQBiBLA6B/QA7CCAACXIAAPjgAiLoGQg4B6AACPIAAPCIGHAAIAAvCQAAiPg4h6Qg0hzhYhGQhWBGg1Bzg");
	this.shape_93.setTransform(601.7,352);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0F0F0F").s().p("Ah1ILIABq6QAAhqAdhaQAehaAyg1IAHgIIAIAIQAyA2AdBZQAeBcAABpIAAK5gAhBlcQgZBSAABbIgBKaIC2AAIAAqaQAAhbgYhSQgZhRgqgyQgpAygYBRg");
	this.shape_94.setTransform(580.8,373.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiXA8iDQA5h9BjhMIAFgFIAHAFQBiBLA6B+QA8CFgBCVIAAPjgAiLoHQg4B8AACOIAAPCIGHAAIAAvCQAAiQg4h5QgzhyhZhHQhXBHg0Bxg");
	this.shape_95.setTransform(559.8,351.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgWmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIAAN1IAXAAIgWGyIAWA+IgBO1g");
	this.shape_96.setTransform(538.4,297.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIgBN1IAYAAIgXGyIAWA+IAAO1g");
	this.shape_97.setTransform(455.5,297.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgWm0IBYAAIgXG0IAXA+IgBOzg");
	this.shape_98.setTransform(498.1,352.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgWm0IBYAAIgXG0IAXA+IgBOzg");
	this.shape_99.setTransform(498.1,352.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QABhqAehbQAchZAzg2IAHgJIAIAJQAzA2AcBZQAfBbAABqIgBK6gAhClcQgZBSAABcIAAKZIC2AAIABqZQgBhcgYhSQgYhRgrgyQgqAygYBRg");
	this.shape_100.setTransform(540.2,373.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAchaAzg1IAHgJIAIAJQAyA2AdBZQAfBbAABqIgBK6gAhClcQgZBSAABcIAAKZIC2AAIAAqZQAAhcgYhSQgYhRgrgzQgqAzgYBRg");
	this.shape_101.setTransform(519.1,373.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0F0F0F").s().p("Ah1IMIABq6QAAhrAehbQAdhYAzg2IAGgJIAIAJQAzA2AdBYQAeBcAABqIAAK6gAhClcQgYBRAABdIgBKZIC3AAIAAqZQAAhcgZhRQgYhSgrgyQgpAygZBRg");
	this.shape_102.setTransform(455.9,373.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0F0F0F").s().p("Ah1ILIABq5QAAhpAehdQAehZAxg1IAHgJIAIAJQAzA1AdBaQAdBaAABrIAAK6gAhBlcQgZBSAABcIgBKZIC3AAIAAqZQAAhcgZhSQgZhRgqgzQgpAzgYBRg");
	this.shape_103.setTransform(477,373.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0F0F0F").s().p("AgILgQgEgFAAgHIAB2nQAAgHAEgFQAEgEADAAQAGAAADAEQAEAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgDgEg");
	this.shape_104.setTransform(498.1,352);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0F0F0F").s().p("AmiAQQgGAAgEgFQgDgFAAgGQAAgGADgEQAEgFAGAAINFAAQAGAAADAFQAEAFAAAFQAAAGgEAFQgDAFgGAAg");
	this.shape_105.setTransform(498.1,279.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0F0F0F").s().p("AmwNzIAB7WQAAgHAEgFQAEgEAFAAQAGAAADAEQAEAGAAAGIgBa2IMsABIAB62QAAgHADgFQAEgFAFAAQAGAAAEAFQADAFAAAHIAAbWg");
	this.shape_106.setTransform(498.1,337.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0F0F0F").s().p("Ah7AuQg5gggng5IATgWQAWAdAeAPQAeAQAhAAQAoAAAjgYIAHgDIAEADQAjAYApAAQAkAAAhgTQAggTAWgiIAVAUQgoA+g7AlQg8AkhBAAQg/ABg5ghgAgDAuQAtAAAtgVIgKAAQgsAAgkgXQgnAXgrAAIgKAAQAtAVAvAAg");
	this.shape_107.setTransform(498.6,273.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0F0F0F").s().p("AgagZIAYgNQALAfASAYIgUAWQgUgcgNgkg");
	this.shape_108.setTransform(475.7,264.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0F0F0F").s().p("AgSAEQAKgNAGgOIAUAQQgHAPgKAQg");
	this.shape_109.setTransform(520.5,265);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0F0F0F").s().p("AD4C9QgFAAgDgEQgEgEgBgGQgFgogTgiQgTghgegVIgHgFIABgOQAAhLgug2Qgug2hAAAQg+AAguA2QguA2AABLIAAANIgGAFQgeAVgTAiQgUAigFAoQgBAHgFAEQgEADgFgBQgFgBgEgFQgDgGABgGQAGguAVgmQAVgnAggZQAChWA1g+QA1g+BIAAQBKAAA1A/QA1A+ACBWQAgAZAUAnQAVAmAGAtQABAGgDAGQgDAGgGABg");
	this.shape_110.setTransform(498.1,233.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0F0F0F").s().p("AiEC5QgEgEgBgHIgBgfQAAiKBShfQBQhiBzAAIAAAhIgBAAQhAAAguA2QgrA2AABLIAAANIgHAFQgeAVgTAiQgTAigGAoQAAAGgEAEQgEAEgFAAIgCgBIgFgCIgGADIgBAAQgFAAgEgEgAhPgCQgdA6gDBFQAVhBAxgmQABhCAig4QguAngbA7g");
	this.shape_111.setTransform(484.2,233.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0F0F0F").s().p("AB7C9QgDgBgEgDQgDADgCABIgDAAQgFAAgDgEQgDgEgCgGQgEgogUgiQgTghgdgVIgIgFIABgOQAAhLgsg2Qgtg2hAAAIAAghQByAABQBiQBRBgABCJIgBAfQgBAHgFAEQgDAEgEAAIgCAAgAAqAXQAyAnAUBDQgDhGgcg8Qgcg7gvgoQAkA5AABCg");
	this.shape_112.setTransform(512.1,233.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0F0F0F").s().p("AgIALQgEgFAAgGQAAgGAEgEQAEgFAEAAQAFAAAEAFQADAFAAAFQAAAGgDAFQgEAFgFAAQgEAAgEgFg");
	this.shape_113.setTransform(498.2,216.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgGAFgDQAdgRAdgLQBPgvAuhFQAuhHAAhQQAAgHAEgFQADgFAGAAQAFAAAEAFQAEAFAAAHQAABagyBNQgyBPhXAzIgBABQgeALgaAPQgCACgEAAQgIAAgEgKg");
	this.shape_114.setTransform(486.2,206.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0F0F0F").s().p("ABxCrQgdgRgbgKIgBgBQhXgzgyhPQgyhNAAhbQAAgGAEgFQAEgFAFAAQAGAAAEAFQADAFAAAGQAABQAuBIQAuBFBPAvQAiAOAYAOQAFACACAHQACAGgCAHQgEAJgIAAIgGgBg");
	this.shape_115.setTransform(510.1,206.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0F0F0F").s().p("AAAEaQglAYgrAAQgrAAglgWQgmgXgagoIAAAAQgLgRgGgPIgBgBQgUgvAAg1QAAg4AVguQAWgvAngfQABhYA1g+QA1g/BJAAQBJAAA1A+QA1A+ACBZQAmAeAXAwQAVAvAAA3QAAArgNAnIAAABQgOAigUAeIgBABQgaAhgjASQgjATgmAAQgrAAgmgYgAAGD6QAjAXAoAAQAhAAAegPQAegQAWgcQAQgYAOghQALgjAAgiQAAgxgUgoQgVgrgigZIgHgFIAAgNQAAhNgug2Qgtg2hAAAQg/AAgtA2QgvA2ABBNIAAAOIgHAEQgjAagUAqQgUAogBAxQABAsARAoIAPAdQAWAiAhATQAgATAlAAQAoAAAjgXIAFgEg");
	this.shape_116.setTransform(498.2,245.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0F0F0F").s().p("ABXDhQALgiAAgjQAAgxgUgrQgVgrgigWIgHgFIAAgOQAAhMgsg2Qgtg3hAAAIAAggQByAABQBhQBRBiABCIQgBBMgbBEgAAqgZQAxAlAVBBQgDhGgdg6Qgbg7gvgnQAiA3ACBFg");
	this.shape_117.setTransform(512.1,238.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0F0F0F").s().p("AiKBUQAAiHBShiQBPhhBzAAIABAAIAAAgQhBAAgtA3QgsA2AABMIAAAOIgHAFQgjAXgUAqQgUAqAAAxQAAAtARAoIgWAQQgkhLAAhYgAhQg8QgdA8gDBGQAWhDAxgkQAAhFAjg4QguAngcA7g");
	this.shape_118.setTransform(484.2,239.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0F0F0F").s().p("AhjCZQgDgEAAgHQAAhaAyhOQAyhPBWgzQAFgCAFACQAGACACAGQACAHgCAGQgCAGgFADQhRAvgsBHQguBGAABQQAAAGgEAFQgEAFgFAAQgGAAgEgFg");
	this.shape_119.setTransform(465.2,236.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0F0F0F").s().p("ABRCaQgEgFAAgHQAAhQguhGQgshHhRgvQgFgDgCgGQgCgGACgGQADgHAFgCQAFgCAFADQBWAyAyBQQAyBNAABaQAAAHgEAFQgDAEgGAAQgFAAgEgEg");
	this.shape_120.setTransform(531,236.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgLgRgHgQQgjhMAAhWQAAhTAhhJQAghHA4guIgUAHQgFACgFgDQgEgDgCgGQgCgHADgGQACgGAFgCQBXgiBhAAQBiAABXAiQAFACACAGQADAGgCAHQgBAGgFADQgFADgFgCIgUgHQA4AuAgBHQAhBKAABSQAABLgcBFQgNAkgVAdQgoA7g5AgQg4Agg/AAQhBAAg8gkgAixjTQhKBYAAB7QAABOAgBEIAAAAQAHAQAIAMIABABQAjA6A2AiQA3AhA7AAQA5AAAzgeQA0gdAkg1IABgBQATgZAKgfIABgBQAZg+AAhEQAAh7hKhYQhKhYhoAAQhnAAhKBYg");
	this.shape_121.setTransform(498.1,247.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#121212").s().p("AgSgHIAVgQQAHAPAJAMIgTAUQgKgQgIgPg");
	this.shape_122.setTransform(475.7,265);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#121212").s().p("AgaASQARgYAMggIAXANQgMAjgVAdg");
	this.shape_123.setTransform(520.5,264.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0F0F0F").s().p("Ah4AqQg8gkgnhAIAUgTQAWAiAhATQAgATAlAAQAoAAAjgYIAFgDIAGADQAjAYAoAAQAhAAAegQQAegPAXgdIATAWQgoA5g5AgQg5Ahg/gBQhBAAg7gkgAAEAuQAwAAAsgVIgKAAQgrAAgmgXQglAXgrAAIgLAAQAtAVAtAAg");
	this.shape_124.setTransform(497.7,273.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0F0F0F").s().p("AjeLlIABviQAAiYA8iCQA5h/BjhKIAFgFIAHAFQBiBLA6B+QA7CDABCXIgBPjgAiLoHQg4B7AACPIAAPCIGHAAIABvCQAAiOg4h8Qg1hyhYhGQhXBGg0Byg");
	this.shape_125.setTransform(519,351.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0F0F0F").s().p("Ah1IMIABq6QAAhqAehbQAdhaAyg1IAHgJIAIAJQAzA1AdBaQAdBaAABrIAAK6gAhBlcQgZBSAABcIAAKZIC1AAIAAqZQAAhdgYhRQgZhSgqgyQgpAzgYBRg");
	this.shape_126.setTransform(498,373.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiYA7iBQA6h/BjhLIAFgFIAGAFQBkBLA5B/QA7CBAACYIAAPjgAiLoGQg4B6AACPIAAPCIGHAAIAAvCQAAiOg4h7Qg0hzhYhFQhXBFg0Bzg");
	this.shape_127.setTransform(477.1,351.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0F0F0F").s().p("AgoT0IAAu1IAWg+IgWmyIAQAAIABt1Ih9gBIAAg+IB9AAIAAiOIAwAAIgBCOIB9AAIAAA/Ih9AAIAAN1IAYAAIgXGyIAXA+IAAO1g");
	this.shape_128.setTransform(281.4,297.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0F0F0F").s().p("AgpT0IABu1IAWg+IgWmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAwAAIAACOIB9AAIAAA/Ih9AAIAAN1IAYAAIgXGyIAXA+IAAO1g");
	this.shape_129.setTransform(198.5,297.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAWA/IAAOyg");
	this.shape_130.setTransform(241.2,352.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAWA/IAAOyg");
	this.shape_131.setTransform(241.2,352.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAdhbQAehbAzg0IAGgJIAIAJQAyA1AeBaQAeBbAABqIgBK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgZBRg");
	this.shape_132.setTransform(283.2,373.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0F0F0F").s().p("Ah0ILIAAq5QAAhpAdhdQAehYAyg2IAHgJIAIAJQAzA1AdBaQAdBbAABqIAAK6gAhClcQgYBRAABcIAAKaIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgZBRg");
	this.shape_133.setTransform(262.1,373.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhZAzg2IAGgJIAJAJQAyA2AdBZQAdBaABBrIAAK6gAhClcQgYBSAABcIgBKZIC3AAIAAqZQgBhcgYhSQgYhRgrgyQgpAygZBRg");
	this.shape_134.setTransform(198.9,373.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0F0F0F").s().p("Ah1IMIABq6QAAhqAehbQAdhZAyg2IAHgJIAIAJQAzA2AdBZQAeBcgBBpIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQAAhcgYhSQgZhRgqgyQgpAygZBRg");
	this.shape_135.setTransform(220,373.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0F0F0F").s().p("AgILgQgEgFAAgHIAB2nQAAgHAEgFQAEgEADAAQAGAAAEAEQADAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgDgEg");
	this.shape_136.setTransform(241.1,352.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0F0F0F").s().p("AmiAPQgGABgEgFQgDgFAAgGQAAgGADgEQAEgFAGAAINFABQAGgBADAFQAEAFAAAFQAAAGgEAFQgDAFgGAAg");
	this.shape_137.setTransform(241.1,279.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0F0F0F").s().p("AmwN0IAB7WQAAgHAEgFQAEgFAFAAQAGAAADAFQAEAFAAAHIgBa2IMsAAIAB62QAAgHADgFQAEgEAFAAQAGAAADAEQAEAFABAHIgBbWg");
	this.shape_138.setTransform(241.1,337.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0F0F0F").s().p("Ah7AuQg4ghgog5IATgVQAWAdAeAPQAeAPAhAAQApAAAigXIAGgEIAFAEQAjAXApAAQAkABAhgTQAggTAWgjIAUAVQgmA+g9AlQg7AlhBAAQg/gBg5gggAgDAtQAsABAugVIgKAAQgqABgngYQgmAXgrAAIgKAAQArAVAxgBg");
	this.shape_139.setTransform(241.6,273.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0F0F0F").s().p("AgagYIAYgPQAKAeATAbIgUAVQgUgdgNgig");
	this.shape_140.setTransform(218.7,265);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0F0F0F").s().p("AgSAEIAQgbIAVAQQgIAOgKARg");
	this.shape_141.setTransform(263.5,265.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0F0F0F").s().p("ADwC5QgEgEgBgGQgFgogTghQgTgigegVIgGgFIAAgOQAAhLgug2Qgtg2hBgBQg+ABguA2QguA2AABLIAAANIgGAFQgeAVgTAiQgUAigFAoQgBAHgFADQgEAFgFgCQgGAAgDgGQgDgGABgHQAGgtAVgmQAVgmAggaQAChWA1g+QA1g+BIAAQBKAAA1A+QA1A/ACBWQAgAaAUAmQAVAmAGAtQABAGgDAGQgDAGgGAAIgCABQgEAAgEgEg");
	this.shape_142.setTransform(241.1,233.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0F0F0F").s().p("AiEC5QgEgEgBgHIgBgfQAAiJBShgQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAANIgHAFQgdAVgUAiQgTAigGAoQAAAGgEAEQgEAEgFAAIgCAAIgFgDQgDADgDAAIgCAAQgEAAgEgEgAhPgCQgdA7gDBFQAVhBAxgmQABhEAjg3QgvAngbA7g");
	this.shape_143.setTransform(227.2,233.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0F0F0F").s().p("AB7C9QgEgBgCgDQgDADgDAAIgCABQgFAAgEgEQgEgEgBgGQgFgogTgiQgTghgegWIgGgEIAAgOQAAhLgsg2Qgtg3hBAAIAAggQB0AABPBiQBRBfABCKIgBAfQgBAHgFAEQgDAEgEAAIgCAAgAAqAXQAxAnAVBDQgDhGgcg8Qgcg8gvgnQAkA5AABCg");
	this.shape_144.setTransform(255.1,233.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0F0F0F").s().p("AgIALQgEgEABgHQgBgFAEgFQAEgFAEAAQAFAAADAFQAEAFABAFQgBAGgEAFQgDAFgFAAQgEAAgEgFg");
	this.shape_145.setTransform(241.2,216.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgHAFgCQAbgQAfgMQBPgvAuhFQAuhIAAhQQAAgGAEgFQADgFAGAAQAFAAAEAFQAEAEAAAHQAABagyBOQgyBPhXAzIgBAAQgdAMgbAPIgGACQgIAAgEgKg");
	this.shape_146.setTransform(229.2,206.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0F0F0F").s().p("ABxCqQgZgPgfgMIgBgBQhXgygyhPQgyhOAAhaQABgHADgEQAEgFAGAAQAFAAAEAFQAEAFAAAGQAABQAuBIQAtBFBPAvQAeAMAcAQQAFADACAGQACAGgCAGQgEAKgIAAIgGgCg");
	this.shape_147.setTransform(253.1,206.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0F0F0F").s().p("AAAEbQglAXgsgBQgqABgmgXQglgWgagoIgBAAQgMgVgFgMIAAAAQgUgvAAg1QAAg4AVgtQAWgxAmgeQAChYA1g/QA1g+BJAAQBJAAA1A+QA1A+ACBYQAmAfAWAxQAWAuAAA3QAAArgNAnIAAABQgPAjgUAdIAAABQgaAigjARQgjATgmAAQgqAAgngXgAAGD5QAjAYAoAAQAhAAAegQQAegPAWgdQARgYANggQALghAAgkQAAgxgUgoQgVgrgjgZIgGgFIAAgNQAAhNgug2Qgtg2hAgBQg/ABguA2QguA2AABNIABANIgHAGQgkAZgTAqQgUAoAAAxQAAAtARAoQAFAMAKAQQAWAiAhAUQAgASAkAAQApAAAjgYIAFgDg");
	this.shape_148.setTransform(241.2,245.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0F0F0F").s().p("ABXDhQAMgkAAghQgBgxgUgqQgVgsgjgXIgGgEIAAgOQAAhMgsg2Qgtg3hBAAIAAggQB0AABPBiQBRBhABCIQgBBNgbBDgAAqgZQAxAlAVBBQgDhGgcg6Qgcg6gvgoQAjA3ABBFg");
	this.shape_149.setTransform(255.1,238.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0F0F0F").s().p("AiKBVQAAiIBShiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABNIAAANIgHAFQgjAYgUAqQgUAqAAAxQAAAtARAnIgWAQQgkhLAAhXgAhQg7QgdA7gCBGQAUhCAyglQABhGAjg3QgvAngcA8g");
	this.shape_150.setTransform(227.2,239.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0F0F0F").s().p("AhiCZQgEgFAAgGQAAhaAyhOQAyhPBWgzQAFgCAFACQAGACACAGQACAGgCAHQgCAGgFADQhRAugsBIQguBGAABQQAAAGgEAFQgEAFgFAAQgGAAgDgFg");
	this.shape_151.setTransform(208.2,236.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0F0F0F").s().p("ABRCZQgEgFAAgGQAAhQguhGQgshHhSgvQgFgDgBgGQgCgGACgHQADgGAEgCQAFgCAFACQBXAzAyBPQAyBOAABaQAAAGgEAFQgEAFgFAAQgGAAgDgFg");
	this.shape_152.setTransform(274.1,236.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgJgNgIgUQgkhLAAhXQAAhTAhhJQAhhHA4guIgVAHQgFACgFgDQgEgDgCgHQgCgGADgGQACgGAFgCQBXgiBhAAQBhgBBYAkQAFABACAHQADAFgCAHQgBAGgFADQgFADgFgCIgUgHQA4AuAgBHQAhBJAABTQAABNgcBDQgLAjgXAeQgoA7g5AgQg4Agg/ABQhBAAg8glgAixjTQhKBYAAB7QAABOAgBDIAAABQAHAPAIANIABABQAjA6A3AiQA2AgA7AAQA5ABAzgdQA0geAkg1IABgBQASgZAMgfIAAgBQAZg+AAhEQAAh6hKhZQhKhXhogBQhnAAhKBYg");
	this.shape_153.setTransform(241.1,248);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#121212").s().p("AgSgHIAVgQQAGAMAKAPIgTAUQgLgQgHgPg");
	this.shape_154.setTransform(218.7,265);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#121212").s().p("AgaARQATgZAKgeIAXANQgLAigVAeg");
	this.shape_155.setTransform(263.5,265);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0F0F0F").s().p("Ah4AqQg8glgog+IAVgVQAWAjAhATQAgASAlAAQApAAAigXIAEgEIAHAEQAjAXAoAAQAhAAAegPQAegQAXgcIASAVQgnA5g5AhQg5Agg/ABQhBAAg7glgAAEAtQAuABAvgVIgLAAQgqABgogYQgkAXgrAAIgLAAQAsAVAugBg");
	this.shape_156.setTransform(240.7,273.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiWA7iDQA6iABjhKIAFgFIAHAFQBjBLA5B/QA7CBAACYIAAPjgAiLoGQg4B6AACPIAAPCIGHAAIAAvCQAAiOg4h7Qg0hzhYhGQhXBGg0Bzg");
	this.shape_157.setTransform(262,352);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0F0F0F").s().p("Ah0ILIAAq6QAAhpAdhbQAdhZAzg2IAHgIIAIAIQAzA2AdBZQAdBcAABpIAAK5gAhClcQgZBSABBbIAAKaIC1AAIAAqaQABhbgZhSQgZhRgqgyQgpAygZBRg");
	this.shape_158.setTransform(241.1,373.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiWA8iEQA5h+BjhLIAFgFIAHAFQBiBLA6B+QA7CDAACXIAAPjgAiLoHQg3B6gBCQIAAPCIGHAAIAAvCQAAiPg4h6QgzhyhZhHQhXBHg0Bxg");
	this.shape_159.setTransform(220.1,351.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIgBN1IAYAAIgXGyIAXA+IgBO1g");
	this.shape_160.setTransform(198.7,297.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0F0F0F").s().p("AgoT0IAAu1IAWg+IgWmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih9AAIAAN1IAYAAIgXGyIAXA+IAAO1g");
	this.shape_161.setTransform(115.7,297.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgWG0IAWA+IgBOzg");
	this.shape_162.setTransform(158.4,352.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgWG0IAWA+IgBOzg");
	this.shape_163.setTransform(158.4,352.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhZAzg2IAGgJIAJAJQAyA2AdBZQAdBaABBrIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgYhRgrgyQgpAygZBRg");
	this.shape_164.setTransform(200.4,373.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhaAyg1IAHgJIAJAJQAyA2AdBZQAdBaABBrIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgYhRgrgzQgpAzgZBRg");
	this.shape_165.setTransform(179.3,373.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#0F0F0F").s().p("Ah1IMIAAq6QAAhpAehdQAehZAyg1IAHgJIAIAJQAyA2AdBYQAeBdAABpIAAK6gAhBlcQgZBSAABcIgBKZIC2AAIAAqZQAAhcgYhRQgZhSgqgyQgpAygYBRg");
	this.shape_166.setTransform(116.2,373.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0F0F0F").s().p("Ah0ILIAAq5QAAhrAdhbQAfhaAxg0IAHgJIAIAJQAyA1AeBaQAdBbAABqIAAK6gAhBlcQgZBSAABcIAAKZIC1AAIAAqZQAAhcgYhSQgZhRgqgzQgpAzgYBRg");
	this.shape_167.setTransform(137.2,373.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0F0F0F").s().p("AgJLgQgDgFAAgHIAB2nQAAgHAEgFQAEgEADAAQAGAAADAEQAEAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgEgEg");
	this.shape_168.setTransform(158.3,352);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0F0F0F").s().p("AmiAQQgGAAgDgFQgEgFAAgGQAAgFAEgFQADgFAGAAINFAAQAGAAAEAFQADAFAAAFQAAAHgDAEQgEAFgGAAg");
	this.shape_169.setTransform(158.3,279.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0F0F0F").s().p("AmwNzIAB7WQAAgGAEgGQADgEAGAAQAFAAAEAEQAEAGAAAGIgBa2IMsABIAB62QgBgHAEgFQAEgFAGAAQAFAAAEAFQAEAFAAAHIgBbWg");
	this.shape_170.setTransform(158.3,337.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0F0F0F").s().p("Ah7AuQg5gggng5IATgWQAVAdAfAPQAeAQAgAAQApAAAkgYIAGgDIADADQAkAYApAAQAkAAAggTQAggTAXgiIAVAUQgoA+g7AlQg9AkhAAAQhAABg4ghgAgDAuQAtAAAtgVIgKAAQgsAAgkgXQgnAXgsAAIgKAAQAuAVAvAAg");
	this.shape_171.setTransform(158.8,273.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0F0F0F").s().p("AgagZIAYgNQAMAhARAWIgUAWQgVgegMgig");
	this.shape_172.setTransform(136,264.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0F0F0F").s().p("AgSAEQAGgHAKgUIAVAQQgIAQgKAPg");
	this.shape_173.setTransform(180.7,265);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0F0F0F").s().p("AD4C9QgFAAgDgEQgEgEgBgGQgFgogTgiQgUghgdgVIgHgFIABgOQAAhLgug2Qgug2hAAAQg/AAgtA2QguA2AABLIAAACIAAALIgHAFQgdAVgUAiQgTAigGAoQAAAHgFAEQgEADgGgBQgFgBgDgFQgDgGABgGQAGguAVgmQAVgnAggZQAChWA1g+QA1g+BIAAQBKAAA1A/QA1A+ACBWQAfAZAVAnQAVAmAGAtQABAGgDAGQgDAGgGABg");
	this.shape_174.setTransform(158.3,233.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0F0F0F").s().p("AiEC5QgEgFAAgGQgCgQAAgPQABiKBRhfQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAACIAAALIgHAFQgdAVgUAiQgTAigGAoQAAAGgEAEQgEAEgEAAIgDgBIgFgCQgDACgDABIgBAAQgFAAgEgEgAhPgCQgdA6gDBFQAWhBAwgmQABhCAjg4QguAngcA7g");
	this.shape_175.setTransform(144.4,233.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0F0F0F").s().p("AB7C9QgEgBgDgDQgCADgDABIgDAAQgEAAgEgEQgDgEgBgGQgGgogTgiQgTghgdgVIgHgFIAAgOQAAhLgrg2Qgug2hBAAIAAghQBzAABQBiQBSBgAACJQAAAQgCAPQAAAHgEAEQgEAEgEAAIgCAAgAAqAXQAxAnAVBDQgChGgdg8Qgcg7gvgoQAjA3ABBEg");
	this.shape_176.setTransform(172.3,233.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0F0F0F").s().p("AgIALQgDgFAAgGQAAgFADgFQAEgFAEAAQAFAAAEAFQAEAEAAAGQAAAGgEAFQgEAFgFAAQgEAAgEgFg");
	this.shape_177.setTransform(158.4,216.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgGAFgDQAcgQAegMQBPgvAuhFQAuhHAAhQQAAgHADgFQAEgFAGAAQAFAAAEAFQAEAFAAAHQAABagyBNQgyBPhXAzIgBABQgdALgcAPQgBACgEAAQgJAAgDgKg");
	this.shape_178.setTransform(146.4,206.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0F0F0F").s().p("ABxCrQgggSgYgJIgBgBQhXgzgyhPQgyhNAAhbQAAgGAEgFQAEgFAFAAQAGAAADAFQAEAFAAAGQAABQAuBIQAuBFBPAvQAjAOAXAOQAFACACAHQACAGgCAHQgEAJgIAAg");
	this.shape_179.setTransform(170.3,206.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0F0F0F").s().p("AAAEaQglAYgrAAQgrAAglgWQgmgXgagoIAAAAQgHgKgLgWIAAgBQgUgvgBg1QABg4AVguQAWgvAmgfQAChYA1g+QA1g/BJAAQBJAAA1A+QA1A+ACBZQAmAeAXAwQAVAvAAA3QAAArgNAnIgBABQgNAhgUAfIgBABQgaAhgiASQgkATglAAQgtAAglgYgAAFD6QAkAXApAAQAfAAAfgPQAegQAWgcQARgZANggQALgiAAgjQABgwgVgpQgVgrgigZIgHgFIAAgNQAAhNgtg2Qgvg2g/AAQhAAAgtA2QgtA2gBBNIAAACIAAAMIgGAEQgkAagUAqQgTAogBAxQABArAQApIAQAdQAXAiAgATQAgATAlAAQAmAAAlgXIAFgEg");
	this.shape_180.setTransform(158.4,245.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0F0F0F").s().p("ABXDhQAMgiAAgjQAAgxgVgrQgUgqgjgXIgHgFIAAgOQAAhMgrg2Qgug3hBAAIAAggQBzAABQBhQBSBiAACIQAABMgcBEgAAqgZQAxAlAVBBQgDhGgdg6Qgbg7gvgnQAjA3ABBFg");
	this.shape_181.setTransform(172.3,238.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0F0F0F").s().p("AiKBUQABiHBRhiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABMIAAADIAAALIgGAFQgkAXgUAqQgUAqAAAxQAAAtASAoIgXAQQgkhMAAhXgAhQg8QgcA8gDBGQAVhDAxgkQABhFAjg4QgvAngcA7g");
	this.shape_182.setTransform(144.4,239.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0F0F0F").s().p("AhiCZQgEgFAAgGQAAhaAyhOQAyhPBXgzQAFgCAFACQAFACACAGQACAHgCAGQgCAGgFADQhRAvgsBHQguBFAABRQAAAGgEAFQgEAFgFAAQgGAAgDgFg");
	this.shape_183.setTransform(125.4,236.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0F0F0F").s().p("ABRCaQgEgFAAgHQAAhQguhGQgshHhRgvQgFgDgCgGQgCgGACgGQADgHAFgCQAFgCAFADQBWAyAyBQQAyBNAABaQAAAHgEAFQgDAEgGAAQgFAAgEgEg");
	this.shape_184.setTransform(191.3,236.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgKgRgIgQQgjhNAAhVQAAhTAihJQAghHA4guIgVAHQgFACgFgDQgFgDgBgGQgBgHACgGQACgGAGgCQBXgiBgAAQBiAABXAiQAFACADAGQACAGgBAHQgCAGgFADQgFADgFgCIgUgHQA3AuAhBHQAhBKAABSQAABLgbBFQgNAlgXAcQgnA7g5AgQg4Agg/AAQhBAAg8gkgAixjTQhJBYgBB7QAABOAgBEIABAAQAGAQAIAMIAAABQAkA6A2AiQA3AhA7AAQA5AAAzgeQA0gdAkg1IAAgBQAUgZAKgfIABgBQAZg+AAhEQAAh7hKhYQhKhYhoAAQhnAAhKBYg");
	this.shape_185.setTransform(158.4,247.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#121212").s().p("AgSgHIAVgQIAPAbIgSAUQgKgRgIgOg");
	this.shape_186.setTransform(136,265);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#121212").s().p("AgaASQATgaAKgeIAYANQgOAlgTAbg");
	this.shape_187.setTransform(180.7,264.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0F0F0F").s().p("Ah4AqQg9gkgmhAIAUgTQAWAiAhATQAgATAlAAQAmAAAlgYIAFgDIAFADQAkAYApAAQAgAAAegQQAegPAWgdIAUAWQgoA5g5AgQg4AhhAgBQhBAAg7gkgAAEAuQAwAAAtgVIgKAAQgtAAglgXQglAXgrAAIgLAAQAtAVAtAAg");
	this.shape_188.setTransform(157.9,273.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0F0F0F").s().p("AjdLlIAAviQAAiYA8iCQA5h/BjhKIAFgFIAHAFQBiBLA6B+QA8CDAACXIgBPjgAiLoHQg4B8AACOIAAPCIGHAAIAAvCQABiOg5h8Qg0hyhYhGQhWBFg1Bzg");
	this.shape_189.setTransform(179.2,351.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhsAehZQAdhaAyg1IAHgJIAIAJQAyA0AeBbQAeBagBBrIAAK6gAhBlcQgZBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgYBRg");
	this.shape_190.setTransform(158.3,373.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0F0F0F").s().p("AjeLmIABvjQAAiYA7iBQA6h/BjhLIAFgFIAGAFQBjBLA6B/QA7CBABCYIgBPjgAiLoGQg4B6AACPIgBPCIGIAAIAAvCQAAiOg3h7Qg1hzhYhFQhWBFg1Bzg");
	this.shape_191.setTransform(137.3,351.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0F0F0F").s().p("AgoT0IAAu1IAWg+IgWmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIgBN1IAZAAIgYGyIAXA+IAAO1g");
	this.shape_192.setTransform(92.8,299);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIgBN1IAYAAIgXGyIAXA+IgBO1g");
	this.shape_193.setTransform(9.9,299);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAWA+IAAOzg");
	this.shape_194.setTransform(52.5,353.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgXG0IAWA+IAAOzg");
	this.shape_195.setTransform(52.5,353.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhrAehaQAdhbAzg0IAGgJIAIAJQAzA1AcBaQAfBbAABqIgBK6gAhClcQgYBSAABcIgBKZIC2AAIABqZQgBhcgYhSQgYhRgrgzQgpAzgZBRg");
	this.shape_196.setTransform(94.5,375);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0F0F0F").s().p("Ah0ILIAAq5QAAhpAehdQAehaAyg0IAGgJIAIAJQAyA1AeBaQAeBbAABqIgBK6gAhClcQgYBSAABcIAAKZIC1AAIABqZQAAhcgZhSQgZhRgqgzQgpAzgZBRg");
	this.shape_197.setTransform(73.5,375);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhZAyg2IAHgJIAIAJQAzA2AdBZQAdBaAABrIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQAAhcgYhSQgYhRgrgyQgpAygZBRg");
	this.shape_198.setTransform(10.3,375);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAdhcQAdhYAzg2IAHgJIAIAJQAzA2AdBYQAdBdAABpIAAK6gAhClcQgZBRABBdIAAKZIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgZBRg");
	this.shape_199.setTransform(31.4,375);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0F0F0F").s().p("AgILgQgEgFAAgHIAB2nQAAgHAEgFQAEgEADAAQAGAAAEAEQADAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgDgEg");
	this.shape_200.setTransform(52.4,353.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0F0F0F").s().p("AmiAQQgGgBgEgEQgDgEAAgHQAAgFADgFQAEgFAGAAINFAAQAGABADAFQAEAEAAAFQAAAGgEAFQgDAFgGAAg");
	this.shape_201.setTransform(52.5,281);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#0F0F0F").s().p("AmwN0IAB7XQAAgGAEgFQAEgFAFAAQAGAAADAFQAEAFAAAGIgBa2IMsAAIAB62QAAgGADgFQAEgFAFAAQAGAAAEAFQAEAFAAAGIgBbXg");
	this.shape_202.setTransform(52.5,339.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0F0F0F").s().p("Ah7AuQg5gggog5IAUgXQAWAdAeAQQAeAQAgAAQApAAAjgYIAHgEIAEAEQAjAYApAAQAkAAAggTQAhgTAWgiIAVATQgoA/g8AlQg7AlhBgBQg/ABg5ghgAgDAuQAtAAAtgVIgKABQgrAAglgYQgoAYgrAAIgKgBQAtAVAwAAg");
	this.shape_203.setTransform(52.9,274.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0F0F0F").s().p("AgagZIAYgNQAKAdASAaIgTAXQgVgggMghg");
	this.shape_204.setTransform(30.1,266.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0F0F0F").s().p("AgSAEQALgRAFgKIAVAQQgKASgIANg");
	this.shape_205.setTransform(74.9,266.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0F0F0F").s().p("ADwC6QgEgFgBgFQgFgogTgjQgTghgegWIgGgEIAAgOQAAhLgug2Qgtg2hBAAQg+AAguA2QguA2AABLIABANIgHAFQgeAVgTAiQgUAigFAoQgBAGgEAFQgFADgFAAQgGgCgDgFQgDgGABgGQAGguAVgmQAVgnAggYQAChXA1g+QA1g+BIAAQBKAAA1A/QA1A+ACBXQAgAZAUAmQAVAmAGAtQABAHgDAFQgDAFgGACIgCAAQgEAAgEgDg");
	this.shape_206.setTransform(52.4,235);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0F0F0F").s().p("AhvC9IgFgDQgDACgDABQgGAAgEgEQgEgEgBgHIgBgfQAAiKBShfQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAANIgHAFQgdAVgUAiQgTAigGAoQAAAGgEAEQgEAEgFAAgAhPgCQgdA7gDBEQAVhAAxgmQABhEAjg3QguAogcA6g");
	this.shape_207.setTransform(38.6,235);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0F0F0F").s().p("AB7C9QgEgBgDgDQgDADgCAAIgCABQgFAAgDgEQgFgEgBgGQgFgogTgiQgTghgegWIgGgEIAAgOQAAhLgsg2Qgtg2hBgBIAAggQB0AABPBiQBRBfABCKIgBAfQgBAHgFAEQgDAEgFAAIgBAAgAAqAXQAxAnAVBDQgChGgdg8Qgcg7gvgoQAkA5AABCg");
	this.shape_208.setTransform(66.4,235);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0F0F0F").s().p("AgIALQgDgEAAgHQAAgFADgFQAEgFAEAAQAFAAAEAFQADAFAAAFQAAAGgDAFQgEAFgFAAQgEAAgEgFg");
	this.shape_209.setTransform(52.5,217.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgHAFgCQAbgQAfgMQBPgvAuhFQAuhIAAhQQAAgGAEgFQADgFAGAAQAFAAAEAFQAEAEAAAHQAABagyBOQgyBPhXAzIgBABQgbAKgdAQQgCACgEAAQgIAAgEgKg");
	this.shape_210.setTransform(40.5,208.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0F0F0F").s().p("ABxCrQgagPgegMIgBgBQhXgzgyhQQgyhNAAhaQAAgHAEgFQAEgEAFAAQAGAAADAEQAEAFAAAHQAABQAuBHQAuBGBPAuQAdAMAdAQQAFAEACAGQABAGgCAHQgDAJgJAAIgFgBg");
	this.shape_211.setTransform(64.5,208.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#0F0F0F").s().p("AAAEaQgmAYgrAAQgqAAgmgWQglgXgagnIgBgBQgMgVgFgMIAAAAQgUgvAAg1QAAg3AVgvQAWgvAmgeQAChZA1g+QA1g/BJAAQBJAAA1A/QA1A9ACBZQAmAeAWAwQAWAvAAA3QAAArgNAnIAAABQgOAigUAeIgBABQgaAhgjASQgjATgmAAQgqAAgngYgAAGD6QAkAXAnAAQAhAAAegPQAegQAWgcQATgcALgdQALggAAglQAAgwgUgpQgVgrgjgZIgGgEIAAgOQAAhNgug2Qgtg2hAAAQg/AAguA2QguA2AABNIABAOIgHAEQgkAagTAqQgUAoAAAxQAAAuARAmQAFANAKAQQAWAiAhATQAgATAkAAQApAAAjgXIAFgFg");
	this.shape_212.setTransform(52.5,246.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0F0F0F").s().p("ABXDhQALghAAglQAAgwgUgrQgUgqgkgXIgGgFIAAgNQAAhNgsg3Qgtg1hBgBIAAghQB0ABBPBhQBRBiABCHQgBBOgbBEgAAqgZQAxAkAVBCQgDhGgdg6Qgbg7gvgnQAkA4AABEg");
	this.shape_213.setTransform(66.4,240);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#0F0F0F").s().p("AiKBVQAAiIBShiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABNIAAANIgHAFQgjAYgUAqQgUAqAAAxQAAAuARAmIgWAQQgkhLAAhXgAhQg7QgdA7gCBGQAUhCAyglQABhGAjg3QgvAngcA8g");
	this.shape_214.setTransform(38.6,240.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0F0F0F").s().p("AhiCZQgEgFAAgGQAAhaAyhOQAyhPBWgzQAFgCAFACQAGACACAGQACAGgCAHQgCAGgFADQhRAugsBIQguBGAABQQAAAGgEAFQgEAFgFAAQgGAAgDgFg");
	this.shape_215.setTransform(19.6,238.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#0F0F0F").s().p("ABRCZQgEgFAAgGQAAhQguhGQgshHhRgvQgFgDgCgGQgCgGACgHQADgGAEgCQAFgCAFACQBXAzAyBPQAyBOAABaQAAAGgEAFQgEAFgFAAQgGAAgDgFg");
	this.shape_216.setTransform(85.4,238.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhBQgJgMgIgUQgkhLAAhXQAAhSAhhKQAhhHA4guIgVAIQgFABgFgDQgEgDgCgGQgCgHADgGQACgGAFgCQBagjBeAAQBhABBYAiQAFACADAGQACAHgCAGQgBAGgFAEQgFACgFgBIgUgIQA4AuAgBHQAhBKAABSQAABNgcBDQgLAjgXAeQgoA7g5AgQg4Ahg/gBQhBABg8glgAixjTQhKBZAAB6QAABPAgBDIAAAAQAHAPAIAOIABAAQAjA7A3AhQA2AhA7AAQA5AAAzgdQA0geAkg2IABAAQAUgaAKgeIAAgBQAZg+AAhEQAAh7hKhXQhKhZhoAAQhnAAhKBYg");
	this.shape_217.setTransform(52.5,249.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#121212").s().p("AgSgHIAVgQQAFAKALARIgTAUQgIgMgKgTg");
	this.shape_218.setTransform(30.1,266.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#121212").s().p("AgaARQATgZAKgeIAYANQgNAigVAeg");
	this.shape_219.setTransform(74.9,266.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0F0F0F").s().p("Ah4AqQg8glgog/IAVgTQAWAiAhATQAgATAkAAQApAAAjgYIAEgEIAHAEQAkAYAnAAQAhAAAegQQAegPAWgdIAUAWQgoA5g5AgQg5Ahg/gBQhBABg7glgAAEAuQAwAAAtgVIgLABQgqAAgogYQglAYgrAAIgKgBQAtAVAtAAg");
	this.shape_220.setTransform(52,274.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0F0F0F").s().p("AjdLlIAAviQAAiXA8iDQA5h+BjhLIAFgFIAHAFQBjBLA5B+QA7CCAACYIAAPjgAiLoHQg3B6gBCQIAAPCIGHAAIAAvCQAAiOg4h8Qg0hyhYhFQhXBFg0Byg");
	this.shape_221.setTransform(73.3,353.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0F0F0F").s().p("Ah0ILIAAq6QAAhoAdhdQAehYAyg2IAHgJIAIAJQAzA1AdBZQAdBdAABpIAAK6gAhClcQgYBRAABcIAAKaIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgZBRg");
	this.shape_222.setTransform(52.4,375);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiWA8iEQA5h+BjhLIAFgFIAHAFQBjBLA5B/QA7CBAACYIAAPjgAiLoGQg4B5AACQIAAPCIGHAAIAAvCQAAiPg4h6QgzhyhZhHQhXBHg0Byg");
	this.shape_223.setTransform(31.4,353.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAXg+IgXmyIARAAIABt1Ih9AAIAAg/IB9AAIAAiOIAwAAIAACOIB8AAIAAA/Ih8AAIgBN1IAYAAIgXGyIAXA+IgBO1g");
	this.shape_224.setTransform(10,299);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0F0F0F").s().p("AgpT0IAAu1IAYg+IgXmyIAQAAIAAt1Ih8AAIAAg/IB8AAIAAiOIAxAAIAACOIB8AAIAAA/Ih8AAIAAN1IAYAAIgYGyIAXA+IAAO1g");
	this.shape_225.setTransform(-72.9,298.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgWG0IAWA+IgBOzg");
	this.shape_226.setTransform(-30.3,353.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0F0F0F").s().p("AgsLTIAAuzIAXg+IgXm0IBZAAIgWG0IAWA+IgBOzg");
	this.shape_227.setTransform(-30.3,353.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhZAyg2IAHgJIAIAJQAzA2AdBZQAeBcgBBpIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQAAhcgYhSQgYhRgrgyQgpAygZBRg");
	this.shape_228.setTransform(11.7,375);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhqAehbQAdhaAzg1IAGgJIAJAJQAyA2AdBZQAdBaABBrIAAK6gAhClcQgYBSAABcIAAKZIC2AAIAAqZQAAhcgZhSQgYhRgrgzQgpAzgZBRg");
	this.shape_229.setTransform(-9.3,375);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#0F0F0F").s().p("Ah1ILIABq6QAAhqAdhbQAehZAyg1IAHgJIAIAJQAyA1AeBZQAdBdAABpIAAK6gAhBlcQgZBSAABbIAAKaIC1AAIAAqZQAAhcgYhSQgZhRgqgzQgpAzgYBRg");
	this.shape_230.setTransform(-72.5,375);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhrAdhbQAfhaAxg0IAHgJIAIAJQAyA0AeBbQAeBagBBrIAAK6gAhBlcQgZBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgZhRgqgzQgpAzgYBRg");
	this.shape_231.setTransform(-51.4,375);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0F0F0F").s().p("AgILgQgEgGAAgGIAB2nQAAgHAEgFQAEgEADAAQAFAAAEAEQAEAFAAAHIgBWnQAAAHgEAFQgEAEgEAAQgFAAgDgEg");
	this.shape_232.setTransform(-30.3,353.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0F0F0F").s().p("AmiAQQgGAAgDgFQgEgFAAgGQAAgFAEgFQADgFAGAAINFAAQAGAAAEAFQADAFAAAFQAAAHgDAEQgEAFgGAAg");
	this.shape_233.setTransform(-30.3,281);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0F0F0F").s().p("AmwN0IAB7XQAAgHAEgEQAEgFAFAAQAGAAADAFQAEAEAAAHIgBa2IMsAAIAB62QAAgGADgFQAEgFAGAAQAFAAAEAFQAEAFAAAGIgBbXg");
	this.shape_234.setTransform(-30.3,339.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0F0F0F").s().p("Ah7AuQg5ghgog5IAUgVQAWAcAeAQQAeAQAgAAQApAAAkgYIAFgEIAEAEQAkAYApAAQAkAAAggTQAggTAXgiIAVAUQgoA+g7AlQg9AkhAAAQhAAAg4gggAgDAuQAtAAAtgVIgKAAQgsAAglgXQgmAXgsAAIgKAAQAuAVAvAAg");
	this.shape_235.setTransform(-29.8,274.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0F0F0F").s().p("AgagZIAYgNQALAfASAYIgUAWQgUgcgNgkg");
	this.shape_236.setTransform(-52.7,266.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0F0F0F").s().p("AgRAEIAPgbIAVAQQgIAPgLAQg");
	this.shape_237.setTransform(-7.9,266.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0F0F0F").s().p("AD4C9QgFAAgDgEQgEgEgBgGQgFgogTgiQgUghgdgVIgHgFIABgOQAAhLgug2Qgug2hAAAQg/AAgtA2QguA2AABLIAAANIgGAFQgeAVgUAiQgTAigFAoQgBAHgFAEQgEADgGgBQgFgBgDgFQgDgFABgHQAGguAVgmQAVgmAggZQAChXA1g+QA1g+BIAAQBKAAA1A/QA1A+ACBWQAgAZAUAnQAVAmAGAtQABAGgDAGQgDAGgGABg");
	this.shape_238.setTransform(-30.3,235);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0F0F0F").s().p("AiEC5QgEgFAAgGQgCgPAAgQQABiKBRhfQBQhiBzAAIAAAhQhBAAgtA2QgsA2AABLIAAANIgGAFQgeAVgUAiQgTAigFAoQgDAOgKAAIgDgBQgCAAgDgCQgDACgDABIgBAAQgFAAgEgEgAhPgCQgdA6gDBFQAWhBAwglQABhCAjg5QguAngcA7g");
	this.shape_239.setTransform(-44.2,235);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0F0F0F").s().p("AB7C9QgEAAgCgEQgDADgDABIgCAAQgFAAgEgEQgDgEgBgGQgGgogTgiQgTghgdgVIgHgFIAAgOQAAhLgrg2Qgug2hBAAIAAghQBzAABQBiQBSBgAACJQAAAQgCAPQAAAHgEAEQgEAEgEAAIgCAAgAAqAXQAyAoAUBCQgChGgdg8Qgcg7gvgoQAjA3ABBEg");
	this.shape_240.setTransform(-16.4,235);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0F0F0F").s().p("AgHALQgEgFAAgGQAAgFAEgFQADgFAEAAQAFAAAEAFQADAEAAAGQAAAGgDAFQgEAFgFAAQgEAAgDgFg");
	this.shape_241.setTransform(-30.3,217.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0F0F0F").s().p("AiCCiQgCgGACgGQACgGAFgDQAcgQAegMQBPgvAuhFQAuhIAAhPQAAgHAEgFQADgFAGAAQAFAAAEAFQAEAFAAAHQAABagyBNQgyBPhXAyIgBABQgfAMgZAPIgGACQgIAAgEgKg");
	this.shape_242.setTransform(-42.2,208.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0F0F0F").s().p("ABxCqQgggRgYgKIgBAAQhXgzgyhPQgyhNAAhaQAAgHAEgFQAEgFAFAAQAGAAAEAFQADAEAAAIQAABQAuBHQAuBFBPAvQAfAMAbAQQAFADACAGQACAHgCAFQgEAKgIAAIgGgCg");
	this.shape_243.setTransform(-18.3,208.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0F0F0F").s().p("AAAEaQglAYgsAAQgqAAglgWQgmgXgbgoIAAAAQgGgKgLgWIAAgBQgVgvAAg1QABg4AVguQAWgvAmgfQAChYA1g+QA1g/BJAAQBJAAA1A+QA1A+ACBZQAnAeAVAwQAXAvAAA3QAAArgOAnIgBABQgNAhgUAfIgBABQgaAhgiASQgkATglAAQgtAAglgYgAAFD6QAkAXApAAQAgAAAegPQAegQAWgcQARgZANggQALgiAAgjQABgxgVgoQgUgrgjgZIgHgFIAAgNQAAhNgtg2Qgvg2g/AAQhAAAgtA2QguA2AABNIAAAOIgGAEQgkAagUAqQgTAogBAxQAAAtASAnIAPAdQAXAiAgATQAgATAkAAQApAAAkgXIAEgEg");
	this.shape_244.setTransform(-30.2,246.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0F0F0F").s().p("ABXDhQAMgiAAgjQAAgxgVgrQgUgrgjgWIgHgFIAAgOQAAhMgrg2Qgug3hBAAIAAggQBzAABQBhQBSBiAACIQAABMgcBEgAAqgZQAxAlAVBBQgDhGgdg6Qgbg7gvgnQAjA3ABBFg");
	this.shape_245.setTransform(-16.4,239.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0F0F0F").s().p("AiKBUQABiHBRhiQBQhhBzAAIAAAgQhBAAgtA3QgsA2AABMIAAAOIgGAFQgkAXgUAqQgUArAAAwQAAAtASAoIgXAQQgkhMAAhXgAhQg8QgcA8gDBGQAVhCAxglQABhFAjg4QgvAngcA7g");
	this.shape_246.setTransform(-44.2,240.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0F0F0F").s().p("AhiCZQgEgFAAgGQAAhaAyhOQAyhPBXgzQAFgCAFACQAFACACAGQACAHgCAGQgBAGgFADQhSAvgsBHQguBFAABRQAAAGgEAFQgDAFgGAAQgFAAgEgFg");
	this.shape_247.setTransform(-63.2,238);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0F0F0F").s().p("ABRCaQgEgFAAgHQAAhQguhGQgshHhRgvQgFgCgCgHQgCgGACgGQADgHAFgCQAFgCAFADQBWAyAyBQQAyBNAABaQAAAHgEAFQgDAEgGAAQgFAAgEgEg");
	this.shape_248.setTransform(2.6,238);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0F0F0F").s().p("Ah9EoQg8glgnhAQgKgRgIgQQgjhNAAhVQAAhTAihJQAfhHA5guIgVAHQgFACgFgDQgEgDgCgGQgBgHACgGQACgGAFgCQBYgiBgAAQBiAABXAiQAFACACAGQADAGgBAHQgDAGgEADQgFADgFgCIgVgHQA5AuAgBHQAhBKAABSQAABLgbBFQgNAkgWAdQgoA7g5AgQg4Agg/AAQhBAAg8gkgAixjTQhJBYgBB7QABBNAfBFIABAAQAEANAKAPIAAABQAkA6A2AiQA3AhA7AAQA5AAAzgeQA0gdAkg1IABgBQASgZALgfIABgBQAZg+AAhEQAAh7hKhYQhKhYhoAAQhmAAhLBYg");
	this.shape_249.setTransform(-30.3,249.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#121212").s().p("AgSgHIAVgQIAPAbIgSAUQgKgRgIgOg");
	this.shape_250.setTransform(-52.7,266.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#121212").s().p("AgaASQASgXALghIAYANQgOAlgTAbg");
	this.shape_251.setTransform(-7.9,266.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0F0F0F").s().p("Ah5AqQg8glgng+IAVgVQAWAjAhATQAgATAkAAQApAAAjgXIAFgFIAFAFQAkAXApAAQAgAAAegPQAegRAWgcIAUAWQgoA5g5AgQg4AghAABQhBAAg8glgAAEAuQAxAAAsgVIgKABQgtAAglgYQglAYgsAAIgKgBQAtAVAtAAg");
	this.shape_252.setTransform(-30.7,274.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0F0F0F").s().p("AjdLmIAAvjQAAiYA8iCQA6h+BihLIAFgFIAGAFQBjBLA6B+QA8CDgBCXIAAPjgAiLoHQg4B8AACOIAAPCIGHAAIABvCQgBiOg4h8Qg0hyhYhGQhWBFg1Bzg");
	this.shape_253.setTransform(-9.4,353.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#0F0F0F").s().p("Ah0IMIAAq6QAAhsAehZQAdhaAzg1IAGgJIAJAJQAxA1AeBaQAdBaAABrIAAK6gAhClcQgYBSAABcIAAKZIC1AAIAAqZQABhcgZhSQgYhRgrgzQgpAzgZBRg");
	this.shape_254.setTransform(-30.4,375);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0F0F0F").s().p("AjeLmIABvjQAAiYA8iBQA6iABihJIAFgGIAHAGQBjBLA5B+QA7CBABCYIgBPjgAiLoGQg4B6AACPIgBPCIGIAAIABvCQAAiOg4h7Qg1hzhYhGQhWBFg1B0g");
	this.shape_255.setTransform(-51.3,353.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,170.7,927.2,257);


(lib.ProgressBar_Tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAAJIAAgR");
	this.shape.setTransform(-33.5,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AlOCcIAAgfIAAguIAAgFIAAiqIAAgSIAAgpIKdAAIAADlIAAAFIAAAuIAAAfg");
	this.shape_1.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-15.4,68.2,31.3);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2C").s().p("Ag1AAIhbAAIgKh3IBbgBIgGhQIB0gBIAHBPIBbgBIAKB4IhbABIARDLIh1ABg");
	this.shape.setTransform(15.5,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.1,40.6);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2C").s().p("Ag1AAIhbAAIgKh3IBbgBIgGhQIB0gBIAHBPIBbgBIAKB4IhbABIARDLIh1ABg");
	this.shape.setTransform(15.5,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.1,40.6);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2C").s().p("AAAggIhqABIgBgLIB1gCIAGBNIBbgBIABAMIhnABg");
	this.shape.setTransform(10.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,9.1);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2C").s().p("AACBiIgPjEIAMAAIAPDEg");
	this.shape.setTransform(1.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,19.8);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2C").s().p("AHKoFIidACIgQieQgQiciOhsQiMhti4ADQhaABhRAeQhPAeg6A0QA5hLBcgsQBfgtBvgCQC3gCCOBtQCOBsAQCcIAQCeICdgCIAAaBIgwABg");
	this.shape.setTransform(50.7,109.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.3,219.5);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2C").s().p("Ah4iTICBgCQAwgBAgAhQAcAdADAsQAEArgXAcQgaAhgwABIhNABIAHBYIg0ABgAAOhfIhNABIAJBoIBNgBQAYAAAMgPQALgPgCgWQgCgVgNgPQgPgRgXAAIgBABg");
	this.shape.setTransform(68.4,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2C2C").s().p("AgbAAQgCgcAcgBQAbAAACAdQACAdgcABIgBAAQgaAAgCgeg");
	this.shape_1.setTransform(51.3,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D2C2C").s().p("AgliUIAygBIAZEqIgyABg");
	this.shape_2.setTransform(40.3,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2C2C").s().p("AgbAAQgDgdAdAAQAbAAACAdQADAegdAAIgBAAQgaAAgCgeg");
	this.shape_3.setTransform(31.5,27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D2C2C").s().p("AiGiUICEgBQAtgBAeAeQAcAbAEAqQADAigOAWQgPAcglAJIBdBlIAAAEIg+ABIhYhjIgyAAIAIBkIg0ABgAABhhIhOABIAIBgIBOgBQAXAAAMgPQAKgNgCgUQgBgUgNgNQgOgPgWAAIgBAAg");
	this.shape_4.setTransform(13.6,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.5,31);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-374.5,305.5,243.9,-195.3).s().p("EhPTgHAIKK2YQBmAJC6AXQF1AvGmBGQAZhDAhiEQAjiIAWg+QhCgLhRgGIgCAEQAKgfgNgeIgHgCQBNgDBoAWQAOgkAUgjIABgGIBOAjIgJAEIgQA8QCAAhAbAGIghA9QhAgchKgSQgXBGgzB9Qg2CFgVA8ICGAWQAHg6ARhHQgkgGgbABQAGgFgEgJQgDgJACgCIABgIIBFAKIAMgsIARABQAHAAAIAEIAKABIgMAsQAxAHAwAKQABAFgHAMIgJAUQgygQgngJQgRBMgGA2IBkASIAJgnQgVgEgXAAQAEgDgDgGQgCgHABgBIABgGIAwAHIAJgeIALABQAGAAAFACIAHABIgJAfIBEALQABAEgFAJIgGANQgjgLgcgGIgIAnIB2AWIALiJQAIhSANg7Qh5gZgugHIAFgfQAEgNAMgRIALgJQA3APBhARQAIgaAIgTQAQgFAfADIgHA4ICrAZIgFANIgLAQQgGAIgFAEIgcAVQg6gChCgMQgRCpAGBxIEVA2IAtieIhSgYIhPgVIACgPQAGgNgBgPIgDgaIAFgMQAfAVCNApQAUg6AWgqQASgCAYAIQgMA+gMAxQBZAXAMgEIAQgBQgDAWgDALQgDAMgIATIgRgBQgpgEg7gOQgTBIgdBTICsAjIBYi6QAyhrAahWIhigfQg9gVgTgWIAPgcQAJgRAEgNIABgEIAuARQApAPAOAHQAdAKAoATIAYhTIAEABQAKAHAWAIIAjANIgFADIgWBTQBkAwA2ATIAKgCQgcAmgLAZQgsgQhigsQgPA3g1B8Qg0B6gPA4IgqADICFAdQAahJAmhLQghgKgagMIgKgFQAGgTAOgUIAIAGQADAGA5APIAlhBQASAGAGAFQgJAigNAfQBeAXAWgBIgDAHIgNANQgHAIgDAIIgFAIIhngbIgiBHQgVAqgMAgICfAjIgUgIQAug8BLh1QBSh/Ang2Qg7geg7gTIAbg2IB7A9QASgXATgVIgDgHIBKAVIgEAEQgPAggTAeQBQAsAqArIgFgCQgfALgTAYIADgEQg0gogxgeQghAvhjB3QhXBogoBAIDLAvQBEhfAtgzQhXg9gSgMIARgVQAIgIARgJIALgDQAgAcA/AqIAegbQAOABAVAMIgdAmIBvBGIgKAIIgPAIQgHAEgFABIgdAGQgkgRgugeQg5BMgjA3IDoA5QAwhgBXh6QgygYgsgMQALgEAAgQQAAgQAFgCIAHgMIBkAuIAvg+QAIAEARAFQAMAEAKAJIAOAGIgvA/QBSAnA6AfQgDAJgRAQQgVATgFAHQg9grg/gkQhLBugxBfQDYA2DYA6QAPhbAGhnQhIABhSAJQAAgIgFgaQgFgVAEgJQBMAABWAFIABhKIAQABQAOgDANACQASAEAIAAIAABKIByAHIgCANQADAEgLAOQgKANAHAJQgrgKg7gDQgFB4gQBcIDjA/QAFg3ABhFQg5AFgrgDIgUgSQgEgDgDgHIgIgOIgDgLICKgIIABgtQAZAAAMAFIAIAlQBLgGAxgJIAIAIQAJAOABALQABAFAAAUQglAChiAMQAEA6gDBYIDLA7QAEhCgFh7QgHiDADg5Qg7ADhHAJIAAADQgBgcgSgWIgGAAQBAgSBfAAQAEgkAHgfIgBgGIAoAIIAkAIIgHAFIACA2IBJADIBGACIgNA6QhAgMhCgBQgBBBgNCFQgMCCgBBCICMAqQAIgcAIgpIAPhDQhagWgOgCIABgJQADgJgBgKIgDgQIADgIQATAMBcAXQALgjANgeQANgBAMAEQgEAegGApQA5AMAGgCIALgBQgCAXgHASIgLAAQgcgCgigHQgPBHgVBDIBaAcQAXg0Ajh/QAih9AYg3QhwgHgugIQAGgWACgxIAHAHQA9AJBvAFIAjhPIgCgFIAmAFQAXADANgBIAEABIghBQQAiACArAFQAQABAsAHQAsAHAFAAIgBADQgGANgDATIgFAeQgfAJhAgKQhJgOgegEQggBSgaBtIgtC+ICnA2QAVg+AjhTQg9gQghgPIgQgGQAGgUAFgMQAEgKAMgUIANAIQAIAIBZAWQAbg5AYgvQAZAEAPAKQgJArgUA9QCSAeAlgDIgDAMIgTAUQgLANgDANIgIANQgfgIgxgKIhTgSIg/CUQBlAhCkA3QBRhhBbiRQhCgWgugYIgLgeQgBgFAAgKIACgTIADgNICfA6IAfgyQAdAMAJAMIgPAsQBZAeA7ANIADAMQAAAUgFANIgRAcQgdgKiDgoQgcA5guBJIhPB5IBvAmIAVgpQgagIglgGIADgPQACgJADgDIBAAVIANgdIAGACQAGABAFACIAKAEIgNAeIAtAQIgDAFQABACgHAFQgGAEABAEQgQgJgXgIIgUAqIBdAhQAigzAjhMQgtgMgtgIQACgFADgPQACgNAEgFQAqAMAyATIATgrIAIADQAJABAHADQAJAFAGACIgSArIBAAXIgEAHQAAADgJAGQgJAGACAGQgVgMgjgNQgjBMghA1IB/AuQAXg/ApiLQAoiGAahGQhPgThDgFIALhDQAeAJB+AdQAQgmAJgTIgFgHIBYAFIgDAGQgHApgKAjQBoAeA7AlIgGgCQgdATgMAbIAAgBQhLggg7gVQgWA/g9CJQg6CBgXBHIDrBXQAigzBAhlIiMhPIAGgNQAKgLAEgQIAFgZIAJgKQAVAZB9BIQAjgwAlgnQAQADAXAMQgdA2gdAwQBOAqANgBIAQADIgQAfQgHALgOAQIgQgFQgmgMg1gbQgoBAg6BPICjA+QAxg5BchkQBPhaA0hMQg3gigdgTQg0ghgMgaIAXgXQAOgOAIgMIACgEIAnAbQAjAXAMAKQAYARAhAaIAxhKIAEACQAHAJASAMIAeAVIgGABIgvBMQBUBGAsAcIAKAAQgqAkgPARQgmgZhRhBQgfAzhZBqQhZBrgfAxIBZAkQApg1A2g7QgegSgUgRIgHgGQALgQAUgRIAFAHQACAGAyAcQAZgaAfgcQAOAIAGAHQgRAcgZAeQBSArAXAEIgFAHIgQAJQgKAGgFAHIgIAHIhagxQhBBFgfAlICJA4QA1gqBqhdQBohcA5gtQgvgpg0ggIArgvIAwArIA0AsQAWgQAbgSIAAgIIBAAlIgFADQgaAdgaAXQA+A7AcA1IgEgEQggAEgZASIACgCQgkgwgngqQgxAnhyBPQhtBNg1ArIDDBSQA8gvAzghIgngwQgXgcgRgTIAXgQQALgGASgEIANgBQAYAmAtAzIAlgUQANAFARAPIgoAfIBVBcIgLAFQgWAHgJAAIgeAAQgegZgigoQgxAmgkAeQBxAwBkAtQBChABRhAQgrgjglgVQAMgBAFgPQAFgQAGgBIAKgKIBSBDIBBgyQAGAGAPAJQAKAGAHALIAMAJIhBAzQBDA4AuAqQgGAJgVALIgiARQgug2gwgvQhKA9g2AzQDJBbC2BWQAohSAghUQhIgQhPgIQADgHADgbQACgVAGgHQA6ANBhAcIAZhIIAOAFQAPABALAFQAQAHAJACIgYBHIBsAeIgGANQABAEgOALQgOAKAEAKQgngSg4gRQgiBggqBUIDLBiIAfhVQg6gIgngMIgOgWQgDgEgBgHIgCgQIAAgLICIAYIAOgsQAYAGALAIIgEAlQBNALAvACIAFAJQAEAQgCALQAAAFgHATQgXgEhwgNQgLAwgUA5IC1BcQARgwAfhwQAchoAUg2QgygJhPgIIgCAFQAJgcgLgbIgGgCQBCgCBdAVQANgeATghIABgFIBEAgIgIAEQgHAbgIAZIBGATQAoAMAbAGIgfA1Qg6gZg/gRQgVA9gsBmQgyB1gQAsICGBGIAphIQhJgmgTgJIADgJQAGgHACgKIACgQIAFgHQAPAQBSArQAUgeAXgcQAMABANAIQgTAogOAaQAzAZAJgBIAKABIgJAUQgEAHgJALIgKgDQgagHghgPQgYArgUAdIBXAvQATgaBIhwQA3hWAlgrQhqghgpgRQANgVAQguIAFAIQA1AWBtAfIA7hFIgBgFIAjANQAVAIANACIAEACIg5BGQAlALAiANQAQAEAoARIAtARIgCAEQgKALgJARIgOAcQggACg7gYQhCgegbgLQgyBAgxBPIhTCNICbBWIAzg/Qg1gdgcgWIgNgJQALgSAJgLIAagZIAKAKQADAKBRApQArgxAngoQAVAJAMAOQgYAsgkAxQCCA+AmAFIgGALIgZAPQgPAKgHAMIgMALQgbgOgsgVIhLgkIg2BBQBxA/CQBVQBDg0BdhUQg4gkgmghIAAgfQgBgGAEgJIAHgRIAIgMICHBbIAtgqQAXASAHAOQgNATgQAUQBOAyAzAYIAAANQgHATgJAMIgZAXQgigXhog8Qg0A3hiBVIBXA0IABgBIAFADQAGACAEAEIAIAGIAAABIBaA2IAcgfQgogWgpgSQADgDAIgPQAHgMAFgEQAhATAvAfIAfglIAHAGQAIACAGAFIAMAJIgfAmIA3AkIgGAHQgBADgLADQgKAEAAAGQgTgSgcgSIgcAfQEFCiDjCZI5RLLMh6kACWg");
	this.shape.setTransform(507.7,226.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1015.4,452.8);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-0.2,0.4,0.4,-0.1).s().p("AgCACIAFgDIAAADg");
	this.shape.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.7,0.6);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-0.3,0.3,0.5,-0.3).s().p("AgEAAIAJgCIgEAFg");
	this.shape.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,0.6);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-0.1,0.2,0.3,-0.1).s().p("AgBAAIABgCIACAFg");
	this.shape.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.6,0.7);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-0.3,0.3,0.1,0).s().p("AgDACIABgEIAGAFg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A5D89").s().p("AKOB/Qingtg0gGQhkgUiHgGQhQgEijAAQhqAAiOgNIj1gaQkvgdizAXQh9AHkYghQkGghiPAQIgtAAQD0hRE5gMQDfgJFZAbQA8AIB/AUQBzARBJAAQBtAJCogqQDIgzBMgGQCzgJEHANQCWAIElASIC5gDQCVgCBoADQFEALAvBCQhTAZidALQizAMg9AKQg5APhJAeIh8A3QiYBBhnAAQhUAAiTgng");
	this.shape.setTransform(187.5,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,33.4);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D3DD").s().p("ABTJwQhVgQgchlQgRg/AFhwQAEhTgYgkQgZgnhSghQhFgRgjgMQg9gXgZgoQgZgvATgXQATgXA3AHQAfAFAcAcQAfAdAbAJQBNAbA5gVQBBgYgwhNQgRgjgvgfQgsgdgrgIQgRgDhGAJQg9AIgWgOQgdgRgEgnQgHg8gEgKQgkhzh4AIQg7AHgpgHQgggGg/gXQgIgDhKgIQhCgIgIgLQgLgOAAgHQAAgHALgPIAYgKQgHglBlgqQBcgmA1AAQAsAABfAcQBbAcAwgDQAggEBLgWQBCgUAzgCQBxgEBEAWQBRAaBJBJQAUAQAqA3QAhAsAkAQQAWANBVAqQBAAfAnAfQBTBFBGBoQA/BcAvBxQAMAjABArIACBOQAGAlAZAtQAnBDADAHQAWA8gbAXQgcAXgygrQgMgKgggrQgOgTgxgGQghgDg0AGQg+AHgYAAQgWgBhfggQhFgYgwAXQgmAQgXAsQgFALgbBJQgSAxgWAUQgXATgjAAQgNAAgPgDg");
	this.shape.setTransform(90.8,62.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.5,125.5);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D3DD").s().p("ADXJMQgrgPhDhQQhJhdgbgfQgOgRgagOQgdgNgMgIQgqgZAGg3IAHgUQAqgzhIgUQhZgOgRgHQgigTgxhAIhEhgQgwg3ABgoQAAgoAzg3QAwgvAegVQArgdAygKQAigFBAAGQA3AAAggjQAVgVAJg+QAGg6AagPQAegSAdAhQAhAmAegEQAfgIBzhLQBig0gGBWQAAAXgPAwQgQA1gDAWQgDAtADAeQADAXAMAwQASBLgZBFIgaA9QgRAngJAbQgLAvAGAnQAHAqAcAcQAKAOAVAMIAiATQAmAYgGAsQgKAEgmABQgiABgKAIQgcATgDAuQgCAbADAyQAABUgLAcQgOAlglAAQgRAAgXgIg");
	this.shape.setTransform(44.1,59.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,88.1,119.3);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],0,0.2,0.4,-0.1).s().p("AgBAAIADgCIgBAFg");
	this.shape.setTransform(0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.5,0.8);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D3DD").s().p("AAPC3IgXgkQgPgTgNgDQgNgDgZAEIgoAHQguAFgDgvQgDgnBCgwIBdg+QAQgUAYgtQAbgxAJgMQATgZARAJQAUAMAWA9QAcBNgQBQQgPBKgzBGIgHAMQgTASgRAAQgTAAgQgVg");
	this.shape.setTransform(16.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,40.8);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D3DD").s().p("AgvDOQgTgEgPgFQgcgTAEgHQALgSgBgJQgFg7gCgMQgFgggNgnQgWhIAQhBQAShMBAADIARADQBiAvARANQA1AqgJBJQgJA2gsBQQgyBagqANQgEACgHAAQgJAAgOgDg");
	this.shape.setTransform(13.3,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.8,41.9);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D3DD").s().p("Ak9CRQgsgEBWgmQAvgUBBgaQA3gQAfgeQAJgIA0hCQAbgpAWgWQAlglAdADQAQACAMAbQAMAbAIACQAVAJAcgGIAxgMIBBgKQAhACgPAvQgMAehKAqIhoA0QhAAsgdAQQgyAbg3AGQhXAMg3ADIgfABQg7AAgZgQg");
	this.shape.setTransform(33.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,32.4);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3D3DD").s().p("AhVEqQgXgRAHg/QAJhQgDgLQgFgXguhJQglg6AFgnQAJgwAugQQAagJA9gPQAOgFAhgZQAdgWAIgBQgOg2AYgdQAaghAwAvQA3A0gJBvQgIBngwA2QgFAFgoAcQgdAUgIAUQgFAMAHAjQAHAkgFAPQgIAjgnAgQgdAXgaAAQgOAAgNgHg");
	this.shape_1.setTransform(18,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,36,61.1);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-0.2,0.3,0.5,-0.2).s().p("AgDABIAHgCIgCADg");
	this.shape.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.5);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3D3DD").s().p("ACEDBQgPg7gIgRQgVAegrgQQgwgagWgIQg0gOgIAMIgKATQgJAPgTAMQhBAugThCQgRg5AXhDQAQgrAbgKQAmgGAagKQAYgKAhgYQAlgcARgLQAcgOAQgdQAMgYAagDIAUACQAfAWAWAbQAbAhADAeQAFAqgmAhQgjAcAJAlQAIATAwA2QAjA0gqAkQgSAQgOAAQgRAAgLgXg");
	this.shape_1.setTransform(21.5,21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,43.1,43.4);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(32,17,33,0)","#201121"],[0,1],-0.3,0.1,0.4,-0.4).s().p("AgEAAIAJgBIgFADg");
	this.shape.setTransform(0.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,0.5);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3D3DD").s().p("AjGGIQgfgRgJguQgFgaANgzQAOg2gCgZQgJg3gCgXQgDgnATgnQAwhfBAgtQANgLAvgWQApgSAOgWQAUgUANguQAOgvAQgTQAmggAWgOQAmgYAdAAIATAHQAeAkgYAVQgjATgKAMQgPAXgBAoQgBAugMAbQgHASgYAVQgaAVgGANQgHAKgDAZQgCAYgIAKQgKALg+AXQg2AVgDAeQgGAzAtABIAmgDQAXgDAKADQAiAOAVAlQATAgAEAsQAJAtgOAnQgRAwguAAQgdAAgigoQgjgsgWgEQADAmgYAhQgWAfgjAMQgQAFgPAAQgRAAgPgHg");
	this.shape_1.setTransform(24.1,40);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.1,80);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3D3DD").s().p("AB9BmQg1gwgSgDQgJgCgZAJQgYALgNgDQgLgCgXgWQgVgUgNAAQgYAAgTAVQgRASgXgFIgMgTQADgUAcgKQArgNAGgEQAOgLAZgLQAegMAJgFQAMgHAQgWQAQgUANgFQAvgUAUAQQANAKARAwIAbBAQAWA4AAAKQgFAigVAAQgMAAgSgNg");
	this.shape_1.setTransform(18.2,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,36.4,23.1);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#D8E8F2"],[0,1],-143,0,143,0).s().p("AorUlQkBhtjGjFQjFjGhtkBQhxkKABkiQgBkiBxkJQBtkBDFjGQDGjFEBhtQEKhwEhAAQEiAAEKBwQEABtDHDFQDGDGBsEBQBxEJgBEiQABEihxEKQhsEBjGDGQjHDFkABtQkKBwkiAAQkhAAkKhwg");
	this.shape_1.setTransform(455,455);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312,312,286,286);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AhSAWIgIgxIC1AXIgNAfg");
	this.shape.setTransform(9.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,5.6);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AhSgDICigkIADArIifAkg");
	this.shape.setTransform(8.3,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,8);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0E0E").s().p("Eg3TASPMAAAghuUA3TgFdA3UAFdMAAAAhuUg3UgFeg3TAFeg");
	this.shape_2.setTransform(354.1,116.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,708.2,233.5);


(lib.EndScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape.setTransform(561.3,519.8,1.524,2.942);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_1.setTransform(648.8,541.3,1.536,0.96,-165);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_2.setTransform(420.2,575.1,1.536,0.96,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_3.setTransform(448.5,373,1.524,2.942);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_4.setTransform(536,394.5,1.536,0.96,-165);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_5.setTransform(595.9,451,1.536,0.96);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_6.setTransform(658.4,406.1,1.536,0.96,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_7.setTransform(649.4,539);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_8.setTransform(505.7,470.1,1.536,0.96,-15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_9.setTransform(175.1,586.5,1.524,2.942);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_10.setTransform(262.6,608,1.536,0.96,-165);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_11.setTransform(19.9,517.5,1.536,0.96,-15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_12.setTransform(62.3,439.7,1.524,2.942);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_13.setTransform(149.8,461.2,1.536,0.96,-165);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_14.setTransform(209.7,517.7,1.536,0.96);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_15.setTransform(272.2,472.7,1.536,0.96,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_16.setTransform(263.2,605.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_17.setTransform(119.5,536.8,1.536,0.96,-15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_18.setTransform(318.1,368.8,0.914,2.015,0,-62.6,-25.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_19.setTransform(217.4,420.7,1.524,5.704,0,-59,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_20.setTransform(340.6,442.2,2.181,1.591,0,125.7,-169.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_21.setTransform(482.2,453.7,2.181,1.591,0,-54.3,10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_22.setTransform(694.1,586.7,1,1.939,0,-59,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_23.setTransform(435.4,174.2,1.536,0.96,-15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_24.setTransform(477.8,96.3,1.524,2.942);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_25.setTransform(565.3,117.8,1.536,0.96,-165);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_26.setTransform(687.7,129.4,1.536,0.96,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_27.setTransform(678.7,262.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_28.setTransform(168.4,340.2,1.536,0.96,-15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_29.setTransform(210.8,262.3,1.524,2.942);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_30.setTransform(298.3,283.8,1.536,0.96,-165);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_31.setTransform(420.7,295.4,1.536,0.96,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_32.setTransform(411.7,428.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_33.setTransform(55.6,193.4,1.536,0.96,-15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_34.setTransform(98,115.5,1.524,2.942);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_35.setTransform(185.5,137,1.536,0.96,-165);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_36.setTransform(519.8,150.5,1.536,0.96);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_37.setTransform(654.4,327.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_38.setTransform(594.7,213.3,1,1,-30);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_39.setTransform(245.4,193.5,1.536,0.96);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_40.setTransform(307.9,148.6,1.536,0.96,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_41.setTransform(298.9,281.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_42.setTransform(100.4,262.3,1.536,0.96,-15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_43.setTransform(371.6,35.5,1.536,0.96,15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_44.setTransform(151.2,39.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_45.setTransform(71.4,50.2,1.536,0.96);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgSASQgIgDgDgFQgFgIAJgHQAGgGAPgGQAEgCAFACIANADQALACACAIQACAFgJAHQgNALgPAAQgHAAgHgBg");
	this.shape_46.setTransform(174,21.5,1.536,0.96);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3D3D3D").s().p("AgMAjQgPgDgIgEQgMgIgBgLQgCgKAMgMIATgUQATgEANABQATACALALIAFAGQACAGgCAKQgCAJgDAGQgGAKgQAHQgNAGgIAAIgMgCg");
	this.shape_47.setTransform(174.5,22.6,1.536,0.96);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgSASQgIgDgDgFQgFgIAJgHQAGgGAPgGQAEgCAFACIANADQALACACAIQACAFgJAHQgNALgPAAQgHAAgHgBg");
	this.shape_48.setTransform(354.5,83.6,1.536,0.96);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3D3D3D").s().p("AgMAjQgPgDgIgEQgMgIgBgLQgCgKAMgMIATgUQATgEANABQATACALALIAFAGQACAGgCAKQgCAJgDAGQgGAKgQAHQgNAGgIAAIgMgCg");
	this.shape_49.setTransform(355,84.6,1.536,0.96);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgVAOQgKgGAAgIQAAgHAKgGQAJgGAMAAQANAAAJAGQAJAGAAAHQAAAIgJAGQgJAFgNAAQgMAAgJgFg");
	this.shape_50.setTransform(43.5,5.2,1.536,0.96);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_51.setTransform(273,39.7,1.536,0.96);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_52.setTransform(455,17.4,1.536,0.96);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_53.setTransform(19.3,9.6,1.536,0.96,30);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_54.setTransform(107.5,22.9,1.536,0.96,-15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgIAIQgDgCAAgDQAAgDACgCIAGgDIADgDIACgBIADAAIAEACQAGAFgFAGQgEAGgHAAQgEAAgDgCg");
	this.shape_55.setTransform(129.9,6.5,1.536,0.96);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3D3D3D").s().p("AgLATQgRgIABgNQAAgIAHgFQAEgEAHgCIADgBQAFgBADABQAQADAIARQAIAQgRAHQgGACgGAAQgHAAgJgEg");
	this.shape_56.setTransform(131.3,7.3,1.536,0.96);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_57.setTransform(562.7,39.9,1,1,-30);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_58.setTransform(737.2,45.1,1,1,-60);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3D3D3D").s().p("AAAAkQgqgMgpgQQgmgNAAgEQAAgHAbgOQAmgUA5AAQAsAAAqAmQAjAeAAANQAAAUgjAAQgfAAg4gPg");
	this.shape_59.setTransform(432.4,60.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_60.setTransform(296.8,12.9,1.536,0.96);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AgIAIQgDgCAAgDQAAgDACgCIAGgDIADgDIACgBIADAAIAEACQAGAFgFAGQgEAGgHAAQgEAAgDgCg");
	this.shape_61.setTransform(350.5,27.9,1.536,0.96);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3D3D3D").s().p("AgLATQgRgIABgNQAAgIAHgFQAEgEAHgCIADgBQAFgBADABQAQADAIARQAIAQgRAHQgGACgGAAQgHAAgJgEg");
	this.shape_62.setTransform(351.9,28.8,1.536,0.96);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgIAIQgDgCAAgDQAAgDACgCIAGgDIADgDIACgBIADAAIAEACQAGAFgFAGQgEAGgHAAQgEAAgDgCg");
	this.shape_63.setTransform(509.3,35.4,1.536,0.96);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3D3D3D").s().p("AgLATQgRgIABgNQAAgIAHgFQAEgEAHgCIADgBQAFgBADABQAQADAIARQAIAQgRAHQgGACgGAAQgHAAgJgEg");
	this.shape_64.setTransform(510.7,36.2,1.536,0.96);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgIAHQgEgDAAgEQAAgDAEgDQAEgDAEAAQAFAAAEADQADADAAADQAAAEgDADQgEADgFAAQgEAAgEgDg");
	this.shape_65.setTransform(668.6,24.8,1.536,0.96);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_66.setTransform(687.7,30.5,1.536,0.96,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgVAOQgKgGAAgIQAAgHAKgGQAJgGAMAAQANAAAJAGQAJAGAAAHQAAAIgJAGQgJAFgNAAQgMAAgJgFg");
	this.shape_67.setTransform(638.2,37.7,1.536,0.96);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3D3D3D").s().p("AgiAaQgOgLgBgPQABgOAOgLQAPgLATgBQAUABAPALQAOALAAAOQAAAPgOALQgPAMgUAAQgTAAgPgMg");
	this.shape_68.setTransform(638.8,38.6,1.536,0.96);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_69.setTransform(618.7,91.4,1.536,0.96);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_70.setTransform(579.1,14.5,1.536,0.96,15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3D3D3D").s().p("Ag5AlQAAgaAQgRQARgTAAgNIgCgMIAAgBQAGAIAcgCQArgCAKAKIgQAZQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgYAAgWAIQgwAPgIAng");
	this.shape_71.setTransform(191.5,8.2,1.536,0.96);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3D3D3D").s().p("Ag4AXQgXgKAAgNQAAgMAXgKQAYgJAgAAQAhAAAXAJQAYAKAAAMQAAANgYAKQgXAJghAAQggAAgYgJg");
	this.shape_72.setTransform(747.9,13.3,1.536,0.96);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("Eg7/Ax/MAAAhj+MB3+AAAMAAABj+g");
	this.shape_73.setTransform(384,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,640);


(lib.Rocks_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91F428").s().p("Ag1FAQATjVABkbIgBiPIBGAAIAJCNQAOEYgIDag");
	this.shape.setTransform(763.5,176.2,2.437,0.836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91F428").s().p("AhJLYQAblEABmUQAAlagSl7IAAgDIBHAAQAmGFAQFRQAUGVgMFFg");
	this.shape_1.setTransform(853.4,142.1,2.437,0.836);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],-31.7,115,39.2,-149.7).s().p("Ag4ElQAdklgLkkIBOAAQAaEkgOElg");
	this.shape_2.setTransform(-10,178.5,2.437,0.836);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],-37.1,143.6,29.9,-106.3).s().p("AgHKJQAakHgJkEQgKkRgvj/QgaiBggh0IApgBQAoB4AdB9QB8H0gcIog");
	this.shape_3.setTransform(42.7,148.8,2.437,0.836);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],6.5,-156,-4.8,116.4).s().p("AhpEPQAxkWBOkHIBUAAQhEEEgjEZg");
	this.shape_4.setTransform(-403.9,180.3,2.437,0.836);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],5.1,-120.6,-6.9,166.4).s().p("AkKLOQBnpvDon+QBEiWBXiYIArAAQhRCchACgQjQIHhFJYg");
	this.shape_5.setTransform(-308.8,143,2.437,0.836);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],4.8,-114.3,-6.5,158.1).s().p("AkLKrQBopQDnniQBFiQBYiTIArAAQhSCXhBCZQjPHphGI8g");
	this.shape_6.setTransform(544.9,145.9,2.437,0.836);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#163312").s().p("AhIItQAMjHAAldQAAj5gHkqIgBgSIBFAAIADARQAaEdASEFQAXFdABDJg");
	this.shape_7.setTransform(1255.2,156.5,2.437,0.836);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#163312").s().p("AhIGSQAMj0AAmpIgBiGIBlAAIAICFQAXGfABD/g");
	this.shape_8.setTransform(-252.4,169.4,2.437,0.836);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#163312").s().p("AhHKpQALj0ABmsQgBkxgIlsIAAgUIBGAAIABASQAaFgATE+QAXGqACD3g");
	this.shape_9.setTransform(-250.3,146.1,2.437,0.836);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#163312").s().p("AhHIsQAMjGgBleQAAj5gIkqIAAgQIBGAAIABAQQAaEcATEGQAXFcABDJg");
	this.shape_10.setTransform(1092.2,156.5,2.437,0.836);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163312").s().p("AhHKrQALj0AAmsQgBkygHlsIgBgXIBGAAIACAWQAdGIAPEWQAXGVACEMg");
	this.shape_11.setTransform(849.3,145.9,2.437,0.836);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],10.4,-206.7,-3.3,61.4).s().p("AhnJFQAElQA1mYQAZjEAkjcIBZgBQgcDqgPC8QghGYANFLg");
	this.shape_12.setTransform(-413.7,154.5,2.437,0.836);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],18.3,73.4,-51.8,-165.6).s().p("AijpjIgNjIIA/ABQAKBcAMBcQBbLACxKuIiMAwQiOq5g6rWg");
	this.shape_13.setTransform(-381.5,135.1,2.437,0.836);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],0.7,48.9,-0.2,-111.7).s().p("AhxH/QAYnRBvnFIAahkIBCgDIgUBtQhMHGANHKg");
	this.shape_14.setTransform(-342.8,160.3,2.437,0.836);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.5,75.5,-0.4,-239.2).s().p("AhgMfQAWsfBYsZIBTgFQg8MeALMfg");
	this.shape_15.setTransform(-331.2,136.2,2.437,0.836);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-226,0.1,65.2).s().p("AhJLgQAvq/gTr8IBMgEQA2L1gOLKg");
	this.shape_16.setTransform(-346.6,141.5,2.437,0.836);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.1,-199.4,0.5,64.9).s().p("AhWKbQgKpvBqqhIAGgiIBIgDIgFAvQhGKfAtJng");
	this.shape_17.setTransform(-369.1,147.2,2.437,0.836);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-5.5,94,30.5,-292.8).s().p("AhPPPQBGumgPv3IBLAAQAyPvglOug");
	this.shape_18.setTransform(-401.2,121.5,2.437,0.836);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.4,-236.2,0.5,74.5).s().p("AheMOQAMq8BisgIAIg9IBHgDIgGBLQg9MaAWK3g");
	this.shape_19.setTransform(-389.9,137.6,2.437,0.836);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#82DD2F","#7FD92E","#75CD2B","#65B926","#4F9E20","#367D18","#1F5C12"],[0,0.204,0.38,0.549,0.71,0.871,1],9.1,-182.7,-4.6,85.4).s().p("AiJMzQADlHA1miQAvlfBLmEIAgiaIBBAAIgZCfQg6GMgcFWQgfGeALFHg");
	this.shape_20.setTransform(219.5,134.5,2.437,0.836);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#82DD2F","#7DD72E","#70C72A","#5CAD24","#408A1B","#226113","#1F5C12"],[0,0.161,0.345,0.549,0.761,0.976,1],11.8,-186.8,-4.8,75.6).s().p("AixKoQAlkjBTmBQBCk2BcliIAEgQQAcgBAdgCIAQAAIgFAaQhLFxgwEoQg9GFgUEXg");
	this.shape_21.setTransform(-346,146.2,2.437,0.836);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#376816").s().p("AhVLuQAIkQAin4QAYlSAdmCIBLAAQgMFrgJFrQgKIEAFECg");
	this.shape_22.setTransform(1280.5,140.3,2.437,0.836);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#376816").s().p("AhUKqQAHj3AinLQAWkmAflrIBLAAQgNFhgHEyQgLG/AGEBg");
	this.shape_23.setTransform(1178.3,146,2.437,0.836);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#376816").s().p("AhUJYQAHjbAimTQAUjqAglXIBMAAQgOFcgHDnQgFDNgBBoQgCCtAECKg");
	this.shape_24.setTransform(973.8,152.9,2.437,0.836);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#376816").s().p("AhUKrQAEieAMjFQAIh1ARjrQAWkhAflxIBLAAQgOGLgHEKQgKHVAFDrg");
	this.shape_25.setTransform(636,145.9,2.437,0.836);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#376816").s().p("AhMGhQAIj3AinLIAKh/IBlAAIgECBQgKG/AFEBg");
	this.shape_26.setTransform(525.2,168.1,2.437,0.836);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-3.1,-176.9,0.9,44).s().p("Ai3HIQgVm4C5nXIDNAAQhsHaBbG1g");
	this.shape_27.setTransform(574,157.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-1.7,50.8,22.9,-213.8).s().p("AhOHMQAwm3AEngIBeAAQAWHXgYHAg");
	this.shape_28.setTransform(435.1,164.6,2.437,0.836);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-1.4,46.6,23.2,-218).s().p("AhOGhQAsmRAHmwIBiAAQARGngXGag");
	this.shape_29.setTransform(531.5,168.1,2.437,0.836);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-225.8,0.3,38.5).s().p("AhLGhQAHmTAwmuIBhAAQgYG3APGKg");
	this.shape_30.setTransform(570.2,168.1,2.437,0.836);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-225.8,0.3,38.5).s().p("AhLGhQAHmIAwm5IBgAAQgWGvAOGSg");
	this.shape_31.setTransform(509,168.1,2.437,0.836);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-25.2,-223.5,2.9,40.8).s().p("Ag+GhQgck4APlgQAEheAFhLIBjAAQgCBMABBfQAFFvAtEng");
	this.shape_32.setTransform(479.9,168.1,2.437,0.836);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-225.8,0.3,38.5).s().p("AhLGhQAHmIAwm5IBgAAQgWGvAOGSg");
	this.shape_33.setTransform(535.6,168.1,2.437,0.836);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],42.7,-165.9,-7.2,37.9).s().p("AhcGhQBHmhATmgIBgAAQAAGQgyGxg");
	this.shape_34.setTransform(489.7,168.1,2.437,0.836);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#376816").s().p("Ag5G6QAGiuAXk6QAKiIAVkDIA3ACQgJEIgDCDQgIEvAEC3g");
	this.shape_35.setTransform(-458,166,2.437,0.836);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#376816").s().p("Ag4GzQAEiiAYlGQAKh+ATj9IA4gDQgHDXgECpQgIEvAFC3g");
	this.shape_36.setTransform(-339.5,166.6,2.437,0.836);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#376816").s().p("Ag4GoQAEiiAYlGIAclnIA5AAQgGCggFDJQgHEvAEC3g");
	this.shape_37.setTransform(-298.6,167.5,2.437,0.836);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#376816").s().p("Ag3GQQAEijAZlFIAZk3IA5AAIgJE5QgHFEAECig");
	this.shape_38.setTransform(-109.2,169.6,2.437,0.836);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#376816").s().p("Ag4GUQAGijAYlFIAZk/IA5AAIgJFBQgHFEAECig");
	this.shape_39.setTransform(-68.3,169.2,2.437,0.836);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#376816").s().p("Ag3GCQAGivAWk5IAXkbIA8AAQgGCegCB/QgIFEAECig");
	this.shape_40.setTransform(2.7,170.7,2.437,0.836);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#376816").s().p("Ag3GDQAFijAXlGIAYkcIA7ABQgGCegCB/QgIEvAEC4g");
	this.shape_41.setTransform(265.6,170.7,2.437,0.836);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#376816").s().p("Ag3GHQAFijAYlGIAXkkIA7AAIgJEmQgHFEAECjg");
	this.shape_42.setTransform(302.2,170.3,2.437,0.836);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#376816").s().p("Ag4GQQAGi5AXkvIAZk3IA7AAIgKE5QgHFEADCig");
	this.shape_43.setTransform(718.2,169.6,2.437,0.836);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#376816").s().p("Ag3GQQAEijAYlFIAak3IA5AAQgFCegECbQgHEuAEC4g");
	this.shape_44.setTransform(782.8,169.6,2.437,0.836);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#376816").s().p("Ag4GSQAFijAYlFIAak7IA6AAQgGCNgECwQgHE6ADCsg");
	this.shape_45.setTransform(1111,169.4,2.437,0.836);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#376816").s().p("Ag4GoQAFijAYlFQAMigAPjHIA5AAIgLFpQgHFEAECig");
	this.shape_46.setTransform(1078.7,167.5,2.437,0.836);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#376816").s().p("Ag6HPQAGiuAXk6QATj2APjAIA2AAQgKEBgEC3QgHFEADCig");
	this.shape_47.setTransform(943.4,164.3,2.437,0.836);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#376816").s().p("Ag6HjQAFi5AYkwQAPjJAWkTIAzAAQgJDxgGDtQgHFEAECjg");
	this.shape_48.setTransform(881,162.7,2.437,0.836);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#376816").s().p("AhUJ3QAHjlAimpQAWkOAflRQAHABAHAAIA9AAQgOFzgGDtQgLGpAGDjg");
	this.shape_49.setTransform(908.7,150.2,2.437,0.836);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#376816").s().p("AhVLfQAFipAMjSQAIh+ARj7QATkVAim0IBLAAQgNGNgIE/QgKH2AFD7g");
	this.shape_50.setTransform(253.8,141.6,2.437,0.836);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#376816").s().p("AgyFoQAGidAUkXIAYkbIAzADIgJEZQgGEiADCRg");
	this.shape_51.setTransform(-470.8,172.9,2.437,0.836);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#376816").s().p("AhUOdQAHlSAjpxQATllAhoRIBLALQgNHogHGGQgLJyAGFOg");
	this.shape_52.setTransform(84.7,125.7,2.437,0.836);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#376816").s().p("AhVOAQAIlCAipXQAVl0AhnzIBKABQgNHjgIGFQgFEygBCZQgCEAADDMg");
	this.shape_53.setTransform(-155.2,128.1,2.437,0.836);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.3,-219.2,0.4,68.3).s().p("Ah/LlQAElJAzmIQAplIBMl6IAMg2IBHAAIgLBFQg4FsgbFTQgdGBAMFEg");
	this.shape_54.setTransform(997.9,141.1,2.437,0.836);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.2,64.4,-0.4,-199.9).s().p("AhgKpQAVqlBcqsIBQAAQg9KuAMKjg");
	this.shape_55.setTransform(983.4,146.1,2.437,0.836);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-2,-269.1,0.1,80.1).s().p("AhJOGQAwtngVukIBLAAQA4OlgONmg");
	this.shape_56.setTransform(1321.3,127.6,2.437,0.836);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.7,-229.1,0.1,59.9).s().p("AhJKqQAsqXgOq8IBQAAQAvK+gNKVg");
	this.shape_57.setTransform(1244.3,146,2.437,0.836);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.3,-186.6,0.1,55.4).s().p("AhJJwQAwpbgVqEIBLAAQA4KFgOJag");
	this.shape_58.setTransform(967.8,150.9,2.437,0.836);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.3,-223.8,0.5,74.9).s().p("AhXMCQgKrBBqr4IALhKIBFAAIgIBVQhFL5AtK1g");
	this.shape_59.setTransform(1109.6,138.6,2.437,0.836);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.2,-215.7,0.5,72.1).s().p("AhXLmQgKqoBqrcIALhHIBFAAIgIBRQhFLdAtKdg");
	this.shape_60.setTransform(945.5,141,2.437,0.836);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-3.7,64.5,18.1,-169.6).s().p("AhOJbQBHoxgYprIgCgZIAUAAQAKADAKAAIAeAAIACATQA+JggjI/g");
	this.shape_61.setTransform(912.8,152.6,2.437,0.836);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#82DD2F","#7ED82E","#72C92A","#5FB225","#46911D","#296B15","#1F5C12"],[0,0.169,0.353,0.541,0.737,0.933,1],-1.3,-217.1,0.3,47.2).s().p("AhcH6QAzk3AamOQAKioAEiGIBcAAQADCugCCEQgEFzglFOg");
	this.shape_62.setTransform(1332.2,160.7,2.437,0.836);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-0.9,-167,0.4,54.4).s().p("AhfI7QAMnzBio6IANhHIBEgBIgJBPQg9I2AXHwg");
	this.shape_63.setTransform(956.4,155.3,2.437,0.836);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-199.3,0.4,65.1).s().p("AhgKqQAMpUBjqoIANhXIBFAAIgKBgQg8KqAWJJg");
	this.shape_64.setTransform(1173.8,146,2.437,0.836);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-220,0.5,71.9).s().p("AhWLzQAMqTBirwIALhiIA0AAQABA0gEA2Qg0KCAaL5g");
	this.shape_65.setTransform(1334.6,139.9,2.437,0.836);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],-20.8,-194.1,7,66.9).s().p("Ag+KqQgckwAOlqQAOk3AvlaIAGgoIBFAAIgEAwQgcFYAEEzQAFFsAsEsg");
	this.shape_66.setTransform(1302.9,146,2.437,0.836);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#82DD2F","#76CE2C","#58A922","#2D7016","#1F5C12"],[0,0.161,0.459,0.863,1],9.4,-215.6,-1.2,76.3).s().p("AhOKqQAGqQBMrDIBLAAQgpLHAcKMg");
	this.shape_67.setTransform(1277.3,146,2.437,0.836);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],3.7,-218.2,-0.3,63.2).s().p("AhPJNQAplSAHmTQAEjagHjZIBWgBQASDjAGDQQANGHgZFfg");
	this.shape_68.setTransform(1053.7,153.8,2.437,0.836);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-7,-239.1,1.1,60.1).s().p("AhVJUQBMo+gNpoIBbgBQAoJigzJFg");
	this.shape_69.setTransform(1002.6,153.2,2.437,0.836);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],4.7,-264.7,-0.4,91.9).s().p("AhPNhQAomqAIoCQAFl7gQmaIBNAAQAfGTAKGBQANHwgZG9g");
	this.shape_70.setTransform(1228.2,130.7,2.437,0.836);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-7.7,-252.9,1.2,75.3).s().p("AhVLsQBVrQgbsHIBTAAQA8MAg6LXg");
	this.shape_71.setTransform(1202,140.4,2.437,0.836);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.3,-157.5,1,73.2).s().p("Ag2KGQgZkDgHlWQgFkZAIk8IAChdIBEAAIADBcQAKFDAVEPQAeFyAmDrg");
	this.shape_72.setTransform(1176.6,149,2.437,0.836);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-5.1,-261.4,0.5,71.4).s().p("AhELSQAgrbgnrIIBVAAQBDLFgBLeg");
	this.shape_73.setTransform(1158.2,142.7,2.437,0.836);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-254.9,0.5,79.5).s().p("AiANfQAGmJAym+QArmIBLmuIAMhAIBHAAIgMBSQg4GsgbGHQgdG9ALF7g");
	this.shape_74.setTransform(1149,130.9,2.437,0.836);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.2,64.5,-0.4,-199.9).s().p("AhgKqQAVqrBcqoIBQAAQg9KoALKrg");
	this.shape_75.setTransform(1134.5,146,2.437,0.836);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-203.7,0.1,60.6).s().p("AhJKqQAvqLgUrIIBLAAQA4LEgOKPg");
	this.shape_76.setTransform(1118.9,146,2.437,0.836);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.1,-198,0.5,66.4).s().p("AhXKqQgKpuBpqjIAMhCIBFAAIgIBMQhFKkAsJjg");
	this.shape_77.setTransform(1096.7,146,2.437,0.836);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-3.2,75.8,37.8,-364.6).s().p("AhPMcQAyr9AGs6IBfAAQATMsgbMLg");
	this.shape_78.setTransform(1266.9,136.5,2.437,0.836);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-220.1,0.3,44.3).s().p("AhPHaQAKnEA7nvIBaAAQgfHrAQHIg");
	this.shape_79.setTransform(1244.8,163.3,2.437,0.836);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-24.5,-217.9,3.6,46.5).s().p("Ag+HaQgck3APlhQAFiCANiZIBcAAQgECOABCPQAFFvAtEng");
	this.shape_80.setTransform(1215,163.3,2.437,0.836);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],47,-182.8,-9.7,48.9).s().p("AhjHaQBOnVAOneIBpAAQAMHBg2Hyg");
	this.shape_81.setTransform(1218.8,163.3,2.437,0.836);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-220,0.3,44.3).s().p("AhPHbQAJnDA8nyIBaAAQgfH2AQG/g");
	this.shape_82.setTransform(1274.5,163.3,2.437,0.836);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-4.3,77.3,24.5,-232.2).s().p("AhPMfQBIr7gStBIBKgBQA1MzgmMKg");
	this.shape_83.setTransform(1064.3,136.2,2.437,0.836);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.5,-265.2,0.4,54.6).s().p("AhPJJQAJoyA9pgIBZAAQghJhASIxg");
	this.shape_84.setTransform(704.1,154.1,2.437,0.836);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-24.4,-217,3.7,47.3).s().p("Ag+HkQgckxAOlnQAHiTAOicIBbAAQgGCeACCSQAFFqAsEtg");
	this.shape_85.setTransform(674.1,162.6,2.437,0.836);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],52.2,-203.9,-11.3,55.7).s().p("AhjIhQBQoYAMopIBpAAQANIHg3I6g");
	this.shape_86.setTransform(678,157.5,2.437,0.836);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-199.4,0.4,64.9).s().p("AhfKpQAMpTBiqpIANhVIBEAAIgJBeQg9KkAXJPg");
	this.shape_87.setTransform(1046.3,146,2.437,0.836);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-21.1,-197.6,7,66.7).s().p("Ag+KpQgckwAOlqQAOk3AvlaIAGgmIBFAAIgEAuQgcFXAEE0QAFFrAsEtg");
	this.shape_88.setTransform(1012.4,146.1,2.437,0.836);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.4,-209.8,0.3,68.2).s().p("AhcLOQAylAAbmqQASlJgCloIBMAAQATFugEFHQgFGLglFbg");
	this.shape_89.setTransform(810.5,143,2.437,0.836);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.5,-252.1,0.5,82.3).s().p("AhfNgQALr0BjtbIAOhwIAcAAQAKAEAMAAIARAAIgJB3Qg9NcAWLog");
	this.shape_90.setTransform(895.2,130.8,2.437,0.836);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-21.1,-197.4,7,66.9).s().p("Ag+KrQgck4APliQANk4AwlaIAFgpIBFAAIgEAxQgcFXAEE0QAEFpAtEwg");
	this.shape_91.setTransform(861.3,145.9,2.437,0.836);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],9.4,-215.6,-1.2,76.3).s().p("AhOKrQAGqUBMrBIBLAAQgpLGAcKPg");
	this.shape_92.setTransform(835.8,145.9,2.437,0.836);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],3.7,-213.7,-0.3,67.6).s().p("AhPJ5QAolQAImVQAEj4gKkUQAHABAIAAIBCAAQAYEOAID8QANGJgZFdg");
	this.shape_93.setTransform(920.3,150.1,2.437,0.836);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-7,-234.4,1.1,64.8).s().p("AhVKDQBSpogVqdIBWAAQAzKOg3J3g");
	this.shape_94.setTransform(805.8,149.3,2.437,0.836);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-2.8,-174.7,1.2,62.9).s().p("Ag5J6QAnp6hCpmIgCgTIBJAAIABAJQBlJkgCKGg");
	this.shape_95.setTransform(847.5,150,2.437,0.836);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.5,-261.7,0.4,55.9).s().p("AhQJVQAJo6BBpvIBXAAQgjJ1ASI0g");
	this.shape_96.setTransform(919.5,153.1,2.437,0.836);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],37.9,-145.4,-12,58.4).s().p("AhdJ6QA2k1AZlCQAXlLgJkxIBLAAQAxI/hQK0g");
	this.shape_97.setTransform(877.2,150,2.437,0.836);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-204.1,0.4,60.2).s().p("AhbJ6QALpQBiqjIBKAAQg9KiAWJRg");
	this.shape_98.setTransform(861.8,150,2.437,0.836);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],3.2,-182.6,-0.3,63.4).s().p("AhPJVQApkoAHlgQAFkGgQkbIBNAAQAgEgAJEBQANFVgZEzg");
	this.shape_99.setTransform(786.6,153.1,2.437,0.836);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-7,-230.4,1.1,68.8).s().p("AhWKrQBWqQgbrFIBTAAQA8K8g6KZg");
	this.shape_100.setTransform(760.5,145.9,2.437,0.836);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.8,-208,0.9,35.2).s().p("Ag4EGQgWjsgHkfIBxAAQAcE+AeDNg");
	this.shape_101.setTransform(233.6,181.1,2.437,0.836);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-3.9,-201.2,0.1,36.4).s().p("AhIFwQAXlygNluIBlABQAjFvgCFwg");
	this.shape_102.setTransform(384,172.2,2.437,0.836);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.3,-219.5,0.3,44.8).s().p("AhkH1QAGk1AxlhQAXifAfi0IBcAAQgYC0gPCrQgdFeALEsg");
	this.shape_103.setTransform(263.2,161.1,2.437,0.836);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.3,-220.9,0.3,43.5).s().p("AhiHnQAGk0AxlhQAXidAaibIBdAAQgXC0gMCQQgdFdALEsg");
	this.shape_104.setTransform(372.6,162.3,2.437,0.836);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.4,41,-0.2,-223.3).s().p("AhPG/QANm6AtnDIBmAAQgZHLAJGyg");
	this.shape_105.setTransform(352.7,165.6,2.437,0.836);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],42.1,-163,-7.7,40.8).s().p("AhcG/QBNm8APnBIAmAAQAOAGAQAAIAZAAQAFGkg1HTg");
	this.shape_106.setTransform(407.4,165.6,2.437,0.836);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-222.8,0.3,41.6).s().p("AhNG/QAImlA2nYIBdAAQgcHUARGpg");
	this.shape_107.setTransform(388.7,165.6,2.437,0.836);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.6,-194.8,1.1,48.4).s().p("Ag2GKQgZkRgHlnQgChNAAhOIBjAAQAEBMAGBKQAeGGAmD3g");
	this.shape_108.setTransform(15.4,170,2.437,0.836);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-3,-183.3,1.4,73.2).s().p("AgzLhQAnqyhCqSQgEgngKhWIBDAAIATByQBlKWgCK5g");
	this.shape_109.setTransform(712.5,141.4,2.437,0.836);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#82DD2F","#1F5C12"],[0,1],1,53.2,-0.4,-169.9).s().p("AgPJAQALj9gdkpQgbkEg4keIgMg3IBHAAIAMArQBKEdAtEHQAxEsAGEEg");
	this.shape_110.setTransform(537.8,154.8,2.437,0.836);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1,-164.3,0.3,51.4).s().p("AiAItQAFj2AyknQArj3BLkaIANgrIBHAAIgMA2Qg4EQgbEAQgeEfAMD0g");
	this.shape_111.setTransform(707.5,156.5,2.437,0.836);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.5,81.6,-0.5,-252.7).s().p("AhhNgQAWtfBctgIBQAAQg9NjAMNcg");
	this.shape_112.setTransform(693,130.8,2.437,0.836);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-220.2,0.1,65.5).s().p("AhJLiQAvrBgUsCIBKAAQA5L7gOLIg");
	this.shape_113.setTransform(673.4,141.3,2.437,0.836);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.1,-197.9,0.5,66.5).s().p("AhXKrQgKpwBqqhIALhEIBFAAIgIBOQhFKhAtJmg");
	this.shape_114.setTransform(655.2,145.9,2.437,0.836);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-3,61,19.7,-182.8).s().p("AhPJ0QBIpYgSqPIBKAAQA1KHglJgg");
	this.shape_115.setTransform(622.7,150.5,2.437,0.836);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.3,-190.2,0.2,61.9).s().p("AhcKLQAzkpAal7QASkqgClHIBLAAQAUFIgEEtQgFFlglE7g");
	this.shape_116.setTransform(571.5,148.6,2.437,0.836);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-227.2,0.3,73.9).s().p("AhcMKQAylaAbnOQASlkgCmHIBMAAQATGMgEFjQgFGsglF4g");
	this.shape_117.setTransform(520.1,138,2.437,0.836);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.4,-237.4,0.5,77.3).s().p("AhgMrQAMrIBjsnIANhmIBEAAIgJBwQg8MsAWK5g");
	this.shape_118.setTransform(921.9,135.2,2.437,0.836);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.7,-288.9,0.5,73.5).s().p("AhVMLQAKrfBQs2IBRAAQgwM8AVLZg");
	this.shape_119.setTransform(797.9,137.9,2.437,0.836);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.7,-287.9,0.5,76.8).s().p("AhXMtQALr6BVtfIBPAAQg0NbAVL+g");
	this.shape_120.setTransform(602.7,135.1,2.437,0.836);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-21.1,-197.4,7,66.9).s().p("Ag+KrQgck4APliQANk4AwlaIAFgpIBFAAIgEAxQgcFXAEE0QAEFpAtEwg");
	this.shape_121.setTransform(570.8,145.9,2.437,0.836);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],12.8,-292.4,-1.5,103.6).s().p("AhPOfQAHuABMu9IBMAAQgqPEAbN5g");
	this.shape_122.setTransform(545.3,125.5,2.437,0.836);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],4.7,-265.5,-0.4,92.2).s().p("AhPNkQApmuAHoBQAFl9gQmbIBNAAQAgGiAJF1QANHzgZG9g");
	this.shape_123.setTransform(496.2,130.4,2.437,0.836);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-7.9,-259.3,1.2,77.3).s().p("AhVMAQBVrigbsdIBTAAQA8MTg6Lsg");
	this.shape_124.setTransform(470.1,138.8,2.437,0.836);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-5,-182.3,1.2,82.6).s().p("Ag2LYQgZkqgHmJQgFlDAIlrIAChOIBFAAIACBNQAKF0AVE2QAeGqAmEOg");
	this.shape_125.setTransform(-9,142.1,2.437,0.836);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-217.2,0.1,47.2).s().p("AhJIkQAmoUgGoxQArgCAuAAQAiIwgLIXg");
	this.shape_126.setTransform(-204,157.2,2.437,0.836);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-216.9,0.1,47.4).s().p("AhJImQAmoWgGo1IBZABQAiIygLIYg");
	this.shape_127.setTransform(-74.7,157.1,2.437,0.836);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-252.3,0.3,65.3).s().p("AhcK1QAyluAbnmQANj9ACkYIBWAAQAJENgDENQgFHCglGNg");
	this.shape_128.setTransform(-13.5,145.1,2.437,0.836);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],-23.8,-222.3,7.6,73.2).s().p("Ag+LsQgcldAPmLQANldAwmDIACgPIBGAAIgCAYQgcF+AEFaQAFGeAtFJg");
	this.shape_129.setTransform(31.3,140.4,2.437,0.836);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],9.5,-217,-1.1,74.9).s().p("AhOKdQAHqFBJqzIBNgBQgnK4AaKBg");
	this.shape_130.setTransform(5.6,147.1,2.437,0.836);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],3.5,-199.2,-0.3,66).s().p("AhPJsQApk/AHl8QAFkGgNkWIBPAAQAcEZAIEDQANFxgZFKg");
	this.shape_131.setTransform(-43.4,151.2,2.437,0.836);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#163312").s().p("AhIKdQANkIgBmWQgBkegGl8IBHgBQAbFnAREzQAXGfACEAg");
	this.shape_132.setTransform(22.2,147.1,2.437,0.836);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-3.7,-149.8,0.9,50).s().p("Ag2GpQgZjggHkmQgDiLACiuQAOgGAJgMIA/AAQAHCjAPCkQAeE+AmDMg");
	this.shape_133.setTransform(149.7,167.4,2.437,0.836);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.6,-193.9,1.1,49.3).s().p("Ag2GTQgZkRgHlnIgCitIBiAAIAMCoQAcF6AnEDg");
	this.shape_134.setTransform(193.9,169.3,2.437,0.836);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-3.5,-186.2,0.5,51.4).s().p("AhEIGQAgoIgnoEIBUABQBFH9gCIOg");
	this.shape_135.setTransform(214.2,159.7,2.437,0.836);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-220.1,0.1,44.2).s().p("AhJIGQAlnzgEoZIBbABQAfITgLH4g");
	this.shape_136.setTransform(208.3,159.7,2.437,0.836);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-259.7,0.3,46.6).s().p("AhcH5QAzlfAanWIAJi8IBjAAIgBDAQgFGygkF/g");
	this.shape_137.setTransform(142.9,160.8,2.437,0.836);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-215.7,0.3,48.7).s().p("AhSIGQALnsBFofIBVAAQgnImASHlg");
	this.shape_138.setTransform(220.4,159.7,2.437,0.836);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],-25.5,-228.8,4.6,54.4).s().p("Ag+IsQgclOAPl6QAHi1ATjaIBXAAQgJDWADC7QAEGBAtFFg");
	this.shape_139.setTransform(189.9,156.5,2.437,0.836);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],10.1,-231.9,-0.5,60).s().p("AhHIHQAEn9AwoQIBaABQgTIZAUHzg");
	this.shape_140.setTransform(162.7,159.7,2.437,0.836);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#163312").s().p("AhHIGQAMkHgBmWQAAh6gDj1IBYAAIAWFuQAYGfACD/g");
	this.shape_141.setTransform(180.8,159.7,2.437,0.836);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.6,-165.6,1.1,77.6).s().p("Ag2KuQgakUgGlmQgFkjAIlTIADhrIBDAAIADBrQAKFVAVEcQAeGIAmD3g");
	this.shape_142.setTransform(361.6,145.6,2.437,0.836);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.6,-177.1,1.1,66.1).s().p("Ag2I7QgZkRgHlnQgEjYAEklIBRAAQAID9ASD7QAeGGAmD3g");
	this.shape_143.setTransform(405.9,155.3,2.437,0.836);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-3,-184.1,1.4,74.1).s().p("AgzLqQAoq3hDqWIgOiGIBCAAIAVB7QBlKZgDK/g");
	this.shape_144.setTransform(422,140.7,2.437,0.836);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],29.5,-115.2,-14,62.7).s().p("AhRKqQAwkSAWkhQAUkmgIkPQgChsgKh/IAwAAQARBzAKB0QAuH9hIJvg");
	this.shape_145.setTransform(1183.7,146,2.437,0.836);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],42.1,-163.3,-14.6,68.4).s().p("AhkKpQA4lLAXlaQAWlkgLlIIBTAAQA+JshPLlg");
	this.shape_146.setTransform(1016.3,146.1,2.437,0.836);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],39.5,-152.7,-14.5,68.2).s().p("AhdLmQA3lWAZlkQAXlugKlRIgBhSIBDAAIAHBNQA1J6hSMEg");
	this.shape_147.setTransform(871,141,2.437,0.836);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],47.1,-183.9,-17.9,81.9).s().p("AhdOAQA3mcAZmvQAXm7gKmWIgBhjIBDAAIAHBdQA1L+hSOkg");
	this.shape_148.setTransform(743.6,128.1,2.437,0.836);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],36.6,-140.8,-13.3,63).s().p("AhdKrQA3k7AYlIQAYlRgKk1IgBhMIBCAAIAIBHQA0JLhRLDg");
	this.shape_149.setTransform(639.9,145.9,2.437,0.836);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],40.3,-156.3,-15,69.7).s().p("AhdL3QA3leAZlsQAXl4gKlXIgBhUIBDAAIAHBOQA1KKhSMVg");
	this.shape_150.setTransform(586.6,139.6,2.437,0.836);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#82DD2F","#1F5C12"],[0,1],20.8,61,-64.9,-194.7).s().p("AguKrQglk0gEkjQgDk8AmkWQAMhVAPhXIA8AAQgKBUgHBfQgSEbARE4QATEwA0Efg");
	this.shape_151.setTransform(465.5,145.9,2.437,0.836);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-199.2,0.4,65.1).s().p("AhgKrQAMpUBjqoIANhZIBFAAIgKBhQg8KqAVJKg");
	this.shape_152.setTransform(729.3,145.9,2.437,0.836);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.4,-237.3,0.5,77.4).s().p("AhgMsQANrJBisnIANhmIBFgBIgKBxQg8MtAVK5g");
	this.shape_153.setTransform(1076,135.2,2.437,0.836);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.2,-202,0.4,62.3).s().p("Ah/KkQAGk3AylhQArk1BLlTIAIgjIApACQARABAPgHIgKA0Qg4FTgbE0QgdFgALEsg");
	this.shape_154.setTransform(96.7,146.5,2.437,0.836);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.1,64.5,-0.3,-172.6).s().p("AhnKnQAXqnBvqlIABgBIBIAIIAAACQhMKfANKkg");
	this.shape_155.setTransform(78.1,146.3,2.437,0.836);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-212.3,0.1,63.7).s().p("AhJLMQAwq0gVrjIAhAAQANAHAPAAIANAAQA5LggOKwg");
	this.shape_156.setTransform(420.4,143.1,2.437,0.836);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-194.9,0.1,69.5).s().p("AhJMCQAyq5gZrfIgEhrIBBAAIAKBmQA/LlgPK4g");
	this.shape_157.setTransform(345.5,138.6,2.437,0.836);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-214.5,0.1,64.3).s().p("AhJLTQAwq7gVrqQAmACAkAFQA5LogOK2g");
	this.shape_158.setTransform(66.9,142.6,2.437,0.836);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.1,-196.4,0.4,54.2).s().p("AhOIvQgJocBXpBIBPAHQg2JCApIUg");
	this.shape_159.setTransform(58.2,156.3,2.437,0.836);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-3.7,69.7,22.1,-207.4).s().p("AhPLPQBIqogSr1IBJgBQA3LpgnK1g");
	this.shape_160.setTransform(12.2,142.9,2.437,0.836);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.7,-258.8,0.3,69.2).s().p("AhcLfQAyl6Abn2QAPkmABknIBUAAQAKEugDEjQgFHaglGSg");
	this.shape_161.setTransform(357.1,141.6,2.437,0.836);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.5,-251.6,0.5,82.8).s().p("AhgNlQALrzBjtcIAPh6IBEABIgKCEQg9NXAWLtg");
	this.shape_162.setTransform(273,130.4,2.437,0.836);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.6,-265.2,0.6,86.5).s().p("AhgOMQALsZBkuJIANh2IBFAAIgKCCQg9OBAWMVg");
	this.shape_163.setTransform(435.9,127.1,2.437,0.836);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],-26.3,-239.9,6.3,66.8).s().p("Ag+KrQgclpAPmZQAJkUAhk/IBPAAQgRE9ADEYQAEGgAtFgg");
	this.shape_164.setTransform(516.5,145.9,2.437,0.836);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],-21,-197.1,7.1,67.2).s().p("Ag+KuQgck4APliQANk4AwlZIAHgwIBEAAIgFA3QgbFYADEzQAFFxAtEog");
	this.shape_165.setTransform(401.9,145.7,2.437,0.836);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],7.7,-180.3,-1.1,64.3).s().p("AhPI+QAHotBNpOIBLAAQgqJZAbIig");
	this.shape_166.setTransform(376.5,155,2.437,0.836);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],3.8,-227,-0.3,59).s().p("AhPIjQAplYAHmZQADiXgEiyQAaACAXABQAZAAARgOQAMC3AFCcQANGOgZFkg");
	this.shape_167.setTransform(116.1,157.3,2.437,0.836);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-7,-252.8,1.1,46.4).s().p("AhVHMQA7m+AFnZIBoANQAOHPgnG7g");
	this.shape_168.setTransform(78.2,164.6,2.437,0.836);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.6,-179.2,1.1,64.4).s().p("Ag2IqQgZkSgHlnQgEjtAEjtQAiACAwAFQAKEAAPDOQAeGGAmD4g");
	this.shape_169.setTransform(70.5,156.7,2.437,0.836);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],33.3,-127.4,-10.2,50.4).s().p("AhRImQAvkLAWkZQAUkdgGkKIBCAIQAnHxhEJSg");
	this.shape_170.setTransform(71.5,157,2.437,0.836);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],4.6,-264.2,-0.5,90.5).s().p("AhPNUQAompAIn+QAFlsgPmUIBNABQAeGCAKF8QAMHxgYG3g");
	this.shape_171.setTransform(327.3,131.8,2.437,0.836);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-6.2,-204.1,1,61.3).s().p("AhVJhQBWpLgdp2IBTAAQA9Jvg6JSg");
	this.shape_172.setTransform(301.1,152.1,2.437,0.836);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.5,-165.9,1.1,77.7).s().p("Ag2KvQgakdgGleQgFkQAIloIADhqIBDAAIADBqQAKFWAVEdQAeF/AmEBg");
	this.shape_173.setTransform(281.6,145.6,2.437,0.836);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-2.7,-169.3,1.3,68.2).s().p("AgyKvQAmqBhCpfIgOh9IBCAAIAVBzQBlJkgDKGg");
	this.shape_174.setTransform(253,145.6,2.437,0.836);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.2,-200.9,0.4,63.4).s().p("AiBKvQAGk1AxljQAtk3BKlSIAOg8IBGAAIgMBKQg7FbgZEsQgdFZALEzg");
	this.shape_175.setTransform(248.3,145.6,2.437,0.836);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],0.9,65.8,-0.4,-144.9).s().p("AhzKvQAXphBvpTIAiipIA/AAIgZCwQhMJUANJZg");
	this.shape_176.setTransform(222.4,145.6,2.437,0.836);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.2,69.4,-0.4,-194.9).s().p("AhlLbQAYriBnrTIBMAAQhHLdAMLYg");
	this.shape_177.setTransform(221.8,141.9,2.437,0.836);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-219.4,0.1,66).s().p("AhJLmQAwrFgVsGIBKAAQA5L9gOLOg");
	this.shape_178.setTransform(218,141,2.437,0.836);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.1,-197.5,0.5,66.9).s().p("AhYKvQgKpvBqqhIANhNIBFAAIgJBXQhGKfAtJng");
	this.shape_179.setTransform(195.9,145.6,2.437,0.836);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-3.9,73,23,-216.8).s().p("AhPLxQBIrRgSsQIBJAAQA2MGgmLbg");
	this.shape_180.setTransform(163.4,140,2.437,0.836);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.1,-190,0.5,74.4).s().p("AhpMHQALpUBjqoQARh0AbidIA5AAQgPCBgOCZQg9KiAWJRg");
	this.shape_181.setTransform(-134.4,138.2,2.437,0.836);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-0.9,-162.2,0.4,53.5).s().p("AhgIxQALnnBjoqIAPhQIBEAAIgKBXQg9ImAWHkg");
	this.shape_182.setTransform(145.6,156.1,2.437,0.836);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-23.5,-211.2,4.6,53).s().p("Ag8KjQgflUALmGQAJkhAilKQArAEAgABIABAAQgRFDAGEmQAIGQAwFHg");
	this.shape_183.setTransform(111,146.6,2.437,0.836);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.5,-216.2,0.2,70.9).s().p("AhcLqQAylKAbm4QASlYgCl5IBLAAQAUF5gEFcQgFGXglFng");
	this.shape_184.setTransform(-90.4,140.7,2.437,0.836);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.1,-198.9,0.5,65.5).s().p("AhgKuQAMpTBiqpIAPhfIBEAAIgKBoQg9KqAWJJg");
	this.shape_185.setTransform(-5.6,145.6,2.437,0.836);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-26.6,-249.1,8.9,84.8).s().p("Ag+NkQgcmAAOnKQAOmKAvm2IAHg+IBFABIgFBHQgcGxAEGHQAFHMAsF8g");
	this.shape_186.setTransform(-39.7,130.4,2.437,0.836);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],8.9,-209,-1.7,85.4).s().p("AhUMFQAHquBRrkIAOh3IBDABIgJB9QgsLeAcKtg");
	this.shape_187.setTransform(-63.9,138.4,2.437,0.836);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],4.3,-239.3,-0.4,83.8).s().p("AhPMVQAomDAInQQAFligQl0IBMAAQAgF3AKFeQANHCgZGSg");
	this.shape_188.setTransform(-114.3,137,2.437,0.836);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],-6.4,-205.3,1,69.2).s().p("AhVKvQBeqTgrrLIBOABQBOLAhAKdg");
	this.shape_189.setTransform(-140.4,145.5,2.437,0.836);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-4.8,-182.9,1.1,71.4).s().p("Ag2JsQgZkdgHl4QgEkLAFk3IBOAAQAJE6ATEDQAeGXAmEDg");
	this.shape_190.setTransform(-159.9,151.2,2.437,0.836);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-2.7,-169.1,1.3,68.5).s().p("AgyKxQAnp/hCphIgQiAIBDgBQAMA/AJA4QBkJegBKMg");
	this.shape_191.setTransform(-188.6,145.4,2.437,0.836);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#82DD2F","#1F5C12"],[0,1],1.2,62.1,-0.4,-202.2).s().p("AgRKiQALksgdlgQgak0g5lTIgIgvIBIgBIAIAjQBKFTAsE1QAyFhAFE3g");
	this.shape_192.setTransform(-362.7,146.7,2.437,0.836);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-0.9,-163.8,0.4,51.9).s().p("AiBIyQAFj8AykhQArj3BLkaIAPg0IBHgBIgOBAQg4EQgbEAQgdEeALD1g");
	this.shape_193.setTransform(-236.6,156,2.437,0.836);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.6,-269.3,0.5,69.2).s().p("AhxL4QAGmKAxnGQAklFA3laIBRABQgsFsgVFCQgeG3AMGJg");
	this.shape_194.setTransform(-191.1,139.5,2.437,0.836);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#82DD2F","#78D12C","#60B325","#3B841A","#1F5C12"],[0,0.149,0.404,0.737,1],1.3,65.1,-0.4,-202.8).s().p("AhgKxQAVqxBbqwIA+AAQAMADAHAAQg9KvAMKvg");
	this.shape_195.setTransform(-208,145.4,2.437,0.836);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-2,-265.3,0.1,80).s().p("AhJODQAvtSgUujQANgEAKgKIAygDQA6OmgONgg");
	this.shape_196.setTransform(-223.6,127.8,2.437,0.836);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#82DD2F","#7ED82E","#74CC2B","#63B726","#4D9B1F","#327817","#1F5C12"],[0,0.192,0.373,0.545,0.714,0.882,1],-1.1,-197.4,0.5,67).s().p("AhYKwQgKpuBqqiIALhBIAGAAQAYAAARgNIAYgBIgKBZQhFKjAtJjg");
	this.shape_197.setTransform(-245.6,145.5,2.437,0.836);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#82DD2F","#71C92A","#4A971E","#1F5C12"],[0,0.192,0.573,1],-4,74.2,23.7,-223.5).s().p("AhPL/QBIrbgSsiIBKAAQA1MSgmLrg");
	this.shape_198.setTransform(-278.2,138.9,2.437,0.836);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-1.3,-208.7,0.3,55.6).s().p("AhcJOQA0k4AZmNQAPjqABjqIBVgCQAJD3gDDjQgFF7gkFGg");
	this.shape_199.setTransform(-398.1,153.7,2.437,0.836);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-198.9,0.4,65.5).s().p("AhgKuQAMpTBiqpIAPhfIBEAAIgKBoQg9KkAWJPg");
	this.shape_200.setTransform(21.1,145.6,2.437,0.836);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.1,-179.6,0.3,53.2).s().p("AhbIwQAMoOBipRIBJAAIAAADQg9JZAWIDg");
	this.shape_201.setTransform(-107.8,156.2,2.437,0.836);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.4,-236.7,0.5,78).s().p("AhgMyQAMrJBisnIAPhzQAgAAAkAEIgKB5Qg9MjAWLDg");
	this.shape_202.setTransform(35.9,134.7,2.437,0.836);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-199.4,0.4,64.9).s().p("AhfKpQAMpUBiqoIANhUIBEgBIgJBdQg8KqAWJKg");
	this.shape_203.setTransform(-296.2,146.1,2.437,0.836);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#82DD2F","#1F5C12"],[0,1],-21.2,-197.8,6.9,66.6).s().p("Ag+KnQgckwAOlqQAOk3AvlaIAFgeIBGgEIgEAqQgcFXAEE0QAFFrAsEtg");
	this.shape_204.setTransform(-330.1,146.2,2.437,0.836);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#82DD2F","#7CD62E","#6DC429","#56A622","#377F19","#1F5C12"],[0.141,0.267,0.435,0.627,0.835,1],10.1,-232.5,-1,76.2).s().p("AhMKlQAGqLBFq6IBOgEQgjK+AaKLg");
	this.shape_205.setTransform(-356.2,146.4,2.437,0.836);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#82DD2F","#7BD42D","#68BC27","#4A971E","#266714","#1F5C12"],[0.267,0.373,0.533,0.729,0.953,1],3.7,-209.7,-0.3,71.6).s().p("AhPKhQAolQAImVQAFkagPlCIBOAAQAeE0AJEnQANGHgZFfg");
	this.shape_206.setTransform(-404.7,146.7,2.437,0.836);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0,0.145,0.365,0.639,0.949,1],2.7,-211.5,-0.4,85.3).s().p("AhlNNQCEsNgdtOIgChDIBGACIAFA9QBDNLhkMZg");
	this.shape_207.setTransform(-440.1,131.9,2.437,0.836);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#82DD2F","#7DD72E","#6FC629","#59AA23","#3C851A","#1F5C12"],[0,0.153,0.345,0.557,0.78,1],-16.6,-196.8,5.2,90.9).s().p("AhXA6QgVlagJmSIgDh1IBEAGIAIBpQAdGRAjFUQAxHFA0EtIiPAJQgplPgYmfg");
	this.shape_208.setTransform(-448,135.4,2.437,0.836);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#82DD2F","#79D22D","#62B525","#3F891B","#1F5C12"],[0,0.145,0.392,0.706,1],-3.6,-155,0.2,67.8).s().p("AhAB5IgEpKIACgzQABgggDgUQAEg1ABg9IAPADIAEABQAFAyAIA0QBlJfgCKLIiFABQACkPgBkjg");
	this.shape_209.setTransform(-472.9,145.9,2.437,0.836);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],29.3,-114.7,-14.2,63.2).s().p("AhRKvQAwkUAWkfQAUkngIkOQgDh6gKh7IAwAAQARB5ALB4QAuIAhIJsg");
	this.shape_210.setTransform(282.8,145.6,2.437,0.836);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],48.7,-187.9,-13.8,67.9).s().p("AhdLpQAxliAZlzQAYl5gDllQAYgHAMgXIArAAQAlKrhKMmg");
	this.shape_211.setTransform(124.2,140.8,2.437,0.836);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],36.5,-140.5,-13.4,63.3).s().p("AhdKuQA3k7AZlHQAXlSgKk1IgChSIBDAAIAIBOQA1JIhSLFg");
	this.shape_212.setTransform(-29.9,145.7,2.437,0.836);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],36.4,-140.4,-13.4,63.4).s().p("AhdKvQA3k7AZlHQAXlRgKk1IgChWIBDABIAIBQQA1JIhSLFg");
	this.shape_213.setTransform(-157.3,145.5,2.437,0.836);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],39.2,-148.7,-10.6,54.9).s().p("AhmKqQA8lNAglaQAeligDlIIA+AAQAHAAAGgCQAmJphgLqg");
	this.shape_214.setTransform(-258.7,146,2.437,0.836);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#82DD2F","#7CD52E","#6CC128","#52A221","#327717","#1F5C12"],[0,0.145,0.349,0.584,0.843,1],48.8,-181.9,-20.2,74.7).s().p("AhcOmQA2mvAZnDQAXnPgKmpIgBheIBDgDIAHBbQA1MkhRPMg");
	this.shape_215.setTransform(-314.4,124.9,2.437,0.836);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#82DD2F","#1F5C12"],[0,1],20.4,60.3,-65.3,-195.4).s().p("AgvKjQglk1gDkiQgDk8AmkWQAKhPAOhNIA9ACQgJBRgGBQQgSEbARE4QASExA1Eeg");
	this.shape_216.setTransform(-435.4,146.6,2.437,0.836);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.3,-222.8,0.4,65.3).s().p("AhaKvQAMqEBgrZIBJAAQg8LfAWJ+g");
	this.shape_217.setTransform(-143.2,145.6,2.437,0.836);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.2,-198.8,0.4,65.6).s().p("AhgKvQALpUBjqoIAPhiIBEABIgKBqQg+KkAXJPg");
	this.shape_218.setTransform(-171.5,145.5,2.437,0.836);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#82DD2F","#7AD42D","#67BC27","#49961E","#246414","#1F5C12"],[0.114,0.243,0.439,0.678,0.957,1],-1.5,-245.1,0.5,80.8).s().p("AhgNPQAMreBitHIAPh4IBEAAIgKCCQg+NCAXLZg");
	this.shape_219.setTransform(175.2,132.2,2.437,0.836);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0E0E0E").s().p("Ag+KqQAHkCgHmXQgFkmgMlyIgBgiIBHAAIADAfQAhGaATD+QAdGkAHD4g");
	this.shape_220.setTransform(1170.7,146,2.437,0.836);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#163312").s().p("AhHKqQALj0AAmrQAAkygIlsIAAgWIBFAAIACAVQAaFfATE/QAXGqABD2g");
	this.shape_221.setTransform(1338.2,146,2.437,0.836);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#163312").s().p("AhHKrQAMj/gBmhQAAj+gImgIAAgXIBFAAIACAWQAcFsAQEyQAYGhACEAg");
	this.shape_222.setTransform(555.8,145.9,2.437,0.836);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#163312").s().p("AhIKuQANjzAAmtQgBj9gHmgIgBgeIBFAAIADAcQAaFgASE+QAXGrACD2g");
	this.shape_223.setTransform(392.8,145.7,2.437,0.836);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#163312").s().p("AhILAQANkHgBmYQAAkygIlsIgChCIBGAAIADBBQAdGIAQEWQAXGhABD/g");
	this.shape_224.setTransform(264.3,144.1,2.437,0.836);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#163312").s().p("AhILxQAMjzAAmsQAAkygHlsIgFikIBBAAIALCjQAaFfASE/QAXGqABD2g");
	this.shape_225.setTransform(460.3,140,2.437,0.836);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#163312").s().p("AhIKvQAMj0AAmsQAAj+gImgIgBgfIBGABIADAdQAZFgATE+QAXGqABD3g");
	this.shape_226.setTransform(-69.5,145.6,2.437,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.7,40,1845.7,163.1);


(lib.Floor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgSASQgIgDgDgFQgFgIAJgHQAGgGAPgGQAEgCAFACIANADQALACACAIQACAFgJAHQgNALgPAAQgHAAgHgBg");
	this.shape.setTransform(174,54.1,1.536,0.96);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3D3D").s().p("AgMAjQgPgDgIgEQgMgIgBgLQgCgKAMgMIATgUQATgEANABQATACALALIAFAGQACAGgCAKQgCAJgDAGQgGAKgQAHQgNAGgIAAIgMgCg");
	this.shape_1.setTransform(174.5,55.2,1.536,0.96);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgSASQgIgDgDgFQgFgIAJgHQAGgGAPgGQAEgCAFACIANADQALACACAIQACAFgJAHQgNALgPAAQgHAAgHgBg");
	this.shape_2.setTransform(391.1,37.7,1.536,0.96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3D3D").s().p("AgMAjQgPgDgIgEQgMgIgBgLQgCgKAMgMIATgUQATgEANABQATACALALIAFAGQACAGgCAKQgCAJgDAGQgGAKgQAHQgNAGgIAAIgMgCg");
	this.shape_3.setTransform(391.6,38.8,1.536,0.96);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgIAIQgDgCAAgDQAAgDACgCIAGgDIADgDIACgBIADAAIAEACQAGAFgFAGQgEAGgHAAQgEAAgDgCg");
	this.shape_4.setTransform(129.9,39.1,1.536,0.96);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D3D3D").s().p("AgLATQgRgIABgNQAAgIAHgFQAEgEAHgCIADgBQAFgBADABQAQADAIARQAIAQgRAHQgGACgGAAQgHAAgJgEg");
	this.shape_5.setTransform(131.3,39.9,1.536,0.96);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgIAIQgDgCAAgDQAAgDACgCIAGgDIADgDIACgBIADAAIAEACQAGAFgFAGQgEAGgHAAQgEAAgDgCg");
	this.shape_6.setTransform(314.2,39.1,1.536,0.96);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3D3D").s().p("AgLATQgRgIABgNQAAgIAHgFQAEgEAHgCIADgBQAFgBADABQAQADAIARQAIAQgRAHQgGACgGAAQgHAAgJgEg");
	this.shape_7.setTransform(315.6,39.9,1.536,0.96);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgIAIQgDgCAAgDQAAgDACgCIAGgDIADgDIACgBIADAAIAEACQAGAFgFAGQgEAGgHAAQgEAAgDgCg");
	this.shape_8.setTransform(523.5,41.2,1.536,0.96);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3D3D").s().p("AgLATQgRgIABgNQAAgIAHgFQAEgEAHgCIADgBQAFgBADABQAQADAIARQAIAQgRAHQgGACgGAAQgHAAgJgEg");
	this.shape_9.setTransform(524.8,42,1.536,0.96);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4B3424").s().p("AgnALQgKgDAAgGIACgFIgBgEIABAAQAoAIAlgIQALgDAJgFIAAAWIgMAEQgUAFgSAAQgTAAgUgFg");
	this.shape_10.setTransform(760.3,10.9,1.536,0.96);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B3424").s().p("AAAgDQABADAAABIgBADQAAgEAAgDg");
	this.shape_11.setTransform(751.5,8.4,1.536,0.96);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4B3424").s().p("AgdAQIAEgDQAMgLgDgKIgCgJQAAgLATgEQAMgCAFgFQALADABAIQABAMgWAEQgTAEAAAJIACAJQADAMgMALIgMAHg");
	this.shape_12.setTransform(4.7,7.7,1.536,0.96);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4B3424").s().p("AgoAVQgSgHgHgKIALAEQAUAHAgABQAaAAAOgJQAJgHADgIQAEgKgFgJQAJAFAEAEQAGAJgEAKQgDALgJAHQgOAJgcAAQgegBgUgGg");
	this.shape_13.setTransform(107.8,15.2,1.536,0.96);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4B3424").s().p("AAAANQgCgGgDgJIgFgSQAGACAEAEQACAGAEAKQADAPACAEQgHgEgEgEg");
	this.shape_14.setTransform(111.2,9,1.536,0.96);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4B3424").s().p("AgvAFQgMgEgFgCQgEgEgCgHQAFAFALADQA2ANA1gOQAIgCACgFQAIAEAAAFQAAAEgLADQgcAJgcAAQgZAAgagIg");
	this.shape_15.setTransform(690,21.6,1.536,0.96);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4B3424").s().p("AgQAIQACgGAGgDIAJgKQAJgIAAgJIAEACQAFAGgDAIQgCAGgGAGIgJAHQgGAHgCAFQgBAGACAEQgKgKACgLg");
	this.shape_16.setTransform(689.9,13.6,1.536,0.96);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B3424").s().p("AgOALIAAgCIgBgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQACgDAMgEQAEgDADgEIAEgEIACgDIABABQAGAFgDAIQgCACgHADIgKAEIgHADQgDADABAEQgCgCAAgEg");
	this.shape_17.setTransform(554.9,9.3,1.536,0.96);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4B3424").s().p("AAEASIgqgCQgRgBgIgDQgNgEgDgLQgCgGAEgIQAEAIAKAFQAKADAPAAIAqABQAhABATgCQAMgDAGgFIADgEQACACAAADQAEAIgJAHQgGAFgMADQgNADgYAAIgPAAg");
	this.shape_18.setTransform(544.7,13.9,1.536,0.96);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#654835").s().p("AhSAbQgMgGgCgGQgBgFACgGQAEgNASgJQAJgFAXgFIA+gNIABAAQAZgCAYAJQAOAEAGAIQAJALgFALQgDACgFAEQgjAdgvAGIgUABQgjAAgggPg");
	this.shape_19.setTransform(27,17.3,1.536,0.96);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4B3424").s().p("AAXANIgtgCIgZgBQgPgCgEgIIAAAAIACAAIAZABIAtACQAgABANgIQgDgEgEgEIADABQAQAHAEAIQgLAJgbAAIgGAAg");
	this.shape_20.setTransform(214.4,20.6,1.536,0.96);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B3424").s().p("AAAADQgFgDgCgCIgBgEIAGABQAGACACADIADAHg");
	this.shape_21.setTransform(215.3,17.2,1.536,0.96);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4B3424").s().p("AgJABIABgLQABgJgBgEIAAAAQAIABADAEQAEAFAAALIgBAQQABAFADAFQgRgHgCgQg");
	this.shape_22.setTransform(283.1,10.9,1.536,0.96);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4B3424").s().p("AhQAWQgTgCgCgLIAAAAIAEAAQA8AGBXgJQARgCAHgEQAFgBADgFQAEgGgCgGIgCgGQARAKACAJQADAKgNAIQgJAFgPABQg3AGgrAAQgaAAgXgDg");
	this.shape_23.setTransform(284.5,19.7,1.536,0.96);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4B3424").s().p("AADADQgHgDgEgGIAOADQgCAEAFAGg");
	this.shape_24.setTransform(294.2,15.7,1.536,0.96);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4B3424").s().p("AgkAaQgGgBgCgGIACAAQAEACAIgBQAbgEAVgMQALgEAEgFQAHgIgCgJIgBgEQAGAFABAFQACAKgHAGQgFAFgKAGQgYAMgYAEIgFAAIgHgBg");
	this.shape_25.setTransform(622.6,15.2,1.536,0.96);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4B3424").s().p("AgkAcQgGgCgBgHIAAgEIAHAAQAbgEAVgLQALgFAEgFQAHgIgBgJIABAAQAJAFABAIQACAJgHAGQgFAGgKAGQgYAMgYADIgHABIgFgBg");
	this.shape_26.setTransform(334.1,14.4,1.536,0.96);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4B3424").s().p("AAAgBIAAgBQABACAAADQgBgDAAgBg");
	this.shape_27.setTransform(325.1,14.1,1.536,0.96);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4B3424").s().p("AgkAaQgHgCgBgGIAAgCIABABQAEABAIgBQAagEAWgMQAKgDAFgGQAHgIgCgJIAAgBQAGAFABAFQACAJgHAHQgFAFgKAGQgYAMgYAEIgFAAIgHgBg");
	this.shape_28.setTransform(163.1,12.4,1.536,0.96);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4B3424").s().p("AgDgDIAAgBIAEAEQADACAAADIAAAAQgGgFgBgDg");
	this.shape_29.setTransform(154.4,12.2,1.536,0.96);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4B3424").s().p("AgQAMQgGgCgDgEIgBgDIADACQAUAGAQgJQAGgCACgEQAAgDgEgGIAFAFQAGAHgBACQAAAEgHAEQgLAFgJAAQgIAAgIgCg");
	this.shape_30.setTransform(71.5,13.4,1.536,0.96);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4B3424").s().p("AAAAEIgCgEIAAgDIABgFQADABABADQABACgBACIAAAHIABACg");
	this.shape_31.setTransform(73.1,10.7,1.536,0.96);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4B3424").s().p("AhFAnQgLgBABgIIACgHIgBgDIABAAQAoAKAlgKQAPgEAJgHQAMgJgDgNIgCgIQgBgLAWgFQAMgCAFgEQALADAAAIQABAMgVAEQgWAEABALIACAGQADANgMALQgJAHgPADQgSAGgTAAQgUAAgUgGg");
	this.shape_32.setTransform(59.8,11.4,1.536,0.96);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4B3424").s().p("AAAgDIABAEIgBADQAAgEAAgDg");
	this.shape_33.setTransform(46.4,11.6,1.536,0.96);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F66058").ss(1,1,1,3,true).p("AAAgLIAAAX");
	this.shape_34.setTransform(768.1,20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#D44436").ss(1,1,1,3,true).p("AAABMIAAgWIAAgPIAAgeIAAgJIAAhL");
	this.shape_35.setTransform(768.1,11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E07F43").s().p("ABABIQgQgFgDgHQgBgEADgEQADgEAHAAQgCgFgIgEQAKgIAZgCQATgCAngBQAogBATgCQAfgCAegJQAqgKgKgLIgTgNIgEgFQgBgCADgEIAHgJIAEgEIAGgCIAOgDQAHgBAKACQAQADAHAKQALABAPAFIAYAJQAKADAcACQAYACANAEQABAFgIACQgGACgHgBIhTgEIgBgDQgWAAgKADQgTAEgDAHQgBAFgDACQgDACgGABQg/APhGAJIgsAHQgYAEgPAIQgBABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIAEACIAtAPQgMABgMAAQgUAAgSgGgAm7AWQgMAAgHgEIgEgEQAPgEAgACQAiADAOgEIAOgDIATgCQAQgBAfgIIA3gUIANgDQAIgDACgDQAHgKAAgIIACgFIADgEQACgDgDgDIgGgFQgLgDgEgDIgBgBIACAAIARACIADgBIARAEIAGADIAFACQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAABABIACAEQACACgDAGIAFAEIABAEIADACIAXAKQAHAFAVAAQAZABAXAEIhUABQgUAAgKACIgRAGIgTAFIgSADQgKABgTAEQhIAWgtAAIglAAIgWAAIgFAAg");
	this.shape_36.setTransform(529.3,14);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("EAw2ABvQgGgCAAgDQAAgEAEgCIAJgEIAKgDIAFAAIAGACQAKAEgHAIQgHAGgNAAQgHAAgEgCgEAuLgAxQgNgDgEgEQgHgIAOgJQAIgFAXgGQAJgDAJACIATAEQASACADAHQADAHgOAHQgVALgZAAQgLAAgLgCgEgxDgBLQgNgDgEgEQgHgIAOgJQAIgFAXgGQAJgDAJACIATAEQASACADAHQADAHgOAHQgVALgZAAQgLAAgLgCg");
	this.shape_37.setTransform(354.5,47.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3D3D3D").s().p("EgwuAEFIACgRQADgSAXgMIAOgJQAOgKgKgYQA+gCA9ALQANACACAFIgTAWQgDADgEABQgCAAgGgBQgSgDgeAMIgfAMQg7AWgRAVQAEgGABgJgEA3pADbIgxgNIgwgOQgWgHgGgEQgPgIgBgKQgBgKAPgEIA/gUQA4gTAqAbQArAaAJAMQAKANAEAIQAFAIgDAGQgGAJgWACQgPACgPAAQgWAAgWgEgAbsCuQgGgIALgLIAtgyQAngsAyACQAxABAPAGIAWALQAJAFAAAHQgBAKgSANQgcAWglANIgwANIgyAMIgdAFQgRAAgGgHgAKLCnIgxgNIgxgOQgVgHgHgEQgPgIgBgKQgBgKAPgEIBAgUQA3gTArAbQAqAaAKAMQAJANAFAIQAEAIgDAGQgGAJgWACQgPACgPAAQgVAAgWgEgEgijACnIgxgNIgwgOQgWgHgGgEQgPgIgBgKQgBgKAPgEIA/gUQA4gTAqAbQArAaAJAMQAKANAEAIQAFAIgDAGQgGAJgWACQgPACgPAAQgWAAgWgEgAxOCcIACgRQADgSAXgMIAOgJQAOgKgKgYQA+gCA9ALQANACACAFIgTAWQgDADgEABQgCAAgGgBQgSgDgeAMIgfAMQg7AWgRAVQAEgGABgJgEAxQABBIgxgNIgxgOQgVgHgHgEQgPgIgBgKQgBgJAPgDQAIgCAUAAQBGABBJAQQAcAGAPAKQAJAGAFAIQAEAIgDAGQgGAJgWACQgPACgPAAQgVAAgWgEgAi+A1IgxgNIgxgOQgVgHgHgEQgPgIgBgIQgBgKAPgEQAIgCAUAAQBGABBJAQQAcAGAPAKQAJAGAFAIQAEAIgDAGQgGAJgWACQgOACgQAAQgVAAgWgEgEgrJAAEQgRABgFgGQgGgIALgLQAFgGASgKQA9giBIgVQAcgJARACQALAAAIAFQAIAEAAAHQgBALgRANQgcAWglANIgwANIgyAKQgUAEgIAAIgCAAgEAkXgBaIgxgNIgwgOQgWgHgGgEQgPgIgBgKQgBgKAPgEQAHgCAVAAQBFABBKASQAbAGAPAKQAKAGAEAIQAFAIgDAGQgGAJgWACQgPACgPAAQgWAAgWgEgATRh0QgXgBgHgCQgRgFgDgIQgEgKAOgIQAGgEAUgFQBEgRBLgCQAdgBARAFQAKAEAGAHQAHAGgBAHQgEAKgUAIQghAOgnADIgyAAgAtQh0QgXgBgHgCQgRgFgDgIQgEgKAOgIQAGgEAUgFQBEgRBLgCQAdgBARAFQAKAEAGAHQAHAGgBAHQgEAKgUAIQghAOgnADIgyAAgANAieIACgQQADgSAXgNIAOgIQAOgLgKgYQA+gBA9ALQANACACAFIgTAVQgDAEgEAAQgCABgGgCQgSgDgeAMIgfAMQg7AXgRAUQAEgGABgJgA98ieIABgQQAEgSAWgNIAPgIQAOgLgKgYQA9gBA9ALQAOACACAFIgTAVQgDAEgEAAQgDABgGgCQgRgDgeAMIggAMQg7AXgQAUQAEgGABgJgEAx1gCYQgXgBgHgCQgRgEgDgJQgEgJAOgIQAGgEAUgGQBDgRBMgBQAcgBARAFQALADAGAHQAHAHgCAGQgEAKgUAIQghAOgnADIgyABgEArTgCaQgXgDgMgEQgSgHgDgLQgCgLASgMIAegTQAfgEAUABQAeACARAKIAHAGQAEAGgDAJQgDALgGAGQgJAJgYAHQgUAGgPAAIgTgCgEAragDYQgXAGgJAFQgOAJAHAIQAFAEAMADQAnAGAegPQANgHgDgHQgDgHgRgCIgUgEIgHgBIgKACgEg2OgCZQgkgEgjgSIgrgYIgsgbQgTgMgFgFQgNgMACgJQACgLAPABQAIgBAUAFQBDATBCAlQAZANAMANQAIAIABAJQADAJgEAFQgGAFgMAAIgMgBg");
	this.shape_38.setTransform(374.3,60.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E39A4B").s().p("EAqaABJIgKgIQgDgCgHgBQgYgCg4AHQgyAGgcgFQgXgFgLgCQgMgCgRAAIgdAAQgkAAgRgMQgBgEAIgCQAHgDAHABQAJACAQAGQAMADAQgCIAGgBIAWgDQAbgFApgCIBEgEQAlgCA2gJQAvgHAdgKQAUgFAKgJQAGgEAHgJIACgCQAIgGAIgCQAMgEANAEQAOAEADAIQAEAHgFAJQgGAFgMAEIgOADIgOADQgLACgTAKQgTAJgLADQgGABgVACQgRABgIADIgIAEQgHAIAVAJQAVAIgCAIIgVABQgVAAgJgHgEgk9AAyQgPgFgYgLQgFgCgBgFIgEgHQgGgFgQgFQgJgCgNABIgWABIhKAGQgvADgcABIgRABQgVAEgLABQgVACgKgIIgFgEQgGgDgKgBIgSAAQgIAAgOgDIgXgDQgUgCghAIQgkAJgSgBQAWgNAfgJQAKgDABgDQAAgFACgCIAGgDQAFgDAAgCQAAgDgJgCIgSgFIgGgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQADgCADAAQAJgCAKADIASAFQAkAKAjgJIAFgBQADAAABAEQABADgDACIgGAEQgEACgCACQgEAGAMAHIABAAIAEACQAQADAjABQAgABAcgBIAkgBIAXgBIAXgCIAPAAQAJAAAHgCIASgIQAJgEAIAAIAGAAQAJAAAOAEIAWAHIAEACQAJACAGgBIAJgBQAGAAADABQADACgDACIgEAHQgBACACAFQADAEgCADIgEAGQAAADAIACQAKACACACIAFAGQADACAKABIAtAFQABACgFACIgJABIgCAAQgUAAgVgGgAxoAaQgFgDADgIQAGgPgOgMQgNgLghgCIgagBIgagCQgXgEgOgMIgKgHQgGgDgJgCQgPgEgEgFQgEgDABgEQABgEAGgCQAFgCAKACIAAAAIAFACIBvAjIAiABIADAFQARAGAHAAQAPABAEgJQAOAIAXgJQAagLALABIAQABQAKABAUgJQAggLAtgBQAXgBAgADIAbACQACAFgHADQgHACgIABQhnAIhiAXQgVAFgFAGIgFAJQgGAIgZAPQgJAGgGAAQgEAAgDgCg");
	this.shape_39.setTransform(456.3,13.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F66058").s().p("A6CA/QgFgEgEgHIgGgMQgUgdg5gMQghgIhHgCQiAgFiLABQhTgBgtABQhOACgrANIguAPQgbAIgVgEQgQgCgPgKIgbgQQg7gkhoACQgyABhRAQIgGABQgaAEgcACIg/ADQiLAEiJAIIjYAIQiEAEhEgBQhygChVgNIAAg3QATgBAQABQAmgEAWAEQAUAEAkANQAhAKAsABQAigCA2gJIBAgKQAmgGAbgBIAngBIAFAAQAsgDBLAGIB6AHIgIABIADAAIDpAAQA4gBCZgGQCDgGBOABQAzABAQAOQAFAFAIALQAKAJAYADQAPACAcgBQAxgCBLACIB9ACQBGABA0gDQASgCAkgHQAigEAUAEIAYAHQAOADAWABQBBAFAkgBQA4gBAqgMQAagHAHAAQAOgBATADIAhAJQAiAHAzgDIBXgGQAfgBBJAGQBBADBZABICZABQAXAAB4AFQBXADA3gDIADAAQAUgCAIgEQAKgEAQgMQAPgJAqgIQATgDAJACQAFABAIAEIALAGQAYAMApgCQAZAAAxgFQAegCAuADIBLADQB1ADBkgdQgGAIAHAIQAFAJAOAEQAPAGAmgBICdgEQBLgBANgZQBGAgCIgFIBsgDQA9gBArAIQgPAFgSAEQgbAFghACQghAChDgCIi5gEIiAgBQlMgElXAGQhcAAgwAJQhNAMgkAjIgNALQgIAFgJABQgMAAgQgJIgfgVQgVgMgPgFQgOgEgWgEIgngFQhLgJhqAAQifABjGALIgtADIgVABQgoAEgTAHQgSAFgZAPQgcARgLAFQgZAKgbABIgCAAQgdAAgNgMgEAqnAAnIgRgMQgTgLg5AEQhRAEhygGIjCgNQgogDgZACQgfABgYAGIgBABQgJAGgUAEIgIADQgUAIgNACQgHABgFgCQgHgCABgIIgOgBQgOAAgFgCQgFgDgKgIQgMgKgsgDQhmgIg2AGIg2AGQghAEgVgBQgSgBgegDQghgFgOgBQgigDg6AJQhDAHgYABQgjABhHgJQhHgJgkACQgXACgsAFQgtAHgXACQggAChBgGQgqgEgZgDQgjgIgSgQIAwgJQAfgGARgGQAsgRAkADQAPABAfAFQAcACANgJIAHgHQAFgDAEgBQAMgDAKAHIASANQAVASBAAFQA/AHAeACQA0ADArgCQAVgBAtgFQAogDAcACIBIAFQAqADAegFIAjgGQAcgEAiADIAiAFQAWADAMAAQAcACAbgGIAigJQATgGANgCQAUgCASAEQASAEAGAKIAFAHQAHAKAegBIAJgBIAjgJQAYgHANAFQAGACAJAGQAOAGAegKQAggKAOAEQAHACAIAGIAMAJQAQAJAvAAIDEAAQAeAAANgDQALgDAVgJQAUgJAMgCQAQgCAgAFQBAAKBSABQAvAABmgDICZgEQBBgCAfgHIAegGQARgEANgBQAUgCAjAGQAoAGAQAAQAJAAA+gGQAqgFAYAIQAXAHgGAKQgCAFgKAEIgSAGQgHADgGAGIgHANQgFAGgJAFQgJAEgJgCQgJgCgGgIQgEgKgGgEQgNgOg2ABQiZADjkAFQg0ACgcADQgtAFggAKQgsARgZAFQgSAEgPAAQgYAAgQgKgEA7/gAIQgUgCgUgFQgggHgEgMIgBAAQAAgJAMgHQAIgFAQgDQAXgFATAAIAAAZIAAAeg");
	this.shape_40.setTransform(384.1,25.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("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");
	this.shape_41.setTransform(384,62.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4B3424").s().p("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VgCgAyNg9QgigBgFgLIAAgEIACgEIACgDQAJAGAWABQBgADBTAAQAZAAAIgBQAMgCAYgGQAYgGA9gBIAWgBQAbgEAHgLQAFAFABAFIAAADIgBACQgFARg0ABQg9ABgZAGQgXAGgMACQgIABgYAAQhUAAhggEgAKig6IgTgDIhbgTIAPgEIBaASQAHABASgDIApgGQArgGAZgIIAJgDQAMgFABgGQADACABADQABADgBADQgEAGgRAFQgSAFgyAJIgpAGQgNACgJAAIgDAAgEAwzgA7QgHgCgFgHIAAgBIAAAAIACABQAJADANgCIAUgFQAUgFAhgDIA2gHQAMgBAHgDIAEgDQAGgEAAgEIAHACQADADgBAFIAAABQgCADgEADQgHAEgQADIg1AGQgiADgTAFIgVAFIgKABQgGAAgFgBgA6ThKIgBgBIAEgCIACABQAQAEAgAAICkgCQA6gBAcgFQAQgDAFgGIACgCQABgDAAgDIgBgBQAGADADAEIADADIABAFQAAAEgDACQgGAGgPADQgcAFg7ABIijACIgGAAQguAAgNgOgEg0egBHIACgEQAVAFAngHQBHgLAqAFIAWACQAMACAJgBQAJgBACgDIABADIAAABQgBAEgLABQgJAAgMgBIgWgCQgqgFhHALQgXAEgQAAQgOAAgJgDg");
	this.shape_42.setTransform(384.1,13.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D44436").s().p("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gJgggCQhFgDg4AbQggAIgbAEQgXAEgJAEQgRAHAAAJQgBAFADAEQgNgHAFgGQACgCAEgCIAGgEQACgCAAgDQgBgEgEAAIgEABQgkAJgjgKIgSgFQgLgDgIACQgDAAgDACQgBABAAAAQAAAAgBABQAAAAAAABQABAAAAABIAGACIASAFQAJACAAADQAAACgFADIgHADQgBACAAAFQgBADgLADQgeALgXANQASABAkgJQAigIATACIAYADQAOADAHAAIATAAQAKABAGADIAFAEQAKAIAVgCQALgBAVgEIARgBQAcgBAvgDIBKgGIAWgBIAFAAQAKAAAHABgEgnggAgQAQAGAdACQBcAFBAgUQAQgFAFgFQACgDABgDQAEgJgNgJQgJgHgXgFQg5gNg5AGQgQACgPADIgdAHQgcAKgDANQgBAFADAFIgBgBQAFALAPAFgEgrWgCLQgOACgfALIgdALQgIADgCADQAAADACADIADAGQAEAHgHALQgIAOAAAFQAAARApAJQAgAGAvABQAtAAAVgJQAPgGAEgLQAGgLgKgIQgFgFgOgFQgQgGgFgEQgHgFgGgPQgEgOgIgFQgNgJgTAAIgOABgEAlBgBZQgHABgHAEIgNAGQgJADgOADIgXAFIgDABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAEAMAGQAMAFAAAEIAAAGQABAGALACQAHABALgBQAogDAmgMQAPgFAHgGQALgHgDgJQgDgIgNgEQgMgEgNgBIgggBIgMABgAoChfQgHABgIADIgLAHQgJADgOADIgYAFIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQACAEALAGQAKAEABAFIAAAGQACAFAJADQAHABAMgBQAogDAlgMQAQgGAHgFQALgIgEgJQgBgHgNgFQgMgDgNgBIghgBIgMABgEgy2gCQQgSACgtAKQgiAJgOAJQgJAHgCAJQgDAJAIAHQALAIgBADIgEAHQABAGAPACQA9AKA8gKQAZgEAMgGQASgLgEgMQgDgFAAgCQgBgMAhgDQAggEAAgMQgBgJgdgEQgxgGggAAIgbACgAaMiMQgLABgWAFIhtAaQgbAHgKAFQgTALAEAMQAFAMAVAEQAMADAZABIBFACQA1ABAagEQATgDAIgEQAOgIgFgJQgDgGgPgFIgWgIIAAgHIAcgGQAPgFACgDQADgHgIgFQgGgEgNgCQgVgEgLAAIgCAAgEgixgB1QgGABgIAEIgNAHIgWAGIgYAFIgCABQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAAAABQACAEAMAFQAKAFAAAFIAAAGQACAGAKACQAIABAKgBQAogDAmgMQAPgGAHgFQAMgJgEgIQgDgHgNgFQgLgDgNgBIgggBIgNAAgAFWiiQhLAIiBAeQgJACAEABQAIAAgIAGQgGAEgDADQgCAIARAHQBjAwDAgQQBvgKAmgiQASgRgKgOQgEgFgKgFQgJgDgLgDQg7gPhGAAQgnAAgrAFgAeMhFQAKAGAZADQA/AFA8gNQAagGAJgIQAHgGACgGIAAgDQABgGgGgFIgHgFQgOgGgfgGQgMgDgMAAIgTABIgaADQghADgOAEQgYAGgKANQgFAHABAIIACAGIAAAAQACAEAFAEgEgw1gBsQgQADgOAFQgJADgDAEQgEAFAGAEIAGAEQAAACgFACQgGAEAGAFQAEAEAJACQAfAGAbgJQALgEABgEQAAgEgIgGIgKgHIgFgEQAAgCABgEQACgFgCgBQgCgEgIgBIgMACgEApFgCCQggACgOAEQgZAHgKAMQgFAIABAHQACAIAHAFQALAIAZABQA+AGA9gOQAYgFAKgJQAIgFABgHQABgHgFgFQgCgCgGgDQgGgDgFgBIABAAQgNgEgVgEQgSgDgHAAgEgwRgBhQAKAPAiAHQAxAKAzgLQAQgDALgEIAGgEIACgCQABgBABgGIAAgCQAEgHAUgIQANgGAEgGQAEgEgBgEQgCgIgYgFQgvgLg/AEQgvADgVALQgPAIgGALQgHALAGAKIgBgBgAtriIQgcADgSAEQgaAHgJANQgFAGABAIQABAEACAEIAGAGQAKAGAZACQBAAGA7gOQAZgFAKgIQARgNgNgMIgIgFIgPgGIgcgGIgYgEgEAiJgCBQgQAAgJACIgDACQAAAAAAABQAAAAAAAAQAAABAAABQABAAAAABQAMATgJAJQgHAHABACQABAFAQABQBYAEApgJQAPgDAJgFQAMgHgBgJQgCgJgPgFQgKgDgSgCQgogEglAAIgdABgEArYgBWIAAAAQABAGARABQBVAEArgJQAQgDAJgGQAMgGgCgJQgDgJgOgFQgIgDgTgCQgygFg5ABQgRABgIACIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQANATgKAJIgEAFIgBAAgArYhbQABAGAQABQArACAWgBQAkAAAbgGQARgEAIgEQAMgIgCgIQAAgJgRgFIgGgCIgVgDQg2gGg0ACQgRABgHACIgDABQAAABgBAAQAAAAAAABQAAAAAAABQABABAAAAQANATgKAJIgEAFIgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAgEgn/gCfIgbACQgdADgRAEQgaAHgIANQgGAHABAHQABAKAIAFQAKAHAZACQA/AGA9gOQAZgGAKgIQAGgFACgHIAAgEQABgFgGgFIgHgFQgOgHgegFQgQgDgIgBQgKAAgJACgEglpgCdQgPAAgKADIgCABQgBABAAAAQAAAAAAABQAAAAAAABQABABAAAAQAMAUgIAIIgEADIgCADIgBADIAAABQABAFARABQBXAEAogJQARgDAJgFQALgHgBgJIAAAAQgDgJgOgFQgKgEgSgBQgpgEgmAAIgbAAg");
	this.shape_43.setTransform(384.1,20.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#654835").s().p("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");
	this.shape_44.setTransform(384.1,11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7B5542").s().p("EAkfABnQgLgCgCgDQgCgDADgFQADgEAFgCQARgIAggCIAaAAIAagBIAIgBIAIACQgDAIgVADQgYADgGAEIgKAHQgKAHgQAAQgKAAgNgDgAZtBYQgagBgIgHQAEgFAQgDIAhgHIAHgCIAEgFQAIgJAagCQAugEAdABQAHAAACADQAEADgKAFQgUAJgiACQgOABgDAEIgCAFQgFAJgXABQgPACgOAAIgMAAgAfpBKQgSgEgEgHQgEgHALgHQAIgEAPgDQAlgGAqgBQAGgCgEADQAHABAAACQAAABAAAAQABABgBABQAAAAgBABQAAAAgBABQgFAFgOACQgTADgEACIgDACIABAHQADAFgIAEQgFACgKABIgDAAQgKAAgRgDgAHIBHQgSgDAAgGQAAgDAHgGQAtgcA/gEQAMgBAKACQAFABACACQAGAGgOAGQgMAIADAEIAGAEIAGAEQAFAFgJAGQgFADgNACQgVADgWAAQgcAAgcgFgEApEABHQgNgGACgJQABgKAUgGQASgFAcgCIAxgCQALgBAEADQAHAEgFAFQgDAEgJACIgYAEQgOADgHAEQgMANgJACQgFACgMAAQgRgBgKgEgEg50ABIIgigGQgPgCAAgEQgBgFALgFQArgOBegHIAOABQAIABACAFQABAEgLAFIgVAGQgWAFgEAGIgCADQgDAFgIADQgJACgLAAQgOAAgSgDgASxA7QgIgBgDgDQgEgEAFgDQADgEAHgCQAkgPAuADQAIABAEACIACABQAAABAAAAQAAAAAAABQgBAAgBABQAAAAgBABIgMAGQgCABAFAEQAFADgCACQgBACgEABQgYAEgZAAQgQAAgRgCgAlUA5QgFgCgCgEQgDgEAEgDIAHgFIADgJQAEgKAPgGQALgDATgDIAcgFQAggEAWgBQAggBAVAHIAHAFQABADgBAEQgGALgeAKQg/AThJADQgQAAgHgCgA3iAyQgbgFgPgJQgTgMgBgQIAAgEIAGgDQAygMA/gHQAXgDAOACQAWACAKAKQgLAHgOAGQgIAEgCADQgEAGAPAHQARAHACAFQAEAIgNAFQgIAEgQABIgXABQggAAghgHgEgoAAAyQgOAAgHgDQgMgFABgHQAAgGAKgFQAOgHAjgFIASgCQAUgCAJACQAFACABACQAEAGgOAEQgOAFABAFQABACAEACQADADAAACQAAAFgPACIgdABIgVgBgEAwGAAeQgJgMAWgOIASgIQAKgFAFgGIAKgKQAHgGATgDQAsgIAygBQASgBAIAFQANAHgJALQgFAHgQAFIgkAKQgVAIgFAKIgCAHQgFAGgRAEQgcAHgcAAIgFAAQgeAAgIgNgAW2ANQgGgBgEgDQgEgCAAgFQAAgCAEgDQAGgFAOgDIAkgIQAXgEALgEIASgEQALgBAHACIACACQACACgHACIgfAJIggAKIgHAEQgDABABACIADAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgJAAIgRABQgKAAgKgBgEg1hAADIgDgCIABgBQAEgJAMgDIAKgDQAGgCgBgEQAYgNA/gJIAKgBQAIABgCAFIgDADQgVAIgJAEQgTAJgHAOQgCAEgCACQgFAEgKACIgOAAQgWAAgSgJgAMkAIIg+gCQgjgBgPgGQgGgDAAgEQAAgEAMgFQAWgIA8gJQArgGA1gLQBCgOAdgBQA6gDAiATQAPAKgDAIQgCAGgLAFQgvAXhMAGQgXACghAAQgiAAgtgCgEg6HgAJIgcgDQgKgCACgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQANgGAWgGIAlgHQAIgCACgCIAGgHQACgCAMgEIApgKQAQgEALABQAFABACACQAFAEgIAHQgKAJgQAEQgNAEAAAEQgBADAIAHQABAFgIAEQgFACgLABQgjAEgqAAIgJAAgEA4pgAbIgDgDQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAEgIAMgEQAIgBACgBQAGgCgBgEQARgLAqgHIAcgFIALAAQAHABgCAEIAAAAIgDADIgeAMQgSAJgIAPQgBAEgDAEQgFADgKACIgPABQgVAAgRgJgEgpigATIgngBQgMAAgIgBQgNgEAAgHQAAgDAHgFQANgKAegFQARgCAigBIAFAAQADAAACACQAAABABAAQAAABAAAAQAAABAAAAQgBABAAABQgCACgIAEIgNAIQgBAAAAABQAAAAAAABQABAAAAABQABAAABABIAFACQADACgCAEQAAADgFABQgFACgIAAIgGAAgAabgnQgHgDABgDQAAgBAEgDQAvgbBAgNQA/gNBCADQANABAGACQALAEgDAGQgDAEgNAEQgLAEAAAEIAAAGQAAACgGABQgOAEgWACIgkAFQg0AOgcAEQgTADgQAAQgaAAgTgKgAT+gsQgYgFgHgGIgCgEQAAgCAJgEQAegKBEgNQApgKANgBQAUgBADAIQABAFgHAGIgZANIgoATIgUAIQgIACgLAAQgRAAgYgFgAnygsIgwgKQgcgGgJgIQgHgFAFgEQAAgCAEgCQAUgKAugCIAXgCQArgDAQAKQAEACgBADQgCACgFABQgXAJABAJIAGAJQABAEgGAEQgEADgIABIgEAAQgJAAgPgDgEAkdgAvQgEgCgIgGQgGgEgFgCIgJgCQgFgCgCgCQgEgEAHgFIANgFQAegGBBgJQAOgCADAFQADADgGAEIgKAEQgPAFgHAJQgFALgFAFQgHAHgOABIgGAAQgKAAgHgDgEgh9gA0IghgIIgZgEQgPgCgKgDQALgJAjgEQAkgEAzgDQASgBAIACQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgBACQgDACgHABIgMACQgGABgFADQgEADAAADIAFAFIAFAFQACAEgHADQgFADgIABIgFAAQgMAAgRgEgAxag6IgpgEQgagDgQAAQgYAAgHgEIgCgDQgBgBAEgDQAPgJAcgHQA4gNA5ABQAPAAACAGQABACgFAEQgGAFgBACQgBAEADAHQAAALgTAEIgQABIgQAAgEAq8gA/QgkgFgjAAQgSAAgGgDQAIgGAXgEQBJgNBNABQAJAAADADQgGAFgUACQgUACgEAGIgDAGQgFAIgPABIgDAAQgIAAgOgDg");
	this.shape_45.setTransform(391.3,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,769.1,113.2);


(lib.Explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBAIgGgFIgDgEIgCgDIgNgHQgDgBgCgDIgGgJIgBgEIAAgFIAAgEIACgFIACgFQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBgBAAQgBgDgCgDIgEgCIgDgFIgBgEIAAgFIAAgEIAAgFIAAgEIAAgFIABgFIADgEIAFgFIAEgEIAFgFIAGgDIAMgDIAAgBIAiABIALACIAHAFIARAWQAMARgGASIgMAkQgJAYgaADIgKABIgMgBg");
	this.shape.setTransform(-0.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQB9QgPgPgNgQQgTgXgFgcQgFglAIgiQALgrAjgdQAXgSAdgFIAbgEIANgDIAAgBIASABIALACQAOAQAVAGQAYAHANATQAPAVAHAaQAHAbgIAZQgIAbgMAZQgEAHgHAEIgbAKIghAPIgcANQgXAMgbAAQgUAAgWgHg");
	this.shape_1.setTransform(2.3,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai0CPQg7hHARhbQAZiNCWguQAegJAagGQCvABAkCtQAkCsikBGQg+Abg0AAQhbAAhDhPg");
	this.shape_2.setTransform(2.9,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjxECQiJihAWjYQADgnAVghIgDgFIgBgEIAAgFIAAgEQAKgbAUgUIAwguQAagaAjgEQA0gHAzgJIA3gKQDegSCBC2QA6BTgMBsQgYDWjSBpQhZAshKAAQhzAAhXhmg");
	this.shape_3.setTransform(6.1,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmXExQiykdBhlAQA4i5C/gpQBXgSBVgKQGlgfCHF3QAVA5AIA+QAoEwjEDRQg2A6hKAdQh/AwhrAAQj4AAidj8g");
	this.shape_4.setTransform(8.1,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AitMWQiXgiiGhUQh0hJhIh1QgdgvgigoIgCgGQgHgogNgoQgTg4gGg6IgMiOQgGhZAGhaQAHhkAYhfQAahmAthgQAGgPAKgNIgDgGIgDgGIgBgFIgBgGIABgFQAGgSAIgSQALgYANgWQAPgXASgXQAggoAugVQA5gaA8gIIBpgQQCmAACkAQQBKAHBJAWQBXAaBPAuQBQAtBKA8IAOALQAbA7AjA6QB9DPAuDtQBBFTjnD3QjqD5lBAAQhkAAhugZg");
	this.shape_5.setTransform(9.4,-2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhYSEQiqgTiZhKQkGh+jTi6Qg7g0gXhMQhJjtgDkAQgBg+gJg/QgciyAFi4IgFgGIgFgGIgDgFIgDgGQAahAAvg6QA5hGAZhUIAvidQAhhvBShUQA6g8BSgLQCIgSCHgUQArgHAugNIBOgYQDTgDCdCbQASATAfAEQEhAtCfD4QAUAgAgAWQDMCRAED9QAAAkAZAfQDKD8hfEmQgJAbgQAaQhXCJgrCUQgWBJgpA/QhkCai+AYQhDAIg/AgQjFBijUAAQgxAAg1gGg");
	this.shape_6.setTransform(17.8,-13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBFQgUgIgHgVQgDgGABgIIAAgPIACgiQABgPAGgNQAJgSAQgCIAgABQAEAAAEACQAEADADAEIAFAGIgBAEIgBADIgBAFIgCADIgEADIgEADIgHABQgNABgLADIgBADIgBADIgBAEIAAAHIAAAIIAAAIIAAAHIAAAIIAAADIAAAEIACADIACAEIAFAEIADAEIADAEIACAHIAAAEIgBADIgCAEIgDADIgFADIgGAEIgKgEg");
	this.shape_7.setTransform(-9.5,-124.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABgH5IgFgDIgCgEQgSg0gZgyQgZgwgHg2IgOhsIgOhqQgHgugIgsIgLgOQgJgKgFgMIgLgXQgFgMgJgJIgMgPQgCgHABgIIAAgZQgBgNgFgMQgFgNgCgNIgBgWIAAgLQgQgWADgeQADgbAAgbQgBgcARgXQATgcAKgfQAJgbAIgbIAEgDQACgCADgBIAHgBIAAAAIAIADIAFADIACADQAGAjgQAjQgSAlgPAlQgPAlAHApQAHAnAJApQAHAigCAkQAtA8AVBBQAWBDAIBEQAIBEADBHQADBEAlA3QAnA5gUA1IgHAAQgFAAgFgCg");
	this.shape_8.setTransform(-20,-64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApyFhQg1gggtguQg0g1AUhRQAzjGDhgkQD/gogQjmQgEgyAfgpIAGgDIAEgCIALgBIAAgBQBgCDCgAjQAUAFATgBQE9gOEvAuQAYAEAGAYQApCoiBB0QkyEYmOBnQhoAahkAAQjJAAi1htg");
	this.shape_9.setTransform(38.7,73.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjWMnQhpgYgThaIg0kBQhPmNidlyQhfjhgjjrIAEgFIAGgGIAFgGIAGgGIAGgFIAGgGQADgCAEgBIALgCIAAgBQDXgCClCQQAWATAfAMQDMBSC+BtQESCbCjEQQAoBDAKBSQASCfBlCGQAhArgEA5QgODej4AIQhAABg8AZQi3BKi7AAQhqAAhtgZg");
	this.shape_10.setTransform(62.6,-46.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBwQgHAAgIgCIgHgGIgEgFIgCgGIgCgGIAAgFIABgGQACgJAFgJQAIgNAAgOQAAgSANgMQARgPAQgOQAGgFAEgIIABgDQgugHgxgJQgOgCgCgPIAAgGIABgGIABgFIAEgGIAFgGIAIgCIALgCIAAgBQA1AAAzAEQAlADADAkQADAfgJAcQgKAdgfANIgJAFIgFAGIgBAGIgDALIgEARQgEANgIAKQgIALgPAAIgCAAg");
	this.shape_11.setTransform(-29.5,-110.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiKOdQhPgSgxhGQiWjTAKkNQAGiwgdisQgljfBAjUQARg6Agg1QBiimBhieQAegxA6gIIBGgMQAqAAApAFQAZADAUASQAUASAbgBQAcgCANAYQAFAIgDAJIgCAGIgDAFIgFAGIgEADIgDACIgLADIgIABIAAAGIAAAGIAAAGIgBAFIgBAGIgCAFIgEAGIgGAGIgFADIgNADQgZDaB2DNQAbAvgDA7QgKDLBsCoQANAUAEAcIA7GmQAWCdilAoQirAoiVBMQgjASgmAAQgVAAgWgGg");
	this.shape_12.setTransform(-44.5,-30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhfAdQgSgFgQgLQgEgDgCgEIgFgGIgCgCQgSgRAFgXIACgEIAEgDIAFgCIAHgCIAAAAQAEABAEACQAEADADAEIAFAGIAGAIIAGAHIAFAIQA+AdBEgLQBCgIA3AZQAFADACAGIgBADIAAAEIgCAEIgCADIgEAEQgqAGgoAAQhTAAhPgZg");
	this.shape_13.setTransform(82.2,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiFWIgFgDIgDgEQgHgjAIgiQAPhCAXg/QAVhAABhFQABhBASg/QARg+AFhAIABgVIgDgFQgKgMgNgIQgigTgfAVIgfAVQgMAHgPgHIgEgEIgDgDIgBgEIgBgEIgBgDIAAgEIABgDIABgEIACgDIADgEQAEgEAGgCIANgCIAPgHIAagOQAJgEAIgBIAgABQALAAALADQAJADAIAFQAKAGAHAKQAHALALAIQAGAlgIAmQgQBEgJBFIgTCIQgKBHgVBFQgTBCgGBEQgBAMgKAGIgIAAQgFAAgEgCg");
	this.shape_14.setTransform(-49.6,-94.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABxEXIgng7Qghg1gmgyQguhCg1g8Qgrg0AEhDQACgUAFgWQARhIA9gmQAYAAAYABQAKABALADQALADAIAIQAJAIgDAKIgCADIgCAEQgEADgEACQgDACgDAAQgFAAgFgBIgQgEIgLgCIgBAEIgBADIgBAEIgCAEIgDADIgFAEIgFADIgSAEQgXAVgGAeQgIAmAEAmQACAhAXAcQAqA0AlA3QAkAzArAvQApAsgJAyIgDACIgCABIgHABIgKgCg");
	this.shape_15.setTransform(17.6,-116);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAxCJIgHgGIgEgFIgCgGIgCgFIAAgGIAAgGIACgFIAEgGIAFgGIAEgFIAAgRQAAgMgDgKIgHgeQgGgZgYgPQgygfg2gbQgQgHADgSIACgFIACgGIAEgFQADgEAFgBIAOgEIAAgBQAqALAlARQAoASAbAfQAcAhAJAnQAJApgJAsQgIApgkAAIgMgBg");
	this.shape_16.setTransform(27.2,33.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5BoQg0gjgGg7QgEgdAAggQAAgOgBgOQgDgbAKgYIAGgFQADgDAEgBIALgCIAAgBIANAFIAIAFIAEAGQAJAdgBAhQgCAlAJAgQAKAlAkAQQAzAYA3ALQAPADAEAOIgBAGIgBAGIgDAFIgDAGIgGAGQgVAEgVAAQhCAAg5gng");
	this.shape_17.setTransform(19.2,-25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhYCcIgHgGIgMgLIgKgMQgEgFgCgGQgCgFAAgGIABgLIAFgFQAGgGAHgBQAMgCALAEQANAFAMAHIACACQBBAGAdgzQASggADgiQADghgBgjQgBgcAFgcIADgGIAEgFIAFgEIAEgCIALgBIAAgBIANAEQAEACAEAEIAEAFQAKAmgBApQgBAvgLApQgLAugfAkQgoAvg7ACIgUAAIgpgBg");
	this.shape_18.setTransform(-23.4,-35.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiZN0QgggTgVglQg4hkAMh8QAllphklOQgOgvAEgzQAclJDwjvQBqhtB4hOIA9ABQARABAMAMQAJAIALACQAOAEAOAGQAIAEAIAGQgIDtg/DpQgPA4AJA6QAXCug0ChQgfBigKBmQgWDeB8C2QBJBshQBcQhrB6iAAAQhZAAhmg9g");
	this.shape_19.setTransform(-73,-31.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag7McQgPgGgPgNQiAh4g0iaQhLjdg9jjQgmiPhBiJQgTgngDguQgGhphKhHQjUjMDpigQDEAUC9A+QBcAdBNAwQCpBqB3CqQB0ClB3CiQAtA8AdBFQBCCiAgCoQBXB5g7CMQgeBHhHAqQivBqi+AAQiKAAiPg3g");
	this.shape_20.setTransform(76.8,-57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AlKFhQjfgPi+hqQgMgXgCgbQgLi2C5g+QCug8ByiLQAogwA6gSQBcgbBZARQB8AZCEgFQBggDBWgjQB8ACB5AUQBIAMANBJQArD5jtB8QjNBsjgBDQi2A4jAAAQgqAAgrgDg");
	this.shape_21.setTransform(40.7,89.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjABDIgEgDIgBgEIgBgDIAAgEIAAgDIABgEIADgDQAmgUApgQQAhgKAfgPIAJgDQAhgJAagTQAXgQAcgEIAAgBQApAAApACQALABALACQAQADAIANQADAFAAAGIgCADIgCAEIgCADIgGAEIgIADIgLgDQhcgahNAyQgPAHgSAIIgIAEQgtAXgtAVQgSAIgSAAQgMAAgMgEg");
	this.shape_22.setTransform(92.7,86.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjfA5QgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgDIgBgEIgBgEIABgDIABgEIACgDQAigSAogIQBBgLA+gVQAzgTA1gQIABAAQAzAAAyAFQAXACAMAVQAMAVAAAYQABASgOALIgJABQgFAAgEgBIgGgDIgCgEIgBgEIgBgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIgDgEIgDgCIgEgDIgCgEIgCgDIgBgEIAAgCQhmgHhgAkQhCAahEASQgRAEgQAAQgQAAgPgEg");
	this.shape_23.setTransform(92.4,84.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBZQhBgghMgRQg7gNg6gYQg1gVgDg1QgFhFBAgnQAUgMATgFIAIADIAFAEIADADIACAEIABADQABAGgEAFQgJANgPAGQgJAEgHAHIgIAHIgLALIgDAEQAEAKADAMIAFARQABAJADAHQAGANANAFQAbAKATAUQADACABAEQBJAiBSAJQAxAGAtAdQAyAgA0AbQAlATAMAgIgBAEIgCADIgDAEIgCACIgDABIgHACQhkg6hpgyg");
	this.shape_24.setTransform(41.8,-128.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AheBtIgEgEIgDgDIgBgEIgBgEQAGgYALgXIARgoQAIgVAPgSQAVgZAZgUQAigaApgHIAJAAQAFABAEACIAFADIADADIABAEIACAEIAAADIAAAEIAAAHIgCAHIgCAIIgFADQgGADgIACQgIADgGAHIgNAOQgGAFgHgBIgKgDIgEgDIgDgDIgCgEIAAgEIgBgDQgQAGgKAPQgOAQgJATIgNAhIgLAcQgIARgJAQQgGAJgJAAQgEAAgGgCg");
	this.shape_25.setTransform(-61.2,-111.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHA6QgagKgZgNQghgRgUgbQgIgMgDgNIgBgLIACgFIADgHIAFgFIAEgEIAFgBIAKgCIAAAAQAQAGAPgDIAPgCQALgCAMABQARABAKAMQALALAIANQAHAKgCANIAPAFQANAEAOABIAaAEQAHABAGADQAEABADAEQAFAFADAGIACAFIAAAGIgCAGIgCAFIgDAGIgGAGQgeAMgdAAQgfAAgcgNg");
	this.shape_26.setTransform(34.1,-128.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbBHQgTgVgCgaQgCgXAAgVQAAgOgCgOQgCgWAKgRIAEgGIAFgEIAEgBIALgCIAAgBIANAFIAHAFIADAGQAIAKgBAMIgBAiIgBAgQAAAWAUAMQAPAIAIAPQAEAIgDAJIgCAGIgCAFIgFAGIgEAEIgEACIgLACQgegHgVgYg");
	this.shape_27.setTransform(-17.3,68.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA8AuIgHgGIgGgGIgGgFIgGgGIgFgGIgEgBQgpABgpALQgQAEgRgKIgMgKIgCgGIgBgGIgBgDIABgGIABgGIAEgFIAGgGIAGgFIAFgEIAEgCIAPgFIAIgCIALgCIAAgBQAqAAAnADQAVABAPAQIAZAbQALAOgFAPIgEAFIgEAGQgEADgEACQgGADgHAAQgHAAgIgCg");
	this.shape_28.setTransform(53.4,-93.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaBwIgPgCIgHgGIgEgGIgCgFIgCgGIAAgGIABgFQACgGAEgFQAEgGAGgGIAOgLQAJgHAGgKIAHgMIAAgFIgCgKIgEgRIgCgRQAAgMgHgLQgGgHgBgKIgBgLIADgGIADgGIAEgFIAGgEIADgBIAJgCIABgBIANAFIAJAFIALAQQAKANAAAQQAAASAGAQQAGARgBAPIgCAjIgBALQgEAGgFAEIgYARQgMAJgJAKQgJAMgPAAIgCgBg");
	this.shape_29.setTransform(-56.9,7.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag/A3IgHgHIgKgKIgKgMIgJgLIgKgLIgQgQIgEgFIgCgGIAAgGIAAgFIAAgGIAAgGIACgFIADgGIAGgFQAEgDAEAAIALgCIAAgBQAHABAFAEQAHAEAFAGIAJALIAJALIAJAMIAKALQBFALBVAGQAOABAEAOIAAAGIgCAGIgCAFIgEAGIgFAGQguAQgvAAQgrAAgugOg");
	this.shape_30.setTransform(-38,-26.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiHAXQgCgBgBgDIgDgFIgCgGIAAgGIABgDIABgGIAFgGIAEgGQBzABBqgSQANgDALAAIANAEQAEACADAEIAEAFIAEAGIACAFQgJAkgrAIQgxAJguAAQhCAAhBgRg");
	this.shape_31.setTransform(31.4,-15.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhHB2QACggAegTQAdgTAIgiQAEgZABgcQAAgaACgaQACgVAJgSIAGgFQADgDAEgBIALgCIAAgBIANAFQAEACAEADIAEAFQAMAfgIAhQgIAjACAkQACArgcAhQgZAegfAUQgOAJgLAAQgSAAgJgZg");
	this.shape_32.setTransform(29.6,43.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AnXDlQhkgPhZgvQhUgsAjhJQDpiHEbAgQAOACAQgDQDHgjDCg9QBOgYBOgfQBKgdBQgEQAlAAAmABIAVADIAZAEIANADQB1CeivBFQiuBDizAyQiyAyiyAsQh0Ach2AAQhIAAhIgKg");
	this.shape_33.setTransform(41.8,100.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AFoLmQiUi3gIjwQgIjjiOikQg1g+gvhCQg1hHhIg5IjEibQh3hehtgsIgCAGIgCAFQAAADgCACIgFAHIgEADIgEACIgLACIgPgFQgEgBgEgEIgFgFIgGgGIgGgGIgDgFIgDgGIgBgGIgCgEIgJgNQgHgHgDgKIAAgFIABgGIAFgLIADgGQADgDABgDIACgLQABgGACgFQAHgMAIgMQALgRASgLIAQgKQAKgHALgEIAOgFQIQhFEYGkQBjCUBvCMQBrCIBaCQQAZAoAKAwQA8EPhbD9QgPArgtAVQguAWgoAAQhLAAg6hIg");
	this.shape_34.setTransform(88,-70.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjKKGQgJiugciqQgnjogGjwQgIkHCVjVQBJhoBphFQBVg2BjAIIACgGIAEgFIAGgGQADgCAEgBIALgCIABgBIAHABQAHABAGADQAEACAEADIAEAFIAEAGQhnCdhzCfQgsA9ACBOQAHDPg8C8QhEDHBNDBQA8CcAWCoQAGArAdAiQAnAtgPA4Qg6AMgvAAQjQAAgMjzg");
	this.shape_35.setTransform(-77.8,-32.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgCIAAgBQgWgCgWgFQgFgBgCgEIgEgFIAAgDIABgEIABgEIACgDIAEgEIAFgCIAHgBIAAgBQAWAAAVACQANABAPADIAcAFQAQACALAMQAFAEgDAIIgCAEQgDAGgGACQgTAGgTAAQgTAAgQgGg");
	this.shape_36.setTransform(10.7,121.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAIAyIgTgVQgIgIgKgFQgTgHgKgOQgIgOAAgQIAAgFIACgGIAEgGIAFgEQAEgDAEgBIALgCIAAgBQARACAJAOQAGAKALAHQANAGALAKQANAKALALQALANABAPIgBAHIgCAFIgEAFIgFAGIgGADIgLADQgSgBgMgNg");
	this.shape_37.setTransform(70,-144.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhRBDQgIgBgHgDIgIgFIgEgFQgFgOADgOQAFgaAYgNIAsgYQAegRAhgIQAOgCANgBIAAAAIALACIAQAEQAIACAIAFQAGAEAFAGQAEAFABAGQABAFgBAGIgCAFIgEAGIgGAGIgFADIgMABQgRgCgQABQgVABgTAFQgeAMgZAYIgSATIgHAGIgIABIgDAAg");
	this.shape_38.setTransform(-61.9,-87.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglBWQgEgCgDgEQgEgFgCgGIgCgLIAAgLIABgGQAEgGAFgDQAPgKAIgPQAIgMACgPQACgOgBgOQAAgLAEgLIADgGIACgFIAFgFIAEgBIALgCIAAAAIANAEIAIAFIAEAGQAIAMgBAQIgEAoQgCATgJAUQgKAVgQAOQgMALgMAIQgEADgGAAQgIgBgHgDg");
	this.shape_39.setTransform(54.2,67.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiBBLQgEgCgDgGIgCgGIAAgGIABgFIABgGIAEgFIAFgGQBCgGA7gbQAdgMAYgYQAPgQAMgSQAFgJAIgIIAIgCIALgCIAAgBIANAEQAEACAEAEIAEAFIAEAGQABAfgXAbQgZAdghAaQgnAggxAOQgTAFgSAAQghAAgegSg");
	this.shape_40.setTransform(105.2,-22.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAFA1QgQgIgRgLQgOgLgQgIIgHgFQgOgLgLgQQgEgIABgIIACgGIACgGIAEgFQADgDAFgCIAOgEIAAgBQASACALANQANAPASAJQAOAJARAGQARAGATAAQAUABAIATIACAFIAAAGIgBAGIgDAFIgDAGIgGAGQgSAHgSAAQgUAAgUgIg");
	this.shape_41.setTransform(-12.2,78.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAgBKQgHAAgHgDQgFgCgCgDIgFgGIgCgFIgBgGIgBgGIAAgFIAAgGIgBgGIgFgFIgFgGIgKgLQgGgEgHgFIgRgMQgLgGgCgLIgCgMIAAgFIADgGIADgFIAGgGQADgCAEgBIALgCIABgBQASACAPANIAbAZQAOAPAMARQAMAQAAAWQAAAUgQAOIgFAEIgIABIgEgBg");
	this.shape_42.setTransform(63,-86.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdAkQgIAAgHgCIgIgGIgFgFIgGgGIgGgGIgDgFIgCgGIAAgDIAAgGIABgGIADgFIAEgGQADgDAEgBIAPgFIAAgBIAWALIAFABIA9AHQALABAJAHQAIAGADAHIAAAGIgCAFIgCAGIgEAGIgFAFQgDACgDABQgfACgdAAIgZgBg");
	this.shape_43.setTransform(-64.1,14.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAFBaQgGgBgHgCQgNgIgGgOQgHgQACgTQABgRAAgPIAAgiQgBgRAEgRIADgGIAEgFIAFgEIAEgBIALgCIAAgBIALAFQAFACADADIAEAFQAHAHgBAKIAAAdIAAAcIgBAbQAAAOAFAOQAEALgGAMIgGAFIgEAEIgEACIgIABIgDAAg");
	this.shape_44.setTransform(-48.8,-39.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhdA5IgCgFIgCgGIAAgGIAAgFIACgGQAJgPAQgCQAigFAbgSQARgOANgTQAMgPAUgGIAPgEIANAEIAHAFIAEAGIAEAGIACAFQgBAYgRAQQgWATgcARQgRAKgRAIQgeAOghAFIgFAAQgOAAgHgNg");
	this.shape_45.setTransform(20.8,56.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhQAdIgCgGIAAgGIABgFIABgGIAEgGIAFgEQAKgCAKgBQAXgCARgPQAMgLARgFIAXgFIAMgCIAMAFQAFABADAEIAEAFIAEAGIACAFQAAASgPAFQgZALgWARQgMAJgNADQgYAGgYAAIgBAAQgVAAgGgTg");
	this.shape_46.setTransform(48.8,-16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgtA0QgWgGgUgMQgNgHgKgKIgGgGQgIgJAAgLIABgGIACgFIADgGIAFgGIAEgGIADgFIADgGIAGgFQAEgCAEgBIALgCIAAgBQAYABAVAOQASANARAIQAPAHAQADQAeAGAfADQAYABAHAVIgBAGIgBAGIgDAFIgDAGIgGAGQgpAPgtAAQghAAglgJg");
	this.shape_47.setTransform(-5.4,118.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AIoKtQgeiegviZQguiUhhh5QiRizhvjCQjElYmbggIh1gKQgLgBgMgEIgDgGIgCgGQgEgIACgJIABgGIgBgLIAAgLIACgGIACgGIABgFIACgGIABgGIABgFIACgGIAEgFQAEgEAEgBIATgHIASgFIAAgBQD9grDFCcQC4CUCdC2QCeC3B9DMQBgCeBOCnQAsBeAFBtQAHB/hGBTQgygigOhGgAkNqQIAKAGIAHAGIAIAFIAHAGIAIAFIAIAEIAFACQAFAAACgBIgDgCIgIgGIgJgGIgRgLIgTgIIgBAAIgDAAg");
	this.shape_48.setTransform(91.8,-80);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AALB8QgIgBgFgDQgEgBgDgEIgFgFQgFgRgDgRQgEgXgGgWQgGgXgBgVIgCguQgBgXAFgWIACgGIAFgFIAFgEIAEgBIALgCIAAgBIALAFQAEACADADIAFAFQAIAQgBASQgBAaABAZQACAYAGAaIAMAtQAHAdgVAUIgEACIgHABIgEAAg");
	this.shape_49.setTransform(-97.9,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA5J6QgUgCgKgPQgHgHABgKIAAgcQgBgPgIgOQgHgOgIgMQgLgNgEgRQgBgEgDgEQgzgeAShEIAdhuQAOg3ADg7QACgzgCg0QgBgvgSgqQhFgeAAhOQgBhBAFhBQAFhBAEhCQADg8AGg8QAEgxAJgvIAEgGIAFgEIAEgBIALgCIAAgBQAmASAAAxIgEBPQgDArABArQABAogFAnIgJBEQAAABAAABQAAAAAAABQAAABAAAAQAAAAABABQADAEAGADIAHAGIACAFQABBXAdBTQAeBYgEBjQgEBZgUBXQgWBgAsBTQAnBIAGBJIgGAFQgEADgEABIgOABIgOgBg");
	this.shape_50.setTransform(-95.9,-4.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AjSKfQgGiogLinQgMi4gPi3QgQjCBLirQBDiZBAiaQAcgfAggcQAagXAZgaQAXgWAYgWQAsgnA7gDQARgBANgEIANAFIAIAFIAEAGIADAFIADAGQiRCHhxClQg4BSgVBnQgoDFAMDLQALDMAEDNQAEDLAWDJQAFAtgVAjQh8g7gGitgAiWJdQACARgBARIgCAiQgBASAHAQQAIARAEASIgCgdIgEgiIgEgiIgFgiQgDgUgCgUIgBAAIAEAigAi/ibQADBHAABHQgBBGANBFQAMBHgDBJQgCA3AKAzQADhEABhHQABhIgFhGQgGhHAAhFIACiOQABg/gHgvQgZBEADBKg");
	this.shape_51.setTransform(-82.4,-32.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ao2CcQg0gKgkgqIgEgGQgHgZgFgaQBrgvCMAXQFEA8EthpQCJgwCDg/QBCggBCgPIAmABQAGAAAHADQAEACADAEIAFAFIADAGIACAFIAAAGIAAALIAAAMIgCALIgDALQiKBCiaAmQhVAXhSAtQiTBRiiATQhjAMhfAAQiLAAiCgZgAiABnIAZAAIAOgBIgnABgApRBOIABABIAGADIANAFIAJAGIAEAFIACAEIEdABQhxgDh8gKIgLgBIgUgEIgJgCQgSgFgRAAIgIAAgAggBeIgHABQAIAAALgCIgCgBIgKACg");
	this.shape_52.setTransform(43.2,110.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgwBEIgHgGIgEgFIgCgGIgCgGQgBgJADgIQAGgOAIgMQAJgMALgLIAWgXQAKgMAPgJQAGgDAIgCIANAFQAEABADAEIAEAFIAEAGIACAFQAAANgIAKQgOASgSAPQgLALgIANIgMAVQgKAOgPAAQgHAAgJgDg");
	this.shape_53.setTransform(-73.6,-79.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgoAwIgIgFIgDgGIgCgFIgCgGIAAgGQABgFACgFQAIgLALgLIASgQQAGgHAIgEQAGgGAKgEIALgDIANAGQAEABADADIAFAGIADAFIACAGIgCALQgEAPgPAIQgMAFgIAKIgMAMQgGAJgLAEQgGADgFABQgHgCgIgDg");
	this.shape_54.setTransform(49.2,76.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgYBGQgMgDgKgHQgEgDgDgGIgCgGIAAgFIABgGQACgGAEgEQAHgHAIgGIAQgLIAAgEIAAgLQAAgJADgIQADgKAGgIQAFgKAMgFIAOgFIANAFIAIAFIAEAFIADAGIACAFQAAAGgCAGIgJAYQgEAIABALQABANgHAKQgKANgNAKIgLALIgMADIgGAAIgIgBg");
	this.shape_55.setTransform(117.4,-32.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAAAlIgKgCIgXgFQgWgGgJgVQgEgGABgJIADgFIADgGIAEgFIAGgEQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIALgBIABgBIAWAJQAGACAGABQATACAUAEQALACAJAGQAIAGADAHIgBAGIgBAGIgCAFIgEAGIgGAGQgIADgJABIgcABIgJAAg");
	this.shape_56.setTransform(-2,82.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCA1IgHgGIgIgLIgHgRIgHgRIgHgPQgDgIABgJIACgGIAEgGIAEgFIAFgEIAEgBIALgCIAAgBIALAFIAKAFIAEAFIAFAMIAGARQACAJAFAGIAHARQADAIgFAJIgCAGIgGAFIgEAEIgEACIgLABIgNgDg");
	this.shape_57.setTransform(67.4,-78.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgHAtQgSgJgOgQQgGgHgDgKIgGgVQgDgPAIgNIAEgFIAGgEIADgCIAMgBIAAgBIANAEQAEACADAEIAEAFIAEALIAEAMIACAFIAEAFIASAKQAIACAGAHQAFAFACAFQACAGABAGQAAADgBACIgCAGIgCAFIgFAGIgEAEIgEACIgLACQgTgGgPgJg");
	this.shape_58.setTransform(-71.4,11);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWBbIgHgGIgEgGIgCgFIgCgGQgCgMAGgMQAHgPADgRQADgPgBgSIgCgiQgBgWASgKQAGgEAHgCIAMAFQAFACADADIAEAFQAJANgCAQQgBAUAAAUQABASgEATQgEAUgHAUQgLAagUAAQgGAAgIgDg");
	this.shape_59.setTransform(-48.2,-54.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgdAjQgLAAgKgHQgFgEgCgGIgCgFIAAgGIAAgGIACgDIAEgGIAFgGIAIgDIALgDIAggIIATgFIAAgBIAIAAQAGABAGADIAIAFIAEAGIAEAGIACAFQAAAIgFAHQgMATgYAFQgTAEgUAAIgJAAg");
	this.shape_60.setTransform(10.2,62.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgcAvQgEgBgDgDQgEgGgCgGIgCgLQgBgFABgGIABgGIAEgDIAEgGIAHgGIAFgFIAIgMIAGgLIAHgFQABgDAEgBIALgCIAAgBIANAFQAEACAEADIAEAGIAEAFQABAGgBAGQgCAIgEAHQgHAKgEAMQgEAMgJAIQgIAHgIAEIgLAEIgPgGg");
	this.shape_61.setTransform(57.9,-22.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AjdBqQgOgDgCgPIAAgGIAAgFIACgGIADgFIAGgGQBrABBjgnQAugSArgZQAkgVAlgTQAegPAPgbIAGgEIADgBIAMgCIAAgBIANAFQAEACAEADIADAFIAEAGIADAGQgOA9hBAZQg4AXg3AZQg3Aag6AUQgvAQgxAAQgfAAgegGg");
	this.shape_62.setTransform(85.6,104.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhSAyQgwgLgtgYIgNgGIgKgDQgugHgEgrIABgGIACgGIAFgFQADgDAEgCIAOgEIAAgBIBUApQApAUAsAKQAYAGAZABQBuACBuAEQAYABAGAXIAAAGIgBAFIgCAGIgEAFIgFAGQg6AHg5AAQhnAAhlgWg");
	this.shape_63.setTransform(0.3,122.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ADIAzQgdgcgqgDQgxgEgwgKQhvgWhmApQgsATgfgaIgCgFIgCgGIAAgGIAAgDIACgGIAEgFIAPgMIAHgFIAKgFIAlgLQAMgDALgGIAMgFIALgDQAqAAApADQAuADArAHIBWANQAsAHAqAMQArALANAjIAAAGIgCAGIgCAFIgCAGIgFAFIgEAEIgEACIgLACQgSgBgNgMg");
	this.shape_64.setTransform(50.7,-148.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("ABbFrQgIgBgHgDQgEgBgEgEIgEgFQgNg1ADg3QAEhGgJhDIgUiXQgMhTgyg/Qg5hFglhLIACgFIADgGIAFgFIAFgFIAEgBIALgCIAAgBQBCAxAxBFQA0BFARBTQARBSAIBRQAJBUAGBXQAFBFgeAzIgHABIgEAAg");
	this.shape_65.setTransform(147.4,-39.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAwFFIgPgDQgqg2gUhGQgWhGgNhJQgMhBADhFQAChCgChBQgCg1AKgyIAGgFQADgCAEgBIALgCIAAgBIANAFQAEACAEADIAEAFQAKA6gCA+IgECIQgCBBAOBBQARBBAbA/QAXA1AIAzIgEAGIgGAFIgGADQgEACgFAAIgCAAg");
	this.shape_66.setTransform(-97.8,17.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AjGEQIgIgEQgYg5AggzQAagsAXgxQAbg7Amg0QA1hJBIg2QBIg0BJgyIABgBIANAFIAHAFIAEAFIAEAGIACAFQAAANgIAKQgOASgTAPIggAZIgSANQgUALgYADQgeAjgjAeQgcAZgTAiIghA6IghA8QgTAkgLAmQgGAYgTARIgBAFIgBAGIAAAGIAAALQAAAGgDAFQgCAGgFAFIgHAHQgGABgHAAQgHAAgIgDg");
	this.shape_67.setTransform(-84.4,-95.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgCA0QgIgBgHgDQgEgBgDgEIgFgFIgBgGIgCgLQgBgGABgFIAFgPQADgJgBgJQgBgJAHgIIAGgFQADgCAEgBIAJgCIAAgBIANAFQAEACAEADIAEAFIADAGIACALQABAJgCAIIgEAPIgEARQgCALgJAGIgGAEIgHABIgCAAg");
	this.shape_68.setTransform(-78.2,-70.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgdAqIgHgGIgEgGIgCgFIgCgGIAAgFIABgFQACgGAEgDIAQgSIARgQQAEgEAEgCIALgDIANAFQAEABADAEIAEAFIAEAGIACAFIgCAMQgDAHgHAHIgQASQgJAIgIAGQgGADgIAAQgHAAgIgCg");
	this.shape_69.setTransform(44.3,79.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHBOQgHAAgIgDIgHgFIgEgGQgCgFgBgGQgBgLACgMQACgOAGgOQAGgMgBgPIgBgWQAAgKAHgHIAEgGIAFgEIAEgBIAJgCIAAgBIANAFQAEACAEADIAEAFQAHAIgBAKQAAAOABAOQAAAPgGALQgGAOgDAOQgCAPgHANQgEAJgHAEIgGABIgEgBg");
	this.shape_70.setTransform(120.9,-41.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAAA9IgFgHIgHgKQgFgIgCgKQgCgIgFgJIgIgPQgFgKgDgMIgBgLIACgGIADgGIAGgFQAEgDAEgBIALgCIAAgBQALAFAJAHQALAHAEAOQADALAGALQAGAJAEAMQAEALgBAMQAAAGgCAGIgEAFIgGAGIgGADIgLABIgPgCg");
	this.shape_71.setTransform(-76.3,4.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgNA0QgEgCgDgDIgFgFIgBgGIgCgLIAAgRIAAgPIgBgSQAAgJAGgIIAFgFIAFgEIAEgBIAJgCIAAgBIANAFQAEACADADIAFAFIADAGIACALIAAARIAAAPIgBARQgBAJgFAIQgEAIgIAEIgLABQgGgBgHgDg");
	this.shape_72.setTransform(-49,-64.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ah0ArIgHgGIgEgGIgCgFIgCgGIAAgGIAAgFQACgJAIgIQATgVAegCQANgBANgDIAIgCIAJgCIATgDIBwAAQAQABAJAOIAFALIAAAGIgCAFIgCAFIgDAFIgGAGIgGABQhUgFhNAaQgfAKgfAAIgGAAg");
	this.shape_73.setTransform(40.1,-149.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAVEMQgIgBgHgDQgEgBgCgEIgEgFQgGgtACguQADg3gFg2QgFg1AAg0QAAg5gZgyQgZgxAKgxIAGgFQAEgCAEgBIALgCIAAgBIANAFQAEABADAEIAFAFIAdBdQASAzABA3QAAA3AGA4QAFA5AEA5QAEA4geAnIgHABIgEAAg");
	this.shape_74.setTransform(153.6,-31.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AjqC5QgkgyA1glQAwgjAtgnQAoggAtgcQBCgrA9gvQA7gtBIgRIANAFQAEACAEADIAEAFIADAGIACAGQgjA3hHAeQgXAKgaANQg8AdgyAoIhfBOQgxAngnAtQgJALgMAAQgGAAgIgEg");
	this.shape_75.setTransform(-74,-106.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAwD3QgegogMgzQgKg2gSgzIgnhjQgTgxgGg0QgFgtAKgpIAEgFIAGgFIADAAIAMgCIAAgBIANAEIAHAGIAEAFQAGAsADAvQACA1ATAwQARAtAUAvIAoBbQAXA2gQAuIgEAEIgEACIgLABQgIgBgHgBg");
	this.shape_76.setTransform(-96.3,33);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAOA8QgkgLgkgQQgXgJgUgQIgHgGQgEgCgFAAQgngJgQgfIgBgFIABgGIABgFIAEgGIAGgFQADgDAEgBIALgCIAAgBQAjAEAbAVQAcAVAgANQAgAOAjAIQAOAFAPABIBEAEQAYACAHAXIgBAGIgBAFIgCAGIgEAFIgFAGQgbAFgaAAQgvAAgvgPg");
	this.shape_77.setTransform(-7.3,121.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AilBWIgCgFIgBgGIgBgGIABgFIABgGQAzgkBAgTQA0gNAqgeIAwgiQAOgMARgJQAKgFAJgBIANAFQAEACADADIAFAFIADAGIACAFQgPAqgqAZQgiASgkASQguAXgwAUIhEAcQgJADgIAAQgRAAgMgQg");
	this.shape_78.setTransform(91.7,105.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Ah4AlQgDgBgEgEIgEgFIgCgGIgCgFIAAgGIAAgGIACgEIAEgFQAMgMASgEQAagFAZgEIAjgFIALgCIAJgBIAAgBIBiABQARAAAIAOIAGALIAAAGIgCAGIgDADIgDAGIgGAGQgCACgDAAQhagChVAWQgRAEgQAAQgPAAgOgDg");
	this.shape_79.setTransform(32.2,-151.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgdDBIgIgFQgNghAFgjQAFgsAQgqQAPgmgDgtQgCgogFgnQgGg0AngOIANAEQAEACAEAEIAEAEQAKAhgCAkQgCAoACAoQACAngOAmQgPAnABAoQABApgXAcQgGACgHgBQgHABgIgDg");
	this.shape_80.setTransform(158,-17.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAlCKQgMgBgMgFQgLgZgKgWQgRgegFgfQgFgdgSgZQgSgagCggQgBgpAkgIIANAFIAIAFIAEAFQAJASADAVQACAbANAaQAMAYAJAWIATAxQAJAWAKAXIABAFIgCAFIgEAGQgFAGgHADQgHADgIAAIgEAAg");
	this.shape_81.setTransform(-92.1,49.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AjLB6IgHgGIgEgFIgCgGIgCgFIAAgGQAQgmAlgbQAhgZAmgMIBogoQAsgQApgVQAvgYAvgNIANAFQAEACADADIAFAFIADAGIACAFQgcA0hDAWQgyAQgyARIhkAoQgjAOgXAdQgYAdggAAIgNgBg");
	this.shape_82.setTransform(-57.3,-119.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ah/BJIgDgGIgBgGIAAgFIAAgGIABgGQAhgZApgQQAngOAjgVQATgLAOgPQAOgQAWgGIAPgEQAGABAHADQAEACADAEIAFAFIADAGIACAFQgJAegbAVQghAXgoASQgbANgcAPQghASglAFIgEAAQgOAAgHgMg");
	this.shape_83.setTransform(104.6,100.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AA8A9QghgFgegHQgdgHgagPQgpgYgXggIgBgFIABgGIABgFIAEgGIAGgFQADgDAEAAIALgCIAAgBQAYADAUANQAVANAXAKQAWAKAZAHQAbAGAaAFQAiAGgGAfQgEAOgNADQgOAEgNAAQgJAAgKgCg");
	this.shape_84.setTransform(-16.1,121.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhQAbQgEgFgCgFIAAgGIABgGIACgFIADgEIAGgGIAIgCIAhgIIAfgIQAPgDAOgJQAHgEAHgCIAPABQAHABAGADQAFACADADIAEAGIAEAFIACAGIgBAFIgBAGIgCAGIgEADIgFAGIgdALQgXAHgVAKQgLAHgPADQgIACgIAAQgYAAgPgUg");
	this.shape_85.setTransform(-40.3,-128.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AATBEIgIgFIgFgMQgDgIgBgIQgCgKgFgGIgTgTQgJgKgOgFQgQgIAAgSIABgGIABgFIAEgGIAGgFQADgDAEgBIALgCIAAgBQAWgBAOAPIAaAXQAQANAIASQAIAQADAVQACAWgTAMQgHACgGAAQgIAAgHgDg");
	this.shape_86.setTransform(-87.3,60.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgVBSQgEgBgEgEIgEgFQgEgIABgJQABgOAFgPQAEgNACgNQADgOAAgOIgBgdQgBgJAHgIIAGgFQAEgCAEgBIAJgCIAAgBIANAFIAHAFIAEAFQAHAHAAAKIAAAiQAAASgDAPIgHAiQgGAUgOANIgFAEIgJABQgIgBgHgDg");
	this.shape_87.setTransform(158,2.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag6ARIgDgFIgCgGIAAgGIABgDQACgGADgFQAFgHAGgFQAFgDAFgCIALgDQAcAAAeACQAIAAAFAEQAHAEAFAGIAGALIAAAFIgCAEIgCAGIgEAFIgFAGQgDACgDAAQghAFgeAHIgLACQgSAAgLgSg");
	this.shape_88.setTransform(21.9,-149.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AALAsQgJgFgGgGIgPgLQgHgFgIgEQgNgGgGgLQgEgJACgIIABgGIADgFIAEgGQADgDAEgCIAPgEIAAgBIAPAFQAKAFAHAGIANALIAQALQAKAHAGAIQAFAIgBAJIgCAGIgDAGIgFAFQgDADgEACIgNAFIgPgFg");
	this.shape_89.setTransform(-28.1,116.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhZA+IgCgGIgCgGIAAgFIAAgGIACgGQALgPATgIQAbgLAWgTIAgggQAOgNATgFIALgDIANAFQAEACADADIAFAFIADAGIACAGQAAAYgSAPQgWARgZAQIgkAaQgaARgeAFIgFAAQgOAAgHgMg");
	this.shape_90.setTransform(112.9,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Enemy_a_skull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Enemy_a_hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,0,0.008)").s().p("AlLImIAAuHICDAAIAAjEIGBAAIAADEICTAAIAAOHg");
	this.shape.setTransform(33.3,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,110.2);


(lib.BtnPlayAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:9,over:19});

	// timeline functions:
	this.frame_0 = function() {
		this.on("mouseover", function() { this.gotoAndStop("over"); });
		this.on("mouseout", function() { this.gotoAndStop("normal"); });
		this.on("click", function() { this.dispatchEvent("playAgain", true); });
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// hotspot
	this.instance = new lib.PLAYAGAIN();
	this.instance.setTransform(-23.3,-11,0.501,0.554);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.008)").s().p("AsrFLIAAqVIZXAAIAAKVg");
	this.shape.setTransform(70.1,35.1);

	this.instance_1 = new lib.PLAYAGAIN_ON();
	this.instance_1.setTransform(-25.3,-9.7,0.501,0.554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-11,237,102);


(lib.BtnPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":9,"over":19});

	// timeline functions:
	this.frame_0 = function() {
		this.on("mouseover", function() { this.gotoAndStop("over"); });
		this.on("mouseout", function() { this.gotoAndStop("normal"); });
		this.on("click", function() { this.dispatchEvent("play", true); });
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer 1
	this.instance = new lib.PLAY();
	this.instance.setTransform(-32.2,-14.4,0.5,0.5);

	this.instance_1 = new lib.PLAYON();
	this.instance_1.setTransform(-33.2,-13.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-14.4,233.5,84);


(lib.Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fadeOut:31,endScreen:42,endFadeOut:73});

	// timeline functions:
	this.frame_30 = function() {
		// Listen for "play" event triggered by intro
		this.on("play", function() {
			this.gotoAndPlay("fadeOut");
		});
		
		// Listen for "playAgain" event triggered by intro
		this.on("playAgain", function() {
			this.gotoAndPlay("endFadeOut");
		});
		
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		// Show score
		this.scoreText.text = AC(this).getComposition().get("score");
	}
	this.frame_72 = function() {
		this.stop();
	}
	this.frame_83 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(11).call(this.frame_41).wait(27).call(this.frame_68).wait(4).call(this.frame_72).wait(11).call(this.frame_83).wait(1));

	// btnPlayAgain
	this.instance = new lib.BtnPlayAgain();
	this.instance.setTransform(29.4,149.3,1,1,0,0,0,70.2,35.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({alpha:1},4).wait(1).to({alpha:0},2).to({_off:true},1).wait(8));

	// btnPlay
	this.instance_1 = new lib.BtnPlay();
	this.instance_1.setTransform(29,143.3,1,1,0,0,0,70.2,35.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({x:29.4,y:149.3,alpha:1},4).wait(1).to({alpha:0},2).to({_off:true},1).wait(50));

	// Layer 6
	this.scoreText = new cjs.Text("00", "bold 82px 'Arial'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 95;
	this.scoreText.setTransform(35.7,0.1);
	this.scoreText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scoreText).wait(72).to({_off:false},0).to({_off:true},4).wait(8));

	// Layer 5
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(39.4,35.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).to({y:5.4,alpha:1},4).to({y:35.4,alpha:0},3).to({_off:true},1).wait(8));

	// introText
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(37.5,92.7,1,1,0,0,0,2.5,52.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({alpha:1},4).to({alpha:0},3).to({_off:true},1).wait(50));

	// screen
	this.instance_4 = new lib.Intro_Panel("synched",0);
	this.instance_4.setTransform(47.5,-531);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:36},19,cjs.Ease.get(1)).to({y:-4},6,cjs.Ease.get(-1)).wait(8).to({startPosition:0},0).to({y:-566.6},7).to({_off:true},1).wait(1).to({_off:false,y:-531},0).to({y:36},19,cjs.Ease.get(1)).to({y:-4},6,cjs.Ease.get(-1)).wait(8).to({startPosition:0},0).to({y:-566.6},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.8,-779.8,480.5,592.9);


(lib.ProgressBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:20});

	// timeline functions:
	this.frame_0 = function() {
		// Initially stop
		this.stop();
	}
	this.frame_450 = function() {
		// Disptach "gameover" event when time is up
		this.dispatchEvent("gameover", true);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(450).call(this.frame_450).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1314").s().p("AgjCpQgugSgWg+QgWg+APhEQAPhGAsglQArglAsARQAuASAWA+QAWA/gPBEQgPBGgsAlQgdAZgcAAQgPAAgPgGg");
	this.shape.setTransform(-16.3,-1.9,0.474,0.44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1314").s().p("Ag+B5QgsgygMhGQgMhFAbgyQAagzAxAAQAwgBArAyQAsAyAMBGQAMBEgbAzQgaAzgxABIgBAAQgvAAgrgyg");
	this.shape_1.setTransform(11.3,-5.7,0.474,0.44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1314").s().p("AgrD4IABhKIhfgUIgCBNQh/gkhVhdQhXhfgPh6QgCgSAAgaQBYApBoARIABA2IBpATIACg9QBSAFBQgIQBVgJBSgWQAZBJAFACQAIABBNgkIgYhFQBngnBOg6IAIAqQATCqh3CEQh3CGi8ATQgYACgXAAQgVAAgWgCg");
	this.shape_2.setTransform(-0.2,13.2,0.474,0.44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6D22").s().p("AhvgdQALiPA2hIQAug/A+AQQAfAJAWAUQhkgLgyCTQg2CWASEPQg0inAMidg");
	this.shape_3.setTransform(-6.5,-4.8,0.474,0.44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC6D22").s().p("AhoHeQhjhygsk8Qgkj/AciOQAiiuCGgTQBzgQBWChQBEB/A5ECQA4D8gxCRQgtCDh5AYQgYAEgWAAQhQAAg6hCg");
	this.shape_4.setTransform(0.1,5.1,0.474,0.44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#367A72").s().p("AimC5QgdhdBEhAQAigdAogNQgmhXhIgdQgWgKgYgCIgSgBQAUgrAqgVQAVgKAQgCQBOATA5BTQAdAqAOAmQA+gBBAAtQAhAXATAXIjWCog");
	this.shape_5.setTransform(-5.4,-24.7,0.474,0.44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F07721").s().p("AAqAYQhXiQhCgOQgIgVAVgCQARgDAgAKQBEAbA4COQASAwAMAxQALAqgCABQgcg/gshIg");
	this.shape_6.setTransform(21.2,-14,0.474,0.44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F07721").s().p("AAjh2Qhbh1h8AoQCgiGBuDtQAnBSAbBwQAVBXAEA4Qg5j6hZhxg");
	this.shape_7.setTransform(10.6,-10.1,0.474,0.44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F07721").s().p("AhPChQgEgeAFgtQAMh3A8hrQAOgeApgMQAqgNgMAmQglAbgiBEQgvBfgbCZIgBAAQgIAAgEgZg");
	this.shape_8.setTransform(-28.7,-7.3,0.474,0.44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D76626").s().p("AhgH9QhQgyg0iOQBUCSBjgXQBbgVA0iWQA4idgcjJQgfjqiGjUQBUA2BLCrQBICjAZC6QAcDJgpCDQguCVh8ANQgSADgQAAQg1AAgrgbg");
	this.shape_9.setTransform(2,5.5,0.474,0.44);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C75226").s().p("AgrBMQhRnggPhvQBUAnBJCiQBGCYAgC7QAiDEgaCFQgcCUhfAOQASgLhCmtg");
	this.shape_10.setTransform(6.7,4.6,0.474,0.44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D76626").s().p("AiLFNQgIgGgMgGQgFgDADgRQADgRgFgDQAYgDATgZIAbgtQAegugBjeQgFjrADgsQAtBwAbCeQAbCUAIARQAKAUAPADQAQAEAMgSQAjg2AOiRQALh6gIhhQAbCCgPCQQgOCIgyB4QgRAqgfAgQgkAmglAFIg5AFIgPABQgcAAgMgHg");
	this.shape_11.setTransform(13.1,12.3,0.474,0.44);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC6D22").s().p("AgZIpQgmgJgngaIgggYQgajmgXjqQgunRAOgTIALgTQAPgWAUgSQA+g3BUAMQAyAHA6BfQA8BiAlCNQApCegECfQgEC6hBCdQgvByhYAAQgSAAgWgGg");
	this.shape_12.setTransform(10.1,2.3,0.474,0.44);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C75226").s().p("AAFHqQgMgJgEAAQALgFABhoQABhmgKiVQgdlyhEj4QBVBBA1CLQAyB+AQCgQAQCYgVCJQgWCNg2BLIgNgIg");
	this.shape_13.setTransform(16.2,0.8,0.474,0.44);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D76626").s().p("Ai7FCQANgIAMghIANgyQCpgcBHhxQBQh7ADkgQAXCXgPBxQgRCGhJBrQgXAkgkAdQgrAjg3ASQg8AUg7AAIgDAAg");
	this.shape_14.setTransform(23.3,9.8,0.474,0.44);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC6D22").s().p("AiqIUQADgDAUgcIAegpQgRgIgQgKIgNgIQgXjQgUjUQgommAOgSQAAgHABgJQAEgUALgQQAlg1BpgCQA0gBAvAmQAwAlAnBEIAIAMQAwBNAgBoQAfBmAEBaQACA+gBAkQgCA0gJAvQgVBxg/BcQgZAjgjAdQgtAjg1ASQgiALgoAGQgbAEgWAAQgRAAgNgCg");
	this.shape_15.setTransform(21,0.5,0.474,0.44);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F07721").s().p("AhuCNQgHhwANhXQAlj/C0AjQh2AlguCNQgpB5ABEGQgNg3gGhXg");
	this.shape_16.setTransform(-18,-5.7,0.474,0.44);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C75226").s().p("AAdG9Qg7hjgqipQg1jRAGjDQAHjOBHhNQAHAnBLIgQA6GjAVAGIgnANQgWgQgegyg");
	this.shape_17.setTransform(-7.3,6.3,0.474,0.44);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D76626").s().p("AA6GcQg6gJgegmQgpgrgig0Qgjg3gSgzQAIAIAzBXQA8BRA7gEQALgBgHguIgXiMQgokOAJkkQAIBuAMB2QAPC1AMArQAqCfAiBVQASAsAcAuQAOAWAGAGQgiANgkAAQgQAAgPgCg");
	this.shape_18.setTransform(-11,10.5,0.474,0.44);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC6D22").s().p("AgcHhQjSj+gSldQgHiKAbhtQAbhnArgdQBRg2BJAfQAjAPAVAaQATAOBkHMQAyDkAtDjQgUAsgvAaQgjAUgnAAQhDAAhOg3g");
	this.shape_19.setTransform(-11.1,5.4,0.474,0.44);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C75226").s().p("AAPGPQhKhwgxioQg1i0AIieQAJi2BbhkQAiCuBKHBQBDFvAhAMIgNABQg5AAhGhng");
	this.shape_20.setTransform(-16.7,5.6,0.474,0.44);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D76626").s().p("ABpHBQhHgTg0gvQhvhhgxhgQgyhfgTiVIANAyQASA4AaA3QBVCtCZBZQAFgOgDgSIgHggQhrliAJi2QADhJAXg7QAOglAig5QgYBOgGAiQgHAtABBDQAABMARB1QAPBwAUA4QAfBSA6BiQBKB8AyAOQgGgBgMAEIgVAHQgRACgRAAQghAAglgJg");
	this.shape_21.setTransform(-21.8,7.6,0.474,0.44);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC6D22").s().p("AgLG9QiDhgg/iVQg1h/AAiUQgBiAAlhwQAihnAsgfQBohKBGAcQAkAOAPAcQAUANBRGtQApDVAkDUIgIAaQgMAdgXAQQgbATglAAQhDAAhgg7g");
	this.shape_22.setTransform(-21.4,5,0.474,0.44);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E56924").s().p("AhtIRQgrgGgmgTIgegSQgVjfgSjjQgjnDAVgUIATgTQAZgWAggQQBkg2B4AXQBCAMBBBXQBEBaAiCCQAmCRgSCWQgVCvhfCeQh1Brh1AAQgSAAgRgCg");
	this.shape_23.setTransform(12.7,-1.5,0.474,0.44);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E56924").s().p("AgnHYQi4iwg/jYQg4i6AvioQAsidBsg8QBzhAB4BWQAXANBoG8QAzDcAvDbQgbAsg7AbQgvAWg2AAQhPAAhagwg");
	this.shape_24.setTransform(-15.8,1.9,0.474,0.44);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CF6126").s().p("AitGxQhzh0gxjLQgui9AhiqQAiizBog3QBggyBNgKQBGgIBTAXQAqAMBICdQBMCmAlC1QAsDWgnCLQguCniiAZQgfAFgfAAQiMAAhthtg");
	this.shape_25.setTransform(-2.5,-1.7,0.474,0.44);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0E0E0E").s().p("AgnC6QgygUgZhEQgXhFAQhLQARhNAvgoQAwgpAxATQAzAUAYBEQAXBFgQBLQgRBNgvAoQghAcgfAAQgQAAgRgGg");
	this.shape_26.setTransform(-17.6,-2.1,0.474,0.44);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0E0E0E").s().p("AhECFQgwg2gOhOQgNhMAdg3QAdg4A3gBQA0AAAwA2QAwA3ANBNQANBMgdA4QgdA4g2AAIgBABQg0AAgvg3g");
	this.shape_27.setTransform(12.8,-6.3,0.474,0.44);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0E0E0E").s().p("AgvESIABhSIhpgWIgCBVQiMgohehmQhghpgQiHQgCgaAAgVQBfArB1AUIAAA7IB0AWIADhDQBbAEBXgIQBegKBZgYQAbBRAHABQAIABBVgnIgbhMQBygsBWg/QAFAVADAaQAWC7iECRQiDCTjPAVQgaACgaAAQgXAAgXgBg");
	this.shape_28.setTransform(0.1,14.5,0.474,0.44);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0E0E0E").s().p("Ah7ggQAMieA8hPQAzhFBEASQAiAJAYAXQhugMg3ChQg7CmAUEpQg6i3ANitg");
	this.shape_29.setTransform(-6.8,-5.2,0.474,0.44);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0E0E0E").s().p("AhyIOQhth9gxlcQgokaAfibQAmjACTgUQB/gRBfCxQBKCLA/EcQA9EVg2CgQgwCQiGAaQgaAFgYAAQhZAAg/hJg");
	this.shape_30.setTransform(0.4,5.7,0.474,0.44);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0E0E0E").s().p("AikC+QgfhmAtg2QAWgaAdgHQgqhdhEgFQgWgBgVAIIgRAIQAXgwBEg2QAjgbAdgSQBWAWA6BPQAfAnANAjQBFgBBHA0QAjAXAVAaIjrC4g");
	this.shape_31.setTransform(-6.6,-26.5,0.474,0.44);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0E0E0E").s().p("AAuAaQhgiehIgPQgJgXAXgDQASgCAkAKQBKAdA+CdQAUA0AOA2QAMAvgDAAQgfhFgwhPg");
	this.shape_32.setTransform(23.7,-15.4,0.474,0.44);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0E0E0E").s().p("AAniBQhliCiJAsQCxiTB5EFQArBZAeB8QAWBfAGA+QhAkThhh7g");
	this.shape_33.setTransform(12,-11,0.474,0.44);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0E0E0E").s().p("AhXCxQgFghAGgyQANiDBDh2QAPggAugOQAugNgOApQgpAeglBLQg0BogdCpIgCAAQgJAAgEgcg");
	this.shape_34.setTransform(-31.3,-8,0.474,0.44);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0E0E0E").s().p("AhpIwQhZg2g5idQBdChBtgZQBjgYA6ikQA9iugejdQgjkCiTjoQBdA7BSC8QBPC0AcDNQAeDcgsCQQgzCkiJAOQgUADgRAAQg6AAgvgdg");
	this.shape_35.setTransform(2.6,6.1,0.474,0.44);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0E0E0E").s().p("AgwBUQhYoQgRh7QBdArBQCzQBNCmAkDPQAkDXgcCSQgfCkhpAPQAVgMhKnYg");
	this.shape_36.setTransform(7.7,5.1,0.474,0.44);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0E0E0E").s().p("AiZFuQgJgGgNgHQgFgDADgTQADgTgFgDQAagEAUgbIAegxQAhgyAAj1QgGkCADgxQAyB7AeCuQAeCiAJATQALAXAQADQARAEANgTQAng7APihQAMiEgJhsQAfCOgRCeQgQCWg3CFQgSAugiAjQgoAqgpAFIg/AGIgRABQgeAAgNgIg");
	this.shape_37.setTransform(14.8,13.6,0.474,0.44);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0E0E0E").s().p("AgdJhQgpgKgrgdIgjgaQgdj9gZkBQgyoBAPgVIAMgUQARgZAVgTQBFg9BcANQA3AJBABoQBCBrApCcQAtCugECvQgFDMhHCtQg0B9hhAAQgUAAgZgGg");
	this.shape_38.setTransform(11.5,2.6,0.474,0.44);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0E0E0E").s().p("AAFIaQgNgJgEAAQAMgGABhyQABhwgLilQggmWhLkRQBeBHA6CZQA4CMARCvQARCogXCWQgYCcg7BSIgPgKg");
	this.shape_39.setTransform(18.2,1,0.474,0.44);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0E0E0E").s().p("AjOFiQAPgJAMgkQAEgKALgtQC6ggBPh7QBXiIADk8QAZCmgPB8QgTCUhQB2QgbAngnAfQgvAng9AUQhBAWhCAAIgDAAg");
	this.shape_40.setTransform(26,10.8,0.474,0.44);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0E0E0E").s().p("Ai7JJQAEgDAWgeIAgguQgTgJgRgKIgOgJQgZjmgXjpQgsnRAQgTQgBgHACgLQAEgVAMgSQApg6B0gDQA4gBA1AqQA1ApArBLIAJANQA1BVAiByQAiBwAEBkQADBDgBApQgCA5gKAzQgXB7hGBmQgaAngoAgQgxAng7AUQgkAMgtAGQgfAFgYAAQgSAAgOgDg");
	this.shape_41.setTransform(23.4,0.6,0.474,0.44);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0E0E0E").s().p("Ah5CbQgIh7APhhQAokYDHAnQiCApgzCaQgtCFABEhQgOg8gHhgg");
	this.shape_42.setTransform(-19.5,-6.2,0.474,0.44);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0E0E0E").s().p("AAgHqQhBhtgui6Qg6jmAGjWQAIjjBOhVQAIApBSJYQBAHOAYAGIgYAHIgUAHQgYgRghg3g");
	this.shape_43.setTransform(-7.8,6.9,0.474,0.44);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0E0E0E").s().p("AA/HFQg/gJghgqQgtgvglg6Qgng9gUg4QAJAJA3BfQBDBaBBgFQANgBgIgzQgPhVgKhEQgtkpAKlCQAJB/AMB8QARDHAOAwQAtCpAmBjQASAtAhA2QAQAaAGAFQgmAPgoAAQgRAAgRgDg");
	this.shape_44.setTransform(-11.7,11.6,0.474,0.44);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0E0E0E").s().p("AgeIRQh5iShCi6Qg4iigIiqQgIiXAeh4QAchxAxggQBYg7BRAiQAmAQAYAdQAVAPBtH6QA3D7AyD6QgWAwgzAdQgnAWgrAAQhJAAhWg9g");
	this.shape_45.setTransform(-11.9,6,0.474,0.44);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0E0E0E").s().p("AARG3QhSh7g2i5Qg6jHAJitQAJjJBkhtQAmC/BSHuQBJGUAkANQgHABgHAAQg+ABhNhyg");
	this.shape_46.setTransform(-18,6.2,0.474,0.44);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0E0E0E").s().p("AByHuQhNgUg6g1Qh5hrg3hpQg2hogVilIAOA4QAUA+AdA8QBdC+CoBiQAGgPgEgUIgHgjQh3mFAKjJQAEhRAZhBQARgoAkg/QgaBXgGAlQgIAuAABNIAAAAQAABMAUCIQAPB5AYBAQAhBZA/BtQBTCJA3APQgHgBgOAEIgWAHQgTADgUAAQgkAAgpgKg");
	this.shape_47.setTransform(-23.6,8.4,0.474,0.44);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0E0E0E").s().p("AgMHpQiQhphFikQg7iMAAijQgBiNAph7QAlhxAxgiQByhRBNAeQAoAPARAgQAVAOBZHYQAtDrAoDpIgIAcQgOAfgaASQgdAVgpAAQhJAAhqhBg");
	this.shape_48.setTransform(-23.2,5.6,0.474,0.44);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0E0E0E").s().p("Ah4JGQgwgGgqgVIgggUQgYj1gTj6QgmnxAWgVIAVgVQAcgYAjgTQBvg6CEAZQBIANBIBfQBLBkAlCOQAqChgVClQgXDAhoCtQiBB2iCAAQgTAAgSgCg");
	this.shape_49.setTransform(14.2,-1.6,0.474,0.44);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0E0E0E").s().p("AgrIHQjKjChGjtQg9jNAzi4QAxiuB3hCQB+hFCEBeQAaAOByHoQA5DzAzDxQgeAvhBAeQg0AYg6AAQhXAAhkg0g");
	this.shape_50.setTransform(-17,2.2,0.474,0.44);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0E0E0E").s().p("Ai+HcQh/h/g1jfQgzjQAki8QAljFByg8QBpg3BWgLQBNgJBbAaQAvANBPCsQBUC3AoDHQAwDsgqCYQgzC4iyAcQgjAFghAAQibAAh3h4g");
	this.shape_51.setTransform(-2.4,-1.8,0.474,0.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(451));

	// bar
	this.instance = new lib.ProgressBar_Tween("synched",0);
	this.instance.setTransform(24,-0.6,2.134,1,0,0,0,-33.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({startPosition:0},0).to({scaleX:0.23,x:23.9},395).to({scaleX:0.19},8).to({regX:-33.1,scaleX:0.06},27).wait(1));

	// baseAlert
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0033").s().p("AsNCTQguAAgkgZQAFgJACgNIAAgfQAAgbAFgrQAHg3ABgRQACgagBgiQALgFAMgDQASgGAUAAIXgAAQA6ABAqApQApApAAA6IAAANQAAA7gpAoQgqApg6AAg");
	this.shape_52.setTransform(110.3,-0.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0033").s().p("AsKCTQgyABglgeIAAgBQAIgRgBghQgDhGADh3QATgOAXgFQASgGAUAAIXgAAQA6ABApApQApApAAA6IAAANQAAA7gpAoQgpApg6AAg");
	this.shape_53.setTransform(110,-0.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC0033").s().p("AsQCTQgqABghgWIAAgEIgBi6QAAgjADgRIABgLQAQgKASgEQASgGAUAAIXgAAQA6ABAqApQApApAAA6IAAANQAAA7gpAoQgqApg6AAg");
	this.shape_54.setTransform(110.6,-0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0033").s().p("AsNCTQgqAAgggUQAEgEADgFQAHgNAAgdQAAgVgEgNIgJgjQgGgOgBgIQgFgWALgdQADgJAEgIQAJgPABgFQAEgPgKgOQAMgGANgDQASgGAUAAIXgAAQA6ABApApQApApAAA6IAAANQAAA7gpAoQgpApg6AAg");
	this.shape_55.setTransform(110.3,-0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0033").s().p("AsNCTQggABgagMIAFgMQACgJAAgUQABgkgDgWQgCgOgGgWQgGgXgEgJIgKgUIAAgjQAAgRABgJIAFgNQARgLAUgFQASgGAUAAIXgAAQA6ABApApQApApAAA6IAAANQAAA7gpAoQgpApg6AAg");
	this.shape_56.setTransform(110.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52}]},401).to({state:[]},5).to({state:[{t:this.shape_53}]},5).to({state:[]},5).to({state:[{t:this.shape_54}]},5).to({state:[]},5).to({state:[{t:this.shape_55}]},5).to({state:[]},5).to({state:[{t:this.shape_56}]},5).to({state:[]},5).wait(5));

	// base
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B9B9B9").s().p("AjGABIAAgBIGLAAIACABg");
	this.shape_57.setTransform(45.9,-15.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("AGCCWIAAgBIAJAAIAAABgAmKiRIAAgEIAOAAIgBAEg");
	this.shape_58.setTransform(106.8,-1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#545454").s().p("AgEABIgCgBIANAAIAAABg");
	this.shape_59.setTransform(66.4,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(451));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-36.6,203.9,68.7);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_21();
	this.instance.setTransform(926.2,268);
	this.instance.alpha = 0.422;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(962.9,293.3,1,1,0,0,0,0.6,0.2);
	this.instance_1.alpha = 0.422;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(834.5,239.5,1,1,0,0,0,0.4,0.2);
	this.instance_2.alpha = 0.422;

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(959.7,321.9);
	this.instance_3.alpha = 0.422;

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.setTransform(794.6,219.8);
	this.instance_4.alpha = 0.422;

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(682,144.8);
	this.instance_5.alpha = 0.422;

	this.instance_6 = new lib.Path_6_0();
	this.instance_6.setTransform(753.2,201.6,1,1,0,0,0,0.2,0.4);
	this.instance_6.alpha = 0.422;

	this.instance_7 = new lib.Path_7_0();
	this.instance_7.setTransform(791.6,222.7);
	this.instance_7.alpha = 0.422;

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.setTransform(279.9,28.1);
	this.instance_8.alpha = 0.422;

	this.instance_9 = new lib.Path_9_0();
	this.instance_9.setTransform(233.6,21.9,1,1,0,0,0,0.4,0.4);
	this.instance_9.alpha = 0.422;

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(366.2,67,1,1,0,0,0,0.2,0.4);
	this.instance_10.alpha = 0.422;

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(218.3,54.7);
	this.instance_11.alpha = 0.422;

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(209.8,42.9);
	this.instance_12.alpha = 0.422;

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(409.9,78.7);
	this.instance_13.alpha = 0.422;

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(551.4,99.9);
	this.instance_14.alpha = 0.422;

	this.instance_15 = new lib.Path_15();
	this.instance_15.setTransform(594.4,116.1,1,1,0,0,0,0.5,0.3);
	this.instance_15.alpha = 0.422;

	this.instance_16 = new lib.Path_16();
	this.instance_16.setTransform(453.9,92.8,1,1,0,0,0,0.3,0.2);
	this.instance_16.alpha = 0.422;

	this.instance_17 = new lib.Path_17();
	this.instance_17.setTransform(586,150.5);
	this.instance_17.alpha = 0.422;

	this.instance_18 = new lib.Path_18();
	this.instance_18.setTransform(600.5,144.4);
	this.instance_18.alpha = 0.422;

	this.instance_19 = new lib.Path_19();
	this.instance_19.setTransform(409.2,82.8);
	this.instance_19.alpha = 0.422;

	this.instance_20 = new lib.Path_20();
	this.instance_20.setTransform(507.7,226.3,1,1,0,0,0,507.7,226.3);
	this.instance_20.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1015.4,452.8);


(lib.Rocks_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27161A").s().p("AiyA6IAGgMICRhBQCZhGA1gPQgLAYgmA3QghArgnAxQgEgWgRgQQgSgPgWAAQgaAAgSASQgSATAAAZQAAAQAHANg");
	this.shape.setTransform(148.7,274.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27161A").s().p("AAcA9QAAgagSgTQgRgQgaAAQgYAAgSAPQgSAQgCAZQgthVgUhSQBOAbCBBWQB8BTgKADQghAMh+AMQAagTAAggg");
	this.shape_1.setTransform(101.5,273.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#27161A").s().p("AhJDgQgEgSgKgaQgNgdgIgCQgOgCggAbQgQANgOAOQhygmhChZQhUhvABi9QA2CfByBAQgGATAWA0QAVA1AUACQARACAZglQASgbALgcQClAjCIgYQADASAkAjQAmAkATgEQAOgDALg1QAKgwgEgTQBdgmBOhJIgZBMQgRAugQAgQgxBchmAuIgIADQgJgSgbgQQgagQgOACQgRAEgOAXQgPAYADAVIhPAKQgXADgZAAQgbAAgfgDg");
	this.shape_2.setTransform(123,299.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#27161A").s().p("AhcA/IB2iRIBEClg");
	this.shape_3.setTransform(123.6,290.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F58436").s().p("AA3hmQg7h0h1ANQCkhWA4DcQAUBKADBmQACBNgGAwQgFjgg6hsg");
	this.shape_4.setTransform(151.1,266);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F58436").s().p("AhrgoQAkh4A+gzQA0gtA1AYQAaANAPAVQhXgbhHB0QhMB2giDpQgQiXAoiDg");
	this.shape_5.setTransform(118.4,268.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB6E26").s().p("AgeHMQhEgDgtgoQg+g4gTiBQAwCLBcgDQBUgDBKh2QBOh8ANivQAPjNhSjKQBDA8AjCdQAiCYgMCiQgMCvg8BoQg/BthjAAIgSAAg");
	this.shape_6.setTransform(125.1,291.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC6D22").s().p("AgSHaQhogBgxhTQhDhxATkVQAPjfAyhzQA/iOB5AHQBrAGAvCYQAlB3ADDjQADDhhHBzQg/BnhtAAIgCAAg");
	this.shape_7.setTransform(124.3,290.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CD5F27").s().p("AhgHDQATgHASl4IAYoGQBCAwAkCXQAjCMgGClQgHCrgvBtQgwB1hTAAIgHAAg");
	this.shape_8.setTransform(138.6,291);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB6E26").s().p("Ag6EhIg0gFQgkgFgLgKIgQgNQgDgDAFgOQAGgPgEgDQAWABAVgSIAhghQAigiApi8QAljJALgkQATBmgDCLQgECBAFAQQAEATANAGQAOAGANgNQAngmAWh7IAXi5QABCGgUBiQgZB8g8BVQgXAgghAWQghAYghAAIgHAAg");
	this.shape_9.setTransform(159.8,302.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB6E26").s().p("AhNEhQhTgFgRgPIgPgNQgEgDAFgOQAGgPgEgDQAWACAVgSIAhgiQAigiApi8QAmjJAKgkQATBmgDCLQgDCCAEAQQAFATANAFQANAGANgNQAqgoAnh5QAghkALhVQAABygnB2QgnByhCBfQgXAggfAWQgjAYggAAIgHAAg");
	this.shape_10.setTransform(145.9,308.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC6D22").s().p("Ah4HVQgggPgegcIgYgaQAUjIAWjIQAumVAQgOIANgOQARgRAVgLQA/glBJAZQAsAPAjBbQAjBcAHB/QAQE9imDuQg2BNg/AAQgdAAgegPg");
	this.shape_11.setTransform(144.7,288.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CD5F27").s().p("AhgGeQAdgFAoktQAok+gNjfQA+BGAXB/QAVB0gPCJQgOCGgsBwQgrB0g+A3QgUgTgEgBg");
	this.shape_12.setTransform(157.1,287.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F27621").s().p("AiiHEQgsgCgbgKQAEgBAXgVIAigeQgOgJgNgLIgJgJQASi1AVi2QAqlvAQgNQAAgFAEgIQAGgQAOgMQAqgnBcAQQAuAIAlApQAkAoAWBAIAFAMQAdBKAJBdQAIBcgNBLQgKA3gHAeQgMAsgQAmQgnBchKBEQgbAagmASQgsAXg1AGQgUACgWAAIgagBg");
	this.shape_13.setTransform(154.8,288.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F58436").s().p("AiEBoQAOhhAchHQBQjSCZA9QhxAKhBBwQg6BfgxDgQgBgyALhKg");
	this.shape_14.setTransform(96.7,263);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CD5F27").s().p("AghF8QgkhfgGiWQgIi7ApikQAqiuBOg1QgBAgghHdQgZFtASAJIglAEQgPgRgSgvg");
	this.shape_15.setTransform(108.6,290.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DB6E26").s().p("AAbFiQgwgSgVgmQgcgrgVgyQgWg1gFguQAFAIAeBSQAmBPA1AHQAKABADgoQAChEACg2QANjsA9j4QgNBhgLBkQgRCdACAnQAICMAOBQQAIAoARAsQAHAVAGAHQgQACgPAAQgfAAgfgKg");
	this.shape_16.setTransform(97,297.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC6D22").s().p("AhOGPQiMj7AxksQATh2AshYQArhTAsgRQBPggA8AnQAeATAOAaQAOAPAEGWQACDMgBDIQgbAiguAOQgVAHgVAAQhGAAhMhLg");
	this.shape_17.setTransform(100.6,287.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD5F27").s().p("AgTFOQgvhsgNiYQgOiiAkiEQAqiaBhhFQgBCagQGKQgIFDAbAQIgBAAQg5AAgthug");
	this.shape_18.setTransform(89.7,286.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DB6E26").s().p("AAwF9Qg6gcgngxQhQhlgbhaQgahZALiCIACAtQAFA0ANAxQAsCiB3BlQAHgKABgQIAAgdQgek+AniaQARg+AfguQAUgdAqgqQglA9gMAdQgPAjgMA7QgNA9gGBqQgHBgAIA0QAMBLAiBdQAqB2AqAVQgFgCgLABIgUACQgqAAgxgXg");
	this.shape_19.setTransform(79.3,289.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC6D22").s().p("Ag7FsQi6jFA/kfQAXhtA1hZQAyhRAsgTQBogtA7AkQAeASAIAbQAPAOgHF4QgDC+gHC6QgOAlgmAQQgRAHgUAAQhDAAhahQg");
	this.shape_20.setTransform(81.6,284);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E56E24").s().p("AifGpQgfgKgYgVIgTgTQAXi5Abi8QA1l2ASgNIASgMQAWgPAagJQBQgdBVAjQAuATAgBQQAiBUACBuQAGEWi5DeQhRA5hJAAQgfAAgcgKg");
	this.shape_21.setTransform(145.7,282.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E56E24").s().p("AhXGCQiDi1gQjCQgPinBIiHQBFh+BrghQBvgiBdBdQATAPAKGJQAFDFABDDQggAgg5ANQgZAGgZAAQhbAAhfhKg");
	this.shape_22.setTransform(93.3,279.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A25F27").s().p("ABlAFQgZgWgZgGQATAZABATQgBgIgagSQgQgMgWgHQgjgMgmAQQguAUgRAfIADgMQAFgOALgLQAignBNgFQBEgFAnA3QASAZAGAbQgGgYgYgXg");
	this.shape_23.setTransform(114.1,224.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A25F27","#A25F27","#522C16"],[0,0.012,1],25.4,368.7,-25.7,-361.7).s().p("AgBgRIgGgRQACALgOAiQgNAlgYAIQAhg5AHggQAHgjgUgZIAUAOQAVAVASAhQAQAeAHAoQAEASABAJQgBgHgJgbQgMgggKgLIgQgUQAJAdgCAlQgBAjgKASQgDhegEgRg");
	this.shape_24.setTransform(117.3,233.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A25F27","#A25F27","#522C16"],[0,0.012,1],0,3941.4,0,-3929.9).s().p("ABdBdQgNhEgKgOIgLgRQAEBOgBgDQgBgDgOgdQgQghgOgXQgWgqgwgUIgogMIAhACQAkAGAUASQATATARAhQAJAPAFANQgIgzgFgSQgFgSgIgJIAfAdQAfAoAIA4QADAUABATIAAANIgBgBg");
	this.shape_25.setTransform(118.8,232);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A25F27","#A25F27","#522C16"],[0,0.012,1],57.9,-17.7,-60,18.3).s().p("AAACNQgfgCgSgVQgUgZAHgsQAGgnATgYQAcgogXgdQgXgdgrASQgZALgOATQgPAVALASQAFAIARABQAQABAKgHQAIgFgEgEQgDgEgIgBQgKAAgGgJQgFgIAFgIIADgEQAlgLAMAeQAMAdghAPQgeALgdgIQgegHgEgaQgGgsAzggQAqgZA4gHQBDALAbAUQAbATANAvQAHAWAHAjQAJAdAbATIAeAVQhAAqg2AJQgnAHgRAAIgFAAg");
	this.shape_26.setTransform(117.7,233.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D56826").s().p("AAhHZQilgHhdiHQhRh2gGi1QgFioA8iLQA/iSBmgdQBdgaBHAFQBBAFBGAiQAjARAjCSQAlCagBCeQgBC/g7BvQhFCAiKAAIgNAAg");
	this.shape_27.setTransform(122.4,277.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F23").s().p("AhBiqIgMghQguh+gPhCQgYhsAPhZIArAHQgOBRAYBnQAOA+AsB5IAMAhQCGF3AsGPIgrAEQgrmIiFlzg");
	this.shape_28.setTransform(70.6,-65.3,0.755,0.725,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F23").s().p("ABREKQgRgFgTgOQgKgIgRgSQgTgYgVglQgPgbgSgmQgVgsgJgWQgLgXgQgoIgWg9Ig2iqQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABABQAAAAABAAQAAABAAAAIBlDcIAfA8IAiA9QAUAlAQAVQAWAeATAVIAUAUQALAJAIAEQAIADAEAAQAHgBAIgHIAHgHIATgaIARghIAPgdQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABIgBAiQgCASgFAVQgDANgFALIgKAUIgFAHQgNARgSAHIgLADIgMABIgDABQgKAAgKgEg");
	this.shape_29.setTransform(81.8,-97.5,0.755,0.725,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F23").s().p("AgSByIgCgCIgHgHIgHgNQgEgHgCgKQgCgKgBgKQgBgMADgKQACgJAGgNIAeg8IAqhBIADAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgbBxIgDAWQAAALgBAJIgCAJIgWA5IgBADIgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDgBg");
	this.shape_30.setTransform(61.1,-111.2,0.755,0.725,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F23").s().p("ABhFyIgfgQIgPgLIgSgNIgTgRIglgtIgSgbIgQgfIgUgzIgMg3QgHgtgCgfIgChvIACgkIAEgjIAaiOQAFgWAFgQIAKghQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABIgVCXIgDBhIABAjIACAkIADAkIAFAhQAEAeAMAoIAKAiIAGAQIAGAPIAVA7IANAbIAaAuIAkAyIAWAbIAAADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_31.setTransform(16.1,-123.7,0.755,0.725,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F23").s().p("AgXBqIgUgFQgJgDgGgDIgMgIIAAgBQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIA8geIADgCIAGgEIANgJIAEgCIAFgFIABgCIADgFQAFgIADgLIAEgUIABgXQABgLgBgJIgFgrIACgDQAAAAABAAQABAAAAAAQAAAAABAAQAAABAAAAIANAYIANAmIAFAZQAFAcgJAcQgFATgIAMIgFAHIgGAHQgIAIgFACIgOAHIgPAEIgLABg");
	this.shape_32.setTransform(60.3,-94.2,0.755,0.725,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F23").s().p("AhLCuQgJgBgGgCIgFgBIgCgBQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBABAAIAAAAIAugcIALgIIAWgRIAmgoIAIgKIAHgMIAFgIIAEgIIANgiQAGgTADgQIAFgkIACggQABgWgBgbIgCgSQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAABABABIAQBDIAFA0IgEA7QgCAPgCAGIgMArIgOAfIgGAJQgEAHgKALIgEAEIgMALIgSALIgPAJIgRAFIgQAEIgLABIgQABg");
	this.shape_33.setTransform(44.7,-86,0.755,0.725,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F23").s().p("AhWDkIgOgCIgTgDIgGgCIgCgCQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIAxgSQAOgHAQgJQAQgJAPgNQAPgNAMgRQATgVAKgPQAOgVAKgXQAKgZAHgXIAMgvIAIgvIAFgqIAFhZQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAEAZQACAJABATIADAlIABAsQAAAbgCAXQgDAfgEAUQgFAagIAcQgJAegLAYQgPAegQASQgRAVgYAPQgTANgYAHQgVAFgTABg");
	this.shape_34.setTransform(32.1,-80.4,0.755,0.725,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F23").s().p("Ah9EyQgQgCgJgDIgIgDIgCgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAhgGQAXgGALgEQAXgJASgLQAWgNASgSQARgSATgaQAVgdANgZQARgdAMgiQAMghAIggIAaiBIAGg5IAIh3QAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAGBHQABAWAAAbIgBA7IgEBBQgEAlgGAfQgFAhgLAnQgKAjgNAjQgGAOgKAUQgJARgKAPQgVAdgcAWQgaAVgdAKQgYAJgdACIgJABQgOAAgRgDg");
	this.shape_35.setTransform(15.4,-75.1,0.755,0.725,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F23").s().p("ABBL8Qg0gUgwgqQgngigrg1QhAhSg9h3Qgwhdgwh4Qglhagoh5QgihngchjQgYhUgYhiQgmiXgZh9IgVhpQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAYBoQAgCDAoCOQAWBLAhBpQAnB5AcBOQAkBhAuBtQAxBzAzBdQBAB0A+BJQAoAvAlAdQAsAlApAPQAYAJAWACQAYADAWgDQAqgGAsgZQAkgVAlgiQAbgZAignIAyhBQAXggATgdIB0jGIAAAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIg/CYQgPAggQAcQgpBNgsA8QgcAmghAiQgpAognAZQgbARgWAJQgaAKgeAFQgSACgSAAQgqAAgqgPg");
	this.shape_36.setTransform(77.3,-74.9,0.755,0.725,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F23").s().p("AB9HiQgRAAgTgFQgggIgigXQgxgjgwhDQgkgzglhGQggg8gchCQgbg+gWg+QgWg6gTg9IgghrQgchggPhDIgOg+QAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIATA9QAcBcAXBEIAmBpIAuB0QAcA/AbA4QAdA/AiA6QAnBCAlAtQAtA5ArAdQAYARAZAHQAXAHAagDQApgFAuglQAegZAhgoIBOhvQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABQAAAAgBABIgFAQIgSAsIgiBCQgeAxgeAeQgWAXgYAPQgOAIgPAHQgQAGgRAEQgPADgQAAIgFgBg");
	this.shape_37.setTransform(77.4,-86.1,0.755,0.725,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F23").s().p("AhiBTQgRgEgIgDIgSgIIgPgJIgBgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAigKIAWgFIBigUIANgEIAdgMIAbgNIAughIAdgdIAJgLQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAABgBAAIgHAPQgCAFgHALIgfAqIgWAVQgPAOgNAIIgPAKIgPAJIgfARQgSAIgQAEQgFABgMABIgRABQgLAAgSgDg");
	this.shape_38.setTransform(88.4,-121.5,0.755,0.725,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F23").s().p("AiUCJIgZgCQgLgBgegIIgegLIgZgNIgBgCQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAcgBIAegCIAmgDICPgeQAagHAYgMIAagMIAYgNIAvgbQAXgPATgPIBrhfQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgQAVQgSAagbAdIghAjQgRARgXARIgWASIhKAxIg0AcIgcALIgcAJQgcAHgbABg");
	this.shape_39.setTransform(96.1,-134,0.755,0.725,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F23").s().p("AEGELQgTgFgQgHQgTgJgOgLQgPgMgNgPQgNgQgJgRQgIgOgIgVQgHgTgEgTQgEgVgBgQIgCgmIADgjQABgUAEgRIAHgkQAHgfANgnIAGgQIgKAEIggANIggAJIgiAIQgVAEgMABIgPABIgRABIgiAAIgigEIgygKIgQgFIgQgGIgmgRIgkgVIgbgTIgagVQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABABABAAIAbASIAcARIA7AZIAfAJIAvAJIAQABIAfABIAQAAIAQgBIAdgFQAMgBATgFQAPgEAQgFIAdgLQASgHALgGIApgXIBFgzIgZBEIgKAhIgKAhQgIAigFAhIgKBjIAAAhIACAhQACAOAEASQAHAgAQAbQAJAOAJALQAMAMAMALQAIAHAUAMIAIAEIAIAEIAQAHIAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgVgCgPgEg");
	this.shape_40.setTransform(53.3,-117.4,0.755,0.725,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F23").s().p("AicBpIgKgBIgfgEIgTgDIgTgEQgmgKgegNIg1gaQgUgMgTgOIgegYQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABABIAlALIATAGIAWAIIA3AOIAfAGIAzAIQALACAHAAIAcADIAJABIAnACIBQAAIAngEIApgGIB2geIAkgLIBhgmIA0gZIAngWIAhgTQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgLAJgVAPIglAZQgYAQgaAOIg9AfIgiAQIhLAeIh8AiIgpAIIgrAFIgVACIgWABIgKAAg");
	this.shape_41.setTransform(44.5,-150.4,0.755,0.725,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F23").s().p("AJEH7IhAgVIhJgcIgLgEIhRglIhpg5IgcgRIgcgRIg5gmIg5gqIg4guQglgfhIhBIhqhmIi3jMIhIhfQgXgfgigzIhMh7QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIBSB2QAdAnAgAoIC+DTIAZAYIA0AxIBsBfQA9A0AyAlIFuD1IAoAZIAkAVIAfASIArAYIAPAJQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_42.setTransform(37.6,-72.4,0.755,0.725,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F23").s().p("AL0JAQhfgEhygPQh1gQhygcQgogJhQgXQhCgUg3gUQgzgRhEgdQhQgigngUQhugzh3hIQhshBhlhNQhghMhThMIhNhMIi4jTQgwg9ghgyQgagkgYglIgQgaQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABIAsA0IAhAmIApAvIAxA3IA5A9IBBBCQBJBJBOBGQBjBWBPA7QBjBMBmBDQBnBEB2A8QA2AcA+AcQBDAeAxASQArARBLAZQBJAXAtALQBmAcB9AVQBtASBiAIQBTAGBdAAQBGAABCgFQAogCAvgGIAegFQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgqAKhMAIIg+AFIhKAEIhMABQg2AAgwgCg");
	this.shape_43.setTransform(83.4,-138.2,0.755,0.725,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F23").s().p("AosGxIAFgNIAKgbQAKggAGgZQAGgZAHghQAFgeAEgdIAFg7IADg8QABg6gGg8IgFg7QgEgegFgeQgEgcgHggIgNg7QgHgdgIgeIg4iuIAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAoBTIBCCuIAJAdQAJAcAGAhQAHAaAGAjQAFAbAFAiQAIBDABA4QAAAcgCAjQgBAjgDAcIgJA+QgHAigIAcQgGAagNAiIgEALQA+gPBAgcQArgSApgWQAngVAqgaQCPhZCaiKICKiAQBDhDA/hGQA8hABBhPIA8hJIA6hLQAAgBABAAQAAgBABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgYAiggArIg5BMQhBBTg3BBQgzA8hMBSQg9BAhKBEQiaCTiPBdQgpAagpAYQguAagnASQgqATgwASQgvAQgwALIgzALg");
	this.shape_44.setTransform(39.6,-144.3,0.755,0.725,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));

	// 圖層 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#27161A").s().p("AiyA6IAGgMICRhBQCZhGA1gPQgLAYgmA3QghArgnAxQgEgWgRgQQgSgPgWAAQgaAAgSASQgSATAAAZQAAAQAHANg");
	this.shape_45.setTransform(626.1,279.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#27161A").s().p("AAcA9QAAgagSgTQgRgQgaAAQgYAAgSAPQgSAQgCAZQgthVgUhSQBOAbCBBWQB8BTgKADQghAMh+AMQAagTAAggg");
	this.shape_46.setTransform(579,277.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#27161A").s().p("AhJDgQgEgSgKgaQgNgdgIgCQgOgCggAbQgQANgOAOQhygmhChZQhUhvABi9QA2CfByBAQgGATAWA0QAVA1AUACQARACAZglQASgbALgcQClAjCIgYQADASAkAjQAmAkATgEQAOgDALg1QAKgwgEgTQBdgmBOhJIgZBMQgRAugQAgQgxBchmAuIgIADQgJgSgbgQQgagQgOACQgRAEgOAXQgPAYADAVIhPAKQgXADgZAAQgbAAgfgDg");
	this.shape_47.setTransform(600.4,303.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#27161A").s().p("AhcA/IB2iRIBEClg");
	this.shape_48.setTransform(601,295);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F58436").s().p("AA3hmQg7h0h1ANQCkhWA4DcQAUBKADBmQACBNgGAwQgFjgg6hsg");
	this.shape_49.setTransform(628.6,270.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F58436").s().p("AhrgoQAkh4A+gzQA0gtA1AYQAaANAPAVQhXgbhHB0QhMB2giDpQgQiXAoiDg");
	this.shape_50.setTransform(595.8,273.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DB6E26").s().p("AgeHMQhEgDgtgoQg+g4gTiBQAwCLBcgDQBUgDBKh2QBOh8ANivQAPjNhSjKQBDA8AjCdQAiCYgMCiQgMCvg8BoQg/BthjAAIgSAAg");
	this.shape_51.setTransform(602.5,296.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EC6D22").s().p("AgSHaQhogBgxhTQhDhxATkVQAPjfAyhzQA/iOB5AHQBrAGAvCYQAlB3ADDjQADDhhHBzQg/BnhtAAIgCAAg");
	this.shape_52.setTransform(601.8,294.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CD5F27").s().p("AhgHDQATgHASl4IAYoGQBCAwAkCXQAjCMgGClQgHCrgvBtQgwB1hTAAIgHAAg");
	this.shape_53.setTransform(616,295.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DB6E26").s().p("Ag6EhIg0gFQgkgFgLgKIgQgNQgDgDAFgOQAGgPgEgDQAWABAVgSIAhghQAigiApi8QAljJALgkQATBmgDCLQgECBAFAQQAEATANAGQAOAGANgNQAngmAWh7IAXi5QABCGgUBiQgZB8g8BVQgXAgghAWQghAYghAAIgHAAg");
	this.shape_54.setTransform(637.2,307.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DB6E26").s().p("AhNEhQhTgFgRgPIgPgNQgEgDAFgOQAGgPgEgDQAWACAVgSIAhgiQAigiApi8QAmjJAKgkQATBmgDCLQgDCCAEAQQAFATANAFQANAGANgNQAqgoAnh5QAghkALhVQAABygnB2QgnByhCBfQgXAggfAWQgjAYggAAIgHAAg");
	this.shape_55.setTransform(623.3,312.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EC6D22").s().p("Ah4HVQgggPgegcIgYgaQAUjIAWjIQAumVAQgOIANgOQARgRAVgLQA/glBJAZQAsAPAjBbQAjBcAHB/QAQE9imDuQg2BNg/AAQgdAAgegPg");
	this.shape_56.setTransform(622.2,292.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CD5F27").s().p("AhgGeQAdgFAoktQAok+gNjfQA+BGAXB/QAVB0gPCJQgOCGgsBwQgrB0g+A3QgUgTgEgBg");
	this.shape_57.setTransform(634.6,291.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F27621").s().p("AiiHEQgsgCgbgKQAEgBAXgVIAigeQgOgJgNgLIgJgJQASi1AVi2QAqlvAQgNQAAgFAEgIQAGgQAOgMQAqgnBcAQQAuAIAlApQAkAoAWBAIAFAMQAdBKAJBdQAIBcgNBLQgKA3gHAeQgMAsgQAmQgnBchKBEQgbAagmASQgsAXg1AGQgUACgWAAIgagBg");
	this.shape_58.setTransform(632.3,292.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F58436").s().p("AiEBoQAOhhAchHQBQjSCZA9QhxAKhBBwQg6BfgxDgQgBgyALhKg");
	this.shape_59.setTransform(574.1,267.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CD5F27").s().p("AghF8QgkhfgGiWQgIi7ApikQAqiuBOg1QgBAgghHdQgZFtASAJIglAEQgPgRgSgvg");
	this.shape_60.setTransform(586.1,294.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DB6E26").s().p("AAbFiQgwgSgVgmQgcgrgVgyQgWg1gFguQAFAIAeBSQAmBPA1AHQAKABADgoQAChEACg2QANjsA9j4QgNBhgLBkQgRCdACAnQAICMAOBQQAIAoARAsQAHAVAGAHQgQACgPAAQgfAAgfgKg");
	this.shape_61.setTransform(574.5,302.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EC6D22").s().p("AhOGPQiMj7AxksQATh2AshYQArhTAsgRQBPggA8AnQAeATAOAaQAOAPAEGWQACDMgBDIQgbAiguAOQgVAHgVAAQhGAAhMhLg");
	this.shape_62.setTransform(578,292);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CD5F27").s().p("AgTFOQgvhsgNiYQgOiiAkiEQAqiaBhhFQgBCagQGKQgIFDAbAQIgBAAQg5AAgthug");
	this.shape_63.setTransform(567.1,290.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DB6E26").s().p("AAwF9Qg6gcgngxQhQhlgbhaQgahZALiCIACAtQAFA0ANAxQAsCiB3BlQAHgKABgQIAAgdQgek+AniaQARg+AfguQAUgdAqgqQglA9gMAdQgPAjgMA7QgNA9gGBqQgHBgAIA0QAMBLAiBdQAqB2AqAVQgFgCgLABIgUACQgqAAgxgXg");
	this.shape_64.setTransform(556.8,293.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EC6D22").s().p("Ag7FsQi6jFA/kfQAXhtA1hZQAyhRAsgTQBogtA7AkQAeASAIAbQAPAOgHF4QgDC+gHC6QgOAlgmAQQgRAHgUAAQhDAAhahQg");
	this.shape_65.setTransform(559.1,288.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E56E24").s().p("AifGpQgfgKgYgVIgTgTQAXi5Abi8QA1l2ASgNIASgMQAWgPAagJQBQgdBVAjQAuATAgBQQAiBUACBuQAGEWi5DeQhRA5hJAAQgfAAgcgKg");
	this.shape_66.setTransform(623.2,286.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E56E24").s().p("AhXGCQiDi1gQjCQgPinBIiHQBFh+BrghQBvgiBdBdQATAPAKGJQAFDFABDDQggAgg5ANQgZAGgZAAQhbAAhfhKg");
	this.shape_67.setTransform(570.8,283.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A25F27").s().p("ABlAFQgZgWgZgGQATAZABATQgBgIgagSQgQgMgWgHQgjgMgmAQQguAUgRAfIADgMQAFgOALgLQAignBNgFQBEgFAnA3QASAZAGAbQgGgYgYgXg");
	this.shape_68.setTransform(591.5,229.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#A25F27","#A25F27","#522C16"],[0,0.012,1],25.4,368.7,-25.7,-361.7).s().p("AgBgRIgGgRQACALgOAiQgNAlgYAIQAhg5AHggQAHgjgUgZIAUAOQAVAVASAhQAQAeAHAoQAEASABAJQgBgHgJgbQgMgggKgLIgQgUQAJAdgCAlQgBAjgKASQgDhegEgRg");
	this.shape_69.setTransform(594.7,238.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#A25F27","#A25F27","#522C16"],[0,0.012,1],0,3941.4,0,-3929.9).s().p("ABdBdQgNhEgKgOIgLgRQAEBOgBgDQgBgDgOgdQgQghgOgXQgWgqgwgUIgogMIAhACQAkAGAUASQATATARAhQAJAPAFANQgIgzgFgSQgFgSgIgJIAfAdQAfAoAIA4QADAUABATIAAANIgBgBg");
	this.shape_70.setTransform(596.2,236.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#A25F27","#A25F27","#522C16"],[0,0.012,1],57.9,-17.7,-60,18.3).s().p("AAACNQgfgCgSgVQgUgZAHgsQAGgnATgYQAcgogXgdQgXgdgrASQgZALgOATQgPAVALASQAFAIARABQAQABAKgHQAIgFgEgEQgDgEgIgBQgKAAgGgJQgFgIAFgIIADgEQAlgLAMAeQAMAdghAPQgeALgdgIQgegHgEgaQgGgsAzggQAqgZA4gHQBDALAbAUQAbATANAvQAHAWAHAjQAJAdAbATIAeAVQhAAqg2AJQgnAHgRAAIgFAAg");
	this.shape_71.setTransform(595.1,238.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D56826").s().p("AAhHZQilgHhdiHQhRh2gGi1QgFioA8iLQA/iSBmgdQBdgaBHAFQBBAFBGAiQAjARAjCSQAlCagBCeQgBC/g7BvQhFCAiKAAIgNAAg");
	this.shape_72.setTransform(599.9,281.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(1));

	// 圖層 1
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#27161A").s().p("AhJDgIgMg6QgDgSgkAAIgkAEIgYAxQhygmhChZQhUhvABi9QA2CfByBAQgPAzAKAJQAJAJA2AHIA0AFIASgtQClAjCIgYQAIAqAKAAQAbAAAhgFQAwgIAFgPQAEgMgIgoQBdgmBOhJIgZBMQgRAugQAgQgxBchmAuIgIADQgZgxgMgCQgJgCgoAHIgmAIIAFA+IhPAKQgXADgZAAQgbAAgfgDg");
	this.shape_73.setTransform(304.4,303.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#27161A").s().p("AhcA/IB2iRIBDClg");
	this.shape_74.setTransform(305,295);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#27161A").s().p("AiyAuIAGgMICRhBQCZhGA1gQQgQAmhOBkQhKBggGABQgFAAiyhIg");
	this.shape_75.setTransform(330.1,280.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#27161A").s().p("AhjAvQgqhRgThPQBOAbCBBWQB8BSgKAEQgvARiuALQgRgagWgpg");
	this.shape_76.setTransform(282.9,278.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F58436").s().p("ABJCZQgOg7gZhEQgziJg3gXQgEgTATABQAQABAaAOQA3AiAXCDQAIArACAsQACAmgCAAIAAAAg");
	this.shape_77.setTransform(354.1,265.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F58436").s().p("AA3hmQg7h0h1ANQCkhWA4DcQAUBKADBmQACBNgGAwQgFjgg6hsg");
	this.shape_78.setTransform(332.5,270.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F58436").s().p("AhmB7QACgaAMgmQAihjBHhQQAUgXAngDQAngDgSAeQglAQgsA0Qg6BIg1B+IAAAAQgJAAACgYg");
	this.shape_79.setTransform(258,260.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F58436").s().p("AhrgoQAkh4A+gzQA0gtA1AYQAaANAPAVQhXgbhHB0QhMB2giDpQgQiXAoiDg");
	this.shape_80.setTransform(299.8,273.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DB6E26").s().p("AgeHMQhEgDgsgoQg+g4gUiBQAwCLBcgDQBUgDBKh2QBOh8ANivQAQjNhSjKQBCA8AjCdQAiCYgMCiQgMCvg8BoQg/BthjAAIgSAAg");
	this.shape_81.setTransform(306.5,296.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F27621").s().p("AgSHaQhogBgxhTQhDhxATkVQAPjfAyhzQA/iOB5AHQBrAGAvCYQAlB3ADDjQADDhhHBzQg/BnhtAAIgCAAg");
	this.shape_82.setTransform(305.7,294.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CD5F27").s().p("AhgHDQATgHASl4IAZoGQBBAwAlCXQAiCMgGClQgHCrgvBtQgxB1hTAAIgGAAg");
	this.shape_83.setTransform(320,295.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#DB6E26").s().p("AhNEhQhTgFgRgPQgGgGgJgHQgEgDAFgOQAGgPgEgDQAWACAVgSIAhgiQAigiApi8QAmjJAKgkQATBmgDCLQgDCCAEAQQAFATANAFQANAGANgNQAqgoAnh5QAghkALhVQAABygnB2QgnByhCBfQgXAggfAWQgjAYggAAIgHAAg");
	this.shape_84.setTransform(327.3,312.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F27621").s().p("Ah4HVQgggPgegcIgYgaQAUjIAWjIQAumVAQgOIANgOQARgRAVgLQA/glBJAZQAsAPAjBbQAjBcAHB/QAQE9imDuQg2BNg/AAQgdAAgegPg");
	this.shape_85.setTransform(326.1,292.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CD5F27").s().p("AhgGeQAdgFAoktQAok+gNjfQA+BGAXB/QAVB0gPCJQgOCGgsBwQgrB0g+A3QgUgTgEgBg");
	this.shape_86.setTransform(338.5,291.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DB6E26").s().p("AjbDvQAOgFAQgaIAVgoQCdAFBShTQBehbA3j0QgHCEgiBeQgpBvhUBOQgcAagiASQgvAXg1AGQgWADgVAAQgjAAghgHg");
	this.shape_87.setTransform(347.6,312.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F27621").s().p("AijHFQgsgDgagJQAEgCAWgUIAigeQgNgKgNgLIgJgJQASi1AVi1QAqlwAQgMQAAgGAEgIQAGgQAOgMQAqgmBcAQQAuAIAlApQAkAnAWBBIAFALQAcBKAJBdQAJBdgNBLQgJA1gJAgQgLArgQAnQgoBchJBDQhCA+hgALQgVACgXAAIgZAAg");
	this.shape_88.setTransform(346.2,291.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F58436").s().p("AiEBoQAOhhAchHQBQjSCZA9QhxAKhBBwQg6BfgxDgQgBgyALhKg");
	this.shape_89.setTransform(278.1,267.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CD5F27").s().p("AghF8QgkhegGiXQgIi7ApikQAqiuBOg1QgBAgghHcQgZFvASAIIglAEQgPgRgSgvg");
	this.shape_90.setTransform(290,294.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DB6E26").s().p("AAbFiQgwgSgVgmQgcgrgVgyQgWg1gFgvQAFAJAeBSQAmBPA1AHQAKABADgoQAChEACg2QANjsA9j4QgNBigLBjQgRCdACAnQAHCIAPBUQAIAoARAsQAHAVAGAHQgQACgPAAQgfAAgfgKg");
	this.shape_91.setTransform(278.4,302.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F27621").s().p("AhOGPQiMj7AxksQATh2AshYQArhTAsgRQBPggA8AnQAeATAOAaQAOAPAEGWQACDMgBDIQgbAiguAOQgVAHgVAAQhGAAhMhLg");
	this.shape_92.setTransform(282,292);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CD5F27").s().p("AgTFOQgvhsgNiYQgOiiAkiEQAqiaBhhFQgBCagQGKQgIFDAbAQIgBAAQg5AAgthug");
	this.shape_93.setTransform(271.1,290.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DB6E26").s().p("AAwF9Qg6gcgngxQhQhlgbhaQgahZALiCIACAtQAFA0AOAxQArCiB3BlQAHgKABgQIAAgdQgek+AniaQARg+AfguQAUgdAqgqQglA9gMAdQgPAjgMA7QgNA9gGBqQgHBeAIA2QAMBLAiBdQAqB2AqAVQgFgCgLABIgUACQgqAAgxgXg");
	this.shape_94.setTransform(260.7,293.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#814021").s().p("AgSgoIATAoQAKARAIAYQgkgsgBglg");
	this.shape_95.setTransform(306.4,223.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#814021").s().p("AAFABQgBgOgWhMQAkBCABAXQACAegiA8QAShGAAgTg");
	this.shape_96.setTransform(302.9,230.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#814021").s().p("AgwhTIAvBTQAZAwAZAkQhHg5gahug");
	this.shape_97.setTransform(308,229.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#814021").s().p("AAPBAQgPgWgXg2QgVg2gFgeQAPAWAXA4QAXA5ALATIAbAng");
	this.shape_98.setTransform(311.7,229);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CD7C57").s().p("AgmAOQgDgFAmgOQAlgPAEAGQAHAIgoAOQgXAJgMAAQgGAAgCgDg");
	this.shape_99.setTransform(302.6,217.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E58E4C").s().p("AgsASQgMgKAugQQArgSAKAHQAKAGgNAKQgIAFgLAFQgXALgTADIgJABQgKAAgEgEg");
	this.shape_100.setTransform(302.5,217.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#63331A").s().p("AAGBiQhPgKhwg9IAMgHQAzgTAPgGQAcgNAggmIgLARIgWAjQgGAIgKALQgFAGACgBIAPgFQANgIARgRQAQgTARgmIANggQABAFgBAQQgCAVgEATQgGAcgOAYQAagVAIgXQADgPACgaIAAgWIACAfQADAiAAAQQAAAYABAIQAQgYAAgUIAAgfIAcBBIABgqIAFAMQAHANAKAIQAKAJAKACQAEABADgBIgfgtQAdAYAPAIQAMAEADgBIgNgcQAdAgAlAZQg7BFhbAAQgOAAgQgCg");
	this.shape_101.setTransform(306.4,241.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6C371D").s().p("AAGCzQhPgJhwg+IBAgiQAogWASgUQA3g7hLhzQAIgMAMgGIAcgNQAPgGAOgBQAKgBACACQAMALAMAkIAZBMQAqBtBZA7Qg7BFhbAAQgOAAgQgCg");
	this.shape_102.setTransform(306.4,233.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F27621").s().p("Ag7FsQi6jEA/kfQAXhuA1hYQAyhSAsgTQBogtA7AkQAeASAIAbQAPAOgHF4QgDC+gHC6QgOAlgmAQQgSAHgUAAQhCAAhahQg");
	this.shape_103.setTransform(263,288.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E56E24").s().p("Ai4G5QglgMgfgXIgXgUQAWjBAbjBQA0mIAWgNIAUgMQAbgPAfgJQBhgcBoAoQA5AWApBUQAsBZAGBzQAHCBgsB+QgzCRhxB1QheA3hVAAQgpAAgmgMg");
	this.shape_104.setTransform(331.9,285.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E56E24").s().p("AhXGCQiDi1gRjCQgOinBIiHQBEh+BsghQBvgiBdBdQASAPAKGJQAFDFACDDQghAgg5ANQgYAGgZAAQhbAAhfhKg");
	this.shape_105.setTransform(274.8,283.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D56826").s().p("AAgHZQikgHhdiHQhRh2gGi1QgGioA8iLQBAiSBmgdQBcgaBHAFQBCAFBFAiQAkARAjCSQAlCagBCeQgBC/g7BvQhFCAiKAAIgOAAg");
	this.shape_106.setTransform(303.9,281.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).wait(1));

	// objects
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4C476E").s().p("ApOIjQgEkrAjj4QAxlbB6jHQCXj4D/gBQDkAACLDDQgOAHAAAJQAAAPAoAJQCbEAAXIGQAGCegGDDIgFC8IyLAoQgJhjgCiVg");
	this.shape_107.setTransform(-252.2,19.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4C476E").s().p("AgPgCIAfgCIgcAJIAAAAQgCAAgBgHg");
	this.shape_108.setTransform(-192.1,95.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgCAFQgDgDgBgCQgCgDAFgDQADgDACAFIAFAEQACAEgFADIgEABQAAAAgCgDg");
	this.shape_109.setTransform(799.4,390.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("ADHGYQgohShKhyQhhiWgYgpQgmg/g4h3Qg+iFgcgyIAAgrQgQgUgBgSQgBgUASgMQAnBDBGClQBACYAwBKQAWAhA2BGQA3BGAYAmQBYCDgGBzg");
	this.shape_110.setTransform(855.9,437.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgzBnQhfiwhNjzIABgHQgDgPgTgJQgTgJgDgIQgUgjAZgNQAZgOAfAcQgHgTANgZQANgbATAOQAPALgHAnQgJAwACAIIgEADQgHBXBFCLQAKASBtC7QAwBTBNBfICMCjIg9AjQiXiLhzjbg");
	this.shape_111.setTransform(849.9,442.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgeAiQAegxAfgUQABAYgTAUQgQAWgXAFg");
	this.shape_112.setTransform(827.3,343.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgTAmQAGgfAFgMQAIgYAMgMIAIACQAAARgHAWQgHAXgIATg");
	this.shape_113.setTransform(823.6,352.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgNBVIAAgOIgEhWQgBg5ATgMQASAigBBDQgBBEgZAAIgFAAg");
	this.shape_114.setTransform(824,366.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgoBFQgGgcAegwQAbgxAdgQQAMA/hHBSg");
	this.shape_115.setTransform(814.4,334.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgWBIQAAg4ADgaQAEgyAkgOQAEAdgEAtQgBAagFAxg");
	this.shape_116.setTransform(811.6,350.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgHhKQAXAJAQA+QAQA+gfAJIACAJQhhinBHAQg");
	this.shape_117.setTransform(814.7,366.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAOhLIAJgBQAMAZgOAvQgHAYgOApIgbAPQALheAeg5g");
	this.shape_118.setTransform(800,333);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgXAGQgOhDAPgVQAXghARBYQAOBDgBAwIgaAEQgPgWgNhAg");
	this.shape_119.setTransform(801.2,350.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgSAMQgfgzgBgbQACgEANgFQAKgDAHgCQAqA/AIANQAfA2gTAYIgHAHQgZgSgegzg");
	this.shape_120.setTransform(807.4,370.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgWAIQAGgrAQgXQAigygJBKQgEAmgLBIIghADQgFgfAGgog");
	this.shape_121.setTransform(789.4,336.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgvhjQAPAQANgFQAGgCAMgMQAGgHADAHQAEAKADArQAEBFAdBDIglAUQgjiNgXhBg");
	this.shape_122.setTransform(792.7,356);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AATBJIAEgCQgsgwgIgLQgeglAAghQAJACAOAAQgBgKAEgMIAEgSQALAPAGAcQAIAeAFANQAKAQASAUIAfAiQgDAGgIABIgNAAQADALAAAEQgBAGgEAJQgLgIgEgQg");
	this.shape_123.setTransform(801.3,375.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgNAAQAAgaAIgXIAAAHIACgGQABgEAHABQAKAPgBAdQgBAkABAIIgSAQQgKgVABggg");
	this.shape_124.setTransform(781.5,370.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AABAiIgCgEQgFgKgPgVQgMgSgFgMIgIAAQAEgHAAgHQAGgFAOgFQANgGAJAAQgMAwA7AfIgiAsQgMgQAAgMg");
	this.shape_125.setTransform(785,382);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAqAwQgDgCgEgNIgBAFIgjgMQgWgIgNgKIACADQgZAQgIgUQgJgRAegDQgTgZARgHQASgIANATIABAJQAaAXAmAEIAKgFIAGAEIAGAGQgRAQACAAIgCABIALASQgMAGgGAAIgEAAg");
	this.shape_126.setTransform(796.3,388.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgjAAIAFAAQAIgRARgIQAOgIASAFQAWAsggAMQgHADgHAAQgVAAgRgfg");
	this.shape_127.setTransform(827,379.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgXgEQAVgxAVADQARACAAARQAAARgOATQgaAtgeABQgGgPARgog");
	this.shape_128.setTransform(831,389.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgTAUIgBgEQAJgdATgHQAJAIACAGQACAGAAAMQgaAJgNAAIgBgBg");
	this.shape_129.setTransform(821,396.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AghAqIgNgOQANgMALgnQAIgfAUABQAgADAHAcQAHAXgQAYQgPAZgXADIgIABQgRAAgGgMg");
	this.shape_130.setTransform(822.5,387.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgaARIAGgqQAbgXANAOQALALgGAaQgFAbgOAIQgEADgCAAQgNAAgNgYg");
	this.shape_131.setTransform(815.4,396.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AggARQgFglAsgoQAiAlgJAoQgKAsgvABg");
	this.shape_132.setTransform(816.2,381.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgWAeQgSgeAOgdQAPggAjADIgCgEQASAvgLAzQgGAbgMAAQgLAAgWghg");
	this.shape_133.setTransform(808.3,392);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3C3755").s().p("AgOgCIAdgCIgbAJIAAAAQgCAAAAgHg");
	this.shape_134.setTransform(-292,289.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3C3755").s().p("ApJEeQAcozCvkWQAVgEANgHQANgJAAgJQAAgKgOgJQCQjADfAAQG9AABlLYQAgDigEEsQgCCXgFCRIyMApQgVjjAPkbg");
	this.shape_135.setTransform(-352.2,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]}).wait(1));

	// objects
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#201121","#221223","#2B1A2C","#311F32","#332134"],[0,0.031,0.263,0.541,1],0,35.5,0,-35.4).s().p("AunD4QAahoBLAKQAeAEAugmQAzgqAZgEIAAAgQAlg9A4AUQAIgSAPgNQAUgRAggHIAIAAQAAglAigWQAdgSAogBQgDgjATgRQASgQAgADQApgaAuALQALgIAMgFQgKgGgGgKQgHgMAHgJQAHgJASADIAHgGIgHAOIAggoIgZAaQAHgOANgPQAWgZAXgMIgKAKQAqgcBIAKIAAgIQAAgYARgQQARgQAcAAIgIAXQAMghAaAFQAYAFAaAgIAYAQQAegGAXAMQAXANAMAdIgeAAQAbABAPAVQANATAHAnIgoAQQAjgGATAVQASAUAAAlIgVAHQAhgKAdAJQAbAJASAXQgSACgUAIIAogIIgCgCQAWgCAUAHQAZAKARAYQARgOAXgFQAqgKAkAYIgIAOQARgGAkAKQAlANARAeQALAAAMABQAwAHAeApIgYAYQAdgLAaAEQAYAEAZATIAUAIQAZAKASARQA6A2gZBfI9eAgQgCg2ANg0g");
	this.shape_136.setTransform(444.4,351);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgDAEIgDgEQgBgGAGgBQAEgBABAFIADAEQABAFgGACIgCAAQgCAAgBgEg");
	this.shape_137.setTransform(407.6,246.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgiHSQAIhfgHiNQgKi8AAgwQAAhPANiHQAOiaABg6IAVglQgDgbAJgQQAJgTAXAAQAABRgZC5QgUCoADBgQACAnANBcQAMBcADAvQAJCmhBBgg");
	this.shape_138.setTransform(433.6,313);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgqIEQhBjQALkCQAIjRA8kAIAFgEQAFgQgNgSQgNgTACgIQAAgqAfACQAcACAOArQAEgVAZgOQAbgQAKAWQAIATgcAeQgiAlgDAIIgEAAQg0BIgLChQgBAQAADoQAABkAUB+QAGAmAhC6g");
	this.shape_139.setTransform(425.1,314.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgNAxQAAg7ARgmQANAVgEAcQgFAegQASg");
	this.shape_140.setTransform(444.5,205.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgNAsQAAghACgNQAEgZAKgQIAKAAQADARgDAaQgCAXgIAVg");
	this.shape_141.setTransform(442.4,215.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AghBQIAFgOQAMg4AIgdQANg5AagGQAJAogVBBQgSA8gWAAQgGAAgGgDg");
	this.shape_142.setTransform(439.5,230.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AghBPQgJgbAXg2QAVg2AdgWQAMAjgQAuQgMAlgYAng");
	this.shape_143.setTransform(433,192.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgSBNQgFg6ABgaQABgzAmgSQAGAeAAAuIgBBNg");
	this.shape_144.setTransform(429.6,210.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgcgRQgHhSAqAYQAYAQgBBAQgBBEgiAAIAAAJQgQgggHhDg");
	this.shape_145.setTransform(430.7,227.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAVhMIAJAAQAMAagSAwQgJAYgQApIghAOQAShfAlg6g");
	this.shape_146.setTransform(421.3,191.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgDBeQgQgYgGhDQgGhGATgTQAcgeAIBbQAGBGgGAxg");
	this.shape_147.setTransform(419.4,209.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgYAEQgTg7AHgcQAFgFAfAAQAcBMAEANQASBBgbASIgJAFQgUgZgSg8g");
	this.shape_148.setTransform(421.7,229.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgXAMQgBgtANgaQAag5AFBMIAEBzIgjAJQgMgeAAgqg");
	this.shape_149.setTransform(408.6,191.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgkhtQANATAPgDQAHgCANgJQAJgHACAJQADAKgDAsQgGBDAUBMIgoAPQgRiOgQhNg");
	this.shape_150.setTransform(409.5,212);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AACBbIgBgOIAEAAQghg/gFgLQgUguAJghIAXAKQADgMAHgLIAJgPQAGASgCAdQgBAgAEAPQAGASAOAaIAXArQgGAFgIgCIgPgDIgBAQQgBAFgHAHQgGgGgCgIg");
	this.shape_151.setTransform(414.5,232.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgOAGQgMgZgBgZIADAHIgBgHQAAgEAJgDQAQAKAJAcQAOAhAEAIIgNAYQgRgQgLgeg");
	this.shape_152.setTransform(385.1,225.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AANAjIgFgDQgIgIgVgSQgSgNgIgJIgIADQACgHgDgJQAEgGAOgKQAMgJAKgDQAAAzBJAKIgWA2QgSgMgEgLg");
	this.shape_153.setTransform(392.8,236);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAgA7QgDgDAAgOIgDAFIgigXQgUgOgKgMIABACQgfAHgDgTQgEgWAgAHQgNgfAVgCQAVgCAIAXIgCAIQAXAfAkAQIAMgEIAFAIQAEAEABAEQgaAMAGgCIgDABIAHAVIgPACQgHAAgDgDg");
	this.shape_154.setTransform(404.7,243.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AglgMIAFAAQAOgOASgDQATgDARALQAKAxglADIgEAAQgfAAgLgrg");
	this.shape_155.setTransform(439.6,244.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("Ag3AjQAHAEAGACQgCgRAegiQAhgqAWAKQASAGgFASQgFAQgUAPQgoAkgfgIIABAEg");
	this.shape_156.setTransform(440.1,254.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgXAOIAAgFQASgaAWAAQAHAKAAAHQABAEgEAOQgeAAgOgEg");
	this.shape_157.setTransform(428.2,258.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgQA0QgZgEgEgQIgKgTQASgIAWgjQAPgcAXAIQAhANAAAeQAAAYgYAUQgSAQgUAAIgKgBg");
	this.shape_158.setTransform(432.3,250.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AghAIIATgoQAjgOAKARQAIAPgNAYQgNAZgQAEIgEAAQgRAAgJgfg");
	this.shape_159.setTransform(422.6,257.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgoA2IAEgvQAGgmA6gaQAZAwgWAlQgRAegeAAQgLAAgNgEg");
	this.shape_160.setTransform(427.3,242.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgjARQgLgiAYgaQAWgaAmANIAAgEQAFA0gaAvQgMAWgJAAQgQAAgPgsg");
	this.shape_161.setTransform(416.7,251.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#332134").s().p("AgWieIAzAGIAAEhIg5AVg");
	this.shape_162.setTransform(458,152.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#332134").s().p("AGanjIkglQIqjiHIFkAGQFgADgFgJQgFgKDMC9IDNC+IjMXyIiQASg");
	this.shape_163.setTransform(475.2,261.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#201121").s().p("AEvWRQh8gHhzABIAAABIiAAAIAAgBQhqgCiogTQihgThvAAQAAkbg6oqQg5ooAAkcQBFhSB2hqQCChxA5g4IDKAAQgLiagEibQjTgRiLgCQAFhfAXhGIAAgcQCPAZCwAGQgCiSAAiSQAvAJBAADQAuACBHAAIAAEZIF3gGQgUA4gPA5QgRBAgEAqQh/gBjAgQIAAEjIElAAQA5A4CCBxQB2BqBFBSQAAC9gdDwQgSCQguEiQgvEjgSCQQgdDxAAC9QhmAAiGgJg");
	this.shape_164.setTransform(455,231.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3C2A3E").s().p("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");
	this.shape_165.setTransform(597.1,179.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]}).wait(1));

	// objects
	this.instance = new lib.Path_0();
	this.instance.setTransform(286.6,158.4,1,1,4,0,0,1.3,9.8);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(285.6,132.3,1,1,4,0,0,10.8,4.5);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(280.8,147.8,1,1,4,0,0,15.5,20.3);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(280.8,147.8,1,1,4,0,0,15.5,20.3);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.Group();
	this.instance_4.setTransform(281.4,198.2,1,1,4,0,0,40.2,15.5);
	this.instance_4.alpha = 0.148;

	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(288.1,214.8,1,1,4,0,0,50.6,109.8);
	this.instance_5.alpha = 0.148;

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D6D6D6").s().p("ApaovICKgCIgKieQgKibB8hwQB7hxC5gCQC2gCCOBsQCPBtAPCbIAQCfICdgCIAAaBIuhAMg");
	this.shape_166.setTransform(277.9,214.6,1,1,4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E7E7E7").s().p("Ar/rPICcgCQgOjeCjifQCjieD3gEQD1gDC9CaQC9CaAWDeICugCIABfFIy0APg");
	this.shape_167.setTransform(276.9,214.6,1,1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// objects
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#353F5A").s().p("AmjM8IBOueQgFhDAihFQBDiMC5gSQAAg6AGhiQhLAEgvgEQgWAcgPAjIAAgSQgSikgBg1IAIAAIAeAyQARAYAYgBIBmAAIABgtQgIgSgHgxQgIgzgHgSIA/ASQBEARAlgGIgEAJIgUA2QgPAkgGAWIAAAfICUAAIAvhIQAOBVAKBgIgIAAQgNgLgeAAIgbABQg3gIhWADIAACgQDKAJBKCPQAjBJgEBGIBGOeg");
	this.shape_168.setTransform(532.4,203);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#353F5A").s().p("AmjM8IBOueQgFhDAihFQBDiMC5gSQAAg6AGhiQhLAEgvgEQgWAcgPAjIAAgSQgSikgBg1IAIAAIAeAyQARAYAYgBIBmAAIABgtQgIgSgHgxQgIgzgHgSIA/ASQBEARAlgGIgEAJIgUA2QgPAkgGAWIAAAfICUAAIAvhIQAOBVAKBgIgIAAQgNgLgeAAIgbABQg3gIhWADIAACgQDKAJBKCPQAjBJgEBGIBGOeg");
	this.shape_169.setTransform(371.6,214.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#311B21").s().p("AmxhAIE3gYIgZlBIkIAVIgOiwIEIgVIgMiXIC1gOIALCXIEIgVIAOCwIkIAVIAZFAIE4gYIBAMvIsjA/g");
	this.shape_170.setTransform(645,251.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#353F5A").s().p("AmjM8IBOueQgFhDAihFQBDiMC5gSQAAg6AGhiQhLAEgvgEQgWAcgPAjIAAgSQgSikgBg1IAIAAIAeAyQARAYAYgBIBmAAIABgtQgIgSgHgxQgIgzgHgSIA/ASQBEARAlgGIgEAJIgUA2QgPAkgGAWIAAAfICUAAIAvhIQAOBVAKBgIgIAAQgNgLgeAAIgbABQg3gIhWADIAACgQDKAJBKCPQAjBJgEBGIBGOeg");
	this.shape_171.setTransform(717,242.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#4A5D89").s().p("Ak2HbIA6oZQgEgnAZgoQAxhRCLgKQgBgeAEg9Qg0ACgmgCQgPAPgMAWIAAgLQgVhTAAgfIAFAAQANAQANAHQAOAIAUAAIBMAAIABgaIghhEIAKAAQBMALAwgGIgCAGIgQAfQgKAVgEAMIAAATIBtAAIAjgrQAEAWABAnQABAsACAQIgFAAQgKgGgSgJIgQgGQgngFhAACIAABdQCVAFA2BTQAbAqgDApIAyIZg");
	this.shape_172.setTransform(727.9,276.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168}]}).wait(1));

	// objects
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#201121").s().p("AAAhDIAAAlQABAugBA0g");
	this.shape_173.setTransform(530.5,155.5,0.725,0.66);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#201121").s().p("Eg+fA+hMAAAh89ILrAAQDCAHF1gLQFIABDmBKQCHAvBxBUQBcBEBgBuICpDLQBpB/BUBQQBbBbB2A6QB4A6B7ANQEaAcC2jLQBwiAgYh8QgUhphmg6Qhjg4hSAlQhbAqAFCLQgEgpgBgXQgDgpAJgQQA4hYAMgRQAhguAfgQQBEgjCRBSQCIBEAoB3QApB6hDCbQg8B3iFBbQh6BUikAuQieAsifgCQiigCh6gyQiNg6h1h7QgqgsgzhCIhXhwQhmiBhbg4Qh9hMivAFQjpgBhwADQjAAFiDAnQAAAAABABQAAAAgBAAQAAABgBAAQAAAAgBABQgcAHgYAKQAOAvAzBvQAoBlgTA9QAKg4gzhNQg6hZgFg0QgcAnAEA4QAHBTgBALQgEAbgeAtQgZAlAHAbQgRgsAGgvQAGgwAcgtQg3AsgOARQgfAmAFArQgLgWAQgrQAGgQAfg/QAYgyAEgaQAGglgcgQQhAAohIA/QgBAqAIBPQAIBHgCAQQgUhDgUguIgWgyQhsBmhNB8QhrCtgLCpQDkg4CgALQDwARA3CnQgsgzhlgOQhfgNhvAZQhyAahXA5QhhBAgiBWQgaBFADBVQADBKAaBdQA7ArBMAXQBMAYBOAAQhAAQhFgCQhFgDg+gUQAfBcBIC6QA6ChAFBkQAMCFgPBsQgSB5g2BtQgLAVgYAjQAwBCAqAsQAnAIAsAGQBYhiBsgrQBlgnCOAAQBwAGCBBNQB+BMBcB0QBhB8AYCAQAaCQhLB2IgEgCQhZB2h3AlQiTAriWhhQhRg2gVhaQgShSAlhTQAlhTBKgsQBRgvBfAUQA/APAhAwQAcAqgCA5QgEA2gdArQggAugwAMQhAAQgZgHQgmgKgdg9QgUgrA1g1QA2g1ApAfQg2AFgUAhQgRAdAOAjQAPAiAgAJQAlALAkghQBDg9gjhPQgOghgegWQgdgWgkgBQhUgBg4ArQgxAngUBBQgRA7ALA8QAMA8AhAeQCUCBCkg8QBqgpBHhcIgGgEQAVgxgPhEQgOhAgqg/QgphAg2grQg6gtg4gJQjDgphyCyQhXCGgdDmQgLBZgNA4QgQBKgYA3QgDCWgZDoQgNh2gziEQgiAggsAZQgOCCgCC2QAABoACDKQgchogeizQgijPgShNIgSAHIAADOIgfhRQgUgygPghQiDBxAZEoQAIBlAcCHIAqC7QANBEAGBQQCFg6ApjOQAHBTg3CAQglBXhYCUQgPE1gMCEQgTDOgmDcQBYE6C8C8QC9C9DBgiIHagTQHugTBeABQBrABCVgGID6gLQEogLDGAbQC4AZI0grIGkgfQDbgOBsAFQByAHDpAXQDrAXB3AIQGjAcEtgzQC4gfFehIQFIhDCygcQH5hRDqmFQCZj+ASlTMAACAh7gEg4cgItQAjAzAsAsQAjACAqgzQhagbhEgvQAAAQACAMgEg3egHSQgegfgZghQAJAUALAOQARAWASAIIAAAAgEg4egJUQBGAwBeAdIAEgFIhOhIQgrgpgegiQgQAogBAjgEg4KgKpQAfAjArAqIBPBJQAWgdAZgtIgpgiQhFgVhSgngEg09gJmIAGgMIgegHgEg3WgMOIAvAwQA6A4A7ArIAAAAIAVgmQhSg1hKhYIgIgDgEg1JgKAQgvgjgxgvQgegdgVgXIgKATIB/BrIAeAIIAAAAgEg1/gKPIhshbQgKARgKAVQBIAjA4ASgEg0YgKqIAYgqQgfgcgYgZQg5gMg3gTQBFBPBKAvgEgz7gLcIAVgfQghgEgfgGIArApgEg1CgMVQgpgtgng0IgnA5IAGAHQA9AVA0AMIAAAAg");
	this.shape_174.setTransform(240.5,39.3,0.725,0.66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.shape_173}]}).wait(1));

	// OBJECTS
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B8B8B8").s().p("AgJAPQgGgGgBgIQAAgGAEgGQAEgGAHgBQAFgBAGAFQAGAGAAAIQABAGgFAGQgEAHgHAAIgBAAQgFAAgEgEg");
	this.shape_175.setTransform(70.4,98.8,2.296,2.086);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B8B8B8").s().p("AgOAVQgJgIgBgLQgBgJAGgJQAIgJAKgBQAIgBAIAHQAJAHABAMQABAJgGAJQgIAJgKABIgCAAQgIAAgGgGg");
	this.shape_176.setTransform(206.1,84.8,2.296,2.086);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B8B8B8").s().p("AgIANQgFgFgBgHQgBgFAEgFQAFgGAGgBQAFAAAFAEQAFAFAAAHQABAFgEAFQgEAGgHABIgBAAQgEAAgEgEg");
	this.shape_177.setTransform(176.2,81.8,2.296,2.086);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B8B8B8").s().p("AgVAXQgLgHgBgNQgBgLAJgJQAKgKAOgCQAMgBALAIQALAHABANQABAKgJAKQgJAKgPACIgCAAQgLAAgKgHg");
	this.shape_178.setTransform(169.5,89.4,2.296,2.086);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B8B8B8").s().p("AgNAYQgHgJgBgNQgCgMAGgKQAGgKAJgBQAIgBAIAJQAHAJABANQACALgGAKQgGALgKABIgCAAQgGAAgHgIg");
	this.shape_179.setTransform(192.2,84.5,2.296,2.086);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B8B8B8").s().p("AgVAWQgKgIgBgLQgBgKAJgJQAJgKAOgBQAMgBALAHQAKAHABAMQABAKgJAKQgJAIgOACIgCAAQgMAAgJgGg");
	this.shape_180.setTransform(183.4,86.7,2.296,2.086);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#B8B8B8").s().p("AgNATQgHgHgBgKQgBgIAGgJQAGgHAJgCQAIAAAHAGQAHAHABAKQABAIgGAJQgGAHgJACIgCAAQgHAAgGgGg");
	this.shape_181.setTransform(197.6,85.5,2.296,2.086);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B8B8B8").s().p("AgSAYQgKgIgBgNQgBgLAIgLQAIgKANgBQAKgBAKAIQAKAIABANQABALgIALQgIAKgNABIgCAAQgKAAgIgHg");
	this.shape_182.setTransform(139.9,90,2.296,2.086);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B8B8B8").s().p("AgPAVQgJgHgBgMQAAgJAGgJQAHgJALgBQAJgBAIAHQAJAHABAMQABAJgHAJQgHAJgLABIgCAAQgIAAgHgGg");
	this.shape_183.setTransform(125.8,92.7,2.296,2.086);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B8B8B8").s().p("AgPASQgIgGgBgKQgBgIAHgHQAGgIALgBQAJgBAIAGQAIAGABAKQABAIgHAHQgHAIgKABIgCAAQgIAAgHgFg");
	this.shape_184.setTransform(112.4,94.3,2.296,2.086);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B8B8B8").s().p("AgRAUQgJgHAAgLQgBgJAHgIQAIgJALgBQAJgBAKAHQAJAHAAALQABAJgHAIQgIAJgLABIgCAAQgJAAgIgGg");
	this.shape_185.setTransform(103.9,95.1,2.296,2.086);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B8B8B8").s().p("AgRAYQgKgIgBgNQgBgMAHgKQAIgKAMgCQALgBAJAJQAKAIABANQABAMgHALQgIAKgNABIgCAAQgJAAgIgIg");
	this.shape_186.setTransform(96.7,98.9,2.296,2.086);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B8B8B8").s().p("AgWAWQgMgHgBgMQgBgJAKgKQAKgJAPgCQANgBALAHQAMAHABAMQABAJgKAKQgKAJgPACIgDAAQgMAAgJgGg");
	this.shape_187.setTransform(80.9,93.6,2.296,2.086);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#B8B8B8").s().p("AgRASQgJgGgBgKQAAgIAHgHQAIgIALgBQAKgCAJAGQAJAGABAKQABAIgIAIQgIAIgLABIgCAAQgJAAgIgFg");
	this.shape_188.setTransform(80.8,86,2.296,2.086);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#2B1211").s().p("AgTAZQgKgJgBgNQgBgMAIgLQAIgKANgCQALgBALAJQAKAIABAOQABAMgIALQgJAKgNACIgCAAQgKAAgJgIg");
	this.shape_189.setTransform(226.4,95.8,2.296,2.086);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#2B1211").s().p("AE5BjQgNiRhmheQhlheiAANQiCANhSBxQhTBwAOCSQADAiALAmIgVADQgKgjgEglQgOicBYh2QBXh4CLgPQCIgOBsBkQBtBkAOCaQAHBLgTBHIgWADQAVhIgIhLg");
	this.shape_190.setTransform(154.3,48.7,2.296,2.086);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#2B1211").s().p("Am7BZQgJgIgBgMIgEgtQgBgMAHgKQAIgHALgBINXhYQALgBAJAHQAJAIABAMIAFAtQABAMgIAKQgHAIgMABItWBXIgDAAQgKAAgIgGg");
	this.shape_191.setTransform(154.3,102.4,2.296,2.086);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B8B8B8").s().p("AltClQgogWgCgjQgLgGAAgLQgBgIAEgGQAFgHAIgCIgBgHQgCgMAIgKQAHgJALgBIAJAAQAHgQASgCQAIgBAJAEQAHgKALgBQAGgBAJAEQAGgHAKgDIgCgHQgBgLAGgIQAGgJALgBQAAgKAHgIQAIgHAMgBQALgCAJAGQAHgNAPgBQAOgCAJALQAJgHAKAAQAMgBAKAFQAKAGADAKIABAAQAKgBAKAFQADgFAEgEQgKgIAAgNQgBgMAHgJQAIgKALgDIgBgHQgCgPAKgLQAJgMAOgBIADgBQAHgMANgBQAOgCAHAMQAIgFAHAAQAOgCAMAKQALAJACAQIADgBQANgBALAJQALAKABAOIAAAEQAJACAFAHQAGAHABAJQABAHgCAGQAEgDAFAAQAIgBAIAEQAHADAEAGIAIgBQAAgJAGgHQAGgHAIgBIABAAQgBgMAHgJQAHgJAMgBQAHgBAHAEQAHgTATgBQAOgCAKAJQAKAIABAOQABAIgDAIQALAGADAOQAHgIALgBQANgBAJAIQAKAJABANQABAKgEAHQADAHADALQARgKANAKQALAHAFARIALgBQAGgBADAEQAEADABAGQABAFgEAEQgDAEgFABIgNABIgCAAIgHAFQghASgIgCQgSgEgEAAIiuAVQh/AQggANQgrAQhrAFQhcAEgeAXQgVARgYAAQgSAAgUgKg");
	this.shape_192.setTransform(153.6,81.6,2.296,2.086);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#351F1E").s().p("AgtC7QhHhfgLhzQgHhPAWhNQAVhKAuhBIB2gLQgpBOgSBVQgRBaAGBZQARC0BuCJQhsgyhDhdg");
	this.shape_193.setTransform(82.6,194.7,2.296,2.086);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#2B1211").s().p("AmZDuQhRhqgMiDQgIhUAYhUQAXhRAzhHILYhLQBQA6AwBRQAyBUAJBhQAMB3g3BwQg2BthnBMIoBA1Qh6g3hNhmg");
	this.shape_194.setTransform(156.9,191.4,2.296,2.086);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#231010").s().p("AmxEEQhRhqgMiDQgJhiAhhgQAhhdBDhLILkhMQBQA8AxBUQAyBYAJBkQAMCBg6B4Qg6B1htBNIojA4Qh6g2hNhmg");
	this.shape_195.setTransform(162.3,186.8,2.296,2.086);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]}).wait(1));

	// OBJECTS
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#311B21").s().p("Ah9CUIAlkCIAhAHQADgYAZgMQAZgMAcAGQAfAHAUAWQAUAVgEAYIAhAHIgeDUg");
	this.shape_196.setTransform(1190.7,181.3,4.59,5.002);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#311B21").s().p("AhKCeIAFi1IA5AEIAChHIgwgDIACgnIAvACIACghIAfABIgCAiIAwACIgBAnIgwgCIgCBHIA4ADIgGCzg");
	this.shape_197.setTransform(1068.7,158.8,4.59,5.002);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#311B21").s().p("AhUCTIgMjtIAcgCQAAgVARgPQASgQAagCQAYgCAUANQATANABAVIAcgCIAMD6g");
	this.shape_198.setTransform(822.5,140.4,4.59,5.002);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#311B21").s().p("AhbC+IAAjSIAWAAIAAgZIAjAAQAIgUARgGIAAg4IgqAAIAAgaIAqAAIAAgkIATAAIAAAkIAqAAIAAAaIgqAAIAAA4QARAGAIAUIAjAAIAAAZIAWAAIAADSg");
	this.shape_199.setTransform(615.1,175.1,4.59,5.002);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#311B21").s().p("Ag3CFQgRhXgWhHIAqgkQACgUALgZQAKgWAWgDQATgEAOATQAQAVAGATIAvAXQgIBYACBig");
	this.shape_200.setTransform(713.5,175.1,4.59,5.002);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#311B21").s().p("AwoBzQBfgnA6gFQBngKBugVQA4gLAigIQA3gICEhDQB2g+BCADQAmABAuAPQAaAIAwASQBTAdA3ghQBGgoA1ABQAuACA+AlQAqAaB0ABQCQACAvAKQDRArDZBsg");
	this.shape_201.setTransform(903.2,239.4,4.59,5.002);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#311B21").s().p("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");
	this.shape_202.setTransform(1010.7,-449.5,4.59,5.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.4,-1183.2,2103.2,1671.5);


(lib.MonsterA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E0E0E").ss(4).p("ADJhKICBEiQB+EkgPAFIAYgIIKUgTQg5A5g/A+Qh/B6ghATQheAribArQk2BVkugCQiIAJjrg6Imfh4QhigmhcgqQi5hUAcgTQAOgKCqAAQBVAABSACIHIgEIhwm2IC5kSIh1pQIizC8IgDCMIg4irIDllAIASAAIFLDcIEmH/g");
	this.shape.setTransform(2.1,-54.9,0.264,0.264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjFCSQgPgNgBgUIgKjNQAAgUANgPQAOgPATgBIFUgPQAUgBAPAOQAPANABAUIAKDNQABAUgOAPQgOAPgUAAIlTAQIgDAAQgTAAgNgNgAidhOIAICrIEzgOIgIirg");
	this.shape_1.setTransform(2.8,-42,0.264,0.264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6C0F").s().p("AmKBNIAAgxQgBgxgHgzQCuAKCggDQENgFCZgnQAmBiALAvQhbAiiSAVQh9ATh4AAQihAAiaghg");
	this.shape_2.setTransform(3.1,-42.4,0.264,0.264);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2C2C").s().p("Aj8NWIiMgrQi3gHi4ghQlyhBgKh8IMYgJQAAhfgIhCQgWiohDhwIC5kSQhhofgUgxIizC8IgDCMIg+ifIDulIIFbDZIEmH/IgxBuIBrDqQBwD/AWBiQJ4gbA0AAQAmAAjhB5QjfB5hIAWQh/AqhqAcQjIA0iYADIgUAAQiMAAiggog");
	this.shape_3.setTransform(1.8,-55.4,0.264,0.264);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#121212").s().p("ApFC4IicgfQgHgKgSgNQgkgZg4gNQCkAAFOAZQEzANDngyQECg3CYhYQBwhDAqhMIBkgGQATAAgYAnQgXAjgvAzQh2B7hDAUQivA0igAkQkqBCjRADIgNAAQiIAAiwgdg");
	this.shape_4.setTransform(8.9,-36.7,0.264,0.264);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#311B21").s().p("AgRA1QgUgTgEgCQgLgGgPABQgQAAgMAIQgBgPgTgJQgUgJgQAMQgBgPgUgHQgWgJgaAKQANgOAcgTQAkgZAPACQAXgCAqAbIApAcQAIABAEgFQAEgFgFgDQgFgBAAgKQAAgOgCgFQACgBAFAGQAGAHAAAJQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQACgCABgBQACAAACADQAAAAAAAAQABAAAAABQAAAAAAgBQABAAAAAAQgBgIAFgHQAEgHADABQgCAFABAOQABAKgFABQgFADAEAFQAFAFAHgBIAogfQAogeAXABQAPgDAkAWQAfASANANQgbgIgVAIQgUAJAAAQQgVgJgRAIQgQAKAAAQQgOgOgUAFQgPAEgMALIglAmIgSgUg");
	this.shape_5.setTransform(4.9,2.4,0.264,0.264);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0E0E0E").ss(3.1).p("AESgoQgTAhguAOQhdAhiEhNQgsAlg1AXQhsAvg0hI");
	this.shape_6.setTransform(4.3,-7.8,0.264,0.264);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0E0E0E").p("AAog4IgoBvIgohUIAIgTIA7gNg");
	this.shape_7.setTransform(-0.3,-5.4,0.264,0.264);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CDC2C2").s().p("AgogZIAIgTIA8gOIAMAGIgoBug");
	this.shape_8.setTransform(-0.3,-5.5,0.264,0.264);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0E0E0E").p("AAng7IgfBzIguhPIAFgUIA4gUg");
	this.shape_9.setTransform(10.1,-6.1,0.264,0.264);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CDC2C2").s().p("AgmgTIAFgUIA5gUIAPAEIgeBzg");
	this.shape_10.setTransform(10.1,-6.2,0.264,0.264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC5810").s().p("AhDhHQAvgHAngLQAmBhALAxQgsAQhJARQADhNgVhUg");
	this.shape_11.setTransform(12,-42.9,0.264,0.264);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC5810").s().p("AmOAaIAAgsQD/AxDtgaQCfgPCGgwQAHAVAFAYQhbAgiRAVQh+ATh4AAQihAAiaghg");
	this.shape_12.setTransform(3.2,-41,0.264,0.264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQASQgHgHgBgKQgBgJAIgHQAHgIAKgBQAIAAAJAHQAHAHABAKQABAJgIAHQgHAIgLAAIAAABQgJAAgHgHg");
	this.shape_13.setTransform(14,-20.3,0.264,0.264);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0E0E0E").s().p("AgfAeQAAgmAZgeQAOAAALAKQAMALABAQQABAOgLANQgLAMgPABIgDAAQgNAAgLgJg");
	this.shape_14.setTransform(11.8,-19.5,0.264,0.264);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF0C0F","#0E0E0E"],[0,1],6.5,1.7,-3.3,12.5).s().p("Ag5BPQgcgcgEgpIAAgLQAMAHAOgBQARgBALgKQALgMgBgQQAAgQgMgLQgMgLgQAAQANgPAKgGQANgIAZgDQAXgDAZASQAWAPALAYQAKATACAJIABATQACAqgZAgQgZAgglACIgFAAQgfAAgagag");
	this.shape_15.setTransform(13.4,-18.6,0.264,0.264);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_16.setTransform(11,-18.5,0.264,0.264);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_17.setTransform(11,-18.4,0.264,0.264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F6148").s().p("AhFBdQgdgegGgrQAGAjAYAZQAcAcAkgCQAkgCAZggQAZghgDgpQgCgsgcgeQgcgdgkACQgkACgZAeQgSAWgEAdQAEgkAXgcQAdgkAqgDQAqgCAhAjQAhAiADA0QADAxgeAnQgdAmgsACIgFAAQgmAAgfgfg");
	this.shape_18.setTransform(13.8,-18.6,0.264,0.264);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A1704C").s().p("AhQBuQgmgngFg6IAAgCQAEAyAgAhQAhAhArgCQAqgCAdgmQAegngDgxQgDg0ghgiQghgjgqACQgqADgdAkQgdAkAAAvIAAAAQgBg6AigqQAjgqAygDQAygCAnApQAmAoAEA9QADA7gjAsQgiAtg0ADIgGAAQgsAAglgkg");
	this.shape_19.setTransform(14.3,-18.6,0.264,0.264);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB9472").s().p("AheCBQgpgpgJg7QAJAwAhAiQAnAmAygCQAygDAigtQAjgsgDg7QgEg9gmgoQgngpgyACQgyADgjAqQgdAkgEAvQAEg6AjgrQAogyA8gEQA7gDAtAwQAuAxAEBHQAEBFgpA1QgpA0g9ADIgHABQg1AAgqgrg");
	this.shape_20.setTransform(14.9,-18.6,0.264,0.264);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQASQgHgHgBgKQAAgJAHgHQAHgIAKgBQAJAAAIAHQAHAHABAKQABAIgIAIQgHAIgKAAIgBABQgJAAgHgHg");
	this.shape_21.setTransform(-5.9,-19.8,0.264,0.264);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0E0E0E").s().p("AgTAcQgMgKgBgRQgBgNALgNQAKgMAOgBQAbAbAFAmQgLALgPABIgDAAQgMAAgMgLg");
	this.shape_22.setTransform(-4.9,-19,0.264,0.264);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FF0C0F","#0E0E0E"],[0,1],10.8,1.6,-3.7,8.5).s().p("Ag6BNQgcgdgDgsQgCgqAZggQAZggAlgCQAjgCAbAbQgQACgLAMQgKAMAAAQQABAQANALQAMAKARAAQAPAAAKgLIABACIAAAJQABAqgZAeQgZAfgkACIgFAAQggAAgagcg");
	this.shape_23.setTransform(-6.3,-17.9,0.264,0.264);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_24.setTransform(-3.9,-18.1,0.264,0.264);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0E0E0E").ss(0.2).p("AAAACIAAgD");
	this.shape_25.setTransform(-3.9,-18,0.264,0.264);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7F6148").s().p("AhFBbQghgigDg0QgCgxAdgmQAdgmAsgDQApgCAhAhQAdAeAGAqQgGgjgYgYQgcgcgkACQgjACgZAgQgZAhACApQADAsAcAeQAcAdAjgCQAkgCAZgeQAWgbACgjQgCArgaAgQgdAlgrACIgGAAQgmAAgfghg");
	this.shape_26.setTransform(-6.7,-17.9,0.264,0.264);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A1704C").s().p("AhRBsQgngpgDg9QgDg6AigtQAigtA0gCQAwgDAnAnQAmAmAGA5IAAADQgFgyggghQghghgrACQgqADgdAmQgdAlACAyQADA0AhAiQAhAjAqgCQArgCAdglQAXgdAEglQgEAvgcAkQgjAqgyADIgGAAQguAAgkgmg");
	this.shape_27.setTransform(-7.2,-17.9,0.264,0.264);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CB9472").s().p("AhgB/QgugxgDhHQgEhFApg0QAog1A9gDQA5gDAtAtQAmAmALA4QgKgtgfgeQgngngyADQgyACgiAtQgiAtADA6QADA9AnApQAmAoAygCQAygDAjgqQAdglAEgxQgDA7gkAtQgoAyg7AEIgIAAQg2AAgrgtg");
	this.shape_28.setTransform(-7.8,-17.9,0.264,0.264);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0E0E0E").ss(6.3).p("ALnDQQgBALAFAMQACAHAHASQAcBVggBgQgeBZhFA/Qg3AzhTArQg6AehgAkQhaAihPAPQgkAHgyACQg5ABgdABQjcgFjJhEQmUiIBjk3QgBgpgVhBQgqiAhfhwQgCgCAehKQAehJgOgMQgXgUgWgXQgYgaACgFQACgHAwAAQAxABADgFQAEgFgWghQgWggAEgDIAggJQAmgKAcAAQAIAAA3AEQAnADgBgFQgLhBgEgWQgFgjAMAEQAJAEAXATIAeAYQAIAGATg4QATg4gBgcIAuAPQAyAQAaAKQgBgVgGgWQgNgsgcgBIBdgHQBjgDAfAQQgMg7gTgeIBNAOQBTAUAbAfQAGgdAIggQAPhAAMgOIBUAkQBgAsA0AvQABgUgCgaQgDgygMgVIAzgFQA+AAA3AVQCwBEAqD+IAwgHQAbgDA5AQQA5AQgNAGQgNAHgNAOQgLALgHAMQgSAegEAhIBCgZQA/gWgIAIQgIAIgEAqQgFAsAFAZQADAMA0gWQAwgUgFAJQgcAtgTAdQgiA5ADAKQADAMAHAHQAHAGABADQgcBogZBTQgEAMgMAlQgKAegFASQgCAJAAAGg");
	this.shape_29.setTransform(2.9,-21.7,0.264,0.264);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CBC4C4").s().p("AACgSIAXgFIgxAvQAEgfAWgLg");
	this.shape_30.setTransform(2.2,-12.9,0.264,0.264);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#352B2B").s().p("AgdBCQgdgHgPgYQgRgaAKgcQANgnAigFQASgDAOAFIAjgFQAnAEAJAqQAIAigRAZQgPAWgYABQglAFgRAAIgJgBg");
	this.shape_31.setTransform(3.5,-12.3,0.264,0.264);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF70A3").s().p("AgVAYIgBgKQABgOAJgJQAEgGAGgEQAEgFAHgCIAFgBIAFABIAEABIgGALQgDAIgIAKQgGAJgJAIIgIAFIgEABg");
	this.shape_32.setTransform(-9.1,-8.8,0.264,0.264);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF70A3").s().p("AANASQgIgEgJgIQgKgIgGgJIgEgIIgBgEIAEgBIAJABQAMACALAJQAHAHACAFQAEACACAIIAAAGIgCAJg");
	this.shape_33.setTransform(16.7,-9.6,0.264,0.264);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF70A3").s().p("AgVAXIgBgJQABgMAJgLQAEgHAGgEQAEgEAGgBIAHgBIAEAAIAEABIgGALQgGANgFAFQgGAKgJAHIgIAFIgDACg");
	this.shape_34.setTransform(-7.2,-8.3,0.264,0.264);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF70A3").s().p("AANASQgIgEgJgIQgKgIgGgJIgEgIIgBgEIADgBIAKABQAMACALAJQAHAHACAEQAEAFACAGIAAAGIgBAFIgBAEg");
	this.shape_35.setTransform(18.6,-10.2,0.264,0.264);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0E0E0E").s().p("AAZAeQgSgUgQgPQgYgWgRgKQgIgFgGgBIgFgBIgBABIABgBIAFgCQAHgBALADQARADAfAPIAxAYIAVAJIgfAog");
	this.shape_36.setTransform(-5.5,-22.8,0.264,0.264);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0E0E0E").s().p("AhVAVIAYgRQAggWAXgOIAPgJIAQgHIAQgGIAPgCIANgBIAJABIAIACIgRACIgLADIgNAGIgMAJIgNAKIgMAMQgKAMgeAjIgTAXg");
	this.shape_37.setTransform(12,-23.8,0.264,0.264);

	this.instance = new lib.Path_39();
	this.instance.setTransform(-14,-17.1,0.264,0.264,0,0,0,8.3,4);
	this.instance.alpha = 0.801;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#352B2B").s().p("AgdBCQgdgHgPgYQgRgZAKgcQANgnAjgGQARgDAPAFIAigFQAnAEAJAqQAIAigRAZQgPAXgYAAQgmAFgQAAIgJgBg");
	this.shape_38.setTransform(3.6,-12.3,0.264,0.264);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#130E0E").s().p("AglBTQgjgJgUgeQgVggANgjQAQgxArgHQAWgDASAGIAMgEQARgEAPACQAwAEAMA1QAJAqgUAgQgUAcgdABQguAGgVAAIgNgBg");
	this.shape_39.setTransform(3.6,-12.3,0.264,0.264);

	this.instance_1 = new lib.Path_42();
	this.instance_1.setTransform(21.1,-19.3,0.264,0.264,0,0,0,8.7,2.9);
	this.instance_1.alpha = 0.801;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(130,88,52,0.4)","#0E0E0E"],[0,1],-16.4,-22,7,25.3).s().p("AAOJQIgtgCQh/gHhiheQgegegYgiIgSgdQg1hSANlQQAFhqAKh3IAKhiIAbh+QAPgDgIg6IgLg5QDagUBnCxQA0BZAJBcQAugGBRAOQBQAOgfAGQgWAFgbAyQgQAggIAKQAJgDAXgFQBCgPAUgGIgMA9IABANQADASAGAbQACAIAdgLQApgOAOgCQAPgBgpA/QgsBGAEAFQAJAOAGAIQACACABAEQAEAlgvCIQgYBEgYA9IAfBxQAEA0iTAMQgkADgqAAIgYAAg");
	this.shape_40.setTransform(16.5,-27.6,0.264,0.264);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(107,68,36,0.4)","#0E0E0E"],[0,1],3.6,-25.1,-9,17.9).s().p("AjzHaIACheIg0i4IhhiNIAyiaIhOhOIBxgIIgrhHIA3gSQBEgRBCAIIgFiAIBKArIAmh+IByAgIgyhcIAbgEQAhgCAeAGQBfASAeBcIA1B6QA7CMAgBWQAkBhAKBiQAKBsgeA/QhlDUivA7Qg5ATg6AAQh5AAiAhWg");
	this.shape_41.setTransform(-9.4,-25.3,0.264,0.264);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0E0E0E").ss(2.5).p("ALnDOQAAALAEAMQACAHAIASQAbBVggBgQgeBZhEA/Qg3AzhTArQg8AehfAkQhbAihOAPQgkAHgyACQg4ABgeABQjJAIjBg9QmBh6A2lZQgCgpgVhBQgqiAhfhwQgCgCAfhKQAehJgPgNQgWgSgXgYQgYgaACgFQADgHAwAAQAxABADgFQADgFgWghQgWggAFgDIAggJQAlgKAdAAQAHAAA3AEQAnADAAgFQgMhBgDgWQgGgjAMAEQAKADAXAUQAcAXABABQAJAGATg5QASg4AAgbIAtAOQAzAQAaALQgBgWgHgWQgNgrgcgCIBdgGQBjgDAfAQQgLg7gTgeIBNAOQBTAUAbAfQAFgdAIggQAQhAAMgOIBTAjQBgAtA0AvQABgUgBgaQgEgygMgVIAzgFQA+AAA3AVQCxBEApD+IAwgHQAbgDA6AQQA5AQgOAGQgNAHgNAOQgLALgHAMQgSAegDAgIBBgYQA/gWgIAIQgHAHgGAOQgGANgCAMQgDANAMA8QADAMA0gWQAwgUgFAJQgbAqgRAaQgfAzACAKQADALAFAOQAFAMAAADQgbBogaBTQgDAKgNAmQgKAegEATQgDAKAAAFg");
	this.shape_42.setTransform(3,-22.2,0.264,0.264);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E7E0D0").s().p("Al2LxQmBh6A2laQgCgpgVhAQgqiAhfhxQgCgCAfhKQAehJgPgMQgWgSgXgZQgYgaACgFQADgHAwABQAxAAADgEQADgGgWghQgWggAFgDIAggJQAlgJAdgBIA+AEQAnAEAAgGIgPhXQgGgiAMAEQAKADAXATIAdAZQAJAFATg4QASg4AAgbIAtAOQAzAQAaAKQgBgVgHgWQgNgsgcgBIBdgGQBjgDAfAQQgLg8gTgeIBNAOQBTAVAbAeQAFgdAIggQAQhAAMgOIBTAkQBgAtA0AvQABgVgBgZQgEgygMgWIAzgEQA+AAA3AVQCxBDApD/IAwgHQAbgEA6AQQA5AQgOAHQgNAGgNAOQgLAMgHALQgSAegDAhIBBgYQA/gWgIAHQgHAHgGAPQgGANgCAMQgDANAMA8QADALA0gWQAwgTgFAJIgsBEQgfAyACALQADALAFANIAFAQQgbBogaBTIgQAwQgKAegEASQgDAKAAAGQAAALAEALIAKAaQAbBVggBfQgeBZhEBAQg3AzhTAqQg8AfhfAjQhbAihOAQQgkAHgyACIhWABIgwACQixAAipg2g");
	this.shape_43.setTransform(3,-22.1,0.264,0.264);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#DE9D74","rgba(200,142,105,0.953)","rgba(144,104,78,0.839)","rgba(65,49,39,0.659)","rgba(14,14,14,0.498)"],[0,0.122,0.369,0.714,1],26.7,43.9,-16.7,-29).s().p("AB+JbQjxkjhmi9Qjxm7genuIALgJQgJgSAHgKQAPgSBUAuQBhA1CVCgQCdCqCLDRQCeDsBUDcQBiD/gPDFIgDCvIiGAFQhmhsh6iSg");
	this.shape_44.setTransform(-13.9,-31.8,0.264,0.264);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#DE9D74","rgba(200,142,105,0.953)","rgba(144,104,78,0.839)","rgba(65,49,39,0.659)","rgba(14,14,14,0.498)"],[0,0.122,0.369,0.714,1],-25,-28.3,18.9,44.3).s().p("AmTLUQgjjCBHkHQA9jkCFj7QB1jeCKi5QCEivBbg+QBPg3ARARQAIAIgHATIAMAIQAHC6gUCpQglE2h7EnQhSDGjTE7QhqCehaB2IiGAJg");
	this.shape_45.setTransform(18.8,-33.5,0.264,0.264);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0E0E0E").ss(6.3).p("AFyBJQBsmoALihQALizhPiZQgmhHhrgSQgigFglAAIgeACQiRBEiODWQiHDLhqEgQiTGRALFAQAFCVAqBgQArBiBMAbQBMAcBhgvQBigwBfhwQDdj+Bqmmg");
	this.shape_46.setTransform(23.8,-44.6,0.264,0.264);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#6B4424","#FFFFFF","#AEAEAE","#6B6B6B","#3D3D3D","#202020","#131313","#0E0E0E"],[0.427,0.616,0.694,0.776,0.851,0.914,0.969,1],-31.7,-47.9,27.6,57.9).s().p("AlDOgQhMgbgrhiQgqhggFiVQgLlACTmRQBqkgCHjLQCOjWCRhEIAegCQAlAAAiAFQBrASAmBHQBPCZgLCzQgLChhsGoQhqGmjdD+QhfBwhiAwQg9Aeg0AAQggAAgcgLg");
	this.shape_47.setTransform(23.8,-44.6,0.264,0.264);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0E0E0E").ss(6.3).p("AFMjLQhljiitjiQiqjhhjgkQg5gUhTAHQhvAIgpBDQgmA9gMBqQgJBZAJBsQAYELC8FdQDfGjDGDTQDXDiCRhBQCThBgjlGQgik7i6meg");
	this.shape_48.setTransform(-20.4,-41.7,0.264,0.264);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#825834","#FFFFFF","#6D6D6D","#222222","#0E0E0E"],[0.376,0.616,0.808,0.941,1],18.6,-54.2,-10.2,69).s().p("ABQL0QjGjTjfmjQi8ldgYkLQgJhsAJhZQAMhqAmg9QAphDBvgIQBTgHA5AUQBjAkCqDhQCtDiBlDiQC6GeAiE7QAjFGiTBBQggAPgkAAQh9AAiniwg");
	this.shape_49.setTransform(-20.4,-41.7,0.264,0.264);

	this.text = new cjs.Text("", "12px 'MarkerFelt-Wide'");
	this.text.lineHeight = 16;
	this.text.setTransform(-16.5,-21.5,0.264,0.264,0,-2.9,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0E0E0E").s().p("AAQAXQgJgRgJgLQgGgHgJgHIgHgGIgHgEIgGgEIgKgEIAFABIANADIARAHQAJADAIAIQAKAHAHAGQAHAEAHAIIAMAPIgZANg");
	this.shape_50.setTransform(13.8,10.9,0.264,0.264);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0E0E0E").s().p("AAWAiIgFgKQgLgTgIgKIgOgOIgPgLIgGgDIgKgEIAFABQAEAAAJACIARAIIARAKIARAOIAXAWIADAFIgZANg");
	this.shape_51.setTransform(14.9,10,0.264,0.264);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0E0E0E").s().p("AAWAiIgGgKQgIgSgKgLQgIgJgHgFIgUgOIgKgEIAFABQAEAAAJACIARAHIARALIARAOIAOALIAIALIAEAFIgZANg");
	this.shape_52.setTransform(19,7,0.264,0.264);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0E0E0E").s().p("AgvAZIANgPIANgMQAHgGAKgHQAKgJAHgCIARgHIANgDIAFgBIgKAEIgGAEIgHAEIgHAGIgOAOQgIAJgLATIgHAPg");
	this.shape_53.setTransform(-3,10.9,0.264,0.264);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0E0E0E").s().p("AgvAZIAEgFIAIgLIAOgLQAKgJAHgFIARgKIARgIQAJgCAEAAIAFgBIgKAEIgGADIgOALQgHAGgIAIQgKALgIASIgGAKIgBAEg");
	this.shape_54.setTransform(-4.4,10,0.264,0.264);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0E0E0E").s().p("AgvAZIADgFIAXgWIARgOIARgLIARgHQAJgCAEAAIAFgBIgKAEIgGAEIgPAKIgOAOQgIAKgLATIgFAKIgBAEg");
	this.shape_55.setTransform(-8.5,7,0.264,0.264);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0E0E0E").ss(6).p("AgOimQAAAyADA4QgRAFgaAHQgyAPgkASQh2A1A+A3IAJAKQANAMAUALQBCAiBxAHIDCAAIAAlI");
	this.shape_56.setTransform(-0.8,8.6,0.264,0.264);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E7E0D0").s().p("AAZCnQhxgHhCgiQgUgLgNgMIgJgKQg+g3B2g2QAkgRAygPIArgMQgDg4AAgyIDpAFIAAFIg");
	this.shape_57.setTransform(-0.8,8.6,0.264,0.264);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#0E0E0E").ss(5.6).p("AEzjRIlgg5IgRCOQgRCVAAAnQhIAOg7AZQh2AxA9A4IAJAIQANALAUAJQBBAeBzAFIEYgWQAqgEAGgBQAHAAgCgCQgDgFAAgIQACgPAAgXQgBgkAAgD");
	this.shape_58.setTransform(-2.8,2.6,0.264,0.264);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E7E0D0").s().p("AjqDqQgUgJgNgLIgJgIQg9g4B2gyQA7gYBIgOQAAgoARiUIARiOIFgA4IgVFqIABAnQAAAXgCAPQAAAHADAGQACABgHABIgwAEIkYAXQhzgFhBgeg");
	this.shape_59.setTransform(-2.6,2.7,0.264,0.264);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0E0E0E").ss(6).p("AAQimQAAAyADA4IAsAMQAyAPAlASQB3A1g9A3QgJAPggASQhAAihyAHIjZAAIAAlI");
	this.shape_60.setTransform(11,8.6,0.264,0.264);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E7E0D0").s().p("AjkCnIAAlIID0gFQAAAyADA4IAsAMQAyAPAlARQB3A2g9A3QgJAQggARQhAAihyAHg");
	this.shape_61.setTransform(11,8.6,0.264,0.264);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0E0E0E").ss(5.6).p("AkPjMIFkhDIAPCTQAQCagBAnIArAKQAzANAlAQQB2Axg9A4QgKAOggAOQhBAehzAFIkYgWQg0gFAAAAQgKgBgCgBQgCgCgBgLQgBgMgcgVQgcgUAAgN");
	this.shape_62.setTransform(12.5,2.5,0.264,0.264);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E7E0D0").s().p("AjHD7Ig0gEQgKgBgCgBQgCgCgBgLQgBgMgcgVQgcgUAAgNIA0l1IFkhCIAPCTQAQCZgBAoIArAKQAzANAlAPQB2Ayg9A4QgKANggAPQhBAehzAFg");
	this.shape_63.setTransform(12.5,2.5,0.264,0.264);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0E0E0E").s().p("AgHAaQgGgBgDgFQgDgGACgFIAJgYQACgGAFgDQADgDAGACQAFABAEAGQADAFgCAGIgKAXQgCAGgEADQgCACgDAAIgEgBg");
	this.shape_64.setTransform(6.2,-2.8,0.264,0.264);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0E0E0E").s().p("AgKAtQgOgEAGgNQAMgcAAgeQAAgOANAAQAOAAAAAOQgBAkgNAeQgEAJgHAAIgGAAg");
	this.shape_65.setTransform(6.4,-2.9,0.264,0.264);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0E0E0E").s().p("AAqGnIgmgBIiVgWQgPgDgWgGIgkgJIglgKQgNgEg6gTIiMg3IgBAAIgBgBIgng2IArAyICzAzQASAGASADIBJAPQATAEASACIBuAMIAiABIBFgCIhdhyIBxA8IAMADIAQACIgBgBIAigqIABABIAAAAIADACIAFABQAGABAIgBQANAAAUgHIgtgKIAAAAIgBgBIAOg7IABAAIAKABIAMAAIAZgGQAZgIAbgQIAcgSIlrgCIDihGIAlgUIARgMQAhgZAjgkQAgggAdgkIACgDIhLAVIhEASIAzhnIACgJIAEgQIADgRIABgRIgDgiQgGghgSghIgMgSIgEAKQgMAbgVAeQgeAsg0A0QgoAmg3ArQgmAfg8AnQgnAbhAAmQgwAdg7AgQhwA8hrAvIBqg9QBNgvAagRIBmhCQArgeA3gnQBphPBLhOQAtguAcgtQAjg2AEguIAFg2IA5A0IAOARQAPASAKASQAXAmAJAsIAEAXIABAXIAAAWIgIAsIBmgdIBSgXIhLBwIgeAoQgdAjgjAmQgdAfgdAYIDGACIhVBNIgaAVQgiAZgXANIgGAEIAAAAIBEAQIhkA7QgVALgWAHIgJADIAuAlIiHADIAYAeIhLALIgdABIgKgBg");
	this.shape_66.setTransform(28.3,-4.6,0.264,0.264);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAHF+QjBgPjyheIgqg0QCwhVCyh2QFkjrASioIAVAWQAYAdAPAgQAwBog5BoICiguQgkA5g1A9QhpB3hRAUIDvACQgiAhguAeQhXA6g3gLIB6AbQgcATgjAOQhBAagdgUIA5ArQgZACgcAAQg5gCgRgPIAuA4QgdAHgsAAQghAAgpgEg");
	this.shape_67.setTransform(27.3,-4.2,0.264,0.264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.text},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.instance_1},{t:this.shape_39},{t:this.shape_38},{t:this.instance},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-95.9,82,114.5);


(lib.Enemy_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{appear:9,disappear:59,hit:69});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		
		this.hotspot.on("click", function(evt) {
			var event = new createjs.Event("hit", true);
			event.stageX = evt.stageX;
			event.stageY = evt.stageY;
			//this.gotoAndPlay("hit");
			
			this.dispatchEvent(event);
			
			that.gotoAndPlay("hit");
		});
		
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_83 = function() {
		// Dispatch "hit" event
		this.dispatchEvent("hit");
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(15).call(this.frame_83).wait(1));

	// skull
	this.instance = new lib.Enemy_a_skull();
	this.instance.setTransform(51.5,-6.1,1,1,0,0,0,19.9,28.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).wait(1).to({regX:0,regY:0,x:45,y:-44.8,alpha:0.924},0).wait(1).to({x:51.5,y:-60.7,alpha:0.848},0).wait(1).to({x:52,y:-78,alpha:0.771},0).wait(1).to({x:49.1,y:-95.1,alpha:0.695},0).wait(1).to({x:44.4,y:-111.8,alpha:0.619},0).wait(1).to({x:38.4,y:-128.1,alpha:0.543},0).wait(1).to({x:31.6,y:-144,alpha:0.467},0).wait(1).to({x:24.1,y:-157,alpha:0.4},0).wait(1).to({x:18.2,y:-170.6,alpha:0.333},0).wait(1).to({x:14.5,y:-185.1,alpha:0.267},0).wait(1).to({x:13.8,y:-200,alpha:0.2},0).wait(1).to({x:16.6,y:-214.6,alpha:0.133},0).wait(1).to({x:22.7,y:-228.2,alpha:0.067},0).wait(1).to({x:31.6,y:-240.2,alpha:0},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmtMFIAA4JINxAAIAAYJg");
	var mask_graphics_59 = new cjs.Graphics().p("Am4KmIAA1LINxAAIAAVLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:45.3,y:7.9}).wait(59).to({graphics:mask_graphics_59,x:45,y:-10.1}).wait(25));

	// hotspot
	this.hotspot = new lib.Enemy_a_hotspot();
	this.hotspot.setTransform(52.6,152.9,1,1,0,0,0,33.2,55.1);
	this.hotspot._off = true;

	this.hotspot.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(9).to({_off:false},0).to({scaleX:1.45,scaleY:2.33,y:21},9).to({_off:true},41).wait(25));

	// enemy
	this.instance_1 = new lib.MonsterA("synched",0);
	this.instance_1.setTransform(47.5,144.7);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:48.8,y:35},9).wait(41).to({x:47.5,y:9.7},0).to({y:144.7},7).wait(3).to({y:9.7,alpha:0.91},0).wait(1).to({alpha:0.828},0).to({alpha:0.328},3).to({alpha:0},2).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.Path_9();
	this.instance.setTransform(768,231.7,0.658,1.018,0,-49.8,0,187.6,16.8);
	this.instance.alpha = 0.488;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(247.3,411.7,1.583,0.993,0,0,0,507.7,226.3);
	this.instance_1.alpha = 0.41;

	this.instance_2 = new lib.Path_9();
	this.instance_2.setTransform(329.5,141.2,0.658,1.018,0,-49.8,0,187.6,16.8);
	this.instance_2.alpha = 0.488;

	this.instance_3 = new lib.Path_0_1();
	this.instance_3.setTransform(624.9,61.8,0.333,0.333,0,0,0,18.2,11.4);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.Path_1_1();
	this.instance_4.setTransform(611.5,69.9,0.333,0.333,0,0,0,24.2,39.9);
	this.instance_4.alpha = 0.602;

	this.instance_5 = new lib.Path_2_1();
	this.instance_5.setTransform(677.4,91.4,0.333,0.333,0,0,0,22.1,21.8);
	this.instance_5.alpha = 0.602;

	this.instance_6 = new lib.Path_3_1();
	this.instance_6.setTransform(654.9,106.6,0.333,0.333,0,0,0,17.3,29.8);
	this.instance_6.alpha = 0.602;

	this.instance_7 = new lib.Path_4();
	this.instance_7.setTransform(661.5,123.7,0.333,0.333,0,0,0,33,16.9);
	this.instance_7.alpha = 0.602;

	this.instance_8 = new lib.Path_5();
	this.instance_8.setTransform(652.4,91.4,0.333,0.333,0,0,0,13.2,20.6);
	this.instance_8.alpha = 0.602;

	this.instance_9 = new lib.Path_6();
	this.instance_9.setTransform(673.7,111.4,0.333,0.333,0,0,0,16.4,20.4);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.Path_7();
	this.instance_10.setTransform(620.2,104.5,0.333,0.333,0,0,0,43.8,59.9);
	this.instance_10.alpha = 0.602;

	this.instance_11 = new lib.Path_8();
	this.instance_11.setTransform(659.4,68,0.333,0.333,0,0,0,91.1,63.3);
	this.instance_11.alpha = 0.602;

	this.instance_12 = new lib.Path_22();
	this.instance_12.setTransform(646.5,87.8,0.333,0.333,0,0,0,454.9,454.3);
	this.instance_12.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,255);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343662").s().p("ASDCkQi8gFgtAAQh8AAiZgcQhQgPjAgtQiwgqhkgQQiYgWiDAFQkpANh7AFQjnAKi9AAQiPAKg5gOQgLgDizhCQhwg5hzgLQhygLh8AiQCrhCCqgFQDNgHByBdIg8AAQCOAOC2gRQBBgGEAgkQDGgcB7gDQCxgFCRAkIGIBYQDeAuC1AdIFMBBQC8AdCbgTQAqAAA8gLIBkgVQB9gYBOAaQiOBMlBAGIhFABQhTAAhwgDg");
	this.shape.setTransform(298.9,209.7,0.658,0.658);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#71C7F0","#6CB2DD","#5D72A2","#524879","#4B3162","#492959"],[0,0.082,0.369,0.612,0.8,0.91],364.2,448.1,-256.8,-472.6).s().p("Eg2FA8lMAAAh8+MBsLgBbMgAfCDpg");
	this.shape_1.setTransform(437.1,271,1.262,0.658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Objects
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4E40").s().p("AgEAAQgRgDAgADQAAACgFAAQgFAAgFgCg");
	this.shape_2.setTransform(847.9,188.5,1.179,1.692);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A4E40").s().p("AgSAFIAGgEQAMgDATgCIAAAGIgjADg");
	this.shape_3.setTransform(868.8,152.1,1.179,1.692);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4E40").s().p("AgCAAQAAgBABgBQAAAAAAAAQABAAAAAAQAAAAAAABIADAEQgDgDgCAAg");
	this.shape_4.setTransform(855.1,60,1.179,1.692);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A4E40").s().p("AgJADIAAAAIAAgBIABgFIAAAEQAEgIALAHQAIAEgLAAIgNgBg");
	this.shape_5.setTransform(855.7,117,1.179,1.692);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A4E40").s().p("AgIgGIAQAAIAAANg");
	this.shape_6.setTransform(870.1,1.2,1.179,1.692);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A4E40").s().p("AgFAAIAFgCQAOAFgNAAIgBAAQgLAAAGgDg");
	this.shape_7.setTransform(869,47.8,1.179,1.692);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A4E40").s().p("AhRAIIAEgDIABgBQATgNApgQIBpAAQhdAYhEAVQgPAFAAABQgEgHAKgLg");
	this.shape_8.setTransform(832,4.5,1.179,1.692);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A4E40").s().p("AAAgGIAEAAQAJACgNAIIgFADQgEAAAJgNg");
	this.shape_9.setTransform(54.3,278.6,1.179,1.692);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A4E40").s().p("AAAAYQgOgXgCgRQgCgUASAcQAJAQAIARg");
	this.shape_10.setTransform(46.7,325.1,1.179,1.692);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A4E40").s().p("AgHgDIAJgDIAHANQgJgDgHgHg");
	this.shape_11.setTransform(49,332.2,1.179,1.692);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A4E40").s().p("AgCAAQAAgBABgBQAAAAAAAAQABAAAAAAQAAAAAAABIADAEQgDgDgCAAg");
	this.shape_12.setTransform(26.7,104.4,1.179,1.692);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A4E40").s().p("AgJADIAAAAIAAgBIABgFIAAAEQAEgIALAHQAIAEgLAAIgNgBg");
	this.shape_13.setTransform(27.3,161.5,1.179,1.692);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A4E40").s().p("AAagEQA3AEh7AFQAPgNA1AEg");
	this.shape_14.setTransform(43.2,196.4,1.179,1.692);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A4E40").s().p("AgEAAQgRgDAgADQAAACgFAAQgFAAgFgCg");
	this.shape_15.setTransform(19.6,232.9,1.179,1.692);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A4E40").s().p("AAAgDQADACgDAFg");
	this.shape_16.setTransform(56.1,101.8,1.179,1.692);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A4E40").s().p("AAAADIgEgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQABAAAAAAIAFgCQAIACgCACQgBABgEAAIgBAAg");
	this.shape_17.setTransform(40.6,92.3,1.179,1.692);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A4E40").s().p("AgCgBIgbgaIAMAHQAXASATAWQAGAIgBAAQgDAAgdgdg");
	this.shape_18.setTransform(49.3,73.2,1.179,1.692);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A4E40").s().p("AAAgFQAMgVgBAPQgCAMgJARIgKAAQAFgMAFgLg");
	this.shape_19.setTransform(665.8,334.3,1.179,1.692);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A4E40").s().p("AgQgCQAjgDAJAJQhRgEAlgCg");
	this.shape_20.setTransform(668.1,239.8,1.179,1.692);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A4E40").s().p("AAAACQgIAAAIgDIAEABQAEACgIAAIAAAAg");
	this.shape_21.setTransform(669.9,163.2,1.179,1.692);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A4E40").s().p("AgSATQACgFAOgOIAOgOIAHgEIgQARIgBABIgBAAQgRATgCAAIAAAAg");
	this.shape_22.setTransform(664.2,149.1,1.179,1.692);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A4E40").s().p("AgEgCIAIgCIABAJQgDgIgGABg");
	this.shape_23.setTransform(704.3,68.9,1.179,1.692);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A4E40").s().p("AAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgDACIABgCg");
	this.shape_24.setTransform(679.2,172.2,1.179,1.692);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A4E40").s().p("AgJAAQAJgGAKAIIAAABQgJgEgKABg");
	this.shape_25.setTransform(670.9,5.4,1.179,1.692);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A4E40").s().p("AgBAAQgCgDADACIADAEg");
	this.shape_26.setTransform(225.5,311.7,1.179,1.692);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A4E40").s().p("AgHgEQgCgLARAYQgOgEgBgJg");
	this.shape_27.setTransform(222.6,311,1.179,1.692);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A4E40").s().p("AgDAAQABgBAEABQAEAAgGABg");
	this.shape_28.setTransform(213.8,323.4,1.179,1.692);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A4E40").s().p("AAIgEQgBAKgOADQARgYgCALg");
	this.shape_29.setTransform(456.3,302.9,1.179,1.692);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A4E40").s().p("AgCACQgEgBAGgCIACABIACAAIgBABIgDABIgCAAg");
	this.shape_30.setTransform(455.3,360.9,1.179,1.692);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A4E40").s().p("AgBAAQAEgBABABIgDABQgHgBAFAAg");
	this.shape_31.setTransform(465.1,315.3,1.179,1.692);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A4E40").s().p("AAIgEQgBAJgPAEQASgZgCAMg");
	this.shape_32.setTransform(250.4,242.1,1.179,1.692);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A4E40").s().p("AgBAAQAEgBABABIgDACQgHgCAFAAg");
	this.shape_33.setTransform(259.3,254.5,1.179,1.692);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A4E40").s().p("AgDAAQABgBAEABQAEAAgGABg");
	this.shape_34.setTransform(335,230.3,1.179,1.692);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A4E40").s().p("AgHgEQgCgLARAYQgOgEgBgJg");
	this.shape_35.setTransform(343.8,217.9,1.179,1.692);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A4E40").s().p("AgBAAQgGAAAFAAIAHAAQgBABgEAAIgBgBg");
	this.shape_36.setTransform(352.5,324.9,1.179,1.692);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2A4E40").s().p("AgBAAIACgBQAJADgJAAQgJgBAHgBg");
	this.shape_37.setTransform(344.7,275.8,1.179,1.692);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A4E40").s().p("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");
	this.shape_38.setTransform(435.6,182.7,1.179,1.692);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2A4E40").s().p("AgCgHQADAGACAGIgFADg");
	this.shape_39.setTransform(0.4,229.5,1.179,1.692);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2A4E40").s().p("AAAgDIAEACQALAEgPAAQgOABAOgHg");
	this.shape_40.setTransform(727.2,276.6,1.179,1.692);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2A4E40").s().p("AgBgBQAKgMAEABQADACgGAIQgJAMgOADQAEgGAIgIg");
	this.shape_41.setTransform(728.8,182,1.179,1.692);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2A4E40").s().p("AgCAAQAIgDAAADIgEADQgMgDAIAAg");
	this.shape_42.setTransform(743.2,202,1.179,1.692);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2A4E40").s().p("AAFgEIAAABIgBABIgIAHQAGgHADgCg");
	this.shape_43.setTransform(724,183,1.179,1.692);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2A4E40").s().p("AgFAGIAJgLIACABIgGAGIgDAEg");
	this.shape_44.setTransform(729.1,204.1,1.179,1.692);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#47715C").s().p("AAAACQAAgBAAgCIABABIgBACIAAAAg");
	this.shape_45.setTransform(788.1,207.4,1.179,1.692);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#47715C").s().p("AgBABIgBgBQADgBACABIAAAAIgBABg");
	this.shape_46.setTransform(786.8,208.6,1.179,1.692);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#47715C").s().p("AgUAlQAAgKgXgBQgSgBgoAFQgKgIAFgEQAFgEATACQgngZBAgOIgRgIQAhgDAcgGIAIAGQgzgEgPAmQACAHBFgPQBQgTAWAAIAGAEIgDACQgeACABAMQg/AcgiAUg");
	this.shape_47.setTransform(802.3,148.9,1.179,1.692);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#47715C").s().p("AgUADQhmADggAAIgCgCIBcgEQA/gFAHgOQAMAgB5gjQADAIgHAEQAJAJANAAIh0AYQASgUhPAAg");
	this.shape_48.setTransform(798.7,159.6,1.179,1.692);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#47715C").s().p("AhhAZQAAgCAFgFQAHgHADgGQgYANgCgbIgBAAIAAgCQAJgMBXgCQAaAIgIAIQAHgGgEgKQBHgBAdADQgBAAgBAAQAAAAAAAAQgBABABAAQAAAAAAAAIAEgBQhEAmhGAIIABgGQgPAGgDgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAgBgBIgBALIgGABIAAgBIABgDQgIgBAAADIgCACIgIAAIgagBg");
	this.shape_49.setTransform(793.7,204.5,1.179,1.692);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#47715C").s().p("AgVAIIAXgOIAKgDQgCAEAEAEQgDgDABgFIAKgDQgHAGgBAIIgBACQgTgEAUAMIgHABQgLAAgRgFg");
	this.shape_50.setTransform(779,202,1.179,1.692);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#47715C").s().p("AhGApQgKgNgMgNQgKgLgBAAIAigNIgMgIIAOgEIAfAVQAJgGgBgGQAAgJgNgFIgEgBIA/gSQABAGAGgFQgTAfAEANIADAEQAIAIAVgMIAqgbIABAAQAGAEAJgEIAEADQgTAGgVAMIgJAGQAOAAgCAAQgCABgLAEIgRAGQgEAEARABQgyAPhCAPg");
	this.shape_51.setTransform(804.2,97.8,1.179,1.692);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#47715C").s().p("AgpgDQAKgCBIgCIgIAJIgeAHQgQgMgcAAg");
	this.shape_52.setTransform(817.7,247.5,1.179,1.692);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#47715C").s().p("AhzAfQA4ghAegRIAUABQAAAIAHAKQA6AKA6gqIABADIgkAtQg5ADhLAOg");
	this.shape_53.setTransform(816.2,237.7,1.179,1.692);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#47715C").s().p("Ag6AZIgBgCQgHgBgIAAIgwgIQATgIApgNIAIAAIADAAQAKABAIADIAAAAQgCgIgFgEIAUgHQAOAIAKgNIgCgCIAWgGIBjAdIgrArQhRgFg5gHg");
	this.shape_54.setTransform(786.1,236.4,1.179,1.692);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#47715C").s().p("ABHAbQAGgRAFgIQg0gaAlAmQgTgOgZgJIAYATIARAQIhMgMQgIgGgugHQg2gIgSgFIAMgFQBAAIAWABQAvABAFgSIAAgCQAzAAAagDIAeAOQAQAIAEAFQgmgJAVAVIgTgMQAGAFAEATIgPAGQgBABgBAAQAAABgBAAQAAABAAAAQAAABABAAgABYgFQAFgEAEABIgJgHIAAAKg");
	this.shape_55.setTransform(813.1,187,1.179,1.692);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#47715C").s().p("AAOgGIACAGIgfAHIAdgNg");
	this.shape_56.setTransform(822.3,156.8,1.179,1.692);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#47715C").s().p("AgogBIAEgCQAXgFA2AIIgyAGg");
	this.shape_57.setTransform(795.9,253.8,1.179,1.692);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#47715C").s().p("Ag9gHQBGgFA1gHQgeAagXANQgWgNgwgOg");
	this.shape_58.setTransform(816.4,278.2,1.179,1.692);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#47715C").s().p("AgxgWIAGgBQAfAOA+AgIgGABQgvAAgugug");
	this.shape_59.setTransform(804.3,281.3,1.179,1.692);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#47715C").s().p("AgIAbIACgPIAAgBIABgFQAEgXADgJQgCAMADAOIABAGIAFAUIAAABg");
	this.shape_60.setTransform(803.4,66.6,1.179,1.692);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#47715C").s().p("AgDADIAHgGIgGAHg");
	this.shape_61.setTransform(830.8,230.9,1.179,1.692);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#47715C").s().p("AgEgBIAJgBIgIAGg");
	this.shape_62.setTransform(788.2,329.2,1.179,1.692);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#47715C").s().p("AgygyQgCAVAkASQAdANAuAGIAAArQiUguAng3g");
	this.shape_63.setTransform(864.1,233.7,1.179,1.692);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#47715C").s().p("AhHAgIBVg7QAjgUAXARIAABFg");
	this.shape_64.setTransform(862.5,278.1,1.179,1.692);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#47715C").s().p("AgdAdIAAgCIAFgFIABgEIABgHIAAgCIAEgJIADADIACACIABABIABACQAFAJADAKIABAAIAAADIABgDIAAgBIADgbIAAgBIACgKIAAgBIAAgCIADgJIAAgCIAJgEIADAWIAAADIAEAQIAHARQgNADgRAAQgMAAgRgCg");
	this.shape_65.setTransform(858.9,147.1,1.179,1.692);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#47715C").s().p("AgBgBIANgIIgRAQIgGADg");
	this.shape_66.setTransform(868,151.2,1.179,1.692);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#47715C").s().p("AgkgOQApgJAfgJQAGgBgTAUQgQAagNANQgIAHgGAAQgPAAgBgvg");
	this.shape_67.setTransform(860.4,188.7,1.179,1.692);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#47715C").s().p("AgEAAIgBAAIgKgIQAQAHANABIABAAIABAAIAAAAIgCAJQgMgFgGgEg");
	this.shape_68.setTransform(847.4,188.4,1.179,1.692);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#47715C").s().p("AgSgIQAgADAFACQgVABgLAMQAAgKgFgIg");
	this.shape_69.setTransform(658.7,306.5,1.179,1.692);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#47715C").s().p("AgiAQQA3gmAOAEQgcAQgVAWg");
	this.shape_70.setTransform(725.4,247.6,1.179,1.692);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#47715C").s().p("AgngKIAGgBIACAFQAIACAGgIIArgDQAKAVAEAFIgHAFQgrgPgdgLg");
	this.shape_71.setTransform(697.8,195.6,1.179,1.692);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#47715C").s().p("AgJAAQAGgBANABIgQABg");
	this.shape_72.setTransform(706.8,234.2,1.179,1.692);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#47715C").s().p("AgNAGIgBgBQgNgNAEABIAwAMIAAADIgmgCg");
	this.shape_73.setTransform(675.6,263.9,1.179,1.692);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#47715C").s().p("AgdgFQAHgBAJgDIgRABQgDgGABgGIA3AZQgHABgIAFIAaAEIgfAHQgYgPgIgMg");
	this.shape_74.setTransform(691.1,234.2,1.179,1.692);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#47715C").s().p("AgCgBIAFADIgBAAg");
	this.shape_75.setTransform(695.5,297.7,1.179,1.692);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#47715C").s().p("Ag1AIQA4hKA0BPQgKgLglADQghADBJAFQgwgCAFAPQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgGAAgygTg");
	this.shape_76.setTransform(665.1,238.2,1.179,1.692);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#47715C").s().p("AgJAAIAJgFIAKAFIgDAGg");
	this.shape_77.setTransform(621.4,335.2,1.179,1.692);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#47715C").s().p("AgXAAQAagRAVANQgIAFgEAJQgFgEgegGg");
	this.shape_78.setTransform(632.2,308.4,1.179,1.692);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#47715C").s().p("AgNAFQABgEgHgDIANgEIAaALIgBABIgBAAIABABIgggCg");
	this.shape_79.setTransform(626.6,338.4,1.179,1.692);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#47715C").s().p("AgOAAIAHgCQAIgCAOAEIgOAEg");
	this.shape_80.setTransform(616.2,332.7,1.179,1.692);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#47715C").s().p("AghgMIABgBQAuALAEgBIAQAMIgmAFQgKgTgTgHg");
	this.shape_81.setTransform(626.6,316.6,1.179,1.692);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#47715C").s().p("AAAAAIABAAIgBAAg");
	this.shape_82.setTransform(630,335.9,1.179,1.692);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#47715C").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_83.setTransform(645.9,343.8,1.179,1.692);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#47715C").s().p("AgEAAIAKAAIgCAAIgJABg");
	this.shape_84.setTransform(665.1,337.6,1.179,1.692);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#47715C").s().p("AgWAJIAtgTQgFALgHAJIgMABg");
	this.shape_85.setTransform(660.5,335.8,1.179,1.692);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#47715C").s().p("AgVgDQAVAEAWgJQgDAIABAIg");
	this.shape_86.setTransform(630.9,312.1,1.179,1.692);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#47715C").s().p("AgpAdQAKgRACgMQABgMgIAMQARgcARAAQANAAAfAZQg+AXAAgDQgBAIgNAEg");
	this.shape_87.setTransform(670.8,332.4,1.179,1.692);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#47715C").s().p("AhDgTIA0AAQArAAANADQgHAPACAOQASACAPgJQgHAIgFAHQhsgZgQgPg");
	this.shape_88.setTransform(620.3,269.3,1.179,1.692);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#47715C").s().p("AgjAFIAJgHIA/gDQgUAFgPAGQgVgEgQADg");
	this.shape_89.setTransform(647.4,165.4,1.179,1.692);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#47715C").s().p("AArgNQgNAXhIAEQAsgHApgUg");
	this.shape_90.setTransform(647.8,241.4,1.179,1.692);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#47715C").s().p("AiBgJQAAgIAEgHQAYgHACATQADATgOgBQAEAEAcgDIA1gHQgXgOgUgSIBCgDQgSAFgRAMQASgHBfAAQgGAIgCAFQAFgFATAAQASgBAUADQg0AWhyAdQhdgKAAgjg");
	this.shape_91.setTransform(700.2,173.4,1.179,1.692);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#47715C").s().p("AgeAGQgLgGgFgKQAcAHATAGIAIAEIAmgHQgCAFgYACIgdACIACgBIgCABIgIACQgHAAgHgFg");
	this.shape_92.setTransform(690.4,150.9,1.179,1.692);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#47715C").s().p("AghgXIABAAQAdgDANAKQAQALAIAcQgMACgJAAQguAAAAgwg");
	this.shape_93.setTransform(675.1,235.8,1.179,1.692);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#47715C").s().p("AgLAhIgZgGQAEgFAdgWQAYgZgGgJQAWARAAAYQgTALgBARIgGAAQgKAAgMgCg");
	this.shape_94.setTransform(675.4,167.2,1.179,1.692);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#47715C").s().p("AAjggIACAMQgaAGAAAFQAAAJAPACQABABAIAAIABAAQgOADgWAMQgXANgNACQAYgXAvgqg");
	this.shape_95.setTransform(674.8,213.9,1.179,1.692);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#47715C").s().p("AgZAFIAlgXIAIABQgOAPgCADQgBAEAWgWIABAAQgLAOgPAWg");
	this.shape_96.setTransform(661.4,152.1,1.179,1.692);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#47715C").s().p("AADAXQgDgLgggIIAsgaIABAAQgKAFAJAAQAGABABgCIAAAGQgBAEAPAAQgbAfgDAAIAAAAg");
	this.shape_97.setTransform(668.3,166.7,1.179,1.692);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#47715C").s().p("AgcACIAHgCIgDAAQAiggAWgDQAdgFAGAwQgLgIgNgIQgPgKgEACQgMAbAoAOQgPAChnAKQAKgIAcgbg");
	this.shape_98.setTransform(671.3,130.2,1.179,1.692);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#47715C").s().p("AgOgMQAhgkAUAMQgEADgBADIAAAAIAPADQAHAMAEATIAAAEQgEAFg3ANQgtAMgPACQAbglASgPg");
	this.shape_99.setTransform(671.8,151.4,1.179,1.692);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#47715C").s().p("AALgFIAGAAQAEAFAKACIg9AEQAZgJAQgCg");
	this.shape_100.setTransform(694.5,260.5,1.179,1.692);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#47715C").s().p("Ag7ARQAegbAqgFQgLAKAAANQACgGAggTQABAJgCAFQAPAFAKADQgMAKgZACQgNABgXAAIgugBg");
	this.shape_101.setTransform(652.3,157.7,1.179,1.692);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#47715C").s().p("AgUACIAAAAQAUAAAVgIIgWANg");
	this.shape_102.setTransform(652.6,132.9,1.179,1.692);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#47715C").s().p("AhRATQgUgSAIgUQgJAZA1gDQAVgBAOgCQAdANBRADQgLADhBABIgbAAIhKgBg");
	this.shape_103.setTransform(664.7,118.9,1.179,1.692);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#47715C").s().p("AgZAYQgEgQgWgWIgJgJQBkgFAVABQgzALgHApQABABAAAAQABABAAAAQABABAAAAQAAAAABAAg");
	this.shape_104.setTransform(668.4,112.5,1.179,1.692);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#47715C").s().p("AgQgCIAgAEIABAAQgKAAgJABg");
	this.shape_105.setTransform(661.4,85.3,1.179,1.692);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#47715C").s().p("AAAAAQADgCAGgBIgKAFIgHACg");
	this.shape_106.setTransform(692.9,80.7,1.179,1.692);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#47715C").s().p("AgDAAIAKgFIgNALg");
	this.shape_107.setTransform(683.1,77.2,1.179,1.692);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#47715C").s().p("AgjAUQAKgCAUgSIAdgcQgYAagBAKQAOgGAVAKIABARQgHAAg/gJg");
	this.shape_108.setTransform(674.2,114.1,1.179,1.692);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#47715C").s().p("AgSACIABgEQAHACAdgDQgIAGgcAAg");
	this.shape_109.setTransform(685.6,93.3,1.179,1.692);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#47715C").s().p("AghADQABgHgCgEQAegEAVACIARADIgCABQgFgBgGABQgVADgbAPQgGgFAAgEg");
	this.shape_110.setTransform(688.3,98.1,1.179,1.692);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#47715C").s().p("AgHAEIAPgIIgLAJg");
	this.shape_111.setTransform(664.6,147.5,1.179,1.692);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#47715C").s().p("AAJAnQgTAAgngbQAKgGACgHQACgLgHgTIABAAQAWASAIAZQADgaAEgVIASgDQAEAjANATQAFgHAOgKQgMAogcAAIgBAAg");
	this.shape_112.setTransform(672.1,77.4,1.179,1.692);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#47715C").s().p("AATAgQgRgTgpgSIg2gWIAWgHIA7gFIAOAIQAHgFACgFIANAAQgOAIgDASQANAVAXgJQANgGAVgRQAHAEAHAAQADAHgBAMQgYADgCASIAZgEIgEAcQgbgGgqgEg");
	this.shape_113.setTransform(668.3,95,1.179,1.692);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#47715C").s().p("AgKAAIAUAAIgLABg");
	this.shape_114.setTransform(660.1,125.8,1.179,1.692);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#47715C").s().p("AgPAJQAHgEAIAAIgKgCQAbgHAPgLQgOAPAHALIg3AFg");
	this.shape_115.setTransform(658.5,134.8,1.179,1.692);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#47715C").s().p("AABgEQAMABgEACIgSAGQAFgFAFgEg");
	this.shape_116.setTransform(685.3,90.1,1.179,1.692);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#47715C").s().p("AgEAHQAFgHgBgIQAGAIgBAJg");
	this.shape_117.setTransform(677.2,294.8,1.179,1.692);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#47715C").s().p("AgCADIgNgJIAfAGIgJAHIgBAAQgFAAgDgEg");
	this.shape_118.setTransform(730.5,198.9,1.179,1.692);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#47715C").s().p("AgaAEIAggWIADABQgPAXAhgBIgMAOQgPgIgagHg");
	this.shape_119.setTransform(733.2,191.6,1.179,1.692);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#47715C").s().p("AgLgJIAAAAIAXAEIAAABIgJgBIAHAFIgBABIgHgBQgCAAAHAEIgDAGQgEgIgLgLg");
	this.shape_120.setTransform(741.6,175.2,1.179,1.692);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#47715C").s().p("AgVAAIArgEIgWAJg");
	this.shape_121.setTransform(735.6,220.5,1.179,1.692);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#47715C").s().p("AgcgIIANgGIAsAEQAAAMgDANIgaAAQgNgNgPgKg");
	this.shape_122.setTransform(740,170.8,1.179,1.692);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#47715C").s().p("AgaAWIABgBIgBABQAZgYAcgXQADAhgSASg");
	this.shape_123.setTransform(741.5,250,1.179,1.692);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#47715C").s().p("AgfAJQA2gUAJABQgLAKgjALg");
	this.shape_124.setTransform(734.1,250.9,1.179,1.692);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#47715C").s().p("Ag4AHIAZgHQAlgFAzgFQgKAQgaADIg7ACIgSgEg");
	this.shape_125.setTransform(735.9,231.2,1.179,1.692);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#47715C").s().p("AgmgKQBCgEALAGQgcAKgUALQgTgMgKgLg");
	this.shape_126.setTransform(758.1,230,1.179,1.692);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#47715C").s().p("AgrAPIAiggIAHABQgDAGAFgEQgMAIAMAAQARAAgLgGIAKAFIABACIAAgCQAOAHANAKQgcAIgZAAQgSAAgQgDg");
	this.shape_127.setTransform(727,278.5,1.179,1.692);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#47715C").s().p("AhKAbQB2g2AfABIgkAcQheAWgRADg");
	this.shape_128.setTransform(760,316.2,1.179,1.692);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#47715C").s().p("AgcgDIAKgCIAAgBIALAAQALAEAZAJQgrgHgOgDg");
	this.shape_129.setTransform(737.2,275.3,1.179,1.692);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#47715C").s().p("AgtAbQAtgeApgaIAFAFIgwA2QgEgEgnABg");
	this.shape_130.setTransform(722.2,175.6,1.179,1.692);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#47715C").s().p("AAAAAIABAAIgBABg");
	this.shape_131.setTransform(704.4,195.4,1.179,1.692);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#47715C").s().p("AgCABIAFgBIgDABg");
	this.shape_132.setTransform(713.5,180.1,1.179,1.692);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#47715C").s().p("AgKAJQASgQADAAIgBABQgDACgHAHIgIAGg");
	this.shape_133.setTransform(723.4,183.3,1.179,1.692);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#47715C").s().p("AgHADQAHgCAIgDIgIAGg");
	this.shape_134.setTransform(719.2,184,1.179,1.692);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#47715C").s().p("AhtALIARgMQAeABAsgKQgBgJgEgIQAjAHAEgNIgOgLQAOAFAmAKIgCAGQAIgEAJABIALADIAeANIAAAAQgXAFgVANIgEgEQgGgCgVAOQgWAPADAAQgWALglACQgwgPgSgSg");
	this.shape_135.setTransform(708.9,97.4,1.179,1.692);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#47715C").s().p("AgQAPQgsgIgNgYIAQAGIAAABIAmANQAkgDgKgLIAeAMQAWAMAPADQgZACgVAAQgbAAgRgDg");
	this.shape_136.setTransform(692.8,133.7,1.179,1.692);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#47715C").s().p("AgBAFQgBgFACgGIAAgCIAAADQgBAFABAEIACAEIgDABg");
	this.shape_137.setTransform(694.8,94.5,1.179,1.692);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#47715C").s().p("AgBANQAJgCgBgBIgPABIg/gaICPAPQg0AGgRAKg");
	this.shape_138.setTransform(702.3,146.6,1.179,1.692);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#47715C").s().p("AhSAEQAFgCAhgBQAdgBALgDQAqANAtgMIgQAFIh2ABIgfAAg");
	this.shape_139.setTransform(704.2,153,1.179,1.692);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#47715C").s().p("AgvAJQALgFAGgEIAcgIQAOAEAkAEQgMAAgJAGIhHADIgDAAg");
	this.shape_140.setTransform(708.3,120.3,1.179,1.692);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#47715C").s().p("AgIACIARgEIgLAFg");
	this.shape_141.setTransform(727.2,190.6,1.179,1.692);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#47715C").s().p("ABvAWQhVgKABgCQgCAEABAFQgMgGgsAGQg+AKgiAEIAEgEIg0gcIgbgMQAMgDgFgJIBcAEQgKgCgIgDQBSgCAsgGIAXAGQBJAQAMAKIgIAMIgBAAIAAAAIgDAFIAHgCIACABQARAKAagFQAPgCAfgNIACAbIgBAAQgIAAhSgLg");
	this.shape_142.setTransform(720.1,130.3,1.179,1.692);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#47715C").s().p("AgIAJIANgPIAEgCIgQARg");
	this.shape_143.setTransform(730.8,201.5,1.179,1.692);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#47715C").s().p("AgJgDIAJgBIAKAEIgNAEQgBgDgFgEg");
	this.shape_144.setTransform(707.5,192.9,1.179,1.692);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#47715C").s().p("AgGAAIANAAIgHABg");
	this.shape_145.setTransform(720.5,157.9,1.179,1.692);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#47715C").s().p("Ag9AEIALgJIAWgCIAxgGIAHgBQAHAOAcAIQgUADgpAEQgIgIg3gDg");
	this.shape_146.setTransform(735.4,153.5,1.179,1.692);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#47715C").s().p("AAAAAIADAAIgFABg");
	this.shape_147.setTransform(729.8,203.4,1.179,1.692);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#47715C").s().p("AAXAAIgoADIgGAAQAPgLAfAIg");
	this.shape_148.setTransform(717.9,232.4,1.179,1.692);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#47715C").s().p("AgkAPIBLgEQgYgIgCgEQgiAAgQABQAPgVALgKIANABQAvAPANAKQgVAagyAJIg1ADQAQgDAKgPg");
	this.shape_149.setTransform(734.5,178.7,1.179,1.692);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#47715C").s().p("AgQAAQAagDAHABQgLACgHADg");
	this.shape_150.setTransform(725.2,216.7,1.179,1.692);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#47715C").s().p("AgJAFQAPgGAEgDQgGAFgCAEg");
	this.shape_151.setTransform(722.9,152.9,1.179,1.692);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#47715C").s().p("AgcAIQApgVARABQgUAMgNANg");
	this.shape_152.setTransform(717.4,246.9,1.179,1.692);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#47715C").s().p("AgPAAQAOgFARAIg");
	this.shape_153.setTransform(733.9,88,1.179,1.692);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#47715C").s().p("AhCgFICPgLIgZANQgdAOgXAFQABgGgBgHQghgYgqAmQAMgNgDgJg");
	this.shape_154.setTransform(724.9,100.9,1.179,1.692);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#47715C").s().p("AgGAAIAGgDIAHADIgEAFg");
	this.shape_155.setTransform(718.5,61.8,1.179,1.692);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#47715C").s().p("AgSAIIAfgTIAGgBQgNAIgDADQgDAFAMAEIgPAFg");
	this.shape_156.setTransform(732,60.6,1.179,1.692);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#47715C").s().p("AgbAEQAWgRADgGIABAdIAdgPIgQAMIAAgFQgBADAAADIgLAMQgMgJgPgHg");
	this.shape_157.setTransform(721.7,54.7,1.179,1.692);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#47715C").s().p("AgDAAIADAAIADAAIgDABg");
	this.shape_158.setTransform(725.9,66,1.179,1.692);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#47715C").s().p("AgpAAIAAABQgKgCgNgCIAAAAQArgCAlgGQASAKAfAJIgBACIgDADQhfgZgHAMg");
	this.shape_159.setTransform(709.8,86.2,1.179,1.692);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#47715C").s().p("AgUAWQgjgigzABIAzgBQArgDATgHIBjAmQgrgEARAFQgEABg8gLQgugHAAAKQAHAJAJAEg");
	this.shape_160.setTransform(721.5,110.3,1.179,1.692);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#47715C").s().p("Ag0A6QAOgNAXgNQAOgMgNgeQAWAQAIAeIAFggQAGggAKghIAHA4IAHAYIgUgFQgHANAdAUIgUAFQgZgLACgEQgFAIAKAKIgnAHQghgEAFAAg");
	this.shape_161.setTransform(709.8,50.9,1.179,1.692);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#47715C").s().p("AgVAeQAqgZgcgBQgagCgsALIAKgMQAOgSAMgGQAIgDAIAAIACgBIAIgCQARAGArAUQADALAdAJIgDABIghACIgDAAIglADIgOAHgAATgDQAKgEADABIgcgFg");
	this.shape_162.setTransform(695.6,114.5,1.179,1.692);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#47715C").s().p("AABA0IAagHQgTgQgVgCQgOgVgugTIg7gZIApgOQAKAFADALIgKACQAJgCADAKIgCgKIAmgIIAFACIAGgGQATgFARgHIAZANQABAGAFAEQAIAGAQgDIASAHQACADALABIAOAGQgiABgQABQgbAEgCARIAqgGQAngFAYAAQgRADgIARQggASgeAcg");
	this.shape_163.setTransform(714.1,74.4,1.179,1.692);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#47715C").s().p("AgQgCIAJgEIAYALIgRACQgKgGgGgDg");
	this.shape_164.setTransform(701.3,61.4,1.179,1.692);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#47715C").s().p("AgIAAIABAAIADAAIANABIgRgBg");
	this.shape_165.setTransform(751.9,321,1.179,1.692);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#47715C").s().p("AgJAHIgGgHIAfgIIgBALIgKAGg");
	this.shape_166.setTransform(742.2,318.9,1.179,1.692);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#47715C").s().p("Ag2AIIhbABQALgBBHgCQBAgFAAgPQARAOA9AFQAiAFAgABIABABQgMABgjABQgFgFgWAGIgrAAQgKgJhJACg");
	this.shape_167.setTransform(723.6,137.4,1.179,1.692);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#47715C").s().p("AhgAAIBSgbIAjAKQgDAGADAEQAPAHAMgJIATAGQAJAHAVAHIgEAGIgKAFIAGgBIgDAEIhPADQg7gQgsgMg");
	this.shape_168.setTransform(718.2,201,1.179,1.692);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#47715C").s().p("AAGgCQAYgJAEAAQgNALg2AMIAngOg");
	this.shape_169.setTransform(457.7,346,1.179,1.692);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#47715C").s().p("AAFgGQAcgUAIACQgdASgQAaIgkAFIAtgfg");
	this.shape_170.setTransform(451.9,345.4,1.179,1.692);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#47715C").s().p("AAbAGQhJgIgBgBIAAADIgKgGIA8AAIgEAGIAQgFQAgABAIADIADABIAAAHQgFgCgaABg");
	this.shape_171.setTransform(398.7,362.3,1.179,1.692);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#47715C").s().p("AAJAEQgJgFgKgEIAVACIAAAJg");
	this.shape_172.setTransform(404.2,361,1.179,1.692);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#47715C").s().p("AgSAAIAlAAIgHACg");
	this.shape_173.setTransform(401.2,355.8,1.179,1.692);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#47715C").s().p("AAIAMQAAgHgZAFQgRgLgWgEQAGgSAjADQAXAOAxANIg6AOQAFgDAEgGg");
	this.shape_174.setTransform(390.7,324.2,1.179,1.692);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#47715C").s().p("AAUAPQgggDgegOQgDgDgGgCIgFgEIAfgBIAAACQACAGAmgIQAmgIADAUQADAQgbAAIgMgBg");
	this.shape_175.setTransform(400.1,318.2,1.179,1.692);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#47715C").s().p("AAIAFIgpgKIgDgGIAIABQAcALAlALQgFgBgYgGg");
	this.shape_176.setTransform(390.5,335,1.179,1.692);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#47715C").s().p("AhAARQABgLgGgIQADgeAzAGQAaAEA7APQgkAKgLAGIAHgGQgqAAgoAZQgNgFABgGg");
	this.shape_177.setTransform(417.6,345.6,1.179,1.692);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#47715C").s().p("AAiATIABAAQAAgLgwgHQg1gDgHgCIACAAQAoAEACAAIgIgIQAKgBAIgEIAPAEQAFACABgBQAHgJgJgHIARACIgFAFQAKARAZgOQAZgPACAGIgBAwg");
	this.shape_178.setTransform(397.3,346.9,1.179,1.692);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#47715C").s().p("AgEAAIgBAAIAIAAIACAAg");
	this.shape_179.setTransform(392.7,316.3,1.179,1.692);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#47715C").s().p("AjIAbQgBgPABgMQAPACAagGQAdgIAKgNQAHgBATgJQAUgJAQgKQAVAQAaAAQgTACgGATQADgEAmgFQAHAEgFADIgGAGQADgDALgBIgBgBIAPgJIgIAAQBCgGATAAIgNAEQgdAKgVAYQADAHBrglIASgBQgUAOAEAIQAOAEAKgOQgEALAbAJIgHAIIirAJIgBgBIAAABQhgAHAAAJQAAACADACIhJAEQAxgPArgYQgOgEgNACQAJgHAAgPQgaADgXAGQguAMAPAYIgYAPQgPAIgLADIgBgcg");
	this.shape_180.setTransform(433,314.9,1.179,1.692);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#47715C").s().p("AAiAZQg7gbAEgDQgJAFAZAZQgcgSgcgGQBUgdgKgSQADAGhCAWIgyARIAkgNQA4gWAIgPIAQgDIAqAxQAqAvABANQgOgFg1gZg");
	this.shape_181.setTransform(394.3,300.9,1.179,1.692);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#47715C").s().p("Ah4AgQA0ABAugQQgXgRgdAHQAAgXgaAEQgLACguAPQgnAQgSgCQgagDAAgiQACgYA/AFQBHAFACgBQgIAHAAAEQABgGBMgLQBIgLAVAAQgSADgBASQADgFAwgKQAwgLALABQgZAFgBAWQAEgGA3gGQA4gGABgBQgFAtgTAEQgiABgeADQgNgIhvANQhsAQAAAKQAVALAZgGIgkAMQgYgSgbgFg");
	this.shape_182.setTransform(437.5,333.3,1.179,1.692);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#47715C").s().p("AgEABIAEgCIAEADg");
	this.shape_183.setTransform(411.2,357.2,1.179,1.692);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#47715C").s().p("AgzAMIAYABQgHgMgOgBQA4gFAIgOIAjgHQgBAcACAYQgSAAhVgOg");
	this.shape_184.setTransform(399.9,331.4,1.179,1.692);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#47715C").s().p("AAGgBQAfgPAEgBQgTAHgDANIg7APQANgFAhgOg");
	this.shape_185.setTransform(424.9,348.7,1.179,1.692);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#47715C").s().p("AgIAIQAIgFgBgCQgCgBgKAAIATgHIAIADQgIAEgDAIg");
	this.shape_186.setTransform(425.9,364,1.179,1.692);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#47715C").s().p("AggAOQAXgLASgPQABADAXgEQgVAGgMAQQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAQgPADgLAAIgHAAg");
	this.shape_187.setTransform(418.8,350.1,1.179,1.692);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#47715C").s().p("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");
	this.shape_188.setTransform(404.6,230,1.179,1.692);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#47715C").s().p("Ag6AKQgJgDgVADIAVgQQADACA0gNQgZAKgJAZQAMANAzgdQA9ggAKABQgfAWgVAcIghAEQgDgKgNAJQgTAAgPAFIgJABQAHgLgJgJgAguAWIgBgDIgDADIAEAAg");
	this.shape_189.setTransform(441,346.5,1.179,1.692);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#47715C").s().p("AgDAAQADAAAEAAIAAABIgHgBg");
	this.shape_190.setTransform(446.5,361.5,1.179,1.692);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#47715C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_191.setTransform(456,308,1.179,1.692);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#47715C").s().p("AggANQgCgHgHAAQAIgBAWgFQAbgFASgIIAIgBIgjAMQgcAJgMAIg");
	this.shape_192.setTransform(429.5,324.8,1.179,1.692);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#47715C").s().p("AhCAgQAJgHASgHIAcgLQgIAHAAAMQABgEAkgXQAngbAKgFIg4A8IAAgBIgBAAIABACIgDAEIgIABQgNgJgLAGIAEAEIgugCg");
	this.shape_193.setTransform(448.7,300.7,1.179,1.692);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#47715C").s().p("AgFgCIAFAAIAGACQgFAAgEADg");
	this.shape_194.setTransform(422.9,360.7,1.179,1.692);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#47715C").s().p("AiyACIADACIATAAQAOAJAHABQAMACAHgMQgOgQgVgDIBLAGQAwAEAAgBQgHgGgLgFQAagCAUgGQgKAHgIALQAJAOAigLQAVgHAxgXQAcACAfAAIgWgLIgOABQAcgJAPAIQASAJAAAhQgNgKgtgEQgsgFApAWIg2gCQgogBAhANQgQABhKgFQhOgFAAgCQgOAYCIAFQgLACgVAFIgdAHQAHgCAEgGQAAgIgeAGQgkAHgCgBQATgGhZAOg");
	this.shape_195.setTransform(571.3,245.7,1.179,1.692);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#47715C").s().p("ABDAVQhDgBgoABIgDAAIAigEQAbgEgCgKIgBAAIABAAQAAAChFAAQhIAAgLgCQAKAAATgDQAhABBigJIBxgMIgkAOQgiALAAgCQgDAKAfAEQAQADAVABIgJAAIg4AAg");
	this.shape_196.setTransform(568.6,268,1.179,1.692);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#47715C").s().p("AgiAGQATgGADgJQALAGAdgDIAHAGQgmAGgBADQgQgBgOgCg");
	this.shape_197.setTransform(555.5,276.9,1.179,1.692);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#47715C").s().p("AAagCQgMABgIABIgBAAQgDgCgJAFQgKAGgIAHQAIg0ArAig");
	this.shape_198.setTransform(553.1,273,1.179,1.692);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#47715C").s().p("AhAADQgNgLgNgHQASAABCADQAJAHAsADIAsACQgzgBggABQg+gBAhASQgagKgRgEg");
	this.shape_199.setTransform(563.6,260.8,1.179,1.692);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#47715C").s().p("AgDgCQAIAAASACQgNABgNgBIgTAEQAEgHAPABg");
	this.shape_200.setTransform(552.5,218.6,1.179,1.692);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#47715C").s().p("AAdAAQgQgRAUAiQgQgSgUABQgGADAJAIIgHABIgMgGIADgBIgKgFIgJAAIgZgKQAXgHAdgLQANAJAPADIAVACQASAEADAnQgFgBgcgcg");
	this.shape_201.setTransform(539.3,206.3,1.179,1.692);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#47715C").s().p("AADAHQgHgHgKgIQATAGAKALg");
	this.shape_202.setTransform(542.6,173.2,1.179,1.692);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#47715C").s().p("AABJDQgBgFgQADIgEgRIgDAAIAEASIgFABIgFgCQgCAAgBAFIgGACQgFgEgFgBIgBADQABgFgLgDIAAgDIgHACQgSgCgtACIg1ABIA9gEQAygEAAgLQAAgKgoAEIhXAMQh/AOgDg4QAGAAA3ARQA3ASAAABQAEgJgagOIghgPIBFAAIAtACQAdABAQAEQgCgCgKgEIADgFQBcgHgMgTQABABgkADIgKgOQgCACAAADIAIAJIg8AEQgXgDgOAAIgFAFIgCAAIgBgEQgOABgIAEIgDAAQAjgQgwADIAEgBQAGgIgQAKIgJAAIAFgDQgGgBgHAFIgZABQAogYgrAEQgsAFgOAJQABgpAbgEQAUgCAqASIBDAcQAhALAJgPQgIgKgJgGIABgBIgBgBQAXAGAZACQgcgfgnACIA7gDQAwgFgGgXQgegDgcAOQAPgPgMgKQgPgFg+AQQhCAQgUgCQAegPAZgXQgtAAgnAaQgNgFABgGQABgMgGgJQAEgmBSAUIA6ANQAcAFACgLQgagVgegGQAzABAvgPQgXgTgdAIQAAgdgpAMQg1AWgZAFIgDAAIABABQgtAJAAgvQACgYBFAGQBEAHAAgGQgDgHgFABIAMgCQAjgFAHABQAAAGgHgBQAmAMgJAEQAoAFAYgCQAhgCAUgOQgUgPgzAAIhMAFIAAgDQA9gSgMgOQgDAKglAGIACgBIgigMQgWAAgTACIAlgSQgOgFgOADQAGgFACgHQANAEAVgGIAhgMQAGATgQAFQgFACgUAAQACAHAFAFQAUACAKgDQAOgEAFgOQAIgGgHgEQgKgGADgFQADgFAIgDIgbAEQALgMgSAEQABgEAUgBQATgBABgFQgGgBgLgJQgKgJgFAAIAngHQgZgJgeAEQAPgKARgCIAlgDIg0gZQAOAGAeACQAoADAEgNQACgFgigFQgigEgHACIBJgPQBCgPgBgCQgJgLgpAMQgqAMgEgGIAHgDQAEgDgBgDQgLACgFgNQgDgJgXAQQAKgdAfgHQgUgCADgDIARgNQgVAMgDgXIAAAGQgbABgYgJQAYgDA+gKQAsgIAiABQgagMgfgfQgfgeAKgEQgaAGgZgJQCTgYgEgEQgTAEgggMQgigNgSAEQAngjg+ATIATgKIgRgLQBVAEgLgOQAHACAXANQAYAKAJgLIgzgcQAIgCgGgIIA+AFIgagHIgagHIBIgYIh2AHQAKAAARgLQARgKAHAAIgrgKQAWgLAcACQAjACAPgEQgigKgUgIQgigQAHgXQgFARAggCQARgBAUgFQgCgLgLgNIgTgXIgFgJQgDgEgBgHIBNASQACgPgXgOQgNgJgVgJIgbgLQAhgMgCgBQgXgIgMgQIBDAiQASgNgbgHQgdgDADgBIAIgGIAPgKQAHgFgBgIQAAgHgEgKQAJAHAFAJIAHAPIAHgoIAHgYIAEAiQADAUAIANIANgMIAMgMIAAATIAUgLQgOANgKALQgTAUAFAJIACACQANAJAdgSIAcgSQAPgLAHgCIgNAJQgHAGALADQgVAFgUALIgDACIACAAQALAAgCABIgMAFIgLAEIABABQADAEAcgCQgGAFgQAAIgaACQgMACgEAHIgBAFQAFAAAXgEIACAAIATgDIACAAIAXgBIANACIABAAIAFACIgFgBIgCAAIgLACIgIACIgFACQgNAGgQAMIgMAJQgOALgKAMQgJALgBAGQAKgEAbANQAWAKANgSQARgYAMABQAFAAAGADIARAKIAVAKIgPAEIg0AZQggAPgZgDQAAACAQAHIAOAHQAdAMAlAOQgVABgHACQgKACAVAKQgYABgcAEQgpAFgCAJIA6ANQA0AOgYAHQARANAhgMIAagKQACAHgBAEQAAALgOADQgFABgRAAQAGAPAPAFQgYgHg4AIQhCAKAIAcIAmgUQATgIADANQADAPgKgBQADAEAlgFQAogGAHABQAAAGgGgBQAhALgDAEQgCADgWABIgIgGQgGAAABAGIgKAAIALAEQADAHAKAMQgBgBAAAAQgBAAAAAAQgBAAAAABQAAAAAAABIACAGQgBAIglgLQAOAQguACIhHgCQAMAGA5ACQA2ACAagEQgJADACACIAQAEIgSAEIgMADQALAJgHgCQgGgBAMAIQgCAFgzAAQgxAAgCAPIAAAAIAAAAQAAgCA1gDIBQgDQANAUAGAMQgVABADALQgVgMgCALQgQgBgBAFIAfAMIAFAGIgQACQgcgGgEALQhTASADAXQACADAGAAQAHAJATALIgDAFQAGACAOACQAdAPALABQAKANAcAIQAaAIAQgCQACAUgDAjQgLgCgPgJIgYgPQAPgYgugNIgxgKQgBAPAKAKQgOgDgNAFQArAXAxAPIhdgFQhHgGgEgOQgLANAxAQQAkALAVADQgGgBgDAHQAAAFBFgGQBFgHACAZQAAAkgaADQgSACgngPQgugSgLgCQgagEAAAZQgdgIgXATQAxAPAxgBQggAGgZAVQAEANBLgSQBOgTAOAXIgGgBQAEABAEADIACAJQgGAJABALQABAHgNAEQgngZguAAQAaAXAeAPQgUAChCgRQg+gQgPAFQgMAMAOAOQgbgPgfAEQgFAXAwAFQAWADAegBQgjADgZAbQAYgCAagHQgLAIgIALQAJAPAhgLQAUgHAvgWQApgSAUADQAcAEABApQgNgJgtgFQgsgEApAYIg3gDQgogCAiAPQgQAAhMgEQhOgFAAgDQgNAWB1AGQBMAFAzgDQgbAMgGAEQgbAOAFAIQgBgBA3gRQA3gRAHAAQgCAcgfALQgYAIgugDQgLAAhdgNQgygGAAALQAAALAyAEQAaACAjACQgHABgfgCIg0gBIAAAAIgBAAQhAAAAhATIghgLQgcgJgBAIQADARARADQgNABgEAOQABAEATgBQgOAJgIAJgAgWInIgLgvIAJAvIACAAgAj1HZQgGAGAAAGIADACIAGgPgAjTHjIAJgCIAAgFgAhVHTIgBgGIgLADIAMADgAhkGRQBOAKAKgOQgNgNgkgDQgFAHgJgDQgHgCgDAMQAFgDAGACQAHACgBAHIgbgCIgFAAgAj9F6IAAAAQABgBAegCIADgGQgKgDgIAAIgDAAIgEACQgIADgBAHIAAAAgAgyCnQAeAEAqAIQgEgahCAFIgmAGIADAAQAOAAATADg");
	this.shape_203.setTransform(508.1,192.9,1.179,1.692);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#47715C").s().p("AgDgCIAGAAIABAFg");
	this.shape_204.setTransform(545.6,187.5,1.179,1.692);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#47715C").s().p("AgBACIgDABQAGgDABgCIgBACIACAAIgFADg");
	this.shape_205.setTransform(501.4,292.4,1.179,1.692);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#47715C").s().p("AgGADIACgEIALgBIAAAAIgNAFIAAAAg");
	this.shape_206.setTransform(519.6,288.5,1.179,1.692);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#47715C").s().p("AhEARIgDgRIABAAIABgIIBJgIQAEAJAAAHIgCAAQgCAJAeAEQAPADAXABIiMAAg");
	this.shape_207.setTransform(530.2,289.4,1.179,1.692);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#47715C").s().p("AgDgCIABgBIAEAAIACAHg");
	this.shape_208.setTransform(521,288.6,1.179,1.692);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#47715C").s().p("AgaALQAMgEAXgPQAYgQAHgCIgNAJQgHAFALAEQgWAFgUAKQANAAgCACIgWAJQABAEANAAIAPgCQgFAFgOABIgbACg");
	this.shape_209.setTransform(480.2,180.1,1.179,1.692);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#47715C").s().p("AgoAWQAQgQAAACQgBgRgaAQQgdAYgEACQACgQATgfIgBADQALgEAaANQAWAJALgQQATgbAPAEQAKADAjATQgRADgdANQggARgMAEQgJgCgTAFIgFgBIABABIgMADIgCAAQgBAAAMgLg");
	this.shape_210.setTransform(479.6,200.8,1.179,1.692);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#47715C").s().p("AAAACIgFgCIACgBIAJADg");
	this.shape_211.setTransform(452.9,231.3,1.179,1.692);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#47715C").s().p("Ag+gKQAQABAagHQAbgJAKgMIANgFQAfAJADAGQhgANAWAeIgYAQQgPAJgLACQgDgjABgSg");
	this.shape_212.setTransform(476.5,228.2,1.179,1.692);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#47715C").s().p("AgVAAQAOgGAOgCIAPARQgXgEgUgFg");
	this.shape_213.setTransform(459,210.3,1.179,1.692);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#47715C").s().p("AAAAAIABgBIAAADg");
	this.shape_214.setTransform(466.4,209.1,1.179,1.692);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#47715C").s().p("AgRAAIgCAAIAagJQAJALAEAIIglgKg");
	this.shape_215.setTransform(463.5,218.6,1.179,1.692);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#47715C").s().p("AgGgBIAMABIABACg");
	this.shape_216.setTransform(465.2,221,1.179,1.692);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#47715C").s().p("AgIAAIARgBQgHABgFACg");
	this.shape_217.setTransform(461.8,251.9,1.179,1.692);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#47715C").s().p("AgrgKQAngGASgQIA1AWIgPAFQgIABAAACIgdAMIgPACQAEgHgEgDQgVgCgQAUQAUghgQAOQgcAegFACQADgpAUgCg");
	this.shape_218.setTransform(477.4,214.4,1.179,1.692);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#47715C").s().p("AgJgIIASAJIABAIQgKgHgJgKg");
	this.shape_219.setTransform(461.6,177.4,1.179,1.692);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#47715C").s().p("AgVAQQAHgngUAqQgHgIACggQAFAHACAJQACgSAFgWIAHgZIADAWQADAeAJAPQADgFAIgHQAIgHAEgFIAAAUIAUgMQgPANgKAJQgRAVAFAIQgVAUgQATQAJgiAEgVg");
	this.shape_220.setTransform(473.6,176.3,1.179,1.692);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#47715C").s().p("AgBAAIABAAIACABg");
	this.shape_221.setTransform(461.3,182.2,1.179,1.692);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#47715C").s().p("AgJgNIAMAHQACAHAFANQgHgPgMgMg");
	this.shape_222.setTransform(465.2,180.9,1.179,1.692);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#47715C").s().p("AARAUQgRgSABANQgqgPAIgYQgFAQAfgBQAOgBAXgFQAFAHAAAKIgBAXg");
	this.shape_223.setTransform(462.6,203.1,1.179,1.692);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#47715C").s().p("AgCAAIADgCIACAFIgFgDg");
	this.shape_224.setTransform(463,181.7,1.179,1.692);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#47715C").s().p("AgcAJQAHgCARgIQAMgIAGAAIAPAQIg2ADg");
	this.shape_225.setTransform(459.9,213.6,1.179,1.692);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#47715C").s().p("AAJAAIgRABQAKgDAHACg");
	this.shape_226.setTransform(479.8,233.7,1.179,1.692);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#47715C").s().p("AABACQgMgPgFgEIAQADIARAhQgFgCgLgPg");
	this.shape_227.setTransform(464.6,192.5,1.179,1.692);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#47715C").s().p("AgDACIAGgEIABAFg");
	this.shape_228.setTransform(464.8,177.2,1.179,1.692);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#47715C").s().p("AAAgMQgMADgTAPQgUATgJAHQADgWAGgHIAUgVIAEgFIApgGQAggEAPAHQgTgGgjAXQgdATgQAWQAbgpALgDg");
	this.shape_229.setTransform(477.2,191.3,1.179,1.692);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#47715C").s().p("AgWgDQARADAcABIgZADg");
	this.shape_230.setTransform(450,280,1.179,1.692);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#47715C").s().p("AgyAJIAHgDQAEgDgBgDQgIACgDgCQgCgBgCgFQBngFAIAAIgQAKQgMgEgmAKQgXAHgKAAQgFAAgCgDg");
	this.shape_231.setTransform(456.7,268.7,1.179,1.692);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#47715C").s().p("AAAAAIACAAIgDABg");
	this.shape_232.setTransform(447.2,267.9,1.179,1.692);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#47715C").s().p("AgBgBIADABQgCAAgBACQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBg");
	this.shape_233.setTransform(458.2,224.3,1.179,1.692);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#47715C").s().p("AAQAQQg7gOABgPQgBAEAFAHQAGAFgBAEIgFgEQADgEgLAAQgMgJgPgFQANABAVgBQAdAAAJgFQgGAGgBAIQACAGANgCIAegHQAQAGAIgGQALADABAJQADASgaAAQgNAAgVgFg");
	this.shape_234.setTransform(458,228.6,1.179,1.692);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#47715C").s().p("AgMAQQgYgZAIgDQgaAIgZgKQAFgBBJgNQgGAEgDAIQADAKBWgRQgCAXADAdQgOAAhOgNg");
	this.shape_235.setTransform(456.5,242.2,1.179,1.692);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#47715C").s().p("AgKgFQAKACALADIgCAGQgKgCgJgJg");
	this.shape_236.setTransform(496.9,360.7,1.179,1.692);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#47715C").s().p("AgGACIgGgDQAPACAKABIAAAAg");
	this.shape_237.setTransform(504.4,334.3,1.179,1.692);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#47715C").s().p("AgJgDQAJACAKgBIgIAFQgHgEgEgCg");
	this.shape_238.setTransform(504.8,305.7,1.179,1.692);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#47715C").s().p("AAgARQAGgCgsgPIg6gPQAOgFA3AIIgFAEQAgAEAhAHQgBAEgJADIgTAGIABACg");
	this.shape_239.setTransform(501.8,349.4,1.179,1.692);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#47715C").s().p("AgJgBIAFgCIAAAAIAOAHg");
	this.shape_240.setTransform(504.8,360.5,1.179,1.692);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#47715C").s().p("AgSgEQAGAAAcAEIADAFQgbgFgKgEg");
	this.shape_241.setTransform(498.7,304.9,1.179,1.692);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#47715C").s().p("AgGABIgEgFIATACQgCABAEAGg");
	this.shape_242.setTransform(502.1,305.6,1.179,1.692);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#47715C").s().p("AgZAUIhZABIAmgEQAegFgCgKQABAEhGgbICDAOIgFADQASAEApgBIAgABQgIAFAGADIAUAIQgOADgDADQgrgDhTABg");
	this.shape_243.setTransform(491,297.5,1.179,1.692);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#47715C").s().p("AgTAMQgPgFgWgFIgZgDQAKgIAlgBIAiABIAAgEIAUgEIALAEQgDAEgCAJIABAAIAAABIAmALIACABIACABIANABIgQABIABgBIgLgCIgSAEIgZAAgAAvALQgcgFgCAAIABACIAdADIAAAAg");
	this.shape_244.setTransform(508.8,328.8,1.179,1.692);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#47715C").s().p("AgUAAQAGgCAjgBQgTAFABACQgIgEgPAAg");
	this.shape_245.setTransform(510,343,1.179,1.692);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#47715C").s().p("AgMgCIAYgBIgSAGQgBgCgFgDg");
	this.shape_246.setTransform(509.5,322.3,1.179,1.692);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#47715C").s().p("AgVAIQgRgIAFgQQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAQAFABAVAOQANAIAGgGQADgJgJgFQAbAMgCAJQgDAIgUAAQgSAAgPgJg");
	this.shape_247.setTransform(474.1,297.5,1.179,1.692);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#47715C").s().p("AgFAFQANgPASgOQADAYgPALQgMAIgcAGg");
	this.shape_248.setTransform(462.8,346.1,1.179,1.692);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#47715C").s().p("AgOgCIAOgEIAPAAIgQANg");
	this.shape_249.setTransform(460,360.6,1.179,1.692);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#47715C").s().p("AgSABIgBgIIgBgDIgBgCIABABIABgCQAKAGAMAIQALAJAIACIgVACQgNgIgGgFg");
	this.shape_250.setTransform(475.7,361.9,1.179,1.692);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#47715C").s().p("AgtAlQiVgVAXg1QAAgMAaADQAGABAeAHQgYAQAOARQAIADAIgRQAHgPANAIIANAaQAJASAHgFQAFgIgGgGQAEACAFADQAGACAEgDQAGgMgPgJQAIAEBpAfIgLADQAJAEAYgBIASAFQgEAGgCAHQAGAFAVgBIAugHIAAABQgcAEgaAFQhcgBhKgKgABsAcIAAAAIAAAAgABrAXIAFgBIgEAGg");
	this.shape_251.setTransform(491.4,332.4,1.179,1.692);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#47715C").s().p("AADALQgDgNgCgIIAEADIACASg");
	this.shape_252.setTransform(500,363.5,1.179,1.692);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#47715C").s().p("AgDAAIAHgCIgDAFg");
	this.shape_253.setTransform(506.8,359.9,1.179,1.692);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#47715C").s().p("AgCACIgBgCQADgCAEAAIgBAFg");
	this.shape_254.setTransform(494.1,360,1.179,1.692);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#47715C").s().p("AAAAAIAAAAIAAAAIABABg");
	this.shape_255.setTransform(507,308,1.179,1.692);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#47715C").s().p("AgJAYIgBgDQgDgBgGgFIAngmIAAABQgTAWAHgDQgGADAEAAQADAAADAAIAAADIAEACIgFAAIAAAHIgFgHIgJgEQgFAHAAAGIADAFIgDACIABADg");
	this.shape_256.setTransform(454.2,361.2,1.179,1.692);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#47715C").s().p("AAFgTQAmgXAHAvQgJgGgJgFQgMgHgCABQgJAVAeAJQgXAEhBAFIA2gug");
	this.shape_257.setTransform(460.2,283.5,1.179,1.692);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#47715C").s().p("AgpAfIAAAAIAAAAgAgYAQQACgKgPATQAXgdAIgHQARgSAegBQAGAqgrAOIgtAFQAQgDABgMg");
	this.shape_258.setTransform(460.3,299.2,1.179,1.692);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#47715C").s().p("AgCgEIAFAEIgDAFg");
	this.shape_259.setTransform(458.2,363.4,1.179,1.692);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#47715C").s().p("AgDAYQgOgBgJgCIAYgVQASgSgEgHQAOgBABAWQAAASgIAKQAAgCgGABQgFABAJACIgUgCg");
	this.shape_260.setTransform(463.2,311.1,1.179,1.692);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#47715C").s().p("AgFgDQAJADAJACIgZACg");
	this.shape_261.setTransform(457.7,316.6,1.179,1.692);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#47715C").s().p("AgLAOQgJgIgEgBIAegUIAJgGIgDAFQgGAMATAAIgUAVIgBABIgBAAQAKgLgNAOIAAABQgDAAgIgIg");
	this.shape_262.setTransform(457.9,310.5,1.179,1.692);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#47715C").s().p("ABZAiQg7AAg5gCQh2gEABghQAAghBIgDQA6gCAhALIgBABIgsAAQALAEgEAEIgGAEQAIgEAdABQgIALgCAEQAIgHAkAEQAjAFgGAFQAHgGgRgMQBDAGANAKIgkgBQgCABAWANIgWgHIgYgEQAGACAQANQARAOAAAEIgGABIgDAAIABAAIgpAIQAIgDAIgFg");
	this.shape_263.setTransform(487.5,315.6,1.179,1.692);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#47715C").s().p("AgGgIIANADQgBAKgEAEQgCgJgGgIg");
	this.shape_264.setTransform(371.6,243.8,1.179,1.692);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#47715C").s().p("ABZgQQgMAAAMAQQguACgFATQgogGgegBQgigCgFAFQgzAAgNgEQgTgGgFgrIA5AHQA3AGAEAGQgCgVgYgGQALgBAvAKQAvALADAFQgBgRgSgEIAzAFQArAFAfAFQgBANAQA5Qgfgjgogag");
	this.shape_265.setTransform(353,246.5,1.179,1.692);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#47715C").s().p("AgMAAIAZgCIgNAFg");
	this.shape_266.setTransform(362.7,360,1.179,1.692);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#47715C").s().p("AgWAAIgBgBIAtABIACACg");
	this.shape_267.setTransform(350.2,355.7,1.179,1.692);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#47715C").s().p("AgIACQAHgGALAAIgGAJg");
	this.shape_268.setTransform(356.8,326.5,1.179,1.692);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#47715C").s().p("AgTgCIAnADIgTACQgOAAgGgFg");
	this.shape_269.setTransform(377.4,297.5,1.179,1.692);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#47715C").s().p("AggAcQABABgtgRIAAgcIAvAIQAoAGACgHQgHgSgUAGIAYgIQALAXAZAFQgRgDAKAEIAmALQgsAKg/AJg");
	this.shape_270.setTransform(384.6,306.9,1.179,1.692);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#47715C").s().p("AgiANQACgNAAgNQALAGAJgFQARAMAUAGIgHgJIARAJIg8AIg");
	this.shape_271.setTransform(379.9,338.4,1.179,1.692);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#47715C").s().p("AgHgEIAPABIgBAIQgGgFgIgEg");
	this.shape_272.setTransform(371.3,297.3,1.179,1.692);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#47715C").s().p("AgBADIgEgJQAFAHAGAGg");
	this.shape_273.setTransform(370,299.6,1.179,1.692);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#47715C").s().p("AgFAEIAKgKIABANg");
	this.shape_274.setTransform(359.4,327.2,1.179,1.692);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#47715C").s().p("AAAAFQgCgCgEgKQALAEACAKIgBACg");
	this.shape_275.setTransform(371.5,305.7,1.179,1.692);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#47715C").s().p("AgTABQAigBAFgCIAAABIgnAEg");
	this.shape_276.setTransform(377.9,327.8,1.179,1.692);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#47715C").s().p("AgNABIAAgBQAIAAAEgDIAPAHg");
	this.shape_277.setTransform(378.2,352.4,1.179,1.692);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#47715C").s().p("AgDAEQACgEgCgEIAHAEQgEAAAAAEIAAABg");
	this.shape_278.setTransform(379.7,348.6,1.179,1.692);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#47715C").s().p("AgLAAIACgBIANABIAIACg");
	this.shape_279.setTransform(378.5,345.1,1.179,1.692);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#47715C").s().p("AgKAAIAAAAQAGgGAPAGIgLAEIgKgEg");
	this.shape_280.setTransform(377.1,347.5,1.179,1.692);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#47715C").s().p("AAAABIABgBIAAABg");
	this.shape_281.setTransform(405.4,356.3,1.179,1.692);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#47715C").s().p("AgHgDIgdgGQAJgBA/ANQgLAFgMACQgBgJgTgEg");
	this.shape_282.setTransform(379.6,295.5,1.179,1.692);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#47715C").s().p("AALgHIAOAGIgxAJQAYgIALgHg");
	this.shape_283.setTransform(393.9,310.8,1.179,1.692);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#47715C").s().p("AAqATQgjgLgVABIgmgIQAigNASgFQANAWAGgDQAGgKgHgMQAhAAACApg");
	this.shape_284.setTransform(365.8,336.4,1.179,1.692);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#47715C").s().p("AgDAAQAEgBACgCIABAIg");
	this.shape_285.setTransform(371.3,285.1,1.179,1.692);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#47715C").s().p("AgOAaIAFgBQABABgBgBQAXgGgGgLIAAAAIAAAAQAAABgiAFIgRgMQgIgJgLgJIAGgKIAXABIABACQgMgBgBADQgEAGAlALIAMAHIAAgEQAiAIAdAEQgdgDgYATg");
	this.shape_286.setTransform(387.3,337.2,1.179,1.692);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#47715C").s().p("AgEABQAEAAACgDIADAFIgJgCg");
	this.shape_287.setTransform(370.3,268.1,1.179,1.692);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#47715C").s().p("AgfgTIADAAQAKAGAPADQALAFAVAJIAEAQQgggVgggSg");
	this.shape_288.setTransform(367.8,280.1,1.179,1.692);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#47715C").s().p("AgUgHIAiABIAAgBIAHABIABAOIgqgPg");
	this.shape_289.setTransform(370,239.4,1.179,1.692);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#47715C").s().p("AgEACIgDgFIAPAGg");
	this.shape_290.setTransform(346.9,351.4,1.179,1.692);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#47715C").s().p("AgFgOIAAAAIALAdIgLgdg");
	this.shape_291.setTransform(350.1,364.5,1.179,1.692);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#47715C").s().p("AAxAWIgQgIQgKgJgigKQgagJgPgDQAPgJAiANIgEABIAAACQADAEAJABIgCgFIAmAQQgCAGAOAKg");
	this.shape_292.setTransform(359,280.1,1.179,1.692);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#47715C").s().p("AgFAAIAAAAIAGgCIAFAFg");
	this.shape_293.setTransform(363.6,247.6,1.179,1.692);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#47715C").s().p("AAAAAIABAAIgBABg");
	this.shape_294.setTransform(595.8,254.8,1.179,1.692);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#47715C").s().p("AgbgFIAGgDIAxARQgigHgVgHg");
	this.shape_295.setTransform(559.2,337.8,1.179,1.692);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#47715C").s().p("AgCgBIAFABIgCACg");
	this.shape_296.setTransform(565,333,1.179,1.692);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#47715C").s().p("AiQAfIAcgJIAcgIQAFACAGgDIABgDIAcgIQBPAdADgHIgKgLQAFADAGgIQADgFAGgLIAnAEIAEAAQAaAEACAAQgGgPgPgDIAAgBQAagBAVgSIAAACQAYA3ilAUQiCgGgOgCg");
	this.shape_297.setTransform(573.9,303,1.179,1.692);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#47715C").s().p("AgSAJIAIgGQAJgCAGgCQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAIARgJQABANgWAOg");
	this.shape_298.setTransform(587.5,331.6,1.179,1.692);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#47715C").s().p("AgQgGIAMgDIAVAKIgQAJQgGgKgLgGg");
	this.shape_299.setTransform(568.3,335.8,1.179,1.692);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#47715C").s().p("AgPAIIgIgKQANgBAQgEIASAHIgfAJg");
	this.shape_300.setTransform(572.7,340,1.179,1.692);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#47715C").s().p("AgIgBIAJgDIAIAAQgDAEAAAFg");
	this.shape_301.setTransform(573.8,301.7,1.179,1.692);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#47715C").s().p("AgDAAQADgBAFgFQgFAGAEAHg");
	this.shape_302.setTransform(576.3,304,1.179,1.692);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#47715C").s().p("AABARQgOgVgXgQIAFgCQALAFAVAQIAkAYg");
	this.shape_303.setTransform(564.7,337,1.179,1.692);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#47715C").s().p("AgSgDIAIgDQAYAGAFgBIgaAIQgEgFgHgFg");
	this.shape_304.setTransform(580.8,337,1.179,1.692);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#47715C").s().p("AgQAAQAdgGAEAJQgMAAgVgDg");
	this.shape_305.setTransform(588.6,295.5,1.179,1.692);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#47715C").s().p("AgHAKQgKgLgIgJIAIgFIArAfg");
	this.shape_306.setTransform(611.6,317.6,1.179,1.692);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#47715C").s().p("AgIABIARgCIgGADg");
	this.shape_307.setTransform(612,304.3,1.179,1.692);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#47715C").s().p("AgrgSIAEgFQAMAFAbAQIAsAWIgsADQgTgXgYgSg");
	this.shape_308.setTransform(616.5,316.4,1.179,1.692);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#47715C").s().p("AgdAXQgUgGgFgrQABABAvAEQAvAGAOAFQgVAJgRARQAAAJAPACQgwAAgNgEg");
	this.shape_309.setTransform(602.2,300.6,1.179,1.692);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#47715C").s().p("AAAAIIgggTIBBAWg");
	this.shape_310.setTransform(609.6,280.6,1.179,1.692);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#47715C").s().p("AgNgIQAHgCAUAMIgCAIQgMgLgNgHg");
	this.shape_311.setTransform(606.6,313.4,1.179,1.692);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#47715C").s().p("AgYgJQAIgBAmAIIADAFQgOACgLAFQgDgOgVgFg");
	this.shape_312.setTransform(609.4,296.3,1.179,1.692);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#47715C").s().p("AgOgDQADgGAJAGIARAKIgcAAg");
	this.shape_313.setTransform(597.5,225.4,1.179,1.692);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#47715C").s().p("AAAgHQgDACgNAMIgGgDQAOgEgJgJIAoADQgNAGgKALQAHgVgHADg");
	this.shape_314.setTransform(552.8,197.6,1.179,1.692);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#47715C").s().p("AgBgCIAJgFQgMAOgEABg");
	this.shape_315.setTransform(550.4,185.6,1.179,1.692);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#47715C").s().p("AixACIAvAIQAqAGACgHQgGgPgTAEQAWgFAigOQAvgTAFgPIANADQgBAHABAHIAWgLIAeABQggAGgZAVQADAKAbgEIA6gNQBTgUADAlQgFAKAAAJQABAHgNAEQgngXgtAAQAZAUAeAQQgTABhDgQQg7gQgPAFQgNALAPAPQgcgPgeAEQgDANAOAHQhSAPgZAAQADgbgBgbg");
	this.shape_316.setTransform(571.3,228.9,1.179,1.692);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#47715C").s().p("AgZALQAxgQARgPIAOADQgSAKg2ARIglALIAdgKg");
	this.shape_317.setTransform(563.5,222.3,1.179,1.692);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#47715C").s().p("AgaADQAWgDAfgHQgMAHgGAHQgQgHgTADg");
	this.shape_318.setTransform(564.5,241.1,1.179,1.692);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#47715C").s().p("Ai3AoQAvgJANgEQAWAFADgHQgFgXgeADQAJgFBAgUQAsgPgZAFQAWgFAMgSQAjANAYADQgGgBgCAHQAAAFBEgGQBFgGACAYQhFAAgxAMQgXgIgLACQgOADABAQQgSgFgOAFIAAgBQghAGgbAXQgBgEAGgGQAFgHgBgEQABAQg6AOQgXAGgOAAQgWAAgCgOg");
	this.shape_319.setTransform(571.1,214.3,1.179,1.692);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#47715C").s().p("AhaAMQgEgCgFAAQBMgJgIgSQgCgDgEgCIAXAAQgCAEgBAEIgBAAIABAAQAAgCAygDQg2AUAHANIAAAAIAAAAQAAgCA0gPQA3gRAGAAQgCAohCADIgIAAQghAAhQgLg");
	this.shape_320.setTransform(580.7,255,1.179,1.692);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#47715C").s().p("AgHgCQALACAEAAQgIAAgGADg");
	this.shape_321.setTransform(609.9,257.3,1.179,1.692);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#47715C").s().p("AgDACQADgCAAgFQAJAFgJAGg");
	this.shape_322.setTransform(587.1,201.2,1.179,1.692);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#47715C").s().p("AgqABQAOgCAFgHIA1AGIANAKIgQABIhFgIg");
	this.shape_323.setTransform(602,257,1.179,1.692);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#47715C").s().p("AANAGIAAAAIAAAAgAgMgEIAAgBIAQAHIAJAEQgEgBgVgJg");
	this.shape_324.setTransform(542.2,210.9,1.179,1.692);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#47715C").s().p("AgSgDQAagDALAEIgfAIQgCgGgEgDg");
	this.shape_325.setTransform(565.4,317.8,1.179,1.692);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#47715C").s().p("AghgLQAEAAAYAJIAoAOQg2gLgOgMg");
	this.shape_326.setTransform(603.9,316.6,1.179,1.692);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#47715C").s().p("AhEAAIgBgCQAPgEAcgDQAggEAbADIgsADIAAADQAJAJAzgNIAAABQAHAKAOAHIgKACQgXgFhpgHg");
	this.shape_327.setTransform(580.2,281.1,1.179,1.692);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#47715C").s().p("AghADIABgCQAzgHAPAGIgVAEQgNgDghACg");
	this.shape_328.setTransform(518,338.3,1.179,1.692);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#47715C").s().p("AgFgCIAQACIgVADg");
	this.shape_329.setTransform(519.5,364.1,1.179,1.692);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#47715C").s().p("AhsAqIADgJQABgJgHANIgDAFIgGAAQgGgFgPgHQAGgHADgGIgOAEQAFgPAIgJIAAAAIAigFIgMgHQAhgQAMgFIAUgCQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBQAQgCAIAHQgagCgIAVQABAFAogLQAqgLAIADQghASghASQADANAtgNQAjgHAXgKQAUAAALgGQAHgDANgMIAXgBQgSAXhRAWQgjABgbAFQgdAGgOAJIgFgBQAGgIANgNQgRgKgjAgIgJAKg");
	this.shape_330.setTransform(526.3,358.1,1.179,1.692);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#47715C").s().p("AhAAQQgBgEgJgLIAagBQANgBACgFQgHgCgIgFQAmgEAeACQAoADAPAMQgzAAhXARg");
	this.shape_331.setTransform(535.9,302.6,1.179,1.692);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#47715C").s().p("Ag0gJQANACA1gKQAZAEANADQhBASAKAEQgUAAgRAFQgIgHgEgTg");
	this.shape_332.setTransform(556.7,321,1.179,1.692);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#47715C").s().p("Ag+AIQgNgHAEgGQAKgSAvABQAeAAA5ALQgBALgMAFQgfABAAAKQgdAGg8ABQAKgIgMgHg");
	this.shape_333.setTransform(537.1,308.4,1.179,1.692);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#47715C").s().p("AheAPQA6gPAHgEQgOAHAFANQAEADAGgCQAFgCAEgEQgGAHAFAIQAHAFAJgTIALgZQANgIAHAPQAIAPAIgCQAOgQgYgQIAlgIQAZgDABANQANAfgzAVQghgDgxADIhJAFQgCgLAFgIg");
	this.shape_334.setTransform(533.8,321.5,1.179,1.692);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#47715C").s().p("AghAAQA3gHAMgBIgsARg");
	this.shape_335.setTransform(535.1,286.6,1.179,1.692);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#47715C").s().p("AgEgCQALAAAEACIAAAAIgVAEQAGgEAAgCg");
	this.shape_336.setTransform(526.9,305.5,1.179,1.692);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#47715C").s().p("AgUgWQAJAKAMALQAGANAPACQgHABgEAFIggADQACgXgBgWg");
	this.shape_337.setTransform(553.3,262.4,1.179,1.692);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#47715C").s().p("AiUEDQAnAQANgRIgkgTIAdghIAcADIgYgGQALgMgBAAQgNACgNAFIgogLIBvgkIhkAGQAtgegPgLQgIgCgIAFQABgFAAgFQgFgGgIAHQgGAEgKAMIgJgBIAPgaIAsADQAbABAVgHQgGgDgagIQgcgIgPgGIAHgNQgLADgHAFIgEgBQAEgNAAgMQgNAIgGAIIgFgDIAEgVIAUABQAcgCAfgIQgCgTgXgYQgagfgGgLQgDgHgBgGIgBgCIB1AbQAEgagxgcQgYgNgzgUIgEgCIANgEIAjgMQAEgCgJgDIgLgEQgXgKgQgWIBnA1QAbgUgpgKQgtgGAGgBQAPgNAWgMQANgNgLggQAWASAJAeQAFgwAQgzIAGAxIAFAZIAHATIAAABIAEAJIADgEIARgQQALgKAGgIIABAfIAfgRIgqAoIgDAEQgSAVACALQACAFAEADQAPAKAbgNQARgHAkgZQAigXAKgDQgOAIgFAFQgMAJASAFQglAJgfASQAWAAgFADIgiANQACAHATgBIAagCQgGAGgQACIggABQggACgIALIgBACQgDAEgBAFIAMgBIAHgCIACAAIAdgFIABAAIARgCIABAAQAzgHAXALQgbgJgwAgIgIAFIgBAAIgSAOIgPALQgSARgLAPQgOAOgBAIQAPgGAVAKQAhAQADAAIAEABQAKABAJgGQAHgFAGgJIAEgDIACgDQANgRALgGQAKgGALACIAFAGIASATQAGAGADAOIgHADQgQgQgJgHQgPgLgNgCQAOADAZAoIgLAFIgmAUIgIAEIgCAAIgNAFIgHACQgbAIgZgDQgBAEBDAcIA/AZIASAHIgVACQgNgNAHAOIgMABQgJgDgHABQgKAHAaAPIgEAAQgvgXgUgIQgngQgEAKQgFAOA6AdQhFAJgCAMIA3AMQACAGAGAHQgNgDgOAFQArAYAwAOIhcgFQhFgGgEgOQgIAKAZALQgZAIgVAPIAOgQQAJgMgIgFQAIAFiDA5QABgKAaghg");
	this.shape_338.setTransform(570.8,161.6,1.179,1.692);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#47715C").s().p("AirGlQAEAGhUAOQhPANgTAAQACgYgBgeIAwAIQApAGACgHQgHgSgXAGQB9gmgMgWIAAAAIAAAAQACAFhDAYIgrAOIAngPQBAgagJgPQgWAEgTAMIgIgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBADQgRgJgXgTIA+gVQAZgIgXAEQAcgGAMgcQgkAFggAWQALgKADgFQAIgMgGgFIgBAAIABAAQAFAEhTAlIgVgVQAXgcAkgoQBGgNgDgDQgYAEgigKQglgNgTgFQAmgbgOgKQgJgBgHAFQACgGgCgFQgHgIgRAVQgWAagDACIgBAAIADgGQAVgUgHgGIANgXIAjgEIAJgDIADgCIABgCQABgDgDgDIAPAHQAnAVATACIABAAQASADAIgLIhOgqQAOgDgKgMIBQAGIACAAIANABQgPgDgZgHIgogMIBvgiIiGAGIgrADIgKAAIAIgBQALgCAPgGIAagPIAJgDQAJgEAGAAIhGgPQAOgHARgEQATgFAcACQAkACAJAAQARAAARgGIgMgEIgqgNQgcgJgRgKIgCgBQglgVAKgeQgJAfBDgHIAPgDIAcgFQgCgUgcggQgdgfgCgUIB1AcQABgMgIgMQgPgUgtgVIg6gYQAzgSgEgCQgkgNgSgZIBnA2QAbgUgpgLQgtgGAGAAQAOgNAXgNQAOgMgMggQAWASAJAdQAFg0ARgvIAFA1QAGAgALASQAGgHANgLQANgMAGgHIAAAeIAggRQgZAWgRARQgeAiARALIADADIAEABQAOAEAYgMIAZgQIABAAIALgHQAsgfALgDIgUANQgLAKARAEQgWAGgWAKIgBABIgBAAIgPAJIgEABIAHAAQAPAAgJAEIgeAMQACAIAbgCIABAAIAQgBQgJAGgTABIgkACQgfADgCAUIAvgHQBBgLAdAMQgYgHgqAZQgQAJgRANIgTAQIgXAWQgUAWgBAKQAJgEAMACIACAAQAFABAfAPQAWAKANgHIACgBIADgDIAKgLIAFgIIAPgRQALgKAKgBQAIgBAOAHIAXANQASAKAQAGQgPACgPAHIgIADIgpAUQgWAMgQAHQgOAHgRAEIgMABQgPACgNgCQgBAFBRAiIAVAIIAsASIgFAAIghADQgOACAFAGQiVAMAwAFQgVABABAQIgCAEIAEAAIAAABIAAgBQA6AMAdAJQAfAJALAGIABABIAGADQg2AQguAKQgyAKgLgCQAfAbAnAAQgZADgHAYQAGgHA6gGQhMARALAkIA5geQAbgMAFAUQABAIgDAHQgDAHgGgBQAFAGA5gIQA+gJAKACIgBAEQBFgNgDgDQgcAFgqgPIBEgZQgOAKgDASQAKgFAwAUQA2AWgXgGIjWANQi2ALAAAMQA6AUA5gOIg/AWQgzAUABAMQgBgPBkgLQBPgKAyAAQgMACgIAIIgDgDIgFgCQAFAGAAAEIgCAHQgLAMg+gBIhVgDQAPAIBDADQA8ADA4gCQgNgKgMgMQAZgIAzgJQAwgJAHABQgiAIgBAdQAEgHBJgIQBKgIAEgDQgCAOgFAKIgGAAIAFACQgUAnhHANQgwAIhegBQhtgCgUACQg7AEAAAaQAMAPARACQhRAagaAMQgOAAgqALIgvANQBagbgHgNgACKFYQAagCAaABQgTgIgVgQIgZAHQASAOgLgDIgCgBQgDAAALAIg");
	this.shape_339.setTransform(637,140.8,1.179,1.692);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#47715C").s().p("AgHAAIAVAAIgaABg");
	this.shape_340.setTransform(611.5,223.6,1.179,1.692);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#47715C").s().p("AiLAyIhXgEQgYgUgfAEQAXgEAdgHQAqgKANgHIAPgCQgeAIgQAYQAAAKA6gbIA6gZQgXAKAEAZQAFAGAUgPIAkgeQAKAAAygNQggAMADAfQAKAKBKgjQBTgoAOABQguAfgfAtQAEAIA6gqQA/gvAMADQgoAYgaAmQAzgOBIgZQg3AzhLANQgRgGgsAMQgXAAg1gDQgMgJgmgIQgugJgEARQACAOAMABQgNAFgeAAIgZgBg");
	this.shape_341.setTransform(640.2,215.8,1.179,1.692);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#47715C").s().p("AgzAAQA5gJAugBQgZANgiAGQgLACgJAAQgVAAgDgLg");
	this.shape_342.setTransform(601.3,200.8,1.179,1.692);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#47715C").s().p("AglAFIAIgBQAOABAAgFQArgIAKACIgcAFQgSACgKAGg");
	this.shape_343.setTransform(619.6,258.8,1.179,1.692);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#47715C").s().p("AAWACQggACgLADQALgZAgAUg");
	this.shape_344.setTransform(598.8,250.7,1.179,1.692);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#47715C").s().p("AgTgDIAnADIgUAEQgHgEgMgDg");
	this.shape_345.setTransform(601.3,222.9,1.179,1.692);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#47715C").s().p("AgCgCIAOABIgXAEQAFgCAEgDg");
	this.shape_346.setTransform(612.3,232,1.179,1.692);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#47715C").s().p("Ag+gHIAKACIAagGQAOAGAJgLIAZgGQgEAEgCAFQANAaAjgKIgFACIgDACIgcAFQgRAEgFgBQATgGhWAOg");
	this.shape_347.setTransform(603.3,229.2,1.179,1.692);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#47715C").s().p("AgOAqQh5gagBACQABALAEAFQhVABgNgDIAzgFQAvgIgHgNQAAABhrANQADgUgCgZQAZAaAjAJQgQgYgagOQAIAABMADIBKADQgJgMgNgBQAkgEARgHQgUAKgCAXQABACApgQQAsgQAMACQgnAOAGAgQAAgDAvgWQA0gaANADQgzAcgpAaQALAVBZgqQBfgvAZAQQgoAJgdAKQg4ATAEAOQgjABgLACQgVACgBAGQAkAcArgGQgOAMgjAAQgnAAg+gOgAgZg3IANACQgNACgJADQAHgDACgEg");
	this.shape_348.setTransform(625.2,242.2,1.179,1.692);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#47715C").s().p("AgBgDIAGAAIgJAHQgCgEAFgDg");
	this.shape_349.setTransform(608.4,199.6,1.179,1.692);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#47715C").s().p("AgNAAIAbgBIgMACg");
	this.shape_350.setTransform(629,261.5,1.179,1.692);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#47715C").s().p("AgRAQQANgUAWgLQgCAfgaAAIgHAAg");
	this.shape_351.setTransform(590.5,215.5,1.179,1.692);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#47715C").s().p("AgRgFIAlgHQgVAJgSAQQAHgSgFAAg");
	this.shape_352.setTransform(600.8,176.5,1.179,1.692);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#47715C").s().p("AgLgDIAXABIgGAGQgGgEgLgDg");
	this.shape_353.setTransform(624.5,265.4,1.179,1.692);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#47715C").s().p("AgOgEIAdgGQgEABgRASIgHACg");
	this.shape_354.setTransform(596.7,177.3,1.179,1.692);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#47715C").s().p("AgUgFIApgHIgCAaQgNgDgagQg");
	this.shape_355.setTransform(590.2,203.8,1.179,1.692);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#47715C").s().p("AhmgLIA5ABQAuAAAJADQgKgHgJgDIAtACQAuADABAEIAAgCIAVABQgQAYhrADQhHgSgMgLg");
	this.shape_356.setTransform(578.8,288.6,1.179,1.692);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#47715C").s().p("AgZgGIAyADIgPAKQgNgJgWgEg");
	this.shape_357.setTransform(619.1,281,1.179,1.692);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#47715C").s().p("AgkAGIgEgTQAoALApABIgDABIgUAOQgggFgWgDg");
	this.shape_358.setTransform(622.3,304.4,1.179,1.692);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#47715C").s().p("AAAACIAAgDIACADg");
	this.shape_359.setTransform(615.6,304.8,1.179,1.692);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#47715C").s().p("AgSgBIAGgEQAOAGARADIAAACQgYgDgNgEg");
	this.shape_360.setTransform(619.2,338,1.179,1.692);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#47715C").s().p("AgNgDIAeACIgiAFQABgEADgDg");
	this.shape_361.setTransform(638.5,342.8,1.179,1.692);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#47715C").s().p("AgPgCQAPACAQgEIgEAJQgSgCgJgFg");
	this.shape_362.setTransform(625.9,344.1,1.179,1.692);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#47715C").s().p("AhUAcQADgEARgdQAOgZALgEQgLAbAYAQQAMAFAEgQQADgKABgaIARACIASASQAEACgHgSIAaADIAMAZQAIALANAEQg+AShLANg");
	this.shape_363.setTransform(645.2,309.6,1.179,1.692);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#47715C").s().p("AgBAAIgCgCIAGAAIACAFg");
	this.shape_364.setTransform(591.6,157.6,1.179,1.692);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#47715C").s().p("AgcgHIAxAFIgKACQAVACgEACIgPAEg");
	this.shape_365.setTransform(766.1,167.9,1.179,1.692);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#47715C").s().p("AACgDQAdAIgrAAg");
	this.shape_366.setTransform(775,205.3,1.179,1.692);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#47715C").s().p("AgvAEQAtgNAugOIAEAIIgDAEQACgEgDACIgGAEIAAABIADADQgRARAAAMQgogJgfgLg");
	this.shape_367.setTransform(767.6,234.6,1.179,1.692);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#47715C").s().p("AAAAnIgdgDIgCgDQgFABgEgBIgCABIgCAAIALgLIAHABQADgEgBgEQAYgSAIgMQARgTgFgJQAXgCACAkQABAfgOAQQAAgDgKACQgIACAMADQgLgDgPgBgAADAYIgLACIgIAKQAAABAAAAQAAAAAAAAQABAAAAgBQABAAABgBQACADAMgFIASgGQgCgDgJAAIgFAAg");
	this.shape_368.setTransform(740.1,195.1,1.179,1.692);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#47715C").s().p("AABgDQABAAAAAAQABAAAAABQAAAAAAABQgBABAAAAIgEAEQgBgCAEgFg");
	this.shape_369.setTransform(738.8,200.3,1.179,1.692);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#47715C").s().p("AgRAAIAUgCIASACIgqAEg");
	this.shape_370.setTransform(731.1,204.6,1.179,1.692);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#47715C").s().p("AgXgOQAAABAGAAQAJACAMAJIAWAOIgsADQgKgOAFgPg");
	this.shape_371.setTransform(754.3,170.4,1.179,1.692);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#47715C").s().p("AgbAAQAngIAQAEIgDAEQgHAAgKAGQgVgDgOgDg");
	this.shape_372.setTransform(759.6,156.4,1.179,1.692);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#47715C").s().p("AgygbQAGAAAlALQgPAVAJAFQAQALAogVIAEAAIgSAGQAQAAgEACIgZAIQABAEAPAAIATgBQgGAEgaABQgYgBgIAFQgjgTgCgkg");
	this.shape_373.setTransform(756.1,150.2,1.179,1.692);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#47715C").s().p("AgDABIAGgEIADAGQgPgBAGgBg");
	this.shape_374.setTransform(743.7,147.4,1.179,1.692);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#47715C").s().p("AAAAIQAAgJgJgGQAMAHAHAEIgIAEg");
	this.shape_375.setTransform(761.5,170.5,1.179,1.692);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#47715C").s().p("AARgCIAEAEQgXgBgSACQARgDAUgCg");
	this.shape_376.setTransform(760.3,191.7,1.179,1.692);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#47715C").s().p("AgWgBIACgKQAWACAVgDQgVAJgUAQQgEgHAAgHg");
	this.shape_377.setTransform(754.5,200.9,1.179,1.692);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#47715C").s().p("AAGADIgBgBIgSgLIAZAJIACAKg");
	this.shape_378.setTransform(743.2,149.5,1.179,1.692);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#47715C").s().p("AgHAIQAHgHAHgIQgCAEgEALg");
	this.shape_379.setTransform(224.1,323.9,1.179,1.692);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#47715C").s().p("AgMAMQgGgCgBACQgFgGgCgOIAagGIABACQgaAHAEAMQgBgCAogEIAJAIQgJACgOABQgLABgIACQAHgCgEgBg");
	this.shape_380.setTransform(215.7,321.1,1.179,1.692);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#47715C").s().p("Ag3AYQAQgEArgYQApgXAMABQgeAUgXAdIghAFg");
	this.shape_381.setTransform(238.9,285.2,1.179,1.692);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#47715C").s().p("Ah3AbQBLgJgIgTQgEgIgWABQADgFAwgLQAugKALABQgYAGgCAVQAEgGA3gGIA5gHQgEArgUAGQghABgeADQgJgHhJAHIAQgDQgJgIgGgDIgWAFQAEAEADAHIgnAFQgGgHgLgBgAgiAKIAFAOIAOgDIgPgMgAgLAUIALgCQgQgMgEAAQgCABALANgAAPAOQATgFAFgCQgIgCgFAAQgLAAAAAJg");
	this.shape_382.setTransform(245.9,268.9,1.179,1.692);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#47715C").s().p("AgDAAIAHAAIgCABg");
	this.shape_383.setTransform(220.1,324.8,1.179,1.692);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#47715C").s().p("AgCAEIgHgFIATgCQgJAHgCAAIgBAAgAgGAAIAAAAIgDgBIAAAAIACABIABAAIAAABIAAgBg");
	this.shape_384.setTransform(221.4,321.5,1.179,1.692);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#47715C").s().p("AgGAAIADgBIAKADg");
	this.shape_385.setTransform(224.3,355.6,1.179,1.692);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#47715C").s().p("AgMgEIAIAAIASAFIgGAEQgOgFgGgEg");
	this.shape_386.setTransform(218.9,353.1,1.179,1.692);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#47715C").s().p("AAEgGQAdgUAIACQgdASgQAaIgkAFIAsgfg");
	this.shape_387.setTransform(246,284.5,1.179,1.692);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#47715C").s().p("AAAAAIABAAIgBABg");
	this.shape_388.setTransform(227,355.2,1.179,1.692);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#47715C").s().p("AgIACIAMgEIAFACIgRACg");
	this.shape_389.setTransform(226.9,308,1.179,1.692);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#47715C").s().p("AgTAHQAUgGATgJQgHAMgaAFg");
	this.shape_390.setTransform(238.1,305.6,1.179,1.692);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#47715C").s().p("AgQgEQAQAEARgBQgIAFgQABg");
	this.shape_391.setTransform(229.8,312.5,1.179,1.692);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#47715C").s().p("AAAABIgEgEQgDgCACADQgGgHASAPQgFgCgCgDg");
	this.shape_392.setTransform(226,312.1,1.179,1.692);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#47715C").s().p("AgoAAIAMgKQAqADABADQADgQgRAAIAIgCQALAGAVAUQgegGgLAZQgCgFgmgSg");
	this.shape_393.setTransform(249.7,304.5,1.179,1.692);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#47715C").s().p("AgKAJQAZgYgGAHQgNAQAAACg");
	this.shape_394.setTransform(249.7,297.9,1.179,1.692);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#47715C").s().p("AgQgJQANAIAUAHIgGAEQgUgIgHgLg");
	this.shape_395.setTransform(167.9,319.6,1.179,1.692);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#47715C").s().p("AglgHQAVgNAyAUQgHABAAADQAEAIAHgCIgEADQgYgJgvgLg");
	this.shape_396.setTransform(168.8,315.3,1.179,1.692);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#47715C").s().p("AgEAIQgRgCgGADIgEgGQAHADAHgBIAFgCQACAAADgDQgLgFgEgGQAaAFADgCIADACIABAFIADgBIASAOIgkgEg");
	this.shape_397.setTransform(183.4,292.4,1.179,1.692);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#47715C").s().p("AgGAIQgFgLgOgIIAzAXg");
	this.shape_398.setTransform(192.9,294,1.179,1.692);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#47715C").s().p("AglgJIAeAEQAbADASAAQgKAEgIAHIABABIg6gTg");
	this.shape_399.setTransform(186.7,260.9,1.179,1.692);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#47715C").s().p("Ag3BsIApgwQgjAGgaAbQAKgegQAPIgWAXIgCghQgBgTALgHQBLgqgSgNQgIgBgIAFQACgGgCgFQgHgIgSAWQgVAYgEABQAXgqAdgvQgNADgLAJQAGgOgBgQQgVAMgKAZQAYhAgVg3QALgBACAJQACAHgDAGQALgDArAAQAqgBgOADQAjgFgBAYQgYAGgYgBQgBAFAfAPQAlARAFAHQgmgJAVAXIgTgOQAGAHAFATQgTAHAAACQAAACAUAFQgjAMAFACQANAIgCAKQgOgCgDACQgEADgEAOQB9gJhBAFQALALATAAQAXgBAIAEQgFAMgKgFQgHgEgCASQAGgFAHADQAGADABAJQgagCgMABQgWADAKAWQgYgOAAACQACAJgWAAQgCAMAJAHIAGAEQAMAGAZgDQgCAAgMANQgNAOgFAHIgTALIAJgJQAHgHACgGIABACQAKgogWAWIgBABIAHAJQgMAIgzAZIg4AZQABgOArgygAgOgtIADgLQAEgLAFgIQgzgcAkAoQgTgQgZgJQAaAVAVAWgAADhUQAEgEAEABIgJgHIABAKgAA6BhIAAAAIAAAAg");
	this.shape_400.setTransform(224.6,200.4,1.179,1.692);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#47715C").s().p("AAAgFQAEAAgCAFIgDAGQgBgDACgIg");
	this.shape_401.setTransform(192.5,170.8,1.179,1.692);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#47715C").s().p("AgEgEQAPAFgJADIgCABQgEAAAAgJg");
	this.shape_402.setTransform(209.4,133.3,1.179,1.692);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#47715C").s().p("AhREIQgHAHAKgUQAagDACAFQgEAFgMAGQgHADgEAAQgEAAAAgDgABVCeIAAACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgQABQANgOAEALgAA3kLIABACIAAABIgBgDg");
	this.shape_403.setTransform(201.9,127.1,1.179,1.692);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#47715C").s().p("AAAACQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAABAAAAQAAAAAAAAIABACg");
	this.shape_404.setTransform(211.8,154,1.179,1.692);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#47715C").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_405.setTransform(226.3,218.3,1.179,1.692);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#47715C").s().p("AAIgFIAAAGIgPAFg");
	this.shape_406.setTransform(231,220.1,1.179,1.692);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#47715C").s().p("AATgQIATAPQgnAKgkAIQAygSAGgPg");
	this.shape_407.setTransform(231.2,239.1,1.179,1.692);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#47715C").s().p("AhXAXQAJgFBAgUQAqgPgYAFQAUgEALgQQAEADAIAEIAAAAQALAGAKABQAMAGAIAGIgBAAQgLgFgLAEQgCAFAFAHQiTAOAkAEQgNABgBAJQgIgMgWACg");
	this.shape_408.setTransform(228.4,227.9,1.179,1.692);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#47715C").s().p("AgFABIABgIIAKACQgFAFAAAIQgBgDgFgEg");
	this.shape_409.setTransform(214.4,303.2,1.179,1.692);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#47715C").s().p("AhRAYIgGgNQAVADAGgLIgQgKQANABAEAEQgBgEgFgGIgIgKQAiASABADQAEgSgLgOIAggDIAbALQANAEABgBQgBgHgDgHQAiADAQAKQgHAGAAALIATgDQACAFAAAEQAAAGgGAGQhFAQgqAIIgwABIgEgNg");
	this.shape_410.setTransform(198.2,322.8,1.179,1.692);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#47715C").s().p("AAPAOQgsgDgbgEQgGgEgIAAQAjAAAbgSQAkASArANIg4gCg");
	this.shape_411.setTransform(194.7,239.4,1.179,1.692);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#47715C").s().p("AAAACQAAgBAAgCIABABIgBACIAAAAg");
	this.shape_412.setTransform(189.5,207.4,1.179,1.692);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#47715C").s().p("AgtgIQBKADAQgCQgYAIgPAIg");
	this.shape_413.setTransform(197.1,289.9,1.179,1.692);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#47715C").s().p("AAAAAIABAAIgBAAg");
	this.shape_414.setTransform(178,321,1.179,1.692);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#47715C").s().p("AgHAIQA0gSANgPIAFgBIAHAGQgOAKg5ARQg4ATgMABQAQgCAugRg");
	this.shape_415.setTransform(224.8,239.2,1.179,1.692);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#47715C").s().p("AhaAbQAMgCANgGQAAgCgFgCQAegJBHgfQA7gRABA4QgNgJgtgFQgpgCAmAWIg1gDQgngCAhAPg");
	this.shape_416.setTransform(198.9,280.1,1.179,1.692);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#47715C").s().p("AgUgKIAbABQADADAFgCIACAAIgCACIAEAHQADAGgBACQgMgEABAGQgLgNgTgIg");
	this.shape_417.setTransform(191.2,342.8,1.179,1.692);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#47715C").s().p("AgeAiIgkgCQAFgFAHgDIAjgBIAAACIACgCIAdgBIgMgMIAngaIAcgRIg7BBQgKACgQAAIgMAAg");
	this.shape_418.setTransform(242.9,239.9,1.179,1.692);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#47715C").s().p("AgKAAIAFAAIAQABg");
	this.shape_419.setTransform(174.8,322.8,1.179,1.692);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#47715C").s().p("AAAAJQAAgJgIgFIgFgCIAHgCIAUAJQgEAFADAEg");
	this.shape_420.setTransform(180.9,321.8,1.179,1.692);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#47715C").s().p("AgMgCIAZACQgIABAAACIABAAQgIgDgKgCg");
	this.shape_421.setTransform(217.7,260.1,1.179,1.692);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#47715C").s().p("AAfANIAAAAQAlgNgDgIIAAAAIAAAAQACAGhRAMQhQANgSAAQACgagBgaIAvAIQAqAGACgHIAAgBQAGACAKAAQgUADgFASQAFgFBBgGQA5gFAPAAQgcAGgXATQgPADggAJIghAJIAxgRg");
	this.shape_422.setTransform(226.3,251.1,1.179,1.692);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#47715C").s().p("AhLACQADgTAmAIQAmAIADgGIgCgGQAOgDA5gDQgYAIgUAQQgCgEAGgFIAEgFQgJAMgxAMQgUAFgOAAQgZAAACgSg");
	this.shape_423.setTransform(221.2,236.8,1.179,1.692);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#47715C").s().p("AgBgBIADADIgDAAg");
	this.shape_424.setTransform(189.4,346.9,1.179,1.692);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#47715C").s().p("AhIgUQAZAaAjAJQgQgYgagOQAGgBB6AGQhKANAAAFQAWAMAXgHIgXAIIg3AHIgoAFQACgWgBgXg");
	this.shape_425.setTransform(222.2,278.8,1.179,1.692);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#47715C").s().p("AgEACQgBgCAHgBIADABIgHACg");
	this.shape_426.setTransform(183.2,323,1.179,1.692);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#47715C").s().p("AgQACIAAgCQAQAAARgGQgJAGgGAHg");
	this.shape_427.setTransform(186.5,279.8,1.179,1.692);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#47715C").s().p("AgCABIAAgBIACgBQACgEABAFQAAABgBABQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgCgDg");
	this.shape_428.setTransform(184.8,231.6,1.179,1.692);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#47715C").s().p("AhtgWQADgFAZAPQAZANAKgQIgHgHQANADAfgDIAggEIguARQgnAOACAJIAAAAIAAAAQgBgGBLgJQBKgLAWAAQgTAEgBAQQgOABgZAGIghAIQAHgCAEgGQAAgIgdAGQgjAHgCgBQAMgEgiAEQgiAFgOADg");
	this.shape_429.setTransform(225.9,265.9,1.179,1.692);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#47715C").s().p("AgWABQAFADAwgLQgNAFgKAKIgmAAg");
	this.shape_430.setTransform(229.9,284,1.179,1.692);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#47715C").s().p("AgOAAIAdgCIgCAEIAAABIgbgDg");
	this.shape_431.setTransform(228,288.2,1.179,1.692);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#47715C").s().p("AAJAZIgKgCQgdgHgJgUIAGgJIgCgEQADAAAXgJQAKAGAKALIABAHIADgDIAUAaQgOgTACAKQABALAQAEIgGAAQgMAAgNgCg");
	this.shape_432.setTransform(218.9,307.9,1.179,1.692);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#47715C").s().p("AgBgCIADAEIgBABg");
	this.shape_433.setTransform(187.4,343.8,1.179,1.692);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#47715C").s().p("AgDgCQACABAGgCIgKAHg");
	this.shape_434.setTransform(213.5,291.6,1.179,1.692);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#47715C").s().p("AgBgHIANgCIACABQgQAGgLAMQAEgMAIgFg");
	this.shape_435.setTransform(214.8,288.6,1.179,1.692);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#47715C").s().p("ABEA6QhIgPhPgHQhYgJgMAKQg6gBgSgCQgcgEgJgdQAsAGARgBQAbgCAEgPQgFgJgEgGQBBAIAFAIQgCgegigIQAPgBBCAOQBCAPAEAHQgBgZgagEQAhAABgAOQBsAQgCAIQADgLgtgUQAVAABIgTQA+gLAEAiQgGAJAAALQABAHgMAEQgngZguAAQAaAXAeAMQgVADhCgPQg9gQgQAFQgLAMAOAMQgcgMgeABQgGAXAwAFQAXADAegBQgiACgXAZIgDAAIACABgAAOASIAFABQAAgBABAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_436.setTransform(174.7,269.8,1.179,1.692);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#47715C").s().p("AgYAMQAIgIgFgKIAPgHQAHAGAYAUIgKABIgngCg");
	this.shape_437.setTransform(219.3,290.7,1.179,1.692);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#47715C").s().p("AgvAJQAeAFADgDQACgDgTgIQBIgVAHAAQgBAOgIAHQgeACgCALIADAFQgKACgTACQgMgKgQgDg");
	this.shape_438.setTransform(204,292.6,1.179,1.692);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#47715C").s().p("AAAABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQADgBACAAIAAABQgBAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIAAgBg");
	this.shape_439.setTransform(188.2,208.7,1.179,1.692);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#47715C").s().p("AAggCIgMADIgzACg");
	this.shape_440.setTransform(198.1,302.3,1.179,1.692);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#47715C").s().p("AgFgBIAEgDIAHAEIgGAFg");
	this.shape_441.setTransform(224.2,305.2,1.179,1.692);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#47715C").s().p("AgBACIgCgEQADABAEAEg");
	this.shape_442.setTransform(363.5,328.9,1.179,1.692);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#47715C").s().p("AgLgDQAJADAIgBIAGAFg");
	this.shape_443.setTransform(368.4,256.4,1.179,1.692);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#47715C").s().p("AgFgDQATAFgMACIgCAAQgHAAACgHg");
	this.shape_444.setTransform(399.3,215.4,1.179,1.692);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#47715C").s().p("AAAACQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAIABACg");
	this.shape_445.setTransform(400.8,236.3,1.179,1.692);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#47715C").s().p("AgLAEIAIgJIAPgBQgMAGgJAHg");
	this.shape_446.setTransform(388.9,294,1.179,1.692);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#47715C").s().p("AgGABIAGgBIAHABg");
	this.shape_447.setTransform(430.4,365.1,1.179,1.692);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#47715C").s().p("AgxAAQAiAAACADQAEgNgSgBIAIgCQAFABAKgDIgFADQgCACABAFIAAAAIAAAAQgBgFA/AHQgQADgKAFQAAgGgiAEQgjAGgJAHQAAgHADgJg");
	this.shape_448.setTransform(415.6,360.7,1.179,1.692);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#47715C").s().p("AgRAEIANgHIAWACIgDADIgeACIgCAAg");
	this.shape_449.setTransform(418.7,363.6,1.179,1.692);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#47715C").s().p("AgMAAQAHgBASgBQgDACgIADQgEgDgKAAg");
	this.shape_450.setTransform(386.6,293.6,1.179,1.692);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#47715C").s().p("AgDgDQADACADADIAAAAIABACQgJgEACgDg");
	this.shape_451.setTransform(400.9,216.5,1.179,1.692);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#47715C").s().p("AgpADIAjgCQAegBASgCIgHADIhAACIgMAAg");
	this.shape_452.setTransform(285.6,228.7,1.179,1.692);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#47715C").s().p("AgjAAIAAAAQAHgHAfAEQAhADAAAGQgvgGgYAAg");
	this.shape_453.setTransform(286.3,253.5,1.179,1.692);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#47715C").s().p("AhYAVIAmgEQAegEgDgLIAAAAIAAAAQABAFhGgcIBKAJIBvALQgNACgCAIQAEAFAGADIgFAEQgogBhCABIg4ABIgJgBg");
	this.shape_454.setTransform(282.2,236.5,1.179,1.692);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#47715C").s().p("AgCABIAFgBIgDABg");
	this.shape_455.setTransform(287.4,299.3,1.179,1.692);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#47715C").s().p("AAAAOQgPgQgQgNIAOgEQAVgBALAIQAMAIAFATQgLAFgIAAQgJAAgEgGg");
	this.shape_456.setTransform(256.3,301.8,1.179,1.692);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#47715C").s().p("Ah/gjQAAgMAaADIAlAIQgZAPAOASQAIACAIgQQAIgPAMAIIANAYQAJATAIgFQAEgIgFgGQAKALAGgHQAFgLgLgJQACACAuAOIgDAAIAQADIBGAVQgjALgTALQjpgOAdhDg");
	this.shape_457.setTransform(280.3,271.3,1.179,1.692);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#47715C").s().p("AgoAiQhOgHAAgbQAAghBIgDQA4gCAjALQAAADgHAJQgIAJgBAEIgBACQgbAAACALQACAGAzACQA8ABADABQgWAAgNAQIgsAAQg0AAgcgDg");
	this.shape_458.setTransform(278.5,253.8,1.179,1.692);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#47715C").s().p("AgrAKQAPgFAigMQAfgLAHAGIgiAPQgOAIgNAEg");
	this.shape_459.setTransform(289.1,308.2,1.179,1.692);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#47715C").s().p("AgFAFQANgPASgOQADAYgPALQgMAIgcAGg");
	this.shape_460.setTransform(257,285.2,1.179,1.692);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#47715C").s().p("AgfgGQAJgEA2AOQgSgCgQAGg");
	this.shape_461.setTransform(283.9,301.7,1.179,1.692);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#47715C").s().p("AhAgJQAOgFAuAHIBFAIIg5ALQgxgQgXgFg");
	this.shape_462.setTransform(296,287.5,1.179,1.692);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#47715C").s().p("AgDAXQgPgBgIgCIAYgUQASgSgEgHQAOgBABAWQAAASgIAKQAAgDgGACQgFABAJACQgIgCgMgBg");
	this.shape_463.setTransform(257.4,250.3,1.179,1.692);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#47715C").s().p("AgtgBIAOgKIAjAMQARAFABgGIgMgKIAkACQgUAIgZAMQgWgEgYgJg");
	this.shape_464.setTransform(310.1,334,1.179,1.692);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#47715C").s().p("AgMAXQgOgBgTgiIgBgBQA9AWgBABQAIgJgcgRIAngHIAOAGQgpApgRAAIgBgBg");
	this.shape_465.setTransform(311.5,352.6,1.179,1.692);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#47715C").s().p("AAAATQgqgIgcgQQADAAALgHQAMgIAHgBQANABAcAHQAeAGACACIABAAIABAAQAWAKALAHQgNAKgaAAQgOAAgSgDg");
	this.shape_466.setTransform(292.9,332.4,1.179,1.692);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#47715C").s().p("AAAACIgBgGIABADIACAFg");
	this.shape_467.setTransform(257.2,146.4,1.179,1.692);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#47715C").s().p("AgYgDIALgEQAdAIAJAGQgKgCgIADIgfgLg");
	this.shape_468.setTransform(252.1,161.8,1.179,1.692);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#47715C").s().p("AASAUQAOgPgggFQghgFAFAAQAKgJARgKQAeAmABALg");
	this.shape_469.setTransform(256.7,156.4,1.179,1.692);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#47715C").s().p("AgiASQARgDAQgEQgCgMgNgQIAxgIQgBAZACAaQgNAAg3gIg");
	this.shape_470.setTransform(256,181.7,1.179,1.692);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#47715C").s().p("AAFgGIgJANQABgIAIgFg");
	this.shape_471.setTransform(263.8,179,1.179,1.692);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#47715C").s().p("AgRAAIAjgDQgLACgIAEg");
	this.shape_472.setTransform(254.8,191.4,1.179,1.692);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#47715C").s().p("AAAAEQAAgEABgDQgBAEAAAEg");
	this.shape_473.setTransform(245.9,182.5,1.179,1.692);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#47715C").s().p("ABCAZIADgBIgHABQgXgEgXgDQgZgDAJAEQgDAAgfgGQANgHAHAAQgZgEgggGQAVgKAXgCQAHAAAeACQAIALAMgDQAHgCAOgJIAFgBIgCgBQAOgKAEAHIgCAwg");
	this.shape_474.setTransform(251.7,197.2,1.179,1.692);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#47715C").s().p("AgfgRQAJAAA2ARQgbAGgKAMQgZgMgBgXg");
	this.shape_475.setTransform(267.3,223,1.179,1.692);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#47715C").s().p("AgVAJQgRgJAFgQIADAAQAGACAUAOQAOAHAFgFQAEgJgJgFQAbAMgCAJQgDAIgUAAQgSAAgPgIg");
	this.shape_476.setTransform(268.3,236.6,1.179,1.692);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#47715C").s().p("AgJAAIgEAAIAbAAIgZABg");
	this.shape_477.setTransform(256.1,216.2,1.179,1.692);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#47715C").s().p("AgigDIAFgCIBAgCQgOAHgKAIQgdgIgQgDg");
	this.shape_478.setTransform(253.3,207.2,1.179,1.692);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#47715C").s().p("AgdANIgWgMQAMgBgIgKIA3AFQgIAHgGALQAggJAagaQgCAWACAXg");
	this.shape_479.setTransform(253.5,210.2,1.179,1.692);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#47715C").s().p("AhCASIAWgOIgUgLQBpAFgPgSIASAJIAYALQhXgBAAgCQgBAIAaAFQAPADAUAAIgaAEIgmAEQARgVg8ASg");
	this.shape_480.setTransform(242.1,217,1.179,1.692);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#47715C").s().p("AgHACQALgDAEgDQgGAEAAAGg");
	this.shape_481.setTransform(246.6,224.9,1.179,1.692);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#47715C").s().p("AgSgCIgBgDIAngBQgHAGgYAHQgGgHgBgCg");
	this.shape_482.setTransform(241.3,235.5,1.179,1.692);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#47715C").s().p("AgvAZQAvgoAGgFQAjgUAHAuQgIgGgKgGQgLgGgDABQgJAUAeAKIhIAIg");
	this.shape_483.setTransform(254.6,222.5,1.179,1.692);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#47715C").s().p("AgQgLQAegFADASQABAHgFAEQgIgMgVgMg");
	this.shape_484.setTransform(258.8,168,1.179,1.692);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#47715C").s().p("AgBAMIAEgaIgDAdIgBgDg");
	this.shape_485.setTransform(260.7,145.9,1.179,1.692);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#47715C").s().p("AgOgOQAEgDATgCIAAACIAHgEIAKgDIgNANIgQAPQgQASgGACQACgeAJgIg");
	this.shape_486.setTransform(266.8,154.9,1.179,1.692);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#47715C").s().p("AgGgBQAGABAXgCQgGADgPABIgZABIARgEg");
	this.shape_487.setTransform(271.4,163.5,1.179,1.692);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#47715C").s().p("AgZgZQAHAAANgCQgHAGgBAIIAogHQgLAKAJAMIgZAOQgNAKgLACQgCgiABgTg");
	this.shape_488.setTransform(266.3,169.9,1.179,1.692);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#47715C").s().p("AgCAWQAmgWgpADQgsAEgOAJQAAgbAPgKQA3ALAaAJIAHgEIAYAJIgGAEQAGAGgOAEIACABQgoADgLAAIgDAAg");
	this.shape_489.setTransform(271,210.9,1.179,1.692);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#47715C").s().p("AiPAYQAPgGAUgEIABgCQgbAAgMADQARgFAXgEIAdALIAAAAIAAAAQADgFgJgIIAdgEQAAgDgDgFQgSABgYADIghgPQAPABA0gBQBDgBAqgFQAEAMAtgEIA3gFQgKAFgqAHQglAHAAADQAEAIAGgCIgKAGQgJgFhJALQg4AIgjAAQgRAAgMgCg");
	this.shape_490.setTransform(286.3,223,1.179,1.692);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#47715C").s().p("AgXAQQABgKgPATQAXgeAIgGQASgSAegBQAFAqgqAOIguAFQAQgDACgMg");
	this.shape_491.setTransform(254.4,238.3,1.179,1.692);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#47715C").s().p("AgzAIIAigRIAegIQAWALALABQgCADgBAEIAAACQADACAEAAIACAAQgfAKgZACIgJAAQgaAAgMgKg");
	this.shape_492.setTransform(299.2,308.8,1.179,1.692);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#47715C").s().p("AgFgCQALACAHABIgZACg");
	this.shape_493.setTransform(251.9,255.8,1.179,1.692);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#47715C").s().p("AgEAFIAHgJIACAAIgIAJg");
	this.shape_494.setTransform(251.7,254.2,1.179,1.692);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#47715C").s().p("AgHACIAPgEIgMAFg");
	this.shape_495.setTransform(249.3,247.7,1.179,1.692);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#47715C").s().p("AgLAOQgJgJgEgBIAFgDIAKAAIgGgBQAfgWgCADQgKAPAVgBIgVAWQACgEgGAHIAAAAQgDAAgIgGg");
	this.shape_496.setTransform(252.1,249.7,1.179,1.692);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#47715C").s().p("AgjABQgmgRABgRQAPAHAZASQAOAJAXAAIAbAKQAXAHASAEIgNAMQg8gQgjgRg");
	this.shape_497.setTransform(274.8,303.4,1.179,1.692);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#47715C").s().p("AguAGQBcAGgDgjQAQAXg1AYg");
	this.shape_498.setTransform(253.6,348.7,1.179,1.692);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#47715C").s().p("AAHgFIgHAGIgGAFQALgKACgBg");
	this.shape_499.setTransform(247,243.2,1.179,1.692);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#47715C").s().p("AgiAKIgBgCQAFgGABgRQAwAaARABIgRAEg");
	this.shape_500.setTransform(237.7,356.3,1.179,1.692);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#47715C").s().p("AgBAAIADgCIgBAFg");
	this.shape_501.setTransform(230.9,353,1.179,1.692);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#47715C").s().p("AgDAJQgGgCgDgKIALgBIgBgFIAJAJIAGAGIgCABQgGADgFAAIgDgBg");
	this.shape_502.setTransform(216,355,1.179,1.692);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#47715C").s().p("AhxAYQAQgCAbgGQAJALAjgPIgCgHIARgFQAQgEAxgRIAZgCQgPALAEAHQANAFALgPQgFAMAbAIIgHAIIhdAEQhAAEgoADQgNgBgKABg");
	this.shape_503.setTransform(237.5,254.2,1.179,1.692);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#47715C").s().p("AgFAAIAEAAIAHAAIgLAAg");
	this.shape_504.setTransform(264.5,327.1,1.179,1.692);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#47715C").s().p("AAigLQgMALg3AMQA+gXAFAAg");
	this.shape_505.setTransform(251.9,285.1,1.179,1.692);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#47715C").s().p("AgWgPIAWAAIAGAJQAEAFAEgBIAJAFIgVAOQgcgUAEgMg");
	this.shape_506.setTransform(273.9,349.9,1.179,1.692);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#47715C").s().p("AAHAQQgLgRgGgGIgDgEQgGgHACABIAkAKQgBAZgHAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_507.setTransform(257.6,324.8,1.179,1.692);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#47715C").s().p("AgDgBQADAAAEABIgDACg");
	this.shape_508.setTransform(278.7,347.8,1.179,1.692);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#47715C").s().p("AgpAUQgIgEAlgQQAQgJATgIQAGgDAOgBQgjAWgIAMIghAIg");
	this.shape_509.setTransform(268.2,323.2,1.179,1.692);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#47715C").s().p("AgMADIAGgJIATANg");
	this.shape_510.setTransform(230.3,356.4,1.179,1.692);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#47715C").s().p("AgQAOIgCgEQACgMgEgMQAVAFACgCIASAPIgnALg");
	this.shape_511.setTransform(245.6,355.2,1.179,1.692);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#47715C").s().p("AgEABIAJgBIAAABg");
	this.shape_512.setTransform(233.2,255.4,1.179,1.692);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#47715C").s().p("AgUACIASgHIAXAAQgVAGgJAFg");
	this.shape_513.setTransform(234,304.3,1.179,1.692);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#47715C").s().p("AghgLQAEAAAYAJIAnAOQg2gLgNgMg");
	this.shape_514.setTransform(342.3,260.9,1.179,1.692);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#47715C").s().p("AgfAQQAFgUAMgIQALgIAVABIAOAEIgeAdQgFAGgKAAQgIAAgKgEg");
	this.shape_515.setTransform(338,277.7,1.179,1.692);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#47715C").s().p("AgNALQgPgLADgXQARANAOAPIAVATQgdgFgLgIg");
	this.shape_516.setTransform(337.3,261.1,1.179,1.692);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#47715C").s().p("AgRgHQAUgFAPgFQACgBgHAJIgCACQgLASgGAFQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgHAAAAgZg");
	this.shape_517.setTransform(336.6,300.6,1.179,1.692);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#47715C").s().p("Ah1AQQBggaALgGQgNAJAEALQAEAEAHgDQAFgCADgDQgGAGAFAIQAGAFAJgTIANgYQANgIAHAPQAIAQAHgCQAOgRgYgQIAlgIQAagDAAAMQAcBBjgAQQgNgNgXgRg");
	this.shape_518.setTransform(315.5,247.1,1.179,1.692);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#47715C").s().p("AgEgBIAGAAIADACIgCABg");
	this.shape_519.setTransform(322,195.8,1.179,1.692);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#47715C").s().p("AgfAMQgLgJAggPQgIAFAEAJQAFAGAOgJQAUgNAFgCIAEAAQAGASgcALIgOgGQgEABgBADIAKAEQgJACgHAAQgMAAgGgFg");
	this.shape_520.setTransform(326,212.5,1.179,1.692);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#47715C").s().p("AgVAAIAqgLQAHARgVAGQgLgHgRgFg");
	this.shape_521.setTransform(326.3,173,1.179,1.692);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#47715C").s().p("AgdgEIAZACIAjACIgUAFQgggFgIgEg");
	this.shape_522.setTransform(294.2,244.1,1.179,1.692);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#47715C").s().p("AgjANQAEgIgMgIIgUgOIAyAMQAuALAfAKIhDACg");
	this.shape_523.setTransform(294.9,252.3,1.179,1.692);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#47715C").s().p("AgKAAQgBgCgDgCQAVgCAJAEIgfAHg");
	this.shape_524.setTransform(304.1,262.2,1.179,1.692);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#47715C").s().p("AhnAjQAPAAABgDQgEgOgNgCQAQgCAFgPQgCgIgcAJIgiAJQAWgKgTgFQBQgWAUgDIgVAOQgNAMAGAFQgFgGAjgEQAjgFAHAIQgBgEgIgJQgGgJgBgDQAhgMA6ADQBIADAAAhQABAhh2ADQhzgCAAAEQAEAEAMAFg");
	this.shape_525.setTransform(312.4,230.5,1.179,1.692);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#47715C").s().p("AgHADQADgDAMgCQgIADACABIgJABg");
	this.shape_526.setTransform(294.2,267,1.179,1.692);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#47715C").s().p("AiiE+QAZgLgOgCIAHgKIAIADIgBAFQAFAAAGgBQAQAFAJgBQALAAAFgJQgIgLgLgHQAaAHAYABQgbgegoABIA7gCQAxgGgHgWQgdgEgcAOQAOgOgMgLQgJgDgXADIgCgBQgNgCgmAAIAYAJIgdADQgPABAHAGQgvALgRgCQAegOAZgYQgtAAgoAaQgNgFABgGQACgMgHgJQACgXAcgCQAJAGA3AXQAAgLAEgIIAzALQAXADADgJQgXgTgdgHIADgCQAtAAAugOQgOgLgRgCQAAgFgPgGIgIACQgGgOgbAGQgGACgvASQhKAcgEgwQAKgCAiAPQAaAMAPgWQAOgSAJgHQAeAEAAgGQgBgGgFgBIgBAAQAQgCAdgIQAlgLALgKIACAAIgBgBQAFgFgEgGQgCAFgIADIgRgFIACgEQADgGAcABIgQgLQAGgCARgJQAPgIAKgBIgsgLQgkgLgBgIQAXgKAhACQAmABARgFQhkgmgYAnIAFgWQAEgVAEgFQgZALgagFQAogQAeACIBHAFQgBgPgZgVQgYgVgCgOIBKAXQACgKglgcQgkgbgKgBQAtgNgEgBQgegIgQgSIBVAlQAYgOgmgHQgogEALgBIAUgOQgJgBADgRQAaAOACgEQACgCgFgGIgFgKQgDgGABgCIAUAPQAJAGABgBQABAAABgIQABgXAJgXIABgCIAAADQADAWAAAVIAAARIAZgYIAAAFIAEAgIAPgNIgOAQQgPAXAfgEQAQgCAugOIAngLQgNAFgEAEQgKAHAOADIgYAHQgPAEgRAHIABAAIgCADQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgOAFQACAFATgBIADADIgGABQgbAAgMABQgVADgBANIAXgEIAjgFIATgBIAJAGIgCAAIgHAEQgIADgOAMQgWASgCALQAPgFAQAAQAQABARAEQACAGAFAFQgOgDgNAFQAbAPAjANQgGABgBACQgYgDgPAHQhXgGgGgQQgOASBcAWQgCAPAQANQARAOAcACIgFAEQgkgPgNgBQgWgBAAAXQgcgJgYASQAnAMApABQgDADABAEQgWAIgOANIAAACIgBABIgBABIAEAAQAHAGAhgHIALAHQACgEgCgEQAIAHABADQADAEgGACQAKAGAOABQAVASAYALIgGAAIABAAIgfgDIhIgRQgpgKgOAFQgMALAOAOQgbgOgeAEQgFATAjAHQAUAEAoAAIABAAQghADgXAaQAYgBAZgHQgKAHgJALQAHAOAagHQAOgDAngSIAugFQAagEAIABIAUgLQAHAHAEANIgVABQATAGADADIAAACQgBACgKAAQgggKgXAAQgcAAAiAUIg2gDQgogCAhAPQgQABhLgFQhNgFABgCQgMASBPAHQA0AFBPAAIAPAGQguAUAGAMQgBgCBEgUIAQAEIAWAGIgTACIAMAGQghAWhsgPIhFgJQgdgDAAAJQAAALAyAEIArAEIhJgBQg+AAAgATIgggMQgdgIgBAHQAEARARADQgNACgEAOQACAHB1gMICMgPIgkAOQghAOAAgDQgCAKAdAFQAQACAXACIhXgBQhWgBgpADQAFgFgDgFQABAChNAFQhEAFgUAAIgEgBgADtDjIAHAFQALgDgBgGgAhmC9QgOADgJAEIATACQAJAVAPggIgEAAQgFAAgLACgAgvDJQgCgMgGgEQgGgEgOADQAEAOAYADIAAAAgAg7BvIgPACIgKAMQAAABABAAQAAAAAAAAQABAAABgBQAAgBABgBQADAEAQgFIAUgHQgDgEgNAAIgCAAgABlg1QACAYAZgEQgBgVgQAAIgKABg");
	this.shape_527.setTransform(297,162.4,1.179,1.692);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#47715C").s().p("AAAAEQgFgBgBgGIAMADQABAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQAFAEgFAAIgDAAg");
	this.shape_528.setTransform(309.8,154.1,1.179,1.692);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#47715C").s().p("AgKACQgBgCAWgDQACAHgMAAIgLgCg");
	this.shape_529.setTransform(328.4,198.3,1.179,1.692);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#47715C").s().p("AABgEQAEAAgDAEQgCACgCADQgBgDAEgGg");
	this.shape_530.setTransform(287.9,182.5,1.179,1.692);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#47715C").s().p("AgcgBIAHgCIAEgBQARgBAdAKIgJAAQgXAAgZgGg");
	this.shape_531.setTransform(269.1,207,1.179,1.692);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#47715C").s().p("AgTAKIAEgCQAFAAAIgKQAGgMAHAAQAQAIgKANIgRgDIABADQADAFAGACIAAAAg");
	this.shape_532.setTransform(320.7,323.8,1.179,1.692);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#47715C").s().p("AAGACQhVgMglAQQAHgOBEgJQBBgIAZAJIAlAQQAlARgIAFIgJAAQg2gNgugHg");
	this.shape_533.setTransform(317.5,298.9,1.179,1.692);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#47715C").s().p("AgQAGQAYgOAJgBQgNAHgEAFQgIADgEAEg");
	this.shape_534.setTransform(314.1,325.1,1.179,1.692);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#47715C").s().p("AgEAJIgBAAIgHgDIAEgDQAEgFgLgJQAIACAJAHQALAFADAAQgIAFgIAEg");
	this.shape_535.setTransform(307.8,306.4,1.179,1.692);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#47715C").s().p("AgtAOQAmgSAOgFQAcgKALALQgagDgIATIABACIgbAFg");
	this.shape_536.setTransform(301.7,277.1,1.179,1.692);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#47715C").s().p("AAEgCQAWgFAGADIgRAHQgTAAgbADIAjgIg");
	this.shape_537.setTransform(310.4,277.2,1.179,1.692);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#47715C").s().p("AgFABIAJgCIACABIgGACg");
	this.shape_538.setTransform(286.6,322.4,1.179,1.692);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#47715C").s().p("AgDAAQgBAAAAgBQABAAAAAAQAAAAABAAQABABABAAIAAAAIAFABIgCABIgBAAQgCAAgDgCg");
	this.shape_539.setTransform(307.3,308.1,1.179,1.692);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#47715C").s().p("AAAACIgEgDIAIAAIgEADg");
	this.shape_540.setTransform(285,322.1,1.179,1.692);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#47715C").s().p("AhvAIQAHgBAtgBIgOAIQADANAwgNQAhgJAWgIQAZAAAOgLQAZgSAPgGQACAUg2AUQgwAUhPARQgMgfggAAg");
	this.shape_541.setTransform(314.9,280.2,1.179,1.692);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#47715C").s().p("AgLgDQAMACALABIgWADQACgDgDgDg");
	this.shape_542.setTransform(83.5,331.8,1.179,1.692);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#47715C").s().p("AgTABQAHgCAHgFIAZACIgVALg");
	this.shape_543.setTransform(125.2,316,1.179,1.692);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#47715C").s().p("AgaAAIAagJIAbAKIgYAJg");
	this.shape_544.setTransform(116.4,320.1,1.179,1.692);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#47715C").s().p("Ah6ADQAQgDALgNQAHgJAIgSQASACAVAAQgCAHAJgHIAzACIAAAFQgZAJgLAfQAJAIAogFIBSgMIALASQgxAQgMAHQhlgRhTgVg");
	this.shape_545.setTransform(77,293.3,1.179,1.692);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#47715C").s().p("AgDgBIAHABIgGADg");
	this.shape_546.setTransform(111.1,323.9,1.179,1.692);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#47715C").s().p("AgLAIIAVgSIACAVg");
	this.shape_547.setTransform(77.4,281.2,1.179,1.692);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#47715C").s().p("AgVgFQAdgDAOAGIgnAJQgBgGgDgGg");
	this.shape_548.setTransform(97.5,293.4,1.179,1.692);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#47715C").s().p("AgCACIgCgDQAEABAFACg");
	this.shape_549.setTransform(85.3,283.9,1.179,1.692);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#47715C").s().p("AgGgBIANABIgKACg");
	this.shape_550.setTransform(100.7,327.6,1.179,1.692);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#47715C").s().p("AgVAIQAPgSAcABIgKAUg");
	this.shape_551.setTransform(71.8,280.3,1.179,1.692);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#47715C").s().p("AgUAOQgJgMgKgSQAfAOAwATg");
	this.shape_552.setTransform(55.3,327.2,1.179,1.692);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#47715C").s().p("AgcgBIAqgEQAIAKAHABQgegBgbgGg");
	this.shape_553.setTransform(67.1,341.6,1.179,1.692);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#47715C").s().p("AglgLIAlAAIAmAFIgSAGQgPAGgFAGQgTgJgSgOg");
	this.shape_554.setTransform(60.6,337.2,1.179,1.692);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#47715C").s().p("AgjAHQgJgHgIgMIA7gBQAcANASAMIgsACQgVgDgXgEg");
	this.shape_555.setTransform(59.4,332.7,1.179,1.692);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#47715C").s().p("AgJgFIAPABIAEAHIgKADQgEgFgFgGg");
	this.shape_556.setTransform(48,330.4,1.179,1.692);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#47715C").s().p("AhYAgQBehBAJgDQAjgMAgAuQgMgPACAQQACARAQAXIiygHg");
	this.shape_557.setTransform(36.1,322.6,1.179,1.692);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#47715C").s().p("AgHgEQAHAGAJADQgYgFAIgEg");
	this.shape_558.setTransform(48.9,332.4,1.179,1.692);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#47715C").s().p("AgLAWIATgHIgOgHQgYgJgRgWIBfAvQgoAAgTgCg");
	this.shape_559.setTransform(63.5,84.7,1.179,1.692);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#47715C").s().p("Ag/gTQA9AcBCALQhrgGgUghg");
	this.shape_560.setTransform(73.6,198.7,1.179,1.692);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#47715C").s().p("AgDAyQAqgJgCgDQgdAGgygTQg1gSgbAFIAOgMIghACQgfgQgdgaQBUAcBkAaQgXgggjgaIAPgEQAeASA+AqQAyAhAFgIQgcglgigdQAWAFAKgNIgigSIBbAnQA9AZAbAIQgkAOACAYIhCABQhAAAgpgGg");
	this.shape_561.setTransform(59,164.3,1.179,1.692);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#47715C").s().p("AgzAZQgRgSgGgHQgLgPgCgOIADABIAAAAIBwAbQABgEgBgDQApAKATACIgbAag");
	this.shape_562.setTransform(70,105.8,1.179,1.692);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#47715C").s().p("AhxgfQAVAABVAEQgOAEgEAKIgCAHIA0gJIAdgDQAogDAUAJQgSgGgfAOQgaAKgeAXIgDADQgwgxhHgOg");
	this.shape_563.setTransform(81.1,99.4,1.179,1.692);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#47715C").s().p("AgNAHQASgLAJgDQgRAIgEAHg");
	this.shape_564.setTransform(93.7,81.4,1.179,1.692);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#47715C").s().p("AgbAHQAUgPAFgHIABAcIAdgPIgWASg");
	this.shape_565.setTransform(82,76.7,1.179,1.692);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#47715C").s().p("AgagFQAZAFAcAAIgMAGg");
	this.shape_566.setTransform(93,118.9,1.179,1.692);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#47715C").s().p("AAGgIQAXgKAIAMQgVAFgRAEQgRAGgFAEIgNAAg");
	this.shape_567.setTransform(85,171.1,1.179,1.692);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#47715C").s().p("AgDAWQARgVgygFIgEgBIgDgBIgIgMIAHgDQA3AIApAjIg4ABg");
	this.shape_568.setTransform(71.2,85,1.179,1.692);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#47715C").s().p("AgDAFIgFgNQAKAIAGAJg");
	this.shape_569.setTransform(69.3,73,1.179,1.692);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#47715C").s().p("AgPAPQADgPAFgXIANAAQACAbAIAUg");
	this.shape_570.setTransform(74.3,72.9,1.179,1.692);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#47715C").s().p("Ag7AYQh5gqAkg0QgDAoBhASQBeAPATgYQgOAUANgJQAPgKgJgBIBVgDQgbAggGAKQgTAjARARQiVgkgcgKgAgCAfIAPgDIgWAAg");
	this.shape_571.setTransform(46.8,281.3,1.179,1.692);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#47715C").s().p("Ag1AYQApgNgMgdQgEgCgPAKQgOAIgLAIQADgVAIgMQAEABANgEIAQgGQAUAHAeAcIArAmQhjgJgXgEg");
	this.shape_572.setTransform(146.8,206.1,1.179,1.692);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#47715C").s().p("Ag9AfQgegpgqgdQAPAABTArQBHApARgSIgBgDQATAGA8ADIADACIhGgCQgrgBgCAIg");
	this.shape_573.setTransform(174.6,292.2,1.179,1.692);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#47715C").s().p("AAIAbQgYglgogXQALgDAoAbIA+Asg");
	this.shape_574.setTransform(158.2,291.1,1.179,1.692);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#47715C").s().p("AgugPQAGgBAgANIA3AUQhLgQgSgQg");
	this.shape_575.setTransform(150.1,291.9,1.179,1.692);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#47715C").s().p("AhcgFQgCgEgKgMQgIgJAAgEQAxgQBNAEQBjADAAAsQAAAUgcANIhVAIQgCAGgIAAQgZAAg5g1g");
	this.shape_576.setTransform(119.5,248.3,1.179,1.692);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#47715C").s().p("AgXAMQAJgXAmgEQgGARgVAOg");
	this.shape_577.setTransform(129.3,272.1,1.179,1.692);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#47715C").s().p("AgeAJQgDgJgEgCQANgBAXgIIAWAIQgOADAfAMQgTAAgxgDg");
	this.shape_578.setTransform(110,195.2,1.179,1.692);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#47715C").s().p("AAAAAIABgDQABADgCAEg");
	this.shape_579.setTransform(138.9,165.6,1.179,1.692);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#47715C").s().p("AAqAjQgngXgqgEQgPgPgVgKQBGgSAagBQAxgBAGAiQgYACgrgCIg1gDQATAJBbACIAHgCQgFAKABAMQABAIgIAEIgUgCg");
	this.shape_580.setTransform(125.4,168.9,1.179,1.692);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#47715C").s().p("Ag7AfQgGgSgPgKIA4gXQBHgEgDAHQAGgNgKgEQAoAEABA5QgTgNg9gHQg6gFA4AgIgDABIg3gEg");
	this.shape_581.setTransform(124.8,189.1,1.179,1.692);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#47715C").s().p("AAMARQgggRgkgSQAXgEBaAqIgtgDg");
	this.shape_582.setTransform(93.3,192.9,1.179,1.692);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#47715C").s().p("AgLgCQAKgCANAEIgGADQgGgDgLgCg");
	this.shape_583.setTransform(101.9,190.8,1.179,1.692);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#47715C").s().p("AgYgDIAKgBIAnAFIgJAEQgPgFgZgDg");
	this.shape_584.setTransform(115.8,222.4,1.179,1.692);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#47715C").s().p("AitASQBBAJA1gkQgCgHgRgDIAEgBQAxAPALgTIgLgIIADgBQA1AEBHAAQA2ABAPgBIgfANQgaAMgMAIIhaASQg7gJgSgBQghgCAAALQAAAHAPAGIgUAAQg1AAgVgQg");
	this.shape_585.setTransform(103.9,206.9,1.179,1.692);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#47715C").s().p("AgTgCIATgYQAQAfAEAUIgDACQgVgUgPgJg");
	this.shape_586.setTransform(131.4,94.9,1.179,1.692);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#47715C").s().p("AgGgBIANgJIAAACQgHAFgBADQgDAEAIAEIgBACIgDACg");
	this.shape_587.setTransform(134,60.5,1.179,1.692);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#47715C").s().p("AgCgBIAEABIABABIgDABg");
	this.shape_588.setTransform(133.6,74,1.179,1.692);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#47715C").s().p("AgTALIAlgYIACAMIgeALIgGAEg");
	this.shape_589.setTransform(129.8,63.7,1.179,1.692);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#47715C").s().p("AgLgQIACgBIAiARQgWADgbAOQAAgXANgKg");
	this.shape_590.setTransform(140.6,93.4,1.179,1.692);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#47715C").s().p("AglAJQAPgCAWgHIAkgNQAEANgDAHQgeAHgRAAQgSAAgJgFg");
	this.shape_591.setTransform(143.3,132.7,1.179,1.692);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#47715C").s().p("AA9AnQAMggi+goQAfgRBLAdQApAQBYAlIgbAIg");
	this.shape_592.setTransform(77.8,195.8,1.179,1.692);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#47715C").s().p("AB9DpIhJgiQhAgfgbgHIgDgBIgdgJQgdgIgSgJQgkgPgGgWQApAHAGAGIgEgJQAQgBAdgFIAOgDQgCgTgTgWQANgHAJgIQgIACgegEQgQgSgGgOIgDgLIB1AaQABgHgCgGQgIgUgrgXQgSgJgVgJIgZgKQAZAEABABQADgLgFgIQAUgHgFgCQgXgIgJgHQgIgGgIgIIgHgJIBoA2QAbgUgqgKQgsgHAGAAIAKgJIACgBQAbgRABgCQAJgMgLgdQAXARAJAeQAFgyAOgxIAIA+IAFAVQADAHAFAKIACAEIACgCQAGgIAOgMIALgLIAEgFIABAeIAfgRQgYAUgPARQgKALgGAKQgLATALAIQANAIAYgJIAHAIIgCACQABADAEABIADABIAGAHIgqACQgWAFgCARIAfgFQAdgEASgCIANAPIgXAMQgPgLgNgCQAIACANAQQgcARgYAYIgKALIgMAPIgEAFQgDAGAAADQARgHAaAOQAeAPAKgCIAQAQQAGAHgFgDQgegIgQgBQgcgCABAWIARANIgDAAQgCAFBoAqQADAKABAMQgQACASAKIAAAGQgGgDgngpQgWgXAbAyQgVgdgeACQgNAKAeASQARAMAWAIg");
	this.shape_593.setTransform(115,79.9,1.179,1.692);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#47715C").s().p("AE1BlQgXgCg1gVQg1gUgSgCQgfgDAAAgQghgJgbAQIgagIQAagCASgVIgBgDQASgEgCgCIgRACQgFgUglgIQgfgHg8gBIACgCIgMACQgdgBg3ACIhcABIA8gTIi3ALQAOgCAbgNQAdgRALAAQghgFglgJQAhgRAuADQA1ADAZgHIg3gSQgqgOgSgPQCMAWAIAOQgCggglgGQAWAAAvADQA2ADAyAFQgtAVglgGQgBAGBlAoQAkgDgKgMIAWAKQACAaCDAYQgHgBgEAKQAAAIAvgFQBFgIAVABQhPAQAKAmIA6gfQAdgMAEAVQACAHgEAHQgDAHgFAAQAFAFAigFQgIAcgfAAIgIgBg");
	this.shape_594.setTransform(92.3,139.4,1.179,1.692);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#47715C").s().p("AAbAnQgcgGgOAFQgHAGAAAIIgQgEQASAAACgUQgEgSguAEQgPgMgLgLIgbAFQgDghgqgPQBKATARgCIA3AqQAbAVAIgJQAHgmgvgQQAIABA4AaIgJAHQAEANAngGQA1AWASAEIAWARIhOADQgpgKgUgDg");
	this.shape_595.setTransform(102.4,166.3,1.179,1.692);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#47715C").s().p("AgRgBIAjABIgSACg");
	this.shape_596.setTransform(113.1,160.1,1.179,1.692);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#47715C").s().p("ACVBOIghgWQAVggg/gTIhEgKIAAAAIAAAAQAAASANANQgTgEgRAHQA9AiBAASIhFgDQg3gCgkgFIAGgGIhPgqQAPgDgKgMIAeACQBFANAAANQAAgJgYgNIAUABQgMgCgXgHQgSgGgUgGIBmgjIgqADIgBAAIAVgGQAAgJhXgJQAFgBADAAIgcgFIAKAFIhHgGQAQgPAOACQAagLAhABIA4ACQAEARAxAcQAvAZARACIACACQgbAGgCAIIA9ALQA+APAPAKIAAAMIgFACIAFAEIgCApQgPgDgVgMg");
	this.shape_597.setTransform(112.5,124.1,1.179,1.692);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#47715C").s().p("AgDAAQAFAAABAAIgDABg");
	this.shape_598.setTransform(128.7,67,1.179,1.692);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#47715C").s().p("AgOgGIAdAGQgEACgCAFQgJgIgOgFg");
	this.shape_599.setTransform(177.1,289.5,1.179,1.692);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#47715C").s().p("AgsALQgUgOgjgJQARAABeAJQAHAHAlAEIAtAFIiRgCg");
	this.shape_600.setTransform(111.2,227.8,1.179,1.692);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#47715C").s().p("AgGAEIALgIIACAAIgIAJg");
	this.shape_601.setTransform(1,277.1,1.179,1.692);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#47715C").s().p("AgOgFIAWAAQAMAFgJADQgFACgUABg");
	this.shape_602.setTransform(1.8,225.5,1.179,1.692);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#47715C").s().p("Ahcg0QAFAEBZAJIgIADQgPAEgOAAQgIAAgKgBQgBAHCCAxIAIADIAJAEQgiABgJADQgRAEAhAOIgGABQiPgWgJhTg");
	this.shape_603.setTransform(37.9,132.3,1.179,1.692);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#47715C").s().p("AghArIgDgGQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAABAAABQgTg0AughQgGAKASAVQgOAFgCANIAhgDIAdAWIgjAaIgSABQgRAAgJgFg");
	this.shape_604.setTransform(31.2,97.7,1.179,1.692);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#47715C").s().p("AgGAWQgUgJgRgCQAaADgLgIQgNgGgEAJIAAgGIgBAFIAHguQAmAeAwApIgSAGIgjgRg");
	this.shape_605.setTransform(31.7,160.1,1.179,1.692);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#47715C").s().p("AgDADQACgHgCAEIACgGIAFANg");
	this.shape_606.setTransform(27.6,77.5,1.179,1.692);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#47715C").s().p("AgkgOQApgJAfgJQAGgBgUATIgcAoQgIAHgGAAQgPAAgBgvg");
	this.shape_607.setTransform(32,233.1,1.179,1.692);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#47715C").s().p("AgEgBIAGgDIABABQACADAAAFQgEgEgFgCg");
	this.shape_608.setTransform(57.3,153.7,1.179,1.692);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#47715C").s().p("AgGAdQAGgThFADQBtgHgzgEQg3gCgPANQAOgQANgNQA3ADAxgDQgMgKgJgJQAaAMAbAcQgGgCgGgDIgYAFQAKAIABACIgCABIgGgCQgBAAAAABQAAAAAAAAQAAABABAAQAAABABAAQgvARgGABIgBABQgEAAACgHg");
	this.shape_609.setTransform(47.8,195.1,1.179,1.692);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#47715C").s().p("AgeALIAEgFIAPgLQAIgIADgGIABAcIAegPIgbAYIgCACg");
	this.shape_610.setTransform(32.9,77.4,1.179,1.692);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#47715C").s().p("AgDAAIADgBIAEABQgEABgCABIgBgCg");
	this.shape_611.setTransform(40,93.1,1.179,1.692);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#47715C").s().p("AgggFQASgCAPABQATABANAFQgTgFgbALIgEABg");
	this.shape_612.setTransform(42.1,97.3,1.179,1.692);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#47715C").s().p("AgNAGQATgNAIgDIAAACQgMAHgCACQgCAGALAEg");
	this.shape_613.setTransform(44,82.6,1.179,1.692);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#47715C").s().p("AgRACQgLgOgCgOIA8AOIABAEQAAAVgcAPIgUgag");
	this.shape_614.setTransform(14.6,105.3,1.179,1.692);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#47715C").s().p("AgWgHIArABQAGAGgLAHQgVgHgRgHg");
	this.shape_615.setTransform(12.9,126,1.179,1.692);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#47715C").s().p("AgXAIQAFgGABgFIAOgDQAMgDAPABQgSAIgZAJg");
	this.shape_616.setTransform(7.8,132.5,1.179,1.692);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#47715C").s().p("AgyAfQAMgmAYgPQAUgOAsADQABAQgFAQIhDgDQAIAEAaACIAdACQgPAeguAAQgOAAgRgDg");
	this.shape_617.setTransform(32.9,191,1.179,1.692);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#47715C").s().p("AgVAbIgYgUIBbglQADAehBAgg");
	this.shape_618.setTransform(9.5,189.3,1.179,1.692);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#47715C").s().p("AAcgFIgBADQgHAFgSACQgMADgRAAQAbgTAcAGg");
	this.shape_619.setTransform(45.9,189.3,1.179,1.692);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#47715C").s().p("AhOAhIgJgFIAAghIAGgDQgCgHgEgGIAAgEIBAgNIA6AaQAhANATADQghgEARAFQARAFAAgGQAAAbgyAGQgOACgTAAQghAAgygGg");
	this.shape_620.setTransform(10.5,232,1.179,1.692);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#47715C").s().p("AgMABQAJgBAJgCIAHAFIgZgCg");
	this.shape_621.setTransform(342.4,231.6,1.179,1.692);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#47715C").s().p("AAAAVQgKgNAGAIIACABIAAABIgBgBIAAAAIgVgWQAVABgKgQIAmAYQgEABgJAJQgIAHgDAAIgBAAg");
	this.shape_622.setTransform(342.2,225.6,1.179,1.692);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#47715C").s().p("AAAABIgGgFQABgBANALQgGgCgCgDg");
	this.shape_623.setTransform(347.2,219,1.179,1.692);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#47715C").s().p("AgDgEIABAAIAGAJIgHgJg");
	this.shape_624.setTransform(344.5,233.1,1.179,1.692);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#47715C").s().p("AgEgEIACABIAHAIIgBAAg");
	this.shape_625.setTransform(342.6,230,1.179,1.692);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#47715C").s().p("AgJgBIATABIgSACg");
	this.shape_626.setTransform(335.4,177.1,1.179,1.692);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#47715C").s().p("AAAAEIABgHQgBAEAAADg");
	this.shape_627.setTransform(327.6,161.9,1.179,1.692);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#47715C").s().p("AgGAAIANgDIgCAIg");
	this.shape_628.setTransform(330,196.6,1.179,1.692);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#47715C").s().p("AgMAXQgGgBAAACQgIgKAAgSQABgWAOABQgEAHASASIAYAUQgIACgPABQgLABgHACQAGgCgEgBg");
	this.shape_629.setTransform(336.9,226.1,1.179,1.692);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#47715C").s().p("AgHAgIg7hBIAdASIAnAaQgCAHACAJIANgHIAFAFIgBgHIAJgFQAeAMAJAHIgkACIgMAAQgQAAgKgCg");
	this.shape_630.setTransform(351.4,215.7,1.179,1.692);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#47715C").s().p("AgcASIgGgEQAZgKgIgRQgDgCgLAGQgKAHgIAFQADgUAJgHIAaACIACAAIADAAQATAMAlAjg");
	this.shape_631.setTransform(339.9,198.8,1.179,1.692);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#47715C").s().p("AgDAaQgrgOAGgqQAeABARASQAIAGAXAeQgPgTACAKQABALAQAEIgKAAQgUAAgPgFg");
	this.shape_632.setTransform(339.8,214.2,1.179,1.692);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#47715C").s().p("AhhAuQAJAAABgFQgFgXgdADQAJgFAtgPIAwgQQgGAPAJAEQAHAFAIAAIAJgBIADgBIAMgFQASgFAkgZQAjgYAKgDIgTANQgMAKARAFQgjAIggASQATAAAAABQgBAAgQAGIgTAHQACAGANABQAHAAAZgCQgIAHgdABIgcABIgIABIgBgCQggAGgbAXQgCgDAHgHQAFgHgBgDQABAJgfAMIgOgKg");
	this.shape_633.setTransform(353.6,135.2,1.179,1.692);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#47715C").s().p("AASgFIAFABQgkAJgJABQAPgEAZgHg");
	this.shape_634.setTransform(348,162,1.179,1.692);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#47715C").s().p("AgkgCIAngEIASgBIAQAPQgjgHgmgDg");
	this.shape_635.setTransform(362.6,250.9,1.179,1.692);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#47715C").s().p("AghgCIAaABIApABQgcABgVACQgKgDgIgCg");
	this.shape_636.setTransform(365.5,209.7,1.179,1.692);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#47715C").s().p("AgzgIIAwABQAnAAAQACQgnAFgXAIQgggIgJgIg");
	this.shape_637.setTransform(356.7,211.6,1.179,1.692);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#47715C").s().p("AgMgBQAUgHAFAMg");
	this.shape_638.setTransform(360.8,215.2,1.179,1.692);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#47715C").s().p("AgiA2QAAgIgdAGQgkAHgDgBQAGgBgEAAIgagJIgkgLIgLgEIAAgSQACgFAZAPQAZAPAKgSQgPgSgUgDIBLAGQAwAEAAgBQgZgTggAFQAqgHAegIIASAJQALAEAJgCQAKgCAIgJIARgWQAUgYASAEQADABAsAWIAYAMQgRACgYAKIg3AaQgZANgUAGQgZAHgWgEQgBAEAYALIgdAHIgZAGQAHgCAEgGg");
	this.shape_639.setTransform(354.7,166.3,1.179,1.692);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#47715C").s().p("AhOAsQgwgBgIgBIAzgFQAvgIgHgNQAAABhqAMIAAAAIArgOIACgBIAPAGIgGgJIAegKIglACQgMgMgRgKIBUAEIBIADQgJgNgNAAQAzgHANgLIBTAiQggABgKADQgRAEAiAMIg8AFQhRAJgDAPIARADIgxABIgbAAg");
	this.shape_640.setTransform(352.4,185,1.179,1.692);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#47715C").s().p("AgMgKQALAKAOAJIgYACIgBgVg");
	this.shape_641.setTransform(336.2,184.1,1.179,1.692);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#47715C").s().p("AAGATQgRgagdgRQAIgCAdAUIAsAfg");
	this.shape_642.setTransform(348.2,260.4,1.179,1.692);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#47715C").s().p("AgLAAIAQgBQgFABAGAAIAGAAIgEACg");
	this.shape_643.setTransform(351.4,325.3,1.179,1.692);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#47715C").s().p("AA5AcQgggKgigEIgDAAIghgDIgMgCIANACQAwgkAFgBQATgGATAjQgWgBAAAIQAAAJAfAFIACAEg");
	this.shape_644.setTransform(338.8,350.9,1.179,1.692);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#47715C").s().p("AgIAAIARAAIAAAAIgHABg");
	this.shape_645.setTransform(349.9,333.1,1.179,1.692);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#47715C").s().p("AgoAQQAYgYAQgGQgHADAJABQAJAAgJgFQAIAEgSgXQgGgHA3A1IgSAJQgWALgBAEQgKgbgeAHg");
	this.shape_646.setTransform(344.6,278.2,1.179,1.692);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#47715C").s().p("AgCAQQgCAFACAEQhAgZARgaQgDAkBmgHQgKAKAOANQgcgNgcADg");
	this.shape_647.setTransform(341.4,325,1.179,1.692);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#47715C").s().p("AgFgBIAFAAQACABAEACQgGgBgFgCg");
	this.shape_648.setTransform(363.1,288.4,1.179,1.692);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#47715C").s().p("AgPgEIABgBIAFgBIAEADIAVADIgIAHg");
	this.shape_649.setTransform(301.9,331,1.179,1.692);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#47715C").s().p("AgNgHQASgCAKAFIgOAMIgDABQgBgJgKgHg");
	this.shape_650.setTransform(307.4,323.3,1.179,1.692);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#47715C").s().p("AAGA0QAJgMgIgFQAFADg0AaIgBAAQgNgFgdgEIgEgBIALgOIABgBIAQgKQAIgFACgHIABgHIAAgCIAIgIQANAOAEAQQAEgeAHgbIAKgoIADAqQAFAnAOAVQAFgIANgLQANgMAGgFIABAdIAegSQgSARgOAOQgjAGgbAUIAMgPg");
	this.shape_651.setTransform(347.6,120,1.179,1.692);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#47715C").s().p("AgCgDIAGAFIgEACg");
	this.shape_652.setTransform(341.4,117.9,1.179,1.692);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#47715C").s().p("AhoAxQgGgLgYgaIgCgDIAxAIQAjAFACgHQgGgPgVADIAagHIAKADIAAgGQBEgYAEgSQAagFAWgCQAngCATAIQgRgFgdAMQglAPgoAjIgBABIgRATIgNARQgnAHgrAGg");
	this.shape_653.setTransform(351,151.5,1.179,1.692);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#47715C").s().p("AAHgBIgBABIgMACQAHgCAGgBg");
	this.shape_654.setTransform(350.6,132.3,1.179,1.692);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#47715C").s().p("AghALQAggLAMgIIAXgEQgTAKgwAPg");
	this.shape_655.setTransform(349.4,145.3,1.179,1.692);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#47715C").s().p("AgRAEQAUgFABgBIgMgFIAGgJIAZAOIgtATQAAgEAFgJg");
	this.shape_656.setTransform(336.8,133.5,1.179,1.692);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#47715C").s().p("AA6AeQgFgCgEABQgvgDgogGQgWgdgfgVQALAAA8AfQA0AdAMgMQgJgZgZgKIAcAGQAYAGADgCIAJAHQALAQAHAOIgLABIgXgBg");
	this.shape_657.setTransform(359.4,261.5,1.179,1.692);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#47715C").s().p("AgfARIABAAQAEADALAAIACgGQAPgGAFgNIAEgCIgEABIACgLIAXgEQgGAegjANQgRgCgFgDg");
	this.shape_658.setTransform(130.4,207.4,1.179,1.692);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#47715C").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAgBAAABQAAAAAAAAIABABIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_659.setTransform(161.7,189,1.179,1.692);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#47715C").s().p("AARgDQgbAGgGABQAGgBAbgGg");
	this.shape_660.setTransform(156.3,156.6,1.179,1.692);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#47715C").s().p("AgFAAIAAgDIAKgDIABAOQgFgHgGgBg");
	this.shape_661.setTransform(152.2,141.9,1.179,1.692);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#47715C").s().p("AACgBQATgLAJgDIgOAIQgJAGAMABQgUAFgXAKIgFABIAfgRg");
	this.shape_662.setTransform(164.4,148.4,1.179,1.692);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#47715C").s().p("AhRAPQAqgEAJAAQAEgBgIgDQgQgDgMgIQgEgCgEgGIBKAfQAVgNghgGQgjgCAKgBIARgLQgDgCgCgDQA9ALACgLIgCgEQADgBAOgSIADAgIAYgUQgOAQgIAOQgKAQAIAFIAEACQh3AUgcAAIACgcg");
	this.shape_663.setTransform(148.7,148.4,1.179,1.692);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#47715C").s().p("Ag+AsQg9gBgLgCIBHgHQA/gLgJgSQABACiTARQADgggCgfQAkAmAuAMQgVgiglgUQAKAACyAIQgMAFADAIQACAGAKAJIgLABIAOAHQABgDgBgCIAIAGQACAEgFABQAQAKAbgFQAPgEAcgIQAGAQgTAFQgHACgUAAQAHAOAOAEQgygLgwANIhAABIgkAAgAAPgDIASgBIgBgCQgCgEgDAAQgFAAgHAHg");
	this.shape_664.setTransform(157.9,190.2,1.179,1.692);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#47715C").s().p("AAAAAIAKgBQgFACgOABg");
	this.shape_665.setTransform(162.3,153.8,1.179,1.692);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#47715C").s().p("AiRgHQAPABAlAEQAWAHALgTQgVgagbgDIBnAIQBAAFABgBIgNgIQAVABAdAKIAxASQgUgEgRAEQAYAFgKADQgSACAAACQgQgCgOAGIgXALQgDAJADAIIgMADIgDgCQADgCAEgGQAAgJgoAHQgwAJgDAAQASgGgtAGQgSgGgOgCQANALgJgDQgIgDAIAHIgpAGg");
	this.shape_666.setTransform(156.1,169.5,1.179,1.692);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#47715C").s().p("AgdAEQAmgFAVgFIgQANQgVgHgWAEg");
	this.shape_667.setTransform(157.5,159.6,1.179,1.692);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#47715C").s().p("AgUABIAfgCQAAABAKAAIgUAAQgKABgDACg");
	this.shape_668.setTransform(167.1,180.8,1.179,1.692);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#47715C").s().p("AgpgEIAYgEQATgDALABQAAAFgFABQAmAIgFAEQgDACgaABQgJgKgsgFg");
	this.shape_669.setTransform(173.1,204.3,1.179,1.692);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#47715C").s().p("AgcAAQAOAAAZgEQAMAEAGAFIg5gFg");
	this.shape_670.setTransform(160.4,201.6,1.179,1.692);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#47715C").s().p("AgBAAIADAAIAAAAIgDABg");
	this.shape_671.setTransform(152.4,136.7,1.179,1.692);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#47715C").s().p("AgJACQgBgCATgCQACAFgKAAIgKgBg");
	this.shape_672.setTransform(175.8,214.2,1.179,1.692);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#47715C").s().p("ACxA4IgYgPQAQgYgvgNIgxgIQAAANAKAKIgGgBIAAgBIgCAAIgEABQgigChfgYQA3gHgHgIIgggCQAMgGANgEQgYgCgKABQgRABAIAPQgOgFgXgCQgXgBAXAKQhcgbgPgOIBOABQBBAAAOAFQgMgIgLgEIALgBQAKAIATAAQAZgBAFACQAAgDAAgDIAJABIgJAFIACABQgEAGgKgCQgIgCgEALQAJgEACACQAEAFAFACIAAAAIAigGQgCgMgEgFIARACQAKANAhARQAeAPAKABQAKANAdAGQAaAIAQgCQABAUgCAjQgMgCgPgJgAgHgEIgCADIAAABQAOAMAOgOQgKgIgIAAQgEAAgEAGg");
	this.shape_673.setTransform(185.7,232.1,1.179,1.692);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#47715C").s().p("AgpADQgNgHgMgGQArAMAogRQAlAHANALQgTgMgIAKIAQAOIgIgCIg2gNQgXgBATARQgQgIgPgFg");
	this.shape_674.setTransform(172.6,210,1.179,1.692);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#47715C").s().p("ACuAiQgvgSgLgCQgagEAAAZQgagIgXARIgDgBQgDgCgDAAIgHABIgBAAQg1gEhjgFQAGgGAHgJQAAgIiMAMQA4gPgIgTQAOAVATgJQAGgJgcgSIghgTQAMADBjAkQBeAfAFgIQgjgqg1gLQASAABJAGIAMAEIADgDQBUAIAHAHIgDgHQAVAGASADQgGgBgDAHQAAAFBEgGQBGgHACAXQAAAkgbADIgEAAQgSAAgigNg");
	this.shape_675.setTransform(179.6,247.6,1.179,1.692);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#47715C").s().p("AhNAHQAIgMgOgPQAOAKAuANQAwAQAAgNIgHgGQAmAPARADIALADg");
	this.shape_676.setTransform(166,211.4,1.179,1.692);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#72A27C").s().p("AgNAiIACgCIgEABIgJgDQADgGAAgIQADgCApAAQgBgKgMgRQgKgTAAgLIAZAOIAABJQgRgDgVgHg");
	this.shape_677.setTransform(868.1,88.9,1.179,1.692);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#72A27C").s().p("AgegVIABAAIA8ATIAAAYQgggTgdgYg");
	this.shape_678.setTransform(867.4,116.9,1.179,1.692);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#72A27C").s().p("AgLAbIgDgIIAAgBQgCgEgFADIgDgLIACgCQAFgFAKgEQgNgCACgCIAJgMQgHAEgEgCQgDgBgBgFQAUgGAdACQAAAZgKAPQgGAIgJAJIgDACIgDAAQgDAAgCgDgAADgJQgEADgDAGIAAAAQgEAIAEACIADABQABgBABgGIADgEIAAgBIADgIIAAgBIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAAKgCIAAACIgBABQAJgBADgEQACgEAAgGQgJAEgCgDQABAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBg");
	this.shape_679.setTransform(864.3,145.9,1.179,1.692);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#72A27C").s().p("AgJABIACgBQADgDAAgCIAOALQgKgCgJgDg");
	this.shape_680.setTransform(866.9,123.4,1.179,1.692);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#72A27C").s().p("AgIACIAFgHIAMAKQgMgFgFACg");
	this.shape_681.setTransform(862.8,118.4,1.179,1.692);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#72A27C").s().p("AADgBIACABIgJACQAFgCACgBg");
	this.shape_682.setTransform(860.4,116.1,1.179,1.692);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#72A27C").s().p("AACAAIgNAJQANgRAOgJIAAAcQgTACgMAFg");
	this.shape_683.setTransform(869.1,149.2,1.179,1.692);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#72A27C").s().p("AAQAAIAAAAIgfABg");
	this.shape_684.setTransform(869.2,152.8,1.179,1.692);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#72A27C").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBgBg");
	this.shape_685.setTransform(865,144.2,1.179,1.692);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#72A27C").s().p("AgBAAIABAAIACAAg");
	this.shape_686.setTransform(786.3,208.8,1.179,1.692);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#72A27C").s().p("AgIgDIAAADQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQADADANgEIgBAEIgSACg");
	this.shape_687.setTransform(789.1,208.1,1.179,1.692);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#72A27C").s().p("AgsAEIACgCQArAAgbgIIAJgGQATAGAQgCQgUgMATAEIAAADIABgDIAAAAQADAbAYgLQgEAEgGAHQgGAFAAACQghgDgogLg");
	this.shape_688.setTransform(778.5,205.7,1.179,1.692);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#72A27C").s().p("AgHACIABgCIAKgCIAFAAQgGABgDABIgIADg");
	this.shape_689.setTransform(781.6,199.6,1.179,1.692);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#72A27C").s().p("AgDgDIAHAFQgEgCgCAEIgBgHg");
	this.shape_690.setTransform(824.1,185.1,1.179,1.692);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#72A27C").s().p("AgEAAIAJAAIgFABg");
	this.shape_691.setTransform(815,144.5,1.179,1.692);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#72A27C").s().p("AAOgGIgbANQgBgLAcgCg");
	this.shape_692.setTransform(813,146.4,1.179,1.692);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#72A27C").s().p("AAMgIQAggIAKAJQgWAIhUALQAtgPATgFg");
	this.shape_693.setTransform(769.4,199.9,1.179,1.692);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#72A27C").s().p("AgCABIAAgBIAEgCQACgCgBAEIgDAEg");
	this.shape_694.setTransform(772.6,232.8,1.179,1.692);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#72A27C").s().p("AgLABIAVgFIACACQgHAHgGAAQgFAAgFgEg");
	this.shape_695.setTransform(785.1,232.1,1.179,1.692);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#72A27C").s().p("AAFgBIAAABIgBAAIgIACg");
	this.shape_696.setTransform(779.9,200.3,1.179,1.692);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#72A27C").s().p("AgMAEQASgMAHgCQgJAFgDAEQgFAEAIADIgPAFg");
	this.shape_697.setTransform(805.4,65.8,1.179,1.692);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#72A27C").s().p("AgHgBIAQACIgPABg");
	this.shape_698.setTransform(785.7,77.2,1.179,1.692);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#72A27C").s().p("AgFgCQAHACAEACIgGABg");
	this.shape_699.setTransform(788.5,84.1,1.179,1.692);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#72A27C").s().p("AgSgIIANgEIAYAMQABAFgJAIg");
	this.shape_700.setTransform(798.4,95.6,1.179,1.692);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#72A27C").s().p("Ag1AjQAJgCgGgHIA5AFQgIgCgPgFIgZgHIBDgUIhJADIgMgIQAQgKAHAAIgEgBIBVgXIAMAJIgiAOQABABAKAKQAMALAKANIgBADIADAAIACADQgqAKg5ALg");
	this.shape_701.setTransform(789.1,101.9,1.179,1.692);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#72A27C").s().p("AgBAAIADAAIgCABg");
	this.shape_702.setTransform(779.8,97.1,1.179,1.692);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#72A27C").s().p("AgJgFIATAJIgJACQgEgFgGgGg");
	this.shape_703.setTransform(784.8,65.4,1.179,1.692);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#72A27C").s().p("AABAGQAIgGgIgUQAOAKAFARQgLAIgcAGQAIgIAMgHg");
	this.shape_704.setTransform(789.8,62.2,1.179,1.692);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#72A27C").s().p("AhMAeQAXgHAQgHIATAKQAOgLgRgFQAfgQgKgOQgBAFgHAFQAEggAGgaIABAAIAEAfQgEAJAHAHQgCgCABgEQADAMAGAJIALgMIAMgMIAAATIATgKIgVATQgSARACAJQAAADADACIADACQAJADAOgGIAOgHIALgIIgBAFIgBABIgMAFQAOABgDABIgTAHIg1AAQgSABAAAEQAQAXAbAHIghABQgOgSg4gVg");
	this.shape_705.setTransform(793.5,65.4,1.179,1.692);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#72A27C").s().p("AgDABIAGgBIAAABg");
	this.shape_706.setTransform(779.1,234.7,1.179,1.692);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#72A27C").s().p("AgGAAQAGAAAHAAIAAABg");
	this.shape_707.setTransform(778.1,240.5,1.179,1.692);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#72A27C").s().p("AAJAGQgIgDgIgCIgBgBIAKgFQAGAFABAGg");
	this.shape_708.setTransform(780.8,234.7,1.179,1.692);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#72A27C").s().p("AgIAAIAOAAIACABg");
	this.shape_709.setTransform(779.3,160.6,1.179,1.692);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#72A27C").s().p("AgdAIQBQgmAXgIIAegDIARAIQhAAOAnAZQgTgCgFAEQgFAEALAIQhbAOgyAFQA/gMAYgHIALgFQgJgJgnALQgnAMgEgGIACgBQgaAJgHAKQgRABgQAAQAbgEBAgeg");
	this.shape_710.setTransform(781.1,150.6,1.179,1.692);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#72A27C").s().p("AgLgQQASgMALANQAHAHAKATQg1AEgQAIQARgiAGgFg");
	this.shape_711.setTransform(826,86.4,1.179,1.692);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#72A27C").s().p("AgXAAQAJgCgGgHIAsADIgYAQg");
	this.shape_712.setTransform(811.3,94.2,1.179,1.692);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#72A27C").s().p("AgLAFIgEgFQAPgBgCgGIASAIQgNAHgGAAQgFAAgDgDg");
	this.shape_713.setTransform(807.3,97.6,1.179,1.692);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#72A27C").s().p("AhMArQgMgOgBgMIBJARQADgXhGgaIgFgGQAagJgDgCQgVgHgLgOIABgBIA+AgQARgMgagHQgbgDADgBIANgJIALgHIASgCIABAEIABgEIAXgCIACAJIAJgKIAPAAIAAAFIALgGIADAAQgpAnAMAJQANAJAfgUQApgbACAAQgIAFgEADQgHAGALADQgXAGgTALQAOAAgEACIgVAIQABAEAMAAIAQgBQgEAEgfABQgYABgCAMQAGAAAigGQAhgDAQAFQgTgEglAYQghAXgJAUIgzABQgDgFgSgUg");
	this.shape_714.setTransform(821,59.8,1.179,1.692);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#72A27C").s().p("AhNAWIAQgGQAWAJAJgLIgVgLQAWgKATgGIgEgDQAIgDAGgHQgLANAJANQANAIATgiQATADAeAIQhHAWhIAUQgRgBAEgEg");
	this.shape_715.setTransform(817.9,95.9,1.179,1.692);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#72A27C").s().p("AgQAAIAggJQgGALAHAIIghgKg");
	this.shape_716.setTransform(811.9,90.8,1.179,1.692);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#72A27C").s().p("AANgDIgHAGIgSABQAUgEAFgDg");
	this.shape_717.setTransform(813.8,86.8,1.179,1.692);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#72A27C").s().p("AgDgDIADgBIAGABIALADIgiAFQAIgGAGgCg");
	this.shape_718.setTransform(831.4,69.5,1.179,1.692);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#72A27C").s().p("AALASIgPgRIgYgSQAZAIARAOQgigmAxAcQgFAGgGASg");
	this.shape_719.setTransform(819.3,188.5,1.179,1.692);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#72A27C").s().p("AAeAAQgaACghABQApgKASAHg");
	this.shape_720.setTransform(654.6,222.5,1.179,1.692);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#72A27C").s().p("AgDgEIADACIADACIgDAEQAAgDgDgFg");
	this.shape_721.setTransform(647.9,186.8,1.179,1.692);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#72A27C").s().p("Ag5AbQAFAAAEgHQADgHgCgHQgEgTgdAMIg6AdQgKgjBMgQIA/gFIgJAJQARgDAUAEQgcAPgUAYQAFAKBeghQAqANAcgGQADADhFAOIABgFQgKgBg/AIQgfAFgQAAQgKAAgCgCg");
	this.shape_722.setTransform(645.4,169.8,1.179,1.692);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#72A27C").s().p("AAKAVIgCgBIgSgKIAFgCIgCgBIgNgEIgCgBIgKADQgfgHg6gLQAHgFBugFIADABQgNAEgLAJQAJgDAhgCIADABIADgBQAlgCA+ABQgWAEgCAGIAHABQgZAJhAATgAAMACIAmACQgJgBgPgDIgPgEIAIAEIgLAAIAEACIgEgCIgNAAIARACg");
	this.shape_723.setTransform(642,148.7,1.179,1.692);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#72A27C").s().p("AAKgNQgBAMgDAHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAABgBAAIgCAFQgDABgIABQABgOASgMg");
	this.shape_724.setTransform(678.6,170.8,1.179,1.692);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#72A27C").s().p("AgiASQAOABgDgTQgCgSgYAGIADgDQAPgCAlgCQAUASAYAOIg0AHIgSAAQgLAAgDgCg");
	this.shape_725.setTransform(691.2,171.3,1.179,1.692);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#72A27C").s().p("AgKAOIAKgEIgdACIgZgDIAhgRQAJAAAIgCIgJgDIADgCQAQAQAxAPIgTAAQgWAAgYgCg");
	this.shape_726.setTransform(697.2,102.2,1.179,1.692);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#72A27C").s().p("AAEAAIg+AEIAQgGIAlgCIAAABIADgBIAfgCQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQACACAQgCIAOADIgbAHQANgIgoABg");
	this.shape_727.setTransform(700.9,119,1.179,1.692);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#72A27C").s().p("AgDgCIAIADIgEACg");
	this.shape_728.setTransform(692.1,80.5,1.179,1.692);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#72A27C").s().p("AgKgCIACgBIATAEIgIACg");
	this.shape_729.setTransform(692.3,109.1,1.179,1.692);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#72A27C").s().p("AgRgFIAhABQAFAGgMAEg");
	this.shape_730.setTransform(695.1,127.1,1.179,1.692);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#72A27C").s().p("AgPADQgDgDACgGQgFANAmgHIABADIgSAEg");
	this.shape_731.setTransform(692.4,95.4,1.179,1.692);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#72A27C").s().p("AgMAZIAMgKQgRAAgSADIgDgEIAEAAQgBgEgEgHIAAgDIAAACIgMgLQgHgJgCgGIAwAJIAAAAIAUAFQgNAMAAAGQAFgDAQAJQANAGAIgLQAFgHAGgDIAIABQADAGACAJQgnAKgaAAIgIAAg");
	this.shape_732.setTransform(699.4,92.7,1.179,1.692);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#72A27C").s().p("AgLAOQAYgUgmALIAMgFIgKgGIAaAAQAVgCgEgFIAGADQgMAGgOASQgHgBgEABg");
	this.shape_733.setTransform(687.5,112.4,1.179,1.692);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#72A27C").s().p("AgEAAQAEgBAFABIgGABg");
	this.shape_734.setTransform(691.6,97,1.179,1.692);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#72A27C").s().p("AAVAKIgbgMQAHAKgkAEIglgNIAAgBIAAAAIgQgGIgDgGIAKgCIAFgIIgBAIIAbgFIBHAVQAmANgBABQAGgJgYgNIA0AaIgFAEIgdADQgPgDgWgMg");
	this.shape_735.setTransform(694.7,132.2,1.179,1.692);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#72A27C").s().p("AgHAAIAPAAQABAAgJABg");
	this.shape_736.setTransform(702.2,148.6,1.179,1.692);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#72A27C").s().p("AAFARIgCAAQgTgIgcgHQgGgKADgLQAKAAAbATQAVANAIgHQAEgNgLgHQAoATgDAJIgjAGQgDgCgGgBg");
	this.shape_737.setTransform(690.2,148.5,1.179,1.692);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#72A27C").s().p("AAAAEQADgEgDgLQAIAHADAIIgVAIIAKgIg");
	this.shape_738.setTransform(695.8,78.3,1.179,1.692);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#72A27C").s().p("AABgRQADAXACAHIgLAFQACgSAEgRg");
	this.shape_739.setTransform(698.1,75.8,1.179,1.692);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#72A27C").s().p("AgNgCIAaADQgDgBgKAEg");
	this.shape_740.setTransform(697.8,113,1.179,1.692);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#72A27C").s().p("AgYAAIAegBQAJABAKACg");
	this.shape_741.setTransform(705,126.4,1.179,1.692);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#72A27C").s().p("AgCAAIAFAAIgBABg");
	this.shape_742.setTransform(677.9,190.3,1.179,1.692);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#72A27C").s().p("AgHAAIAPAAQgIABgGAAg");
	this.shape_743.setTransform(688.3,232.8,1.179,1.692);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#72A27C").s().p("AgTAFQACgFgBgGIAOgJIAYAOQgJALgHAGQgIgDgPgIg");
	this.shape_744.setTransform(658.9,155.9,1.179,1.692);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#72A27C").s().p("AgYAFQALADgSgMIAZgHQATAOATAIQgagBgZACQgNgJAIACg");
	this.shape_745.setTransform(655.7,196.9,1.179,1.692);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#72A27C").s().p("AAAAAIADAAIgFABg");
	this.shape_746.setTransform(668.2,130.4,1.179,1.692);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#72A27C").s().p("AgcADIAXgGIAMgBIAWAJQgdAAgcgCg");
	this.shape_747.setTransform(586,239.1,1.179,1.692);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#72A27C").s().p("AhDgHQAGgBAbgTQATAFAjAOQAhAIAZgDQADADhGAMIABgCQgKABgIAEIhHANQgCgcAMgHgAgZgCIADAAQAMgHAGgBIABAAIgRgEQgFAGAAAGg");
	this.shape_748.setTransform(604.1,171.5,1.179,1.692);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#72A27C").s().p("Ag5ASQADgTAmAGQAmAIADgGQgFgWgbADQAFgDAUgIQAXATARAHQgCAEgJAFQguABg5ALQgCgCABgEg");
	this.shape_749.setTransform(601.8,196.7,1.179,1.692);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#72A27C").s().p("AACgTIAVATQgiARgKADQABgKAWgdg");
	this.shape_750.setTransform(598.3,188.6,1.179,1.692);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#72A27C").s().p("AgIAAIAOAAIADABg");
	this.shape_751.setTransform(606.4,258.7,1.179,1.692);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#72A27C").s().p("AgXAHQgIgHgGgEIAUgFIA3AEIgFADQgYABgJAFIgaAGg");
	this.shape_752.setTransform(606,224.5,1.179,1.692);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#72A27C").s().p("AgGAEIAGgHIAHADIgGAEg");
	this.shape_753.setTransform(609,198.1,1.179,1.692);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#72A27C").s().p("AgBAAIADAAIgCABg");
	this.shape_754.setTransform(603.8,155.5,1.179,1.692);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#72A27C").s().p("AgVABQAVgFAVAAIABAKIgrgFg");
	this.shape_755.setTransform(740.8,167.8,1.179,1.692);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#72A27C").s().p("AgCgBIAFABIgCACQgFgDACAAg");
	this.shape_756.setTransform(742.3,175.5,1.179,1.692);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#72A27C").s().p("AgFAAIACAAQADAAAEAAIACABg");
	this.shape_757.setTransform(735.7,201,1.179,1.692);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#72A27C").s().p("AgPAEIAFgEQABAAAAgBQAAAAAAgBQAAAAAAgBQgBAAgBAAIALgBQANgBADAEIgQAEQgIACgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_758.setTransform(740.4,200.3,1.179,1.692);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#72A27C").s().p("AgQAAQAIgCAHgCIASAHIgJACg");
	this.shape_759.setTransform(694.1,236,1.179,1.692);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#72A27C").s().p("AggAdIABAAQACgQgbgOIABgDQAYgFAegPQALAIAjgXIAMgBIgYALIACAAQgMAHgJAMQgUABgCALIAXgCQAIAKAPgBQgWANgRATg");
	this.shape_760.setTransform(731.5,104.5,1.179,1.692);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#72A27C").s().p("AgTACIAJgEIAeAEQgUgCgSADg");
	this.shape_761.setTransform(724.3,95,1.179,1.692);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#72A27C").s().p("Ag1gDQAJgBAIgCIgRgGQASgCAPgGIBDgDQgRAFgPgCQAAACAnARQgPAMgKANQgMgMhGgPg");
	this.shape_762.setTransform(730,126.3,1.179,1.692);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#72A27C").s().p("AgDAKIAEgVIADAXg");
	this.shape_763.setTransform(728.2,85,1.179,1.692);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#72A27C").s().p("AgnAOQAggKAYgSIAXAKQgTABgHABQgKACAVAIQgdAAgiAHg");
	this.shape_764.setTransform(737.8,130.5,1.179,1.692);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#72A27C").s().p("AgsAJIANgQQAQgBAiAAQACAGAYAGIhLAEQAGgIgDAAQgEgBgMAKg");
	this.shape_765.setTransform(733.8,179.9,1.179,1.692);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#72A27C").s().p("AgoAIQA+gvATAuIgBAAIgjABIgFgBIgBAAIgBAAIAAACQgVADgNAEIgEgIg");
	this.shape_766.setTransform(739.1,144.9,1.179,1.692);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#72A27C").s().p("AgFAAIAFgCIALACIgVADg");
	this.shape_767.setTransform(730.2,203.9,1.179,1.692);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#72A27C").s().p("AAIgJIAFAAQgNAJACAJIgOABg");
	this.shape_768.setTransform(730.9,150.7,1.179,1.692);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#72A27C").s().p("AAFgBIgEACIgEABg");
	this.shape_769.setTransform(728.5,204.4,1.179,1.692);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#72A27C").s().p("AgDgBIAHABIgCACg");
	this.shape_770.setTransform(742.5,174.5,1.179,1.692);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#72A27C").s().p("AAEgFQALgFAGAEQAFADgBAFIgxAHg");
	this.shape_771.setTransform(734.9,150.6,1.179,1.692);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#72A27C").s().p("AhOAmQgHgIADgLQgEAQAggCQARgCASgEQgBgNgSgRQgSgUgBgMIBHARQACgOgUgPQAQABBIAJQgVAMgTATQgTAQgBAIQAKgEAOAHQgwATgWAFQgNADgLAAQgVAAgLgKg");
	this.shape_772.setTransform(761.2,83,1.179,1.692);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#72A27C").s().p("AgHgBIAPABIgFACIgKgDg");
	this.shape_773.setTransform(752.8,113.4,1.179,1.692);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#72A27C").s().p("AgcALQAOgGAZgOIASgCQgMAJgKAMQgLACgKAAIgOgBg");
	this.shape_774.setTransform(762.3,115.3,1.179,1.692);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#72A27C").s().p("AgMgIIAZAMIgGAFQgKgHgJgKg");
	this.shape_775.setTransform(754.9,65.9,1.179,1.692);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#72A27C").s().p("AgZABQAKgJAKACQAFABARAJIAIgEIgPgJIAQABIAAAMIgFACIAEACIAAACQgPgEgjgFg");
	this.shape_776.setTransform(741.4,113.7,1.179,1.692);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#72A27C").s().p("AgHADIAHgFIAIgBIgBAHQgHAAgHgBg");
	this.shape_777.setTransform(742.8,125.2,1.179,1.692);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#72A27C").s().p("ABOAcQgOgDgegCIAUgQQgnAAgjAMIhHgFQAJgCgGgIIA7AFQgJgCgPgFIgZgFIBFgWIhhAGQACgFAFgEQATgLAHAAIgFgBQAbgHAzAJQAKACBMATQhDAGgCAKIA4AKQAyAOgXAHIAHAEQguAHgoADQAWgQAjAAg");
	this.shape_778.setTransform(763.2,105.6,1.179,1.692);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#72A27C").s().p("AgJABIAFgBIAOAAIgOABIgFAAg");
	this.shape_779.setTransform(763,136.6,1.179,1.692);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#72A27C").s().p("AhPAbQAFg7AxgBQAggBBJAgQgjAJgTAIQgVABgdAGQgdAGgRAGg");
	this.shape_780.setTransform(759.6,128.5,1.179,1.692);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#72A27C").s().p("AACgBQALgIAHgCIgNAJQgHADALAEIgUAHIgKAAIAVgNg");
	this.shape_781.setTransform(774.3,66,1.179,1.692);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#72A27C").s().p("AgLAHQAJgHAMgHIABADIgTAMg");
	this.shape_782.setTransform(758.3,64.7,1.179,1.692);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#72A27C").s().p("AgXAHIAwgPQgKAIgCAHIglACg");
	this.shape_783.setTransform(764.5,67.1,1.179,1.692);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#72A27C").s().p("AAEAAIAAAAIgHABg");
	this.shape_784.setTransform(783.1,109.6,1.179,1.692);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#72A27C").s().p("AAAgDIABAFIgBACg");
	this.shape_785.setTransform(763.5,53.9,1.179,1.692);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#72A27C").s().p("AgxABIAQgCQADgCgUgEIAKgCIBbAJIhPAKg");
	this.shape_786.setTransform(773.7,169.1,1.179,1.692);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#72A27C").s().p("AABgBIAEABIgKABg");
	this.shape_787.setTransform(762.5,171.6,1.179,1.692);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#72A27C").s().p("AgOADQALgGAEgBIgBABQAGAFAJADg");
	this.shape_788.setTransform(762.4,157,1.179,1.692);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#72A27C").s().p("AgJAAQAHgFAHgCIAAAAIgGAGQgGAAAPABIACAJg");
	this.shape_789.setTransform(743.5,148.1,1.179,1.692);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#72A27C").s().p("AguALQAIgFAaAAQAYAAAGgEIgSABQgOAAgBgDIAXgHQAEgCgOAAIAQgHIAhAKIgWAUQgQgFgnAIQgIgCgIgEg");
	this.shape_790.setTransform(760,153.1,1.179,1.692);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#72A27C").s().p("AgUAAIAMgFIgOAFIgbgLIBjAAQgaALgVAMg");
	this.shape_791.setTransform(767.7,146.8,1.179,1.692);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#72A27C").s().p("AgZAMQgKgFAPgVIAyAOQgcAPgOAAQgIAAgFgDg");
	this.shape_792.setTransform(757.6,149.9,1.179,1.692);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#72A27C").s().p("AgIADQAEgEAEgGQAFACAEADIAAABQgGgDgDAEIAHAHIAAABIgPgFg");
	this.shape_793.setTransform(858.2,145.3,1.179,1.692);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#72A27C").s().p("AAAACIAAgDIABABIgBACg");
	this.shape_794.setTransform(855.7,150.5,1.179,1.692);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#72A27C").s().p("AgBACIgCgCIAHgBQABADgFAAIgBAAg");
	this.shape_795.setTransform(857.4,147.7,1.179,1.692);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#72A27C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_796.setTransform(856,148.8,1.179,1.692);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#72A27C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_797.setTransform(855.9,149.7,1.179,1.692);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#72A27C").s().p("Ah4AwQAHgDgEgJQA8gSBWgjIBcgoQAEAzikAwIgCgHIgeAQIgbAHQgNgBgJgJgAAdAAIAQABIAFABIgCgCQgRgIABgBIgOAAIgCABQgGAEgDAEIAGABIAPgBgAAigQQAEAKAGgLgABCgPIgBgCIgJAAQADABAHABg");
	this.shape_798.setTransform(829,149.4,1.179,1.692);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#72A27C").s().p("AhjAiQgBAAAAAAQAAgBAAAAQAAgBABAAQABgBABgBIAPgGQgFgTgGgFIATAMQgVgVAmAJQgEgFgQgIIgdgOQAlgEAJgOQAhACAnASIBAAaQAKAKAVAJQgKAYg+ACIgHAAQgtAAhSgMg");
	this.shape_799.setTransform(836.4,186.5,1.179,1.692);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#72A27C").s().p("AAAAAIAAAAIAAABg");
	this.shape_800.setTransform(858.5,152,1.179,1.692);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#72A27C").s().p("AgRAIIgpgNQAxgNBDAAIAAAGQgYALgOAUQgOgBgXgKg");
	this.shape_801.setTransform(585.8,215,1.179,1.692);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#72A27C").s().p("AgJgFIAUACIgUAJQgCgGACgFg");
	this.shape_802.setTransform(573.8,221.1,1.179,1.692);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#72A27C").s().p("AgRACIAAgEIAcgBIAHADIgZAEg");
	this.shape_803.setTransform(597.9,227.4,1.179,1.692);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#72A27C").s().p("AhDAHQAAgRAKgHQAHgBAUgPIBigGIhtAlIApAJIgNAGIgqgDQAJAMgOADIAGADIgLAMIgCghg");
	this.shape_804.setTransform(557.3,194,1.179,1.692);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#72A27C").s().p("AgcAEQAAgEADgBIATgGQANADAOgBIAIACQgMADgtAIg");
	this.shape_805.setTransform(552.8,219.7,1.179,1.692);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#72A27C").s().p("AgZAGIARgSIAiARQgHAIgOAAQgLAAgTgHg");
	this.shape_806.setTransform(556.2,204.5,1.179,1.692);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#72A27C").s().p("AAtAiQAKgFgLgHQACgGgFgFIAIgCIgJgHIgCABIACAHQgLgLghgHIghgFQAAAGABAFIg4gMQADgNBFgJQAYAMAIABQAHAJARAIQAQAGASABIgBADIAJgCQAJABAFgBIABAcIgrAHgAAzAIIAIgBQgLgHgCAAQgBABAGAHg");
	this.shape_807.setTransform(581.7,196.3,1.179,1.692);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#72A27C").s().p("AgCAAIAAgCQAHACgDACIgCABQgBAAgBgDg");
	this.shape_808.setTransform(566,111.1,1.179,1.692);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#72A27C").s().p("AAAABQAAgEgCgBIgCgEQAGAIABACQADAFgEACg");
	this.shape_809.setTransform(569.9,124.6,1.179,1.692);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#72A27C").s().p("AgCAAIAEgDIABADIgFAFg");
	this.shape_810.setTransform(575.7,125.8,1.179,1.692);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#72A27C").s().p("AgFAAIAEgCQABACAGADQgGgCgFgBg");
	this.shape_811.setTransform(574.4,131.1,1.179,1.692);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#72A27C").s().p("AgDgDQAEADADAAIgEAEg");
	this.shape_812.setTransform(570.7,127.1,1.179,1.692);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#72A27C").s().p("AgBgDIAGAGIgJABQABgEACgDg");
	this.shape_813.setTransform(571.9,145,1.179,1.692);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#72A27C").s().p("AgGAAIANgCIAAAGQgHgCgGgCg");
	this.shape_814.setTransform(545.8,154.3,1.179,1.692);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#72A27C").s().p("AAAgDQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBACAAACQgBgDABgEg");
	this.shape_815.setTransform(555.4,134.5,1.179,1.692);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#72A27C").s().p("AhQCbQARAXAXAKIgFAAQgDAHAAACQAAAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQAAADAIgCQAEgCAGgFQAIADgEACIgiAMQAJgKgTgJQgSgJgJACQALgNgEgEQgDgEgSAHQAVgJgWgJQAYACAPgHQAUgHAMgCQgOgHAAgEQABgEAQABQgZgQAogKQgpgUgBgFQAOgKAOACQATACALgEQgPgJgOgFQgUgFgKAKQAJgNADgCIgUAIQAKgJAAgPQADgCArAAQgBgKgLgRQgMgTAAgKIAmATQABgIgSgYQgSgVgDgBQAWgLgBAAQgOgIgGgOIAoAeQAKgKgLgGQgIgFgIAAQAXgDgPgYQATAJgJgVIAMASQgFgLADgiQADghAFgMQgBAOAHAZIANAjIgBAAIAEAMQgFgDABgFQgIAhAKgIQgQAYAIAIQAHAGAZgSIAhgXIgJAHQgGAGAHADQgQAEgPALQAMAAgRAGQgSAGAjAAQgEAEgVABQgSABgBAMIAagGQAWgDADAHQgDgGgRATQgRATgCAGQARgIAWALQAMAGAYANQgLgFgLAFQANAEgFABQgJAEgCAEQgkgJAJAdQAJAdAYAKQgTAEgDABQgCABANAIQgKAAgGABIgGgxQgRAzgEAwQgJgdgXgTQAMAhgNAMQgVANgOANQgGAAAqAGQAqALgbATgAAnA1QAAANANAAQABgGgHgGIgHgDg");
	this.shape_816.setTransform(560.9,101.9,1.179,1.692);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#72A27C").s().p("AgeAQIAAABQhCgXAugbQgSAGgQgIIAZgBQARgBAJgFQAwATAYAOQAyAagEAagAgMABQAFgGgEgEIgKAJIAEgFQAAgEgOAJIAKAAQAFAKAEgJgAAHABQgBgHgEgDQgCgDgGACQADAKAKABIAAAAg");
	this.shape_817.setTransform(556.8,145.6,1.179,1.692);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#72A27C").s().p("AgRAKQgIgFgGgDQAJgJAegCQAUAIAEAEIgCAAQgNgDAAAFIgDAAIgEgCIACACIgNADIAAgBQgcgNAOAQgAABACQAEgCACAAIgHgCg");
	this.shape_818.setTransform(575.5,143.5,1.179,1.692);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#72A27C").s().p("AgRACQgEgCgCgEQAsgCgSADQAPgCAGAFQgQAGgKAAQgJAAgGgEg");
	this.shape_819.setTransform(574.6,137.7,1.179,1.692);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#72A27C").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAg");
	this.shape_820.setTransform(552.8,158.1,1.179,1.692);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#72A27C").s().p("AgWAXQgWgKgQAGQABgIANgOQANgQATgQIAAAAQBNgFgoADQAGAHANAAQAOgBAFADQgEAHgFgDQgFgCgBALQADgEAFADQAEACAAAFQgQgBgHABQgOACAGALQgPgHAAABQABAEgNAAQgBAUAggDQgPANgEAHQgDgBgfgPgAALAiQAGgZgOAOIAAAAg");
	this.shape_821.setTransform(576.1,160,1.179,1.692);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#72A27C").s().p("AAAAAIABAAIAAAAg");
	this.shape_822.setTransform(576.1,151.7,1.179,1.692);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#72A27C").s().p("AgjgMQAZADAZgIQAEAHAQAKQgDADAAAHIAEAEIgHAEQhCgaACgEg");
	this.shape_823.setTransform(578,176.5,1.179,1.692);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#72A27C").s().p("AAgAPIgYgFIgBAAQgFgIgBgCIgBgCQgJACgHgBQAAAAgBABQAAAAgBAAQAAAAgBgBQgBAAgBAAIgNgDIAFgCIANgFIABADIAEgBIgDgCIAIgEIAEAFIALgCIgBAEQAcAYgCAAIgCgBg");
	this.shape_824.setTransform(584.1,174.3,1.179,1.692);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#72A27C").s().p("AgIAGIAQgLQgBAFACABQgHAFgHAAIgDAAg");
	this.shape_825.setTransform(579.1,165.7,1.179,1.692);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#72A27C").s().p("AAAgFIAHABIgEAFIgJAFg");
	this.shape_826.setTransform(551.1,183.9,1.179,1.692);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#72A27C").s().p("AAAgKIAFADIgCADIgDADIAAABIAAAAIgEALQAEgLAAgKg");
	this.shape_827.setTransform(550.4,172.6,1.179,1.692);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#72A27C").s().p("AAAgBIACABIgDACg");
	this.shape_828.setTransform(553,173.1,1.179,1.692);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#72A27C").s().p("AgMAAIADgCIAWAFg");
	this.shape_829.setTransform(560.1,196.5,1.179,1.692);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#72A27C").s().p("AgCACIgBgCQADgFAEADQgDAAgBAGg");
	this.shape_830.setTransform(550.6,245.6,1.179,1.692);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#72A27C").s().p("AgBAPIgsgDIARgaQAPAGAaAIQAaAGAHADQgTAGgXAAIgFAAg");
	this.shape_831.setTransform(558.1,176.3,1.179,1.692);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#72A27C").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_832.setTransform(550.5,172.4,1.179,1.692);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#72A27C").s().p("AgbAEIAAAAIAAAAgAgYgCIA0gBIAAABIgFACQgxACgBACQABgEACgCg");
	this.shape_833.setTransform(581.8,251.7,1.179,1.692);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#72A27C").s().p("AgEgJIAIACIABARQgIgKgBgJg");
	this.shape_834.setTransform(591.8,135.4,1.179,1.692);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#72A27C").s().p("AgCgCIAEABQgBACgBABg");
	this.shape_835.setTransform(592.3,149.6,1.179,1.692);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#72A27C").s().p("AgQAAQAPgGAPAAIADANg");
	this.shape_836.setTransform(589.1,150.3,1.179,1.692);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#72A27C").s().p("AgCAAIAFgCIgFAFg");
	this.shape_837.setTransform(595.5,179.5,1.179,1.692);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#72A27C").s().p("AgLACQAPgIAFAAIADAMIgSABg");
	this.shape_838.setTransform(589.9,153,1.179,1.692);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#72A27C").s().p("AgQgPQgEAPAlgFQABALgBAKQgmgNAFgSg");
	this.shape_839.setTransform(590.8,144.3,1.179,1.692);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#72A27C").s().p("AgBgBIACAAIABADg");
	this.shape_840.setTransform(592,158.6,1.179,1.692);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#72A27C").s().p("AgDAAIAAAAIAHgBIABADg");
	this.shape_841.setTransform(591.4,156.6,1.179,1.692);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#72A27C").s().p("AgCAAIAFAAIgCABg");
	this.shape_842.setTransform(582,162.7,1.179,1.692);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#72A27C").s().p("AgHAAIAJgEIAGAJg");
	this.shape_843.setTransform(588.8,168.2,1.179,1.692);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#72A27C").s().p("AgBACIABAAIAGgNQAHAFgTASg");
	this.shape_844.setTransform(596.3,163.1,1.179,1.692);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#72A27C").s().p("AA4CEIAAAAIgBAAQgUgCgkgVIAQgEIgVACIgKgFQACADgBADQggAFgBAFIgOABIAVgkQgOADgKAJQAGgNAAgRQgUAMgKAXQAFgNADgQIACAAIgCgBQAIgqgMgjIAUAEQACgPgigRIgJgOQgHgBgBAHIgPgFQAagJgCgBQgSgGgJgNIA1AbQAOgLgWgFQgXgDADAAQAHgHAMgGQAHgHgGgQQAMAJAEAPQADgbAIgXIADAbQADAQAFAJIAKgJIAKgKIAAAQIAQgJQgNALgHAJQgQASAIAFQAJAGATgLQAMgGASgPIACABQgIAFAKADQgSAEgOAJQALAAgDACIgRAHQABADAKAAIALgBQgCADgYABQgVABgBAMQAFAAAjgGQgRAEgOAHIAWAFQgQALgMALQgNAMgBAHQAGgDAIACIgIABIAKAAQAHACANAHQAMADAJgLIAAgEICGgIIhMAZIADgDQADgEgMgFQgLADgJAFIADALIgNAEIApAMQAYAHAPADIgMgBIAAgBIgCABIgHgBIACgCIgIABIABABIhEgFQAJAMgOADIBPAqQgHAIgNAAIgGAAgAAEBMIABgHQgMgCACAAQADgDAEgEQAFgDACgCIgKgBQgSAIgRgDQAAACAVAJQgHgEgDgGgAAQAuIADAGIADAAIACgLgAADA0IAIAAIAAgEgABVAZIgJABQgGAGABACQgBAAAAAAQABAAAAAAQAAAAAAAAQABgBABAAQAAACALgDIANgFQgCgDgHAAIgDABg");
	this.shape_845.setTransform(606.1,136.8,1.179,1.692);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#72A27C").s().p("AAVASIgSgOQgPgMgIgEIAbgFQANAXACAMg");
	this.shape_846.setTransform(589.6,173.8,1.179,1.692);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#72A27C").s().p("AgDgBIAFgDIACAJg");
	this.shape_847.setTransform(591.2,166.5,1.179,1.692);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#72A27C").s().p("AgPgJIAUgCIgQgHIAQgBQAIAJADAeQgFgCgagbg");
	this.shape_848.setTransform(590.4,187.2,1.179,1.692);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#72A27C").s().p("AgJgHIAKgBIAJAQQgJgKgKgFg");
	this.shape_849.setTransform(587.6,187,1.179,1.692);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#72A27C").s().p("AAFgDIAMADQgRAEgQAAIAVgHg");
	this.shape_850.setTransform(618,130.4,1.179,1.692);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#72A27C").s().p("AgJgNQAfgGAIAHQgFgEgQALQgQALgCAJQgMgCgJAEQABgKAUgUg");
	this.shape_851.setTransform(629,112.7,1.179,1.692);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#72A27C").s().p("AgSAIIAGgFQgEgBABgIQAUAJgEgGIgFgNIAQAMQAJAJgCAMg");
	this.shape_852.setTransform(621,102.3,1.179,1.692);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#72A27C").s().p("AgHAAIAPAAIgIACg");
	this.shape_853.setTransform(606.9,136.7,1.179,1.692);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#72A27C").s().p("AAAABIAAgCIABADg");
	this.shape_854.setTransform(627.4,145.8,1.179,1.692);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#72A27C").s().p("AAAgCQAFAAgGAFQgBgBACgEg");
	this.shape_855.setTransform(615,141.8,1.179,1.692);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#72A27C").s().p("AABgEIAQgFIgKAGQgGADAJABQgLADgPAGg");
	this.shape_856.setTransform(632.6,104.8,1.179,1.692);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#72A27C").s().p("AgIAAQAEAAAGAAIAKAAQgFABgSAAg");
	this.shape_857.setTransform(630.1,108.8,1.179,1.692);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#72A27C").s().p("AAAgBQAGAAgBABIgJACg");
	this.shape_858.setTransform(630.2,107.4,1.179,1.692);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#72A27C").s().p("AgBAGQgggNgEgBQAPgFATAFQAJACAXAHIABgDIABAEIAHACIgEADIgCAAIAAACQgGADgHAAQgJAAgLgGg");
	this.shape_859.setTransform(632.6,117,1.179,1.692);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#72A27C").s().p("AgIgIQAQgBAWAAIAiAJIgCABQgfAGg0ACQgGgFgMAFIgYABQAegIAZgKg");
	this.shape_860.setTransform(483.5,232.2,1.179,1.692);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#72A27C").s().p("AgZAMQAKgEgmgKQAGAAAAgGQgHgBgjAFIAigIIAAACIBKgEQAzAAAUAOQgUAMghADIgPAAQgUAAgbgDg");
	this.shape_861.setTransform(496.5,237.7,1.179,1.692);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#72A27C").s().p("AgSAIQAQgIAEgFIARgCIgjAPg");
	this.shape_862.setTransform(477,217.6,1.179,1.692);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#72A27C").s().p("AAGAFIgYgKIAkAJIABACg");
	this.shape_863.setTransform(463.6,219.5,1.179,1.692);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#72A27C").s().p("AgKAAQAMgCAJACQgEACgGAAQgEAAgHgCg");
	this.shape_864.setTransform(463.9,226.9,1.179,1.692);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#72A27C").s().p("AgegFIA1gEIAJAKIgcAJg");
	this.shape_865.setTransform(460.5,216.6,1.179,1.692);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#72A27C").s().p("AgDgCQAJAAgDAFg");
	this.shape_866.setTransform(453,228.6,1.179,1.692);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#72A27C").s().p("AgagHIAHAAQAZAJAVAGIg1gPg");
	this.shape_867.setTransform(456,233.2,1.179,1.692);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#72A27C").s().p("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AJADAPgGQAFgCAIgFIAGgDIAAgBIAXgQQANgIAGgCIgMAIQgHAGAKADQgLADgNAGIgNAFIgDACIgBABQAOAAgEACIgVAIQABAEALAAIASgBQgFAEgfABQgZABgCAOQAGAAAigGQAjgEAPAGQgMgEgUAKQgRAIgUAQIAAAAQgNALgKALQgJALgBAGQAKgEAaAMQAUAKAMgRQARgYANACQASgIAcACQAeACAQgEQgggKgUgIQgkgPAIgWQgFARAhgCQARgBASgFQgBgMgSgUQgSgUgBgMIBJARQACgRgigSQgEgCgqgSQAfgLgCgBQgXgIgKgQIBAAhQAQgMgZgHQgcgDADgBQAJgIAPgIQAIgIgHgTQAPAMAEARQAEgfAJgeIAFAhQADAUAHALIALgMQAJgHADgFIABATIATgKQgPANgKALQgUAVALAHQANAJAfgUIArgbIgNAIQgGAGAKADQgVAFgUAMQANAAgDACIgVAIQAAAEAMAAIARgBQgEAEgfABQgZABgCAOQAHAAAigGQAhgEAPAGQgUgHgpAfQgmAdgCAPQAKgEAaANQAUAKAMgRQANgTALgDIADAAQADgBAEACQAEABAIAEIAeAPQgPADgrAWQgkASgZgDQgBADBFAcIgCALQgHACAGAEIgBAHIgJABQgGgJgJgHQAEAKABAHQg6AFgCAKQAFAAAhAIIgIAGQgDABAdADQAbAHgSANIhDgiQAMAQAYAIQACABgiAMIAbALQAWAJAMAJQgeAEgOAKIgLgDQAAAHADAEQgEAGACAHIAIgEIATAXQALANABALQgUAFgRABQgiACAFgRQgHAXAkAQQAVAIAhAKQgPAEgjgCQgegCgWALIAuAKQgIAAgTAKQgRALgJAAIB3gHIhIAYIAaAHIAaAGIg+gEQAGAGgIACIAzAcQgJALgYgKQgZgNgHgCQAMAOhWgEIARALIgSAKQA+gTgoAjQASgEAiANQAiAMATgEQAEAEiVAYQAZAJAagGQgJAEAeAeQAfAfAcAMQgkgBgrAIQg/AKgYADQAYAJAbgBIABgGQACAXAVgMIgQANQgEADAUACQgeAHgLAfQAXgQAEAJQAEANALgCQABADgEADIgGADQADAGAqgMQArgMAJALQABAChDAPIhJAPQAGgCAiAEQAiAFgBAFQgFANgogDQgegCgOgGIA0AZIglADQgRACgPAKQAfgEAYAJIgnAHQAFAAAKAJQALAJAHABQgCAFgTABQgUABgBAEQASgEgLAMIAbgEQgIADgDAFQgDAFAKAGQAHAEgIAGQgFAOgOAEQgKADgTgCQgGgFgCgHQAVAAAFgCQAPgFgGgTIghAMQgVAGgMgEQACgFgBgHIgEAAQgDgFgegJQAYgJAYgPQAbgSgCgJQgDgJgbAKIg0gWIAGgGQABgLgKgDQAPgEAfgQQAdgQARgCQgigUgKgCQgQgFgSAbQgNASgWgKQgbgNgKAEIABgDIAEgJQARgWAfgUQAigYATAGQgPgGggADIgqAHIAMgOIAbgCQAQgBAFgEIgRABQgNAAAAgEIAVgJQAEgCgPAAQAWgMAWgFQgLgDAIgGIAMgJQgGACgYAQQgZARgMAFQAUgagNAAQgMAHgUARQgIgIAUgVQAKgLAPgNIgUALIAAgUQgEAFgJAIQgIAHgEAFQgJgPgDgeIAMgFQgEgEgKgBIgBgMIgEANIgOACQAEgcgBgMQgCgQgIACQgWAegFAhQgXAHgDgGIACgBQgeALgFALIA5gLIAAAZQgNADgIAHQAPgBAHgEIABAIIgIAGIAJABIADALIgOgHIgLgIIAAADIgTgLQAJAMALAHIADAMIgGACQgIgFgIgCIAGALIgDABIAFACIAaAsIgSgEQgJgJgGAGQAAAFABAGQgHgFgJABQgMAJAfAYQAbAVALADQADABABADQgWAFgRABQgeABAEgQQgHAZAsAQIAEAPQgagagjgHIAfAkQgPACgPAHQAVAFAYAEQgGABgOAHQgRAKgHACQgtgWAFgCQgLAGAZAaQgegWgjgFQAKAcAcAGQgagFAtAPQBAAVAIAGQgLgCgJAEIgEgCQAAAAAAABQABAAAAABQAAAAAAABQgBABAAAAIgDACQgIAEgeABQgUAAgNgBIgUgGQgCAKAYAPIgEACIAFgBQALAGAMAFIgCADQg5gVACgFIAAAAIAAAAQgHANArAVQAgAOAkAKIgDABQgFgBgGADQhJANgGAAQAZAKAagHQgHADAYAaQhVgPACgFQgEAIAmAQQAeALASAEQgGAAgegJgAgfDsQAAgFgDgDQgYgCgKAEIAlAGIAAAAgAG6CZQgBgJgKgGQgWABgLAGIAsAIIAAAAgABhCEQAGAGAcgHIghgDgAg1BdQgKABgVAGQARAHgSACIgkACQAIADAJABQBKgOgBgDQgEgGgMAAIgGABgAlpBXIADADQAtgIgCgCQgLACgPgDQgUAFAAADgAlwBHIgMgEIgHADIATABgAFgAdIABAAQABgBA0gDQAkgIAAgDIAAAAIguABIgYAGQgMAEgGgBIgBAFIgBAAgAi0g7IAtASQgVABgFACQgLACAVAJQgXABgZADQgoAGgCAHIgBABIABAAIAsAJIAIABQAhAIADAGQABAEgIACIABABIBAgKQAigFAgABQgUgIgWgSQgVgSgLgPQgIgLAFgDQgYAHgZgJQCDgVAHgFQgSADgggMQghgMgQAEQAhgegqALIARAIQgPADgrAWQgkASgZgEQAAADAvAUgABkAWIArgHQgiAAgJAHgADAAIIAhAAQgKgFgPgIIgPAEQALAHgHgCIgBgBQgCAAAGAFgABXgSQApAFA8gCIgYgWIgCgBQALAOgeADQgSACgqgDIgUgBQAFADATACgAFUgSIAGgEIgZgBQAFADAOACgAB+hPIAYgCIACgBIArgFIADABIgBACIAhgGIADgBQAHgCgBgBIgLABQgIAAgNgDIgfgLQgXgGgOADIAIgIQgmACgVAIQgdAKAFASIAkgTQATgHACAMQADAOgJAAQABABAKAAgAFyhlQAIABAAAIIAAAEQgBAIgGAAQAEADAwgHIABAAIAAAAQgUgOgSgTIgSADQg2AKAIAYIAkgTQAFgCAFAAIACAAgAE4i5IAiAHQAlAJAMAGQBBgLgDgDQgSAEghgMQgggMgRAEIAGgGQgxAFgCAJgAG2jgQAXAJAIgKIgxgaQAJgCgGgIIA7AFQgKgCgOgFIgagHIBGgWIhVAFIgdAPIgKAFQgbANgYgDQAAADA+AZQAXgCgFgHIAfAOgAGukwQADgCAFAAIgSgEgAHVGhQgVgDgPAAIAmgGQBEgFAEAaQgsgIgegEg");
	this.shape_868.setTransform(446.6,150.6,1.179,1.692);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#72A27C").s().p("AgHgFIAPAFIgBAGIgDAAg");
	this.shape_869.setTransform(465.7,207.7,1.179,1.692);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#72A27C").s().p("AgGAEIADgUIAJgCQgEAUgCARQgBgIgFgHg");
	this.shape_870.setTransform(469.7,171.8,1.179,1.692);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#72A27C").s().p("AgJAAIADgDIAPAHQgLgCgHgCg");
	this.shape_871.setTransform(531.7,209.5,1.179,1.692);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#72A27C").s().p("AgvATQgCgWBQgSIAAAHQAJAJAIAEQgdAKgWAGQgkgPgDALQgCAFAGAGQgGAAgDgDg");
	this.shape_872.setTransform(532.5,201.7,1.179,1.692);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#72A27C").s().p("AgIgCIAIgBIAJAFIgDABg");
	this.shape_873.setTransform(536.2,206.8,1.179,1.692);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#72A27C").s().p("AgIgCIAHgBIAKAHIAAABg");
	this.shape_874.setTransform(539.5,209.1,1.179,1.692);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#72A27C").s().p("AgEAAIAIAAIABABg");
	this.shape_875.setTransform(537.2,170.3,1.179,1.692);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#72A27C").s().p("AgNAEQAEgFAJgCQAGAEAIAEg");
	this.shape_876.setTransform(523.8,115.5,1.179,1.692);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#72A27C").s().p("AgFgCIALAEIgKABg");
	this.shape_877.setTransform(521,99.3,1.179,1.692);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#72A27C").s().p("AgMAAIAFgBQAKgFAFAEQAFACgBAFg");
	this.shape_878.setTransform(515.5,120.1,1.179,1.692);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#72A27C").s().p("AgEABIAJgCQgEABgEACg");
	this.shape_879.setTransform(526.5,112.8,1.179,1.692);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#72A27C").s().p("AgSAHIgCgDQAOgDAagJIACAIQgUAJgKAAQgGAAgEgCg");
	this.shape_880.setTransform(525,110.8,1.179,1.692);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#72A27C").s().p("AgFgBIAJgCIABABQABACgBAEg");
	this.shape_881.setTransform(316,170.4,1.179,1.692);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#72A27C").s().p("AAGgIQAegIAOALIgUAJQgIgBgYAEIguAFQAngPAPgFg");
	this.shape_882.setTransform(323.4,184.1,1.179,1.692);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#72A27C").s().p("AgIgCIAIAAIAJADIgEABg");
	this.shape_883.setTransform(321.2,195.9,1.179,1.692);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#72A27C").s().p("AAcAUQAVgGgHgRIgqALQgSgFgWAAIALAJQgOgBgKgHQAGgBgDgDQgBgCgIgHIAAgCIA3gNQAdgGAQAFQAGAHAKAGQADAFAAAGQgGAHABALQAAAHgMAEg");
	this.shape_884.setTransform(323.8,171.7,1.179,1.692);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#72A27C").s().p("AgEAAIAJAAIgHABg");
	this.shape_885.setTransform(323,195.7,1.179,1.692);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#72A27C").s().p("AgHAAIAPgDQABAEgJADg");
	this.shape_886.setTransform(326,201.1,1.179,1.692);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#72A27C").s().p("AgkABQAPgFAWADQABgBAFgBIAeAIIhJgEg");
	this.shape_887.setTransform(319.8,148.2,1.179,1.692);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#72A27C").s().p("AgJAAQABgBADgCIAPAEIgKADg");
	this.shape_888.setTransform(326.2,214.4,1.179,1.692);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#72A27C").s().p("AgKgCIAUgCIABAJQgEgEgRgDg");
	this.shape_889.setTransform(329.5,187.3,1.179,1.692);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#72A27C").s().p("AgDAIIASgCIgVgFQAYAFgDgKQgWAEABABIgQgDIAmgLIgFABIAMAHQgDAMgNAHg");
	this.shape_890.setTransform(327.8,198.6,1.179,1.692);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#72A27C").s().p("AgEAAQAHAAACgCIAAAFQgBgBgIgCg");
	this.shape_891.setTransform(330.2,189,1.179,1.692);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#72A27C").s().p("AgTgJIAYgCIAJAFIgGAFIAIAAIgHAAIADABIAFAAIAEgCIAAABIAAABIgpAMgAgJgJQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgCACIAEAEIAGAAQAAgEgBgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_892.setTransform(337.2,187.8,1.179,1.692);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#72A27C").s().p("ABCB7IgCgSQARgJgIgaIglAOQgYAJgOABQADgFAFgBQgUgGgVAAQAfgOiEgdQADgDgBgDIAAAAIAAAAIgVABIgRgDQACgPBUgJIgBADIAUgCIABgCIAngDQghgNARgEQAJgCAhgCIhTghQAGgGgDgHQgCgEgGgBIAGgEQAMgFABAJQACAIgGAAQACACAXgDQAagDAEABIgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBgBQAXAIgFADQAvAGAVgNIADgBIgDgCQgNgIgZAAIgoADIgKAAIABgFQABgGAGgBIgUgHIgCgBQgUAAgRAEQgWAEgHAHIgSADQgagMABgDQAYADAZgGQAUgGAZgNQAIADANgEIAVgHQAEAMgKACQgDACgNAAQACAEADADQAMABAGgBQAJgCACgJQAFgEgFgDQgEgDACgDQACgJAYACIAqAGIA7AQQAUAFgbAXQAZgCATAKQAVAMgUAOIhYgwQAPAaAlASQhSgBgjAMQBUgBAhAQQAnARgMAyIhvgZQAPgBADgEQgIgIgWgCIAAAAQgDAFgFgCQgFgBgCAHIgSgFQACASBJATQBLAUAAASQgMAAgeASQgZAOgMAAIgDAAgAAaBWQAAgCgIgNQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAJALIAAAAgAAQBCIAAgEIgIACIAIACgAgdBCIAKgFQgEgBgFgBg");
	this.shape_893.setTransform(370.4,186.4,1.179,1.692);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#72A27C").s().p("AghACQAkgcADAJQgEgNgwAGIg1AJQAGgbA6ADQAhABBBAIQAnAUgCARIhNgQQABAJANAPQhQANgeAMQACgIAmgeg");
	this.shape_894.setTransform(407.8,190.6,1.179,1.692);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#72A27C").s().p("AgdAPQADgKAogUQALALAFAHIg7ANg");
	this.shape_895.setTransform(411.3,197.5,1.179,1.692);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#72A27C").s().p("AgBAOQgcgDgUABQgBgFAIgEIAFAEIAMgBIgQgDIAWgGIABAAIgBAAQAFgCgIAAIgEgDQAXgNAZAEQANAMAPADIggAKIAcALIgvgFgAAAAGIgMgGIgRAAQgBAAAKAGIAUAAg");
	this.shape_896.setTransform(407.8,180.7,1.179,1.692);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#72A27C").s().p("AgBAAIABAAIACABg");
	this.shape_897.setTransform(368.6,144.2,1.179,1.692);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#72A27C").s().p("AAAgBIABgBIgBAFg");
	this.shape_898.setTransform(377,205.4,1.179,1.692);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#72A27C").s().p("AgOAFQgIgFABgFQAVAAAWADQgWAIgJAAQgDAAgCgBg");
	this.shape_899.setTransform(399.4,179.7,1.179,1.692);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#72A27C").s().p("AgEgGIAKAHIgKAGQgCgHACgGg");
	this.shape_900.setTransform(352.4,219,1.179,1.692);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#72A27C").s().p("AgOACIADgCIABABIAAgBIANgEIAAAEIAMgHQgLAHgEAIQgNgBgBgFg");
	this.shape_901.setTransform(358.4,137.2,1.179,1.692);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#72A27C").s().p("AgFgHQAHAGADAIIgJABQAEgGgFgJg");
	this.shape_902.setTransform(354,135.4,1.179,1.692);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#72A27C").s().p("AgWA6IgUgJQArgMgCgHQgEgHg9AQIgFgBQAvgRgFgJQABADgPAEIgagJIATgRIABAAIAAgBQAoglAjgPQANAAAGACQgOgEgbAUQgXATgBAKQAHgDAOAJQAOAGAIgLQAMgRAJADQAHACAVAMQgKABgcANQgXAMgOgDQgBADAiAOIgRAWQgaADAAAFIAKADIgFAAQgGAAgIgDg");
	this.shape_903.setTransform(358.7,154.3,1.179,1.692);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#72A27C").s().p("AgGgBIARABIgVACg");
	this.shape_904.setTransform(350.1,158.5,1.179,1.692);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#72A27C").s().p("Ag0AOQALgHACgHIAHAEQAGgEgDgCIAcgBQgFAGAFADQAGAGAVgMIAbgQIgHAFQgFADAHACQgQAEgLAFIAHABIgIADQgUACgaAFQABgEgBgCQABADgLAEIgJACg");
	this.shape_905.setTransform(357.9,140.4,1.179,1.692);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#72A27C").s().p("AABgRQADAYACAGIgLAEQADgRADgRg");
	this.shape_906.setTransform(355.7,133.4,1.179,1.692);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#72A27C").s().p("AgBAAIABABIgDgBIAHgDIgBAHg");
	this.shape_907.setTransform(374.1,207.3,1.179,1.692);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#72A27C").s().p("AgEAAIgCgCIAGAAIAHAFg");
	this.shape_908.setTransform(374.4,225.3,1.179,1.692);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#72A27C").s().p("AAAAFIACAEIgBAAIgOgIQADgEAFgEQAbAFgMAKIgIABg");
	this.shape_909.setTransform(374.1,217.1,1.179,1.692);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#72A27C").s().p("AgGACQADgCAAgDIAGADIAEAEg");
	this.shape_910.setTransform(371.2,234.1,1.179,1.692);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#72A27C").s().p("AgJACIgPgDIAUABIAdACIAAAAg");
	this.shape_911.setTransform(368.6,237.6,1.179,1.692);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#72A27C").s().p("AgGgEIANAEIgHAFQgCgFgEgEg");
	this.shape_912.setTransform(353.9,217.8,1.179,1.692);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#72A27C").s().p("AgTALQgEgNgWAGIghgJQAZgKAngFIAKACIgFgDQAWgDAcgBQAYACACADIAAgFIALAAIABABIgCAHIgDAAIgBAEIgBgEQglAKgBABQALAEATgBIgNAIIARACIgEAKIgugVQANAPAUAHQACAAAAABQABAAABAAQAAABAAAAQAAAAAAAAIgQAFIg6gOg");
	this.shape_913.setTransform(364.7,214.1,1.179,1.692);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#72A27C").s().p("AgZAKQAFgRAsgCIACACIgJAEIABAAQgKAAgIADIASAGIgmAEg");
	this.shape_914.setTransform(360.7,248.4,1.179,1.692);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#72A27C").s().p("AgMgGQAMgDAGAEQAGADABAKQgWgCgDgMg");
	this.shape_915.setTransform(289.6,195,1.179,1.692);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#72A27C").s().p("AhLAWQA0AAACgFQgNgJAGACQAHACgLgJQAVgEAJgBIgRgFQgBgBAJgDQgcADg0gCQg5gBgMgHIBGADQAvgCgOgRQAqANgFgOQgDgGAjAWIABgDQATAHAhAHIApAHQgegDgZASQAAABAlgDIBEgGIAFADIgKAFQgbABgmAGQgzAJgXADIgFgEQBOgEh5AFQhaAFgBACQACgPAyAAg");
	this.shape_916.setTransform(442.2,250.6,1.179,1.692);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#72A27C").s().p("AgcAAQgLgJgEgFQAKABAhALQAaAHASgDQADADg9AKIgOgPg");
	this.shape_917.setTransform(407.9,234.4,1.179,1.692);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#72A27C").s().p("AAAAAIABAAIgBAAg");
	this.shape_918.setTransform(411,269.3,1.179,1.692);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#72A27C").s().p("AgHAEIABgHQAGAEAIADg");
	this.shape_919.setTransform(410.5,252.4,1.179,1.692);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#72A27C").s().p("AgLgLQgDALAMgCQAKgCgTgHIAEABIAKAFQgCAFALACQACAFgCAEIgBAAIABABIAAAAQgegDAHgUg");
	this.shape_920.setTransform(400,216.8,1.179,1.692);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#72A27C").s().p("AgHgCQAKgCACABQAEACgCAFIgGABg");
	this.shape_921.setTransform(404.2,236.7,1.179,1.692);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#72A27C").s().p("AAAAAIAAAAIABABg");
	this.shape_922.setTransform(405.8,269.3,1.179,1.692);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#72A27C").s().p("AAGAAIgLABQABgDAKACg");
	this.shape_923.setTransform(447.9,273.7,1.179,1.692);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#72A27C").s().p("AgZAKIgBgEIgNAEQgcgCgKgEQAUgjBpAdIAeAMIgtAGQgSgFgogBg");
	this.shape_924.setTransform(440.3,278.9,1.179,1.692);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#72A27C").s().p("AiPAiQgDgUA/gPQA3gOAWACIgtgRQABgHAQACQARAJApAFQgOAAgIANIAUgBIgCAEIAFgEIAXgBQABAFACACQAEADAHgBQACABgFACIgGAEQADAGAkgLQAogJAMAEIgKAIQgkAIg6ALIgigMQgOgFAFgLQgWALgyARQgpAOgRAAQgIAAgCgDg");
	this.shape_925.setTransform(444.4,269.3,1.179,1.692);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#72A27C").s().p("AgGAGIAEAAQABgFgFgBQgFgBgFABIAAgBIgDABQADgKAGABQAIABACgBQADAKARgIIgIAHQgKgBAAADIABACQgCADAGABIAGADg");
	this.shape_926.setTransform(449.3,260,1.179,1.692);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#72A27C").s().p("AgnAIIAJgIQAHgHAGgDQANAFASAFIAaAIQgIACgJABQglgIgZAFg");
	this.shape_927.setTransform(412.6,206.9,1.179,1.692);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#72A27C").s().p("AgVgIQAVgJAhgCIAKAIQgFAJgGANIgcAEQgBgFgEgDQgWADgSAKQgEgSAYgKg");
	this.shape_928.setTransform(402.1,251.4,1.179,1.692);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#72A27C").s().p("AgXgJIAXAGQAOADAJAAQADAEgJAGg");
	this.shape_929.setTransform(415.4,179.9,1.179,1.692);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#72A27C").s().p("AgEAAIAKAAQgDAAgJABg");
	this.shape_930.setTransform(406,225.2,1.179,1.692);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#72A27C").s().p("AgUATQgJgHgPgDIgIADQABADAIAAIAKgBIgFADQgTgDgKgDIgBgCQAFADAJgEIgPAAQgDgEgEgCQACgGAfgKQAUgFAagBIAGABQgGAAgRALQgSAIgJABIB2gFIhJAVIAPAEIgngCg");
	this.shape_931.setTransform(409.5,215.3,1.179,1.692);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#72A27C").s().p("AgIAAIAFgCIAMAFQgJgBgIgCg");
	this.shape_932.setTransform(410.2,223.2,1.179,1.692);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#72A27C").s().p("AACAFQgHgDgVgIIAmABIAOAGQgEAGgJAAQgFAAgGgCg");
	this.shape_933.setTransform(411.5,226,1.179,1.692);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#72A27C").s().p("AgPAFIAAABIAAgBgAgHgCIAAAAIAHgBIAAgCQAHAAAJADIgDAEQgcACAAABQABgFAHgCg");
	this.shape_934.setTransform(480.1,256,1.179,1.692);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#72A27C").s().p("AgDAJIAEgSIADATg");
	this.shape_935.setTransform(651.8,97.4,1.179,1.692);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#72A27C").s().p("AgZBeIAegDIAHAEIgEABIANgCIAEgCIgYgHQgSgHgLgFQgNgGgGgGIgGAEQhTgiABgFQAOACAPgCIAKADQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAQARgEAPgGQgNAOAHAFQAGADAMgFQAHgEAMgIIARgLQgHgHgDgEIAPgIIA0AKQABgKgQgNIgFgDQAPgHAPgCQgPgGgSgKIgWgNIgJgEQgNgGgJgKIgEgFIA+AhQARgMgagHQgagDAEgBQAEgEALgHQAJgFABgGIAQAFIAAADIABgCQAKADAMACQgNADgIAMIAAABIAAgBQACgBAmgBQgOASAJAGQAJAGASgHQALgFAVgPIAFAEIgbANQAOAAgEACIgVAIQABADAMAAIARAAQgFADgLABIgVABQgVABgDALIgBACIAZgDQAYgEAPAAQgBADACADQgKADgPAKQg1ADAJgbQgIAVAUAQQgaAAAAAAIAAAAIAAAAQgDAJAZAGQgJAIgDAGQglAFgPAEQgDgIgQgUQgOAGAKADQgPAFgMAHQAJAAgCABIgOAFQABAEASgDQgDAEgSAAQAAAEADADQAZgFALAGQgIgCgMAFIATgBIgBADQAXAMAagBIAAABIATAEQgWAPANACQALACAdgIIAFADIgQAHIhqAKQgGgGAPgCgAhIA0IASgDIAAgHQgRABgBAJg");
	this.shape_936.setTransform(646.2,122,1.179,1.692);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#72A27C").s().p("AgOAJQhGgDgPgGIBYABQA7ABAMgKIgBAGQACgEAOgEQALAKANAKIgtABQgiAAgigCg");
	this.shape_937.setTransform(640.6,190.4,1.179,1.692);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#72A27C").s().p("AgNBFQAWgHgygOIg6gNQABgIAqgGQAbgDAZgBQgWgKALgDQAGgBAUgBQgjgMgdgNIAMgCQgPgGgQgDIAEAFQgQgIABgCQAZAEAfgPIAygaQANABASAGIAeAMQgNgDgKADQAPADgGABQgLADgBABQgJgBgJAEIgPAHQgGAXAqADQgGAEAJAAIgTACQgIABAPAGQgSABgBAGQAAAEAIAIIgHAAIAJAGIAAgEQAIAHgFABQAKAGARgDQAJgCARgGQAEALgLADIgRABQAEAJAIACQgSgDgUABQgZACgPAJQAEAAAKAEQAJAEACADQgQAHgMAAQgLAAgIgIgAAHgeQADAMALgDQACgIgQgCg");
	this.shape_938.setTransform(533.5,142.4,1.179,1.692);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#72A27C").s().p("ABEAwIAMACQgLgNgVgGIgNgKQAXAAACgDQADgEgigLQAHABAAgEQgHgBgnADQgkAFgEgDQAKAAgDgMQgDgNgTAHIglASQgIgZBCgKQA2gIAXAGQgPgEgGgPQASAAAEgBQAOgDABgLQAZgDAEAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAeAIgNACIgeAAIATAEQAMADAHADIAAACQgFgBgDAEIAKAIIAAAAIgggIQgYgFAOAOQgNgHgPgDIALAFIADABQARAIAPADIAMADIgVAEQAIAGgFgCQgFgBAJAFQgBACgHABQgIABgDAFIAjgBIAHAAIAFACIgBAOQgKABAFAJIgBAAQgJgVgDACQgCABADAPQgPgCgCABQgEACAWAIIADANIgGABIgFAEQAFAFAHgEIAFATIgFADQgMgOgLgJgABMAmIgEACIAAABIADADQADgGgBAAIgBAAg");
	this.shape_939.setTransform(535,166.3,1.179,1.692);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#72A27C").s().p("AgUgCQAkgHAFAJQgGgJgRAPIgSgIg");
	this.shape_940.setTransform(536.1,125.9,1.179,1.692);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#72A27C").s().p("AgtAmQgbgNgKAEQABgFAJgMQAKgLAOgKIAMAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgHgCIADgDIAaALQAOgKgkgEQAQgMANgFQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIABgDIAGgDQAAAIACAAQACAAAHgJIACAAIACASIAMgLIABABQgWAZAJAFQAKAEAXgKIAfgRIgIAFQgGAEAIABQgPAEgQAHQAKAAgCABIgQAEQABABAJAAIAMgBQgEADgRAAQgRABgFADQgMAAgPAYQgIALgMAAQgHAAgIgEgAgTAWIgNgKIgYAAQALAEAaAGIAAAAg");
	this.shape_941.setTransform(530.2,123.5,1.179,1.692);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#72A27C").s().p("AAAAAIABAAIgBAAg");
	this.shape_942.setTransform(527.8,115.7,1.179,1.692);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#72A27C").s().p("AgCAAIAAgBQAIABgEABIgCABQAAAAgCgCg");
	this.shape_943.setTransform(534.8,137.3,1.179,1.692);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#72A27C").s().p("AgFABQAAgBALgBQABADgHAAIgFgBg");
	this.shape_944.setTransform(545,161.6,1.179,1.692);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#72A27C").s().p("AgCAKQABgKADgJIABATg");
	this.shape_945.setTransform(530.3,114,1.179,1.692);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#72A27C").s().p("AgOgCQABgHAOACIAAAEIAAAAIAAAAIAOALg");
	this.shape_946.setTransform(539.5,194.3,1.179,1.692);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#72A27C").s().p("AhBASIAAAAIAAAAgAgOADQAxAAACgDQgMgIAGABQAHACgLgJIAMgDQAJAEASAXIhOADQg1ADAAACQABgPAyAAg");
	this.shape_947.setTransform(534.5,183.6,1.179,1.692);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#72A27C").s().p("AADAKQgLgKgIgFQgDgNATgBQARAbAAAMIgOgKg");
	this.shape_948.setTransform(544.5,194.2,1.179,1.692);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#72A27C").s().p("AgQApIAAgBQgEgCgJAGIABAAIgDADIAAgDIABAAQgBgCAEgCQADgDgBgDIgFABQAAgRgDgSIADgBIgDAAIgCgKIADgFIgEACIgJgXIAkgKQAGALAYAgQAXAXACAUQgfAHgaACQgCgGgDgBgAgSgEIgHAEIgCAEIAAABQgDAIADACIACAAQADgBADgFIAFgNIAAgBIgCAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgAgLAGQALgCAAgNQgHAEgBgDQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_949.setTransform(554.8,159,1.179,1.692);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#72A27C").s().p("ABbAmIgYgWQgPgNgMgDIASgBIgQgFQgCgBAJgDQgaADg0gCQg5gBgLgHIBGACQAsgBgOgRQAlALABgIIgCgGQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAdAhQAJAKAKAJQAFAHAEAQg");
	this.shape_950.setTransform(534.3,180.3,1.179,1.692);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#72A27C").s().p("AAJACIgSgCIAOgCIAFAFIgBgBg");
	this.shape_951.setTransform(541.3,197.3,1.179,1.692);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#72A27C").s().p("AgcgUQAZAIARAPQgignAxAdQgFAHgEAKIgDALQgTgVgagUg");
	this.shape_952.setTransform(220.8,188.9,1.179,1.692);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#72A27C").s().p("AADgGQgDAIAAADIgBACQgCAAAGgNg");
	this.shape_953.setTransform(192.2,170.9,1.179,1.692);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#72A27C").s().p("AgCAEQgGgEgCgJQAKgDAEAEQAFAFACAOQgIgBgFgGg");
	this.shape_954.setTransform(194.8,187.2,1.179,1.692);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#72A27C").s().p("AgOAFIAFgGQACgGgEAAQAYgCACAFQgEAEgLAFQgGADgDAAQgEAAgBgDg");
	this.shape_955.setTransform(194,171,1.179,1.692);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#72A27C").s().p("AAJgGQgBAKgQADQgDgHAUgGg");
	this.shape_956.setTransform(199.5,90.7,1.179,1.692);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#72A27C").s().p("AgXgGQANgJAKABIAYABQACAPgZgIQALANAAAJQgjgQAAgGg");
	this.shape_957.setTransform(199.2,86.2,1.179,1.692);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#72A27C").s().p("AASBwQAAAJAGAFIgFgTIAAgBIABADIgUg8QgLgmADgWQgJASgFA0QgGA3AKARIgMgQIAFgCIgJgFIgDgGIABAFQgigRgOAOIAMgOIgUAIQALgKAAgPQACgCATAAIAYABQgBgKgMgTQgLgTAAgLIAlAUQACgIgTgYQgRgVgDAAQAWgKgBAAQgOgJgGgOIApAfQALgLgMgGQgJgFgIABQAagEgRgXQATAIgIgVIAMASQgFgKADgjQADggAEgNQgBAPAHAYIANAlIgBgCIAAABQAAAEADAIQgEgDAAgGQgHAhAJgHQgPAYAHAHQAHAHAagTIAggXIgJAIQgGAFAHADQgPAFgQAKQAMAAgRAGQgSAGAjAAQgDAEgWACQgRABgCAKIAZgFQAXgDAEAGQgDgEgSAQQgRATgBAGQAQgIAWALQANAGAXAPQgKgEgLAEQAMAEgEACQgKADgBAEQgZgGgEAOQgCALALASQgRAXgMARIgEACQgIAAAKgsgAAUBqQABANANAAQACgMgQgEg");
	this.shape_958.setTransform(206.2,64,1.179,1.692);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#72A27C").s().p("AgEAAIAIgBIAAADg");
	this.shape_959.setTransform(188.6,125.3,1.179,1.692);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#72A27C").s().p("AgSgFQACgEANACQgHgFgBgDQAQACAJAIQAMAIgPANg");
	this.shape_960.setTransform(199.9,95,1.179,1.692);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#72A27C").s().p("AgLgTQAAATAJgEQAFgEgEgGIABACQAPAMgDAUQgYAAABgng");
	this.shape_961.setTransform(210,134.7);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#72A27C").s().p("AgPAAIAdgCIACADQgHACgGAAQgJAAgJgDg");
	this.shape_962.setTransform(191.7,110.7,1.179,1.692);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#72A27C").s().p("AgQAFQgQgOAcgQQADAKAJAPIAPAbQgdgMgKgKg");
	this.shape_963.setTransform(194.3,115.6,1.179,1.692);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#72A27C").s().p("AAAAVQAFgCAGgFQAJgLgTgIQgQgIgIACQAKgNgEgEQgDgEgSAHQAVgJgWgJQAPABAIgBIgCABQA+BBgEAVg");
	this.shape_964.setTransform(195.5,105.8,1.179,1.692);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#72A27C").s().p("AgXAFQAfgIANgCIADALIgvgBg");
	this.shape_965.setTransform(194.9,122.8,1.179,1.692);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#72A27C").s().p("AgBAAIgBgCQAHACgDACIgCABQgBAAAAgDg");
	this.shape_966.setTransform(209,82.1,1.179,1.692);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#72A27C").s().p("AgdArQgNgMAZgkQAKgIARgfQALAQANAHQgTADgCABQgCABAMAIQgYAAADAKQADAHAOAQIgDACQAAgFgBgBQgCgBgGABIAHAHQgYARgMAAQgFAAgCgCgAgLAYIALAAIgBgCQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgFAFg");
	this.shape_967.setTransform(210.9,91.2,1.179,1.692);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#72A27C").s().p("AgEACIAJgFIAAACQAAABgDACIACABIgIgBg");
	this.shape_968.setTransform(212.9,96.9,1.179,1.692);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#72A27C").s().p("AASAXIAFgLQgdgPAUAWQgMgJgNgGIAHAGQgfgLgXAKQABgFAKgLQAKgOAMgMQAKgCAVAAQAYABgIABQAWgDAAAPQgPAEgQgBQAAADAUAKQAWAIAEAEQgOgDgBAEQgCACAGAGIgLgJQADAFADAMIgHADQgFACABABIAIADIAEABIgDAAIgCABgAAcAGQACgCADABIgGgFIABAGg");
	this.shape_969.setTransform(215.5,113.8,1.179,1.692);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#72A27C").s().p("AAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_970.setTransform(210.6,95,1.179,1.692);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#72A27C").s().p("AgCAAIADgBIABABIACACg");
	this.shape_971.setTransform(218.9,121.9,1.179,1.692);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#72A27C").s().p("AgIAEIAOgPQADACgBAHQAAADgDAFQgFACAAADIAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQgEAAgEgIg");
	this.shape_972.setTransform(191.6,187.9,1.179,1.692);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#72A27C").s().p("AAHAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAAAIgOACQAKgMAEAIg");
	this.shape_973.setTransform(210.9,153.8,1.179,1.692);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#72A27C").s().p("AgFgFQAIgCACACQACACgBAKg");
	this.shape_974.setTransform(214.6,154.7,1.179,1.692);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#72A27C").s().p("AgBAAIABgBQABgCABADQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBgCg");
	this.shape_975.setTransform(193.7,143.5,1.179,1.692);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#72A27C").s().p("AgDAAIAGgCIgDAFg");
	this.shape_976.setTransform(191,210,1.179,1.692);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#72A27C").s().p("AgPAMIgDgIIAAgBQAAgBgBgBQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEACgIAIQABgMAHgIIADgDIAOADQgBAEACACQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQACAAACgFQARAHATAJQgPAGgOAAIgVgCg");
	this.shape_977.setTransform(195.6,133.6,1.179,1.692);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#72A27C").s().p("AgDgDIAHAFQgEgCgCAEIgBgHg");
	this.shape_978.setTransform(225.5,185.1,1.179,1.692);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#72A27C").s().p("AgXAHQAggCAGgFQgwAAAQgGIAZgLIAEADIABAAQAJADAQgIIAQgIIACAKQgBAJgHACQgEACgMAAQACAEAEAEQAEAFAFACQgOgFgYABQgaACgGAMIggAHQADgSAdgDg");
	this.shape_979.setTransform(212.6,100.8,1.179,1.692);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#72A27C").s().p("AgGgCIAQABIgTAEQAAgDADgCg");
	this.shape_980.setTransform(315.8,165.3,1.179,1.692);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#72A27C").s().p("AAAABIABgDIgBAFg");
	this.shape_981.setTransform(328.5,99.4,1.179,1.692);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#72A27C").s().p("AgDAHIAHgSQAAALgDAMg");
	this.shape_982.setTransform(326,94.9,1.179,1.692);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#72A27C").s().p("AgLAFQgYgGgFgHIgCgEIBVASIgZAHg");
	this.shape_983.setTransform(314.4,119.3,1.179,1.692);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#72A27C").s().p("AgFgCIAFgBIAJAGIgRABg");
	this.shape_984.setTransform(312.6,130.7,1.179,1.692);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#72A27C").s().p("AAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABg");
	this.shape_985.setTransform(328.5,146.4,1.179,1.692);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#72A27C").s().p("AgbADIAAgFQAMgCAFABQAAADgEAAIAHAAIAjgCQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgIABIgFgBIACABIgWADg");
	this.shape_986.setTransform(337.6,176.1,1.179,1.692);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#72A27C").s().p("AgCABIAAgCIADABIACACg");
	this.shape_987.setTransform(334.6,153.3,1.179,1.692);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#72A27C").s().p("AgIgIIAJAEIAFADQAEABgCAFQgNgBgCAFg");
	this.shape_988.setTransform(335.3,173.5,1.179,1.692);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#72A27C").s().p("AgWgDQAcgGAQgBIgMAFQgCgCgHAFQgNAHgIAGg");
	this.shape_989.setTransform(336,121,1.179,1.692);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#72A27C").s().p("AgBAAIADgBIgDADg");
	this.shape_990.setTransform(333.8,124,1.179,1.692);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#72A27C").s().p("AgVAAIAGgBQAYABANAAQgFACgOAAQgIAAgQgCg");
	this.shape_991.setTransform(337.5,114.1,1.179,1.692);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#72A27C").s().p("AgIABIAGgCIALABQgFACgEAAIgIgBg");
	this.shape_992.setTransform(339.5,110.7,1.179,1.692);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#72A27C").s().p("AgUAIIACgPQAIgBAFACQAFABgEAAQANAAAIADIAEAGIghAEIgCAAIABAAg");
	this.shape_993.setTransform(336.6,160.5,1.179,1.692);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#72A27C").s().p("AACgDIACAAIgBAFIgGACg");
	this.shape_994.setTransform(341.2,122.5,1.179,1.692);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#72A27C").s().p("AgJALIAJgPQAGgFAEgBQgGAFABAFIgJALg");
	this.shape_995.setTransform(335,107.7,1.179,1.692);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#72A27C").s().p("AALACIAAAAIgZgCQAKgHATAKg");
	this.shape_996.setTransform(337.2,194.3,1.179,1.692);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#72A27C").s().p("AgRgHIAagEIAJARIgIAGQgSgOgJgFg");
	this.shape_997.setTransform(327.8,117.5,1.179,1.692);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#72A27C").s().p("AgEAAIAEAAIAEABg");
	this.shape_998.setTransform(335.8,201.6,1.179,1.692);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#72A27C").s().p("AAAAAIAAAAIAAAAIABAAg");
	this.shape_999.setTransform(310.4,170,1.179,1.692);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#72A27C").s().p("AgCAAIADgDIACAHg");
	this.shape_1000.setTransform(329.7,111,1.179,1.692);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#72A27C").s().p("AAuAXIgCAJQgRAAgigNIgKgFIAEgDQgcgCgRgMQgPgNABgQIATAEQgGAAgDAGQAAAGA+gGQA/gHAKARQgWALgQgCIAAAAIAJAEQAGgBAJgBQAGABgDAJIALADQgGAUgWAAQAAgDABgGg");
	this.shape_1001.setTransform(322.2,157.1,1.179,1.692);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#72A27C").s().p("AgMgIQABAIAHAAQAHAAgEgDQABAAAAABQAAAAABAAQAAAAAAAAQAAgBgBAAIgMgFQAYgHABAZIgHAAQgQAAgCgSg");
	this.shape_1002.setTransform(310.5,154.9,1.179,1.692);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#72A27C").s().p("AAHAGIgXgDIgGgDIAGgHIAEABQAPAEASAFIACABIgHADg");
	this.shape_1003.setTransform(339.2,130.5,1.179,1.692);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#72A27C").s().p("AgOABQACgGAGgGIACgDIAAABIAEAFQgCAIAAAFIAMgDIAFAHIgOAGg");
	this.shape_1004.setTransform(327.3,105.6,1.179,1.692);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#72A27C").s().p("AA8A7IgXgEQgQgDgHACQAFgegVgLQgVgKg0ABQASgEAngBIAQAAQgNgHgIgHIgIgJIgCgDIgCgCIACABIAzAcQANgHgNgIQgMgGgNABQAJgKgBgDQgBgEgHgBIgDgBIgVgEQgOgFgIgIQAWANAVADIACAAQAeAEgFgXIAEALQAJAbAFgSQAGAEAJAMIAAACIAAgCIAKANQgJAIAJAEQACACAHgCIAHAMQgVACgDAMQgQgJAAAPQAbAagBAAIgCgBg");
	this.shape_1005.setTransform(319.4,111.2,1.179,1.692);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#72A27C").s().p("AgIAJIACgJIAGgRIAIALQgDAPAAAIQgFgEgIgEg");
	this.shape_1006.setTransform(324.6,102.5,1.179,1.692);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#72A27C").s().p("AgUgGIgMgHIANAAQgCADABAEQAHADALgIIAjAIQgEAGABALQgigOgQgGg");
	this.shape_1007.setTransform(270.9,193.5,1.179,1.692);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#72A27C").s().p("AgIARQgigPgKACIgBgGIAMgOQASgIA3AGIgCABIAEgBIAUACQgJAHgNAQQgKAPgPAAQgHAAgIgFg");
	this.shape_1008.setTransform(269.5,180.7,1.179,1.692);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#72A27C").s().p("AgrgHIAEgDQAdAJAcgBIAaAJIgGAEQgbgJg2gJg");
	this.shape_1009.setTransform(270.4,208.5,1.179,1.692);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#72A27C").s().p("AADALQADgHgFgEIAAAAIAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAABAAAAIgGgGQACACgCgDQAVgXgLAmg");
	this.shape_1010.setTransform(227.2,218.9,1.179,1.692);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#72A27C").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_1011.setTransform(232.2,233.4,1.179,1.692);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#72A27C").s().p("AgRAAIAGAAIgHAAIgDgBQAWgEARAAQAEAFAAADIgEAAIgRgDQgEAEABACIgEAAQgFgEgGgCg");
	this.shape_1012.setTransform(277.1,222.6,1.179,1.692);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#72A27C").s().p("AgVgCQAVACAWgGQgOAFgJAIQgIgFgMgEg");
	this.shape_1013.setTransform(239.1,225.3,1.179,1.692);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#72A27C").s().p("AgDAAIALAAIgPABIAEgBg");
	this.shape_1014.setTransform(249.3,227.1,1.179,1.692);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#72A27C").s().p("AgtgCQALgFAMAGIgFACQAAAIAWgFQAQgEAXgJIAKAEQAAAEACADIhXAIQgGgJACgDg");
	this.shape_1015.setTransform(241.6,227.1,1.179,1.692);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#72A27C").s().p("AgRAAQACgBgCgEQABACgEACIgHgGIA1gBIACAEQgRAEgQAJg");
	this.shape_1016.setTransform(235.6,236,1.179,1.692);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#72A27C").s().p("AgdAFQAMgJAZgHIAWAHQgYADgPADQALgCAbAAIgBACQgVADgMAHQgOgDgKgEg");
	this.shape_1017.setTransform(270.1,225.2,1.179,1.692);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#72A27C").s().p("AgKgDIAIgDQANAGAAAEQgLgBgIAEQAAgHgCgDg");
	this.shape_1018.setTransform(283.9,183.7,1.179,1.692);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#72A27C").s().p("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");
	this.shape_1019.setTransform(282.5,119.9,1.179,1.692);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#72A27C").s().p("AgSAFQAFgDACgCQADgDgEAAIAMgCQAQgBADAFIgTAFQgJACgFAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_1020.setTransform(289.7,182.5,1.179,1.692);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#72A27C").s().p("AgCAEIAFgIQgDAEAAADIgCACIAAgBg");
	this.shape_1021.setTransform(287.4,182.9,1.179,1.692);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#72A27C").s().p("AgBABIgTgBQAJgDAMgDQARgEADACQgJARgHAAQgFAAgBgIg");
	this.shape_1022.setTransform(284.6,195.8,1.179,1.692);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#72A27C").s().p("AgGABQgBgBANgBQACADgIAAIgGgBg");
	this.shape_1023.setTransform(283.3,122.7,1.179,1.692);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#72A27C").s().p("AAAAAIAAgBIABADg");
	this.shape_1024.setTransform(257.4,121,1.179,1.692);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#72A27C").s().p("AgDAAIgBgBQAQACgLgBQABAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAAAQgCAAgBgCg");
	this.shape_1025.setTransform(271.8,95,1.179,1.692);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#72A27C").s().p("AgdGQQAFgGACgHIgNADIABgJIgSAOQgGACgMAGQAEgHAOgOQAMgMACgBIAAAAIAAAAQgZADgNgGQgCgGgGgIQACAFAAAFQgIgHABgMQAWAAgBgJQgBgCAZAOQgKgWAWgDQAMgBAXACQAAgJgFgDQgGgDgGAFQACgSAHAEQAHAFAGgMQgIgEgVABQgUAAgKgLQA+gFh8AJQAEgQADgDQADgCAQACQADgKgPgIQgFgCAkgMQgTgFAAgCQAAgCASgHQgFgTgFgHIASAOQgVgXAnAJQgGgHgkgRQghgPAAgFQAbABAYgGQAAgYgkAFQAPgDgrABQgrAAgMADQAEgGgCgHQgCgJgMABQgEgKgHgNQARgMAngBQAhAAASAGQgSgHgGgUQAXAAAHgEQANgIgHgZIghARIgEgBIAAACQgbALgQgQQAKgEgJgNIgUgWQgZghAzAAQgUgMADgCQADgCAggFQgngRgOguQgOgvA6AOIABgDQBDgFgiADQAHAHAMAAQAOgBAFADQgDAHgGgDQgFgCgBALQAEgDAEACQAEACAAAFQgQgBgHABQgOACAGANQgPgJAAACQABAFgNAAQgCAUAhgDQgBAAgNAOQgMANAIgFIAVgPQgDALANAGQAWAIAFAFQgIgGgIAEQgCAFALAOQBMgOADgDQgNADgbgKQgbgJgOADQARgPgHgCQgGgCgVAGIAOgIIgNgIIAiAAQAdgBgGgHIAaAMQARAHAHgIIgngWQAHgBgEgHIAuAEIgUgFIgTgGIA3gSIhcAFQAIgBANgHQAPgJAFAAIgjgHQARgJAXABQAaACAMgDQgbgIgNgGQgcgNAFgRQgEANAbgCQAMgBAOgEQgBgKgNgQQgOgQgCgKIA6AOQACgOgcgPIgkgQQAZgKgCAAQgRgHgJgNIAzAcQAOgLgWgFQgUgDABgBQAHgGAMgHQAHgGgHgQQANAKADAOQADgbAIgXIADAbQADAQAGAJIAKgJIAJgKIABAQIAPgJQgMALgIAJQgQARAIAGQALAHAZgRIAjgVIgJAGQgGAFAJADQgSAEgRAJQALAAgCACIgSAHQACAEAXgCQgEADgZABQgVABgBALQAFAAAcgFQAcgDAMAFQgRgFghAZQggAYgBAMQAIgDAVAKQARAIAKgOQAKgNAGgEQAGgDAIAEQAGgJglAJIAPgHIgNgHQAbABAVgFQAdgGAJgBIgQgFIABgDQACgEASABIgLgHIATgIQgOAfABAiIgIABIgGAHQAAABAAAAQAAAAAAAAQABAAAAgBQABAAAAgBQACADAKgEQABAbALAdIgFgKQgBgFgDgBQgIgNgOgIQAAALADALIgHABIgOgGIAEAIIgHADIAJABIAIAOIgHgFQgJgCgXAAIAPAGIgVACQgJACAOAHQAcgGARADIAhA7QgFgCgVgZQgSgWgHAIQgBAFACAGQgIgFgJABQgFAEADAGQgFABgEADQADADgHADIAHAEQAFgEADgGIAEAFIAAAAIAAAAQAKAMAVANQARAMAGABQALAHgBAUIgGAcIgUgVQgMgKAFATIgDgCIADAHQgXgWgdgGIAEgDQgHgEgHABQAAAEgEACQAEACAFgBIAzA6QgSAKgKAHQgEAAAhAFQAhAHgOAPQhTgjgWgPIAEABIADAAQgEgCgFAAQgEgEAAAAIAAAAIAAAAQgHAEAIAMIAOAOQgegUglgFQALAZAcAHQgVgEATAHIA2ASIgLAEIAhANQgNAEgDAPQACAGAQgDIAegGQAXANAJANQgPANgygPQgygPABgNQgBAEAGAHQAFAGgBAEQgagXghgGQgKASBZAgIAAABQgkgMgbgKQgfgNACgDIAAAAIAAAAQgHAOAxAWQAkAQAfAIQgUgFgHARQACAGAmgEQANAPACAPQgQAEgRACIgygIQgCgEACgGQgCAEAAAFQg5gLABgEQgFALBEAWIABACIg4gPQgggIgCAGQgEAIAvAMQAnAKAbADQgfgDgYAUQAAABBWgHIARAFQgHAEgIAJIABACQgggCgHAAQgXACgVAKQAgAIAZAEQgHAAgNAHQgggGAAAHQAFAHAGABQgjgJgVgDQgjgHgFALQgIAVBJAIQgOACgHAMIBcgEIgFABQAQAEAfAKIgCACIg5gEQAIAKgMACIAWAMIgXgDQgJAQBGAHIAFADIgCABIgnABIgXgLIgSgJQAOAShpgFIATANIgVAOQA7gTgRAWQgoAHgCAJQgJgDgDgEgAhBFuIgDgJQgBgBgBAKIAFAAIAAAAgAgzFjQAAACAHAGQAEgCAAgBIgFgEIgFgBIgBAAgAhdBpQgGACgFAEIgBABIABAAIAaACIAMABQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIgCgCIgBgBIgKgCIgOgDgAhQBVQADADABAEIATgEIgKgGgAg6BPIADAJIAJgCIgJgHgAgxBNQgBABAGAHIAHgBIgMgHgAgaBRIAPgEIgIgBQgHAAAAAFgAgygGQgKADgGADQgCADABAEQAggFAZABQgOgFgKgIIgQAEgAhlgSIACAAQAIACASgBIAdgBQgcgYgBgLIgEgCIgQABIgEAAIgPgEIAHgBIgJgHQgDAIARANQAVARACADIgFAAQgKAAgJAHgAhcg9IAFgBIgHgFgABahdQgZAIABANIAGAAQAQgKAUgDIAAgCQgQAAgIACQAPgEArgFIgDgGQgeABgTAGgAiMhxIAAABIAIAKQAEgQgFAAIgHAFgAA7ibIAUAFQAYAFANAEQAGgDACgDQgJABgKgHIgDgCIADAEQgUACgVgHQANgBARgEIAegIQg/AFgCAJgABxjCQAAgTAUgHQgNADgOgCQgSAHgQgCQgBADAqARIAAAAgACIjqIgYANQAWABAKgCQASgDAIgKQADgEgMgFQgKADgPAHgAhwh1IAAAAIAAAAg");
	this.shape_1026.setTransform(236.2,154.3,1.179,1.692);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#72A27C").s().p("AgCAAIAFgBIgFADg");
	this.shape_1027.setTransform(268.3,151.4,1.179,1.692);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#72A27C").s().p("AgHAFQgBgCgGAAIAOgEQAMgEADAAIgBAGIgVAFg");
	this.shape_1028.setTransform(132.5,203.2,1.179,1.692);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#72A27C").s().p("AgHAAQAIAAAHgBIgCADQgJAAgEgCg");
	this.shape_1029.setTransform(127.7,210.3,1.179,1.692);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#72A27C").s().p("AAIAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIgPABQAKgJAFAGg");
	this.shape_1030.setTransform(160.8,188.9,1.179,1.692);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#72A27C").s().p("AgPAFQAMgOATAHIgQAEQgIADgEAAIgDAAg");
	this.shape_1031.setTransform(141.9,200.4,1.179,1.692);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#72A27C").s().p("AADgFIABALQgQgIAPgDg");
	this.shape_1032.setTransform(133.5,116.6,1.179,1.692);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#72A27C").s().p("AgYAIIAAgJQADgEgBgFQAFgDAPAKQAUAMAHADQgigEgPAAg");
	this.shape_1033.setTransform(141.8,166.8,1.179,1.692);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#72A27C").s().p("AgYgLIASADQAKAIAQAEQAIACgEABQgJAAgoAFg");
	this.shape_1034.setTransform(142,149,1.179,1.692);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#72A27C").s().p("AgBAAIADgCIAAAFIgDgDg");
	this.shape_1035.setTransform(134.3,132.6,1.179,1.692);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#72A27C").s().p("Ag8gFIA4ADQApACAXgCIABACIgEAEIgHACQhbgCgTgJg");
	this.shape_1036.setTransform(127.2,168.6,1.179,1.692);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#72A27C").s().p("AgKACQAIACgMgIQAOACAPAEIgZADQgIgFAIACg");
	this.shape_1037.setTransform(145.3,175,1.179,1.692);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#72A27C").s().p("AgHAAIAPgBQACABgQACg");
	this.shape_1038.setTransform(103.6,148.8,1.179,1.692);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#72A27C").s().p("AAAACIgQgFQAVAFAMACg");
	this.shape_1039.setTransform(107.3,126,1.179,1.692);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#72A27C").s().p("AgCAAIAFAAIgDABg");
	this.shape_1040.setTransform(101.2,201.1,1.179,1.692);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#72A27C").s().p("AAmAMQgDAEAAADIgVgKQAJAMgkAEQhkgnABgFQAlAFAtgVQA/AHAlAFIgfgBQAKALgPAEIBQAnIgHAGQhBgJgEgPg");
	this.shape_1041.setTransform(93.5,130,1.179,1.692);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#72A27C").s().p("AgcABIAbgGIAeAKIgEABQgPgEgmgBg");
	this.shape_1042.setTransform(92,202.4,1.179,1.692);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#72A27C").s().p("AgGgCIANgBIgKAGg");
	this.shape_1043.setTransform(133.6,59.5,1.179,1.692);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#72A27C").s().p("AAFgDIgBADIgHAEQABgEAHgDg");
	this.shape_1044.setTransform(134.3,59.7,1.179,1.692);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#72A27C").s().p("AAAAGIgEgGIAGgGIAAAAIADANg");
	this.shape_1045.setTransform(133.2,72.5,1.179,1.692);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#72A27C").s().p("AgCABIAFgCIgDADg");
	this.shape_1046.setTransform(128.1,65.9,1.179,1.692);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#72A27C").s().p("AgBgBIACAAIABADg");
	this.shape_1047.setTransform(133.9,74.7,1.179,1.692);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#72A27C").s().p("AgPAlQgagNgRAHQAAgDADgGIAiADIgfgJIAMgPIAngKIgcABQAYgYAagSQARATATAgQgfAFgBAHIAiAHIgNARQgogcAAAbIARAPIgCAAQgLAAgZgOg");
	this.shape_1048.setTransform(123.6,87.9,1.179,1.692);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#72A27C").s().p("AgOgIIApgDIALAMQgRABgcAFIgeAEQABgOAWgFg");
	this.shape_1049.setTransform(123.5,73.5,1.179,1.692);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#72A27C").s().p("AgEASQgFgLgDgHQAMgCAAgBQgIgCgHgEIgCgJIAjASQgOALgEAIg");
	this.shape_1050.setTransform(118.8,54.1,1.179,1.692);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#72A27C").s().p("AgNAAQAMgEANgBQADAFgCAGg");
	this.shape_1051.setTransform(112.8,81.7,1.179,1.692);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#72A27C").s().p("AgxgWIADAAQAZATAYADIAAAAIABAAIAeACQAMAFAFAQQhmgoACgFg");
	this.shape_1052.setTransform(127.3,107.9,1.179,1.692);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#72A27C").s().p("AABAHQgQgQgLgIIAXgMIAHAKQgIABgJgCQgBACAgAPQAFAHAEAaIgagXg");
	this.shape_1053.setTransform(130.1,81.4,1.179,1.692);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#72A27C").s().p("AggAxIgBABIgEgDQAPgRAWgUIgdARIgBgdIgEAEQgHgCgRgDQgMgBABAAQAJgJAOgHQAJgIgIgUQAOALAGATQADgfAKgfIAEAhQADAVAFALQAEgFAIgHIAMgMIAAATIATgLIgVAUQgSARACAJQAAADADACIADABQAJAEAOgGIAjgUIAAAFIgXAKIgBABQAOAAgEADIgVAHQABAFAMAAIARgCQgFAEgeABQgZACgCANQAGAAAjgGIACANIgnAaQgSgRgVgPg");
	this.shape_1054.setTransform(126.5,51.9,1.179,1.692);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#72A27C").s().p("AgOALQgMgIAMgRIASAEQAIAKAJAKQgNAFgIAAQgIAAgGgEg");
	this.shape_1055.setTransform(121.9,65.9,1.179,1.692);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#72A27C").s().p("AgCAAIACgBIADACIgBABQgDgBgBgBg");
	this.shape_1056.setTransform(125.3,69.7,1.179,1.692);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#72A27C").s().p("AATAZQAFAAADgHQAEgHgCgHQgEgTgbAMIg6AdQgKgkBNgQQAbABANAGIgIABIALABQAKAGACALQAAANgEAMQgQACgKAAQgKAAgDgCg");
	this.shape_1057.setTransform(127.4,147.7,1.179,1.692);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#72A27C").s().p("AgJAAIATgBIgOADg");
	this.shape_1058.setTransform(111.8,117.5,1.179,1.692);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#72A27C").s().p("AgWgBQgCgHgIgEIgOABIAAgMIA6AKQACADADABIgRAKQgIABAhADQAjAGgVANg");
	this.shape_1059.setTransform(144.5,147.4,1.179,1.692);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#72A27C").s().p("AgHABIg9gMQACgIAbgGQAPARAkAJQAjAKAUgDIABASQgPgLg8gOg");
	this.shape_1060.setTransform(126.5,125.6,1.179,1.692);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#72A27C").s().p("AAAAAIABAAIAAABIgBgBg");
	this.shape_1061.setTransform(133.7,99.5,1.179,1.692);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#72A27C").s().p("AgGgCIAKgCIADAEQABAAgCAFg");
	this.shape_1062.setTransform(164.7,189.6,1.179,1.692);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#72A27C").s().p("AACAAIADAAIgJABQAEgBACAAg");
	this.shape_1063.setTransform(160.2,175.9,1.179,1.692);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#72A27C").s().p("AgJACQATgLAAAGIgFAJg");
	this.shape_1064.setTransform(189.9,187.6,1.179,1.692);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#72A27C").s().p("AACgDIgBACIAEgBIgJAFg");
	this.shape_1065.setTransform(156.8,113.1,1.179,1.692);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#72A27C").s().p("AABgIIAHAEQgJALgGACg");
	this.shape_1066.setTransform(138.8,83.5,1.179,1.692);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#72A27C").s().p("AgKACIAHgJIAOABIgLAOg");
	this.shape_1067.setTransform(141.2,78.8,1.179,1.692);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#72A27C").s().p("AgJgFIATAFIgBAGQgLgCgHgJg");
	this.shape_1068.setTransform(174.9,211.7,1.179,1.692);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#72A27C").s().p("AgEgIIAIACQgDAOgBABQgCgIgCgJg");
	this.shape_1069.setTransform(172.3,211.6,1.179,1.692);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#72A27C").s().p("ABoImQgJgNgBAEIgJgHQAJgMATAOQgOgNgkgHIABgBQAAgCgCgDQAaAAADgDQAFgEgmgKQAFgBAAgEQgLgCgVAEQgEgLgIADQgEABgLAKIgfgFQgGgEgMgGQAugGgDgPIAAAAIAAAAQAAABgkABQAugNAyALQgOgEgHgOQAUAAAHgCQATgFgHgRQgbAJgPAEQgbAFgOgKQAFgBgCgEIgIgIQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAQgKgJgCgGQgDgIALgFIAaABQgHgOgNgDQADgCALAAIATgBQgKAAAAgDQBFgNgJgXQgGgNgmAFQgTACgwANQgCgIACgJIAYgLQAOgHANACQABgBASgFQAKgCgYgFQARgEAUAEIgxgSQgbgLgVgBQgLgGgKgEIARgPQBjgWgHgNQgEgIgnAJQgTAEg2AQIgTADIApgNQAQgBAGgEIgLABQAzgVgHgLQADAGg2ALQAXgKAWgFQgMgDAIgGIANgIQgHADgTALIghATIgnAHIgEgCQgIgFAKgSQAIgOAOgQIgYAUIgDghQgOASgDABIgEgFIgBgQQA6gUAdgQIACAAQAIgBAIACIAFABIgCgDIgJgGQALgHAGgGQAEADAEAAIAAgDIgIAAQAHgJgDgIIAAAAIAAAAQADAJh8ApIgBgBQB2grgNgZQgWAEgXAMQgHABgHgBQgHAGAAAHIgPAMQgCgFAIgKQAIgJgCgGQACAIgXANQgXANgiAIQADgJgEgNIgkANQgXAJgQACQgKgHACgLQAEgdA0ALQA4ALADgIQgGghgpAFQANgIBXgbQA9gVgiAGQAXgEAPgRIAHAAIgEgBIgBgBQAJgKAEgNQgfAFgaAMQgNABgHAEQASgWgMgHQAKAHi0BMQACgQA6hFIA6hCQgxAJgkAkQAOgpgWAUQgbAegEABQABgHgCgPIgCgXQAegOAWgEIgPgHQAQgDgBgBQgLACgOgDIgLgGQAVgIAggaQAogggQgMQgLgBgKAFIAAAAQABgGgBgHQgIgJgQAQIgQgFIABgDIA/gVIg1AEIAUgiQAMAAAMgEIgSgGIAFgIIgPAFIgNgEQADgNgBgMQgNAIgIAJIgKgGIADgNQASADAggIQgBgMgSgUQgSgUgCgMIBJARQADgRgigSQgLgGgkgOQAggMgCgBQgXgIgLgPIBBAhQARgNgagGQgcgEADAAQAJgIAPgIQAIgIgIgUQAPALAFATQADgfAKgfIAEAhQADAUAIALIAMgLIALgMIABATIATgLQgQAOgJALQgUAVALAHQAMAJAggUQAogbADAAIgNAIQgHAGALADQgVAGgVAKQAOAAgDACIgWAJQACAEAMgBIAQgBQgFAEgeACQgZABgCAOQAGAAAigGQAigFAQAHQgVgHgpAfQgmAdgCAPQAKgEAZANQAVAKAMgSQAOgSAJgDIAEgBIAHABQAFACAHAEQAUALAIAEQgNADgrAWQgjASgagEQAAADAvAUIAtASQgUABgHABQgKADAVAJQhZAGgCAMIA3AMQAyAOgXAGQANALAXgGQAKgDAYgKQAGASgOAFQgGACgRAAQAEAOANAEQgVgGg0AIQg/AJAHAbIAkgTQATgIACANQADAOgKgBQAEAEAhgFQAkgFAHAAQACAAgHgCQgLgEgIgJIAuAUQANgIgWgEQgVgCAGAAIAKgIQgEgBABgJQAQAIgBgFIgFgMQASAMABgCQgBgMAHgRQACAPAAAQQABAFAMgPIACAUIAPgMQgJAJgFAJQgGAMAFADQALAGAWgNQAdgQADgBIgJAFQgGAEAIACQgPADgQAHQALAAgDABIgQAFQABACAKAAIALAAQgDACgXABQgTAAgBAJIAdgFQAVgDAGAGQgFgFgQAMQgRAMgBAHQARgFAYAHQAOAEAaAKQgLgDgMADQAPADgGACQgLACgBABQgJgBgKAFIgOAGQgEAOAPAHQAKAFAOAAQgGAFAKAAIgUABQgIACAQAFQgTADAAAGQgBAFAJAHIgHABIAIAFIABgEQAIAHgFABQAJAHASgEIAagIQAEALgMABQgEABgNAAQAFAJAJADQgTgFgVACQgYACgQAJQAIABAMAHQANAHgMgBQAEADAYgDQAcgEAGAAQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAQAMACAFADIgBAFIgdABIAaAFQgCAGgGAGQgjgJAPAQQgNgIgOgDIANAGQAUAJANACQAAABAJACIgCABIgRAEQAJAFgGgBQgEgCAJAGQgBABgIABQgIABgDAFQACABAhgCIAHAAIACABIgKAFQABADAMAJQgKABAFAKQgMgFgPAAQgNABAlAMQAVgDAJgDIAIAFIgCACIgCADQAJAIAIgHIAMAGQhAAOAnAbQgZgCAAAHQgBAHAWALQgTACggANQgYAKgmgDQAjAOghAOQAcgLAGAHQAGAGgRAVQAOgEAcAOQAfAQgPAQQgPAQgfADQgjABgPABQAaANAcgJQg+AjBBAjQAQAJAiAMQAZAKgCACQgdgCgrANQg3ASgbADQAaAOAdgCQgYgNAYAFQACAbAWgLIABABIgFAGQgKABgLgFQAKAFAHAFQgGAGABABQAAACAMABIABADIgJAGQgNgGgJAAQgIgBAXANIgEAEQgJgDgCABQgDACAHAMIgCAGQgGgBgMgPgAgXHlIAHABIgCgFgAC2CxIAMAEQAIgIgBgBIgHgBQgIAAgEAGgADZCaIAAAAQgCgMgVACIgEAIIAJgBQALAAAHADgACxCTIgFAEQAHAIAOgOgACpCNIgEADIAAAAIADADQACgGgBAAIAAAAgAgdAaQgXAGgPAIIAegFQARgFgCgDIgBgCgAgIAVIgEAFQgDADAEgCQABABAEgBIAGgCIAIgDQgCgCgIAAgABcgOIALgBIgBgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQgDAAgEAEgABXhDQADAKALgBQABgIgPgDgAANg8QAPAAAIgCQgSgHgMgCQAHAGgGgCIgBAAQgCAAAJAHgAgchXIAFAAIAAgCgAhghaIADAAIAuADQATgHAQABIAkADQgBgHgJgIQgFADgbgIQANAQgsABIhEgCQAFACAQADgAgEiHIAQAFQANACAGADQgDgEgKgHg");
	this.shape_1070.setTransform(167.2,119.8,1.179,1.692);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#72A27C").s().p("AAEAKQgDgKgEgJIAGACQAAAFABAMg");
	this.shape_1071.setTransform(177.8,213.7,1.179,1.692);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#72A27C").s().p("AAkgJIgBABQg6ASgMAAQASgCA1gRg");
	this.shape_1072.setTransform(147.9,138.5,1.179,1.692);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#72A27C").s().p("AAIgBIgBACQgHgBgHACg");
	this.shape_1073.setTransform(150.5,141.6,1.179,1.692);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#72A27C").s().p("AAOAIQgPgEgQgGIARgFIATAPg");
	this.shape_1074.setTransform(37.4,167.4,1.179,1.692);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#72A27C").s().p("AgSADQAIABAKgEIARgEQADAEgDAEQgQAAgQABg");
	this.shape_1075.setTransform(40.1,95.3,1.179,1.692);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#72A27C").s().p("AgeAIIACgCQAGAAAGgGQAMgQAHADQAGABAWAMQgLAAgYAOg");
	this.shape_1076.setTransform(36.9,79.4,1.179,1.692);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#72A27C").s().p("AgCgIQgBAEgDAAQADACAWgEIAIAGQgnAHgOACg");
	this.shape_1077.setTransform(35.7,104.1,1.179,1.692);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#72A27C").s().p("AgDAAIgBAAIAEgBQAAABAFACg");
	this.shape_1078.setTransform(40.5,98.7,1.179,1.692);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#72A27C").s().p("AAAgJIARAOIghAEQACgMAOgGg");
	this.shape_1079.setTransform(31.1,96.4,1.179,1.692);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#72A27C").s().p("AAAAAIABAAIgCABg");
	this.shape_1080.setTransform(17.2,99.6,1.179,1.692);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#72A27C").s().p("AgGgBIANABIgEACg");
	this.shape_1081.setTransform(12.9,128.3,1.179,1.692);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#72A27C").s().p("AAGAGQgNgGAAAAIAAAFIgHAAIgDAAIgCAAQACgDAVgIQALAFAFAEQgUgDADABIAKAGg");
	this.shape_1082.setTransform(42.1,107.4,1.179,1.692);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#72A27C").s().p("AgiAfIgHgOIADgLIAJADQABgGgHgFQAIgYAQgHQgDAFAEADQAIAGAUgPIADABIgJAFQAJAAgCABIgOAFQABAEASgCQgDADgUABQgOAAgBAKIAYgFQAWgCAKAEQgNgEgXAPQgVAQgGAMIgEAFg");
	this.shape_1083.setTransform(32.4,73.3,1.179,1.692);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#72A27C").s().p("AgKgYQAEADAGAPQAFAKAGAEQgUAEAAAEIAOAEIgPAFg");
	this.shape_1084.setTransform(1.3,132.6,1.179,1.692);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#72A27C").s().p("AgWgGIAFAAIAHAAIAhABIgZAMQgIgHgMgGg");
	this.shape_1085.setTransform(4.9,125.5,1.179,1.692);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#72A27C").s().p("AgEgDIAKAEIgLACQABgDAAgDg");
	this.shape_1086.setTransform(6.4,131,1.179,1.692);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#72A27C").s().p("AgegLIABABQAKgJAEgGIABAMIANgHIgRAQQgNAMAHAEQAIAGATgNIAcgPIgIAFQgFAEAIABQgLACgPAHQAHABgCABIgMAGQABADAQgCQgDADgNAAQgPABgEAEIgFAAg");
	this.shape_1087.setTransform(3.7,110.4,1.179,1.692);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#72A27C").s().p("AgMgDIAWgBIACABQgEAGgQACQAIgEgMgEg");
	this.shape_1088.setTransform(4.3,225.2,1.179,1.692);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#72A27C").s().p("AgeAWIAAgfIAfgOIAZAUIAFADQgWAKglAOg");
	this.shape_1089.setTransform(3.7,194.8,1.179,1.692);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#72A27C").s().p("AgdgKQAhAKAIgHQABgHgBgHIAbgEQALAMAPAMQgSABgWAEQgIgKgVAIIgtAXIgOABQgCgYAkgMg");
	this.shape_1090.setTransform(86.5,169.1,1.179,1.692);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#72A27C").s().p("AgIAAIAAAAQAIAAAJgBQgEACgJABg");
	this.shape_1091.setTransform(67.5,86.8,1.179,1.692);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#72A27C").s().p("AgDABIgEgBIAPAAIgBABg");
	this.shape_1092.setTransform(69.7,88.7,1.179,1.692);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#72A27C").s().p("AgFAAIAFgCIAGADIgFACg");
	this.shape_1093.setTransform(65,85.4,1.179,1.692);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#72A27C").s().p("AgXAAQAGAAAFgHIAkAKIgJAEg");
	this.shape_1094.setTransform(69,103.1,1.179,1.692);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#72A27C").s().p("AgGgCIADgBIADABIgDABQAKAAAAABIgLAEg");
	this.shape_1095.setTransform(66.9,84.6,1.179,1.692);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#72A27C").s().p("AgPgCQAIgCAHADIAQAFg");
	this.shape_1096.setTransform(61.9,101.3,1.179,1.692);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#72A27C").s().p("AABAqQgXgIgOgFQgagKgGgMIAJgDQASADAigHIgCgHQAJgBADABIACAIQAEgFgGgDQgDgXgVgOIBBAXQgHAIgBAFIgCgBQACANALAPQAGAIAQASg");
	this.shape_1097.setTransform(55.5,102.4,1.179,1.692);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#72A27C").s().p("AgMAXQgNgGgNgRIAWALQAOgLgQgEQgIgDgUgCIgCgDIARgKQAIgFABgGIAzAfIgEAGIgegPQAOAVAYAKIAQAIQgSABgFAFQgagDgMgIg");
	this.shape_1098.setTransform(58.6,82.6,1.179,1.692);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#72A27C").s().p("AgGgBQAGAAAHABIgHACg");
	this.shape_1099.setTransform(56.7,152.9,1.179,1.692);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#72A27C").s().p("Ag2A3IAGgBQghgOAQgEQAJgDAigBIgJgEQAmgIgBgBQgLACgNgDQgTAFgBACQiFgxACgHQAKABAHAAIAAABQAFAFAhgLIAGgCQBJAIAfAFIAGACQARAEADAEQgCglgqgMIAWACIADAAIAEABIADAAIAeAEQASAQArAOIA2ARQgYAIg1gEQgugDggAPQAkAJAgAGQgKAAgeAQQgbAPgMACIC2gLIg8AUIgSAAQhZAAg6gJgAg8AGIgFADQADABARgBIgMgDgAiEgMQAHACAUABIAYABIABAAQAKgPgiAKIgKACIARgKIgGgEQgWAAgHANg");
	this.shape_1100.setTransform(51.7,132,1.179,1.692);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#72A27C").s().p("AhZgVIAhgDIgNANQAbgFAyAQQA1ATAcgGQADADgsAJQhLgLg+gjg");
	this.shape_1101.setTransform(52.8,168.5,1.179,1.692);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#72A27C").s().p("Ag0AKIALgIQARAAAOgCQAdAGAHAAQgCgIgLgGIABgDQAKABAHAEQAJAHAMAKIguABQgbAAgfgCg");
	this.shape_1102.setTransform(47.6,190.3,1.179,1.692);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#72A27C").s().p("AgBAAIAEAAIgDABQAAgBgBAAQAAAAgBAAQAAAAAAAAQABAAAAAAg");
	this.shape_1103.setTransform(53.9,197.9,1.179,1.692);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#72A27C").s().p("AgPABIABgBIACgDIAcACIgEAFg");
	this.shape_1104.setTransform(36.4,191.1,1.179,1.692);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#72A27C").s().p("AgRAAIAXgHQAFAFAGACIAAAAIgXAIQgBgCgKgGg");
	this.shape_1105.setTransform(55.4,196.3,1.179,1.692);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#72A27C").s().p("AgagLIABAAIAIAEIAMgBQANAHATAKIgOAEQgUgOgTgKg");
	this.shape_1106.setTransform(48.5,154.3,1.179,1.692);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#72A27C").s().p("AABARQgRgQgPgIQAAgFgCgFQANACAUAJIAiAQQgIAIgNAAIgMgBg");
	this.shape_1107.setTransform(61.8,156.1,1.179,1.692);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#72A27C").s().p("AgVAmQAEgHARgKQgHADgUANIg0gMIAYABQAOAAANgEIgagIQgVgGgMgGIAEgCIgFABQgagLAGgTQgFAQAhgCQAQgBATgFQgCgMgSgVIBLAFQgKAMAAAHQAIgEAZANQAVAKAMgRIAGgIQAVAJARAJQgbAPgOAEQgZAKgVgDQAAADAaALQAFAPARASQgbgEhBgNg");
	this.shape_1108.setTransform(95.3,76.3,1.179,1.692);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#72A27C").s().p("AgYACQAmgCgHgIIATAIIgzAIIABgGg");
	this.shape_1109.setTransform(80.9,96.6,1.179,1.692);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#72A27C").s().p("AgXgCQAegFARAFIgCABQgMAAgOAHg");
	this.shape_1110.setTransform(103.5,59.8,1.179,1.692);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#72A27C").s().p("AgrgJIAAgBQAVgBARgEQBEAPgaAIIADACQgdAFgNABQgMgUgdgFg");
	this.shape_1111.setTransform(101.5,94.2,1.179,1.692);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#72A27C").s().p("AgaBAQgLgLgZgMIgfgMQAfgMgCgBQgWgIgMgNIBBAfQAQgNgagGQgbgEAEAAQAIgHAOgHQAJgIgIgUQAPALAFATQAEghAJgdIAFAhQADAVAFALIALgMIAMgMIABATIATgLQgQANgJAKQgUAVALAHQANAIAfgTIArgZIgMAHQgIAEALADQgXAHgSAKQAOAAgEADIgVAHQABAFAMAAIAQgCQgEAEgfABQgZACgBANIAbgDQAHAIAJAFIgIAFQgXgEgsgEg");
	this.shape_1112.setTransform(95.8,50.3,1.179,1.692);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#72A27C").s().p("AgDACIgKgEIAaAEQgDgBgFACg");
	this.shape_1113.setTransform(99.3,112.9,1.179,1.692);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#72A27C").s().p("Ag6gDIALgGQAdABAbgDIAyABIhDAWQgVgJgdgGg");
	this.shape_1114.setTransform(101.9,120.8,1.179,1.692);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#72A27C").s().p("Ah/ArIAQgRQBLgNgDgDQgRADgdgJQAdgWAbgLQAdgPARAHQgRgJgpACIgLgFQAzADAfAEQAGAWAjAPQgkAKAGATIAkgTQASgFADAKQADAOgKAAQADACAIgBIAEAAIAUgCIACAAIgBACIAAAEIg4gCQghgCgaALQgMgCgQAQIhvgHg");
	this.shape_1115.setTransform(92.4,103.7,1.179,1.692);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#72A27C").s().p("AgNAFIgBAAQAPgFAOgFQgBAIgNADQgJgDgFACg");
	this.shape_1116.setTransform(313.3,125.8,1.179,1.692);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#72A27C").s().p("ABFAiIgZgPIADgEIACAAIgCgBQAIgTgsgMIgtgJQAAAHACAFIgcgFIgMAAIAIACQgQAAgPAFQABgLAWgSQAPgCAIAAIgBAEQAbgCAPgDQAPAIAIABQAJAMAZAIQAVAHATAAQgJACABAGIAHAAIgGABIAEAFIAKAAIAAADIgGACIAGAGIAAACIgJABIAIAIIAAARQgLgCgPgJgABEAXIAIAAIgBgCIgBgCg");
	this.shape_1117.setTransform(319.7,142.7,1.179,1.692);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#72A27C").s().p("AgJAAIAMgDQACADAFAEIgGAAQgLAAgCgEg");
	this.shape_1118.setTransform(310.9,128.7,1.179,1.692);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#72A27C").s().p("AgEgIQAVAIgRADQADADAHADIgIAAQgTAAANgRg");
	this.shape_1119.setTransform(306.4,123.5,1.179,1.692);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#72A27C").s().p("AgegUQAbAMAiALQgUABgHACQgIACATAKIgSABIAAgFIgGAFIgSACQAAgVgDgUg");
	this.shape_1120.setTransform(305.7,112.6,1.179,1.692);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#72A27C").s().p("AgJAGIgCgBQAMgDgEgEIAEgEIALAFIgHAIg");
	this.shape_1121.setTransform(278.4,212.9,1.179,1.692);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#72A27C").s().p("AgWACIAbgCIgWgIQAkAAANACIACABIhAAOQgHgGAPgBg");
	this.shape_1122.setTransform(280.2,199.6,1.179,1.692);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#72A27C").s().p("AgEACIABgDIAIACIgGABIgDAAg");
	this.shape_1123.setTransform(281.3,213.4,1.179,1.692);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#72A27C").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIAAAAIAAgBg");
	this.shape_1124.setTransform(179.3,116.9,1.179,1.692);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#72A27C").s().p("AgFABIALgCIAAABIgBAAIgBABIgDABIgGgBg");
	this.shape_1125.setTransform(188.1,132.6,1.179,1.692);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#72A27C").s().p("AgCAAIAAgBQAHABgDABIgCABQAAAAgCgCg");
	this.shape_1126.setTransform(177.9,108.4,1.179,1.692);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#72A27C").s().p("AgGAAIAKgDIgCACIAGADIgCACg");
	this.shape_1127.setTransform(188.7,130.6,1.179,1.692);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#72A27C").s().p("AgBABIABgCQADgBgDAEIgBAAg");
	this.shape_1128.setTransform(165.9,123.9,1.179,1.692);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#72A27C").s().p("AgeAAIAAAAIAsgEIARACIgBABQgeAGgOAAQgMAAgEgFg");
	this.shape_1129.setTransform(582.5,280.1,1.179,1.692);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#72A27C").s().p("AgCABIAEgBIABABg");
	this.shape_1130.setTransform(493.3,360.2,1.179,1.692);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#72A27C").s().p("AgPABQAFgBgMgEIAtgBQAAAEgGAEQgegBgIAEIAGgFg");
	this.shape_1131.setTransform(487,311.1,1.179,1.692);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#72A27C").s().p("AgFAAIAKgCIABAFg");
	this.shape_1132.setTransform(497.1,271.6,1.179,1.692);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#72A27C").s().p("Ag3AJIABAAIAFAAQAOgJAdgDQAbgGAjgBQgoAKg0ALg");
	this.shape_1133.setTransform(525.3,361.9,1.179,1.692);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#72A27C").s().p("AAIgBQAAAAABABQAAAAAAAAQABAAAAAAQAAAAgBAAIgSACQAKgDAHAAg");
	this.shape_1134.setTransform(519.5,351.4,1.179,1.692);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#72A27C").s().p("AgrAIQANgBAUACQAAgGgHgCQgFgBgFACQACgKAIACQAJACAFgHQAhAEAOAKQgGAJgeAAQgTAAgggEg");
	this.shape_1135.setTransform(501.3,259.5,1.179,1.692);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#72A27C").s().p("AADAXIgHgtIAJAtg");
	this.shape_1136.setTransform(504.7,282.3,1.179,1.692);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#72A27C").s().p("AhMAjQADgDAOgDIgVgIQgFgEAHgFQApACACgEQgEgMgNgCIAHgCIAAABIADgDQAHgFACgGQAJgJAOgJQAaAAAqgEIgDAFQABABAPgHIAJAJIADAQQhOAAgdAHQgKABgIAFIAFABIAAABQADAMArgEIA3gGQgIAFgrAIQgkAGAAAEQAEAJAHgCIgTANQgJgGgkgCg");
	this.shape_1137.setTransform(512.1,295.3,1.179,1.692);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#72A27C").s().p("AgDADQgFgGACgBIACAAQAEACAIAEIgDACg");
	this.shape_1138.setTransform(504.1,305.9,1.179,1.692);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#72A27C").s().p("AgCAAIAFAAIAAABg");
	this.shape_1139.setTransform(500.6,289.9,1.179,1.692);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#72A27C").s().p("AADgBIALABIgBABIgaABg");
	this.shape_1140.setTransform(515.1,331.4,1.179,1.692);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#72A27C").s().p("AgaAfQABgFgRgOQgQgMgGgBIAXADIAXAGQgWgNACgBIAkACQgNgKhDgGQgGgGgMgHQAIABAqALQAvAMAfAJQgHAFgDAJIAsAAQAJAEgBADQABgDgCgEQAZACAHAFQgdAGgWAGIgaABQgNgJglAGg");
	this.shape_1141.setTransform(505.1,316,1.179,1.692);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#72A27C").s().p("AgZAFIgBgCIATgEQAHgDABgEIAaAIIgcAJQgNgEgLAAg");
	this.shape_1142.setTransform(509.4,351.6,1.179,1.692);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#72A27C").s().p("AgMAAIgBgBQACAAAZADg");
	this.shape_1143.setTransform(512.6,330.3,1.179,1.692);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#72A27C").s().p("AgHAAIAPAAIgBAAIgOABg");
	this.shape_1144.setTransform(513.1,338.8,1.179,1.692);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#72A27C").s().p("AgPAAIALgCIAUAEIgKABQgOAAgHgDg");
	this.shape_1145.setTransform(500.1,335.9,1.179,1.692);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#72A27C").s().p("AgJgDIATAAQgFACgFAFIgFAAQgBgEgDgDg");
	this.shape_1146.setTransform(504.8,335.5,1.179,1.692);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#72A27C").s().p("AAAAAIABAAIAAAAIgBABg");
	this.shape_1147.setTransform(456.7,357,1.179,1.692);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#72A27C").s().p("AgOgBQANAAAWABIgoACg");
	this.shape_1148.setTransform(489.4,276.7,1.179,1.692);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#72A27C").s().p("AAEABIgEABIgEAAQAOgHgGAGg");
	this.shape_1149.setTransform(482,274.8,1.179,1.692);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#72A27C").s().p("AgOADIgNgEIAVgBQAHACAPAAIAMADg");
	this.shape_1150.setTransform(479.3,364.7,1.179,1.692);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#72A27C").s().p("AALgBIAAACIgVABQAIgCANgBg");
	this.shape_1151.setTransform(485.3,276.8,1.179,1.692);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#72A27C").s().p("AAGAAIgFABIgGAAQAFgCAGABg");
	this.shape_1152.setTransform(480.1,275,1.179,1.692);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#72A27C").s().p("AgQARIgtgWQAKgEArAKQAmALABgFQgFgNgPgEIABgGIAIABQAJALAMABIABgGIAMAFQAFAGACAPg");
	this.shape_1153.setTransform(493.1,362.4,1.179,1.692);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#72A27C").s().p("AgcAAIAFgCIA0AEIgZABQgUAAgMgDg");
	this.shape_1154.setTransform(495.6,296.6,1.179,1.692);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#72A27C").s().p("AgKAFIgPgGQAFABAMgBIAHABIABgFQALgEAMgGIACgBIABAAQgJALgEANIANgEQgCAGgHAHQgPgHgMgFg");
	this.shape_1155.setTransform(507.3,360.3,1.179,1.692);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#72A27C").s().p("AgDAGQAAgGAEgFIADgBIgEANg");
	this.shape_1156.setTransform(478.8,274.1,1.179,1.692);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#72A27C").s().p("AACAAIgDADQAFgLgCAIg");
	this.shape_1157.setTransform(513.4,363.8,1.179,1.692);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#72A27C").s().p("AgZAHQAhgfARALQgNAMgFAHIgYgCIAXACIgFAHIgUAEQgCgIgEgCg");
	this.shape_1158.setTransform(518,362.4,1.179,1.692);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#72A27C").s().p("AAAAAIgsAAQAtgBAigDIgCAEQAJADADACQgQgEgdgBg");
	this.shape_1159.setTransform(489.9,280.8,1.179,1.692);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#72A27C").s().p("AAEgCIAAADIgHACg");
	this.shape_1160.setTransform(483.5,274.1,1.179,1.692);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#72A27C").s().p("AgQAJIgCgSIATAJQAGAGAGAAIAGADg");
	this.shape_1161.setTransform(502.6,363.7,1.179,1.692);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#72A27C").s().p("AgEgBQgBgDADgCIAIAMIgEABg");
	this.shape_1162.setTransform(498.7,274.9,1.179,1.692);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#72A27C").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_1163.setTransform(500.9,293,1.179,1.692);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#72A27C").s().p("AgWAAQAIgDAWgDQAIAFAHABQgCAEgNACIgYABQgGgGAAgBg");
	this.shape_1164.setTransform(529.1,301.5,1.179,1.692);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#72A27C").s().p("AhOAUIgCgBIgCgBIgmgLIAAgDIAbgGIACAAIgBAAIA9gTQgFAJACALIBHgFQAzgDAhADQg4AViCAGg");
	this.shape_1165.setTransform(526.4,327.8,1.179,1.692);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#72A27C").s().p("AhiAcQgdgEgNAEIgdgVQAHADAEgJIACABIgBgCQAggKAygNIA1gNQgOAJgGAGQgNAKAGAIQgEgFAUgFQAUgEARABQAAACgEAGIAVgEQAAADgBACQADgCgCgDQBagRAzAAQAIAJAAAKIgBADQg5gLgggBQgvgBgKATQgEAFANAIQANAHgLAIIhDAAQgegBAAACQAFAEALAFIgzgJg");
	this.shape_1166.setTransform(525.7,307.8,1.179,1.692);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#72A27C").s().p("AgCgHIACgBIADAQIgDABg");
	this.shape_1167.setTransform(505.6,289.3,1.179,1.692);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#72A27C").s().p("AAAAEIgBgHIADgBIgBAJg");
	this.shape_1168.setTransform(521.6,288.6,1.179,1.692);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#72A27C").s().p("AgIAAIAQgCQgEACgCADg");
	this.shape_1169.setTransform(512.2,325.7,1.179,1.692);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#72A27C").s().p("AgLgHIADAAIAVAJIgUAGQAAgHgEgIg");
	this.shape_1170.setTransform(532.2,287.8,1.179,1.692);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#72A27C").s().p("AgGAEIACgEIADgDQADABAEACIgJAEg");
	this.shape_1171.setTransform(502.6,291.7,1.179,1.692);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#72A27C").s().p("AAAgBIADABIgGACQABgCACgBg");
	this.shape_1172.setTransform(504.6,291,1.179,1.692);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#72A27C").s().p("AgGgBIAGgCIAHACQgCABgEAEQgFgCgCgDg");
	this.shape_1173.setTransform(321.8,325.6,1.179,1.692);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#72A27C").s().p("AAKAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABABAAQAAABAAAAQAAAAAAAAIgRABQAQgKADAHg");
	this.shape_1174.setTransform(399.7,236.2,1.179,1.692);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#72A27C").s().p("AgJAAIgDgCQAKgBAQAFIgBABg");
	this.shape_1175.setTransform(302.3,330.3,1.179,1.692);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#72A27C").s().p("AgFAGIgIgEQABgEACgDQAHABACgBIAGABQAEAEAFAAIgRAGg");
	this.shape_1176.setTransform(306,308.8,1.179,1.692);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#72A27C").s().p("AAAgDIADAAIgFAHQACgEAAgDg");
	this.shape_1177.setTransform(307.1,325.5,1.179,1.692);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#72A27C").s().p("AgjASQgIgGgJgFQAUACAWgFQgNgIgQgFIAKgGIAEAEQAEgEAKgDQgFAKAMABQAKAAAQgMIAfAFQgHAHgNAHQgjAAgBAJIAAABIAAgBQABgBAYgBIgWANIgjgCg");
	this.shape_1178.setTransform(315.6,329,1.179,1.692);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#72A27C").s().p("AACgGIABACIABgCIAMgDIAAABIAEgBIAGAAIAJACIAAgBIAFACQgWAFgeAKIgaABQAcgLAMgFg");
	this.shape_1179.setTransform(442.7,363.2,1.179,1.692);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#72A27C").s().p("AgCABIAFgBIgCABg");
	this.shape_1180.setTransform(446,365.1,1.179,1.692);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#72A27C").s().p("AgBAAIABAAIACABg");
	this.shape_1181.setTransform(435.2,350.1,1.179,1.692);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#72A27C").s().p("AgMAAQALgFAOAGIgVACg");
	this.shape_1182.setTransform(447.2,306,1.179,1.692);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#72A27C").s().p("AgIAEIAIgHQAFADADABIABADg");
	this.shape_1183.setTransform(451.8,364.6,1.179,1.692);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#72A27C").s().p("AABACIgIgBQALgHAFAIIgIABg");
	this.shape_1184.setTransform(440.3,350.4,1.179,1.692);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#72A27C").s().p("AgRAHQAGgFAAgCQAKgEAOgEIADAAIABAIQgHABgFAIg");
	this.shape_1185.setTransform(420.2,361.6,1.179,1.692);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#72A27C").s().p("AgPAKIgJgDIARgHQAYgLAIACIgkATg");
	this.shape_1186.setTransform(433.2,363.5,1.179,1.692);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#72A27C").s().p("AgGABQAFgCgHgDIANgBIAIAAIgNAHIAAABQgKABgCACIAGgFg");
	this.shape_1187.setTransform(434.8,311.3,1.179,1.692);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#72A27C").s().p("AAHgDIAHACIgKADIgQACg");
	this.shape_1188.setTransform(452.7,309.8,1.179,1.692);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#72A27C").s().p("AgUADIAKAAIgJgDIARgFIAWABQABACgGACIgCAFIgIABQgNAAgMgDg");
	this.shape_1189.setTransform(444.3,296.2,1.179,1.692);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#72A27C").s().p("AALARIgBgDIgIADIgIAAIgTgTIASgOQAMACAIAIQAIAGAFARg");
	this.shape_1190.setTransform(462.8,362.4,1.179,1.692);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#72A27C").s().p("AgbANIgBgDIAEgCIgEgFQABgEAEgHIALAEIAFAFIABgFIAEAAIgEgCIABgEIABgBIABgBQAFADAJAHIADAJIAEgFIALALg");
	this.shape_1191.setTransform(456.5,363.1,1.179,1.692);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#72A27C").s().p("AgPAIIgPgPIAAgBQAUABASAEQAYADgCADQAAADgFADg");
	this.shape_1192.setTransform(450.7,276,1.179,1.692);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#72A27C").s().p("AgEgJIAEADIADADIABACIABABIABAKQgLgKABgJg");
	this.shape_1193.setTransform(472.7,360.3,1.179,1.692);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#72A27C").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_1194.setTransform(473.2,359.5,1.179,1.692);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#A3C99F").s().p("AgOAEQALgEACAAQABgBgNAAIAJgGIATAJQgFAGgIAAQgGAAgKgEg");
	this.shape_1195.setTransform(812.4,97.9,1.179,1.692);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#A3C99F").s().p("AgZAVQAFAGgRACQgEgNAUgdIAFgEIAigLIAUgCQgFAHgBADIggAMIAhAIIADABIgBABIgsgCQAGAGgJACIAWAMIgPAKIgUgJg");
	this.shape_1196.setTransform(809.9,92.5,1.179,1.692);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#A3C99F").s().p("AgEAAIAJgBIgDACIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_1197.setTransform(807,89.9,1.179,1.692);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#A3C99F").s().p("AgLgEIAFgCIAGAAQANAGAAAHIgYgLg");
	this.shape_1198.setTransform(799.2,94.2,1.179,1.692);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#A3C99F").s().p("AgNAAQgIgHAAgFIANgCQAJAOAVAFQADACgZAIIgNgPg");
	this.shape_1199.setTransform(810.5,53.2,1.179,1.692);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#A3C99F").s().p("AhCAYQAkgYAUAEQgQgEgiACQgiAGgGAAQACgLAZgBQAfgCAEgEIgRABQgLAAgBgEIAVgIQADgCgNAAQATgLAWgFQgLgDAHgGQAEgEAIgFQgCABgoAaQggAUgMgIQgPgKAsgmIAmAAQgBABAAABQAAAAABAAQAAAAABAAQABgBABgBIAgADQAQAGAIAGQgJgFgIAEQgCAFAMANIA1gKQAfAQABAcQAAARgUANQgHgDgOgKIgQAFQgKACgGAEQgBAFABADQAZgEAZAAQgcARg7AJIAGgCQgCgCABgFIgBAFIgPgBIgLgCIAAACQgGABgIAJQgkADgnABQALgTAhgYgAAEAJQAFACATgBIAhgBQgcgVgCgLIgEgDQgHACgIAAIgFgBQgJgCgEgCIAGgBIgIgGQgDAHAPANQAWAQACADIgGgBQgJAAgJAHgAANggIAEgBIgHgEg");
	this.shape_1200.setTransform(833.6,59.7,1.179,1.692);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#A3C99F").s().p("AghgLQAbgFAXgCIgKAHIgLAJQgEABAaABQAaAHgRAMg");
	this.shape_1201.setTransform(813.6,52.5,1.179,1.692);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#A3C99F").s().p("AgRApIgBgBIACAAQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgEgRIARgFQgKgDAHgGQADgDAHgDQgFAAgUAOQgCgOABgMQgEAJgFAYIgLAHQgJgHgEADIgDAEQgGgDgNADIABAAQgEACgEAAIgBABQgBgJARgSIAWgSIgTAKIgBgTIgLAMIgMALQgFgHgDgMQAHgMA/gGQA8gGAMAMQgCgGgDgEQBGAcgEAVIhJgPQACAKAMAOQASAUACAFgAhEgXIALAFQAJgHgCgCIgHgBQgIAAgDAFg");
	this.shape_1202.setTransform(806.8,64.2,1.179,1.692);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#A3C99F").s().p("AgJAbIhggNQAFgBANgFQALgFANgBQgOgFAAgFQABgEAQABQgXgOAdgJIBlAAQgOADAGAKIAOATIgBABQgBgEgIACIAFADQgKAKAEAIQAAgBAPgGQAJAHAPgFQAIgDAPgJQAFAQgIAFQgFACgOAAQADAHADAEQgqgCg3gGgAAXAAIAKgBIAAgCQgBAAAAgBQAAgBAAAAQgBAAAAgBQgBAAAAAAQgDAAgEAGg");
	this.shape_1203.setTransform(816.6,6,1.179,1.692);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#A3C99F").s().p("AAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_1204.setTransform(820.4,5.3,1.179,1.692);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#A3C99F").s().p("AheAcIACgFQAQgIA3gEQAKANALgDQARgTgLgQIAUABIASABQADgBABgDQABgDgcgEQgMAFgDAEQgGgMgSgMIA0ACIABACIAGgCIA0ACQAKAJgoAVQglARhHAaQgegIgTgDg");
	this.shape_1205.setTransform(832.8,86.4,1.179,1.692);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#A3C99F").s().p("AgFgDIALAAIgHAHg");
	this.shape_1206.setTransform(821.6,49.2,1.179,1.692);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#A3C99F").s().p("AgEgBIAJAAIgJADg");
	this.shape_1207.setTransform(824.8,48.7,1.179,1.692);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#A3C99F").s().p("Ah+AlQAPgEAZgIQAWgGAQABQABgBgbgLQgggKgGgMIDdgWIASAIIgMAEIAAAAIAAAAIgPAGQgKgDADAGIgEACQgFgDgKgEIALAJQhHAZADgLQgFATAeAHQASAEAsABIAAADQiOgBhYABgAg4gGQAFgIgFgEIgJAKIADgHQAAgDgNAIIAKACQAEAIAFgGgAgjgGQgCgJgDgDQgDgDgHACQACAMANABIAAAAgAhBgIIAAAAg");
	this.shape_1208.setTransform(815,28.5,1.179,1.692);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#A3C99F").s().p("AAAgBIABAAIgBADg");
	this.shape_1209.setTransform(818,49.2,1.179,1.692);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#A3C99F").s().p("AgiABIgIgCIA0ABIAhACg");
	this.shape_1210.setTransform(809.3,14.7,1.179,1.692);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#A3C99F").s().p("AAAAAIACAAIgDABg");
	this.shape_1211.setTransform(830.3,30,1.179,1.692);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#A3C99F").s().p("AgBAAIACAAIgBABg");
	this.shape_1212.setTransform(866.5,94.5,1.179,1.692);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#A3C99F").s().p("AgBAFIgBAAIgLABIAGgHQgDgDgFABIACgCIANABQAAABAQAHIgEACIgNgBg");
	this.shape_1213.setTransform(832.8,148.6,1.179,1.692);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#A3C99F").s().p("AAAACIAAgBIAAAAIAAgBIAAgCIABAAIgBAFg");
	this.shape_1214.setTransform(855.9,149.6,1.179,1.692);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#A3C99F").s().p("AgEAAIAJgCQgEAFgBAAQgCAAgCgDg");
	this.shape_1215.setTransform(833.7,146.8,1.179,1.692);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#A3C99F").s().p("AAAAWQgagMgVgDQAcADgMgHQgNgGgEAIIABgFIgCAEIAHgtIAuAmQgCADgGABIAKgCIAKAHIgGAIQAGgCAOAGIAUAQQgBADgDADIgCACIgsgUg");
	this.shape_1216.setTransform(860.4,116.4,1.179,1.692);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#A3C99F").s().p("AgFgHIAAAIIAOgHIgDADIgOALg");
	this.shape_1217.setTransform(856.1,3.6,1.179,1.692);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#A3C99F").s().p("AgCAAIACgBIgEgBIgBgBQAHABgCgGIgHACIgCgDIAEgHIAPAFIgEAbIgCAAQgDgKgDgGg");
	this.shape_1218.setTransform(857.9,148.8,1.179,1.692);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#A3C99F").s().p("AgDAAIAHAAIABABQgFgBgDAAg");
	this.shape_1219.setTransform(836.2,146.4,1.179,1.692);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#A3C99F").s().p("AgUgCIAMgHQALAAASgEQABANgIAOQgYgIgKgIg");
	this.shape_1220.setTransform(844.9,26.4,1.179,1.692);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#A3C99F").s().p("AgEAAQAEgGAFADIgCAIg");
	this.shape_1221.setTransform(858.7,145.5,1.179,1.692);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#A3C99F").s().p("AgDgBIADgBQABADADABIgGABg");
	this.shape_1222.setTransform(861.3,142.1,1.179,1.692);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#A3C99F").s().p("AAAgBIACAAIgDADg");
	this.shape_1223.setTransform(855.6,151.3,1.179,1.692);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#A3C99F").s().p("AgCABIAAgBIAFABg");
	this.shape_1224.setTransform(861.5,145.7,1.179,1.692);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#A3C99F").s().p("AAKgNQgEAHAIAJQgTAEgIAHQAHgOAQgNg");
	this.shape_1225.setTransform(856.6,47.5,1.179,1.692);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#A3C99F").s().p("AgKgGIAVAKIgFADQgJgFgHgIg");
	this.shape_1226.setTransform(844.6,6,1.179,1.692);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#A3C99F").s().p("AACAAIAAABIgDAAg");
	this.shape_1227.setTransform(859.5,142.6,1.179,1.692);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#A3C99F").s().p("AgXAAQANgEALgBQAHgBAQACQgJAHgIAEg");
	this.shape_1228.setTransform(842.9,31.6,1.179,1.692);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#A3C99F").s().p("AgEAAIACgCIAGACIAAACQgEgCgEAAg");
	this.shape_1229.setTransform(858.9,144.2,1.179,1.692);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#A3C99F").s().p("AhCgrQAGADAqAFIA6AGIAaADIAAALIgagOQAAALAMASQAMASABAKQgrAAgDACQAAAIgDAGQhLgbgHg8g");
	this.shape_1230.setTransform(863.2,86.5,1.179,1.692);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#A3C99F").s().p("AgGAFQgKACAHgEQAGgDAPgFIAAALg");
	this.shape_1231.setTransform(869.6,62.9,1.179,1.692);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#A3C99F").s().p("AgVgEQAMgFAKgBIAUAAIAAAVQgpgKgBgFg");
	this.shape_1232.setTransform(868.5,8.5,1.179,1.692);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#A3C99F").s().p("AgXAdIADgBIgFABQgjgJgFgFIABgFQACgKACgHIAdAKQgBgRAVgHQgOADgNgCQgIAEgLABQATgxAsAWIgmATQAWABAIgBQAPgCAIgIQAUANAYAXIAAAvQg8gNgcgIgAABAQIgTACQgJACAOAHQAdgHAWAGQACgBgMgHIgKgGQgJgCgWAAIAOAGgAAWgBIgOADIALABQAGAOAKgTIgDAAIgKABgAA4AFQgBgGgDgCQgFgCgIABQABAHAQACIAAAAg");
	this.shape_1233.setTransform(863.3,31,1.179,1.692);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#A3C99F").s().p("AAQAbQgOgRgZgWQAXABgBgGIABgIQAAACAIAAQALgBgIgFIANAIIAAAxQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBg");
	this.shape_1234.setTransform(868.3,52.7,1.179,1.692);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#A3C99F").s().p("AgrAfIgDgGQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAABAAABQgIgXAEgRIAAgCIADAAQARgLATgDIABgBQgRAAgIABIAYgFIANANQgDgBgDABQAAAEgEADQAHACAGgDIAhAYQASAOADADQggAHgTACIgWACQgRAAgJgFg");
	this.shape_1235.setTransform(860.7,55.3,1.179,1.692);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#A3C99F").s().p("AgNAEQADgMABgCQgLAFgMgBIAAgDQAQgHAOAAIAXACIAMALIAAALQgmgIgMARg");
	this.shape_1236.setTransform(867.1,3.2,1.179,1.692);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#A3C99F").s().p("AgRgFIAkAFIgJAGIgbgLg");
	this.shape_1237.setTransform(720.6,94.3,1.179,1.692);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#A3C99F").s().p("AgXAGIAXgLIAYgCQgYAPgOAAQgFAAgEgCg");
	this.shape_1238.setTransform(734,99.1,1.179,1.692);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#A3C99F").s().p("AgggGIACgDIAFAAQAdAJAdAJIAAABIhBgQg");
	this.shape_1239.setTransform(721,89.7,1.179,1.692);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#A3C99F").s().p("AgeAaQAWgHgxgOIg4gKQACgKBDgGQApAKAQAAQAYACAFgOIgEgBIBMgFIhGAXIAaAGQAPAEAKABIg8gEQAGAHgIACIANAIIgGABIAAgBIgJACIg3AKg");
	this.shape_1240.setTransform(778.8,106.3,1.179,1.692);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#A3C99F").s().p("AgpATQgDgJgFgIQAAgHAFgIIBegGIhCAVIAWAHQAPAFAKABIg5gEQAGAHgJACg");
	this.shape_1241.setTransform(755.9,104.6,1.179,1.692);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#A3C99F").s().p("AAIgFIAEABQgGAAgSAKQAJgGALgFg");
	this.shape_1242.setTransform(752.9,99.6,1.179,1.692);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#A3C99F").s().p("AgCAAIAFAAIgBAAg");
	this.shape_1243.setTransform(761.3,68.6,1.179,1.692);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#A3C99F").s().p("AgBAAIADAAIAAABg");
	this.shape_1244.setTransform(744.2,114.8,1.179,1.692);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#A3C99F").s().p("Ah7AyQAagZAAACQAAgegsAdQguAngGADQABgUAYgsQAWgpAZgfIAyAAQgTAJAEAPIAkgTQATgHACANQADANgKAAQAEADAggEQAlgGAHABQACgBgHgCQgMgEgJgJIAxAUQAMgIgWgDQgWgCAHgBIAKgIIgBAAIAxAAIABAEIAFgEIADAAQgPAUAHAEQALAGAWgMQAdgRADAAIgJAFQgGADAIACQgOADgRAHQAKAAgCABIgQAGQABACAKAAIALgBQgDADgXAAQgSABgBAJIAcgFQAXgEAEAIQgEgHgOAKQgFACgDAEQgMAKAAAGQAIgDAIAAQAMAJAuAGIAGACQgLgDgNACQAOADgDACQhCgBgWAHQgcAIAoAUQglgMgegIQg4gQgDAOQAEANAKAKQgrAAgEANQgJgKgdAFQghAHgLACIgDABQgCAAASgTgAAAAUIAFAAIABgCgAgRATQARgGAQABIAmACQgBgHgJgIQgFAEgegHQANAOgpACIhEgDQANAHA5ABgAA9gRQgGgGgGgFIgZABIATAFQAMADAGACIAAAAg");
	this.shape_1245.setTransform(773.5,11.8,1.179,1.692);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#A3C99F").s().p("Ai3AIIASAEQgBgIgHgEQAeAAAkgLQAqgOAOgTQAPgBAkgSIAAAAQAVgEAPAEQABgBgHgDIgKgGIAYgPQBBAJBGgJIAGADQgUAGhRANQhBAKAAAIQAHAQAOgEIgPAJQg7AIgeALIgBgHIgCAJQgzASATAfQgOAIgJAIIADABIgGADIgcgOQAJAMAMAHQgdARgUAEQgDg1ABgcg");
	this.shape_1246.setTransform(771.4,55.9,1.179,1.692);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#A3C99F").s().p("AAAgBIAIABQgIACgHAAg");
	this.shape_1247.setTransform(695.5,100.1,1.179,1.692);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#A3C99F").s().p("Ag8ALIARgFQgOgEAFgFQACgDANgIQAzgLAKAAQAhgBAEAaQADAZgpABIgFAAQgfAAgvgPg");
	this.shape_1248.setTransform(738.7,61,1.179,1.692);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#A3C99F").s().p("AgIACQgFgCgBgFIAdALIgJAAQgIAAgGgEg");
	this.shape_1249.setTransform(719.7,67.4,1.179,1.692);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#A3C99F").s().p("AAAAAIABAAIgBAAg");
	this.shape_1250.setTransform(700.3,118.1,1.179,1.692);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#A3C99F").s().p("AgHABQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIADgBIAJACIgKABQgEAAgBgBg");
	this.shape_1251.setTransform(705.1,118,1.179,1.692);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#A3C99F").s().p("AAEgEIAAAHIgIABg");
	this.shape_1252.setTransform(743.2,123.8,1.179,1.692);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#A3C99F").s().p("AgogJQAEgCgLAAIgHgDIAEgBQAhANAgAIQAeAJAKABQgPAAhQgZg");
	this.shape_1253.setTransform(732.5,68.8,1.179,1.692);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#A3C99F").s().p("AgTAAIAWgDIARADQgIADgJABg");
	this.shape_1254.setTransform(723.2,124.9,1.179,1.692);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#A3C99F").s().p("AAWAdQgKgCgKALIghgFIgZgKQAUgTAVgLQALAAAPgLQAGgBAIACIgKgDIAagRQAMgGAEAJIgCA8IgQAAIAPAJIgIAFQgTgLgFAAg");
	this.shape_1255.setTransform(737.9,107.5,1.179,1.692);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#A3C99F").s().p("AgGgBIAOABQgIAAgHADIABgEg");
	this.shape_1256.setTransform(716.1,92.6,1.179,1.692);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#A3C99F").s().p("AgigHQAPADAQgFIAngBQgSAJgPAMQgmgPABgDg");
	this.shape_1257.setTransform(736.1,124,1.179,1.692);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#A3C99F").s().p("AAVAQIgqgRQAOgGAFgIQAZAPgCAQg");
	this.shape_1258.setTransform(725.1,106.8,1.179,1.692);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#A3C99F").s().p("AALgGIgEAEIAFAFIgXAEQACgMAUgBg");
	this.shape_1259.setTransform(731.8,103.8,1.179,1.692);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#A3C99F").s().p("AgcgFIAEgGQAVAKAgAMIgDABg");
	this.shape_1260.setTransform(722.4,63.8,1.179,1.692);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#A3C99F").s().p("AAfAjQgUgLgLAGIgcgEIgDgZIgGAXIhEgMQAegaAggSIAAABQADALBCgKIBOgMQgCArAEArQgQgBg7gIg");
	this.shape_1261.setTransform(732.2,82.6,1.179,1.692);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#A3C99F").s().p("AgIgHIAKAEIAHALQgIgDgJgMg");
	this.shape_1262.setTransform(744.7,4.3,1.179,1.692);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#A3C99F").s().p("AgrASQAigHAdAAQgUgJAJgCQAGAAAUgBIgXgKIAQgNQAHACAJAAIAAANIgOACIAOAGIAAAJQgfANgNACQgIACgIAAQgPAAgMgHg");
	this.shape_1263.setTransform(738.4,130,1.179,1.692);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#A3C99F").s().p("AgMgDIAMgLQAAAEAHAKQAIAJgCAGQgNgNgMgFg");
	this.shape_1264.setTransform(723.3,58.9,1.179,1.692);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#A3C99F").s().p("AgXgBQAXgDAYgGQgIAFgHAIIgEACIADAAIgCAGQgJgGgUgGg");
	this.shape_1265.setTransform(778.9,96.3,1.179,1.692);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#A3C99F").s().p("AgQAJIgBADQgCgTgRgFQAvACAVAGIAFAGIg2ALg");
	this.shape_1266.setTransform(783.9,84.3,1.179,1.692);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#A3C99F").s().p("AgNABIAWgFIAFABQgHAAgOAIg");
	this.shape_1267.setTransform(783,99.4,1.179,1.692);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#A3C99F").s().p("Ag3gKQABgUAcgIQAWgFAoACQAWAPgCANIhHgRQABAMAQASQASAUABAMQgSAFgPABQgfACADgQQgDALAHAIQgTgOAAgng");
	this.shape_1268.setTransform(756.3,82.1,1.179,1.692);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#A3C99F").s().p("AgRgGQAOgDAAgBIgNABIAFgMIAjAAQggAfgPAMQADgTADgJg");
	this.shape_1269.setTransform(754.1,3.8,1.179,1.692);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#A3C99F").s().p("AAAAAIAAAAIABABg");
	this.shape_1270.setTransform(795.8,105,1.179,1.692);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#A3C99F").s().p("AihBIIgBAAIABAAgAh2AzQAogZgQgLQgjgEgZAjQATgjAAgGQAAgEgNAOQgvAwgHADQADgtAKgPQAHgKAUgCQAigEAJgDQAfgKAfgdQABgIgEgHQAGgCA2gCIANADQgYAEgIAZQADAMCbgOIAGAFQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIAFAFQABABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAKAGARgDQAKgCARgGQAEALgMADIgRABQAFAJAKADQgUgFgVACQgYABgQAKQAIAAANAGIhJADQAHgHgCgIQgFgQhAAYIgBAAQgXAHgPAIIAJgBIgQAHIgCgBIgCADQhfAvgLACIArgVg");
	this.shape_1271.setTransform(774.3,34.4,1.179,1.692);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#A3C99F").s().p("AgzAbQABgJASgRQAUgSATgMIAaACQgcAEgIAaIA3gBQgWAEg5AYQgOgHgKAEg");
	this.shape_1272.setTransform(770.4,81.6,1.179,1.692);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#A3C99F").s().p("AgCALQgEgLgJgPQAhAPgCAQg");
	this.shape_1273.setTransform(596.3,133.3,1.179,1.692);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#A3C99F").s().p("AgFgFQABAFAEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIABABQAHAEgBAGQgLAAAAgLg");
	this.shape_1274.setTransform(566.4,112,1.179,1.692);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#A3C99F").s().p("AgRgTQAPgBAUgDQgEAVgEAaQgIgZgTgSg");
	this.shape_1275.setTransform(669.3,75.4,1.179,1.692);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#A3C99F").s().p("AgBAAIABgCIACAFg");
	this.shape_1276.setTransform(639.8,89.2,1.179,1.692);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#A3C99F").s().p("Ag2ALQAZgBAEgDIgOABQgKAAAAgDIARgFQADgCgLAAQAQgJASgEQgKgDAHgFQAPAKAcAJIAqALIgWAKQgJAAgkgCQgagCgTAFQgiAGgGAAQABgMAVgBg");
	this.shape_1277.setTransform(609.5,128.3,1.179,1.692);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#A3C99F").s().p("AgFAAIAKgBQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAgBABIgIgCg");
	this.shape_1278.setTransform(634.2,126.6,1.179,1.692);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#A3C99F").s().p("AgRgDIAWgBIANAJQgYgFgLgDg");
	this.shape_1279.setTransform(525.6,126.4,1.179,1.692);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#A3C99F").s().p("AgJAAIgFgEQAOADAPAEIgMACg");
	this.shape_1280.setTransform(526.6,137.4,1.179,1.692);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#A3C99F").s().p("AgGgFQAGgCACADQADADACAIQgLgCgCgKg");
	this.shape_1281.setTransform(556.9,144.7,1.179,1.692);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#A3C99F").s().p("AgEACIAIgJQAEAEgFAHQgCAEgBAAQgCAAgCgGg");
	this.shape_1282.setTransform(554.9,145.2,1.179,1.692);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#A3C99F").s().p("AgGgBIABgCQAFACAHAEIgHABg");
	this.shape_1283.setTransform(572.5,144.8,1.179,1.692);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#A3C99F").s().p("AgGgCQADADADgBQACgBgIgDQAOADgCAGIgDAAQgHAAgCgHg");
	this.shape_1284.setTransform(535.2,137.8,1.179,1.692);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#A3C99F").s().p("AgHADQACgCABgBQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIAFAAIAIAEQgFACgDACIgEABQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_1285.setTransform(556.2,134.6,1.179,1.692);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#A3C99F").s().p("AAEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIgJABQAFgFADADg");
	this.shape_1286.setTransform(535.6,145.8,1.179,1.692);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#A3C99F").s().p("AAAABIAAgCIAAACIAAABIAAgBg");
	this.shape_1287.setTransform(555.2,134.9,1.179,1.692);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#A3C99F").s().p("AgDgBIAFAAIACABIAAACg");
	this.shape_1288.setTransform(538.1,146.2,1.179,1.692);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#A3C99F").s().p("AgFABQALgGAAAEIgDAEg");
	this.shape_1289.setTransform(553.8,144.9,1.179,1.692);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#A3C99F").s().p("AgCgCIAFADQgCgBgCACg");
	this.shape_1290.setTransform(576,143.4,1.179,1.692);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#A3C99F").s().p("AgEgHQAAAEACgCQABADAHgEQAAANgLACg");
	this.shape_1291.setTransform(554.1,158.6,1.179,1.692);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#A3C99F").s().p("AAJABIgBABIgLACQgOgQAaANg");
	this.shape_1292.setTransform(574.1,144.5,1.179,1.692);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#A3C99F").s().p("AgCAFIAAgBIgDABIAAgBIADAAIAAgEIAEgEQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgEAJg");
	this.shape_1293.setTransform(552.2,159,1.179,1.692);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#A3C99F").s().p("AgZAHQAbgPAVgDIADADQgWAIgVAMg");
	this.shape_1294.setTransform(688.1,98.9,1.179,1.692);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#A3C99F").s().p("AgGAAQAJgFAEAIQgHAAgGgDg");
	this.shape_1295.setTransform(678.3,90.6,1.179,1.692);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#A3C99F").s().p("AguAKQAegBAIgHQgfACgHgBQACgEADgFIAUgIQAEgCgMgBQATgJAlAFQABAGAHAJIAMALQgCAHABAGQgoAIAFgPQgDAGAEAFQgWgCgdAEQgCgGgFgIg");
	this.shape_1296.setTransform(689,92.3,1.179,1.692);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#A3C99F").s().p("AgUgXIApgHQgCAbgFAQQgOALgDAHQgNgUgEgig");
	this.shape_1297.setTransform(676.3,74.8,1.179,1.692);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#A3C99F").s().p("AgRATQABgMAYgYQAHgFADAAQgBAZABAUQgTgKgQAGg");
	this.shape_1298.setTransform(676.1,112.3,1.179,1.692);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#A3C99F").s().p("AANgKIgBARIgXAEQABgQAXgFg");
	this.shape_1299.setTransform(677.9,96.2,1.179,1.692);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#A3C99F").s().p("Ah+AcIAOgNIgMAHQAPgcBBgcQBBgcAdAQIgpAOIA7AZQAuATAOAVQgOgBgNAFQAAgcgaABQgQAAguARQgCgHgDgXQgGARgCASIAAABQgDgLgJgGQAFAMgEAEIgMAJIgMADIgBAAIAJgGQgFABgGAEIgKgFIAHAHIgEACQgSAFgSABQgygDAFgWgAgLgHQgBgFgDgDQgZgBgIACIAlAHIAAAAg");
	this.shape_1300.setTransform(697.3,73.5,1.179,1.692);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#A3C99F").s().p("AghAIQAPgWAmAJIgBAAIAPAGIgCABQgIgBgIADIgGgDQAFAGgUABIgcAAg");
	this.shape_1301.setTransform(688.6,109.6,1.179,1.692);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#A3C99F").s().p("AgQATQABgaAKgNIAIAGIgKAHQAmgMgaATQAEAAAIAAIgJAMQgSAFgFAEg");
	this.shape_1302.setTransform(685.4,114.7,1.179,1.692);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#A3C99F").s().p("AgVgHQAGAAAlAIIgaAFIACgGIgFAGIgKACQgEgIAAgHg");
	this.shape_1303.setTransform(686,128.1,1.179,1.692);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#A3C99F").s().p("AAHgFQADAEAHACQgOADgTACQAOgIAJgDg");
	this.shape_1304.setTransform(660.8,118.5,1.179,1.692);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#A3C99F").s().p("AAJgEIAAAFIgRADQABgGAQgCg");
	this.shape_1305.setTransform(638.6,130,1.179,1.692);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#A3C99F").s().p("AgYASQgHgFANgNQAQgGAUgMQADAGAHAIIgRAIQgLAJgGADQgHADgGAAQgDAAgCgBg");
	this.shape_1306.setTransform(641,124.7,1.179,1.692);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#A3C99F").s().p("AgJAAIAJgBIAKABQgIAAgFACg");
	this.shape_1307.setTransform(657.2,135.9,1.179,1.692);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#A3C99F").s().p("AgPgGQANAEAWACIAIABIg3AGQADgGAJgHg");
	this.shape_1308.setTransform(656.4,125.8,1.179,1.692);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#A3C99F").s().p("AgEAAIACgBQAEABADABIgEABg");
	this.shape_1309.setTransform(691.3,151.7,1.179,1.692);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#A3C99F").s().p("AgDAAIAHAAIgEABg");
	this.shape_1310.setTransform(641.9,144.6,1.179,1.692);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#A3C99F").s().p("AgaASQgDgCAAgEQASAAAEgEQgTADgBgEIAOgGQACgBgIAAQALgFAOgEQgJgDAMgGQASASADAIQgQAFgGAGQgJgFgZAEg");
	this.shape_1311.setTransform(643.3,127.1,1.179,1.692);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#A3C99F").s().p("AAJAAIgBAAIgQACQAKgEAHACg");
	this.shape_1312.setTransform(643.2,130.7,1.179,1.692);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#A3C99F").s().p("AgNAEQACgEAUgEIAFgBQgGAFgOAGg");
	this.shape_1313.setTransform(655.4,146.8,1.179,1.692);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#A3C99F").s().p("AAAAAIgGAAIANAAIgLABg");
	this.shape_1314.setTransform(647.8,137.9,1.179,1.692);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#A3C99F").s().p("AgMgBIAGgDQALgFAFAGQAFADgEAIg");
	this.shape_1315.setTransform(677.2,45.7,1.179,1.692);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#A3C99F").s().p("AgtATQAPgEAKgHIgBgBIAVgBQAJAAAFgEIgPABQgMAAgBgDIATgHQAEgCgMAAIAZgMQAVAWAEAQIgegFIAAAAIAAAAIgBADQgPAAgWADIgZAEg");
	this.shape_1316.setTransform(659.6,113.8,1.179,1.692);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#A3C99F").s().p("AgGgDIAEgFIAKASQgGgDgIgKg");
	this.shape_1317.setTransform(679.1,11.3,1.179,1.692);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#A3C99F").s().p("AgRAAQABgDALgBIARgBIAGAFIgXACIAEADIgKABQAKgIgQACg");
	this.shape_1318.setTransform(644.1,99.2,1.179,1.692);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#A3C99F").s().p("AgEACIgCgBQABgBAEgDQADADAFAEg");
	this.shape_1319.setTransform(676.7,145.8,1.179,1.692);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#A3C99F").s().p("AgaALQgJgFAOgRIAvgCIAFAFQgWANgJAFQgJAEgHAAQgGAAgEgDg");
	this.shape_1320.setTransform(658,110.8,1.179,1.692);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#A3C99F").s().p("AhBgIQgDACAAACIgNgGQAKgCgHgIIA7AEQgJgBgQgFIgZgGIBEgXIAoAtQAeAeANASQgWAFgKAFQh7g2AIgGg");
	this.shape_1321.setTransform(667.6,35,1.179,1.692);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#A3C99F").s().p("AgZAAIAZgLIALAAQARALgCAMg");
	this.shape_1322.setTransform(648.1,120,1.179,1.692);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#A3C99F").s().p("AgVAyIAAgGIgBAFQgXgIgLgDQgTgEgQAEIgCAAQADgJARgNQAQgLAGAEQgJgHghAGIAHgHQAUAAAFgBIgKAAQgIAAgEAAIAFgFIALgDQABgBgHAAIADgDQAPgGAOgDQgJgCAGgEIAKgGIgQAFQAQgNAQgJIARgCQABAGgPgDQAHAIASAAIAkgBIABgDIABAAQAPANASAJQgBAFgJAFQgNAIgEAEQgEAAAcACQAaAGgRANIg4gbQARgDAFgPQAGgFgCgDIgWgDQgMgBgDAKQAHgEAEADQADACAAAFIgiAAQgTACADALIAUABQAPACAIgBQAJAIANAGIAFACQgKgFgIABQgKABgLAKQACgGAHgDIgvgPIADgBQgTgHgEAFQgFAEAjANIgVARIAGABIASgKQgHARASACIgEAIIgKALgAgnAXQAFgNgHgCIgFAEQABACgBgCIgBAAg");
	this.shape_1323.setTransform(638.8,108.8,1.179,1.692);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#A3C99F").s().p("AgEAAIAAAAIAFAAIAEABg");
	this.shape_1324.setTransform(642.9,148.8,1.179,1.692);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#A3C99F").s().p("AgEABIAFgCIAEABIgDACg");
	this.shape_1325.setTransform(663.5,148.6,1.179,1.692);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#A3C99F").s().p("AgLAAIAGgFQAFAFAMAGIgDAAg");
	this.shape_1326.setTransform(641.2,133.4,1.179,1.692);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#A3C99F").s().p("AgLgCIAXgCQgCAEgIAEg");
	this.shape_1327.setTransform(668.2,88.7,1.179,1.692);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#A3C99F").s().p("AgEADIgDgDIAIAAIgFgCIAMACIgIADg");
	this.shape_1328.setTransform(644.1,148.5,1.179,1.692);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#A3C99F").s().p("AgCgCIAIACIgLADg");
	this.shape_1329.setTransform(685.8,11.2,1.179,1.692);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#A3C99F").s().p("AAVgJQAGAGAKAEQg/AJgKAAQAdgIAcgLg");
	this.shape_1330.setTransform(696.7,62.5,1.179,1.692);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#A3C99F").s().p("AkBCPQAeABADgLQABgCgGgBQAEAIgXgFQAFgDAfgIQAbgIASgUQAHgCAAgBIgDgCIADgDQBDgWAxg0QgFgPhSAkQhWAqgMADIAjgSQAhgTgNgKQgdgCgVAbQAagvgVAWQglAngGACIABgRQAGgEAJgCIgOAAQAEgUAHgKQAGgIANgFQAngFAgAAIgTgJIAZgLQArgEhigJIgFgFQAeggAAADQAAgdgwAmQgJgMAFgCIgOACIAGgLQBlgRgDgDQgQACgXgHIgmgMQASgcAOgPIAeAPQAUAGAHgJIgxgaQAJgDgGgHIA7AEIgZgGIgZgHIAEgBIBgAAIgCADIA3AMQAwANgXAHQAKAJAPgCQAKgBASgHIgBgCIADABIARgHQADAKgCAGQAgAQAKgMIgygaQAJgCgGgIIA7AEIgZgGIgZgHIAEgBIBBAAQALATAnAbQAiAXALACQhAALAIAZIAkgTQASgHACANQADANgJAAQADADAUgDQAAALgCAVIgCAcQgWgYgOgMQgbgYARAwQgqgrg7gKQAAAABEBOQBGBQACAWQgNgEhBgeQhMgjgfgSIAbAAQgMgDgNgJIgQADIAHAHQgMgIACgCQgMAIAOASQAGAJARAQQgygkg7gGQAFAIAEAHIgFACIAGAAQAUAcAgAIQglgIBFAZQBpAjAPAJQgygFgGAmQADAKAcgFIggAUQgzgTgEgQIAQgOIgfARIgBgfQgDAGgWATIgWgIIgDgLQA4gMAWgFIAMgGQgKgIgoALQgoALgDgGIACgBIgCABIgFg4QgLAhgGAiQgGAGgDAFIAIgCIgBAEIgHAAIgBADQACACAFABIgBANQgJgegXgRQAMAggNAMQgXAMgOANQgFABAhAEIgeAEIgZgNQAcgLAagPQgUgHgRAFQANgNAAgTQgDAFg8ARQg9APAIgKQgEAGAAAJIABATQgDAYg0ALQgBgkAJgQgAgLgWQAkACAigBQgQgOgIgJIgCgBQANAQgsACIhCgCQAKAEArADgAAYhZQAngFAGABIAAADQArgJgCgBQgSADgggLQghgMgRADIAIgIQgjADgWAHQgdALAFARIAkgTQASgHADANQADANgJAAQADAEAhgGgAjlBOIAAAAIAAAAg");
	this.shape_1331.setTransform(714.8,33.1,1.179,1.692);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#A3C99F").s().p("AgSAEIAHgMQATAAALgCIgaAVQAHgKgSADg");
	this.shape_1332.setTransform(688.1,8.9,1.179,1.692);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#A3C99F").s().p("AgOAAIAdAAIgMABg");
	this.shape_1333.setTransform(695.4,104.3,1.179,1.692);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#A3C99F").s().p("AgDALQgRgIgGADQAAgGAPgMIAmAJQgGADgFAGQgFAHgHAAQgEAAgDgCg");
	this.shape_1334.setTransform(701.9,93.2,1.179,1.692);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#A3C99F").s().p("AgEAAIAJgBIgFADg");
	this.shape_1335.setTransform(709.9,66.6,1.179,1.692);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#A3C99F").s().p("AAAgEQACAFAAAEIgCAAQgCgEACgFg");
	this.shape_1336.setTransform(694.9,94.3,1.179,1.692);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#A3C99F").s().p("AgegIQAQgCAggBQAcAKAOABQgJAAgHAAQgYAAglAGIgqAGQACgRAbgDg");
	this.shape_1337.setTransform(724.6,73.4,1.179,1.692);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#A3C99F").s().p("AgEABIAEgCIAFgBQgDAEgGABg");
	this.shape_1338.setTransform(866.1,145.6,1.179,1.692);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#A3C99F").s().p("AgCACIAFgEQgCAEgBABg");
	this.shape_1339.setTransform(864.1,147.3,1.179,1.692);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#A3C99F").s().p("AgGAAIANAAIgHABg");
	this.shape_1340.setTransform(793.7,40.7,1.179,1.692);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#A3C99F").s().p("AhoAbQApgQAlgRQA3gQBZgUQgJAagEAeIgBAAQgFgRgOgKQAIASgIAIQgOAIgIAHIgMACIgVgLQAGAIAGAEQgpAGg6AEIAWgHQgLgDAHgGIANgJQgHADgLAIIgXAOIgxACQACgHAKgJg");
	this.shape_1341.setTransform(779.9,61,1.179,1.692);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#A3C99F").s().p("AgJAHIARgHQADAAgLAAIAAgBIADgBIgBgBIAIgDIAAAAIgCANg");
	this.shape_1342.setTransform(801.3,69.9,1.179,1.692);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#A3C99F").s().p("AgUgLIAdgHIAMAFQggASgFAOIgEgegAAEgIIgEADIAAABIADACIABgGIAAAAg");
	this.shape_1343.setTransform(796.5,55.7,1.179,1.692);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#A3C99F").s().p("AgXASQgSgFgPAAQAIgCAAgEQgBgDgCgDQgDgDgHAAIAcgFQAbgGAXgIQA4AVAOARIgzACIgSgFIABAFIhjACQgaAABTgDg");
	this.shape_1344.setTransform(782.4,74.3,1.179,1.692);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#A3C99F").s().p("AgLAAIAOgHQARAGgPAJg");
	this.shape_1345.setTransform(790.5,68.5,1.179,1.692);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#A3C99F").s().p("AAAgFIADAHIgFAEQgCgGAEgFg");
	this.shape_1346.setTransform(510.6,121.7,1.179,1.692);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#A3C99F").s().p("AgEgCIAJgBQgFAHgCAAQgCAAAAgGg");
	this.shape_1347.setTransform(531.4,117,1.179,1.692);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#A3C99F").s().p("AAXAgIgdgPQAGAHgXADQg/gZABgCQAXABAcgLIAAABIAHgCIACgDIAcgQIBUgFIhFAXIAZAHQAPAFAJAAIg7gDQAGAFgJACIAyAaQgFAGgJAAQgHAAgLgEg");
	this.shape_1348.setTransform(495.6,107.1,1.179,1.692);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#A3C99F").s().p("AgBAAQABAAACAAIgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgBgBg");
	this.shape_1349.setTransform(493.6,53.4,1.179,1.692);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#A3C99F").s().p("AgCAAIAAgCQAHACgDACIgCABQgBAAgBgDg");
	this.shape_1350.setTransform(506.7,6.3,1.179,1.692);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#A3C99F").s().p("AAAgDQAEAAgFAHQAAgDABgEg");
	this.shape_1351.setTransform(496.2,29.7,1.179,1.692);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#A3C99F").s().p("AgBAAIABAAQABgCABACQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAIgBgCg");
	this.shape_1352.setTransform(491.4,67.7,1.179,1.692);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#A3C99F").s().p("AACgBIgBADQgFgCAGgBg");
	this.shape_1353.setTransform(518.5,100.5,1.179,1.692);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#A3C99F").s().p("AgWARQAFAAACgIIAOgEQgKgDgEADQgBgFgHgCQAJgCgOgGIACgFIASgCQAQARAVANIgBABQgfAEgMAAQgGAAgBgBg");
	this.shape_1354.setTransform(493.3,133.8,1.179,1.692);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#A3C99F").s().p("AAOAKQABgHgFgDQgFgCgKADIgFADIgVgEQAOgJAcgEQAXANgCAOg");
	this.shape_1355.setTransform(515.3,119.3,1.179,1.692);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#A3C99F").s().p("AgcADQACgIA3gFQABAIgHADIgPAKQgfgIgFAAg");
	this.shape_1356.setTransform(512.7,104.4,1.179,1.692);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#A3C99F").s().p("AgDgGIAHgBIgCAPIgFgOg");
	this.shape_1357.setTransform(517.9,103.5,1.179,1.692);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#A3C99F").s().p("AgHgBIAPABQgEAAgEACg");
	this.shape_1358.setTransform(497.2,98.4,1.179,1.692);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#A3C99F").s().p("AAAAAIAFAAQABAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgKAAg");
	this.shape_1359.setTransform(525.2,121.4,1.179,1.692);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#A3C99F").s().p("AgOgDIAEgCQAkADgQAIg");
	this.shape_1360.setTransform(527.2,121.4,1.179,1.692);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#A3C99F").s().p("AglADIgigFQACgKAxgFIgGAHQARgEAfAMQAgAJASgDQAEAChCALQgKgFglgJg");
	this.shape_1361.setTransform(492,119.7,1.179,1.692);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#A3C99F").s().p("AAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_1362.setTransform(508.3,19.2,1.179,1.692);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#A3C99F").s().p("AgCABIAGgCIgBADg");
	this.shape_1363.setTransform(606.9,145.3,1.179,1.692);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#A3C99F").s().p("AAAAFIgDgFIAHgEIgCAJg");
	this.shape_1364.setTransform(608.5,144.7,1.179,1.692);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#A3C99F").s().p("AgJAFQgBgFAGgFIAOAEIAAABQgGAAgKAGg");
	this.shape_1365.setTransform(602.3,170,1.179,1.692);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#A3C99F").s().p("AgNgBQAJgEAIgDQANAEgEAEIgCACIgWAHg");
	this.shape_1366.setTransform(611.7,143.4,1.179,1.692);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#A3C99F").s().p("AAAAFQgNgFgHgCIApgDIgCAEQgHAHgIAAIgEgBg");
	this.shape_1367.setTransform(603.6,142,1.179,1.692);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#A3C99F").s().p("AgCAAIgBAAIAGAAIgCABg");
	this.shape_1368.setTransform(615.5,148.8,1.179,1.692);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#A3C99F").s().p("AgKAAIAVgBIgQADg");
	this.shape_1369.setTransform(606.5,154.9,1.179,1.692);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#A3C99F").s().p("AgLgDQADADAHAFQgVgHAAgDQARADAQgHIAMAAQgCADgFADQgGADgDABQgCABAOABIgBAHg");
	this.shape_1370.setTransform(604.4,147.9,1.179,1.692);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#A3C99F").s().p("AgKADQAIgFgFAAIAHgBQAJAAADADIgMACIgIACIgCgBg");
	this.shape_1371.setTransform(616.1,141.8,1.179,1.692);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#A3C99F").s().p("AgCgBQALACgIABIgBAAQgEAAACgDg");
	this.shape_1372.setTransform(625.2,57.6,1.179,1.692);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#A3C99F").s().p("AgTgEIAKgDIACABIgBADIANABIABAAIgFACIASAIQgLgGgbgGg");
	this.shape_1373.setTransform(640.5,150.6,1.179,1.692);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#A3C99F").s().p("AgBAAIACAAIABABg");
	this.shape_1374.setTransform(634.1,92,1.179,1.692);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#A3C99F").s().p("AAAgJIACAEQAFgCAAgDIAbgBQgCADgLABQgEAAASAEIgWAFQgBAAgBABQAAAAgBAAQAAABAAAAQABAAAAAAIgtAIQADgSAfgDg");
	this.shape_1375.setTransform(631.9,96,1.179,1.692);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#A3C99F").s().p("AgLAAIAOgHIAJAHQgOgDgCADQgBACAFAFIgLgHg");
	this.shape_1376.setTransform(637.1,91.1,1.179,1.692);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#A3C99F").s().p("AgFgIIAEABQAEACADAFIgKAJg");
	this.shape_1377.setTransform(533.2,117.8,1.179,1.692);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#A3C99F").s().p("AAAAOQAHgBABgCQgIgFADABQAGACgJgGIAWgDIgMgCQAOACgCgGQgNADABABQgNgDgSgIIgCgCIgBABIgKgFQAOADANAHQgOgOAWAFIAgAIIACAZIgMAEIghABQADgFAHgBg");
	this.shape_1378.setTransform(543.1,162.4,1.179,1.692);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#A3C99F").s().p("AgLgBIAZABQgWACgFAAg");
	this.shape_1379.setTransform(523.6,116.6,1.179,1.692);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#A3C99F").s().p("AgBAAIADAAIgBABIgBAAIgBgBg");
	this.shape_1380.setTransform(529.5,117.2,1.179,1.692);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#A3C99F").s().p("AgDgBQADgEADABIABAJg");
	this.shape_1381.setTransform(546.5,159.5,1.179,1.692);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#A3C99F").s().p("AgDAAIgBgBQAQACgLgBQADACgEAAIAAAAQgCAAgBgCg");
	this.shape_1382.setTransform(569.5,19.3,1.179,1.692);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#A3C99F").s().p("AgYgDIAxgDIguANg");
	this.shape_1383.setTransform(411.6,146.1,1.179,1.692);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#A3C99F").s().p("AgDASQAHAAgDgOQgBgKgRAGIglASQgFgSAdgIQAWgIAjgCIgIAIQAPgDAWAGQgdADgOAAIATAUIgCABQgMgKgFADQgCADAGAFIgIABIgDgBIAAABQgIAAgBgBg");
	this.shape_1384.setTransform(460.8,133.7,1.179,1.692);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#A3C99F").s().p("AgIABIAAgDIARAEIAAAAg");
	this.shape_1385.setTransform(410.6,150.2,1.179,1.692);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#A3C99F").s().p("AgKgBIASABIADACQgRgCgEgBg");
	this.shape_1386.setTransform(455.5,146.9,1.179,1.692);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#A3C99F").s().p("AgCAAIAFAAQABAAgFABg");
	this.shape_1387.setTransform(474.4,134.7,1.179,1.692);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#A3C99F").s().p("AAAAGIgBgBIgDgMIAJAEIgCALIgDAAg");
	this.shape_1388.setTransform(469.9,134.7,1.179,1.692);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#A3C99F").s().p("AgKgDQAMADAIAAIABABIgOADQgFgEgCgDg");
	this.shape_1389.setTransform(472.4,134.9,1.179,1.692);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#A3C99F").s().p("AAGAEIgigJQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAZAIQAQACANgCQACACgiAHQAEgFAFAAg");
	this.shape_1390.setTransform(284.7,133.9,1.179,1.692);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#A3C99F").s().p("AgEAAIAIgBQABABgFACg");
	this.shape_1391.setTransform(281.8,124.4,1.179,1.692);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#A3C99F").s().p("AgCADQgCgDgBAAQAGgFAFAEIgCADIgGABg");
	this.shape_1392.setTransform(282.1,135.4,1.179,1.692);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#A3C99F").s().p("AgDAAIAGgBIAAABIAAACg");
	this.shape_1393.setTransform(256.9,120.5,1.179,1.692);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#A3C99F").s().p("AgIACQAEgCAAgCQAFgBAIADIgEACIgGgCIABADIgCAAIgGgBg");
	this.shape_1394.setTransform(250.5,141.6,1.179,1.692);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#A3C99F").s().p("AgdgFQAQACAQgHQAOABANgDQgUAIAAAQQgogOABgDg");
	this.shape_1395.setTransform(248.4,119,1.179,1.692);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#A3C99F").s().p("AgGACQAGgCgCgCQACgDAFAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIABACQgDAEgEAEIgGgEg");
	this.shape_1396.setTransform(252.2,132,1.179,1.692);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#A3C99F").s().p("AgLAEIgUgEQABgIA+gFIgeAIQgQAFgNAAQAWAFASgCIgDgDIADABQAKAHAJAAQgCACgHAEQgNgFgVgFg");
	this.shape_1397.setTransform(247.1,127.9,1.179,1.692);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#A3C99F").s().p("AgcALIAYgLQANgHAKgDQAMAFgDAEQgIAIgSADIgOABIgQAAg");
	this.shape_1398.setTransform(253,114.7,1.179,1.692);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#A3C99F").s().p("AgWAAIAVgBIgPgGQAVAAAJACIAIAFIAEAFQgQgDgaAGQgOgHAIgBg");
	this.shape_1399.setTransform(253.9,123.9,1.179,1.692);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#A3C99F").s().p("AgEADQAGgFgDAAIAGgBIAAAFIgHACQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_1400.setTransform(258.5,112.8,1.179,1.692);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#A3C99F").s().p("AgDAAIAFAAIACABg");
	this.shape_1401.setTransform(255,120.9,1.179,1.692);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#A3C99F").s().p("AAFAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQABAAAAAAIAAABIgJABQAFgFAEADg");
	this.shape_1402.setTransform(272.6,104.7,1.179,1.692);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#A3C99F").s().p("AgEgBIAGgBIACACIAAADg");
	this.shape_1403.setTransform(275.4,105.2,1.179,1.692);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#A3C99F").s().p("AglANQAOABgOgIQgOgGgJgBQAQgJAYgCQAUgDAUADIgDABIAsAKQgGgBgQAHIAAAAIgHAEQgEAAggAEIgYACQgHAAgCgCg");
	this.shape_1404.setTransform(278.6,112.7,1.179,1.692);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#A3C99F").s().p("AgXAvIATgBQAMgDgFgNIgdAJQgTAEgLgIQABAAABAAQAAAAABgBQAAAAAAAAQAAgBgBgBIgFgGQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgKgIABgFQAAgHAVgDQgSgFAKgCIAVgBQgKAAAHgFQgigCgDgWQgDgWAlAFQABgBAJgDIAAABIACgBIgBAEIAGAGIALAEIANAFIAcgGIAUAXQAMAOABAKQgSAFgRABQgfACAFgPQgIAUAiAPQATAIAhAKQgQAEgegCQgcgCgRAJQgFgEgEgHgAgTgNIANAEIAGAAIABgBIgBAAIgMgHgAAHgUQAPAAACgHQACgEgigCQALAIAEAFgAgMglIABABIAHgCIgDAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_1405.setTransform(283.2,100.4,1.179,1.692);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#A3C99F").s().p("AAAgCIACACIgCACIgBABg");
	this.shape_1406.setTransform(326.4,103,1.179,1.692);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#A3C99F").s().p("AgEgFQAHABACAEIgGAGg");
	this.shape_1407.setTransform(318.9,105.6,1.179,1.692);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#A3C99F").s().p("AAAAAIABABIgBAAg");
	this.shape_1408.setTransform(328.4,105.8,1.179,1.692);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#A3C99F").s().p("AAAgDIAAADIABAEQgBgCAAgFg");
	this.shape_1409.setTransform(315.5,107.1,1.179,1.692);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#A3C99F").s().p("AAAAPQgJgJgRgEQgUgCgIgBIAdgCIAAABQAPgBAJgCQgFgGgGgBIATgCIADAFIAFgDIgDgCIArgDIhDAVIAXAHIAZAGgAADgHIAFgCIgGgDIAAACIgBgBQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAg");
	this.shape_1410.setTransform(286.9,117.6,1.179,1.692);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#A3C99F").s().p("AgMgJQAMgBAMABIgIAIIgNALg");
	this.shape_1411.setTransform(306.9,119.5,1.179,1.692);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#A3C99F").s().p("AgIgGIARgCIgRARg");
	this.shape_1412.setTransform(303.4,117.5,1.179,1.692);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#A3C99F").s().p("AgPAAIAPAAIgOgJQAsAFgVAOg");
	this.shape_1413.setTransform(291.2,81.5,1.179,1.692);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#A3C99F").s().p("AgfAQQAQgFgXgJIAPgOIAKgIIAIAAQAEAHAXAHQAHAEAKAHQgtAOgPACQgIgDgCgCg");
	this.shape_1414.setTransform(310.4,121.4,1.179,1.692);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#A3C99F").s().p("AgEACQAAgCAGgDQAEAFgBABg");
	this.shape_1415.setTransform(297.4,118.3,1.179,1.692);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#A3C99F").s().p("AgEAAIAJgDQAAAGgCAAIAAABQgCAAgFgEg");
	this.shape_1416.setTransform(299.9,117.3,1.179,1.692);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#A3C99F").s().p("AgIAFQgHgBgQACQAPgKAIgDQAEABAMAAQANAGALADQgQAEgZABg");
	this.shape_1417.setTransform(314.8,134.4,1.179,1.692);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#A3C99F").s().p("AgHgGQAKgBAbAAIgDAHIghAEIgXAEQABgLAVgDg");
	this.shape_1418.setTransform(308.2,131.5,1.179,1.692);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#A3C99F").s().p("AgLAAIgIgCIAMAAIAaADIABACQgRgDgOAAg");
	this.shape_1419.setTransform(313.4,139.8,1.179,1.692);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#A3C99F").s().p("AgcAFQAMgDACgHIANgEIAcgBQACADAAADQgHAAgMAEQgMAJgGACQgOgFgGgBg");
	this.shape_1420.setTransform(317,125.9,1.179,1.692);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#A3C99F").s().p("AAbASIgcgPIAKgCIgMgBQAOABgCgFQgNADABABQgMgCgVgJIgTgIQAQADAPAIQgNgNAQACQAIABAYAHIgEACIAxAYQgEAGgJAAQgHAAgJgDg");
	this.shape_1421.setTransform(283,123.3,1.179,1.692);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#A3C99F").s().p("AgIABQAGgHALAIg");
	this.shape_1422.setTransform(285.5,119.7,1.179,1.692);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#A3C99F").s().p("AgkAOQgBgOAZgFQARgGAegCIACAHQgpAEgPADQAIgBAPAAIgBAAQgRADgRALg");
	this.shape_1423.setTransform(248.6,139.5,1.179,1.692);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#A3C99F").s().p("AgCgBIAFACIgDABg");
	this.shape_1424.setTransform(225.4,143.3,1.179,1.692);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#A3C99F").s().p("AgBAAIADAAIgDABg");
	this.shape_1425.setTransform(221.3,158.3,1.179,1.692);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#A3C99F").s().p("AgQAVIgCACIgCAAQALgJALACQgCgDgUgPQgQgNACgIIAJAHIgHABIAQAEIAEAAIAOgBIADACQACAKAcAXIgdABQgLgDgLAAg");
	this.shape_1426.setTransform(226.7,147.1,1.179,1.692);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#A3C99F").s().p("AgJgBIALgDIAIAEIAAABIgPAEQgBgFgDgBg");
	this.shape_1427.setTransform(227.9,169.1,1.179,1.692);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#A3C99F").s().p("AAAAFIgBgHIABgCQACAEgBAFg");
	this.shape_1428.setTransform(225.4,172.8,1.179,1.692);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#A3C99F").s().p("AgaAAQAGgBAKgCIAOgFQAKAIAOAFQgZgBgeAFQgBgEACgFg");
	this.shape_1429.setTransform(231.5,154,1.179,1.692);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#A3C99F").s().p("AgEgDIACAAIAHAGIgGABg");
	this.shape_1430.setTransform(229.9,168.5,1.179,1.692);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#A3C99F").s().p("AAHAAIgNACQABgFAMADg");
	this.shape_1431.setTransform(233.9,167.7,1.179,1.692);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#A3C99F").s().p("AgFgCIAAgBIALAFIgGACQgGgGABAAg");
	this.shape_1432.setTransform(231,168.1,1.179,1.692);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#A3C99F").s().p("AAAAEIgBgHIADABQgCACAAAEg");
	this.shape_1433.setTransform(226.9,172.9,1.179,1.692);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#A3C99F").s().p("AAcgKIgIAQIgNAEIgiABQAIgMAvgJg");
	this.shape_1434.setTransform(394,153.1,1.179,1.692);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#A3C99F").s().p("AgQAMQAGAAgCgJQgBgGgMADIgGADQgIgBgIAAQAHgGAWgEQARgDASAAIACAAIgNADQARAHAJADIgBAFIAKgBIAHAEIgMgBIABgBQgEAAgaADIgSABIgFAAg");
	this.shape_1435.setTransform(363.6,173.8,1.179,1.692);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#A3C99F").s().p("AAAAAIABAAIgBABg");
	this.shape_1436.setTransform(378.1,176.1,1.179,1.692);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#A3C99F").s().p("AgKAEQAIgEANgIIgPAQIgGABg");
	this.shape_1437.setTransform(334.8,122.1,1.179,1.692);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#A3C99F").s().p("AgGgCIALgGIACAQQgEgBgJgJg");
	this.shape_1438.setTransform(329.7,133.4,1.179,1.692);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#A3C99F").s().p("AgWAIQAEABAAgEQgEgBgMACIAAgDQACgDAPAAQACgDgEgDIgFgDIAhAJIAaAJIgQABQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgjAEg");
	this.shape_1439.setTransform(338.5,174.4,1.179,1.692);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#A3C99F").s().p("AgDACIADgDIADAAIgFADg");
	this.shape_1440.setTransform(333.8,110.1,1.179,1.692);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#A3C99F").s().p("AgEAAIAIgBIAAAEg");
	this.shape_1441.setTransform(345.5,150.5,1.179,1.692);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#A3C99F").s().p("AAAgBIAGABIgLACIAFgDg");
	this.shape_1442.setTransform(351.6,143.3,1.179,1.692);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#A3C99F").s().p("AAHAJQADgJgHgBQgHABgGABIgJgDIABgBQAPACAVgLQACAEAAADQAAAJgDAJg");
	this.shape_1443.setTransform(328.7,157.1,1.179,1.692);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#A3C99F").s().p("AgBAIIgEgGIAFgCIgGAAQgCgEAIgCIAHgBIAAAPg");
	this.shape_1444.setTransform(330.2,142.5,1.179,1.692);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#A3C99F").s().p("AANAGQgNgEgPgIQAcAAADANg");
	this.shape_1445.setTransform(378.6,166.1,1.179,1.692);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#A3C99F").s().p("AgBAAIAEgCIAAAGg");
	this.shape_1446.setTransform(330.7,145,1.179,1.692);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#A3C99F").s().p("AgDgCIAHgBIgBAHg");
	this.shape_1447.setTransform(330.5,146.8,1.179,1.692);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#A3C99F").s().p("AAaADIALgLIgSAFIgIgHIAEAJQgTAGgPAPIgCAAQAEgPgCgCIAMgDQgQAAgeAFIAAgKQAFgFgEgCQADgKAGgEIAEgCQAlAFAGgGQgLABgagDIAGgDQAYAAA4ALQgGAbgEAfQgFgQgMgQg");
	this.shape_1448.setTransform(339.6,119.2,1.179,1.692);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#A3C99F").s().p("AgMALIAQgTIAJgCQgCAHgIAEIgOAKg");
	this.shape_1449.setTransform(340,124.8,1.179,1.692);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#A3C99F").s().p("AgEAAIAAgBIAIgCQADADgGAEg");
	this.shape_1450.setTransform(353.8,140.6,1.179,1.692);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#A3C99F").s().p("AgBgFIAMAFQgBAAgUAGg");
	this.shape_1451.setTransform(335.9,133.2,1.179,1.692);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#A3C99F").s().p("AgLgBIAPgBIAJABIgNAFg");
	this.shape_1452.setTransform(339.6,132.2,1.179,1.692);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#A3C99F").s().p("AgqAAQACgSAcAEQANACAcAGIAOAIQggANgYABIgDAAQgdAAADgQg");
	this.shape_1453.setTransform(338.5,144.3,1.179,1.692);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#A3C99F").s().p("AgLAbQgTgEgTAYQglgOABgCQAQACAXgMQAcgOAKgCQgVgKgHgCQgJgCgMAOQgIAMgOgHQgQgIgGADQABgIAZgTQAagVAOAFQgGgDgNAAQAdgMARAFQAIADACAFIgCAAIAEACIAEAFIgEgFQANAEAPgBIAAgDQABAOANgHIgKAIQgCACAMABQgTAEgGASQAOgJACAGQADAHAHgCQABACgHAEQACADAbgHQAagGAHAFQgBADhWARQAGgBASADQAWACgBAEQgDAIgZgCQgUgCgJgEIAhARIgEAAQgpgWgDgBg");
	this.shape_1454.setTransform(368.4,151,1.179,1.692);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#A3C99F").s().p("AAEAAIAAAAIgEABIgEAAg");
	this.shape_1455.setTransform(344.8,147.6,1.179,1.692);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#A3C99F").s().p("AgDAQQADgBgDgBQgFgBgJAAQABgOgBgQIAHAAQAVAYAHALQgIgCgNAAg");
	this.shape_1456.setTransform(336.5,156.7,1.179,1.692);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#A3C99F").s().p("AgQAFIAJgKIAYAHIgRAEIgQgBg");
	this.shape_1457.setTransform(351.4,157.2,1.179,1.692);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#A3C99F").s().p("AgLAEQAGgJARgBIgGALIgBACQgJgBgHgCg");
	this.shape_1458.setTransform(394.3,157.9,1.179,1.692);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#A3C99F").s().p("AACAAIABAAIgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgEAAg");
	this.shape_1459.setTransform(328.1,146.4,1.179,1.692);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#A3C99F").s().p("AgjAVQgDgDgBgEQAMAAAEgCQAJgDgEgKIgUAGQgNAEgIgDIA3gaQAEADACABQgBADgKAAQgNABAAADQALgCgHAHIARgDQgFACgCADQgCACAGADQAEADgEADQgDAJgJADIgKAAIgJAAgAATgJIgIAAQAYgEAJAAQAIAHAIAEIgpgHg");
	this.shape_1460.setTransform(371.1,167.4,1.179,1.692);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#A3C99F").s().p("AgNADQABgEAagDQgIAGgIADg");
	this.shape_1461.setTransform(358.7,163.8,1.179,1.692);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#A3C99F").s().p("Ag6A7IgIgCIgsgKIgBAAQADgIAngFQAZgDAYgBQgVgJAKgDQAGgBAVgCIgtgQQgwgTABgDQAZADAkgSQApgWAPgCIgRgIQAqgLgiAdQARgDAhALQAgAMASgDQgHAFiBAVQAYAJAXgGQgFACAIAJIgPABQgLABgKADQAUAJAUALIgSgCQAXApg5AFQgEgGgggJgAhGAsQAAACAOAHQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgCIAAABIABgDIgCgBIABADIgEgEIgHgBIgCABgAAeAeIAAAAIAAAAg");
	this.shape_1462.setTransform(431.2,140.7,1.179,1.692);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#A3C99F").s().p("AARAcQgCgEgEgaQgCgUgJAIQACAKgDAGQADAHgCAMIgEgQQgFAGgJADQgCgCACgFIgZALIgDAAIABgNQATgDAGAAIgdgJQACgFAMACQAJACAEACQgFgLAOgBIAUABQAAgEgFgBQgCgBgCABIABgDIAtgDIACAOIgTAGIAVAGIACADIgFAAQgFgBgCAAIgUAAQADACgBACIgCADIgDABIACACQgCAJADAKg");
	this.shape_1463.setTransform(403.1,150.2,1.179,1.692);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#A3C99F").s().p("AgdAHIAlgSIARAGIAFAGIgDABIgaAFQgKgFgDAIIgNACg");
	this.shape_1464.setTransform(586.8,170.2,1.179,1.692);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#A3C99F").s().p("AgCACIAFgEQgCAEgBABg");
	this.shape_1465.setTransform(551.9,161.2,1.179,1.692);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#A3C99F").s().p("AAGAAIgLABQAAgDALACg");
	this.shape_1466.setTransform(578.4,144.2,1.179,1.692);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#A3C99F").s().p("AgVgHIACgBIANADQABAAAAABQABAAABAAQAAAAABAAQAAAAABgBQAFABAIgCIAEADQABADAFAGIgBABQgRgEgEAGQgRgKgEgGg");
	this.shape_1467.setTransform(582.4,174.9,1.179,1.692);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#A3C99F").s().p("AAQgEIgBACIgEgBIABADIgIACIgPACIABAAIgFABQABgFAegEg");
	this.shape_1468.setTransform(602.2,156,1.179,1.692);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#A3C99F").s().p("AgBAAIABAAIACAAIgCABg");
	this.shape_1469.setTransform(582.4,172.4,1.179,1.692);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#A3C99F").s().p("AgKgFIASgBIADAKIgJADIgMgMg");
	this.shape_1470.setTransform(590.5,155.4,1.179,1.692);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#A3C99F").s().p("AgDAAIAAgBQAMgOgHAWg");
	this.shape_1471.setTransform(577.1,164.5,1.179,1.692);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#A3C99F").s().p("AgeACQANgLAPgLIAuAKQgGAAgJAEIgRgBIAIAEIgYANQgPAIgLACQgHgCgGADQABgHAMgMg");
	this.shape_1472.setTransform(604.5,137.8,1.179,1.692);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#A3C99F").s().p("AAAABIgCgCIAGADg");
	this.shape_1473.setTransform(591.7,157.8,1.179,1.692);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#A3C99F").s().p("AgFABIALgCQABADgGAAIgGgBg");
	this.shape_1474.setTransform(485.8,56.8,1.179,1.692);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#A3C99F").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIAAgBg");
	this.shape_1475.setTransform(477,41.1,1.179,1.692);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#A3C99F").s().p("AAAgBQAFAAgGADQgBgBACgCg");
	this.shape_1476.setTransform(463.6,48.1,1.179,1.692);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#A3C99F").s().p("AgCAAIAAgBQAHABgDABIgCABQAAAAgCgCg");
	this.shape_1477.setTransform(475.6,32.6,1.179,1.692);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#A3C99F").s().p("AguAIIAMgCQgGgBgJADQgQgCgFgDIBEACQAqgBgNgOQAdAJAFgEQAJAHABAGIgmgDQgQAAgRAGg");
	this.shape_1478.setTransform(161.6,102.9,1.179,1.692);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#A3C99F").s().p("AAAAAIgRgDIAWgBQAKAFADAEQgGgDgMgCg");
	this.shape_1479.setTransform(168.7,97.5,1.179,1.692);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#A3C99F").s().p("AgMAFIAHgFQAFgEANgBQgJAEgNAHIgEAAg");
	this.shape_1480.setTransform(158.7,111.5,1.179,1.692);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#A3C99F").s().p("AgPgHQAJABAIAAQANALABADQgfgNAAgCg");
	this.shape_1481.setTransform(130.3,79.3,1.179,1.692);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#A3C99F").s().p("AAAgOIAJAGQgJAIgGAPIgCAAQAGgPACgOg");
	this.shape_1482.setTransform(139.7,64.2,1.179,1.692);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#A3C99F").s().p("AgHAFIAHgNIAIAGIgIALg");
	this.shape_1483.setTransform(140,80.9,1.179,1.692);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#A3C99F").s().p("AgDgBIAIgEQgBAGgCAFQgIgEADgDg");
	this.shape_1484.setTransform(134.2,60.8,1.179,1.692);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#A3C99F").s().p("AgBAAIADAAIgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_1485.setTransform(136.6,24.4,1.179,1.692);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#A3C99F").s().p("AgBAAIADAAIgCABg");
	this.shape_1486.setTransform(134.1,62.6,1.179,1.692);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#A3C99F").s().p("AgDgGIAMAEQgJACgIAHIAFgNg");
	this.shape_1487.setTransform(143.4,65.3,1.179,1.692);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#A3C99F").s().p("AW9HsQAFgHAOgNQgiADADgUQAOAAgBgGQAAgBAPAJQgHgNAOgCQAIgBAQABQgBgFgEgCQgEgDgEAEQACgLAEACQAGADADgHQgFgDgOABQgMAAgHgHQApgDhPAFIAAAAIAOgMIACAAIABgCIAGgEQAVgCAEgGIgHgFQAxgfAbAIQgYgKgyAGQgFgFgTgJIAfgBQAQgBAHgGIgbACQgTAAgCgGIAjgOQAFgDgWAAQAfgRAkgJQgRgFALgKQAGgFAOgIQgLAEghAWQglAZgRAIQgFgGgPACQARgDgtACQgCgMASgVQAHABAGACQgHgDgDgEIAMgMQAEgCACgEIAYgWIgYANIgBgGIgGADIgBgXQgFAHgLAKIgSAQQgDAAgFgFIAAAAQAEgCgDgGQgBgDgIgJIgFgYQAHgCAKAAQgNgHACgCQACgBAUgDQgYgLgJgcQgJgeAkAJQACgEAJgEQAEgBgMgEQALgEALAEQgYgPgMgGQgXgLgQAIQABgGASgTQARgTADAHQgDgIgXAEIgaAFQACgLASgCQAVgBAEgEQgjAAASgGQARgGgMAAQAPgKAQgFQgHgDAGgGIAJgHIghAXQgaASgGgGQgIgIAPgXQgJAHAIgfQgBAFAEADIgDgLIABgBIgNgjQgHgYABgPQgFAMgDAhQgEAiAGALIgMgSQAJAVgVgIQAQAVgYADQAIAAAIAFQANAGgLALIgpgfQAGAPAOAHQABABgWAKQADABARAWQATAXgCAIIglgTQAAALALASQAMATABAKQgrAAgDACQAAAPgKAKIAUgJQgDACgJANQAKgKAUAGQAOAEAPAJQgLAEgTgCQgPgCgOAKQABAFApAUQgnAKAYAQQgQgBAAAEQgBAEAOAHQgLACgUAIQgPAGgYgCQAVAJgVAKQATgIADAEQAEAEgLANQAJgCASAJQATAJgJAKIgOAFIAFACQgJAFgRABIgZABQAQAIASgGQguAaBCAaQABAHADAGIgkALQgFgKgIgMQgLgDABAfIgOACQAHAEAHACIABALIgKACIALAEIAAACQgHgDgMgDIgTgEIAeAAQANgCgegIQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAgBQgEAAgZADQAAgFgCgGIgaAJQgCgDgJgEQgKgEgEAAQAPgJAZgCQAUgCATAEQgJgCgEgJIARgBQALgDgEgLQgRAGgJACQgRADgKgGQAFgBgIgHIgCgCQgIgIAAgEQABgGASgDQgPgGAIgBIATgCQgJAAAGgEQgqgDAGgXIAPgHQAJgEAJABQABgBALgDQAGgBgPgDQAKgDANADIgegMQgSgGgNgBIAQgEIgVgKQATgQAGAIQgFgJgmAIQgFgDgFgBQAEgDARgBQARAAAFgDIgMABQgKAAAAgCIAPgFQADgBgKAAQAPgHAQgEQgIgBAFgEIAJgFIggARQgWAMgLgGQgIgFAVgZIACgCIgCABQgDgEgGgCIgFgCIgBgBIAAABIgNgCIgCgVQgEALgBAKIgRAAIgCgBIAAACIgSACQgIgDgGgHIAbgBQAQgBAFgEQgbACgDgEQAGgCAEgDIAMgGQABgBgKAAIAAgBQAVgLAUgFQgLgDAHgHIANgIQgGACgQAKIgcATIgBgIQgcALgPADQgFgIATgVQAKgLAPgMIgUALIgBgUIgMAMIgMAMQgJgNgCgTIAMgBIgNgGIgDgcIgHAYQhFgbAAgEQAaAEAjgTQArgWAPgCIgegPIAIgBIgCgHIgBAFIgRgBQgDgBgDAAIgEgBIAAACQgKADgNAQQgNASgUgLQgagMgKAEQACgPAmgbQApgfAVAHQgPgHgiAEQgiAGgGAAQABgNAZgBQAfgCAFgEIgRABQgMAAgBgEIAVgIQAEgCgOAAQAUgLAVgFQgKgDAHgGIAMgJIgrAbQgfAUgNgIQgKgHATgVQAKgLAPgOIgTALIgBgTQgDAFgIAHIgMALQgHgLgDgUIgEghQgKAegEAgQgEgSgPgMQAHAUgIAIQgOAIgJAIQgEAAAcAEQAaAGgRANIhAghQALAPAWAIQACABgfALQArASADADQAiASgCARIhJgRQABAMASAUQASARABANQgSAEgRACQghACAFgSQgIAWAkAQQAUAIAgAJQgPAFgfgCQgbgCgTAHQgMgBgRAXQgMASgVgLQgagMgKAEQABgFAJgLQAKgLANgLIADAAIAAgCIgCABQATgPARgIQAUgKAMAEQgPgHgiAEQgiAGgGAAQABgNAZgBQAfgCAFgEIgRABQgMAAgBgEIAVgIQAEgCgOAAIAFAAIAAAAIAHgEIAHAAIgCgCQANgGAMgCQgLgDAHgGIAMgJQgGACgNAJIgXAQIgBAAIABAAIgGADQgJgGgEADIgDADQgEgC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BAQACQAAgFgEgDQgEgCgEAEQABgLAEACQAGADAEgHQgGgDgOAAQgMABgGgHQAhgDhDAFQADgFANgEQAHgCgLgEIgCgDQAJAAALgCIAJACIgGgDQAHgBADgEIgSgJIAKADQgKgEgKgCIAHgDQgDgNgDgEIAMAJQgGgGABgCQACgEANADQgDgEgXgKQgUgKAAgDQARABAPgFQAAgOgXADQAJgCgYAAQgYAAgKACQALgMAIgEQAJgGACAGQgFgQgvALQAGgMAcgCQAYgBAOAFQgFgCgEgFQAkgBAUgOQgMgKgZgDQABAFAGABIgIgBIgCgKIgQAIQgTgBgGAGIgBAAQgDgEgBgFIgBgCQAUgMASgFQgLgFAJgJIAPgMQgFACgRANIgfAXQgOgQgDgHQgGgMAbAAQgNgIACgBQACgBAUgDQgOgHgLgQQgMgQADgMQAEgNAYAFQACgEAJgDQAEgBgMgEQALgEALAEQgXgPgNgGQgWgLgQAIQABgHARgTQASgSACAGQgDgIgXAEIgaAGQACgMASgBQAVgBAEgEQgjAAASgGQARgGgMAAQAPgKAQgFQgHgDAGgGIAJgHIghAXQgaASgGgGQgIgIAQgXQgKAGAIggQAAAGAEACQgDgIAAgDIAAgBIABACIgOgmQgHgXABgPQgGAMgCAhQgDAiAFALIgMgTQAIAVgUgHQARAXgZADQAHAAAKAEQAMAHgLAKIgpgeQAGAOAOAIQABABgWAKQADAAARAWQATAYgCAIIglgTQAAALALASQAMATABAKIgYAAQgTAAgDACQAAAOgKALIAUgJIgMAPQAOgOAiARIACAGIgYgBQgMAAgNAIQAAAHAlARQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgWAGADAJIgIABIAIABQABADAHAFQgNgCgCAEIgjgZQAIATAOALIgKAAIABACIgBgCQgNABgEgBIAAAAQAIADgEADIgFAEQAGgEAgABIgCgCIABAAQAEACgGACIgdAMQgIABgPgBQAWAJgVAJQASgHADAEQAEAEgKANQAIgCASAIQATAKgJAKQgGAGgHACIgSgJQAAAHACAGIgfABQAPAIARgFIAAABQgbAQAQAQQAKAKAeAMIAEAJQgNACghAKQgVABgDADIAAADIgKABIAJAEIgBAGQgGgDgLgDQABAAAAAAQABAAA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");
	this.shape_1488.setTransform(404.3,83.4,1.179,1.692);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#A3C99F").s().p("AAAgDQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAEQAAgDAAgEg");
	this.shape_1489.setTransform(139.3,0.7,1.179,1.692);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#A3C99F").s().p("AgPgDIADgCQgBgBgHAAIgCgDIAFgEIAdgNIALAtIAAAAIgIAIQgTgWgLgIg");
	this.shape_1490.setTransform(130.7,68,1.179,1.692);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#A3C99F").s().p("AgLgBQAMABALAAQABAAgOACg");
	this.shape_1491.setTransform(142.2,91.8,1.179,1.692);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#A3C99F").s().p("AgGAHQAcgCAFgEIgRACQgKAAgBgDIATgHQAEgCgOAAIABgBIAEgBIAAgBIAHgDIAHgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIAHgEIABARIgDACIAEABIgBANIgDACIgQABQgJgPABAPQghAHgGAAQACgOAZgBg");
	this.shape_1492.setTransform(130.9,56.4,1.179,1.692);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#A3C99F").s().p("AgJADIAFgGIAOADIgFAEIgOgBg");
	this.shape_1493.setTransform(141.9,76.8,1.179,1.692);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#A3C99F").s().p("AgFgDIAQAEQgLADgKAAg");
	this.shape_1494.setTransform(146.4,65.9,1.179,1.692);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#A3C99F").s().p("AgUgGIAzgDIg9ATg");
	this.shape_1495.setTransform(145.2,73.7,1.179,1.692);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#A3C99F").s().p("AgMAAQAGABgHgFQAMACAQAFQgIACgNAAQgLgGAFABg");
	this.shape_1496.setTransform(169.7,108.5,1.179,1.692);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#A3C99F").s().p("AAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_1497.setTransform(269.3,41.6,1.179,1.692);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#A3C99F").s().p("AgCgCQALADgIABIgBABQgEAAACgFg");
	this.shape_1498.setTransform(268.3,28.6,1.179,1.692);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#A3C99F").s().p("AgGgCQACACADAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAJABgQgEQAPgEAAAOIgEAAQgIAAgCgIg");
	this.shape_1499.setTransform(272.1,95.6,1.179,1.692);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#A3C99F").s().p("AgBABIADgBIAAABg");
	this.shape_1500.setTransform(164,104.7,1.179,1.692);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#A3C99F").s().p("AgEgBQAIAAABABIgHACIgCgDg");
	this.shape_1501.setTransform(167.5,123.7,1.179,1.692);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#A3C99F").s().p("AgFgCQACADADgBQACgBgIgDQAOADgBAGIgDAAQgHAAgCgHg");
	this.shape_1502.setTransform(178.3,108.8,1.179,1.692);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#A3C99F").s().p("AgEAAIAIAAIABABQgFgBgEAAg");
	this.shape_1503.setTransform(167.1,131.4,1.179,1.692);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#A3C99F").s().p("AAHgDQACADgPADQAEgDAJgDg");
	this.shape_1504.setTransform(163.5,125.1,1.179,1.692);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#A3C99F").s().p("AAFAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgIABQAFgFAEADg");
	this.shape_1505.setTransform(178.7,116.8,1.179,1.692);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#A3C99F").s().p("AgbAQQADgFAIgBQAHgBABgBQgJgGAFACQAFABgIgFIAPgCIgCAEIACgEIAEgBIgDAAIACgCIACgCIAJgGIACAAIAAgBIAIgCIADAGQAHAUgcAFIgdACIgEgBg");
	this.shape_1506.setTransform(188.2,134,1.179,1.692);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#A3C99F").s().p("AgEAAQAGAAADAAIgCABQgGgBgBAAg");
	this.shape_1507.setTransform(188,133,1.179,1.692);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#A3C99F").s().p("AgBAAIABAAIACAAIgBABg");
	this.shape_1508.setTransform(190.3,129.4,1.179,1.692);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#A3C99F").s().p("AgRgBIgCgDIgBABIgKgEQAOADANAFQgPgNAhAJIgCADIAEgDIAOADIgFAGIAAgCIgMAEQgNgCgSgHg");
	this.shape_1509.setTransform(185.7,131.4,1.179,1.692);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#A3C99F").s().p("AgEAAIACgBIACgBQABgBAEACIgFAFg");
	this.shape_1510.setTransform(189.7,130.3,1.179,1.692);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#A3C99F").s().p("AgCAAIABAAIABAAIADAAg");
	this.shape_1511.setTransform(165.7,111.5,1.179,1.692);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#A3C99F").s().p("AAAAAIABAAIAAAAIgBABIAAgBg");
	this.shape_1512.setTransform(165.6,124.4,1.179,1.692);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#A3C99F").s().p("AgDgBIAFAAIACABIgBACg");
	this.shape_1513.setTransform(181.2,117.2,1.179,1.692);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#A3C99F").s().p("AgHACIgCAAIAKgEIAJADIgDACQgHgBgHAAg");
	this.shape_1514.setTransform(164.4,134,1.179,1.692);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#A3C99F").s().p("AgNgBIAbgBIgDAFIgYgEg");
	this.shape_1515.setTransform(187.1,128,1.179,1.692);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#A3C99F").s().p("AgFgEQABAEAEgBQACgBgHgEQAOADgDAKQgLAAAAgLg");
	this.shape_1516.setTransform(209.5,82.9,1.179,1.692);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#A3C99F").s().p("AAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAgBg");
	this.shape_1517.setTransform(193.9,26.1,1.179,1.692);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#A3C99F").s().p("AgGABQAAgBAMgBQABADgGAAIgHgBg");
	this.shape_1518.setTransform(224.1,17.9,1.179,1.692);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#A3C99F").s().p("AAAAAIAAAAIABAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_1519.setTransform(214.1,0.1,1.179,1.692);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#A3C99F").s().p("AgDgCIAHADIgEACg");
	this.shape_1520.setTransform(202.6,82.9,1.179,1.692);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#A3C99F").s().p("AgNAAIAEgIIAXAOIgHADg");
	this.shape_1521.setTransform(63.3,83.7,1.179,1.692);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#A3C99F").s().p("AACADIgFgDIADgCIAFAFg");
	this.shape_1522.setTransform(65.7,86.1,1.179,1.692);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#A3C99F").s().p("AAAANIgPgIQALgBAEgEQgLACgIgBIAAAAIgBgFIANgGQAAgBgMAAIAEgBQAyAHgTATIgQgBg");
	this.shape_1523.setTransform(68.8,86.4,1.179,1.692);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#A3C99F").s().p("AgIAAIgJgKQASADAIADQAQAEgOALg");
	this.shape_1524.setTransform(55.1,82.7,1.179,1.692);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#A3C99F").s().p("AgJAAIAJgDIAKADQABABgBADg");
	this.shape_1525.setTransform(72.1,104.5,1.179,1.692);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#A3C99F").s().p("AgXgLIACAAQAuAsgTgYQgRgVgZgSIBJAoQgBAGgIAFIgRALQgOgXgUgUg");
	this.shape_1526.setTransform(51.4,75,1.179,1.692);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#A3C99F").s().p("AgKACQAFgDAQgBIgSAFg");
	this.shape_1527.setTransform(63.1,88,1.179,1.692);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#A3C99F").s().p("AgLAKIgagGIASgPQAMAGATAFIAaAIQgNAEgOAAIgWgCg");
	this.shape_1528.setTransform(87.3,78.8,1.179,1.692);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#A3C99F").s().p("AANATQAagIhFgPQAWgFARgLQATAUACASIgOADg");
	this.shape_1529.setTransform(104.4,92.3,1.179,1.692);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#A3C99F").s().p("AgVgGIAyAEIALADIgdAEIgRgIQAGAIgnACQAEgJAOgEg");
	this.shape_1530.setTransform(82.7,95.8,1.179,1.692);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#A3C99F").s().p("AgFAFQgFAIgUARIgVgGQgIgUgCgaQBSACARAFQgXgPgUgFIAvACQATAVABALQgSADgRACQgeACADgPQgFARAYAOIgXAOg");
	this.shape_1531.setTransform(82.4,72.8,1.179,1.692);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#A3C99F").s().p("AgYACQAQABADgDIgHgGIADgDQAbAJARgDQADADhIALg");
	this.shape_1532.setTransform(83.4,106.3,1.179,1.692);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#A3C99F").s().p("AgEgBIAJABIgFACg");
	this.shape_1533.setTransform(65.2,81.3,1.179,1.692);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#A3C99F").s().p("AAgAPQgHgKgLgHIAEANQg7gSgPgMQAMABBlAAQgGAXgCAPg");
	this.shape_1534.setTransform(66.5,72,1.179,1.692);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#A3C99F").s().p("AAAAAIABAAIgBAAg");
	this.shape_1535.setTransform(66.2,83.9,1.179,1.692);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#A3C99F").s().p("AABAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQABABABAAIgDAAQABgBABAAg");
	this.shape_1536.setTransform(39.8,92.5,1.179,1.692);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#A3C99F").s().p("AgegDIAKABQgFgBgDgDQAcgNASAGQAJADAEAGQgcAGgNAOIAAAAIgUgTg");
	this.shape_1537.setTransform(43.8,99.6,1.179,1.692);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#A3C99F").s().p("AgZAFQAigJAPgCIACAGQgYAHgPAAIgMgCg");
	this.shape_1538.setTransform(51.4,102.1,1.179,1.692);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#A3C99F").s().p("AgHAIQgOgEAFgFQACgEAMgHIAVAZg");
	this.shape_1539.setTransform(46.1,83.2,1.179,1.692);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#A3C99F").s().p("AgsALIgKgFQgCgCATAEQgFgGgLgDIAngPQAHAMAXAIQAOAFAZAIg");
	this.shape_1540.setTransform(49.1,106.6,1.179,1.692);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#A3C99F").s().p("AgMAFQACAAACgEIAJgFIAMAHQgNACgHAAIgFAAg");
	this.shape_1541.setTransform(36.5,102.3,1.179,1.692);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#A3C99F").s().p("AAAAHIgOgHQgIgBgIABIgBAAQABgDAGgIIA4ARQgFAGgGAAg");
	this.shape_1542.setTransform(63.7,100.7,1.179,1.692);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#A3C99F").s().p("AAGAOQAKAAgDgNQgDgLgQAHIgkARQgGgRAkgLQAQAIAeAHIAJALIAAABIgCAAQgMgKgEADQgBADAFAFIgIABIgEgBIAAABIgEAAQgFAAgCgBg");
	this.shape_1543.setTransform(102.4,105.4,1.179,1.692);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#A3C99F").s().p("AgDAAIgHAAQADAAASAAIAAABg");
	this.shape_1544.setTransform(49.5,121.1,1.179,1.692);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#A3C99F").s().p("AAAAAIAAAAIABAAg");
	this.shape_1545.setTransform(52.8,121.5,1.179,1.692);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#A3C99F").s().p("AgSACQABgEAdgGIAHALIgFAGg");
	this.shape_1546.setTransform(128.9,89.7,1.179,1.692);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#A3C99F").s().p("AgQABIAEgEIAdAHg");
	this.shape_1547.setTransform(118.9,91.4,1.179,1.692);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#A3C99F").s().p("AgHgDIAagCIglALg");
	this.shape_1548.setTransform(121,87.1,1.179,1.692);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#A3C99F").s().p("AgGgEQAGAEAHAAQABABgLAEg");
	this.shape_1549.setTransform(117.7,53.2,1.179,1.692);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#A3C99F").s().p("AAAAAIAAAAIABABg");
	this.shape_1550.setTransform(125.8,70.1,1.179,1.692);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#A3C99F").s().p("AgTABQAfgBgfgGIAIgFQAJAHAVAHQAFACgUAHQgFgKgSgBg");
	this.shape_1551.setTransform(103.1,63.9,1.179,1.692);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#A3C99F").s().p("AgngNQAQgIAMgBIgKAJQgGABAqAGQAqAIgbAVg");
	this.shape_1552.setTransform(107.6,63.2,1.179,1.692);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#A3C99F").s().p("AgtAEIADANQgagMAAgDQAWAEAYgJQAPgGAZgPQArAXAIAUQgPABgMAFg");
	this.shape_1553.setTransform(106.2,77.3,1.179,1.692);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#A3C99F").s().p("AAAAMQgZgMgLADQABgFAMgMIAiADIAZAKIgFAGQgIAKgLAAQgGAAgGgDg");
	this.shape_1554.setTransform(99.4,70.5,1.179,1.692);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#A3C99F").s().p("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");
	this.shape_1555.setTransform(80.7,30.6,1.179,1.692);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#A3C99F").s().p("AAPAXIgCAAQgwgBgVgFQgngIBKghIABAAQgKAJAGAPQAKAJAYgOQAlAFAYgEQgJAOgPAJQgLAGgKAAQgGAAgFgCg");
	this.shape_1556.setTransform(10,73.7,1.179,1.692);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#A3C99F").s().p("AgVAIQAbgPAOAAQADAHgCAJQgYgEgSADg");
	this.shape_1557.setTransform(16.4,68.9,1.179,1.692);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#A3C99F").s().p("AgQAAQAYAAAJABIghAAg");
	this.shape_1558.setTransform(2,79.1,1.179,1.692);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#A3C99F").s().p("AgvgEIAAgBIBfAAQgPAGgPAFQgdgHgkgDg");
	this.shape_1559.setTransform(5.7,1.1,1.179,1.692);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#A3C99F").s().p("AgZgJIAzAAIgOAFIgNgBIAHAEQgQAEgPAHg");
	this.shape_1560.setTransform(3.1,43.6,1.179,1.692);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#A3C99F").s().p("AhVApIAAgmIBmgbQA6gQALAAQgFBRiZAAIgNAAgAgeANQABgCAjgCQgJgJgFAAQgUACgCALg");
	this.shape_1561.setTransform(10.2,49.5,1.179,1.692);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#A3C99F").s().p("AgUgEIApgEIgpAQg");
	this.shape_1562.setTransform(2.5,67.3,1.179,1.692);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#A3C99F").s().p("Ag0A9QAPgBADgCQgSACgBgEIAOgFQACgCgJAAQARgIALgDQgIgCAFgDIAIgGIgcARQgVAOgIgGQgHgEANgOIARgRIgNAIIgBgMQgEAFgKAJIgBgBIAAhaQBgACAmAbIgGADIAHgCIAKAKIgDADIAEgBQAHAJAAALIg+gPQABAPALANIAXAaQgkAUhVAIQAEgEAPAAg");
	this.shape_1563.setTransform(9.1,103.7,1.179,1.692);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#A3C99F").s().p("AADAAIADAAIgFAAIgHABg");
	this.shape_1564.setTransform(37.9,125.8,1.179,1.692);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#A3C99F").s().p("AgQAEQAHgKAUAAIAGADIgRAIIAKgCQgBABAAAAQgBABAAABQAAAAAAABQAAAAABABQgSgCgHgCg");
	this.shape_1565.setTransform(38,128.9,1.179,1.692);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#A3C99F").s().p("AgngaQAnAaAoASIhPAIg");
	this.shape_1566.setTransform(4.8,8.1,1.179,1.692);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#A3C99F").s().p("Ag9AsIANgHIAPAIIgGAAIgWgBgAhWAqIAAg/QAxgSAfgFQAlALgVAGIABABIAxgIQAZAUABAwQgKgHgvgJQAKgJAOgDIgJgBQgkAAgaAGQgjgEgNAEQgOAFAVAOQgEAHACAHIgZgCg");
	this.shape_1567.setTransform(10.3,25.3,1.179,1.692);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#A3C99F").s().p("AgVACQAAgCAVgEQAGAEAJgBIADgEIAEACIgbAJg");
	this.shape_1568.setTransform(2.7,134.9,1.179,1.692);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#A3C99F").s().p("AggAOQAAgLgLgIIAbgOIAUABQARAJAXAHIgJAFIgPgDIALAFIgXAMQgNgBgOAEg");
	this.shape_1569.setTransform(9.6,127.8,1.179,1.692);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#A3C99F").s().p("AAYALQgNgGgQgBQACgEgCgEIgSAEQgMAEgHgBIgHgEIAAAAQAQAAAEgDQACgBgBgEQAEgBAEgDQAGABACgCQACgCgFgDIBBAjIgMAEQgFgHgJgCg");
	this.shape_1570.setTransform(43,95.3,1.179,1.692);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#A3C99F").s().p("AhNAhQA8gSgSglQgGgEgWAOQgUAMgQAMQAMhaBNAqQAnAYBHA+QiTgMgegFg");
	this.shape_1571.setTransform(38.5,47.4,1.179,1.692);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#A3C99F").s().p("AgDADIADgIQAFAFgBAGg");
	this.shape_1572.setTransform(28.2,73.9,1.179,1.692);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#A3C99F").s().p("AgzgpQAIgCAoAjQAoAkAQADIhpALQAFgqgEgpg");
	this.shape_1573.setTransform(34.2,24.9,1.179,1.692);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#A3C99F").s().p("AgNAFQgEgDADgDQAOgIAQAHQgQAIgHAAQgDAAgDgBg");
	this.shape_1574.setTransform(32.7,68,1.179,1.692);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#A3C99F").s().p("AAOACQgOAFgMgCIgMgFIAwgHQACAGgCABQgBADgKAGQgCgFADgCg");
	this.shape_1575.setTransform(16.1,5.2,1.179,1.692);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#A3C99F").s().p("AgKAlQAXgOAMgDQgWgMgEgBQgKgDgMARQgFAHgGABIAbgbIgeASIgBgdQgFAHgIAFIgPAOQAGgNAXgOQAXgQANADQgKgEgWADIgaAEQABgJAQgBQAUgBADgCQgSACgBgEIAOgGQACAAgJAAIAJgGQAkAPA1A+QgHACgWAPg");
	this.shape_1576.setTransform(37.7,75.6,1.179,1.692);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#A3C99F").s().p("AgFACIAAgEQgBgCANAHg");
	this.shape_1577.setTransform(42,108,1.179,1.692);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#A3C99F").s().p("AgDgBQACABgCgBIAFgGQAFABgEAOg");
	this.shape_1578.setTransform(220.1,135.5,1.179,1.692);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#A3C99F").s().p("AAFAAIgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgIAAQAGgGADAEg");
	this.shape_1579.setTransform(210,94.9,1.179,1.692);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#A3C99F").s().p("AgCABIAEgCIABAAQgCADgBAAIAAAAIgCgBg");
	this.shape_1580.setTransform(194.9,132.3,1.179,1.692);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#A3C99F").s().p("AgBgCIADADQgCgBgBACIAAgEg");
	this.shape_1581.setTransform(219.1,114.5,1.179,1.692);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#A3C99F").s().p("AgDgCQAEgBACABQABABAAADIgCABg");
	this.shape_1582.setTransform(212.3,95.4,1.179,1.692);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#A3C99F").s().p("AgKgCIgHgGQAQAGAJAIQgTgXAdARIgFAJQgNgJgKgCg");
	this.shape_1583.setTransform(216.2,116.1,1.179,1.692);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#A3C99F").s().p("AgCAAIAAgBQAIABgEACIgCAAQAAAAgCgCg");
	this.shape_1584.setTransform(118.7,3.6,1.179,1.692);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#A3C99F").s().p("AgFABIALgCQABADgHAAIgFgBg");
	this.shape_1585.setTransform(128.9,27.9,1.179,1.692);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#A3C99F").s().p("AAAgBQAFAAgGADQgBgCACgBg");
	this.shape_1586.setTransform(106.7,19.2,1.179,1.692);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#A3C99F").s().p("AgJAHQAGgHAIgLIAEADQgKACALASg");
	this.shape_1587.setTransform(121.3,62,1.179,1.692);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#A3C99F").s().p("AAAAAIABAAIgBABg");
	this.shape_1588.setTransform(118.4,57.4,1.179,1.692);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#E1E5C2").s().p("Eg5uAQ3MAAAghtMBzcAAAMAAAAhtg");
	this.shape_1589.setTransform(435.6,182.7,1.179,1.692);

	this.instance_13 = new lib.Path_2_2();
	this.instance_13.setTransform(435,203.5,1.179,1.692,0,0,0,354.1,116.8);
	this.instance_13.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 1
	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#064D2B").s().p("AgJCAIgIgDIAAkDIAjEMg");
	this.shape_1590.setTransform(1.9,200.2);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#9090B2").s().p("AuXBIIgQADIgSgPIEohwQB/gyB2gxQEbh1DjhsIFSC1QEAB9EGBcQivBOiyA+IhUiuIglDWIhtAhIhUjSIgkDyIgdAHIgHgeIhfjjIgrEjIg9AMIhNioIggC8IgRADIgUjaIiIDvQhAAHg+AEIhOACQjph5jYi4gAkSBMQgPAPAAAUQAAATAPANQANAPAVAAQAUAAANgPQAOgNAAgTQAAgUgOgPQgNgOgUAAQgVAAgNAOgABPizQgJAJAAANQAAALAJAIQAJAJAMAAQAMAAAIgJQAJgIAAgLQAAgNgJgJQgIgIgMAAQgMAAgJAIg");
	this.shape_1591.setTransform(398.5,61.9);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#45675A").s().p("AGjDAIAEB/IhZADgAHuBwIBcDDQg7AGhFAEgAKsCNIBACKIg+ALIABAEIgeAFgApji2IAUDYQhPAMhNAJgAoeibIBPCmIhvAUgAlmkiIBeDjIAHAeIh/AeIgSADgAjAkaIBUDSQg7ARg9APgAAklBIBUCwIh4Aog");
	this.shape_1592.setTransform(446.6,92.8);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#DCE6F6").s().p("EglWAGjIgxiSIgNB5IjChOIgJDEIADAIIgDgFIghhAIgph+Il8gaQBAgcAzggQBog+gwgOQgxgNgUgnIgKgiIiGAQIAoiIIhuAjIAAiVIATgaIgTgpIAAlkIASAaQA+BbBPBZQB4CJCfCHQBbBMBmBKQErDcHKD6IAeAQIi7AvgEAw0AHBIhrk8IgvEOIhHgDIjRpkIgQE5QhOiNgnh5QgtiJAIheIAAAAICMCVIAxAwQCYCXCXB7QBtBZBlBGIgoDog");
	this.shape_1593.setTransform(322.3,136.8);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#BCBCD0").s().p("EAmWAF4IhShUIBbibIjTAbQhVhhgjhVQgfhLgTiAQgOhZARhZIAAAAIAHgEIDhCgIAEADQDLB/EYCGQhwC7jKDFQgTgOgRgPgEgo8ABWQgKAKgRADQgkAEgogmQgmgmgYh9IgSh4IC7BZQBwAxB3AuIBJAbQhRBQhTBLg");
	this.shape_1594.setTransform(357.5,64.6);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#6D6D84").s().p("EgwkAEAQFImvEbiFIASB4QAYB+AmAnQAoAkAkgEQARgDAKgIICQA8Qk+EflVC3QifiHh4iJgAUuICIj1gPImwhPQhDgTg/gXQiMgxiHhFIBOgCQA9gFBAgHQBNgIBPgNIARgDIBwgTIA8gNIASgEIB/gdIAegHQA8gQA8gRIBtggIB5goQCxg8CwhOQFuijFjjpQgSBZAPBZQASB/AgBMQAjBWBVBgIDTgbIhbCbIBSBUQARAPATANIgVAUQg2A0g7AxIgwgwIiNiVIAAgCIgEAGIAAgCIgBABIgBgBIgBACIh4BEIijBQIgdANIgLAEIgzAUQhKAahKARIhAiJIgbCdIhHAJIhcjEIgkDOIgjACIgDh/IhWCCIh4ABIhUgBgAUKDmQgKAKAAAPQAAAOAKAIQAKAKAOAAQAPAAAIgKQAKgIAAgOQAAgPgKgKQgIgKgPAAQgOAAgKAKgAf6gMQgLALAAAMQAAAQALAKQAMAMAOAAQAPAAALgMQALgKAAgQQAAgMgLgLQgLgLgPAAQgOAAgMALgAnSkSQAPgRhFhZQFAhkB9gvIDGCQQBfBBBUAyQh2Awh/AyIkmByQhwhhh1h5gEApCgFKIgDgDIBIAsQC2BsDpByIAAAAQkZiIjLh/gEgkGgDbIi7hZIGhC4Qh2guhwgxg");
	this.shape_1595.setTransform(326.9,73.6);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#FFFFFF").s().p("Eg7/Ac5IAA2kIE5hNIDFgxIAYgGIASgFIFohaIhRjuIGRCfIC7gvIBEgQIEJhBII0A6IDVAWIF5ApIC1ASIDXBLILhEBUApDAKVAP0gKVIAAV/gANrFQILliyICYg+IHCDxgEAitAAtIs5g9IgJgBIB+gpICNguIAHgDIBfAEIBkAEIDBAJIDoALIBHADIAcABIB+AsIA7AVIDoBRIBlAkIFEBzIpfBdgEg7/AEpIAAgUIAJADIBFAbgEA4oAEKIh6h5ImMh7IBAgsIA0ADIENAQICqAIICTCbIAfAiIAABNgEA5ngFiIhWEiIifowIDQA5IBDASIB6CGIAAIQIgfADgACQBqIBcg6IB3hIIB/hRIEPCCIEOg0IEKCFIx+ADgEgzGAAmIgCgIIAJjCIDBBPIgOCCIhuh+Ig4C9gArzhJQgKgJAAgNQAAgPAKgKQAKgKAOAAQANAAAKAKQAKAKAAAPQAAANgKAJQgKAKgNAAQgOAAgKgKgAIajkIjxBPIhejMIgWDyIgUAGIhEiIIgWCcQlTiyjdhUQhXghheg5IgZh4IgeBUQiDhYiNiDIjnjvIhQitICIgrQCqAVDUgdIAQgCQDYC4DpB5QCHBFCMAyQA9AWBDATIGwBPID1APQA2ACA4AAIBhgBIBbC6IEHB+ImfDSgEAp7gCUQgKgKAAgOQAAgOAKgJQAKgKAPAAQAMAAAKAKQALAJgBAOQABAOgLAKQgKAKgMAAQgPAAgKgKgEgjngEFQgIgIAAgLQAAgMAIgIQAJgHAMAAQALAAAIAHQAIAIAAAMQAAALgIAIQgIAJgLAAQgMAAgJgJgA8lk/QgJgHAAgLQAAgLAJgJQAHgIAMAAQALAAAJAIQAJAJAAALQAAALgJAHQgJAJgLAAQgKAAgJgJgEgpfgIsQgQgPAAgXQAAgXAQgRQAPgQAYAAQAYAAAPAQQAQARAAAXQAAAXgQAPQgRARgWABQgYgBgPgRgEAoEgLSQgJgIAAgLQAAgLAJgIQAIgJALAAQALAAAJAJQAIAIAAALQgBALgHAIQgJAIgLAAQgLAAgIgIgEgiDgM2QgIgIAAgLQAAgLAIgJQAKgHALAAQALAAAIAHQAIAJAAALQAAALgIAIQgIAJgLAAQgLAAgKgJgALPtCQgKgJAAgOQAAgOAKgLQAKgJAOgBQAPABAIAJQAKALAAAOQAAAOgKAJQgIAJgPABQgOgBgKgJgAW/wyQgLgLAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLALQgLALgPAAQgOAAgMgLgAiCw+QgOgNAAgUQAAgTAOgPQAOgOAVAAQATAAAOAOQAOAPgBATQABAUgOANQgOAOgTAAQgVAAgOgOgEgiEgUeQgMgKAAgQQAAgPAMgLQAMgLAOAAQAQAAAJALQAMALAAAPQAAAQgMAKQgJALgQAAQgOAAgMgLgA1P1iQgbgXg9i8Ig4i2IgGhOIBeAAIDFDPQBSBaAtA6QBFBagPAQIgCACQgsAbh5AFIgmAAQhbAAgagYgADg1ZQgJgJAAgLQAAgMAJgJQAJgIAMAAQALAAAJAIQAIAJAAAMQAAALgIAJQgJAIgLAAQgMAAgJgIgEAl/gZfQgIgIAAgLQAAgbAcAAQALAAAIAHQAJAJAAALQAAALgJAIQgIAJgLAAQgMAAgIgJgAi47GQgJgJAAgLQAAgLAJgJQAIgJAMAAQAMAAAGAJQAJAJAAALQAAALgJAJQgGAHgMAAQgMAAgIgHg");
	this.shape_1596.setTransform(384,185);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#207B4D").s().p("EAlnAEQIiqgKIhajKIAnmrIADAKICeIuIBWkgIB5HWIAKApIgKADgA2+F2IAijgIBoDigEgoDAE+IBajSIAyDNIDBm8IBaFqIgvCAgAUfD/IAojnIAxkZICtFLIgeEIgAWVBGQgKAJAAAOQAAAOAKAKQAKAKAPAAQANAAAKgKQAKgKAAgOQAAgOgKgJQgKgKgNAAQgPAAgKAKgAccBFIAmjMICDDtIgVCQIg0gDIhAAuIhOAggAwzDDIAEgpIAXjwIBdDKIA6B9Ih3BKgABniAICcFPIh+ApIAJABIhLAagAMbCvIgGgQIAEhdIAKiyIAQk7IDQJlgAGai4IADgbIASBKIBHErIhfgEIgHADIgEgBIglAMg");
	this.shape_1597.setTransform(509.4,158.3);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#1D5A4C").s().p("Eg1+ADSICPEVIjFAxgEgygAE8IA4i+IBuB/IAOiEIAOh5IAwCSIBRDxIloBaIgJABgAreE+Ii1gSIAviAIChm1IAehUIAZB4ICFJvgArhBXQgKAKAAAOQAAANAKAKQAKAKAOAAQANAAAKgKQAKgKAAgNQAAgOgKgKQgKgKgNAAQgOAAgKAKgEAr/AEXIAekHIA9onIC6IhIguD8IiCA1gAA7E7IAejCIAWiaIBECGIAQAjIA7B4IhcA7gEAyoAC8IAUiQIAmkDIAGglIBzD9IBaDLgEAleACDIgcgBIAvkNIBrE6gAdSBsIAMhjIAikPIBiD/IArBrIAGARg");
	this.shape_1598.setTransform(382.2,164.2);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#8491B6").s().p("EgtwAHZQhmhMhbhMQFVi3E+kdQBThLBRhSIAMgNQDFjJF6moID7AAQACBLANBWIhjC/ICYAAIgFAaQgEAiAKAqQAjCHCfCnImAFUIHahkIBkGCIitECIAGDtIhFABIo1g8IkIBCIhjABQnKj6krjcgA/PJdQgIAIAAAMQAAALAIAIQAJAJALAAQAMAAAHgJQAIgIAAgLQAAgMgIgIQgHgHgMAAQgLAAgJAHgA4NIkQgJAIAAAMQAAALAJAHQAIAJALAAQALAAAIgJQAJgHAAgLQAAgMgJgIQgIgJgLAAQgMAAgHAJgEglIAEPQgPARgBAXQABAWAPAQQAQARAXAAQAWAAASgRQAPgQAAgWQAAgXgPgRQgQgQgYAAQgXAAgQAQgA9rAsQgIAIgBALQABAMAIAIQAJAJALAAQAMAAAHgJQAIgIAAgMQAAgLgIgIQgHgIgMAAQgLAAgJAIgA9snHQgMALAAAPQAAAPAMAKQALAMAPAAQAPAAAKgMQAMgKAAgPQAAgPgMgLQgKgMgPAAQgPAAgLAMgEg3nAMcIAAl9IBugjIgoCKICGgQIAKAiQAUAnAxANQAwAOhoA+QgzAghAAcIF8AaIApB+IAhBAgEA0/AH2IglDOIi7ojIg9IpIitlNIgxEaQhlhGhthZQiXh9iYiXQA6gxA2g0IAVgUQDLjCBvi7IAAAAQBhikAbicIBKE9QBlFsCWDwICJgxICcDLIgmEFgEAsbACQQgJAJAAALQAAALAJAIQAIAIALAAQAMAAAJgIQAHgIAAgLQAAgLgHgJQgJgIgMAAQgLAAgIAIgAfXJXIgrhiIgShKIgDAbIgFgLQiegnh1g3Qg5gcgOgrIgBgDIA+gMQBKgRBJgaIA0gUIAKgEIAdgNICkhQIB4hEIACgBIAAgBIAAACIAFgGIAAACIAAAAQgIBeAtCJQAnB5BOCPIgJC0IgwgRIhhj/IgiESQgiAQgNANIgEACQgWAAhEiMgEg3nADHIATApIgTAagEg3ngCbIAAAAIASAaIgSgag");
	this.shape_1599.setTransform(356.1,94.3);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#C6D5F1").s().p("ADIPUIrhkAIiFpwQBeA5BYAhQDdBUFSCyIgeDBIBnAAIgEACIR9gCIkJiHIkPA2IkPiFIh/BRIg6h9IDxhOIFrCZIGfjTIkHh9Ihbi4IhhABQg4AAg2gCIBUABIB4gBIBZgDIAkgCQBEgEA8gGIBGgJIAfgFQAOArA4AcQB1A1CfAnIAFALIgzFmIAlgNIAEABIiNAvIiclRIgkGVIBLgaIM5A/IGKENIJfhcIlEhzICCg1IBOggIGMB6IB6B6IDXAEIAACrQn6FLuOAAQuNAA0ilLgAZRK5IrmCyIU/ABInBjxgAjYKGICKABIhojhgEg7+ANDIBNAKIhFgaIAdAGIglkOIAAh/II2CQIACAFIAVBGIgvCiIgJACIgYAGIiPkUIg2FFIk4BOgEA7gAK7IAKgDIgKgpIAfgDIAABRgEgmTAI/IBjgBIhEARIgfgQgA3zI4IBGgBIgHjtICukCIhkmAInaBkIGAlWQigingiiHQgKgqADgiIAGgaIiYAAIBji/QgNhWgChLIDmAAIAGBOIA4C1QA9C8AbAYQAgAdB7gGQB5gEAsgbIADgCQB1B5BvBhIASAPQjTAcirgUIiHAqIBQCuIDmDvQCNCDCDBVIihG4IhalsIjBG9IgyjMIhaDSgAChGwIAUgGIgEApgAbcGyIhHktIArBiQBLCZASgPQAOgNAhgQIgMBigAfQFBIAvARIgEBcgEAzWABMIgFAlIicjJIiJAxQiWjwhlluIhKk9IPbOmIjPg5IgDgKIgnGqgAdplNIAAABIgCABg");
	this.shape_1600.setTransform(384,131.1);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#F9AF4C").s().p("Eg5hADUQgKgKAAgOQAAgOAKgJQAJgKAOAAQAOAAAKAKQAKAJAAAOQAAAOgKAKQgKAKgOAAQgOAAgJgKgEA4yACgQgKgKABgNQgBgOAKgKQALgKAOAAQAOAAAJAKQAKAKAAAOQAAANgKAKQgJAKgOAAQgOAAgLgKgAMyAkQgKgIAAgPQAAgNAKgJQAKgJAOAAQANAAAKAJQAKAJAAANQAAAPgKAIQgKAKgNAAQgOAAgKgKgEgrWgBbQgIgHAAgKQAAgXAYAAQAJAAAHAHQAIAGgBAKQABAKgIAHQgHAHgJAAQgLAAgFgHgAwTi3QgNgNAAgTIABgGIBVAAIABAGQAAATgMANQgNAMgRAAQgTAAgNgMg");
	this.shape_1601.setTransform(393.5,22.3);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#2C374D").s().p("EA6FAJHIhDgTIvbukQgbCdhhCjQjohxi3htIhIgsIjhigIgHAEIAAABQljDpluCiQkGhekAh9IlSi1QjlBskZB1QhUgyhfhAIjIiQQh9Auk/BlQgug7hRhaIjFjOIHGAAIgBAGQAAATANANQANAMATAAQARAAANgMQAMgNAAgTIAAgGMBJpAAAIAAWXgEA6SgF7QgKAKAAAOQAAANAKAKQAKAKAOAAQAPAAAIgKQAKgKAAgNQAAgOgKgKQgIgKgPAAQgOAAgKAKgAOSn3QgLAKAAAOQAAAPALAIQAKAKANAAQANAAAKgKQAKgIAAgPQAAgOgKgKQgKgJgNAAQgNAAgKAJgEAl4gIFQAAALAHAJQAJAIALAAQAMAAAIgIQAIgJAAgLQAAgLgIgJQgIgHgMAAQgbAAAAAbgAi4qBQgJAJAAALQAAALAJAJQAJAHALAAQAMAAAHgHQAIgJAAgLQAAgLgIgJQgHgIgMAAQgLAAgJAIgEg7sABgIgSgbIAAsQIc4AAQl6GnjFDKIgMAMIhJgbImii3QkbCFlIGvQhPhag+hagEg4CgFHQgKAJAAAOQAAAOAKAKQAJAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgJQgKgKgOAAQgOAAgJAKgEgp+gJaQAAAKAHAHQAFAHALAAQAKAAAHgHQAHgHAAgKQAAgKgHgGQgHgHgKAAQgXAAAAAXg");
	this.shape_1602.setTransform(384,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.6,-227.5,1607.8,864.2);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1,end:9});

	// timeline functions:
	this.frame_1 = function() {
		var that = this;
		
		// Reset game
		AC(this).getComposition().set("score", 0);
		this.parent.score.text = 0;
		this.parent.progressBar.gotoAndPlay("start");
		var interval = AC(this).getComposition().get("interval");
		if (interval) {
			clearInterval( interval );
		}
		
		// Catch click so hidden parts of enemies are NOT clickable
		this.rocks_a.on("click", function(evt) {});
		this.rocks_b.on("click", function(evt) {});
		this.rocks_c.on("click", function(evt) {});
		
		
		this.on("hit", function(evt) {
			var comp = AC(this).getComposition();
			this.explosion.x = evt.stageX / comp.dpr / comp.scaleFactor;
			this.explosion.y = evt.stageY / comp.dpr / comp.scaleFactor;
			this.explosion.gotoAndPlay(0);
		});
		
		
		var interval = setInterval( function() {
		
			var rand = Math.random()*10;
			
			if (rand <= 2) {
				that.enemy1.gotoAndPlay("appear");
			}
			else if (rand >= 2 && rand <= 4) {
				that.enemy2.gotoAndPlay("appear");
			}
			else if (rand >= 4 && rand <= 6) {
				that.enemy3.gotoAndPlay("appear");
			}
			else if (rand >= 6 && rand <= 8) {
				that.enemy4.gotoAndPlay("appear");
			}
			else if (rand >= 8 && rand <= 9) {
				that.enemy5.gotoAndPlay("appear");
			}
			else {
				that.enemy6.gotoAndPlay("appear");
			}
		
		}, 1000);
		AC(this).getComposition().set("interval", interval);
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19));

	// explosion
	this.explosion = new lib.Explosion();
	this.explosion.setTransform(955.9,59);

	this.timeline.addTween(cjs.Tween.get(this.explosion).wait(20));

	// enemy5
	this.enemy5 = new lib.Enemy_a();
	this.enemy5.setTransform(40.6,416.3,1.834,1.834,90,0,0,47.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.enemy5).to({_off:true},8).wait(12));

	// rocks
	this.rocks_c = new lib.Rocks_c();
	this.rocks_c.setTransform(349.8,464,0.501,0.839,0,0,0,208.1,84.5);
	this.rocks_c.cache(-492,38,1850,167);

	this.timeline.addTween(cjs.Tween.get(this.rocks_c).wait(20));

	// floor
	this.instance = new lib.Floor();
	this.instance.setTransform(386.2,583.4,1,1,0,0,0,386.2,56.6);
	this.instance.cache(-2,-2,773,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqzVsIAA8cIZmmQIAAccQpnGpqwAAQilAAiqgZg");
	mask.setTransform(94.7,141.3);

	// enemy4
	this.enemy4 = new lib.Enemy_a();
	this.enemy4.setTransform(100.3,227,1.834,1.834,0,0,0,47.4,9.7);

	this.enemy4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.enemy4).to({_off:true},8).wait(12));

	// enemy1
	this.enemy1 = new lib.Enemy_a();
	this.enemy1.setTransform(652.4,427.2,1.834,1.834,0,0,0,47.4,9.7);

	this.timeline.addTween(cjs.Tween.get(this.enemy1).to({_off:true},8).wait(12));

	// rocks
	this.rocks_b = new lib.Rocks_b();
	this.rocks_b.setTransform(388.9,392.6,1,1,0,0,0,388.9,211.5);
	this.rocks_b.cache(-413,-1185,2107,1676);

	this.timeline.addTween(cjs.Tween.get(this.rocks_b).wait(20));

	// enemy2
	this.enemy2 = new lib.Enemy_a();
	this.enemy2.setTransform(329.5,296.5,1.834,1.834,0,0,0,47.4,9.7);

	this.timeline.addTween(cjs.Tween.get(this.enemy2).to({_off:true},8).wait(12));

	// rocks
	this.rocks_a = new lib.Rocks_a();
	this.rocks_a.setTransform(1034.9,164.5,0.769,1,0,0,0,380.7,150.5);
	this.rocks_a.cache(-90,169,931,261);

	this.rocks_a_1 = new lib.Rocks_a();
	this.rocks_a_1.setTransform(346.7,164.5,0.769,1,0,0,0,380.7,150.5);
	this.rocks_a_1.cache(-90,169,931,261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rocks_a_1},{t:this.rocks_a}]}).wait(20));

	// enemy6
	this.enemy6 = new lib.Enemy_a();
	this.enemy6.setTransform(621.6,326.3,1.834,1.834,0,0,0,47.5,35.9);

	this.timeline.addTween(cjs.Tween.get(this.enemy6).to({_off:true},8).wait(12));

	// enemy3
	this.enemy3 = new lib.Enemy_a();
	this.enemy3.setTransform(221.5,195.1,1.834,1.834,0,0,0,47.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.enemy3).to({_off:true},8).wait(12));

	// background
	this.instance_1 = new lib.Background();
	this.instance_1.setTransform(384,185,1,1,0,0,0,384,185);
	this.instance_1.cache(-559,-229,1612,868);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg7/Au4MAAAhdvMB3+AAAMAAABdvg");
	this.shape.setTransform(384,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.6,-1002.1,2248.4,1671.5);


(lib.Game_Wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.progressBar = new lib.ProgressBar();
	this.progressBar.setTransform(-425.6,276.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhFBcIAAi3ICIAAIAAAfIhjAAIAAApIBcAAIAAAdIhcAAIAAAzIBmAAIAAAfg");
	this.shape.setTransform(169.1,283.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAmBcIgbgoQgMgVgGgGQgFgGgGgCQgGgCgNAAIgIAAIAABNIglAAIAAi3IBPAAQAcAAANAEQAOAGAIAMQAIANAAAQQAAAWgMANQgNAMgYADQAMAIAIAIQAIAIANAWIAXAkgAgtgNIAcAAQAZAAAHgCQAHgDADgFQAEgGAAgIQAAgJgFgGQgFgGgJgCIgZAAIgeAAg");
	this.shape_1.setTransform(151.7,283.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhABHQgZgaAAgsQAAgbAJgTQAGgOALgLQALgMANgFQARgIAWAAQAoAAAZAaQAZAZAAAsQAAAtgZAaQgYAZgpAAQgoAAgYgZgAgkguQgOAPAAAfQAAAfAOARQAPAQAVAAQAWAAAOgQQAPgRAAgfQAAgfgOgQQgOgPgXAAQgWAAgOAQg");
	this.shape_2.setTransform(131.4,283.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag4BHQgXgagBgsQAAgsAZgaQAYgaAlAAQAhAAAWAVQAMAMAHAWIgmAJQgCgPgLgIQgLgIgOAAQgTAAgNAOQgNAPAAAhQAAAiANAPQAMAPATAAQAPAAAKgKQALgJAFgVIAkAMQgIAegUAPQgTAPgeAAQgjAAgYgZg");
	this.shape_3.setTransform(111.8,283.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgzBQQgUgRgDgfIAkgEQAEATAKAIQAKAJAPAAQASAAAKgIQAIgHABgLQgBgGgDgFQgEgFgJgDIgdgIQgegIgMgJQgRgPAAgWQgBgOAJgNQAHgMAQgHQAPgGAVAAQAiAAARAPQASAQABAaIgmABQgCgOgIgHQgIgFgOAAQgQAAgJAGQgHAEABAIQAAAGAFAFQAHAGAZAGQAcAHAOAHQAMAHAIAJQAHANAAARQAAARgJAOQgJANgQAHQgQAHgYAAQgiAAgSgQg");
	this.shape_4.setTransform(93.7,283.5);

	this.score = new cjs.Text("0", "bold 42px 'Arial'", "#FF0000");
	this.score.name = "score";
	this.score.lineHeight = 50;
	this.score.lineWidth = 76;
	this.score.setTransform(195.5,258.3);

	this.game = new lib.Game();
	this.game.setTransform(-93.7,-20,1,1,0,0,0,384,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.game},{t:this.score},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.progressBar}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1034.4,-1322.1,2248.4,1671.5);


// stage content:



(lib.AgilityGameMordor_test03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:1});

	// timeline functions:
	this.frame_0 = function() {
		// Animate Commons Current (by designlab.io, Simon Widjaja)
		!function(t){if(!t.AnimateCommons){var e=t.AnimateCommons=function(t){this.context=t};e.prototype={getCanvasId:function(){return this.getCanvas().id},_addCanvasWrapper:function(){if(!this._getCanvasWrapper()){var t=document.createElement("div"),e=this.getCanvas();t.className="canvas-wrapper",t.style.width=t.style.height="100%",t.style.overflow="hidden",t.style.position="relative",e.parentNode.insertBefore(t,e),t.appendChild(e)}},_getCanvasWrapper:function(){return-1!=this.getCanvas().parentNode.className.indexOf("canvas-wrapper")?this.getCanvas().parentNode:null},getParent:function(){return this.context.parent?n(this.context.parent):null},getAllParents:function(){for(var t=this.context.parent,e=[];t;)e.push(t),t=t.parent;return e},getStage:function(){for(var t=this,e=this.getParent();e;)t=e,e=e.getParent();return t},getCanvas:function(){return this.getStage().context.canvas},getComposition:function(){return n.getComposition(this.context)},getGlobalScaleFactor:function(){for(var t=this.getAllParents(),e=this.context.scaleX,n=this.context.scaleY,i=0;i<t.length-1;i++)e*=t[i].scaleX,n*=t[i].scaleY;return{scaleX:e,scaleY:n}},enableFpsMeter:function(t){function e(t){a.begin(),o.call(this,t),a.end()}var n=t||1e3;if(!this.getComposition().get("fpsStats")){var i=function(){function t(t,e,n){return t=document.createElement(t),t.id=e,t.style.cssText=n,t}function e(e,n,i){var a=t("div",e,"padding:0 0 3px 3px;text-align:left;background:"+i),o=t("div",e+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+n);for(o.innerHTML=e.toUpperCase(),a.appendChild(o),e=t("div",e+"Graph","width:74px;height:30px;background:"+n),a.appendChild(e),n=0;74>n;n++)e.appendChild(t("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+i));return a}function i(t){for(var e=h.children,n=0;n<e.length;n++)e[n].style.display=n===t?"block":"none";c=t}function a(t,e){t.appendChild(t.firstChild).style.height=Math.min(30,30-30*e)+"px"}var o=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,s=o(),r=s,l=0,c=0,h=t("div","stats","width:80px;opacity:0.9;cursor:pointer");h.addEventListener("mousedown",function(t){t.preventDefault(),i(++c%h.children.length)},!1);var p=0,d=1/0,g=0,u=e("fps","#0ff","#002"),f=u.children[0],v=u.children[1];h.appendChild(u);var m=0,x=1/0,C=0,u=e("ms","#0f0","#020"),y=u.children[0],b=u.children[1];if(h.appendChild(u),self.performance&&self.performance.memory){var w=0,P=1/0,A=0,u=e("mb","#f08","#201"),M=u.children[0],S=u.children[1];h.appendChild(u)}return i(c),{REVISION:14,domElement:h,setMode:i,begin:function(){s=o()},end:function(){var t=o();if(m=t-s,x=Math.min(x,m),C=Math.max(C,m),y.textContent=(0|m)+" MS ("+(0|x)+"-"+(0|C)+")",a(b,m/200),l++,t>r+n&&(p=Math.round(1e3*l/(t-r)),d=Math.min(d,p),g=Math.max(g,p),f.textContent=p+" FPS ("+d+"-"+g+")",a(v,p/100),r=t,l=0,void 0!==w)){var e=performance.memory.usedJSHeapSize,i=performance.memory.jsHeapSizeLimit;w=Math.round(9.54e-7*e),P=Math.min(P,w),A=Math.max(A,w),M.textContent=w+" MB ("+P+"-"+A+")",a(S,e/i)}return t},update:function(){s=this.end()}}};"object"==typeof module&&(module.exports=i);var a=new i;a.setMode(0),a.domElement.style.position="absolute",a.domElement.style.left="0px",a.domElement.style.top="0px",document.body.appendChild(a.domElement);var o=this.getComposition().stage.context.stage.handleEvent;this.getComposition().stage.context.stage.handleEvent=e.bind(this.getComposition().stage.context.stage),this.getComposition().set("fpsStats",!0)}},highDpi:function(){var t=this.getStage().context,e=this.getCanvas(),i=this.getComposition(),a=n.getDevicePixelRatio(),o=e.getAttribute("width"),s=e.getAttribute("height");e.setAttribute("width",Math.round(o*a)),e.setAttribute("height",Math.round(s*a)),e.style.width=o+"px",e.style.height=s+"px",t.scaleX=t.scaleY=a,i.devicePixelRatio=a,i.scaleFactor=a},autoScale:function(e,i){function a(){var n=o._getCanvasWrapper(),a=t.getComputedStyle(n),s=a.width.replace("px","")/d,r=a.height.replace("px","")/g;p=Math.min(s,r),o.getComposition().scaleFactor=p,h.style.width=d*p+"px",h.style.height=g*p+"px",h.width=d*p*l,h.height=g*p*l,c.scaleX=c.scaleY=p*l,c.update(),h.style.position="absolute",e.hcenter&&(h.style.left="50%",h.style["margin-left"]=h.width/l/-2+"px"),e.vcenter&&(h.style.top="50%",h.style["margin-top"]=h.height/l/-2+"px"),"function"==typeof i&&i(p)}var o=this;if(!this.getComposition().isAutoScale){!e&&(e={});var s={hcenter:!0,vcenter:!0,highDpi:!0};for(var r in e)s[r]=e[r];e=s;var l=e.highDpi?n.getDevicePixelRatio():1;this.getComposition().dpr=l,document.getElementsByTagName("html")[0].style.height="100%",document.getElementsByTagName("body")[0].style.height="100%",this._addCanvasWrapper();var c=this.getStage().context,h=this.getCanvas(),p=1,d=h.width,g=h.height,u=!0;t.addEventListener("resize",function(){u&&setTimeout(function(){a(),u=!0},10),u&&setTimeout(function(){a(),u=!0},500),u=!1}),setTimeout(function(){a(),u=!0},10),this.getComposition().isAutoScale=!0}}};var n=t.AC=function(t){return new e(t)},i=function(t){this.id=t.id,this.canvas=t.canvas,this.stage=t.stage,this.isAutoScale=t.isAutoScale||!1,this.scaleFactor=t.scaleFactor||1,this.devicePixelRatio=t.devicePixelRatio||1,this.variables=t.variables||{},this.store={}};i.prototype.set=function(t,e){for(var n=t.split("."),i=this.store,a=0;a<n.length;a++){var o=n[a];a===n.length-1?i[o]=e:i=i[o]=i[o]?i[o]:{}}},i.prototype.get=function(t){for(var e=t.split("."),n=this.store,i=0;i<e.length;i++){var a=e[i];n="object"==typeof n?n[a]:n}return n},n._compositions={},n.getComposition=function(t){var e=n(t),a=e.getStage(),o=n._compositions[a.getCanvasId()];return o||(o=n._compositions[a.getCanvasId()]=new i({id:e.getCanvasId(),canvas:a.getCanvas(),stage:a})),o},n.isMobile=function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone|iPad|iPod/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)||!1},n.getDevicePixelRatio=function(){var e=1;return void 0!==t.screen.systemXDPI&&void 0!==t.screen.logicalXDPI&&t.screen.systemXDPI>t.screen.logicalXDPI?e=t.screen.systemXDPI/t.screen.logicalXDPI:void 0!==t.devicePixelRatio&&(e=t.devicePixelRatio),e=e>=1&&10>=e?e:1},n.applyDefaults=function(t,e){for(var n in t)e[n]=t[n];return e},n.destroyChild=function(t){t.removeAllChildren(),t.removeAllEventListeners(),t.parent&&t.parent.removeChild(t),t=null,delete t}}}(window);
		
		//==================================================	
		// General composition setup	
		//==================================================
		// Debug: Enable FPS Meter
		//AC(this).enableFpsMeter();
		//AC(this).highDpi();
		AC(this).autoScale();
		
		// Setup mouse listener for button
		stage.enableMouseOver(1000);		
			
		// Set initial score on composition level	
		AC(this).getComposition().set("score", 0);
		
		//==================================================
		// Global event handlers	
		//==================================================
		// Listen for "play" event triggered by intro
		this.on("play", function() {
			this.play();
		});
		// Listen for "playAgain" event triggered by intro
		this.on("playAgain", function() {
			this.gameWrapper.game.gotoAndPlay("start");
		});
		// Listen for "hit" event triggered by enemy
		this.on("hit", function() {
			var score = AC(this).getComposition().get("score");
			score++;
			AC(this).getComposition().set("score", score);
			this.gameWrapper.score.text = score;
		});
		// Listen for "gameover" event triggered by progressBar
		this.on("gameover", function() {
			this.gameWrapper.game.gotoAndStop("end");
			this.intro.gotoAndPlay("endScreen");
		});
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(51).call(this.frame_52).wait(1));

	// intro
	this.intro = new lib.Intro();
	this.intro.setTransform(564.1,286.1,1,1,0,0,0,220.5,0.5);
	this.intro._off = true;

	this.timeline.addTween(cjs.Tween.get(this.intro).wait(1).to({_off:false},0).wait(52));

	// game
	this.gameWrapper = new lib.Game_Wrapper();
	this.gameWrapper.setTransform(478.1,-295.2);
	this.gameWrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gameWrapper).wait(9).to({_off:false},0).to({x:477.8,y:320,mode:"synched",startPosition:0},43,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance = new lib.EndScreen();
	this.instance.setTransform(386.2,56.6,1,1,0,0,0,386.2,56.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(8).to({x:385.9,y:696.6},43,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;