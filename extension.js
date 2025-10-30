const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Funny console pic is now active!');

	const output = vscode.window.createOutputChannel("Funny console pic");

	const disposable = vscode.commands.registerCommand('funny-console-pic.showpic', function () {
		const pics = [
			` Мяу! Я код-кот!
 /\\_/\\  
( o.o ) 
 > ^ < `,

`Кря-кря, делаем лабу дальше!
   __
__(o )>
\\_ )_`,

`Опять одни ошибки? Ну ничего не расстраивайся!

¯\\_(ツ)_/¯  `
		];

		const pic = pics[Math.floor(Math.random() * pics.length)];

		output.clear;
		output.appendLine('====== Your pic ^.^ ======');
        output.appendLine(pic);
        output.appendLine('======= Good luck! =======');

		output.show(true);

		vscode.window.showInformationMessage('Проверь консольку :)');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
