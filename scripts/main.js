Events.on(ClientLoadEvent, () => {
	const uuidDialog = new BaseDialog("UUID Edit");
	uuidDialog.addCloseButton();
	uuidDialog.cont.defaults().size(240, 60);
	uuidDialog.cont.button("Get UUID", Styles.defaultt, () => {
		Vars.ui.showConfirm("Your UUID: "+Vars.platform.getUUID()+"\nClick \"OK\" to copy to clipboard", () => {
			Core.app.setClipboardText(Vars.platform.getUUID());
		});
	});
	uuidDialog.cont.row()
	uuidDialog.cont.button("Reset UUID", Styles.defaultt, () => {
		Vars.ui.showConfirm("Are you sure you want to reset your UUID?\nThis action CANNOT be undone.", () => {
			Core.settings.put("uuid","");
		});
	});
	uuidDialog.cont.row()
	uuidDialog.cont.button("Set UUID", Styles.defaultt, () => {
		Vars.ui.showTextInput("[white]UUID Must be a base64 string 8 bytes in length.\nIf it is invalid, you will not be able to join servers.", "UUID:", Vars.platform.getUUID(), uuid => {
			Core.settings.put("uuid", uuid);
		});
	});
	
	Vars.ui.menufrag.addButton("[orange]UUID", Icon.admin, () => uuidDialog.show());
});