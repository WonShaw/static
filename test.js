let obj = JSON.parse($response.body);

obj.vip.status = true
obj.vip.permissions = ["ONE_MONTH", "AUTO_SUBSCRIPTION"]

$done({body: JSON.stringify(obj)});
