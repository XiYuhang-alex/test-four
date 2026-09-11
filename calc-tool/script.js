const records = [
	{ name: '早餐', amount: 3 },
	{ name: '坐公交车', amount: 1},
	{ name: '午餐', amount: 15},
	{ name: '晚餐', amount: 12},
	{ name: '小零食', amount: 5},
	{ name: '奶茶', amount: -20}
];
const cleanRecords = (list) =>list.filter(r =>r.amount> 0);
const totalAmount = (list) =>list.reduce((sum, r)=>sum+r.amount, 0);
const averageAmount = (list)=>{
	if (list.length=== 0) return 0;
	const amounts = list.map(r=>r.amount);
	const total=amounts.reduce((sum, amt) =>sum + amt, 0)
	return (total / amounts.length).toFixed(2);
};
console.log('清洗后的数据：', cleanRecords(records));
console.log('总消费金额：', totalAmount(cleanRecords(records)));
console.log('平均单笔消费：', averageAmount(cleanRecords(records)));