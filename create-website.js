/// Dependencies 
// Internal 
const fs = require("fs"); 

// External 

// External Custom 
const components = require("./components"); 
let construct = require("./construct"); 


fs.readFile("./website.json", "utf8", (err, website) => {
    if (err) {
        throw err; 
    } 

    /// Build/Edit stylesheet (styles.css) 
   let stylesFilePath = "./custom.css"; 
    let changeCSS = true; 
    if (changeCSS) { 
        let CSSasJSON = JSON.parse(website).sections.nav.styling; 
        let css = ` .nav `; // there may be a slight bug where "nav" is ignored because of ".nav" 
        CSSasJSON.forEach(s => {
            css += `${s.selector} {\n\t${s.styles.join(",").replace(",", "\n\t")} \n}\n`;  
        }); 
        fs.appendFile(stylesFilePath, css, err => {
            if (err) throw err;
            console.log(`added \n ${css} \n to ${stylesFilePath}`);
        });    
    } 

    /// Builds scripts.js / fsjson.html (which will soon be renamed to index.html) 
    let domScripts = { // may move to own file 
        projects: `
        document.querySelectorAll('.grid-item').forEach(gridItem => gridItem.addEventListener('click', e => {
            let items = itemsArray
            let index = 0; 
            items.forEach((slide, i) => {
                if (slide.src == e.target.src) {
                    index = i; 
                } 
            }); 
            var options = {
                index: index
            }
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init(); 
        })); 
        `
    }    
    let changeTemplate = true; // this might need to be change-able via CLI or JSON file  
    const templateFilePath = "./template.pre.html"; 
    let templateChange = ""; 
    if (changeTemplate) { 
            // construct nav [sync] 
            construct.constructNav(templateFilePath, templateChange, components, website); 
         } 

    // Update index.html [async]
    let changeIndexFile = true; 
    if (changeIndexFile) { 
        fs.readFile(templateFilePath, "utf8", (err, template) => {
            fs.readFile("index.html", "utf8", (err, body) => {
                fs.writeFile("index.html", body.replace("#bodywillbechangedbeforeruntime", template), err => console.log("Error/s when writing to file: ", err));  // may run a prettify function here 
                console.log("Updating index.html: ", body); 
            }); 
        }); 
    } 

    // https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node [async]
    let changeScripts = true; 
    if (changeScripts) {
        let content = []; 
        JSON.parse(website).sections.projects.content.forEach(proj => content.push({src: proj.display, info: proj.info})) ; 
        let scriptChange = domScripts.projects.replace("itemsArray", JSON.stringify(content)); 
        fs.appendFile('./assets/scripts.js', scriptChange, err => {
            if (err) throw err;
            console.log(`added ${scriptChange} to scripts.js`);
        });
    } 
}); 

