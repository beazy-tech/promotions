import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toster } from "../../action";
const storage = getStorage();
const uploadFile = async (id: string, image: any) => {    
    try {
        const fileRef = ref(storage, `pomoter/${id}/${image.name}`);
        const snapshot = await uploadBytes(fileRef, image);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    }
    catch (err) {
        throw err;
    }
}
const updateFile = async (id: string, imageUrl: any, newImage: any, dispatch: Function) => {  
    try {        
        if(imageUrl.length>0 && newImage!==undefined)
        {   
            const imageref = ref(storage, `pomoter/${id}/${imageUrl}`);
            let imagedata = imageref.name.split("%2F");
            let imageIs = "";
            for (let i=0;i<imagedata.length; i++) {
                if (i < imagedata.length - 1) {
                    imageIs += imagedata[i] + "/";
                } else {
                    let imageName = "";
                    imagedata = imagedata[i].split("?");
                    imagedata = imagedata[0].split("%20");
                    for (let j=0;j<imagedata.length;j++) {
                        if(j < imagedata.length - 1)
                        {
                            imageName += imagedata[j] + " ";
                        }
                        else{
                            imageName+= imagedata[j]
                        }
                    }
                    imageIs += imageName;
                }
            }        
            
            const PrevfileRef = ref(storage, `${imageIs}`);
            try{
                deleteObject(PrevfileRef)
            }
            catch(err){
                console.log("some error Occured while deleting logo");
                
            }
            let data=await uploadFile(id,newImage)
            dispatch({type:"LOGO",payload:data})
            return data;

        }
        else if(newImage===undefined)
        {
            return imageUrl;
        }
        else{
            return await uploadFile(id,newImage);
        }
    } catch (err) {
        console.log("Some error occurred: ", err);
    }
    return "";
};

export { uploadFile, updateFile };