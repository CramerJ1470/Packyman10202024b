const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Buildinggame.find()
			.then((game) => res.send(game))
			.catch(next);
	},
	post: (req, res, next) => {
		const { description } = req.body;
		const { _id } = req.user;

		models.Buildinggame.create({ description, userId: _id })
			.then((createdGames) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { posts: createdGames } }
					),
					models.Buildinggame.findOne({ _id: createdGames._id }),
				]);
			})
			.then(([modifiedObj, gamesObj]) => {
				res.send(gamesObj);
			})
			.catch(next);
	},
	put: (req, res, next) => {
		const id = req.params.id;
		const { description } = req.body;
		models.Buildinggame.updateOne({ _id: id }, { description })
			.then((updatedGames) => res.send(updatedGames))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Buildinggame.deleteOne({ _id: id })
			.then((removedGames) => res.send(removedGames))
			.catch(next);
	},
};
