const database = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
function isValid(barcodes){
	var re = /^[0-9]*$/;
	for(var i=0;i<barcodes.length;i++){
		if(!re.test(barcodes[i]))
			return false;
	}
	return true;
}
function getBuyedGoods(barcodes){
	var goods = [];
	for(var i=0;i<12;i++)
		goods[i]=0;
	for(var i=0;i<barcodes.length;i++){
		var goodId = parseInt(barcodes[i]);
		goods[goodId]++;
	}
	return goods;
}
function printReceipt(barcodes){
	if(isValid(barcodes)){
		var receipt = "Receipts\n------------------------------------------------------------\n";
		var goods = getBuyedGoods(barcodes);
		var sum = 0;
		for(var i=1;i<goods.length;i++){
			if(goods[i]!=0){
				receipt += database[i-1].name + "\t\t" + database[i-1].price + "\t" + goods[i]+"\n";
				sum += goods[i]*parseInt(database[i-1].price);
			}
		}
		receipt += "------------------------------------------------------------\nPrice: "+sum;
		return receipt;
	}
	return "[ERROR]:Contains invalid goods!";
}
const barcodes = ['0006','0010','0006'];
console.log(printReceipt(barcodes));
module.exports = {
	isValid, getBuyedGoods, printReceipt
}