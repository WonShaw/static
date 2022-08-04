let obj = JSON.parse($response.body);

obj.data.endTime = 1980950400000
obj.data.purchase = true

$done({body: JSON.stringify(obj)});
