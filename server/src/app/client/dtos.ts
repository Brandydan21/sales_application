// Update Client 
export interface UpdateClientData{
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}

export interface UpdateClientRequest{
    id: number,
    update_data:UpdateClientData
}

// Create Client
export interface CreateClientRequest{
    firstName:string, 
    lastName:string, 
    email:string, 
    phoneNumber:string
}

// Get Specific Client
export interface GetSpecificClientRequest{
    id:string
}

// Remove Client
export interface RemoveClientRequest{
    id:number
}