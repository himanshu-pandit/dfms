import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  company =[
    { CompanyId: 1, companyName: 'Amul', CompanyCode:'AML56212', isDeleted:false, DeletedDate:'', DeletedByUserID:'', CreatedDate: '2021-01-01 10:23:12' ,CreatedByUserID:'50d27e8300004edf234d4edf',ModifiedDate:'2021-07-01 10:23:12', ModifiedByUserID:'50d27e8300004edf234d4edf'},
  ];

  category =[
    { CategoryId: 1, CategoryName: 'Milk', CategoryCode:'MLK25621', isDeleted:false, DeletedDate:'', DeletedByUserID:'', CreatedDate: '2021-01-01 10:23:12' ,CreatedByUserID:'50d27e8300004edf234d4edf',ModifiedDate:'2021-07-01 10:23:12', ModifiedByUserID:'50d27e8300004edf234d4edf'},
    { CategoryId: 2, CategoryName: 'Butter', CategoryCode:'BTR25621', isDeleted:true, DeletedDate:'2021-05-02 10:23:12', DeletedByUserID:'50d27e8300004edf234d4edf', CreatedDate: '2021-01-01 10:23:12' ,CreatedByUserID:'50d27e8300004edf234d4edf',ModifiedDate:'2021-07-01 10:23:12', ModifiedByUserID:'50d27e8300004edf234d4edf'},
  ];

  product =[
    { ProductId: 1, ProductName: 'Cheese 500 Kg', CategoryName:'Milk', CategoryCode:'MLK25621', CompanyName:'Amul', CompanyCode:'AML56212', ProductPrice:'400.00', SGST:'4%',IGST:'4%',CGST:'4%', isDeleted:false, DeletedDate:'', DeletedByUserID:'', CreatedDate: '2021-01-01 10:23:12' ,CreatedByUserID:'50d27e8300004edf234d4edf',ModifiedDate:'2021-07-01 10:23:12', ModifiedByUserID:'50d27e8300004edf234d4edf'},
  ];


  constructor() { }

  public getCompany(){
    return this.company.filter((obj) =>{
      debugger;
      return obj.isDeleted === false;
  });
  }

  public setCompany(company: {CompanyId:number, companyName:string, CompanyCode:string, isDeleted:boolean, DeletedDate:string, DeletedByUserID:string, CreatedDate:string,  CreatedByUserID:string, ModifiedDate:string, ModifiedByUserID:string}){
    this.company.push(company);
  }

  public getCategory(){
    debugger;
    return this.category.filter((obj) =>{
        debugger;
        console.log(obj);
        return obj.isDeleted === false;
    });
  }

  public setCategory(category: {CategoryId:number, CategoryName:string, CategoryCode:string, isDeleted:boolean, DeletedDate:string, DeletedByUserID:string, CreatedDate:string,  CreatedByUserID:string, ModifiedDate:string, ModifiedByUserID:string}){
    this.category.push(category);
  }

  public getProducts(){
    debugger;
    return this.product.filter((obj) =>{
        debugger;
        console.log(obj);
        return obj.isDeleted === false;
    });
  }

  public setProducts(product: {ProductId:number, ProductName:string, CategoryName:string, CategoryCode:string, CompanyName:string, CompanyCode:string, ProductPrice:string,SGST:string, IGST:string ,CGST:string, isDeleted:boolean, DeletedDate:string, DeletedByUserID:string, CreatedDate:string,  CreatedByUserID:string, ModifiedDate:string, ModifiedByUserID:string}){
    this.product.push(product);
  }
}
