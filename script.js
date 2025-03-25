// Função que alterna entre o modo claro e o modo escuro
function toggleMode() {
    
    // Seleciona o elemento `<html>` do documento
    const html = document.documentElement
    
    // Alterna a classe "light" no elemento `<html>`
    // Se a classe "light" já estiver presente, ela será removida; 
    // se não estiver presente, ela será adicionada.
    html.classList.toggle("light")
  
    // Seleciona a tag `<img>` que está dentro do elemento com id "profile"
    const img = document.querySelector("#profile img")
  
    // Verifica se o elemento `<html>` contém a classe "light"
    if (html.classList.contains("light")) {
        // Se o modo claro estiver ativo, altera a imagem para a versão "light"
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // Se o modo escuro estiver ativo, altera a imagem para a versão padrão
        img.setAttribute("src", "./assets/avatar.png")
    }
}
