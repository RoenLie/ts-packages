import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';


@customElement('test-element')
export class TestCmp extends LitElement {

	@state() protected count = 0;
	protected interval?: number;

	public override connectedCallback(): void {
		super.connectedCallback();

		this.interval = setInterval(() => {
			this.count ++;
		}, 1000);
	}

	public override disconnectedCallback(): void {
		super.disconnectedCallback();

		clearInterval(this.interval);
	}

	protected override render(): unknown {
		return html`
		count: ${ this.count }
		`;
	}

}
