var OrdenesRecolectadasCtrl =  function ($scope,
									$log,
									$state,
									OrdenesFactory) {
	
	$log.debug("OrdenesRecolectadasCtrl", $scope.$id);
	$scope.ordenes = OrdenesFactory.ordenesRecolectadas;
	
	$scope.$on("$ionicView.beforeEnter", function() {
		$scope.formulario.init();
		$scope.formulario.orden.titulo = "Órdenes recogidas";
		$scope.formulario.orden.descripcion = "Estas son las ordenes que ha recogido";
		$scope.formulario.orden.noHayOrdenes = "No hay órdenes recogidas aún";		
	});

	$scope.refrescar = function() {
		OrdenesFactory
		.cargarAsignadas() 
		.then(function() {
			$scope.ordenes = OrdenesFactory.ordenesRecolectadas;
		})
		.finally(function() {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.hayOrdenes = function() {
		if(!$scope.ordenes) {
			return false;
		}

		if($scope.ordenes.length > 0) {
			return true;
		}
		
		return false;
	};

	$scope.verInformacionOrden = function(index) {
		$scope.carrito.setOrdenRecolectada($scope.ordenes[index])
		$state.go("app.recolectada")
	}	
};

app.controller('OrdenesRecolectadasCtrl', OrdenesRecolectadasCtrl);