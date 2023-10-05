document.addEventListener("DOMContentLoaded", () =>{
    let form = document.getElementById("github-form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        let search = document.getElementById("search").value
        
        let orginalName = search.split(' ').join('')
        fetch("https://api.github.com/search/users?q="+orginalName)
        .then(res => res.json())
        .then(data => console.log (data))
        .catch(error => console.error('Fetch Error:', error));

        document.getElementById("github-container").innerHTML = `
        <a target="_blank" href="https://www.github.com/${orginalName}"> <img src="${'https://avatars.githubusercontent.com'}"/>`


    })

    



});

    





