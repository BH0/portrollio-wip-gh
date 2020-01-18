// class ConstructPage // this code will construct template.pre.html 
module.exports.constructNav = (templateFilePath, templateChange, components, website) => { 
    const fs = require("fs"); 
    // https://stackoverflow.com/a/2497040 | https://stackoverflow.com/a/50384209 - write to file 
    // https://stackoverflow.com/a/29873614 - read file 
    let nav = `
        <div class="nav center-text fixed" id="nav">
            <nav>
                ${components.nav.anchor("about", "About me")}
                ${components.nav.anchor("projects", "My work")}
            </nav>
            <span class="social"></span>
        </div> 
    `; 
    let template = fs.readFileSync(templateFilePath, "utf8"); 
    let navTemplate = template.replace(`<div class="nav center-text fixed" id="nav"></div>`, nav); 
    let socials = []; 
    JSON.parse(website).sections.nav.social.forEach(handle => socials.push({link: handle.link, name: handle.name})); 
    templateChange = navTemplate.replace(`<span class="social"></span>`, components.nav.socials(JSON.stringify(socials))); 
    fs.writeFileSync(templateFilePath, templateChange); 
} 

