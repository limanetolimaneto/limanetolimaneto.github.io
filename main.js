// ===== LINK PARA HOME - Nas divs hero e footer =================================
const hero = document.getElementById("hero");
const footer = document.getElementById("footer");
const recarregarPagina = () => location.reload();
hero.addEventListener("click", recarregarPagina);
footer.addEventListener("click", recarregarPagina);


// ===== FUNCOES PARA EXIBIR O CONTEUDO DE SECTION ================================
const section = document.getElementById("content");
section.innerHTML = `
    <h3>💬 About me</h3>
    <div class="home">
        <p> I design scalable, maintainable architectures using clean code, decoupled systems, queue processing, and database optimization with MySQL, Redis, and Docker.
            Recently, I have built AI-integrated backends and retrieval-based architectures. 
            I use embeddings and semantic search to create context-aware applications.
            Currently, I focus on delivering production-grade systems. 
            My work emphasizes performance, scalability, and intelligent data processing pipelines.
        </p>
    </div>

    <h3>🛠️ Core Tech Stack</h3>
    <div class="home">
        <p>Laravel - PHP - MySQL - Redis - Docker - REST APIs - Queue-based Systems - Vector Search (Cosine Similarity - AI Integration (LLMs & Embeddings).</p>
    </div>  

    <h3>📚 Education</h3>
    <div class="home">
        <p>B.S. in Systems Analysis and Development at FATENE | 2008 - 2011. Fortaleza - Ceara. Brazil</p>
    </div>
`;

const groups = document.querySelectorAll('.group');

const projects = {
    "array": null,
    "name": null,
    "item":null
};

const mainScreen = document.createElement("div");
mainScreen.className = "mainScreen";  
const leftScreen = document.createElement("div");
leftScreen.className = "leftScreen";  
const leftArrow = document.createElement("p")
leftArrow.innerText = "⬅️"
leftScreen.appendChild(leftArrow);
mainScreen.appendChild(leftScreen);
const middleScreen = document.createElement("div");
middleScreen.className = "middleScreen"; 
mainScreen.appendChild(middleScreen);
const rightScreen = document.createElement("div");
rightScreen.className = "rightScreen";
const rightArrow = document.createElement("p");
rightArrow.innerText = "➡️";  
rightScreen.appendChild(rightArrow);
mainScreen.appendChild(rightScreen);

function upProject(){
    if(projects.item < projects.array.length){
        projects.item += 1;
        const middleScreen = document.querySelector(".middleScreen");
        middleScreen.innerHTML = `<div><img class="middleImg"  src="img/${projects.name}_${projects.item}.png"></div>
        <div><p class="${projects.name=='analized'?'title_g1':'title_g2'}">${projects.array[(projects.item-1)].title}</p><p class="${projects.name=='analized'?'summary_g1':'summary_g2'}">${projects.array[projects.item-1].summary}</p>
        <a href="${projects.array[projects.item-1].link}"><img class="middleGit" src="img/github-icon.svg"> Github repository</a></div>`
        leftScreen.appendChild(leftArrow)
        if(projects.item == projects.array.length){rightScreen.replaceChildren()}
    }
}

function downProject() {
    if(projects.item > 1){
        projects.item -= 1;
        const middleScreen = document.querySelector(".middleScreen");
        middleScreen.innerHTML = `<div><img class="middleImg"  src="img/${projects.name}_${projects.item}.png"></div>
        <div><p class="${projects.name=='analized'?'title_g1':'title_g2'}">${projects.array[(projects.item-1)].title}</p><p class="${projects.name=='analized'?'summary_g1':'summary_g2'}">${projects.array[projects.item-1].summary}</p>
        <a href="${projects.array[projects.item-1].link}"><img class="middleGit" src="img/github-icon.svg"> Github repository</a></div>`
        rightScreen.appendChild(rightArrow)
        if(projects.item == 1){leftScreen.replaceChildren()}
    }
}

groups.forEach(group => {
  group.addEventListener('click', async function(event) {
    section.replaceChildren();
    leftScreen.replaceChildren();
    // Checa qual o grupo de projetos pelo id | g1 = analized / g2 = delivered
    const rawData = await fetch("data/data.json");
    const jsonData = await rawData.json();

    projects.name = this.id == "g1" ? "analized" : "delivered";
    projects.array = jsonData.groups[projects.name];
    projects.item = 1;

    // Verifica se o array de projetos esta vazio
    if(projects.array.length === 0 ){
        section.innerHTML = `<div class="warning"><p>⚠️</p><p>No projects attached to this group</p></div>`
    }else{
        middleScreen.innerHTML = `<div><img class="middleImg" src="img/${projects.name}_1.png"></div>
        <div><p class="${this.id=='g1'?'title_g1':'title_g2'}">${projects.array[0].title}</p><p class="${this.id=='g1'?'summary_g1':'summary_g2'}">${projects.array[0].summary}</p>
        <a href="${projects.array[projects.item-1].link}"><img class="middleGit" src="img/github-icon.svg">Github repository</a></div>`      
        leftArrow.addEventListener("click", downProject);
        rightArrow.addEventListener("click", upProject);
        rightScreen.appendChild(rightArrow);
        section.appendChild(mainScreen);
    }
  });
});


























// == PROJECT 1 SECTION CONTENT

// grupo1.addEventListener("click", async function () {
//     const rawData = await fetch("data/data.json")
//     const data = await rawData.json()
//     const analizedProjects = data.groups.analized 
    
//     section.replaceChildren()

//     const groupScreen = document.createElement("div")
//     // groupScreen.innerText = "aaaa" 
//     groupScreen.className = "screen"
//     section.appendChild(groupScreen)


