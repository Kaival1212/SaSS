export interface Customer {
    id: string;
    email: string;
    contactnumber: string;
}

export interface DraftOrder {
    id: string;
    customerid: string;
    notes: string;
    createddate: Date;
    tobegiven: Date;
    deliverydate: Date;
    isconfirmed: boolean;
}

export interface Quotation {
    id: string;
    filepath: string;
    price: number;
    isfinal: boolean;
}

export interface OrderQuotation {
    id: string;
    draftorderid: string;
    quotationid: string;
    progress: string;
}

export interface Design {
    id: string;
    duedate: Date;
    filepath: string;
    isfinal: boolean;
}

export interface OrderDesign {
    id: string;
    draftorderid: string;
    designid: string;
    progress: string;
    notes: string;
}

export interface Order {
    id: string;
    draftorderid: string;
    finalprice: number;
    progress: string;
    quotationsid: string;
    designsid: string;
}

export interface Employee {
    id: string;
    name: string;
    skill: string;
    position: string;
}

export interface Project {
    id: string;
    orderid: string;
    name: string;
    managerid: string;
    completeby: Date;
    deliverydate: Date;
    status: string;
}

export interface ProjectWorkers {
    projectid: string;
    employeeid: string;
}

export interface Inventory {
    id: string;
    name: string;
    type: string;
    quantity: number;
    unitprice: number;
}

export interface ProductInventory {
    orderid: string;
    inventoryid: string;
    quantityused: number;
}
