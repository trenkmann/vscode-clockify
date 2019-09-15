import * as vscode from 'vscode';
import { isNumber } from 'util';

export async function getEstimatedDuration(): Promise<number> {
	const estimatedDuration = await vscode.window
		.showInputBox({
			ignoreFocusOut: true,
			placeHolder: 'Enter the estimated duration (hours) for your task',
			prompt: 'Estimated duration (hours)'
		})
		.then((estimatedDuration) => {
			if (estimatedDuration === undefined) {
				return -1;
			}
			if (typeof estimatedDuration !== 'number') {
				return -1;
			}
			return estimatedDuration;
		});

	return estimatedDuration;
}
