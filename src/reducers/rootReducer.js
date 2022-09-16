let initState = {
    quotes: [
        {
          "id": 0,
          "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
          "author": "Martin Fowler"
        },
        {
          "id": 1,
          "quote": "First, solve the problem. Then, write the code.",
          "author": "John Johnson"
        },
        {
          "id": 2,
          "quote": "Experience is the name everyone gives to their mistakes.",
          "author": "Oscar Wilde"
        },
        {
          "id": 3,
          "quote": "In order to be irreplaceable, one must always be different",
          "author": "Coco Chanel"
        },
        {
          "id": 4,
          "quote": "Java is to JavaScript what car is to Carpet.",
          "author": "Chris Heilmann"
        },
        {
          "id": 5,
          "quote": "Knowledge is power.",
          "author": "Francis Bacon"
        },
        {
          "id": 6,
          "quote": "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
          "author": "Dan Salomon"
        },
        {
          "id": 7,
          "quote": "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
          "author": "Antoine de Saint-Exupery"
        },
        {
          "id": 8,
          "quote": "Code is like humor. When you have to explain it, it’s bad.",
          "author": "Cory House"
        },
        {
          "id": 9,
          "quote": "Fix the cause, not the symptom.",
          "author": "Steve Maguire"
        },
        {
          "id": 10,
          "quote": "Optimism is an occupational hazard of programming: feedback is the treatment.",
          "author": "Kent Beck"
        },
        {
          "id": 11,
          "quote": "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
          "author": "Martin Fowler"
        },
        {
          "id": 12,
          "quote": "Simplicity is the soul of efficiency.",
          "author": "Austin Freeman"
        },
        {
          "id": 13,
          "quote": "Before software can be reusable it first has to be usable.",
          "author": "Ralph Johnson"
        },
        {
          "id": 14,
          "quote": "Make it work, make it right, make it fast",
          "author": "Kent Beck"
        }
      ]
}

/* fetch the data from the quotes mock api */
/*const fetchQuotes = async () => {
    const response = await fetch('https://wdbsa-quotes-api.herokuapp.com/quotes');

    if(response.status !== 200) {
        throw new Error('cannot fetch data');
    }

    const data = await response.json();
    return data;
}

    fetchQuotes().then(response => {
         console.log('response', response);
         newArr = response;
        return newArr;
    }).catch(err => console.log(err));

    console.log('newArr', newArr); */    

const rootReducer = (state = initState, action) => {
    return state;
}

console.log('initState', initState);

export default rootReducer;