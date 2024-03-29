import states from "../states.js";
import {generateCommands} from "../commands.js";

export function askCommands() {
    let commands = generateCommands();
    let list = [];
    for (const command of commands) {
        list.push(`Init ${command.name}`);
    }
    return [
        {
            type: 'list',
            name: 'command',
            message: 'What do you want to do?',
            choices: list,
        }
    ];
}

export function askPath() {
    return [
        {
            type: 'input',
            name: 'command',
            message: 'Please provide path',
            default: process.cwd(),
        }
    ];
}

export function askCreateFailed(path, message) {
    return {
        state: states.STATE_INIT_CREATE_FAILED,
        prompt: [
            {
                type: 'input',
                name: 'command',
                message: `Failed to create ${path}.\nError: ${message}.\nPlease provide new path or fix issue`,
                default: path,
            }
        ]
    };
}

export function askConfigFillInput(name, configKey, defaultValue = '') {
    return {
        state: states.STATE_CONFIG_FILL_INPUT_RESPONSE,
        prompt: [
            {
                type: 'input',
                name: 'command',
                message: `${name} config ${configKey} value:`,
                default: defaultValue,
            }
        ]
    }
}

export function askConfigFillList(configName, defaultValue, key, list) {
    return {
        state: states.STATE_CONFIG_FILL_RESPONSE,
        prompt: [
            {
                type: 'list',
                name: 'command',
                message: `${configName} config choose ${key}`,
                editableList: true,
                choices: list,
                default: defaultValue,
            }
        ]
    }
}

export function askConfigFillChoicesList(configName, defaultValue, key, list) {
    return {
        state: states.STATE_CONFIG_FILL_CHOICES_RESPONSE,
        prompt: [
            {
                type: 'checkbox',
                name: 'command',
                message: `${configName} config choose ${key}`,
                editableList: true,
                choices: list,
                default: defaultValue,
            }
        ]
    }
}
