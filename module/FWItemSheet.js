export default class FWItemSheet extends ItemSheet{
	get template(){
		return `systems/forcewinds/templates/sheets/${this.item.data.type}-sheet.html`;
	}
}