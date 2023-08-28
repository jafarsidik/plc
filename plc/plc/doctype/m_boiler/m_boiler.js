// Copyright (c) 2023, jeff.sidik@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('M Boiler', {
	// refresh: function(frm) {

	// }
	bucket:function(frm){
		let bucket = frm.doc.bucket 
		let kg = frm.doc.kg
		let total = (bucket * kg)
		frm.set_value('total_kg',total)
	},
	kg:function(frm){
		let bucket = frm.doc.bucket 
		let kg = frm.doc.kg
		let total = (bucket * kg)
		frm.set_value('total_kg',total)
	}

});
