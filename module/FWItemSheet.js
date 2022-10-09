export default class FWItemSheet extends ItemSheet{
	get template(){
		return `systems/forcewinds/templates/sheets/fw-weapon-sheet.html`;
	}
	getData() {
		const data = super.getData();
		data.config = CONFIG.fw;
		return data;
	}
}