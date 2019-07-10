const database = [
	{ "id": "0001", "name": "Coca Cola", "price": 3 },
	{ "id": "0002", "name": "Diet Coke", "price": 4 },
	{ "id": "0003", "name": "Pepsi-Cola", "price": 5 },
	{ "id": "0004", "name": "Mountain Dew", "price": 6 },
	{ "id": "0005", "name": "Dr Pepper", "price": 7 },
	{ "id": "0006", "name": "Sprite", "price": 8 },
	{ "id": "0007", "name": "Diet Pepsi", "price": 9 },
	{ "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
	{ "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
	{ "id": "0010", "name": "Fanta", "price": 12 }
];
function isValid(barcodes) {
	let isValid = true;
	let isExsit = false;
	for (let i = 0; i < barcodes.length; i++) {
		if (!/^[0-9]*$/.test(barcodes[i])) {
			isValid = false;
			break;
		}
		for (let j = 0; j < database.length; j++) {
			if (barcodes[i] == database[j].id) {
				isExsit = true;
				break;
			}
		}
		if (!(isExsit && isValid))
			return false;
	}
	return true;
}
function getBuyedGoods(barcodes) {
	let goods = [];
	for (let i = 0; i < 12; i++)
		goods[i] = 0;
	for (let i = 0; i < barcodes.length; i++) {
		let goodId = parseInt(barcodes[i]);
		goods[goodId]++;
	}
	return goods;
}
function printReceipt(barcodes) {
	if (isValid(barcodes)) {
		let receipt = "Receipts\n------------------------------------------------------------\n";
		const goods = getBuyedGoods(barcodes);
		let sum = 0;
		for (let i = 1; i < goods.length; i++) {
			if (goods[i] != 0) {
				receipt += database[i - 1].name + "\t\t" + database[i - 1].price + "\t" + goods[i] + "\n";
				sum += goods[i] * parseInt(database[i - 1].price);
			}
		}
		receipt += "------------------------------------------------------------\nPrice: " + sum;
		return receipt;
	}
	return "[ERROR]:Contains invalid goods!";
}
module.exports = {
	isValid, getBuyedGoods, printReceipt
}