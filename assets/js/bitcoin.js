

function getDifficulty() {
	return $.ajax({
		url: "api/bitcoin/difficulty",
    method: "GET"
	});
}
function getReward() {
	return $.ajax({
		url: "api/bitcoin/reward",
    method: "GET"
	});
}
function earnings(hashrate, difficulty, reward, days) {
	days = days || 30;
	return (hashrate * reward * days * 86400)/(difficulty * 4294967296);
}