// Update SalesPerson 
export interface UpdateData{
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}

export interface UpdateSalesPersonRequest{
    id: number,
    update_data:UpdateData
}

// Create SalesPerson
export interface CreateSalesPersonRequest{
    firstName:string, 
    lastName:string, 
    email:string, 
    phoneNumber:string
}

// Get Specific SalesPerson
export interface GetSpecificSalespersonRequest{
    id:string
}

// Remove SalesPerson

export interface RemoveSalespersonRequest{
    id:number
}