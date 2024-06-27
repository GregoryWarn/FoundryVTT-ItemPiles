import UserSelectDialogShell from "./user-select-dialog-shell.svelte";
import { SvelteApplication } from '#runtime/svelte/application';

export default class UserSelectDialog extends SvelteApplication {

	/**
	 * @param options
	 */
	constructor(options = {}) {
		super({
			title: game.i18n.localize("ITEM-PILES.Dialogs.UserSelect.Title"),
			svelte: {
				class: UserSelectDialogShell,
				target: document.body,
			},
			close: () => this.options.resolve?.(null),
			...options
		})
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			width: 200,
			height: "auto",
			classes: ["item-piles-app"]
		})
	}

	static async show(options = {}) {
		return new Promise((resolve) => {
			options.resolve = resolve;
			new this(options).render(true, { focus: true });
		})
	}

}
