import axios from "axios";

// The get questions method retrieves questionss from the server
// It accepts a "query" or term to search the Trivia question api for
export default {
  getQuestions: function(query) {
    return axios.get("/api/questions", { params: { q: query } });
  }
};
