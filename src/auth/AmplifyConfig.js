import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: 'ap-southeast-1', 
    userPoolId: 'ap-southeast-1_tZERygZzJ',
    userPoolWebClientId: '23kv8v0g0g60cdj2bf3m3uofa2',
  }
});