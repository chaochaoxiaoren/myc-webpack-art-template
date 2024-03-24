import bg from './assets/bg.png'
import json from './assets/data.json'
import csv from './assets/data.csv'
import xml from './assets/data.xml'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'

const img = new Image();
img.src = bg;
document.body.appendChild(img)

console.log('json数据', json)
console.log('csv数据', csv)
console.log('xml数据', xml)
console.log('toml数据', toml)
console.log('yaml数据', yaml)
console.log('json5数据', json5)