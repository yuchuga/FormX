import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: 'ap-southeast-1_tZERygZzJ',
  ClientId: '23kv8v0g0g60cdj2bf3m3uofa2' 
};

const Pool = new CognitoUserPool(poolData)

export default Pool; 