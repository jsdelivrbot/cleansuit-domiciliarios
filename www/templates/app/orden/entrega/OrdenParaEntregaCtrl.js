var OrdenParaEntregaCtrl = function($scope, 
							$stateParams,
							$state,
							$log,
							$ionicListDelegate,
							OrdenesFactory, 
							$timeout) {

	$log.debug("OrdenParaEntregaCtrl");
	
	$scope.formulario = {
		valido: true,
		cancelar: {
			hide: true
		},
		siguiente: {
			texto: "ORDEN ENTREGADA"
		}
	};
	
	$scope.$on("$ionicView.beforeEnter", function() {
		$scope.carrito.infoOrden.orden.recoleccion.fecha = new Date($scope.carrito.infoOrden.orden.recoleccion.fecha);
		$scope.carrito.infoOrden.orden.entrega.fecha = new Date($scope.carrito.infoOrden.orden.entrega.fecha);
	});

	$scope.$on('$ionicView.afterEnter', function(event) {
		
	});
	
	$scope.$on("$ionicView.beforeLeave", function() {
		
	});

	$scope.siguiente = function() {
		if ($scope.formulario.valido) {
			$state.go("app.entrega-envio");
		}
		else {
			console.log("Formulario incompleto.")
		}
	};

	//cancelar orden:
	$scope.cancelar = function() {
		
		$scope.clientSideList = [
    		{ text: "Valor elevado", value: "0" },
    		{ text: "Manifiesta mala atención", value: "1" },
    		{ text: "Prefiere otra empresa", value: "2" }
    	];

    	$scope.data = {
			clientSide: '0'
		};

		$scope.$ionicPopup = $ionicPopup;

		CancelarOrdenFactory.$scope = $scope;
		CancelarOrdenFactory.cb = {
			pendiente: 	function(e) {
				$scope.carrito.vaciar();
				$ionicHistory.clearHistory();
				$ionicHistory.nextViewOptions({
					disableBack:'true'
				});
				$state.go("app.entrega");
			},

			volverInfoOrden: function(e) {

			},

			enviar: function(e) {
				console.log($scope.motivo)
				$scope.carrito.vaciar();
			},

			cancelar: function(e) {
				$ionicHistory.clearHistory();
				$ionicHistory.nextViewOptions({
					disableBack:'true'
				});
				$state.go("app.entrega");
			},
		};

		CancelarOrdenFactory.mostrarOrdenPendiente();
	};

};


app.controller("OrdenParaEntregaCtrl", OrdenParaEntregaCtrl);
