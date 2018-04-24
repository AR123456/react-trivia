const url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=url3986"

const makeQuizObjs = (json) => {
		return json.results.map(question => {
			const q = {
				question: decodeURIComponent(question.question),
				choices: question.incorrect_answers.map(c => decodeURIComponent(c)),
			}
			const correct_answer_index = Math.floor(Math.random() * (q.choices.length - 1) + 1);
			q.choices.splice(correct_answer_index, 0, decodeURIComponent(question.correct_answer))
			q.correctChoice = correct_answer_index
			return q
		})
	}

export default {
	getQuizes: () => {
		return fetch(url).then(res => res.json()).then(json => makeQuizObjs(json))
	},
}