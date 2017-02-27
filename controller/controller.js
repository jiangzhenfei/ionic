var appCtrl=angular.module('appCtrl',[])

appCtrl.controller('MusicCtrl',function(){
	console.log(2)
})
appCtrl.controller('ClassCtrl',function(){
	console.log(3)
})
appCtrl.controller('goodsCtrl',function($scope,$ionicHistory){
	$scope.doSomething=function(){
		console.log($ionicHistory)
		$ionicHistory.goBack(-1)
	}
})
appCtrl.controller('HomeCtrl',function($scope){
			console.log('home')
			$scope.age=[1,2,3,4]
			$scope.add=function(){
				$scope.age.push(1999)
			}

		})