'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'JUG Indonesia',
    			'description': 'Komunitas pengembang dengan Java terbaik di negara ini, bergabunglah, rasakan ke dahsyatannya',
    			'faClass': 'icon-pen',
                'link': '#jug'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Komunitas',
    			'description': 'Keanggotaan JUG Indonesia adalah GRATIS, tidak dipungut bayaran.',
    			'faClass': 'icon-cogs',
                'link': '#forum'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Kegiatan',
    			'description': 'Mari menjadi dari bagian dari mekanisme kontribusi JUG Indonesia.',
    			'faClass': 'icon-copy2',
                'link': '#training'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
