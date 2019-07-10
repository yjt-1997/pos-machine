const printReceipt = require('../printReceipt');

//isValid非法输入测试
it('should return false when invoke isValid given a array contains letter', () => {
	//given
	const barcodes = ['001a'];
	//when
	const result = printReceipt.isValid(barcodes);
	//then
	expect(result).toBe(false);
});

//isValid的合法输入测试
it('should return true when invoke isValid given a array and its element is in database', () => {
	//given
	const barcodes = ['0001', '0003'];
	//when
	const result = printReceipt.isValid(barcodes);
	//then
	expect(result).toBe(true);
});

//getBuyedGoods的输出测试
it('should return String when invoke getBuyedGoods given a valid goods array', () => {
	//given
	const barcodes = ['0001', '0003', '0001'];
	//when
	const result = printReceipt.getBuyedGoods(barcodes);
	//then
	expect(result).toEqual([0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
});


//printTable输出测试
it('should return receipt when invoke printReceipt given a valid good array', () => {
	//given
	const barcodes = ['0006', '0010', '0006'];
	//when
	const result = printReceipt.printReceipt(barcodes);
	//then
	expect(result).toEqual('Receipts\n------------------------------------------------------------\nSprite\t\t8\t2\n'
		+ 'Fanta\t\t12\t1\n------------------------------------------------------------\nPrice: 28');
});

//printTable输出测试
it('should return erroe message when invoke printReceipt given a invalid good array', () => {
	//given
	const barcodes = ['00a1', '0003', '0001'];
	//when
	const result = printReceipt.printReceipt(barcodes);
	//then
	expect(result).toEqual('[ERROR]:Contains invalid goods!');
});