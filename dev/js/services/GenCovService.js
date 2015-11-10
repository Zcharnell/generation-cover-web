function GenCovService($resource, $state){
	var data;
	var id;
	var catalog;

	//var rest = $resource('/ui/api/profile/v3/accounts/lookup/:id.json', null, {
	var rest = $resource('/json/catalog.json', null, {
		'query':{method:'get', isArray:false},
		'update':{method:'PUT'}
	});

	var loadData = function(){
		if(id) data = rest.query({id:id}).$promise.then(dataLoaded);
	};

	var getData = function(_id){
		id = 'gencov';
		if(!data) loadData();
		return data;
	};

	var dataLoaded = function(result){
		data = result;
		catalog = setCatalog();
		//setupPrograms();
		//setupVariables();
		//PrefsGuiContacts.setupContacts(data);
		//PrefsGuiErrors.setupErrors(data);
		//setupAlerts();
		//setupDefaultStates();
	};

	var setCatalog = function(){
		var cat = data.catalog;
		return cat;
	};

	var getCatalog = function(){
		return catalog;
	};

	

	return{
		'getData':getData,
		'catalog':getCatalog
	};
}

GenCovService.$inject = ['$resource', '$state'];

angular.module('GenCov').factory('GenCovService', GenCovService);