requirejs.config({
	baseUrl: '../js/lib',
	paths:{
		'jquery'          : 'jquery-2.0.2',
		'underscore'      : 'underscore',
		'backbone'        : 'backbone',
		'bootstrap'       : 'bootstrap',
		'text'            : 'text'
	},
	
	shim:{
		
		'jquery':{
			exports: 'jQuery'
		},
	    'underscore': {
	    	exports: '_'
	    },
	    'backbone':{
	    	deps: ['jquery', 'underscore'],
	    	exports: 'Backbone'
	    },
	    'bootstrap':{
	    	deps:['jquery']
	    }
	}
	
	
});



require(['jquery', 'underscore', 'backbone', 'bootstrap', 'text'], function ($, _, backbone, bootstrap, text) {
	
	console.log("jquery" + typeof $);
	console.log("underscore" + typeof _);
	console.log("backbone" + typeof backbone);
	
	
});