// Copyright (c) 2023, jeff.sidik@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Catatan Laporan PLC', {
	// refresh: function(frm) {

	// }
});
frappe.ui.form.on("Catatan Laporan PLC Detail", "warehouse", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];

        //Query the database to calculate current stock
        frappe.call({
            //method: 'erpnext.stock.utils.get_stock_balance',
            method: 'plc.plc.api.current_stock',
            args: {
                item_code: d.item,
                warehouse: d.warehouse
            },
            callback: function(r) {
                if (r.message) {
                  	//d.set_value('current_stock','');
					
    				d.current_stock = r.message;
    				frm.refresh_field('catatan_laporan_plc_detail');
                }
            }
        });
});
