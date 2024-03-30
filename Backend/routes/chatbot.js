const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://chatgpt-42.p.rapidapi.com/matag2',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '05f897e4b3msh1c5c9da3915f8b7p175518jsn1a1ecd6b1e03',
    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: 'hello'
      }
    ],
    system_prompt: '',
    temperature: 0.9,
    top_k: 5,
    top_p: 0.9,
    image: '',
    max_tokens: 256
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}