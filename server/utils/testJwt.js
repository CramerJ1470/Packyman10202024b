const jwt = require("jsonwebtoken");
const secret = "modnarterces";
const models = require("../models");
let token = 
	"wdqetq34yt45yndfgbsghbXVCJ9.eyJpZCI6IjYyMWJlMGZhN2IzNDFhNTY1MGViMDVkYSIsImlhdCI6MTY0Njc5NzI4MywiZXhwIjoxNjQ3MTU3MjgzfQ.UgbCSwUGmtV8EOcmGaw7ClUg4BetJ7ZcN72-YvmX7JU";

function verifyToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}
console.log(verifyToken(token));
console.log(`hey now: `, models.TokenBlacklist.findOne({ token }));
