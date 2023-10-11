import frappe
import erpnext 

@frappe.whitelist(allow_guest=True)
def current_stock(item_code, warehouse):
	#current_stock = 11 #get_stock_balance(item_code, warehouse)
	current_stock = erpnext.stock.utils.get_stock_balance(item_code, warehouse)
	frappe.response['message'] = current_stock
	#return current_stock