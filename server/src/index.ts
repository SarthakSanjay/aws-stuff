import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { ACCESS_KEY, SECRET_KEY } from './secret';

const s3client = new S3Client({
    region: "ap-south-1",
    credentials:{
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY
    }
})

async function getObjectUrl(key:any){
    const command = new GetObjectCommand({
        Bucket: 'sharko-bucket',
        Key: key
    })
    const url = await getSignedUrl(s3client ,command)
    return url
}

async function putObject(filename:string , contentType: string) {
    const command = new PutObjectCommand({
        Bucket: '',
        Key: '/uploads',
        ContentType: contentType
    })

    const url = await getSignedUrl(s3client , command)
    return url
    
}

async function init() {
    console.log('main function');
    const signedUrl = await getObjectUrl("ch.png")
    console.log(signedUrl);
}

init()