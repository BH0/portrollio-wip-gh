module.exports.project = (project) =>
`<div class="grid-item">
    <img src="${project.display}" />
    <div class="info">
        <span>${project.info}</span>
        <a href="#buy" class="button">Buy</a>
    </div>
</div>`; 

module.exports.nav = {
    anchor: (href, text) => `<a href="#${href}">${text}</a>`, 

    nav: (anchors, anchorFunc) => {
        let nav = `<nav>`; 
        ["about", "projects"].forEach(anchorString => {
            nav += anchorFunc(anchorString, anchors[anchorString]); 
        }); 
        nav += `</nav>`; 
        return nav; 
    }, 

    socials: socials => {
        let handles = []; 
        JSON.parse(socials).forEach(social => handles.push(social));  
         let span = `<span class="social">`; 
         handles.forEach(handle => span += `<a target="_blank" href="${handle.link}" class="fa fa-${handle.name}"></a>`); 
        return `${span}</span>`; 
    }
}