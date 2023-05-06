import { useReducer, useEffect, useState, useRef } from "react";
import styles from "@/styles/businessProfile.module.scss";
import Image from "next/image";
import ModeIcon from "@mui/icons-material/Mode";
import ProfileSelectInput from "./Inputs/ProfileInputs/ProfileSelecInput";
import ProfileInput from "./Inputs/ProfileInputs/ProfileInput";
import promoterInfo from "@/handlers/promoterInfo";
import { useDispatch, useSelector } from "react-redux";
import { updateFile } from "@/handlers/uploadFiles";
import createPromoterAccount from "@/handlers/createPromoterAccount";
import { showProfile, toster } from "../../action";
import CloseIcon from '@mui/icons-material/Close';
const categories = [
  "Restaurant",
  "Hotel",
  "Salon",
  "Spa",
  "Gym",
  "School",
  "Other",
];
interface initalData {
  address: string;
  city: string;
  logo: string;
  mobile: string;
  name: string;
  state: string;
  type: string;
  zipcode: string;
}
const initalData: initalData = {
  address: "",
  city: "",
  logo: "",
  mobile: "",
  name: "",
  state: "",
  type: "",
  zipcode: "",
};
export default function BusinessProfile() {
  const userId = useSelector(
    (state: { rootReducer: { storeData: { userId: string } } }) =>
      state.rootReducer.storeData.userId
  );
  const dispatcher = useDispatch();
  const businessDetails = useSelector(
    (state: { rootReducer: { storeData: { businessDetails: any } } }) =>
      state.rootReducer.storeData.businessDetails
  );
  const tosterData = useSelector(
    (state: { rootReducer: { storeData: { toster: any } } }) =>
      state.rootReducer.storeData.toster
  );
  const [image, setImage] = useState<File>();
  const [previewimage, setPreviewImage] = useState<string>("");
  const logoInput = useRef(null);
  const reducer = (
    state: initalData,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case "ADDRESS":
        return { ...state, address: action.payload };
      case "CITY":
        return { ...state, city: action.payload };
      case "LOGO":
        return { ...state, logo: action.payload };
      case "MOBILE":
        return { ...state, mobile: action.payload };
      case "NAME":
        return { ...state, name: action.payload };
      case "STATE":
        return { ...state, state: action.payload };
      case "TYPE":
        return { ...state, type: action.payload };
      case "ZIPCODE":
        return { ...state, zipcode: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initalData);
  useEffect(() => {
    if (userId.length > 0) {
      promoterInfo(userId, dispatcher);
    }
  }, [userId]);
  useEffect(() => {
    if (
      businessDetails?.address?.length > 0 &&
      businessDetails?.name?.length > 0 &&
      businessDetails?.id?.length > 0
    ) {
      dispatch({ type: "ADDRESS", payload: businessDetails?.address });
      dispatch({ type: "CITY", payload: businessDetails?.city });
      dispatch({ type: "LOGO", payload: businessDetails?.logo });
      dispatch({ type: "MOBILE", payload: businessDetails?.mobile });
      dispatch({ type: "NAME", payload: businessDetails?.name });
      dispatch({ type: "STATE", payload: businessDetails?.state });
      dispatch({ type: "TYPE", payload: businessDetails?.type });
      dispatch({ type: "ZIPCODE", payload: businessDetails?.zipcode });
      setPreviewImage(businessDetails?.logo);
    }
  }, [businessDetails]);
  const onHandelSubmit = (e: any) => {
    e.preventDefault();
  };
  const closeProfilePage=()=>{    
    dispatcher(showProfile(false));
  }
  const updateData = async () => {
    try {
      createPromoterAccount(
        state,
        userId,
        dispatcher,
        await updateFile(userId, state?.logo, image, dispatch)
      );
      dispatch(
        toster({
          msg: "Data updated Successfully",
          type: "Success",
          showPopUp: true,
        })
      );
    } catch (err) {
      dispatch(
        toster({ msg: "Data update Failed", type: "Failure", showPopUp: true })
      );
    }
  };
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };
  useEffect(() => {
    if (tosterData.showPopUp) {
      setInterval(() => {
        dispatch(toster({ msg: "", type: "", showPopUp: false }));
      }, 2000);
    }
  }, [tosterData.showPopUp]);
  return (
    <>
      <div className={styles.businessProfile_page}>
        <div className={styles.businessProfile}>
          <h1 className={styles.businessProfile_Heading}>Business Profile</h1>
          <div className={styles.businessProfile_body}>
            <div className={styles.businessbody_head}>
              <div className={styles.businessbody_logo}>
                <Image
                  src={previewimage}
                  alt="none"
                  className={styles.businessbody_Image}
                  width={100}
                  height={100}
                />
                <button
                  className={styles.businessbody_Image_edit_btn}
                  onClick={(e: any) => logoInput?.current?.click()}
                >
                  <ModeIcon sx={{ fontSize: "16px", color: "white" }} />
                </button>
              </div>
              <div className={styles.businessbody_Name_address}>
                <p className={styles.businessbody_Name}>{state.name}</p>
                <p className={styles.businessbody_address}>
                  {state.address}, {state.city}, {state.zipcode}
                </p>
              </div>
            </div>
            <form
              className={styles.businessProfile_details_form}
              onSubmit={onHandelSubmit}
            >
              <span className={styles.businessProfile_details_form_col1}>
                <ProfileInput
                  width={"90%"}
                  Lable="Business Name"
                  Type="text"
                  Placeholder="Enter your business name *"
                  required={true}
                  dispatch={dispatch}
                  value={state.name}
                />
                <ProfileInput
                  width={"90%"}
                  Lable="Contact Number"
                  Type="text"
                  Placeholder="Enter your Contact Number *"
                  required={true}
                  dispatch={dispatch}
                  value={state.mobile}
                />
              </span>
              <span className={styles.businessProfile_details_form_col1}>
                <ProfileSelectInput
                  Label="Business Type"
                  Name="Business_type"
                  types={categories}
                  dispatch={dispatch}
                  State={state}
                />
                <ProfileInput
                  width={"90%"}
                  Lable="Business Address"
                  Type="text"
                  Placeholder="Enter your business address *"
                  required={true}
                  dispatch={dispatch}
                  value={state.address}
                />
              </span>
              <span className={styles.businessProfile_details_form_col1}>
                <ProfileInput
                  width={"90%"}
                  Lable="City"
                  Type="text"
                  Placeholder="Enter your City *"
                  required={true}
                  dispatch={dispatch}
                  value={state.city}
                />
                <ProfileInput
                  width={"90%"}
                  Lable="State"
                  Type="text"
                  Placeholder="Enter your State *"
                  required={true}
                  dispatch={dispatch}
                  value={state.state}
                />
              </span>
              <span className={styles.businessProfile_details_form_col2}>
                <ProfileInput
                  width={"90%"}
                  Lable="Pin Code"
                  Type="text"
                  Placeholder="Enter your Zip Code *"
                  required={true}
                  dispatch={dispatch}
                  value={state.zipcode}
                />
              </span>
              <input
                type="file"
                className={styles.businessProfile_logo_change}
                ref={logoInput}
                onChange={uploadImage}
              />
              <button className={styles.submitchanges} onClick={updateData}>
                Save Changes
              </button>
            </form>
          </div>
          <button onClick={closeProfilePage} className={styles.close_btn}>
            <CloseIcon className={styles.close_icons}/>
        </button>
        </div>
      </div>
    </>
  );
}
