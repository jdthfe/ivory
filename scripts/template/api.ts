import componentIndex from '../../site/_util/componentIndex';
import fs from 'fs';
import inquirer from 'inquirer';

import { getProjectUrl, EOL } from '../helpers';
interface Cpt {
    name: string;
    confirm: boolean;
}
const cpt: Pick<Cpt, 'name'> = { name: '' };
interface CptDir {
    'index.tsx': string;
    'PropsType.tsx': string;
}
const cptDir: CptDir = {
    'index.tsx': '',
    'PropsType.tsx': '',
};

async function userInput() {
    const cpList: string[] = [];
    componentIndex.map(item => cpList.push(item.name));

    return new Promise((res, rej) => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'name',
                    choices: cpList,
                    message: "Please selecte Component's name:",
                },
                {
                    type: 'confirm',
                    name: 'confirm',
                    message: 'Are you sure you want to get API?',
                    default: false,
                },
            ])
            .then(obj => {
                const { name, confirm } = obj as Cpt;
                if (confirm) {
                    console.log(`...${name}'s Api Generating`);
                } else {
                    throw '> Loading';
                }
                cpt.name = name;
                res();
            })
            .catch(() => {
                rej();
            });
    });
}

function readCptFile() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpt;
            const cpUrl = ['src', name];
            cptDir['index.tsx'] = fs.readFileSync(getProjectUrl(...cpUrl, 'index.tsx'), 'utf8');
            cptDir['PropsType.tsx'] = fs
                .readFileSync(getProjectUrl(...cpUrl, 'PropsType.tsx'), 'utf8')
                .replace(/NAME/g, name);
            res();
        } catch (err) {
            rej(err);
        }
    });
}

interface PorpItem {
    key: string;
    exp: string;
    type: string;
    default: string;
    needed: boolean;
}

function getDefaultVal(str: string): string {
    if (str === void 0) {
        return '-';
    }
    if (str === '') {
        str = "''";
    }
    return '`' + str + '`';
}

function mapPropsToTable(propStr: string, indexStr: string) {
    const Propsreg = new RegExp(/(\w+)(\?)*:(\s)*(.*)(?=;)/g),
        expReg = new RegExp(/(?<=\/\*\*)(\s|.)*?(?=\*\/)/g),
        valReg = new RegExp(/(^\w+)(\?)*(:|\s)*(.*$)/),
        defaultSecReg = new RegExp(/(?<=const {)(.|\s)*?(?=} = props)/);
    const table: PorpItem[] = [];
    const exp = propStr.match(expReg) || [];
    const defaultSec = (indexStr.match(defaultSecReg) || [])[0];
    const tableMd = [`|Properties|Descrition|Type|Default|Required|`, `| - | - | - | - | - |`];
    (propStr.match(Propsreg) || []).map((item, index) => {
        const [, r1 = 'find key fail', r2 = false, , r4 = 'find type fail'] = item.match(valReg) || [];
        const defaultReg = new RegExp(`(${r1}) = (.+?)(,| })`);
        const tableItem: PorpItem = {
            key: r1,
            exp: (exp[index] || '').replace(/(^\s|\s$)*/g, ''),
            type: r4,
            needed: !r2,
            default: ((defaultSec || '').match(defaultReg) || [])[2],
        };
        table.push(tableItem);
        tableMd.push(
            `|${tableItem.key}|${tableItem.exp}|\`${tableItem.type}\`|${getDefaultVal(tableItem.default)}|\`${
                tableItem.needed
            }\`|`,
        );
    });
    const readmeUrl = getProjectUrl('src', cpt.name, 'demo', 'readme.md');
    const readme = fs.readFileSync(readmeUrl, 'utf8');
    fs.writeFileSync(readmeUrl, readme + EOL + tableMd.join(EOL), 'utf8');
}

/**
 * Main
 */
(async () => {
    try {
        await userInput();
        await readCptFile();
        mapPropsToTable(cptDir['PropsType.tsx'], cptDir['index.tsx']);
        console.log(
            `> Congratulations, generator API success !!!\n> You can find it in 'src/${cpt.name}/demo/readme.md'`,
        );
    } catch (err) {
        console.log(err);
    }
})();
