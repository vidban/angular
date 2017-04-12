(function() {
'use strict';

angular.module('SLApp', [])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
// .provider('SLService',SLServiceProvider);
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

// Controller for to buy items
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
	var list = this;
	var shoppingList = ShoppingListCheckOffService;

	list.items = shoppingList.getItems();

	list.removeItem = function(itemIndex){
		shoppingList.removeItem(itemIndex);
	};

	list.message = "Everything is bought!";

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
	var bList = this;
	var shoppingList = ShoppingListCheckOffService;

	bList.items = shoppingList.getBoughtItems();
	bList.message = "Nothing bought yet!";
}


function ShoppingListCheckOffService(){
	var service = this;

	var items = [
		{
			'name': 'Determination',
			'quantity': 'A ton'
		},
		{
			'name': 'Motivation',
			'quantity': 'A boost'
		},
		{
			'name': 'Interest',
			'quantity': 'More than an ounce'
		},
		{
			'name': 'Goals',
			'quantity': 'A set'
		},
		{
			'name': 'Cookies as the reward',
			'quantity': 'A box'
		}
	];

	var boughtItems= [];

	service.getItems = function(){
		return items;
	};

	service.removeItem = function(itemIndex){
		boughtItems.push(items[itemIndex]);
		items.splice(itemIndex, 1);
		
	}

	service.getBoughtItems = function(){
		return boughtItems;
	}
}


})();

