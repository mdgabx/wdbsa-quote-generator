let initState = {
    quotes: {}
}

/* fetch the data from the quotes mock api */
const fetchQuotes = async () => {
    const response = await fetch('https://wdbsa-quotes-api.herokuapp.com/quotes');

    if(response.status !== 200) {
        throw new Error('cannot fetch data');
    }

    const data = await response.text();
    return data;
}

    fetchQuotes().then(d => {
           /* console.log('data', JSON.parse(d)); */
            initState["quotes"] = JSON.parse(d);

        }).catch(err => console.log(err));

const rootReducer = (state = initState, action) => {
    return state;
}

console.log('initState', initState);

export default rootReducer;