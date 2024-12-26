
const nav = () =>{
    let card =  ` <div id="Nav">
        <h1>Mini Quiz App</h1>
        <div id="Nav-Anchor">
            <a href="index.html">Home</a>
            <a href="Quiz.html">Quiz</a>
            <a href="Question.html">Question</a>
        </div>
    </div>`
    let div = document.getElementById("Nav")
    div.innerHTML = card 
}

nav();

