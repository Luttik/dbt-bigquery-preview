const util = require('util');
const exec = util.promisify(require('child_process').exec);

// function executeCommand(cmd) {

// 	new Promise((resolve, reject) => {
//         child_process.exec(cmd, (err, out) => {
// 			if (err) {
// 				return resolve(cmd+' error!');
// 				//or,  reject(err);
// 			}
// 			return resolve(out);
// 		});
// 	});
// }

//... show powershell output from 'pwd'...
// context.subscriptions.push(
// vscode.commands.registerCommand('test', async () => {
//     const output = await execShell('powershell pwd');
//     vscode.window.showInformationMessage(output);
// })
// );

const filePath = '/home/juan/coding/learn/dbt/dbt-northwind-analytics/models/staging/stg_customers.sql';
const filePathSplitted = filePath.split('/models/');
const x = filePathSplitted[filePathSplitted.length -1].replace('.sql', '');