//     // groupScreen.style.display = "flex";
//     // groupScreen.style.padding = "0 40px"
//     // analizedProjects.forEach(item => {
//     //     const itemScreen = document.createElement("div")
//     //     const itemImg = document.createElement("img")
//     //     itemImg.src = "storage/images/analized_1.png" 
//     //     itemImg.style.width = "300px"
//     //     itemScreen.appendChild(itemImg)
//     //     groupScreen.appendChild(itemScreen)
//     // });

//     // section.appendChild(groupScreen)

//     // console.log(analizedProjects)
// })

// // == PROJECT 2 SECTION CONTENT

// grupo2.addEventListener("click", function () {
//     section.style.backgroundColor = "red";
// })







// // Dados centralizados de todos os projetos
// const projetosData = {
//     "projeto_abc": {
//         tit: "Projeto ABC",
//         tipo: "analisados",
//         img: "caminho/para/imagem.jpg",
//         desc: "Descrição detalhada sobre este projeto analisado.",
//         link: "https://github.com"
//     },
//     "projeto_def": {
//         tit: "Projeto DEF",
//         tipo: "entregues",
//         img: "caminho/para/outra-imagem.jpg",
//         desc: "Descrição detalhada sobre este projeto entregue.",
//         link: "https://github.com"
//     }
// };

// function exibirProjeto(idProjeto) {
//     const projeto = projetosData[idProjeto];
//     const contentSection = document.querySelector(".content");

//     // Se o projeto não existir, volta para a home ou exibe mensagem padrão
//     if (!projeto) {
//         contentSection.innerHTML = "<h2>Selecione um projeto para ver os detalhes</h2>";
//         return;
//     }

//     // Atualiza a section dinamicamente
//     contentSection.innerHTML = `
//         <h2>${projeto.tit}</h2>
//         <img src="${projeto.img}" alt="${projeto.tit}">
//         <p>${projeto.desc}</p>
//         <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
//     `;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // Exemplo: ao passar o mouse na div "Analisados"
//     const divAnalisados = document.getElementById("div1");
//     divAnalisados.addEventListener("mouseenter", function() {
//         // Lógica para mostrar a lista de projetos analisados
//     });

//     // Ao clicar em qualquer link de projeto na sua lista
//     // Assumindo que seus itens tenham uma classe .projeto-link
//     const itensProjeto = document.querySelectorAll(".projeto-link");
//     itensProjeto.forEach(item => {
//         item.addEventListener("click", function(event) {
//             event.preventDefault(); // Evita recarregar a página
            
//             // Pega o ID do projeto configurado no HTML (ex: data-id="projeto_abc")
//             const idDoProjeto = this.getAttribute("data-id"); 
//             exibirProjeto(idDoProjeto);
//         });
//     });
// });



// ===================== ////////////////////////////////////////////
// ===================== ////////////////////////////////////////////



// function getUrl() {
//     const currentUrl = window.location.href;
//     return currentUrl;
// }

// function homeSection(){
//     const section = document.getElementById("content")
//     const firstH3 = document.createElement("h3");
//     firstH3.innerText = "💬 About me";
//     section.appendChild(firstH3);
//     const firstDiv = document.createElement("div")
//     const p1 = document.createElement("p")
//     p1.innerText = "I design scalable, maintainable architectures using clean code, decoupled systems, queue processing, and database optimization with MySQL, Redis, and Docker." 
//     firstDiv.appendChild(p1);
//     const p2 = document.createElement("p")
//     p2.innerText = "Recently, I have built AI-integrated backends and retrieval-based architectures. I use embeddings and semantic search to create context-aware applications." 
//     firstDiv.appendChild(p2);
//     const p3 = document.createElement("p")
//     p3.innerText = "Currently, I focus on delivering production-grade systems. My work emphasizes performance, scalability, and intelligent data processing pipelines." 
//     firstDiv.appendChild(p3);
//     section.appendChild(firstDiv);
//     const secondH3 = document.createElement("h3");
//     secondH3.innerText = "🛠️ Core Tech Stack";
//     section.appendChild(secondH3);
//     const secondDiv = document.createElement("div");
//     secondDiv.innerText = "Laravel - PHP - MySQL - Redis - Docker - REST APIs - Queue-based Systems - Vector Search (Cosine Similarity) - AI Integration (LLMs & Embeddings)";
//     section.appendChild(secondDiv);
//     const thirdH3 = document.createElement("h3");
//     thirdH3.innerText = "📚 Education";
//     section.appendChild(thirdH3);
//     const thirdDiv = document.createElement("div");
//     const strong = document.createElement("strong");
//     strong.innerText = "B.S. in Systems Analysis and Development / Tecnólogo em Análise e Desenvolvimento de Sistemas";
//     const lastP = document.createElement("p");
//     lastP.innerText = "FATENE - Faculdade de Tecnologia do Nordeste | 2008 - 2011."; 
//     thirdDiv.appendChild(strong);
//     thirdDiv.appendChild(lastP);
//     section.appendChild(thirdDiv)
// }

// function group1Projects() {
//     "projets do grupo 1"
// }

// function group2Projects() {
//     "projets do grupo 2"
// }


// document.addEventListener("DOMContentLoaded", function() {

//     const currentUrl = getUrl();
//     switch (currentUrl) {
//         case "http://localhost:8000/":
//             homeSection()
//             break;
//         case "http://localhost:8000/group1-projects":
//             group1Projects();
//             break;
//         case "http://localhost:8000/group2-projects":
//             group2Projects();
//             break;    
//         default:
//             break;
//     }
   
// });



