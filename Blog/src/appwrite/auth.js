import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    //not setting the endpoint and project directly because it will be westage of resources since it will be created by default inside of the class and
    //  we only create them when we create a new oject of this class so use constrructor
    account;
    //creating constructor since it will be invoked when we create a new object of this class
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    //creating a new function to create a new account
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another function to login
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            //return the current user if logged in else return null
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error); 
        }
    }
}

//creating a new object of this class
//only when object is created then the constructor will be invoked and client will be created and 
// set the endpoint and project will be created and then account will be created
const authService = new AuthService();

export default authService;