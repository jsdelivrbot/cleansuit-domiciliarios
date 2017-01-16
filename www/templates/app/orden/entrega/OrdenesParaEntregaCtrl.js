var OrdenesParaEntregaCtrl =  function ($scope,
										$rootScope,
										$state, 
										$log,
										OrdenesFactory) {
	
	$log.debug("OrdenesParaEntregaCtrl")
	$scope.ordenes = OrdenesFactory.ordenesParaEntrega;
	
	/*OrdenesFactory
	.cargarOrdenesEnProceso() 
	.then(function() {
		//$scope.ordenes = OrdenesFactory.ordenesEnProceso;
	});*/

	$scope.hayOrdenes = function() {
		if(!$scope.ordenes) {
			return false;
		}

		if($scope.ordenes.length > 0) {
			return true;
		}
		
		return false;
	};

	$scope.$on('$ionicView.beforeEnter', function(event) {
		
	});
	
};

app.controller('OrdenesParaEntregaCtrl', OrdenesParaEntregaCtrl);