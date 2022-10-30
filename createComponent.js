const fs = require('fs');

const getExportLineTemplate = (name) =>  `export { default } from './${name}'`
const getComponentTemplate = (name, lowerName) => `import './${name}.css'

const ${name} = () => {
  return <div className='${lowerName}'></div>
}
export default ${name}`
const getStyleTemplate = (name) => `.${name} {
}`

const  createDir  = (name) => {
  const dirName =  `./${name}`
  fs.mkdirSync(dirName, { recursive: true }, err => {
    if (err) throw err;
  });

  process.chdir(name);
}

const createFile  = (name, content) => {
  fs.appendFileSync(`${name}`, content,   err => {
    if (err) throw err;
  });
}

const createComponent = () => {
  const args = process.argv.splice(2);
  const [name, folder = 'components'] = args;
  process.chdir(folder ? `./src/${folder}`: './src/');

  if(!args.length || args.length > 2){
    throw new Error('Enter component name argument');
  }

  const lowerName = `${name[0].toLowerCase()}${name.slice(1)}`;

  createDir(name);
  createFile(`${name}.tsx`, getComponentTemplate(name, lowerName));
  createFile(`${name}.css`, getStyleTemplate(lowerName));
  createFile('index.tsx',  getExportLineTemplate(name));
}

createComponent()