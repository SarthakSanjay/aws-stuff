import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3client = new S3Client({
    region: "ap-south-1",
    credentials:{
        accessKeyId:'',
        secretAccessKey:''
    }
})

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
    console.log(`
    url for upoloading
    `)
}