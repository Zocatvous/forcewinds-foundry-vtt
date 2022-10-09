import {fw} from "./module/config.js"
import FWItemSheet from "./module/sheets/FWItemSheet.js"
Hooks.once("init",function() {
	console.log("FW | Intializing Forcewinds System..");
	CONFIG.fw = fw;
	Items.unregister("core", ItemSheet);
	Items.registerSheet("FW", FWItemSheet, {makeDefault: true});
});