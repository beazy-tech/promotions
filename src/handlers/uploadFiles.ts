import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const uploadFile=async (id:string,image:any)=>{
    try{
        const storage = getStorage();
        const fileRef =ref(storage, `pomoter/${id}/${image.name}`);
        const snapshot=await uploadBytes(fileRef,image);
        const downloadURL=await getDownloadURL(snapshot.ref);
        return downloadURL;
    }
    catch(err){
        throw err;
    }
    
}
export default uploadFile;